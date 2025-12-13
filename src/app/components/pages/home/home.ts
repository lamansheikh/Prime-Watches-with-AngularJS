import { Component } from '@angular/core';
import { Navbar } from '../../navbar/navbar';
import { Banner } from './banner/banner';
import { Cards } from './cards/cards';
import { SubscriptionBanner } from './subscription-banner/subscription-banner';

@Component({
  selector: 'app-home',
  imports: [Navbar ,Banner, Cards, SubscriptionBanner],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {



   

}
