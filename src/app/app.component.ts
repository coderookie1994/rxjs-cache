import { Component } from '@angular/core';
import { RightsService } from "src/app/rights.service";
import { OnInit } from "@angular/core";
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'rxjs-cache';
	public hasRight: boolean = false;
	
    constructor(private rightService: RightsService) {}

    public ngOnInit() {
        this.checkRight('5');
    }

    public loadRight() {
        this.rightService.loadRights(['5']).subscribe(data => {
			this.checkRight('5');
        });            
	}
	
	public checkRight(right: string) {
		this.hasRight = this.rightService.hasRight(right);
	}
}
