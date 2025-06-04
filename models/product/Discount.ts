import { Product } from "../product/Product"; // Adjust path as needed

export class Discount {
    private discountType: string;
    private discountValue: number;
    private isProductLevel: boolean;
    private product: Product;
    private minOrderAmount: number;
    private isActive: boolean;

    // New properties
    private expirationDate?: Date;
    private code?: string;
    private description?: string;
    private usageLimit?: number;
    private usageCount: number = 0;

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
        return this.isActive && !this.isExpired() && this.canUse();
    }

    setActive(isActive: boolean): void {
        this.isActive = isActive;
    }

    getPercentage(): number {
        if (this.discountType.toLowerCase() === "percentage") {
            return this.discountValue;
        }
        return 0;
    }

    // New methods and properties

    setExpirationDate(date: Date): void {
        this.expirationDate = date;
    }

    getExpirationDate(): Date | undefined {
        return this.expirationDate;
    }

    isExpired(): boolean {
        return this.expirationDate ? new Date() > this.expirationDate : false;
    }

    setCode(code: string): void {
        this.code = code;
    }

    getCode(): string | undefined {
        return this.code;
    }

    setDescription(desc: string): void {
        this.description = desc;
    }

    getDescription(): string | undefined {
        return this.description;
    }

    setUsageLimit(limit: number): void {
        this.usageLimit = limit;
    }

    getUsageLimit(): number | undefined {
        return this.usageLimit;
    }

    incrementUsage(): void {
        this.usageCount++;
    }

    getUsageCount(): number {
        return this.usageCount;
    }

    canUse(): boolean {
        return this.usageLimit === undefined || this.usageCount < this.usageLimit;
    }

}