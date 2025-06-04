import { Seller } from "../../models/user/Seller";
import { Discount } from "../product/Discount";
import { Category } from "../product/Category";
import { Store } from "../store/Store"; // Optional: only if you want to associate with a store

export class Product {
    private productID: number;
    private name: string;
    private category: Category;
    private price: number;
    private discount: number; // main discount as percentage (e.g., 0.1 for 10%)
    private stockQuantity: number;
    private seller: Seller;
    private discounts: Discount[] = [];
    private store?: Store; // Optional: associate with a store

    constructor(
        productID: number,
        name: string,
        category: Category,
        price: number,
        discount: number,
        stockQuantity: number,
        seller: Seller,
        store?: Store // Optional
    ) {
        this.productID = productID;
        this.name = name;
        this.category = category;
        this.price = price;
        this.discount = discount;
        this.stockQuantity = stockQuantity;
        this.seller = seller;
        this.store = store;
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

    getCategory(): Category {
        return this.category;
    }

    setCategory(category: Category): void {
        this.category = category;
    }

    getPrice(): number {
        return this.price;
    }

    setPrice(price: number): void {
        if (price < 0) throw new Error("Price cannot be negative.");
        this.price = price;
    }

    getDiscount(): number {
        return this.discount;
    }

    setDiscount(discount: number): void {
        if (discount < 0) throw new Error("Discount cannot be negative.");
        this.discount = discount;
    }

    getStockQuantity(): number {
        return this.stockQuantity;
    }

    setStockQuantity(stockQuantity: number): void {
        if (stockQuantity < 0) throw new Error("Stock quantity cannot be negative.");
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

    addDiscount(discount: Discount): void {
        this.discounts.push(discount);
    }

    getStore(): Store | undefined {
        return this.store;
    }

    setStore(store: Store): void {
        this.store = store;
    }

    isAvailable(): boolean {
        return this.stockQuantity > 0;
    }

    getFinalPrice(): number {
        // Apply main discount (percentage) and all additional discounts (percentage or fixed)
        let finalPrice = this.price - (this.price * this.discount);
        for (const d of this.discounts) {
            if (d.getDiscountType().toLowerCase() === "percentage") {
                finalPrice -= (finalPrice * d.getDiscountValue());
            } else if (d.getDiscountType().toLowerCase() === "fixed") {
                finalPrice -= d.getDiscountValue();
            }
        }
        return Math.max(0, finalPrice);
    }
}