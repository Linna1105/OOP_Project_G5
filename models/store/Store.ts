import { Address } from "../address/Address";
import { Seller } from "../user/Seller";
import { Product } from "../product/Product";

export class Store {
    private storeID: number;
    private name: string;
    private description: string;
    private address: Address;
    private seller: Seller;
    private products: Product[] = [];

    constructor(storeID: number, name: string, description: string, address: Address, seller: Seller) {
        this.storeID = storeID;
        this.name = name;
        this.description = description;
        this.address = address;
        this.seller = seller;
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
     * Returns the seller associated with the store.
     * @returns {Seller} The seller object managing the store.
     */
    getSeller(): Seller {
        return this.seller;
    }

    /**
     * Sets the seller associated with the store.
     * @param {Seller} seller - The seller to assign.
     */
    setSeller(seller: Seller): void {
        this.seller = seller;
    }

    /**
     * Returns the list of products sold by the store.
     * @returns {Product[]} An array of Product objects.
     */
    getProducts(): Product[] {
        return this.products;
    }

    /**
     * Adds a product to the store's product list and sets this store in the product.
     * @param {Product} product - The product to add.
     */
    addProduct(product: Product): void {
        this.products.push(product);
        product.setStore(this); // Maintain bi-directional association
    }

    /**
     * Removes a product from the store's product list by product ID.
     * @param {number} productID - The ID of the product to remove.
     */
    removeProduct(productID: number): void {
        this.products = this.products.filter(p => p.getProductID() !== productID);
    }

}