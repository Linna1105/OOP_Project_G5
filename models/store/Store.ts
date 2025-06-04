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

    getStoreID(): number {
        return this.storeID;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getDescription(): string {
        return this.description;
    }

    setDescription(description: string): void {
        this.description = description;
    }

    getAddress(): Address {
        return this.address;
    }

    setAddress(address: Address): void {
        this.address = address;
    }

    getSeller(): Seller {
        return this.seller;
    }

    setSeller(seller: Seller): void {
        this.seller = seller;
    }

    getProducts(): Product[] {
        return this.products;
    }

    addProduct(product: Product): void {
        this.products.push(product);
        product.setStore(this); // Set the store reference in Product
    }

    removeProduct(productID: number): void {
        this.products = this.products.filter(p => p.getProductID() !== productID);
    }
}