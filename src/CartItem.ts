import { Product } from "./Product";

class CartItem{
    private products: Product;
    private quality : number;
    constructor(products: Product, quality: number){
        this.products = products;
        this.quality= quality;
    }
}