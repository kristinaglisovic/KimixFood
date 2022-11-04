import { verifyHostBindings } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Cart } from '../../models/Cart';
import { CartItem } from '../../models/CartItem';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  cart!:Cart;

  
  p: number = 1;
  
  get f() { return this.quantityFood.controls; }
  
  constructor(private cartService:CartService) { 
  }



  quantityFood = new FormGroup({
    quantityNumber: new FormControl([Validators.min(1), Validators.max(500)])
  }) 
  
  ngOnInit(): void {
    this.setCart();
  }

  setCart(){
    this.cart=this.cartService.getCart();
  }
  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id); //rek
    this.setCart(); //load
  }
  changeQuantity(cartItem:CartItem,quantityUPolju:string){
    const quantity=parseInt(quantityUPolju);
    this.cartService.changeQuantity(quantity, cartItem.food.id);
    this.setCart();
  }

  reverse:boolean=false;
  sortData() {
     if(!this.reverse){
     this.cart.items.sort((a,b)=> b.food.price.new*b.quantity-a.food.price.new*a.quantity);
     this.reverse=true;
     }
     else{
        this.cart.items.sort((a,b)=> a.food.price.new*a.quantity-b.food.price.new*b.quantity);
        this.reverse=false;
     }
  }

 
}
