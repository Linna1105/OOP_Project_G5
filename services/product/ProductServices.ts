import { Product } from "../../models/product/Product";

export class ProductServices {
    getFinalPrice(product: Product): number {
        return product.getPrice() - (product.getPrice() * product.getDiscount());
    }

    isAvailable(product: Product): boolean {
        return product.getStockQuantity() > 0;
    }
}