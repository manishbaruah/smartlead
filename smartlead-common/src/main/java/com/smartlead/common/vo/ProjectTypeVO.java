package com.smartlead.common.vo;

public class ProjectTypeVO {

    private int projectTypeId;
    private String projectTypeName;

    public int getProjectTypeId() {
        return projectTypeId;
    }

    public void setProjectTypeId(int projectTypeId) {
        this.projectTypeId = projectTypeId;
    }

    public String getProjectTypeName() {
        return projectTypeName;
    }

    public void setProjectTypeName(String projectTypeName) {
        this.projectTypeName = projectTypeName;
    }

    @Override
    public String toString() {
        return "ProjectType{" +
                "projectTypeId=" + projectTypeId +
                ", projectTypeName='" + projectTypeName + '\'' +
                '}';
    }
}
