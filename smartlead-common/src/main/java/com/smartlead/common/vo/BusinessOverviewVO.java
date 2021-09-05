package com.smartlead.common.vo;

public class BusinessOverviewVO {

    private int leadsNew;
    private int leadsClosed;
    private int leadsFollowUpOverdue;
    private int leadsMeetingOverdue;
    private int leadsPhoneOverdue;
    private int leadsEmailOverdue;

    public int getLeadsNew() {
        return leadsNew;
    }

    public void setLeadsNew(int leadsNew) {
        this.leadsNew = leadsNew;
    }

    public int getLeadsClosed() {
        return leadsClosed;
    }

    public void setLeadsClosed(int leadsClosed) {
        this.leadsClosed = leadsClosed;
    }

    public int getLeadsFollowUpOverdue() {
        return leadsFollowUpOverdue;
    }

    public void setLeadsFollowUpOverdue(int leadsFollowUpOverdue) {
        this.leadsFollowUpOverdue = leadsFollowUpOverdue;
    }

    public int getLeadsMeetingOverdue() {
        return leadsMeetingOverdue;
    }

    public void setLeadsMeetingOverdue(int leadsMeetingOverdue) {
        this.leadsMeetingOverdue = leadsMeetingOverdue;
    }

    public int getLeadsPhoneOverdue() {
        return leadsPhoneOverdue;
    }

    public void setLeadsPhoneOverdue(int leadsPhoneOverdue) {
        this.leadsPhoneOverdue = leadsPhoneOverdue;
    }

    public int getLeadsEmailOverdue() {
        return leadsEmailOverdue;
    }

    public void setLeadsEmailOverdue(int leadsEmailOverdue) {
        this.leadsEmailOverdue = leadsEmailOverdue;
    }
}
