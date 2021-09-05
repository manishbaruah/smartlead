package com.smartlead.api.project.repository;

import com.smartlead.common.entity.Amenity;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface AmenityRepository extends CrudRepository<Amenity, Integer> {

    List<Amenity> findAll();
}