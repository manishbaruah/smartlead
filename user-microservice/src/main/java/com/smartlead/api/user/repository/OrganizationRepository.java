package com.smartlead.api.user.repository;

import com.smartlead.common.entity.Organization;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface OrganizationRepository extends CrudRepository<Organization, Integer> {

    List<Organization> findAll();
}