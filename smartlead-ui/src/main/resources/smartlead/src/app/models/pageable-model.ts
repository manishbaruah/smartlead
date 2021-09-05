export class PageableModel<T> {

    page: number;
    size: number;
    total: number;
    request: any;
    result: T[];
}