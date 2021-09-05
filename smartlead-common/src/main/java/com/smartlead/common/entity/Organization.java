package com.smartlead.common.entity;

import javax.persistence.*;

@Entity
@Table(name = "tbl_org")
public class Organization {

    @Id
    @Column(name = "org_id")
    private int orgId;

    @Column(name = "org_name")
    private String orgName;

    @Column(name = "parent_org_id")
    private int parentOrgId;

    @OneToOne(mappedBy = "organization", fetch = FetchType.LAZY)
    private User user;

    public Organization() {
    }

    public int getOrgId() {
        return orgId;
    }

    public void setOrgId(int orgId) {
        this.orgId = orgId;
    }

    public String getOrgName() {
        return orgName;
    }

    public void setOrgName(String orgName) {
        this.orgName = orgName;
    }

    public int getParentOrgId() {
        return parentOrgId;
    }

    public void setParentOrgId(int parentOrgId) {
        this.parentOrgId = parentOrgId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
