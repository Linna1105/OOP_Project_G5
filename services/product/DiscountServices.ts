import { Discount } from "../../models/product/Discount";

export class DiscountServices {
    applyDiscount(discount: Discount, amount: number): number {
        if (!this.isActiveDiscount(discount)) return amount;
        if (discount.getDiscountType().toLowerCase() === "percentage") {
            return amount - (amount * discount.getDiscountValue());
        } else if (discount.getDiscountType().toLowerCase() === "fixed") {
            return Math.max(0, amount - discount.getDiscountValue());
        }
        return amount;
    }

    isActiveDiscount(discount: Discount): boolean {
        return discount.isActiveDiscount();
    }
}