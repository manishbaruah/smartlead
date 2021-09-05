package com.smartlead.api.user.service;

import com.smartlead.api.user.repository.OrganizationRepository;
import com.smartlead.api.user.repository.RoleRepository;
import com.smartlead.api.user.repository.UserRepository;
import com.smartlead.api.user.security.SecUser;
import com.smartlead.common.entity.Organization;
import com.smartlead.common.entity.Role;
import com.smartlead.common.entity.User;
import com.smartlead.common.vo.OrganizationVO;
import com.smartlead.common.vo.UserVO;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.dozer.Mapper;
import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import static java.util.Collections.emptyList;

@Service
public class UserServiceImpl implements UserDetailsService, UserService {

    @Autowired
    OrganizationRepository organizationRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    Mapper mapper;

    @Override
    public List<OrganizationVO> getOrganizations() {
        List<OrganizationVO> organizationVOList = new ArrayList();
        List<Organization> organizations = organizationRepository.findAll();
        if (CollectionUtils.isNotEmpty(organizations)) {
            for (Organization organization : organizations) {
                organizationVOList.add(mapper.map(organization, OrganizationVO.class));
            }
        }
        return organizationVOList;
    }

    @Override
    public List<UserVO> getUsersWithRoleEmployee() {
        List<UserVO> userVOList = new ArrayList();
        Role role = roleRepository.findByRoleName("Employee");
        Hibernate.initialize(role.getUsers());
        Set<User> users = role.getUsers();
        for (User user:users) {
            userVOList.add(mapper.map(user, UserVO.class));
        }
        return userVOList;
    }

    @Override
    public SecUser loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException(username);
        }

        Set<Role> roles = user.getRoles();
        List<String> roleNames = roles.stream()
                .map(Role::getRoleName)
                .collect(Collectors.toList());

        SecUser secUser = new SecUser(user.getUsername(), user.getPassword(), emptyList());
        secUser.setUserId(user.getUserId());
        secUser.setOrgId(user.getOrganization().getOrgId());
        secUser.setEmail(user.getEmail());
        secUser.setFirstName(user.getFirstName());
        secUser.setLastName(user.getLastName());
        secUser.setMobile(user.getMobile());
        secUser.setRoles(roleNames);
        return secUser;
    }

    @Override
    public UserVO saveUserDetails(UserVO userVO) {
        User user = userRepository.findByUserId(userVO.getUserId());
        if (isFieldUpdated(user.getFirstName(), userVO.getFirstName())) {
            user.setFirstName(userVO.getFirstName());
        }
        if (isFieldUpdated(user.getLastName(), userVO.getLastName())) {
            user.setLastName(userVO.getLastName());
        }
        if (isFieldUpdated(user.getMobile(), userVO.getMobile())) {
            user.setMobile(userVO.getMobile());
        }
        if (StringUtils.isNotBlank(userVO.getPassword())) {
            user.setPassword(new BCryptPasswordEncoder().encode(userVO.getPassword()));
        }
        user = userRepository.save(user);
        return mapper.map(user, UserVO.class);
    }

    private boolean isFieldUpdated(String original, String updated) {
        return !StringUtils.equals(original, updated);
    }
}