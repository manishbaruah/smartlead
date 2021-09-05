package com.smartlead.api.project.repository;

import com.smartlead.common.entity.Builder;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface BuilderRepository extends CrudRepository<Builder, Integer> {

    List<Builder> findAll();
}