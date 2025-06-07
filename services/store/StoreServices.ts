import { Store } from "../../models/store/Store";
import { Product } from "../../models/product/Product";

export class StoreServices {
  /**
 * Adds a product to the specified store.
 * 
 * @param store - The store to which the product will be added.
 * @param product - The product instance to add.
 */
addProduct(store: Store, product: Product): void {
    store.addProduct(product);
}

/**
 * Removes a product from the specified store by its product ID.
 * 
 * @param store - The store from which the product will be removed.
 * @param productID - The ID of the product to remove.
 */
removeProduct(store: Store, productID: number): void {
    store.removeProduct(productID);
}

/**
 * Retrieves all products from the specified store.
 * 
 * @param store - The store from which to get the products.
 * @returns An array of Product objects available in the store.
 */
getProducts(store: Store): Product[] {
    return store.getProducts();
}


    // Add more store-related business logic as needed
}