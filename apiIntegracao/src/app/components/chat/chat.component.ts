import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  buscasChatGpt: FormGroup;

  message: string = '';
  response: string = '';
  exibeResposta: any;
  teste: any;

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.buscasChatGpt = new FormGroup({
      termoBusca: new FormControl('')
    })

    this.teste = 'teste de pipe';

  }

  sendMessage() {
    this.chatService.sendMessage(this.buscasChatGpt.value.termoBusca).subscribe( (data: any) =>{
      console.log(data.choices[0].text)
      this.exibeResposta=data.choices[0].text;

    } )
        
  }



}
