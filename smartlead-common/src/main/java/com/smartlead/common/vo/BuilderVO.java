package com.smartlead.common.vo;

public class BuilderVO {

    private int builderId;
    private String builderName;

    public int getBuilderId() {
        return builderId;
    }

    public void setBuilderId(int builderId) {
        this.builderId = builderId;
    }

    public String getBuilderName() {
        return builderName;
    }

    public void setBuilderName(String builderName) {
        this.builderName = builderName;
    }

    @Override
    public String toString() {
        return "Builder{" +
                "builderId=" + builderId +
                ", builderName='" + builderName + '\'' +
                '}';
    }
}
