package com.smartlead.common.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tbl_lead_source")
public class LeadSource {

    @Id
    @Column(name = "lead_source_id")
    private int sourceId;

    @Column(name = "lead_source_name")
    private String sourceName;

    public LeadSource() {
    }

    public int getSourceId() {
        return sourceId;
    }

    public void setSourceId(int sourceId) {
        this.sourceId = sourceId;
    }

    public String getSourceName() {
        return sourceName;
    }

    public void setSourceName(String sourceName) {
        this.sourceName = sourceName;
    }
}
