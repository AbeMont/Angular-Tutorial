import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }
  
  // Defining a property called messages, which is an empty array, where each index will be a string.

  messages: string[] = [];

  add(message: string) {

    console.log(message)
    console.log(this.messages)
    this.messages.push(message);

  }

  clear() {
    this.messages = [];
  }

}
