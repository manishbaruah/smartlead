package com.smartlead.common.vo;

import java.util.List;

public class ProjectVO {

    private int projectId;
    private String projectName;
    private ProjectTypeVO projectType;
    private ProjectStageVO projectStage;
    private String projectLocation;
    private BuilderVO builder;
    private int towers;
    private int wings;
    private int blocks;
    private int floors;
    private int units;
    private String description;
    private String createdOn;
    private String modifiedOn;
    private String createdBy;
    private String modifiedBy;
    List<AmenityVO> amenities;
    private String brochureName;

    public int getProjectId() {
        return projectId;
    }

    public void setProjectId(int projectId) {
        this.projectId = projectId;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public ProjectTypeVO getProjectType() {
        return projectType;
    }

    public void setProjectType(ProjectTypeVO projectType) {
        this.projectType = projectType;
    }

    public ProjectStageVO getProjectStage() {
        return projectStage;
    }

    public void setProjectStage(ProjectStageVO projectStage) {
        this.projectStage = projectStage;
    }

    public String getProjectLocation() {
        return projectLocation;
    }

    public void setProjectLocation(String projectLocation) {
        this.projectLocation = projectLocation;
    }

    public BuilderVO getBuilder() {
        return builder;
    }

    public void setBuilder(BuilderVO builder) {
        this.builder = builder;
    }

    public int getTowers() {
        return towers;
    }

    public void setTowers(int towers) {
        this.towers = towers;
    }

    public int getWings() {
        return wings;
    }

    public void setWings(int wings) {
        this.wings = wings;
    }

    public int getBlocks() {
        return blocks;
    }

    public void setBlocks(int blocks) {
        this.blocks = blocks;
    }

    public int getFloors() {
        return floors;
    }

    public void setFloors(int floors) {
        this.floors = floors;
    }

    public int getUnits() {
        return units;
    }

    public void setUnits(int units) {
        this.units = units;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(String createdOn) {
        this.createdOn = createdOn;
    }

    public String getModifiedOn() {
        return modifiedOn;
    }

    public void setModifiedOn(String modifiedOn) {
        this.modifiedOn = modifiedOn;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public String getModifiedBy() {
        return modifiedBy;
    }

    public void setModifiedBy(String modifiedBy) {
        this.modifiedBy = modifiedBy;
    }

    public List<AmenityVO> getAmenities() {
        return amenities;
    }

    public void setAmenities(List<AmenityVO> amenities) {
        this.amenities = amenities;
    }

    public String getBrochureName() {
        return brochureName;
    }

    public void setBrochureName(String brochureName) {
        this.brochureName = brochureName;
    }

    @Override
    public String toString() {
        return "ProjectVO{" +
                "projectId=" + projectId +
                ", projectName='" + projectName + '\'' +
                ", projectType=" + projectType +
                ", projectStage=" + projectStage +
                ", projectLocation='" + projectLocation + '\'' +
                ", builder=" + builder +
                ", towers=" + towers +
                ", wings=" + wings +
                ", blocks=" + blocks +
                ", floors=" + floors +
                ", units=" + units +
                ", description='" + description + '\'' +
                ", createdOn='" + createdOn + '\'' +
                ", modifiedOn='" + modifiedOn + '\'' +
                ", createdBy='" + createdBy + '\'' +
                ", modifiedBy='" + modifiedBy + '\'' +
                ", amenities=" + amenities +
                ", brochureName='" + brochureName + '\'' +
                '}';
    }
}
