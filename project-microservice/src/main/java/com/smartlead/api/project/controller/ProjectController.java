package com.smartlead.api.project.controller;

import com.smartlead.api.project.service.ProjectService;
import com.smartlead.common.vo.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/project")
public class ProjectController {

    @Autowired
    ProjectService projectService;

    @PostMapping("/projects/search")
    public List<ProjectVO> searchProjects(@RequestBody SearchVO searchVO) {
        return projectService.searchProjects(searchVO);
    }

    @PostMapping("/projects")
    public ProjectVO createProject(@RequestPart("project") ProjectVO project, @RequestPart(name = "file", required = false) MultipartFile file) {
        try {
            return projectService.saveProject(project, file);
        } catch (IOException e) {
            throw new ResponseStatusException(
                    HttpStatus.INTERNAL_SERVER_ERROR, "Error in processing attachment", e);
        }
    }

    @GetMapping("/projects/{id}")
    public ProjectVO getProject(@PathVariable int id) {
        return projectService.getProjectById(id);
    }

    @PutMapping("/projects/{id}")
    public ProjectVO updateProject(@PathVariable int id, @RequestPart("project") ProjectVO project, @RequestPart(name = "file", required = false) MultipartFile file) {
        project.setProjectId(id);
        try {
            return projectService.saveProject(project, file);
        } catch (IOException e) {
            throw new ResponseStatusException(
                    HttpStatus.INTERNAL_SERVER_ERROR, "Error in processing attachment", e);
        }
    }

    @DeleteMapping("/projects/{id}")
    public String deleteProject(@PathVariable int id) {
        projectService.deleteProject(id);
        return "Project deleted successfully";
    }

    @GetMapping("/amenities")
    public List<AmenityVO> getAmenities() {
        return projectService.getAmenities();
    }

    @GetMapping("/builders")
    public List<BuilderVO> getBuilders() {
        return projectService.getBuilders();
    }

    @GetMapping("/projectStages")
    public List<ProjectStageVO> getProjectStages() {
        return projectService.getProjectStages();
    }

    @GetMapping("/projectTypes")
    public List<ProjectTypeVO> getProjectTypes() {
        return projectService.getProjectTypes();
    }

    @GetMapping(value = "/projects/{id}/file")
    public ResponseEntity<Resource> getProjectFile(@PathVariable int id) {
        DownloadableFileVO downloadableFileVO = projectService.getFileForProject(id);
        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + downloadableFileVO.getFilename());
        headers.add("Cache-Control", "no-cache, no-store, must-revalidate");
        headers.add("Pragma", "no-cache");
        headers.add("Expires", "0");
        return ResponseEntity.ok()
                .headers(headers)
                .contentType(MediaType.parseMediaType("application/octet-stream"))
                .body(downloadableFileVO.getResource());
    }
}
