import {Component} from '@angular/core';
import {Message} from "./messages/messages.model";


@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    message: Message = new Message('Test message', 'Piotr');

}