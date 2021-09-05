package com.smartlead.api.project.repository;

import com.smartlead.common.entity.ProjectType;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ProjectTypeRepository extends CrudRepository<ProjectType, Integer> {

    List<ProjectType> findAll();
}