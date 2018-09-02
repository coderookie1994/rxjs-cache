import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { LocalStorageService } from "src/app/localStorage.service";
import * as _ from 'lodash';
import { Subscription, BehaviorSubject } from "rxjs";

@Injectable()
export class RightsService {
    
    private subscriptions: Array<Subscription> = new Array();

    constructor(private localStorageService: LocalStorageService,
                private httpClient: HttpClient) { }

    public loadRights(rights: string[]): BehaviorSubject<any[]> {
        let cache = this.localStorageService.getCache();

        rights.forEach(arg => {
            let rightToLoad = undefined;
            if (cache.find(key => { return key === arg}) === undefined)
            {
                rightToLoad = arg;
                this.httpClient.get("http://localhost:4201/rights?right=" + rightToLoad)
                    .subscribe((response: any) => {
                        this.localStorageService.saveInCache(rightToLoad, response.value)
                    });
            }                
        })

        return this.localStorageService.getCacheEmitter();
    }

    public hasRight(right: string): any {
        return this.localStorageService.hasRight(right);
    }
}