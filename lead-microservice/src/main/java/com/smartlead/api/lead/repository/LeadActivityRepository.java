package com.smartlead.api.lead.repository;

import com.smartlead.common.entity.Lead;
import com.smartlead.common.entity.LeadActivity;
import com.smartlead.common.entity.LeadSource;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface LeadActivityRepository extends CrudRepository<LeadActivity, Integer> {

    LeadActivity save(LeadActivity leadActivity);

    @Query("SELECT la FROM LeadActivity la WHERE la.lead=?1 ORDER BY la.createdOn DESC")
    List<LeadActivity> getLeadActivities(Lead lead);
    //List<LeadActivity> findByLeadByOrderByCreatedOnDesc(Lead lead);
}
