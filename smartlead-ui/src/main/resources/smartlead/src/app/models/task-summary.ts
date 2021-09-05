export class TaskSummary {

    user: string;
    followUp: {
        pending: number;
        total: number;
    };
    phoneCall: {
        pending: number;
        total: number;
    };
    meeting: {
        pending: number;
        total: number;
    };
    email: {
        pending: number;
        total: number;
    };
}