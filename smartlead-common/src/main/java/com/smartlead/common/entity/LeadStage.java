package com.smartlead.common.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tbl_lead_stage")
public class LeadStage {

    @Id
    @Column(name = "lead_stage_id")
    private int stageId;

    @Column(name = "lead_stage_name")
    private String stageName;

    public LeadStage() {
    }

    public int getStageId() {
        return stageId;
    }

    public void setStageId(int stageId) {
        this.stageId = stageId;
    }

    public String getStageName() {
        return stageName;
    }

    public void setStageName(String stageName) {
        this.stageName = stageName;
    }
}
