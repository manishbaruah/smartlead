package com.smartlead.common.entity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "tbl_lead_task")
public class LeadTask {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "lead_task_id")
    private int leadTaskId;

    @Column(name = "task_type")
    private String taskType;

    @Column(name = "subject")
    private String subject;

    @Column(name = "location")
    private String location;

    @Column(name = "schedule_from")
    private Date scheduleFrom;

    @Column(name = "schedule_to")
    private Date scheduleTo;

    @Column(name = "attachment")
    private byte[] attachment;

    @Column(name = "attachment_name")
    private String attachmentName;

    @Column(name = "description")
    private String description;

    @Column(name = "created_on", updatable = false)
    private Date createdOn;

    @Column(name = "created_by", updatable = false)
    private String createdBy;

    @Column(name = "updated_on")
    private Date updatedOn;

    @Column(name = "updated_by")
    private String updatedBy;

    @OneToOne
    @JoinColumn(name = "owner")
    private User owner;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "lead_id")
    private Lead lead;

    @OneToOne
    @JoinColumn(name = "organizer")
    private User organizer;

    @Column(name = "marketing_officer")
    private String marketingOfficer;

    @Column(name = "status")
    private String status;

    @Column(name = "completed_on")
    private Date completedOn;

    public LeadTask() {
    }

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

    public Date getScheduleFrom() {
        return scheduleFrom;
    }

    public void setScheduleFrom(Date scheduleFrom) {
        this.scheduleFrom = scheduleFrom;
    }

    public Date getScheduleTo() {
        return scheduleTo;
    }

    public void setScheduleTo(Date scheduleTo) {
        this.scheduleTo = scheduleTo;
    }

    public byte[] getAttachment() {
        return attachment;
    }

    public void setAttachment(byte[] attachment) {
        this.attachment = attachment;
    }

    public String getAttachmentName() {
        return attachmentName;
    }

    public void setAttachmentName(String attachmentName) {
        this.attachmentName = attachmentName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(Date createdOn) {
        this.createdOn = createdOn;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public Date getUpdatedOn() {
        return updatedOn;
    }

    public void setUpdatedOn(Date updatedOn) {
        this.updatedOn = updatedOn;
    }

    public String getUpdatedBy() {
        return updatedBy;
    }

    public void setUpdatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
    }

    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }

    public Lead getLead() {
        return lead;
    }

    public void setLead(Lead lead) {
        this.lead = lead;
    }

    public User getOrganizer() {
        return organizer;
    }

    public void setOrganizer(User organizer) {
        this.organizer = organizer;
    }

    public String getMarketingOfficer() {
        return marketingOfficer;
    }

    public void setMarketingOfficer(String marketingOfficer) {
        this.marketingOfficer = marketingOfficer;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getCompletedOn() {
        return completedOn;
    }

    public void setCompletedOn(Date completedOn) {
        this.completedOn = completedOn;
    }
}
