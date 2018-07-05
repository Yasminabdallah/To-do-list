import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { AlertsService } from 'angular-alert-module';
@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.css']
})
export class CreateNotesComponent implements OnInit {
  dataForm: object;
  title:string;
  description:string;
  startdate:string;
  enddate:string;
  constructor(  private api: ServiceService,
    private router: Router,
    private alerts: AlertsService) {this.dataForm = {}}

  ngOnInit() {
  }
  create(form :NgForm):void{
    if (form.valid) {
      this.dataForm = { title: this.title, description: this.description, startdate: this.startdate ,enddate: this.enddate };
      this.api.postData('/notes', this.dataForm).subscribe(
        res => {
          if (res == "success") {
           this.router.navigate(['/notes/']);
            this.alerts.setMessage('Successfully Created!', 'success');
          }
          else {
            this.alerts.setMessage('Try again!', 'error');
          }
        },
      )
     
    }
    
      
    

  }

}
