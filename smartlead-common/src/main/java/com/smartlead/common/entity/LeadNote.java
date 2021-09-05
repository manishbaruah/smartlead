package com.smartlead.common.entity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "tbl_lead_note")
public class LeadNote {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "lead_note_id")
    private int leadNoteId;

    @Column(name = "note")
    private String note;

    @Column(name = "note_attachment")
    private byte[] noteAttachment;

    @Column(name = "note_name")
    private String noteName;

    @Column(name = "created_on")
    private Date createdOn;

    @Column(name = "created_by")
    private String createdBy;

    @Column(name = "updated_on")
    private Date updatedOn;

    @Column(name = "updated_by")
    private String updatedBy;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "lead_id")
    private Lead lead;

    public LeadNote() {
    }

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

    public byte[] getNoteAttachment() {
        return noteAttachment;
    }

    public void setNoteAttachment(byte[] noteAttachment) {
        this.noteAttachment = noteAttachment;
    }

    public String getNoteName() {
        return noteName;
    }

    public void setNoteName(String noteName) {
        this.noteName = noteName;
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

    public Lead getLead() {
        return lead;
    }

    public void setLead(Lead lead) {
        this.lead = lead;
    }
}
