import { Product } from "../../models/product/Product";
import { Discount } from "../../models/product/Discount";

export class ProductServices {
/**
 * Checks if a product is currently available (in stock).
 * Delegates the check to the product's own isAvailable() method.
 * 
 * @param product - The Product to check availability for.
 * @returns True if the product is available, otherwise false.
 */
isAvailable(product: Product): boolean {
    return product.isAvailable();
}

/**
 * Adds a discount to a product's list of discounts.
 * Delegates the operation to the product's own addDiscount() method.
 * 
 * @param product - The Product to add the discount to.
 * @param discount - The Discount to add.
 */
addDiscount(product: Product, discount: Discount): void {
    product.addDiscount(discount);
}

/**
 * Retrieves all discounts applied to a product.
 * Delegates the operation to the product's own getDiscounts() method.
 * 
 * @param product - The Product to retrieve discounts from.
 * @returns An array of Discount objects associated with the product.
 */
getDiscounts(product: Product): Discount[] {
    return product.getDiscounts();
}

/**
 * Calculates and returns the final price of the product after applying all discounts.
 * Delegates the calculation to the product's own getFinalPrice() method.
 * 
 * @param product - The Product to calculate final price for.
 * @returns The final price as a number.
 */
getFinalPrice(product: Product): number {
    return product.getFinalPrice();
}

/**
 * Sets the stock quantity of a product.
 * Delegates the operation to the product's own setStockQuantity() method.
 * 
 * @param product - The Product whose stock quantity will be updated.
 * @param quantity - The new stock quantity to set.
 */
setStockQuantity(product: Product, quantity: number): void {
    product.setStockQuantity(quantity);
}

/**
 * Sets the base price of a product.
 * Delegates the operation to the product's own setPrice() method.
 * 
 * @param product - The Product whose price will be updated.
 * @param price - The new price to set.
 */
setPrice(product: Product, price: number): void {
    product.setPrice(price);
}

}