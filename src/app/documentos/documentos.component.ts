import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getToken();
  }

  getToken(){
    const response = this.httpClient.get('http://127.0.0.1:8080/users')
      .subscribe(res => {   
         
        console.log(res)
      })  
    }
  

}
