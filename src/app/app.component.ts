import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Championship } from './championship.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  isFetching = false;
  title = 'my-app';
  championships: Championship[] = [];
  users: any;
  championshipName = '';
  championshipDate = '';
  championshipCity = '';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) {
    
  }
   
  ngOnInit() {
    this.fetchChampionships();
  }

  fetchChampionships() {
    console.log("trarara");
    this.http.get<Championship[]>("http://localhost:8080")
    .subscribe((data) => {
      console.log("Response: ", data);
      this.championships = data;

    });
  }

  createChampionship(name: string): void {
    console.log("halo", name);
    this.http.post<Championship>('http://localhost:8080', {name: name}, this.httpOptions )
    .subscribe(responseData => {
      console.log(responseData);
    });
  }
}