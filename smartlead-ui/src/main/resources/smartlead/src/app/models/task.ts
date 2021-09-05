import { Lead } from './lead';
import { User } from './user';
import { EnumTaskStatus } from './enum-task-status';

export class Task {

    leadTaskId: number;
    taskType: string;
    subject: string;
    location: string;
    scheduleFrom: string;
    scheduleTo: string;
    description: string;
    createdOn: string;
    createdBy: string;
    updatedOn: string;
    updatedBy: string;
    marketingOfficer: string;
    owner: User;
    lead: Lead;
    organizer: User
    status: EnumTaskStatus;
    completedOn: string;
    attachmentName: string;
}