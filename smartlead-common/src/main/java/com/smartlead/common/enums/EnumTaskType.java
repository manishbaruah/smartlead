package com.smartlead.common.enums;

public enum EnumTaskType {

    MEETING("meeting"),
    FOLLOW_UP("follow-up"),
    SITE_VISIT("site-visit"),
    PHONE_CALL("phone-call"),
    EMAIL("email");

    public final String type;

    private EnumTaskType(String type) {
        this.type = type;
    }

}
