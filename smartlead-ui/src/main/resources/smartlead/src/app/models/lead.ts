import { LeadSource } from './lead-source';
import { LeadStage } from './lead-stage';
import { User } from './user';

export class Lead {

    leadId: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: number;
    company: string;
    website: string;
    doNotSMS: boolean;
    doNotTrack: boolean;
    doNotEmail: boolean;
    doNotCall: boolean;
    leadSource: LeadSource;
    sourceCampaign: string;
    mobile: number;
    sourceMedium: string;
    jobTitle: string;
    leadStage: LeadStage;
    owner: User;
    address: string;
    city: string;
    state: string;
    zip: number;
    country: string;
    interestedProjects: number[];
    notes: string;
    interestRequirement: string;
    createdOn: string;
    modifiedOn: string;
    createdBy: string;
    modifiedBy: string;
    ageInDays: number;
}