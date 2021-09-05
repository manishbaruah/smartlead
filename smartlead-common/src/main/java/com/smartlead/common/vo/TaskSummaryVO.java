package com.smartlead.common.vo;

public class TaskSummaryVO {

    private String user;
    private TaskInfoVO followUp;
    private TaskInfoVO phoneCall;
    private TaskInfoVO meeting;
    private TaskInfoVO email;

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public TaskInfoVO getFollowUp() {
        return followUp;
    }

    public void setFollowUp(TaskInfoVO followUp) {
        this.followUp = followUp;
    }

    public TaskInfoVO getPhoneCall() {
        return phoneCall;
    }

    public void setPhoneCall(TaskInfoVO phoneCall) {
        this.phoneCall = phoneCall;
    }

    public TaskInfoVO getMeeting() {
        return meeting;
    }

    public void setMeeting(TaskInfoVO meeting) {
        this.meeting = meeting;
    }

    public TaskInfoVO getEmail() {
        return email;
    }

    public void setEmail(TaskInfoVO email) {
        this.email = email;
    }
}
