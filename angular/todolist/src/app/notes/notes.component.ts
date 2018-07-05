import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { AlertsService } from 'angular-alert-module';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})

export class NotesComponent implements OnInit {

  response:Array<object>;
 

  constructor(
    private api:ServiceService,
    private alerts: AlertsService
  ) { }

  ngOnInit() {
    this.getNotes()
  }
  getNotes() {
    this.api.getData('/notes').subscribe(
      res => {
        this.response = res.data;
        console.log(res.data);
      },
      err => {
      }
    )
  }

  delete(url: string ) {

    this.api.deleteData(url).subscribe(
     
      res => {
        console.log(res)
        if (res == "success") {
          console.log("deleted");
          this.getNotes()
          this.alerts.setMessage('Successfully Deleted!', 'success');
        }
       
      },
      err => {
        console.log(err);
        this.alerts.setMessage("Can't be Deleted!", 'error');
      }
    )
  }
 

}
