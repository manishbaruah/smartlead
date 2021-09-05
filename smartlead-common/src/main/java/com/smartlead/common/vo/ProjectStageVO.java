package com.smartlead.common.vo;

public class ProjectStageVO {

    private int projectStageId;
    private String projectStageName;

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

    @Override
    public String toString() {
        return "ProjectStage{" +
                "projectStageId=" + projectStageId +
                ", projectStageName='" + projectStageName + '\'' +
                '}';
    }
}
