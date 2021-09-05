package com.smartlead.api.lead.service;

import com.smartlead.common.entity.LeadTask;
import com.smartlead.common.vo.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface LeadService {

    LeadVO saveLead(LeadVO leadVO);

    LeadVO getLeadById(int leadId);

    List<LeadStageVO> getLeadStages();

    List<LeadSourceVO> getLeadSources();

    LeadStageVO getDefaultLeadStage();

    List<UserVO> getLeadOwners();

    PageableVO searchLeads(PageableVO pageableVO);

    LeadDocumentVO saveLeadDocument(LeadDocumentVO leadDocumentVO, MultipartFile file) throws IOException;

    List<LeadDocumentVO> getLeadDocuments(int leadId);

    List<DocumentTypeVO> getDocumentTypes();

    void deleteLeadDocument(int leadId, int leadDocumentId);

    LeadNoteVO saveLeadNote(LeadNoteVO leadNoteVO, MultipartFile file) throws IOException;

    List<LeadNoteVO> getLeadNotes(int id);

    void deleteLeadNote(int leadId, int leadNoteId);

    LeadTaskVO saveLeadTask(LeadTaskVO leadTaskVO, MultipartFile file) throws IOException;

    List<LeadTaskVO> getLeadTasks(int leadId, String status);

    void deleteLeadTask(int leadId, int leadTaskId);

    List<TaskSummaryVO> getTaskSummaryListForAdmin(List<UserVO> userVOList, String interval);

    List<LeadActivityVO> getLeadActivities(int leadId);

    TaskSummaryVO getTaskSummaryForUser(int userId, String interval);

    BusinessOverviewVO getBusinessOverviewForAdmin(String interval);

    DownloadableFileVO getFileForLeadTask(int leadTaskId);

    List<LeadTask> getAllPendingTasks();

    void setTaskStatusToOverdue(int leadTaskId);
}
