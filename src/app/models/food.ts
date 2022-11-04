//foods podaci
export class Food{
    id!:number;
    price!:any;
    name!:string;
    tags?:string[];
    imageUrl!:string;
    cookingTime!:string;
    kcal!:string;
    new:boolean=false;
    ingredients!:string[];
} 