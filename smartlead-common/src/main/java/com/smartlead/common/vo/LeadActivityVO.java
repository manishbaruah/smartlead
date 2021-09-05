package com.smartlead.common.vo;

public class LeadActivityVO {

    private int leadActivityId;
    private String activityDescription;
    private String createdOn;
    private String createdBy;
    private LeadVO lead;

    public int getLeadActivityId() {
        return leadActivityId;
    }

    public void setLeadActivityId(int leadActivityId) {
        this.leadActivityId = leadActivityId;
    }

    public String getActivityDescription() {
        return activityDescription;
    }

    public void setActivityDescription(String activityDescription) {
        this.activityDescription = activityDescription;
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

    public LeadVO getLead() {
        return lead;
    }

    public void setLead(LeadVO lead) {
        this.lead = lead;
    }
}
