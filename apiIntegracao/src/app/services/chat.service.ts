import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  texto: any;

  constructor(private http: HttpClient) { }

  apiUrl = 'https://api.openai.com/v1/engines/text-davinci-003/completions';
  retorno:any;
  postData = {
    prompt: '',
    temperature: 0.2,
    max_tokens: 200,
    top_p: 0.2,
    frequency_penalty: 1,
    presence_penalty: 1,
    stop: ['_']
  };
  sendMessage(a: any):Observable<any> {
    this.postData.prompt = a;
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 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',
    };   

    return this.http.post(this.apiUrl, this.postData, { headers })
   
  }

}


