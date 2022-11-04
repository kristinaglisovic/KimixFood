import { isNgTemplate } from '@angular/compiler';
import { Injectable, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/Cart';
import { CartItem } from 'src/app/models/CartItem';
import { Food } from 'src/app/models/food';


@Injectable({
  providedIn: 'root'
})
export class CartService{


  private cart: Cart = new Cart();

  //dodavanje
  addToCart(food: Food): void {
    let cartItem = this.cart.items.find(item => item.food.id == food.id);
    if (cartItem) {
      this.changeQuantity(cartItem.quantity + 1, food.id )
      return;
    }
    this.cart.items.push(new CartItem(food));
  }
  
  //brisanje iz korpe
  removeFromCart(foodId:number):void{
    this.cart.items=this.cart.items.filter(item=>item.food.id != foodId)
  }
  changeQuantity(quantity:number, foodId:number){
    let cartItem=this.cart.items.find(item=>item.food.id==foodId);
    if(!cartItem) return;

    cartItem.quantity=quantity;
  }

  
  getCart():Cart{
    return this.cart;
  }

  // readCart() :void{
  //   let ls=localStorage.getItem('cart');
  //   if(!ls){
  //     return;
  //   }
  //   this.cart=JSON.parse(ls);
  // }

  // writeCart():void{
  //   localStorage.setItem('cart',JSON.stringify(this.cart))
  // }


}

