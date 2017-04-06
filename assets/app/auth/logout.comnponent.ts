import {Component} from "@angular/core";
@Component({
    selector: 'app-logout',
    template: `
        <div class="col-md-8 col-md-offset2">
            <button class="btn-danger" (click)="onLogout()">Logout</button>
        </div>
    `
})
export class LogoutComponent{
    onLogout(){

    }
}