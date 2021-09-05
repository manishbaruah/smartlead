package com.smartlead.common.vo;

import org.springframework.core.io.Resource;

public class DownloadableFileVO {

    private Resource resource;
    private String filename;
    private long fileLength;

    public Resource getResource() {
        return resource;
    }

    public void setResource(Resource resource) {
        this.resource = resource;
    }

    public String getFilename() {
        return filename;
    }

    public void setFilename(String filename) {
        this.filename = filename;
    }

    public long getFileLength() {
        return fileLength;
    }

    public void setFileLength(long fileLength) {
        this.fileLength = fileLength;
    }
}
