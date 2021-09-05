package com.smartlead.common.vo;

import java.util.List;

public class LeadVO {

    private int leadId;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private String company;
    private String website;
    private boolean doNotSMS;
    private boolean doNotTrack;
    private boolean doNotEmail;
    private boolean doNotCall;
    private LeadSourceVO leadSource;
    private String sourceCampaign;
    private String mobile;
    private String sourceMedium;
    private String jobTitle;
    private LeadStageVO leadStage;
    private UserVO owner;
    private String address;
    private String city;
    private String state;
    private String zip;
    private String country;
    private List<ProjectVO> interestedProjects;
    private String notes;
    private String interestRequirement;
    private String createdOn;
    private String modifiedOn;
    private String createdBy;
    private String modifiedBy;

    public int getLeadId() {
        return leadId;
    }

    public void setLeadId(int leadId) {
        this.leadId = leadId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getWebsite() {
        return website;
    }

    public void setWebsite(String website) {
        this.website = website;
    }

    public boolean isDoNotSMS() {
        return doNotSMS;
    }

    public void setDoNotSMS(boolean doNotSMS) {
        this.doNotSMS = doNotSMS;
    }

    public boolean isDoNotTrack() {
        return doNotTrack;
    }

    public void setDoNotTrack(boolean doNotTrack) {
        this.doNotTrack = doNotTrack;
    }

    public boolean isDoNotEmail() {
        return doNotEmail;
    }

    public void setDoNotEmail(boolean doNotEmail) {
        this.doNotEmail = doNotEmail;
    }

    public boolean isDoNotCall() {
        return doNotCall;
    }

    public void setDoNotCall(boolean doNotCall) {
        this.doNotCall = doNotCall;
    }

    public LeadSourceVO getLeadSource() {
        return leadSource;
    }

    public void setLeadSource(LeadSourceVO leadSource) {
        this.leadSource = leadSource;
    }

    public String getSourceCampaign() {
        return sourceCampaign;
    }

    public void setSourceCampaign(String sourceCampaign) {
        this.sourceCampaign = sourceCampaign;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getSourceMedium() {
        return sourceMedium;
    }

    public void setSourceMedium(String sourceMedium) {
        this.sourceMedium = sourceMedium;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public LeadStageVO getLeadStage() {
        return leadStage;
    }

    public void setLeadStage(LeadStageVO leadStage) {
        this.leadStage = leadStage;
    }

    public UserVO getOwner() {
        return owner;
    }

    public void setOwner(UserVO owner) {
        this.owner = owner;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public List<ProjectVO> getInterestedProjects() {
        return interestedProjects;
    }

    public void setInterestedProjects(List<ProjectVO> interestedProjects) {
        this.interestedProjects = interestedProjects;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public String getInterestRequirement() {
        return interestRequirement;
    }

    public void setInterestRequirement(String interestRequirement) {
        this.interestRequirement = interestRequirement;
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
}
