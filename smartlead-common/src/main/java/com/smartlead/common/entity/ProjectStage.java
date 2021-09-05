package com.smartlead.common.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tbl_project_stage")
public class ProjectStage {

    @Id
    @Column(name = "project_stage_id")
    private int projectStageId;

    @Column(name = "project_stage_name")
    private String projectStageName;

    public ProjectStage() {
    }

    public int getProjectStageId() {
        return projectStageId;
    }

    public void setProjectStageId(int projectStageId) {
        this.projectStageId = projectStageId;
    }

    public String getProjectStageName() {
        return projectStageName;
    }

    public void setProjectStageName(String projectStageName) {
        this.projectStageName = projectStageName;
    }
}
