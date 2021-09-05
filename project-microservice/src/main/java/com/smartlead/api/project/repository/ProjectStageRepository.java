package com.smartlead.api.project.repository;

import com.smartlead.common.entity.ProjectStage;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ProjectStageRepository extends CrudRepository<ProjectStage, Integer> {

    List<ProjectStage> findAll();
}