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

    /**
 * Returns the product ID.
 * @returns {number} The unique identifier for the product.
 */
getProductID(): number {
    return this.productID;
}

/**
 * Sets the product ID.
 * @param {number} productID - The unique identifier to assign to the product.
 */
setProductID(productID: number): void {
    this.productID = productID;
}

/**
 * Returns the product name.
 * @returns {string} The name of the product.
 */
getName(): string {
    return this.name;
}

/**
 * Sets the product name.
 * @param {string} name - The name to assign to the product.
 */
setName(name: string): void {
    this.name = name;
}

/**
 * Returns the category the product belongs to.
 * @returns {Category} The product category object.
 */
getCategory(): Category {
    return this.category;
}

/**
 * Sets the category of the product.
 * @param {Category} category - The category to assign to the product.
 */
setCategory(category: Category): void {
    this.category = category;
}

/**
 * Returns the base price of the product.
 * @returns {number} The product price.
 */
getPrice(): number {
    return this.price;
}

/**
 * Sets the base price of the product.
 * Throws error if price is negative.
 * @param {number} price - The price to set.
 */
setPrice(price: number): void {
    if (price < 0) throw new Error("Price cannot be negative.");
    this.price = price;
}

/**
 * Returns the main discount as a decimal (e.g., 0.2 for 20%).
 * @returns {number} The discount value.
 */
getDiscount(): number {
    return this.discount;
}

/**
 * Sets the main discount for the product.
 * Throws error if discount is negative.
 * @param {number} discount - The discount value as decimal.
 */
setDiscount(discount: number): void {
    if (discount < 0) throw new Error("Discount cannot be negative.");
    this.discount = discount;
}

/**
 * Returns the stock quantity available for the product.
 * @returns {number} The number of items in stock.
 */
getStockQuantity(): number {
    return this.stockQuantity;
}

/**
 * Sets the stock quantity.
 * Throws error if quantity is negative.
 * @param {number} stockQuantity - The stock count.
 */
setStockQuantity(stockQuantity: number): void {
    if (stockQuantity < 0) throw new Error("Stock quantity cannot be negative.");
    this.stockQuantity = stockQuantity;
}

/**
 * Returns the seller associated with the product.
 * @returns {Seller} The seller object.
 */
getSeller(): Seller {
    return this.seller;
}

/**
 * Sets the seller for the product.
 * @param {Seller} seller - The seller to assign.
 */
setSeller(seller: Seller): void {
    this.seller = seller;
}

/**
 * Returns all discounts applicable to the product.
 * @returns {Discount[]} Array of discount objects.
 */
getDiscounts(): Discount[] {
    return this.discounts;
}

/**
 * Sets multiple discounts for the product.
 * @param {Discount[]} discounts - Array of discounts.
 */
setDiscounts(discounts: Discount[]): void {
    this.discounts = discounts;
}

/**
 * Adds a single discount to the product's discount list.
 * @param {Discount} discount - Discount to add.
 */
addDiscount(discount: Discount): void {
    this.discounts.push(discount);
}

/**
 * Returns the store where the product is available (if any).
 * @returns {Store | undefined} Store object or undefined.
 */
getStore(): Store | undefined {
    return this.store;
}

/**
 * Sets the store for the product.
 * @param {Store} store - Store to assign.
 */
setStore(store: Store): void {
    this.store = store;
}

/**
 * Checks if the product is available for purchase.
 * @returns {boolean} True if stockQuantity > 0, otherwise false.
 */
isAvailable(): boolean {
    return this.stockQuantity > 0;
}

/**
 * Calculates and returns the final price after applying
 * the main discount and any additional discounts.
 * Handles both percentage and fixed amount discounts.
 * Ensures price never drops below zero.
 * @returns {number} The final calculated price.
 */
getFinalPrice(): number {
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