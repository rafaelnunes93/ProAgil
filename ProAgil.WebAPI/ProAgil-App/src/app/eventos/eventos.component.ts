import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  eventos: any = [
    {
      eventoId: 1,
      Tema: 'Angular',
      Local: 'Belo Horizonte'
    },
    {
      eventoId: 2,
      Tema: '.Net Core',
      Local: 'São Paulo'
    },
    {
      eventoId: 3,
      Tema: 'Angular e .Net',
      Local: 'Rio de Janeiro'
    },
  ];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEventos();
  }


  getEventos(){
    this.http.get('http://localhost:5000/api/values').subscribe(response => {
        this.eventos = response;
      }, error => {
        console.error(error);
      });
  }

}
