import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-notes',
  templateUrl: './show-notes.component.html',
  styleUrls: ['./show-notes.component.css']
})
export class ShowNotesComponent implements OnInit {

  note: Object;
  constructor(
    private api: ServiceService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.api.getData('/notes/' + params['id']).subscribe(
        res => {
          this.note = res.data;
          console.log(this.note)
        },
        err => {
          console.log(err);
        }
      )
    });
  }

}
