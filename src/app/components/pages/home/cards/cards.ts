
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cards',
  imports: [FormsModule, CommonModule],
  templateUrl: './cards.html',
  styleUrl: './cards.css',
})
export class Cards {
 
  
 
  cards =  [
    {
      title : "Omega Planet Ocean 600M Co-Axial Chronograph 45.5 mm",
      image : "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "2499.00" 
    },


     {
      title : "Seiko SARB-033 Black on Black with black leather strap",
      image : "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "3200.00" 
    },


     {
      title : "Seiko Sarb033 on natural brown leather strap",
      image : "https://images.unsplash.com/photo-1612817159623-0399784fd0ce?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "4800.00" 
    },
    
     {
      title : "SUCCESS WAY L182 TT",
      image : "https://unitedwatch.pk/wp-content/uploads/2025/11/IMG_1768.jpeg",
      price: "6800.00" 
    },

     {
      title : "Isolated watch wristwatch rolex",
      image : "https://cdn.pixabay.com/photo/2018/03/16/08/38/isolated-3230523_1280.jpg",
      price: "7500.00" 
    },
     {
      title : "Wristwatch Festina Quartz C140",
      image : "https://cdn.pixabay.com/photo/2014/07/31/23/00/wristwatch-407096_1280.jpg",
      price: "5500.00" 
    },

  ]


}

