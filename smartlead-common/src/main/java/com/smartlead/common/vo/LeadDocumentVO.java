package com.smartlead.common.vo;

public class LeadDocumentVO {

    private int leadDocumentId;
    private String description;
    private String documentName;
    private String createdOn;
    private String updatedOn;
    private String createdBy;
    private String updatedBy;
    private LeadVO lead;
    private DocumentTypeVO documentType;

    public int getLeadDocumentId() {
        return leadDocumentId;
    }

    public void setLeadDocumentId(int leadDocumentId) {
        this.leadDocumentId = leadDocumentId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDocumentName() {
        return documentName;
    }

    public void setDocumentName(String documentName) {
        this.documentName = documentName;
    }

    public String getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(String createdOn) {
        this.createdOn = createdOn;
    }

    public String getUpdatedOn() {
        return updatedOn;
    }

    public void setUpdatedOn(String updatedOn) {
        this.updatedOn = updatedOn;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
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

    public DocumentTypeVO getDocumentType() {
        return documentType;
    }

    public void setDocumentType(DocumentTypeVO documentType) {
        this.documentType = documentType;
    }
}
