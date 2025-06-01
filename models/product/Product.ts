import { Seller } from "../../models/user/Seller";
import { Discount } from "../product/Discount";

export class Product {
    private productID: number;
    private name: string;
    private category: string;
    private price: number;
    private discount: number;
    private stockQuantity: number;
    private seller: Seller;
    private discounts: Discount[] = [];

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
        return this.productID;
    }

    setProductID(productID: number): void {
        this.productID = productID;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getCategory(): string {
        return this.category;
    }

    setCategory(category: string): void {
        this.category = category;
    }

    getPrice(): number {
        return this.price;
    }

    setPrice(price: number): void {
        this.price = price;
    }

    getDiscount(): number {
        return this.discount;
    }

    setDiscount(discount: number): void {
        this.discount = discount;
    }

    getStockQuantity(): number {
        return this.stockQuantity;
    }

    setStockQuantity(stockQuantity: number): void {
        this.stockQuantity = stockQuantity;
    }

    getSeller(): Seller {
        return this.seller;
    }

    setSeller(seller: Seller): void {
        this.seller = seller;
    }

    getDiscounts(): Discount[] {
        return this.discounts;
    }

    setDiscounts(discounts: Discount[]): void {
        this.discounts = discounts;
    }

    getFinalPrice(): number {
        return this.price - (this.price * this.discount);
    }
}
