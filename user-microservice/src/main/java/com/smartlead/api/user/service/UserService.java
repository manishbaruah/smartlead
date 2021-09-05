package com.smartlead.api.user.service;

import com.smartlead.common.vo.OrganizationVO;
import com.smartlead.common.vo.UserVO;

import java.util.List;

public interface UserService {

    UserVO saveUserDetails(UserVO userVO);

    List<OrganizationVO> getOrganizations();

    List<UserVO> getUsersWithRoleEmployee();
}
