import { Product } from "../../models/product/Product";
import { Discount } from "../../models/product/Discount";

export class ProductServices {
    /**
     * Checks if a product is currently available (in stock).
     * @param product - The Product to check availability for.
     * @returns True if the product is available, otherwise false.
     */
    isAvailable(product: Product): boolean {
        return product.isAvailable();
    }

    /**
     * Sets the discount for a product.
     * @param product - The Product to set the discount for.
     * @param discount - The Discount to set.
     */
    setDiscount(product: Product, discount: Discount): void {
        product.setDiscount(discount);
    }

    /**
     * Retrieves the discount applied to a product.
     * @param product - The Product to retrieve the discount from.
     * @returns The Discount object or undefined.
     */
    getDiscount(product: Product): Discount | undefined {
        return product.getDiscount();
    }

    /**
     * Calculates and returns the final price of the product after applying the discount.
     * @param product - The Product to calculate final price for.
     * @returns The final price as a number.
     */
    getFinalPrice(product: Product): number {
        return product.getFinalPrice();
    }

    /**
     * Sets the stock quantity of a product.
     * @param product - The Product whose stock quantity will be updated.
     * @param quantity - The new stock quantity to set.
     */
    setStockQuantity(product: Product, quantity: number): void {
        product.setStockQuantity(quantity);
    }

    /**
     * Sets the base price of a product.
     * @param product - The Product whose price will be updated.
     * @param price - The new price to set.
     */
    setPrice(product: Product, price: number): void {
        product.setPrice(price);
    }
}