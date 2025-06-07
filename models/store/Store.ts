import { Address } from "../address/Address";
import { Product } from "../product/Product";

export class Store {
    private storeID: number;
    private name: string;
    private description: string;
    private address: Address;
    private products: Product[] = [];

    constructor(storeID: number, name: string, description: string, address: Address, products: Product[] = []) {
        this.storeID = storeID;
        this.name = name;
        this.description = description;
        this.address = address;
        this.products = products;
    }

    /**
     * Returns the unique store ID.
     * @returns {number} The identifier of the store.
     */
    getStoreID(): number {
        return this.storeID;
    }

    /**
     * Returns the name of the store.
     * @returns {string} The store's name.
     */
    getName(): string {
        return this.name;
    }

    /**
     * Sets the store's name.
     * @param {string} name - The new name for the store.
     */
    setName(name: string): void {
        this.name = name;
    }

    /**
     * Returns the store's description.
     * @returns {string} The description text of the store.
     */
    getDescription(): string {
        return this.description;
    }

    /**
     * Sets the store's description.
     * @param {string} description - The description text to set.
     */
    setDescription(description: string): void {
        this.description = description;
    }

    /**
     * Returns the address of the store.
     * @returns {Address} The store's address object.
     */
    getAddress(): Address {
        return this.address;
    }

    /**
     * Sets the store's address.
     * @param {Address} address - The address object to assign.
     */
    setAddress(address: Address): void {
        this.address = address;
    }

    /**
     * Returns the list of products sold by the store.
     * @returns {Product[]} An array of Product objects.
     */
    getProducts(): Product[] {
        return this.products;
    }

    /**
     * Adds a product to the store's product list.
     * @param {Product} product - The product to add.
     */
    addProduct(product: Product): void {
        this.products.push(product);
        // No call to product.setStore(this)
    }

    /**
     * Removes a product from the store's product list by product ID.
     * @param {number} productID - The ID of the product to remove.
     */
    removeProduct(productID: number): void {
        this.products = this.products.filter(p => p.getProductID() !== productID);
    }

    /**
     * Sets the list of products for the store.
     * @param {Product[]} products - An array of Product objects to set.
     */
    setProducts(products: Product[]): void {
        this.products = products;
        // No call to product.setStore(this)
    }

    /**
     * Returns the number of products in the store.
     * @returns {number} The count of products available in the store.
     */
    getProductCount(): number {
        return this.products.length;
    }
}