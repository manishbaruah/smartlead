package com.smartlead.common.vo;

public class LeadTaskVO {

    private int leadTaskId;
    private String taskType;
    private String subject;
    private String location;
    private String scheduleFrom;
    private String scheduleTo;
    private String description;
    private String createdOn;
    private String createdBy;
    private String updatedOn;
    private String updatedBy;
    private UserVO owner;
    private LeadVO lead;
    private UserVO organizer;
    private String marketingOfficer;
    private String attachmentName;
    private String status;
    private String completedOn;

    public int getLeadTaskId() {
        return leadTaskId;
    }

    public void setLeadTaskId(int leadTaskId) {
        this.leadTaskId = leadTaskId;
    }

    public String getTaskType() {
        return taskType;
    }

    public void setTaskType(String taskType) {
        this.taskType = taskType;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getScheduleFrom() {
        return scheduleFrom;
    }

    public void setScheduleFrom(String scheduleFrom) {
        this.scheduleFrom = scheduleFrom;
    }

    public String getScheduleTo() {
        return scheduleTo;
    }

    public void setScheduleTo(String scheduleTo) {
        this.scheduleTo = scheduleTo;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(String createdOn) {
        this.createdOn = createdOn;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public String getUpdatedOn() {
        return updatedOn;
    }

    public void setUpdatedOn(String updatedOn) {
        this.updatedOn = updatedOn;
    }

    public String getUpdatedBy() {
        return updatedBy;
    }

    public void setUpdatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
    }

    public UserVO getOwner() {
        return owner;
    }

    public void setOwner(UserVO owner) {
        this.owner = owner;
    }

    public LeadVO getLead() {
        return lead;
    }

    public void setLead(LeadVO lead) {
        this.lead = lead;
    }

    public UserVO getOrganizer() {
        return organizer;
    }

    public void setOrganizer(UserVO organizer) {
        this.organizer = organizer;
    }

    public String getMarketingOfficer() {
        return marketingOfficer;
    }

    public void setMarketingOfficer(String marketingOfficer) {
        this.marketingOfficer = marketingOfficer;
    }

    public String getAttachmentName() {
        return attachmentName;
    }

    public void setAttachmentName(String attachmentName) {
        this.attachmentName = attachmentName;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getCompletedOn() {
        return completedOn;
    }

    public void setCompletedOn(String completedOn) {
        this.completedOn = completedOn;
    }
}
