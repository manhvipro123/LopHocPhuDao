import {Component, Input} from '@angular/core';
import {Output, EventEmitter} from '@angular/core';
import {ShopService} from "../../services/shop.service";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [
        FormsModule,
        MatButtonModule
    ],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
    @Input() loiChao: string = '';// decorate the property with @Input() item = ''; // decorate the property with @Input()
    @Output() comGa = new EventEmitter<string>();

    id: string = '';
    ten: string = '';
    gia: number = 0;
    hinh: string = '';
    soLuong: number = 0;
    moTa: string = '';

    constructor(public shopService: ShopService) {
    }
}
