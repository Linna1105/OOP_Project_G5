import { Seller } from "./Seller";

export class Product {
    productID: number;
    name: string;
    category: string;
    price: number;
    discount: number;
    stockQuantity: number;
    seller: Seller;

    constructor(
        productID: number,
        name: string,
        category: string,
        price: number,
        discount: number,
        stockQuantity: number,
        seller: Seller
    ) {
        this.productID = productID;
        this.name = name;
        this.category = category;
        this.price = price;
        this.discount = discount;
        this.stockQuantity = stockQuantity;
        this.seller = seller;
    }

    getFinalPrice(): number {
        return this.price - (this.price * this.discount);
    }

    isAvailable(): boolean {
        return this.stockQuantity > 0;
    }
}