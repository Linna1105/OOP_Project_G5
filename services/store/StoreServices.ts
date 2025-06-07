import { Store } from "../../models/store/Store";
import { Product } from "../../models/product/Product";

export class StoreServices {
    addProduct(store: Store, product: Product): void {
        store.addProduct(product);
    }

    removeProduct(store: Store, productID: number): void {
        store.removeProduct(productID);
    }

    getProducts(store: Store): Product[] {
        return store.getProducts();
    }

    // Add more store-related business logic as needed
}