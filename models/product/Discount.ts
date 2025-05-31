import { Product } from "../product/Product"; // Adjust path as needed

export class Discount {
    private discountType: string;
    private discountValue: number;
    private isProductLevel: boolean;
    private product: Product;
    private minOrderAmount: number;
    private isActive: boolean;

    constructor(
        discountType: string,
        discountValue: number,
        isProductLevel: boolean,
        product: Product,
        minOrderAmount: number,
        isActive: boolean
    ) {
        this.discountType = discountType;
        this.discountValue = discountValue;
        this.isProductLevel = isProductLevel;
        this.product = product;
        this.minOrderAmount = minOrderAmount;
        this.isActive = isActive;
    }

    getDiscountType(): string {
        return this.discountType;
    }

    setDiscountType(discountType: string): void {
        this.discountType = discountType;
    }

    getDiscountValue(): number {
        return this.discountValue;
    }

    setDiscountValue(discountValue: number): void {
        this.discountValue = discountValue;
    }

    isProductLevelDiscount(): boolean {
        return this.isProductLevel;
    }

    setProductLevel(isProductLevel: boolean): void {
        this.isProductLevel = isProductLevel;
    }

    getProduct(): Product {
        return this.product;
    }

    setProduct(product: Product): void {
        this.product = product;
    }

    getMinOrderAmount(): number {
        return this.minOrderAmount;
    }

    setMinOrderAmount(minOrderAmount: number): void {
        this.minOrderAmount = minOrderAmount;
    }

    isActiveDiscount(): boolean {
        return this.isActive;
    }

    setActive(isActive: boolean): void {
        this.isActive = isActive;
    }
}