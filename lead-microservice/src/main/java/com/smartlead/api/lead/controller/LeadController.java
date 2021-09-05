package com.smartlead.api.lead.controller;

import com.smartlead.api.lead.service.LeadService;
import com.smartlead.common.entity.User;
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
@RequestMapping("/api/lead")
public class LeadController {

    @Autowired
    LeadService leadService;

    @PostMapping("/leads/search")
    public PageableVO searchProjects(@RequestBody PageableVO pageableVO) {
        return leadService.searchLeads(pageableVO);
    }

    @GetMapping("/leads/{id}")
    public LeadVO getLead(@PathVariable int id) {
        return leadService.getLeadById(id);
    }

    @GetMapping("/leadSources")
    public List<LeadSourceVO> getLeadSources() {
        return leadService.getLeadSources();
    }

    @GetMapping("/leadStages")
    public List<LeadStageVO> getLeadStages() {
        return leadService.getLeadStages();
    }

    @GetMapping("/leadOwners")
    public List<UserVO> getLeadOwners() {
        return leadService.getLeadOwners();
    }

    @GetMapping("/getDefaultleadStage")
    public LeadStageVO getDefaultleadStage() {
        return leadService.getDefaultLeadStage();
    }

    @PostMapping("/leads")
    public LeadVO createLead(@RequestBody LeadVO leadVO) {
        return leadService.saveLead(leadVO);
    }

    @PutMapping("/leads/{id}")
    public LeadVO updateLead(@RequestBody LeadVO leadVO, @PathVariable int id) {
        leadVO.setLeadId(id);
        return leadService.saveLead(leadVO);
    }

    @GetMapping("/documentTypes")
    public List<DocumentTypeVO> getDocumentTypes() {
        return leadService.getDocumentTypes();
    }

    @PostMapping("/leads/{id}/documents")
    public LeadDocumentVO createLeadDocument(@RequestPart("document") LeadDocumentVO leadDocumentVO, @RequestPart(name = "file") MultipartFile file) {
        try {
            return leadService.saveLeadDocument(leadDocumentVO, file);
        } catch (IOException e) {
            throw new ResponseStatusException(
                    HttpStatus.INTERNAL_SERVER_ERROR, "Error in processing attachment", e);
        }
    }

    @GetMapping("/leads/{id}/documents")
    public List<LeadDocumentVO> getLeadDocuments(@PathVariable int id) {
        return leadService.getLeadDocuments(id);
    }

    @DeleteMapping("/leads/{leadId}/documents/{leadDocumentId}")
    public String deleteLeadDocument(@PathVariable int leadId, @PathVariable int leadDocumentId) {
        leadService.deleteLeadDocument(leadId, leadDocumentId);
        return "Lead document deleted successfully";
    }

    @PostMapping("/leads/{id}/notes")
    public LeadNoteVO createLeadNote(@RequestPart("note") LeadNoteVO leadNoteVO, @RequestPart(name = "file") MultipartFile file) {
        try {
            return leadService.saveLeadNote(leadNoteVO, file);
        } catch (IOException e) {
            throw new ResponseStatusException(
                    HttpStatus.INTERNAL_SERVER_ERROR, "Error in processing attachment", e);
        }
    }

    @GetMapping("/leads/{id}/notes")
    public List<LeadNoteVO> getLeadNotes(@PathVariable int id) {
        return leadService.getLeadNotes(id);
    }

    @DeleteMapping("/leads/{leadId}/notes/{leadNoteId}")
    public String deleteLeadNote(@PathVariable int leadId, @PathVariable int leadNoteId) {
        leadService.deleteLeadNote(leadId, leadNoteId);
        return "Lead document deleted successfully";
    }

    @PostMapping("/leads/{id}/tasks")
    public LeadTaskVO createLeadTask(@RequestPart("task") LeadTaskVO leadTaskVO, @RequestPart(name = "file", required = false) MultipartFile file) {
        try {
            return leadService.saveLeadTask(leadTaskVO, file);
        } catch (IOException e) {
            throw new ResponseStatusException(
                    HttpStatus.INTERNAL_SERVER_ERROR, "Error in processing attachment", e);
        }
    }

    @PutMapping("/leads/{id}/tasks/{leadTaskId}")
    public LeadTaskVO updateLeadTask(@PathVariable int leadTaskId, @RequestPart("task") LeadTaskVO leadTaskVO, @RequestPart(name = "file", required = false) MultipartFile file) {
        try {
            leadTaskVO.setLeadTaskId(leadTaskId);
            return leadService.saveLeadTask(leadTaskVO, file);
        } catch (IOException e) {
            throw new ResponseStatusException(
                    HttpStatus.INTERNAL_SERVER_ERROR, "Error in processing attachment", e);
        }
    }

    @DeleteMapping("/leads/{leadId}/tasks/{leadTaskId}")
    public String deleteLeadTask(@PathVariable int leadId, @PathVariable int leadTaskId) {
        leadService.deleteLeadTask(leadId, leadTaskId);
        return "Lead document deleted successfully";
    }

    @GetMapping("/leads/{id}/tasks")
    public List<LeadTaskVO> getLeadTasks(@PathVariable int id, @RequestParam("status") String status) {
        return leadService.getLeadTasks(id, status);
    }

    @PostMapping("/admin/taskSummary")
    public List<TaskSummaryVO> getTaskSummaryListForAdmin(@RequestBody List<UserVO> userVOList, @RequestParam("interval") String interval) {
        return leadService.getTaskSummaryListForAdmin(userVOList, interval);
    }

    @GetMapping("/user/{id}/taskSummary")
    public TaskSummaryVO getTaskSummaryForUser(@PathVariable int id, @RequestParam("interval") String interval) {
        return leadService.getTaskSummaryForUser(id, interval);
    }

    @GetMapping("/admin/businessOverview")
    public BusinessOverviewVO getBusinessOverviewForAdmin(@RequestParam("interval") String interval) {
        return leadService.getBusinessOverviewForAdmin(interval);
    }

    @GetMapping("/leads/{id}/activities")
    public List<LeadActivityVO> getLeadActivities(@PathVariable int id) {
        return leadService.getLeadActivities(id);
    }

    @GetMapping(value = "/leads/{leadId}/tasks/{leadTaskId}")
    public ResponseEntity<Resource> getFileForLeadTask(@PathVariable int leadTaskId) {
        DownloadableFileVO downloadableFileVO = leadService.getFileForLeadTask(leadTaskId);
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
