package com.smartlead.api.lead.repository;

import com.smartlead.common.entity.LeadStage;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface LeadStageRepository extends CrudRepository<LeadStage, Integer> {

    List<LeadStage> findAll();

    LeadStage findById(int id);
}
