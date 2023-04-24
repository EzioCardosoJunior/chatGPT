import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {

  message: string = '';
  response: string = '';

  constructor(private chatService: ChatService) { }

  sendMessage() {
    this.chatService.sendMessage().subscribe( (data: any) =>{
      console.log(data)
    } )
        
  }



}
