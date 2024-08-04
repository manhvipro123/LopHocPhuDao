import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {MainComponent} from "./components/main/main.component";
import {CartComponent} from "./components/cart/cart.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, FormsModule, NavbarComponent, MainComponent, CartComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'Hello';

    kichThuocInput = 200;

    items = ['item1', 'item2', 'item3', 'item4'];

    addItem(newItem: string) {
        this.items.push(newItem);
    }

    xinChao(loiChao: string) {
        console.log(loiChao);
    }
}
