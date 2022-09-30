import { BrsService } from './brs.service';
import { Component, OnInit } from '@angular/core';
import { Brs } from './brs.model';

@Component({
  selector: 'app-brs',
  templateUrl: './brs.component.html',
  styleUrls: ['./brs.component.scss']
})
export class BrsComponent implements OnInit {

  //response:Brs = {} as Brs;
  response:Array<Brs> = [];

  message: any;
  loading: boolean = true;

  constructor(private service:BrsService) { }

  ngOnInit(): void {
  }

  makeRequest(){
    this.service.get().subscribe({
      next: data => {
        this.response = data;
        this.loading = false;
      },
      error: err => this.message = err,
      complete: () => this.message = "Completed..."
    });
  }


}
