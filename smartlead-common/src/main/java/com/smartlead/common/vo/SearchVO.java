package com.smartlead.common.vo;


import org.springframework.util.ReflectionUtils;

import java.util.List;

public class SearchVO {

    private String searchTerm;
    private List<FieldFilterVO> fieldFilters;

    public String getSearchTerm() {
        return searchTerm;
    }

    public void setSearchTerm(String searchTerm) {
        this.searchTerm = searchTerm;
    }

    public List<FieldFilterVO> getFieldFilters() {
        return fieldFilters;
    }

    public void setFieldFilters(List<FieldFilterVO> fieldFilters) {
        this.fieldFilters = fieldFilters;
    }
}