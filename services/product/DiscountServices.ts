import { Discount } from "../../models/product/Discount";

export class DiscountServices {
   /**
 * Applies a given discount to a specified amount and returns the discounted amount.
 * - If the discount is not active (checked via `isActiveDiscount`), returns the original amount.
 * - If the discount type is "percentage", reduces the amount by that percentage.
 * - If the discount type is "fixed", subtracts a fixed value from the amount, ensuring the result doesn't go below zero.
 * - If discount type is unrecognized, returns the original amount.
 * 
 * @param discount - The Discount object to apply.
 * @param amount - The original amount before discount.
 * @returns The amount after applying the discount.
 */
applyDiscount(discount: Discount, amount: number): number {
    if (!this.isActiveDiscount(discount)) return amount;

    if (discount.getDiscountType().toLowerCase() === "percentage") {
        return amount - (amount * discount.getDiscountValue());
    } else if (discount.getDiscountType().toLowerCase() === "fixed") {
        return Math.max(0, amount - discount.getDiscountValue());
    }

    return amount;
}

/**
 * Checks if the given discount is currently active and applicable.
 * This method calls the `isActiveDiscount` method of the Discount class.
 * 
 * @param discount - The Discount object to check.
 * @returns True if discount is active and can be applied, false otherwise.
 */
isActiveDiscount(discount: Discount): boolean {
    return discount.isActiveDiscount();
}

}