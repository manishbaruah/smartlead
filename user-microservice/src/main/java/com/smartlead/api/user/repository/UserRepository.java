package com.smartlead.api.user.repository;

import com.smartlead.common.entity.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {

    User findByUsername(String username);

    User findByUserId(int userId);
}
