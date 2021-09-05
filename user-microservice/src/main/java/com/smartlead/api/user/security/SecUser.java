package com.smartlead.api.user.security;

import com.smartlead.common.vo.UserVO;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.util.Collection;
import java.util.List;

public class SecUser extends User {

    private int userId;
    private String firstName;
    private String lastName;
    private String email;
    private String mobile;
    private int orgId;
    private List<String> roles;

    public SecUser(String username, String password, Collection<? extends GrantedAuthority> authorities) {
        super(username, password, authorities);
    }

    public SecUser(String username, String password, boolean enabled, boolean accountNonExpired, boolean credentialsNonExpired, boolean accountNonLocked, Collection<? extends GrantedAuthority> authorities) {
        super(username, password, enabled, accountNonExpired, credentialsNonExpired, accountNonLocked, authorities);
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public int getOrgId() {
        return orgId;
    }

    public void setOrgId(int orgId) {
        this.orgId = orgId;
    }

    public List<String> getRoles() {
        return roles;
    }

    public void setRoles(List<String> roles) {
        this.roles = roles;
    }

    public UserVO getUserVO() {
        UserVO userVO = new UserVO();
        userVO.setUserId(getUserId());
        userVO.setUsername(getUsername());
        userVO.setOrgId(getOrgId());
        userVO.setEmail(getEmail());
        userVO.setFirstName(getFirstName());
        userVO.setLastName(getLastName());
        userVO.setMobile(getMobile());
        userVO.setRoles(getRoles());
        return userVO;
    }

    @Override
    public String toString() {
        return "UserVO{" +
                "userId=" + userId +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", mobile='" + mobile + '\'' +
                ", orgId=" + orgId +
                ", roles=" + roles +
                '}';
    }
}
