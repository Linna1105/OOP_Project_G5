export class Discount  {
    private discountType: string;
    private discountvalue: number;
    private isProductLevel: boolean;
    private priduct : string;
    private minOrderAmount: number;
    private isActive: boolean;
  constructor(discountType: string, discountvalue: number, isProductLevel: boolean, priduct: string, minOrderAmount: number, isActive: boolean) {
    this.discountType = discountType;
    this.discountvalue = discountvalue;
    this.isProductLevel = isProductLevel;
    this.priduct = priduct;
    this.minOrderAmount = minOrderAmount;
    this.isActive = isActive;
  }
  getDiscountType(): string {
    return this.discountType;
  }
  getDiscountvalue(): number {
    return this.discountvalue;
  }
    isProductLevelDiscount(): boolean {
        return this.isProductLevel;
    }
    getProduct(): string {
        return this.priduct;
    }
    getMinOrderAmount(): number {
        return this.minOrderAmount;
    }
    isActives(): boolean {
        return this.isActive;
    }
    setDiscountType(discountType: string): void {
        this.discountType = discountType;
    }
    setDiscountvalue(discountvalue: number): void {
        this.discountvalue = discountvalue;
    }
    setIsProductLevel(isProductLevel: boolean): void {
        this.isProductLevel = isProductLevel;
    }
    setProduct(product: string): void {
        this.priduct = product;
    }
    setMinOrderAmount(minOrderAmount: number): void {
        this.minOrderAmount = minOrderAmount;
    }
    setIsActive(isActive: boolean): void {
        this.isActive = isActive;
    }
}   