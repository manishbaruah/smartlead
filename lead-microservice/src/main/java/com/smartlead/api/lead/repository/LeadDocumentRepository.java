package com.smartlead.api.lead.repository;

import com.smartlead.common.entity.Lead;
import com.smartlead.common.entity.LeadDocument;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface LeadDocumentRepository extends CrudRepository<LeadDocument, Integer> {

    LeadDocument save(LeadDocument leadDocument);

    List<LeadDocument> findByLead(Lead lead);
}
