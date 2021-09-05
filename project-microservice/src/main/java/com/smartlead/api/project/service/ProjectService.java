package com.smartlead.api.project.service;

import com.smartlead.common.vo.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface ProjectService {

    ProjectVO saveProject(ProjectVO projectVO, MultipartFile file) throws IOException;

    ProjectVO getProjectById(int projectId);

    void deleteProject(int projectId);

    List<ProjectVO> searchProjects(SearchVO searchVO);

    List<AmenityVO> getAmenities();

    List<BuilderVO> getBuilders();

    List<ProjectStageVO> getProjectStages();

    List<ProjectTypeVO> getProjectTypes();

    DownloadableFileVO getFileForProject(int projectId);
}
