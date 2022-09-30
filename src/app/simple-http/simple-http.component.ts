import { Component, OnInit } from '@angular/core';
import { HttpDataService } from './http-data.service';

@Component({
  selector: 'app-simple-http',
  templateUrl: './simple-http.component.html',
  styleUrls: ['./simple-http.component.scss']
})
export class SimpleHttpComponent implements OnInit {

  response: any;

  constructor(private service: HttpDataService) { }

  ngOnInit(): void {
    this.service.get().subscribe({
      next: data => this.response = data,
    });
  }

}


