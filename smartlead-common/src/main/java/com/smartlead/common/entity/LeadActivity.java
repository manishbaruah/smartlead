package com.smartlead.common.entity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "tbl_lead_activity")
public class LeadActivity {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "lead_activity_id")
    private int leadActivityId;

    @Column(name = "activity_desc")
    private String activityDescription;

    @Column(name = "created_on")
    private Date createdOn;

    @Column(name = "created_by")
    private String createdBy;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "lead_id")
    private Lead lead;

    public LeadActivity() {
    }

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

    public Lead getLead() {
        return lead;
    }

    public void setLead(Lead lead) {
        this.lead = lead;
    }
}
