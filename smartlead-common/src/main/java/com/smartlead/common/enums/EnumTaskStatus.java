package com.smartlead.common.enums;

public enum EnumTaskStatus {
    COMPLETED("Completed"),
    PENDING("Pending"),
    OVERDUE("Overdue");

    public final String status;

    private EnumTaskStatus(String status) {
        this.status = status;
    }
}