package com.smartlead.api.lead.scheduler;

import com.smartlead.api.lead.service.LeadService;
import com.smartlead.common.entity.LeadTask;
import com.smartlead.common.enums.EnumTaskType;
import org.apache.commons.collections.CollectionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Component
public class LeadTaskScheduler {

    @Autowired
    LeadService leadService;

    private SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

    @Scheduled(fixedDelay = 1800000)
    public void scheduleTaskWithFixedDelay() {
        System.out.println("Running scheduled service to set pending tasks to overdue");
        try {
            List<LeadTask> leadTaskList = leadService.getAllPendingTasks();
            if (CollectionUtils.isNotEmpty(leadTaskList)) {
                for (LeadTask leadTask : leadTaskList) {
                    String taskType = leadTask.getTaskType();
                    boolean timeElapsed = false;
                    System.out.println("Checking if task has overdue: " + leadTask.getLeadTaskId());
                    if (taskType.equals(EnumTaskType.EMAIL.type) || taskType.equals(EnumTaskType.PHONE_CALL.type)
                            || taskType.equals(EnumTaskType.FOLLOW_UP.type)) {
                        timeElapsed = checkIfTimeElapsed(leadTask.getScheduleFrom(), null);
                    } else if (taskType.equals(EnumTaskType.MEETING.type) || taskType.equals(EnumTaskType.SITE_VISIT.type)) {
                        timeElapsed = checkIfTimeElapsed(leadTask.getScheduleFrom(), leadTask.getScheduleTo());
                    }
                    if (timeElapsed) {
                        System.out.println("Changing status to overdue for task: " + leadTask.getLeadTaskId());
                        leadService.setTaskStatusToOverdue(leadTask.getLeadTaskId());
                    }
                }
            } else {
                System.out.println("No pending tasks found");
            }
        } catch (ParseException e) {
            e.printStackTrace();
        }
    }

    private boolean checkIfTimeElapsed(Date scheduleFrom, Date scheduleTo) throws ParseException {
        Date now = sdf.parse(sdf.format(new Date()));
        if (scheduleTo == null) {
            return now.after(scheduleFrom);
        } else {
            return now.after(scheduleFrom) && now.after(scheduleTo);
        }
    }
}
