package com.smartlead.api.lead.repository;

import com.smartlead.common.entity.Lead;
import com.smartlead.common.entity.LeadNote;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface LeadNoteRepository extends CrudRepository<LeadNote, Integer> {

    LeadNote save(LeadNote leadNote);

    List<LeadNote> findByLead(Lead lead);
}
