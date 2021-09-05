import { DocumentType } from './document-type';
import { Lead } from './lead';

export class Document {

    leadDocumentId: number;
    documentName: string;
    description: string;
    documentType: DocumentType;
    createdOn: string;
    updatedOn: string;
    createdBy: string;
    updatedBy: string;
    lead: Lead;
}