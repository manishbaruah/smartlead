package com.smartlead.common.entity;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "tbl_amenities")
public class Amenity {

    @Id
    @Column(name = "amenities_id")
    private int amenityId;

    @Column(name = "amenities_name")
    private String amenityName;

    @ManyToMany(mappedBy = "amenities")
    Set<Project> projects;

    public Amenity() {
    }

    public int getAmenityId() {
        return amenityId;
    }

    public void setAmenityId(int amenityId) {
        this.amenityId = amenityId;
    }

    public String getAmenityName() {
        return amenityName;
    }

    public void setAmenityName(String amenityName) {
        this.amenityName = amenityName;
    }

    public Set<Project> getProjects() {
        return projects;
    }

    public void setProjects(Set<Project> projects) {
        this.projects = projects;
    }
}
