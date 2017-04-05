import {Message} from "./messages.model";

export class MessageService{
    private messages: Message[] = [];

    addMessage(message: Message){
        this.messages.push(message);
        console.log(this.messages);
    }

    getMessage(){
        return this.messages;
    }

    deleteMessage(message: Message){
        this.messages.splice(this.messages.indexOf(message),1);
    }
}