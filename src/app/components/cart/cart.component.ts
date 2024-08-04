import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {
    MatCard,
    MatCardActions,
    MatCardAvatar,
    MatCardContent,
    MatCardHeader,
    MatCardImage, MatCardSubtitle, MatCardTitle
} from "@angular/material/card";
import {ShopService} from "../../services/shop.service";

@Component({
  selector: 'app-cart',
  standalone: true,
    imports: [
        MatButton,
        MatCard,
        MatCardActions,
        MatCardAvatar,
        MatCardContent,
        MatCardHeader,
        MatCardImage,
        MatCardSubtitle,
        MatCardTitle
    ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

    constructor(public shopService: ShopService) {
    }

}
