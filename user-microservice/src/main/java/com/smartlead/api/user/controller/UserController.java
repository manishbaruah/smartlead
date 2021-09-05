package com.smartlead.api.user.controller;

import com.smartlead.api.user.service.UserService;
import com.smartlead.common.vo.OrganizationVO;
import com.smartlead.common.vo.UserVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/organizations")
    public List<OrganizationVO> getOrganizations() {
        return userService.getOrganizations();
    }

    @PutMapping("/users/{id}")
    public UserVO saveUserDetails(@PathVariable int id, @RequestBody UserVO userVO) {
        userVO.setUserId(id);
        return userService.saveUserDetails(userVO);
    }

    @GetMapping("/employees")
    public List<UserVO> getUsersWithRoleEmployee() {
        return userService.getUsersWithRoleEmployee();
    }
}