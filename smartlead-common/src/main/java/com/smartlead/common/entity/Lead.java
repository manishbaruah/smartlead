package com.smartlead.common.entity;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "tbl_lead")
public class Lead {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "lead_id")
    private int leadId;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "email")
    private String email;

    @Column(name = "phone_no")
    private String phone;

    @Column(name = "company")
    private String company;

    @Column(name = "website")
    private String website;

    @Column(name = "do_not_sms")
    private boolean doNotSMS;

    @Column(name = "do_not_track")
    private boolean doNotTrack;

    @Column(name = "do_not_email")
    private boolean doNotEmail;

    @Column(name = "do_not_call")
    private boolean doNotCall;

    @OneToOne
    @JoinColumn(name = "lead_source_id")
    private LeadSource leadSource;

    @Column(name = "source_campaign")
    private String sourceCampaign;

    @Column(name = "mobile_no")
    private String mobile;

    @Column(name = "source_medium")
    private String sourceMedium;

    @Column(name = "job_title")
    private String jobTitle;

    @OneToOne
    @JoinColumn(name = "lead_stage_id")
    private LeadStage leadStage;

    @OneToOne
    @JoinColumn(name = "owner")
    private User owner;

    @Column(name = "address")
    private String address;

    @Column(name = "city")
    private String city;

    @Column(name = "state")
    private String state;

    @Column(name = "zipcode")
    private String zip;

    @Column(name = "country")
    private String country;

    @Column(name = "interest_requirement")
    private String interestRequirement;

    @Column(name = "notes")
    private String notes;

    @JoinTable(name = "tbl_lead_projects",
            joinColumns = @JoinColumn(name = "lead_id"),
            inverseJoinColumns = @JoinColumn(name = "project_id"))
    @ElementCollection
    private Set<Project> interestedProjects;

    @Column(name = "created_on", updatable = false)
    private Date createdOn;

    @Column(name = "modified_on")
    private Date modifiedOn;

    @Column(name = "created_by", updatable = false)
    private String createdBy;

    @Column(name = "modified_by")
    private String modifiedBy;

    public Lead() {
    }

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

    public LeadSource getLeadSource() {
        return leadSource;
    }

    public void setLeadSource(LeadSource leadSource) {
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

    public LeadStage getLeadStage() {
        return leadStage;
    }

    public void setLeadStage(LeadStage leadStage) {
        this.leadStage = leadStage;
    }

    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner) {
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

    public String getInterestRequirement() {
        return interestRequirement;
    }

    public void setInterestRequirement(String interestRequirement) {
        this.interestRequirement = interestRequirement;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public Set<Project> getInterestedProjects() {
        return interestedProjects;
    }

    public void setInterestedProjects(Set<Project> interestedProjects) {
        this.interestedProjects = interestedProjects;
    }

    public Date getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(Date createdOn) {
        this.createdOn = createdOn;
    }

    public Date getModifiedOn() {
        return modifiedOn;
    }

    public void setModifiedOn(Date modifiedOn) {
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
