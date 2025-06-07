import { Discount } from "../product/Discount";
import { Category } from "../product/Category";

export class Product {
    private productID: number;
    private name: string;
    private category: Category;
    private price: number;
    private stockQuantity: number;
    private discount?: Discount;

    constructor(
        productID: number,
        name: string,
        category: Category,
        price: number,
        stockQuantity: number,
        discount?: Discount,
    ) {
        this.productID = productID;
        this.name = name;
        this.category = category;
        this.price = price;
        this.stockQuantity = stockQuantity;
        this.discount = discount;
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

    getStockQuantity(): number {
        return this.stockQuantity;
    }

    setStockQuantity(stockQuantity: number): void {
        if (stockQuantity < 0) throw new Error("Stock quantity cannot be negative.");
        this.stockQuantity = stockQuantity;
    }

    /**
     * Returns the discount object if set.
     * @returns {Discount | undefined}
     */
    getDiscount(): Discount | undefined {
        return this.discount;
    }

    /**
     * Sets the discount for the product.
     * @param {Discount} discount
     */
    setDiscount(discount: Discount): void {
        this.discount = discount;
    }

    isAvailable(): boolean {
        return this.stockQuantity > 0;
    }

    /**
     * Calculates and returns the final price after applying the discount.
     * Handles both percentage and fixed amount discounts.
     * Ensures price never drops below zero.
     * @returns {number} The final calculated price.
     */
    getFinalPrice(): number {
        let finalPrice = this.price;
        if (this.discount) {
            if (this.discount.getDiscountType().toLowerCase() === "percentage") {
                finalPrice -= (finalPrice * this.discount.getDiscountValue());
            } else if (this.discount.getDiscountType().toLowerCase() === "fixed") {
                finalPrice -= this.discount.getDiscountValue();
            }
        }
        return Math.max(0, finalPrice);
    }
}