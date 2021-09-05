package com.smartlead.common.vo;

public class LeadNoteVO {

    private int leadNoteId;
    private String note;
    private String noteAttachment;
    private String noteName;
    private String createdOn;
    private String createdBy;
    private String updatedOn;
    private String updatedBy;
    private LeadVO lead;

    public int getLeadNoteId() {
        return leadNoteId;
    }

    public void setLeadNoteId(int leadNoteId) {
        this.leadNoteId = leadNoteId;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public String getNoteAttachment() {
        return noteAttachment;
    }

    public void setNoteAttachment(String noteAttachment) {
        this.noteAttachment = noteAttachment;
    }

    public String getNoteName() {
        return noteName;
    }

    public void setNoteName(String noteName) {
        this.noteName = noteName;
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

    public LeadVO getLead() {
        return lead;
    }

    public void setLead(LeadVO lead) {
        this.lead = lead;
    }
}
