import { Product } from "../../models/product/Product";
import { Discount } from "../../models/product/Discount";

export class ProductServices {
    isAvailable(product: Product): boolean {
        return product.isAvailable();
    }

    addDiscount(product: Product, discount: Discount): void {
        product.addDiscount(discount);
    }

    getDiscounts(product: Product): Discount[] {
        return product.getDiscounts();
    }

    getFinalPrice(product: Product): number {
        return product.getFinalPrice();
    }

    setStockQuantity(product: Product, quantity: number): void {
        product.setStockQuantity(quantity);
    }

    setPrice(product: Product, price: number): void {
        product.setPrice(price);
    }
}