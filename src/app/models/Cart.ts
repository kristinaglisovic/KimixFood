import { CartItem } from "./CartItem";

export class Cart{
    items:CartItem[]=[];

    //konacna cena

    get totalPrice():number{
        let totalPrice = 0;
        this.items.forEach(el => {
            totalPrice += el.price;
        });
        return totalPrice;
    }
}