import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  texto: any = 'Qual a Capital do Brasil?'

  constructor(private http: HttpClient) { }

  apiUrl = 'https://api.openai.com/v1/engines/curie/completions';
  retorno:any;
  postData = {
    prompt: this.texto,
    temperature: 0.2,
    max_tokens: 1000,
    top_p: 0.2,
    frequency_penalty: 1,
    presence_penalty: 1,
    stop: ['.']
  };
  sendMessage():Observable<any> {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': '0',
    };   

    return this.http.post(this.apiUrl, this.postData, { headers })
   
  }

}


