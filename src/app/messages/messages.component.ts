import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // We will pass a parameter that defines the ENTIRE MessageService class, this is a dependency injection
  constructor(public messageService: MessageService) { 

    console.log(messageService)

  }

  ngOnInit() {
  }

}
