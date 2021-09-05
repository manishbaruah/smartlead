package com.smartlead.api.lead.service;

import com.smartlead.api.lead.repository.*;
import com.smartlead.common.entity.*;
import com.smartlead.common.enums.EnumTaskStatus;
import com.smartlead.common.enums.EnumTaskType;
import com.smartlead.common.vo.*;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.time.DateUtils;
import org.dozer.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.*;

@Service
public class LeadServiceImpl implements LeadService {

    @Autowired
    private LeadRepository leadRepository;

    @Autowired
    private LeadSourceRepository leadSourceRepository;

    @Autowired
    private LeadStageRepository leadStageRepository;

    @Autowired
    private LeadDocumentRepository leadDocumentRepository;

    @Autowired
    private DocumentTypeRepository documentTypeRepository;

    @Autowired
    private LeadNoteRepository leadNoteRepository;

    @Autowired
    private LeadTaskRepository leadTaskRepository;

    @Autowired
    private LeadActivityRepository leadActivityRepository;

    @Autowired
    private Mapper mapper;

    @Override
    public LeadVO saveLead(LeadVO leadVO) {
        Lead lead;
        Date now = new Date();
        if (leadVO.getLeadId() == 0) {
            lead = mapper.map(leadVO, Lead.class);
            lead.setCreatedOn(now);
        } else {
            lead = leadRepository.findById(leadVO.getLeadId());
            lead.setFirstName(leadVO.getFirstName());
            lead.setLastName(leadVO.getLastName());
            LeadStage stage = mapper.map(leadVO.getLeadStage(), LeadStage.class);
            lead.setLeadStage(stage);
        }
        lead.setModifiedOn(now);

        mapInterestedProjects(leadVO, lead);

        lead = leadRepository.save(lead);
        return mapper.map(lead, LeadVO.class);
    }

    @Override
    public LeadVO getLeadById(int leadId) {
        Lead lead = leadRepository.findById(leadId);
        LeadVO leadVO = mapper.map(lead, LeadVO.class);
        mapInterestedProjectVOs(lead, leadVO);
        return leadVO;
    }

    @Override
    public List<LeadStageVO> getLeadStages() {
        List<LeadStageVO> leadStageVOList = new ArrayList();
        List<LeadStage> leadStages = leadStageRepository.findAll();
        if (CollectionUtils.isNotEmpty(leadStages)) {
            for (LeadStage leadStage : leadStages) {
                leadStageVOList.add(mapper.map(leadStage, LeadStageVO.class));
            }
        }
        return leadStageVOList;
    }

    @Override
    public List<LeadSourceVO> getLeadSources() {
        List<LeadSourceVO> leadSourceVOList = new ArrayList();
        List<LeadSource> leadSources = leadSourceRepository.findAll();
        if (CollectionUtils.isNotEmpty(leadSources)) {
            for (LeadSource leadSource : leadSources) {
                leadSourceVOList.add(mapper.map(leadSource, LeadSourceVO.class));
            }
        }
        return leadSourceVOList;
    }

    @Override
    public LeadStageVO getDefaultLeadStage() {
        LeadStage leadStage = leadStageRepository.findById(1);
        return mapper.map(leadStage, LeadStageVO.class);
    }

    @Override
    public List<UserVO> getLeadOwners() {
        List<UserVO> userVOList = new ArrayList();
        List<Object[]> arrColumnsList = leadRepository.getLeadOwners();
        if (CollectionUtils.isNotEmpty(arrColumnsList)) {
            for (Object[] arrColumns : arrColumnsList) {
                User user = (User) arrColumns[0];
                userVOList.add(mapper.map(user, UserVO.class));
            }
        }
        return userVOList;
    }

    @Override
    public PageableVO searchLeads(PageableVO pageableVO) {
        List<LeadVO> leadVOList = new ArrayList();
        Page<Object[]> result;
        SearchVO searchVO = mapper.map(pageableVO.getRequest(), SearchVO.class);
        String searchTerm = searchVO.getSearchTerm();
        List<FieldFilterVO> fieldFilterVOList = searchVO.getFieldFilters();
        if (StringUtils.isNotBlank(searchTerm) || CollectionUtils.isNotEmpty(fieldFilterVOList)) {
            Pageable pageable = PageRequest.of(pageableVO.getPage(), pageableVO.getSize());
            LeadStage leadStage = null;
            LeadSource leadSource = null;
            User owner = null;
            for (FieldFilterVO fieldFilterVO : fieldFilterVOList) {
                if (fieldFilterVO.getFieldName().equals("leadStage") && fieldFilterVO.getFieldValue() != 0) {
                    leadStage = new LeadStage();
                    leadStage.setStageId(fieldFilterVO.getFieldValue());
                } else if (fieldFilterVO.getFieldName().equals("leadSource") && fieldFilterVO.getFieldValue() != 0) {
                    leadSource = new LeadSource();
                    leadSource.setSourceId(fieldFilterVO.getFieldValue());
                } else if (fieldFilterVO.getFieldName().equals("owner") && fieldFilterVO.getFieldValue() != 0) {
                    owner = new User();
                    owner.setUserId(fieldFilterVO.getFieldValue());
                }
            }
            result = leadRepository.searchWithSelectedColumns(pageable, searchTerm, leadStage, leadSource, owner);
        } else {
            result = leadRepository.findAllWithSelectedColumns(PageRequest.of(pageableVO.getPage(), pageableVO.getSize()));
        }
        if (result != null && result.getNumberOfElements() > 0) {
            for (Object[] arrColumns : result.getContent()) {
                Lead lead = new Lead();
                lead.setLeadId((Integer) arrColumns[0]);
                lead.setFirstName((String) arrColumns[1]);
                lead.setLastName((String) arrColumns[2]);
                lead.setLeadStage((LeadStage) arrColumns[3]);
                lead.setOwner((User) arrColumns[4]);
                lead.setModifiedOn((Date) arrColumns[5]);
                leadVOList.add(mapper.map(lead, LeadVO.class));
            }
        }
        pageableVO.setResult(leadVOList);
        pageableVO.setTotal(result.getTotalElements());
        return pageableVO;
    }

    @Override
    public LeadDocumentVO saveLeadDocument(LeadDocumentVO leadDocumentVO, MultipartFile file) throws IOException {
        LeadDocument leadDocument = mapper.map(leadDocumentVO, LeadDocument.class);
        Date now = new Date();
        leadDocument.setCreatedOn(now);
        leadDocument.setUpdatedOn(now);
        leadDocument.setDocumentName(file.getOriginalFilename());
        leadDocument.setDocument(file.getBytes());
        leadDocument = leadDocumentRepository.save(leadDocument);
        saveLeadActivity(leadDocument.getLead(), "Document added: " + file.getOriginalFilename(), leadDocument.getCreatedBy());
        return mapper.map(leadDocument, LeadDocumentVO.class);
    }

    @Override
    public List<LeadDocumentVO> getLeadDocuments(int leadId) {
        List<LeadDocumentVO> leadDocumentVOList = new ArrayList();
        Lead lead = leadRepository.findById(leadId);
        List<LeadDocument> leadDocuments = leadDocumentRepository.findByLead(lead);
        if (CollectionUtils.isNotEmpty(leadDocuments)) {
            for (LeadDocument leadDocument : leadDocuments) {
                leadDocumentVOList.add(mapper.map(leadDocument, LeadDocumentVO.class));
            }
        }
        return leadDocumentVOList;
    }

    @Override
    public List<DocumentTypeVO> getDocumentTypes() {
        List<DocumentTypeVO> documentTypeVOList = new ArrayList();
        List<DocumentType> documentTypeList = documentTypeRepository.findAll();
        if (CollectionUtils.isNotEmpty(documentTypeList)) {
            for (DocumentType documentType : documentTypeList) {
                documentTypeVOList.add(mapper.map(documentType, DocumentTypeVO.class));
            }
        }
        return documentTypeVOList;
    }

    @Override
    public void deleteLeadDocument(int leadId, int leadDocumentId) {
        leadDocumentRepository.deleteById(leadDocumentId);
    }

    @Override
    public LeadNoteVO saveLeadNote(LeadNoteVO leadNoteVO, MultipartFile file) throws IOException {
        LeadNote leadNote = mapper.map(leadNoteVO, LeadNote.class);
        Date now = new Date();
        leadNote.setCreatedOn(now);
        leadNote.setUpdatedOn(now);
        leadNote.setNoteName(file.getOriginalFilename());
        leadNote.setNoteAttachment(file.getBytes());
        leadNote = leadNoteRepository.save(leadNote);
        saveLeadActivity(leadNote.getLead(), "Note added: " + file.getOriginalFilename(), leadNote.getCreatedBy());
        return mapper.map(leadNote, LeadNoteVO.class);
    }

    @Override
    public List<LeadNoteVO> getLeadNotes(int leadId) {
        List<LeadNoteVO> leadNoteVOList = new ArrayList();
        Lead lead = leadRepository.findById(leadId);
        List<LeadNote> leadNotes = leadNoteRepository.findByLead(lead);
        if (CollectionUtils.isNotEmpty(leadNotes)) {
            for (LeadNote leadNote : leadNotes) {
                leadNoteVOList.add(mapper.map(leadNote, LeadNoteVO.class));
            }
        }
        return leadNoteVOList;
    }

    @Override
    public void deleteLeadNote(int leadId, int leadNoteId) {
        leadNoteRepository.deleteById(leadNoteId);
    }

    @Override
    public LeadTaskVO saveLeadTask(LeadTaskVO leadTaskVO, MultipartFile file) throws IOException {
        LeadTask leadTask = mapper.map(leadTaskVO, LeadTask.class);
        Date now = new Date();
        boolean taskCompleted = false;
        if (leadTaskVO.getLeadTaskId() == 0) {
            leadTask.setStatus(EnumTaskStatus.PENDING.status);
            leadTask.setCreatedOn(now);
        }
        leadTask.setUpdatedOn(now);
        if (file != null) {
            leadTask.setAttachment(file.getBytes());
            leadTask.setAttachmentName(file.getOriginalFilename());
        }
        if (leadTask.getStatus().equals(EnumTaskStatus.COMPLETED.status) && leadTask.getCompletedOn() == null) {
            leadTask.setCompletedOn(now);
            taskCompleted = true;
        }

        if (leadTaskVO.getLeadTaskId() == 0) {
            if (leadTask.getScheduleFrom().before(now)) {
                throw new IllegalArgumentException("Schedule date cannot be a past value");
            }
            if (leadTask.getScheduleTo() != null && leadTask.getScheduleTo().before(leadTask.getScheduleFrom())) {
                throw new IllegalArgumentException("Schedule-to date cannot be before Schedule-from date");
            }
        }

        leadTask = leadTaskRepository.save(leadTask);

        if (leadTaskVO.getLeadTaskId() == 0) {
            saveLeadActivity(leadTask.getLead(), "Task added: " + leadTask.getSubject(), leadTask.getCreatedBy());
        } else {
            if (taskCompleted) {
                saveLeadActivity(leadTask.getLead(), "Task completed: " + leadTask.getSubject(), leadTask.getCreatedBy());
            }
        }

        return mapper.map(leadTask, LeadTaskVO.class);
    }

    @Override
    public List<LeadTaskVO> getLeadTasks(int leadId, String status) {
        List<LeadTaskVO> leadTaskVOList = new ArrayList();
        Lead lead = leadRepository.findById(leadId);
        if (StringUtils.isBlank(status)) {
            status = null;
        }
        List<LeadTask> leadTasks = leadTaskRepository.getLeadTasks(lead, status);
        if (CollectionUtils.isNotEmpty(leadTasks)) {
            for (LeadTask leadTask : leadTasks) {
                leadTaskVOList.add(mapper.map(leadTask, LeadTaskVO.class));
            }
        }
        return leadTaskVOList;
    }

    @Override
    public void deleteLeadTask(int leadId, int leadTaskId) {
        leadTaskRepository.deleteById(leadTaskId);
    }

    @Override
    public List<LeadActivityVO> getLeadActivities(int leadId) {
        List<LeadActivityVO> leadActivityVOList = new ArrayList();
        Lead lead = leadRepository.findById(leadId);
        List<LeadActivity> leadActivityList = leadActivityRepository.getLeadActivities(lead);
        if (CollectionUtils.isNotEmpty(leadActivityList)) {
            for (LeadActivity leadActivity : leadActivityList) {
                leadActivityVOList.add(mapper.map(leadActivity, LeadActivityVO.class));
            }
        }
        return leadActivityVOList;
    }

    @Override
    public List<TaskSummaryVO> getTaskSummaryListForAdmin(List<UserVO> userVOList, String interval) {
        List<TaskSummaryVO> taskSummaryVOList = new ArrayList();
        for (UserVO userVO : userVOList) {
            TaskSummaryVO taskSummaryVO = getTaskSummaryForUser(userVO.getUserId(), interval);
            taskSummaryVO.setUser(userVO.getUsername());
            taskSummaryVOList.add(taskSummaryVO);
        }
        return taskSummaryVOList;
    }

    @Override
    public TaskSummaryVO getTaskSummaryForUser(int userId, String interval) {
        User user = new User();
        user.setUserId(userId);
        Date start = getStartDateForInterval(interval);
        Date end = getEndDateForInterval(interval);

        TaskSummaryVO taskSummaryVO = new TaskSummaryVO();
        TaskInfoVO followUp = new TaskInfoVO();
        followUp.setPending(leadTaskRepository.countUserPendingAndOverdueTasksByTypeAndInterval(user, EnumTaskType.FOLLOW_UP.type, start, end));
        followUp.setTotal(leadTaskRepository.countUserPendingAndOverdueTasksByType(user, EnumTaskType.FOLLOW_UP.type));
        TaskInfoVO phoneCall = new TaskInfoVO();
        phoneCall.setPending(leadTaskRepository.countUserPendingAndOverdueTasksByTypeAndInterval(user, EnumTaskType.PHONE_CALL.type, start, end));
        phoneCall.setTotal(leadTaskRepository.countUserPendingAndOverdueTasksByType(user, EnumTaskType.PHONE_CALL.type));
        TaskInfoVO meeting = new TaskInfoVO();
        meeting.setPending(leadTaskRepository.countUserPendingAndOverdueTasksByTypeAndInterval(user, EnumTaskType.MEETING.type, start, end));
        meeting.setTotal(leadTaskRepository.countUserPendingAndOverdueTasksByType(user, EnumTaskType.MEETING.type));
        TaskInfoVO email = new TaskInfoVO();
        email.setPending(leadTaskRepository.countUserPendingAndOverdueTasksByTypeAndInterval(user, EnumTaskType.EMAIL.type, start, end));
        email.setTotal(leadTaskRepository.countUserPendingAndOverdueTasksByType(user, EnumTaskType.EMAIL.type));

        taskSummaryVO.setFollowUp(followUp);
        taskSummaryVO.setPhoneCall(phoneCall);
        taskSummaryVO.setMeeting(meeting);
        taskSummaryVO.setEmail(email);
        return taskSummaryVO;
    }

    @Override
    public BusinessOverviewVO getBusinessOverviewForAdmin(String interval) {
        Date start = getStartDateForInterval(interval);
        Date end = getEndDateForInterval(interval);
        BusinessOverviewVO businessOverviewVO = new BusinessOverviewVO();
        businessOverviewVO.setLeadsNew(leadRepository.countLeadsCreatedByInterval(start, end));
        //businessOverviewVO.setLeadsClosed(leadRepository.countLeadsClosedByInterval(start, end));
        businessOverviewVO.setLeadsFollowUpOverdue(leadTaskRepository.countAllPendingAndOverdueTasksByTypeAndInterval(EnumTaskType.FOLLOW_UP.type, start, end));
        businessOverviewVO.setLeadsMeetingOverdue(leadTaskRepository.countAllPendingAndOverdueTasksByTypeAndInterval(EnumTaskType.MEETING.type, start, end));
        businessOverviewVO.setLeadsPhoneOverdue(leadTaskRepository.countAllPendingAndOverdueTasksByTypeAndInterval(EnumTaskType.PHONE_CALL.type, start, end));
        businessOverviewVO.setLeadsEmailOverdue(leadTaskRepository.countAllPendingAndOverdueTasksByTypeAndInterval(EnumTaskType.EMAIL.type, start, end));
        return businessOverviewVO;
    }

    @Override
    public DownloadableFileVO getFileForLeadTask(int leadTaskId) {
        LeadTask leadTask = leadTaskRepository.findById(leadTaskId);
        DownloadableFileVO downloadableFileVO = new DownloadableFileVO();
        downloadableFileVO.setFilename(leadTask.getAttachmentName());
        downloadableFileVO.setResource(new ByteArrayResource(leadTask.getAttachment()));
        return downloadableFileVO;
    }

    @Override
    public List<LeadTask> getAllPendingTasks() {
        return leadTaskRepository.getTasksByStatus(EnumTaskStatus.PENDING.status);
    }

    @Override
    public void setTaskStatusToOverdue(int leadTaskId) {
        leadTaskRepository.updateTaskStatusById(leadTaskId, EnumTaskStatus.OVERDUE.status);
    }

    private LeadActivity saveLeadActivity(Lead lead, String description, String createdBy) {
        LeadActivity leadActivity = new LeadActivity();
        leadActivity.setLead(lead);
        leadActivity.setActivityDescription(description);
        leadActivity.setCreatedBy(createdBy);
        leadActivity.setCreatedOn(new Date());
        return leadActivityRepository.save(leadActivity);
    }

    private void mapInterestedProjects(LeadVO leadVO, Lead lead) {
        if (CollectionUtils.isNotEmpty(leadVO.getInterestedProjects())) {
            Set<Project> projectSet = new HashSet();
            for (ProjectVO projectVO : leadVO.getInterestedProjects()) {
                projectSet.add(mapper.map(projectVO, Project.class));
            }
            lead.setInterestedProjects(projectSet);
        }
    }

    private void mapInterestedProjectVOs(Lead lead, LeadVO leadVO) {
        if (CollectionUtils.isNotEmpty(lead.getInterestedProjects())) {
            List<ProjectVO> projectVOSet = new ArrayList();
            for (Project project : lead.getInterestedProjects()) {
                projectVOSet.add(mapper.map(project, ProjectVO.class));
            }
            leadVO.setInterestedProjects(projectVOSet);
        }
    }

    private Date getStartDateForInterval(String interval) {
        Calendar cal = getCalendarForNow();
        if (interval.equals("today") || interval.equals("daily")) {
            cal.set(Calendar.HOUR_OF_DAY, cal.getActualMinimum(Calendar.HOUR_OF_DAY));
        } else if (interval.equals("week") || interval.equals("weekly")) {
            cal.set(Calendar.DAY_OF_WEEK, cal.getActualMinimum(Calendar.DAY_OF_WEEK));
        } else if (interval.equals("month") || interval.equals("monthly")) {
            cal.set(Calendar.DAY_OF_MONTH, cal.getActualMinimum(Calendar.DAY_OF_MONTH));
        }
        setTimeToBeginningOfDay(cal);
        return cal.getTime();
    }

    private Date getEndDateForInterval(String interval) {
        Calendar cal = getCalendarForNow();
        if (interval.equals("today") || interval.equals("daily")) {
            cal.set(Calendar.HOUR_OF_DAY, cal.getActualMaximum(Calendar.HOUR_OF_DAY));
        } else if (interval.equals("week") || interval.equals("weekly")) {
            cal.set(Calendar.DAY_OF_WEEK, cal.getActualMaximum(Calendar.DAY_OF_WEEK));
        } else if (interval.equals("month") || interval.equals("monthly")) {
            cal.set(Calendar.DAY_OF_MONTH, cal.getActualMaximum(Calendar.DAY_OF_MONTH));
        }
        setTimeToEndofDay(cal);
        return cal.getTime();
    }

    private static Calendar getCalendarForNow() {
        Calendar cal = Calendar.getInstance();
        cal.setTime(new Date());
        return cal;
    }

    private static void setTimeToBeginningOfDay(Calendar calendar) {
        calendar.set(Calendar.HOUR_OF_DAY, 0);
        calendar.set(Calendar.MINUTE, 0);
        calendar.set(Calendar.SECOND, 0);
        calendar.set(Calendar.MILLISECOND, 0);
    }

    private static void setTimeToEndofDay(Calendar calendar) {
        calendar.set(Calendar.HOUR_OF_DAY, 23);
        calendar.set(Calendar.MINUTE, 59);
        calendar.set(Calendar.SECOND, 59);
        calendar.set(Calendar.MILLISECOND, 999);
    }
}