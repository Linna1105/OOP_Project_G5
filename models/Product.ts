import { Seller } from "./Seller";

export class Product {
    private productID: number;
    private name: string;
    private category: string;
    private price: number;
    private discount: number;
    private stockQuantity: number;
    private seller: Seller;

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

    getProductID(): number {
        return this.productID;  -78-
    }

    getName(): string {
        return this.name;
    }

    getCategory(): string {
        return this.category;
    }

    getPrice(): number {
        return this.price;
    }

    getDiscount(): number {
        return this.discount;
    }

    getStockQuantity(): number {
        return this.stockQuantity;
    }

    getSeller(): Seller {
        return this.seller;
    }

    setName(name: string): void {
        this.name = name;
        console.log(`Product name updated to ${this.name}.`);
    }

    setCategory(category: string): void {
        this.category = category;
        console.log(`Product category updated to ${this.category}.`);
    }

    setPrice(price: number): void {
        this.price = price;
        console.log(`Product price updated to ${this.price}.`);
    }

    setDiscount(discount: number): void {
        this.discount = discount;
        console.log(`Product discount updated to ${this.discount}.`);
    }

    setStockQuantity(stockQuantity: number): void {
        this.stockQuantity = stockQuantity;
        console.log(`Product stock quantity updated to ${this.stockQuantity}.`);
    }

    setSeller(seller: Seller): void {
        this.seller = seller;
        console.log(`Product seller updated to ${this.seller.name}.`);
    }

    getFinalPrice(): number {
        return this.price - (this.price * this.discount);
    }

    isAvailable(): boolean {
        return this.stockQuantity > 0;
    }
}