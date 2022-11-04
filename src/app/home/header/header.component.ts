import { identifierName } from '@angular/compiler';
import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { PRIMARY_OUTLET, Router, UrlSegment, UrlSegmentGroup, UrlTree } from '@angular/router';
import { Cart } from '../../models/Cart';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  show:boolean=true;
  pathUrl:string;
  cart!:Cart;
  constructor(private cartService:CartService,private router:Router) { 
    console.log(this.router.url);
  }
 
  
  ngOnInit(): void {
    this.cart=this.cartService.getCart();
  }


 
//  @ViewChild('sekcija') link:ElementRef;

  
}
