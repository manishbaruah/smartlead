package com.smartlead.api.project.service;

import com.smartlead.api.project.repository.*;
import com.smartlead.common.entity.*;
import com.smartlead.common.vo.*;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.dozer.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.*;

@Service
public class ProjectServiceImpl implements ProjectService {

    @Autowired
    ProjectRepository projectRepository;

    @Autowired
    AmenityRepository amenityRepository;

    @Autowired
    BuilderRepository builderRepository;

    @Autowired
    ProjectStageRepository projectStageRepository;

    @Autowired
    ProjectTypeRepository projectTypeRepository;

    @Autowired
    Mapper mapper;

    @Override
    public ProjectVO saveProject(ProjectVO projectVO, MultipartFile file) throws IOException {
        Project project = mapper.map(projectVO, Project.class);
        mapAmenityVOList(projectVO, project);

        Date now = new Date();
        if (projectVO.getProjectId() == 0) {
            project.setCreatedOn(now);
        }
        project.setModifiedOn(now);

        if (file != null) {
            project.setBrochureName(file.getOriginalFilename());
            project.setBrochure(file.getBytes());
        }

        project = projectRepository.save(project);
        ProjectVO responseVO = mapper.map(project, ProjectVO.class);
        mapAmenityList(project, responseVO);
        return responseVO;
    }

    @Override
    public ProjectVO getProjectById(int projectId) {
        Project project = projectRepository.findById(projectId);
        ProjectVO projectVO = mapper.map(project, ProjectVO.class);
        mapAmenityList(project, projectVO);
        return projectVO;
    }

    @Override
    public void deleteProject(int projectId) {
        projectRepository.deleteById(projectId);
    }

    @Override
    public List<ProjectVO> searchProjects(SearchVO searchVO) {
        List<ProjectVO> projectVOList = new ArrayList();
        List<Object[]> arrColumnsList;
        if (StringUtils.isBlank(searchVO.getSearchTerm())) {
            arrColumnsList = projectRepository.findAllWithSelectedColumns();
        } else {
            arrColumnsList = projectRepository.searchWithSelectedColumns(searchVO.getSearchTerm());
        }
        if (CollectionUtils.isNotEmpty(arrColumnsList)) {
            for (Object[] arrColumns : arrColumnsList) {
                Project project = new Project();
                project.setProjectId((Integer) arrColumns[0]);
                project.setProjectName((String) arrColumns[1]);
                project.setProjectType((ProjectType) arrColumns[2]);
                project.setProjectStage((ProjectStage) arrColumns[3]);
                project.setProjectLocation((String) arrColumns[4]);
                project.setBuilder((Builder) arrColumns[5]);
                projectVOList.add(mapper.map(project, ProjectVO.class));

            }
        }
        return projectVOList;
    }

    @Override
    public List<AmenityVO> getAmenities() {
        List<AmenityVO> amenityVOList = new ArrayList();
        List<Amenity> amenities = amenityRepository.findAll();
        if (CollectionUtils.isNotEmpty(amenities)) {
            for (Amenity amenity : amenities) {
                amenityVOList.add(mapper.map(amenity, AmenityVO.class));
            }
        }
        return amenityVOList;
    }

    @Override
    public List<BuilderVO> getBuilders() {
        List<BuilderVO> builderVOList = new ArrayList();
        List<Builder> builders = builderRepository.findAll();
        if (CollectionUtils.isNotEmpty(builders)) {
            for (Builder builder : builders) {
                builderVOList.add(mapper.map(builder, BuilderVO.class));
            }
        }
        return builderVOList;
    }

    @Override
    public List<ProjectStageVO> getProjectStages() {
        List<ProjectStageVO> projectStageVOList = new ArrayList();
        List<ProjectStage> amenities = projectStageRepository.findAll();
        if (CollectionUtils.isNotEmpty(amenities)) {
            for (ProjectStage projectStage : amenities) {
                projectStageVOList.add(mapper.map(projectStage, ProjectStageVO.class));
            }
        }
        return projectStageVOList;
    }

    @Override
    public List<ProjectTypeVO> getProjectTypes() {
        List<ProjectTypeVO> projectTypeVOList = new ArrayList();
        List<ProjectType> projectTypes = projectTypeRepository.findAll();
        if (CollectionUtils.isNotEmpty(projectTypes)) {
            for (ProjectType projectType : projectTypes) {
                projectTypeVOList.add(mapper.map(projectType, ProjectTypeVO.class));
            }
        }
        return projectTypeVOList;
    }

    @Override
    public DownloadableFileVO getFileForProject(int projectId) {
        Project project = projectRepository.findById(projectId);
        DownloadableFileVO downloadableFileVO = new DownloadableFileVO();
        downloadableFileVO.setFilename(project.getBrochureName());
        downloadableFileVO.setResource(new ByteArrayResource(project.getBrochure()));
        return downloadableFileVO;
    }

    private void mapAmenityVOList(ProjectVO projectVO, Project project) {
        if (CollectionUtils.isNotEmpty(projectVO.getAmenities())) {
            Set<Amenity> amenitySet = new HashSet();
            for (AmenityVO amenityVO : projectVO.getAmenities()) {
                Amenity amenity = mapper.map(amenityVO, Amenity.class);
                amenitySet.add(amenity);
            }
            project.setAmenities(amenitySet);
        }
    }

    private void mapAmenityList(Project project, ProjectVO projectVO) {
        if (CollectionUtils.isNotEmpty(project.getAmenities())) {
            List<AmenityVO> amenityVOList = new ArrayList();
            for (Amenity amenity : project.getAmenities()) {
                AmenityVO amenityVO = mapper.map(amenity, AmenityVO.class);
                amenityVOList.add(amenityVO);
            }
            projectVO.setAmenities(amenityVOList);
        }
    }
}
