import { Lead } from './lead';

export class Note {

    leadNoteId: number;
    note: string;
    noteAttachment: string;
    noteName: string;
    createdOn: string;
    updatedOn: string;
    createdBy: string;
    updatedBy: string;
    lead: Lead;
}