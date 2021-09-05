package com.smartlead.api.lead.repository;

import com.smartlead.common.entity.DocumentType;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface DocumentTypeRepository extends CrudRepository<DocumentType, Integer> {

    List<DocumentType> findAll();
}
