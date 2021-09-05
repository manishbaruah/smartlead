package com.smartlead.api.lead.repository;

import com.smartlead.common.entity.Lead;
import com.smartlead.common.entity.LeadTask;
import com.smartlead.common.entity.User;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.Date;
import java.util.List;

public interface LeadTaskRepository extends CrudRepository<LeadTask, Integer> {

    LeadTask findById(int leadTaskId);

    LeadTask save(LeadTask leadTask);

    @Query("SELECT lt FROM LeadTask lt WHERE lt.lead = :lead AND (:status IS NULL OR lt.status = :status) ORDER BY lt.scheduleFrom DESC")
    List<LeadTask> getLeadTasks(@Param("lead") Lead lead, @Param("status") String status);

    @Query("SELECT lt FROM LeadTask lt WHERE lt.status = ?1")
    List<LeadTask> getTasksByStatus(String status);

    @Transactional
    @Modifying
    @Query("UPDATE LeadTask lt SET lt.status = :status WHERE lt.leadTaskId = :leadTaskId")
    void updateTaskStatusById(@Param("leadTaskId") int leadTaskId, @Param("status") String status);

    @Query("SELECT count(*) FROM LeadTask lt WHERE (lt.status = 'Pending' OR lt.status = 'Overdue') AND lt.owner = :owner AND lt.taskType = :taskType")
    Integer countUserPendingAndOverdueTasksByType(@Param("owner") User owner, @Param("taskType") String taskType);

    @Query("SELECT count(*) FROM LeadTask lt WHERE (lt.status = 'Pending' OR lt.status = 'Overdue') AND lt.owner = :owner AND lt.taskType = :taskType" +
            " AND (lt.scheduleFrom BETWEEN :dateFrom AND :dateTo) AND (lt.scheduleTo IS NULL OR lt.scheduleTo BETWEEN :dateFrom AND :dateTo)")
    Integer countUserPendingAndOverdueTasksByTypeAndInterval(@Param("owner") User owner, @Param("taskType") String taskType,
                                                             @Param("dateFrom") Date dateFrom, @Param("dateTo") Date dateTo);

    @Query("SELECT count(*) FROM LeadTask lt WHERE (lt.status = 'Pending' OR lt.status = 'Overdue') AND lt.taskType = :taskType" +
            " AND (lt.scheduleFrom BETWEEN :dateFrom AND :dateTo) AND (lt.scheduleTo IS NULL OR lt.scheduleTo BETWEEN :dateFrom AND :dateTo)")
    Integer countAllPendingAndOverdueTasksByTypeAndInterval(@Param("taskType") String taskType, @Param("dateFrom") Date dateFrom,
                                                            @Param("dateTo") Date dateTo);
}
