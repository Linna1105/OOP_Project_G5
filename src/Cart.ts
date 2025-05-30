import { Customer } from "./Customer";
import { Product } from "./Product";

class Cart{
    private cartId: number;
    private customers: Customer;
    private items: { products: Product; quantity: number }[];

    constructor(cartId :number, customers: Customer){
        this.cartId = cartId;
        this. customers = customers
        this.items = [];
    }
    public addItme(products:Product, quantity: number):void{
         let existingItem = this.items.find(item => item.products.productID === products.productID);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({ products, quantity});
        }
    }
    public removeItem(products:Product):void{
        this.items = this.items.filter(item => item.products.productID !== products.productID);
    }

    public getSubtotal(): number {
        return this.items.reduce((subtotal, item) => {
            return subtotal + (item.products.price * item.quantity);
        }, 0);
    }
    
}