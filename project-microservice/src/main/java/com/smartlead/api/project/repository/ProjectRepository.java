package com.smartlead.api.project.repository;

import com.smartlead.common.entity.Project;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ProjectRepository extends CrudRepository<Project, Integer> {

    @Query("SELECT p.projectId, p.projectName, p.projectType, p.projectStage, p.projectLocation, p.builder FROM Project p " +
            "JOIN p.projectType pt JOIN p.projectStage ps JOIN p.builder b WHERE p.projectName LIKE %?1% OR pt.projectTypeName LIKE %?1% " +
            "OR ps.projectStageName LIKE %?1% OR p.projectLocation LIKE %?1% OR b.builderName LIKE %?1% ORDER BY p.modifiedOn DESC")
    List<Object[]> searchWithSelectedColumns(String searchTerm);

    @Query("SELECT p.projectId, p.projectName, p.projectType, p.projectStage, p.projectLocation, p.builder FROM Project p ORDER BY p.modifiedOn DESC")
    List<Object[]> findAllWithSelectedColumns();

    Project findById(int projectId);

}
