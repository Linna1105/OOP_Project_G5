import { Product } from "./Product";

class CartItem{
    private products: Product;
    private quantity : number;
    constructor(products: Product, quality: number){
        this.products = products;
        this.quantity= quality;
    }
}