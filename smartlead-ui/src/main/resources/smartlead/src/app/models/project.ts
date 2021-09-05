import { Amenity } from './amenity';
import { ProjectType } from './project-type';
import { ProjectStage } from './project-stage';
import { Builder } from './builder';

export class Project {

    projectId: number;
    projectName: string;
    projectType: ProjectType;
    projectStage: ProjectStage;
    projectLocation: string;
    builder: Builder;
    towers: number;
    wings: number;
    blocks: number;
    floors: number;
    units: number;
    amenities: Amenity[];
    description: string;
    brochureName: string;
    createdBy: string;
    modifiedBy: string;

    constructor() {
    }
}