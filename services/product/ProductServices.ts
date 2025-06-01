import { Product } from "../../models/product/Product";
import { Discount } from "../../models/product/Discount";

export class ProductServices {
    isAvailable(product: Product): boolean {
        return product.getStockQuantity() > 0;
    }

    addDiscount(product: Product, discount: Discount): void {
        product.getDiscounts().push(discount);
    }

    getDiscounts(product: Product): Discount[] {
        return product.getDiscounts();
    }
}
