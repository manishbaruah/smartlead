package com.smartlead.api.lead.repository;

import com.smartlead.common.entity.Lead;
import com.smartlead.common.entity.LeadSource;
import com.smartlead.common.entity.LeadStage;
import com.smartlead.common.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.Date;
import java.util.List;

public interface LeadRepository extends CrudRepository<Lead, Integer> {

    Lead findById(int leadId);

    @Query("SELECT DISTINCT l.owner FROM Lead l")
    List<Object[]> getLeadOwners();

    @Query(value = "SELECT l.leadId, l.firstName, l.lastName, l.leadStage, l.owner, l.modifiedOn FROM Lead l ORDER BY l.modifiedOn DESC",
            countQuery = "SELECT COUNT(*) FROM Lead")
    Page<Object[]> findAllWithSelectedColumns(Pageable pageable);

    @Query("SELECT l.leadId, l.firstName, l.lastName, l.leadStage, l.owner, l.modifiedOn FROM Lead l JOIN l.leadStage st JOIN l.leadSource sr " +
            "JOIN l.owner o WHERE (l.firstName LIKE %:searchTerm% OR l.lastName LIKE %:searchTerm%) AND (:leadStage IS NULL OR l.leadStage = :leadStage) AND " +
            "(:leadSource IS NULL OR l.leadSource = :leadSource) AND (:owner IS NULL OR l.owner = :owner) ORDER BY l.modifiedOn DESC")
    Page<Object[]> searchWithSelectedColumns(Pageable pageable, @Param("searchTerm") String searchTerm, @Param("leadStage") LeadStage leadStage,
                                             @Param("leadSource") LeadSource leadSource, @Param("owner") User owner);

    @Query("SELECT count(*) FROM Lead l WHERE l.createdOn BETWEEN :dateFrom AND :dateTo")
    Integer countLeadsCreatedByInterval(@Param("dateFrom") Date dateFrom, @Param("dateTo") Date dateTo);

    @Query("SELECT count(*) FROM Lead l WHERE l.createdOn BETWEEN :dateFrom AND :dateTo")
    Integer countLeadsClosedByInterval(@Param("dateFrom") Date dateFrom, @Param("dateTo") Date dateTo);

}
