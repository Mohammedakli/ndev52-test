import { HttpClient } from '@angular/common/http';
export declare class ApiService {
    private httpClient;
    constructor(httpClient: HttpClient);
    postUser(data: any): import("rxjs").Observable<any>;
    getUser(): import("rxjs").Observable<any>;
    updateUser(data: any, _id: number): import("rxjs").Observable<any>;
    deleteUser(_id: number): import("rxjs").Observable<any>;
}
