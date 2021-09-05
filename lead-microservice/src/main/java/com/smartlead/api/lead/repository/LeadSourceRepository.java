package com.smartlead.api.lead.repository;

import com.smartlead.common.entity.LeadSource;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface LeadSourceRepository extends CrudRepository<LeadSource, Integer> {

    List<LeadSource> findAll();
}
