
export class Discount {
    private discountType: string;
    private discountValue: number;
    private isProductLevel: boolean;
    private minOrderAmount: number;
    private isActive: boolean;
    private expirationDate?: Date;
    private code?: string;
    private description?: string;
    private usageLimit?: number;
    private usageCount: number = 0;

    constructor(
        discountType: string,
        discountValue: number,
        isProductLevel: boolean,
        minOrderAmount: number,
        isActive: boolean
    ) {
        this.discountType = discountType;
        this.discountValue = discountValue;
        this.isProductLevel = isProductLevel;
        this.minOrderAmount = minOrderAmount;
        this.isActive = isActive;
    }

   /**
 * Returns the type of discount (e.g., "percentage", "fixed").
 * @returns {string} The discount type.
 */
getDiscountType(): string {
    return this.discountType;
}

/**
 * Sets the discount type.
 * @param {string} discountType - The type of discount to set.
 */
setDiscountType(discountType: string): void {
    this.discountType = discountType;
}

/**
 * Returns the discount value (amount or percentage).
 * @returns {number} The discount value.
 */
getDiscountValue(): number {
    return this.discountValue;
}

/**
 * Sets the discount value.
 * @param {number} discountValue - The value of the discount.
 */
setDiscountValue(discountValue: number): void {
    this.discountValue = discountValue;
}

/**
 * Returns whether the discount applies at the product level.
 * @returns {boolean} True if it’s a product-level discount, false otherwise.
 */
isProductLevelDiscount(): boolean {
    return this.isProductLevel;
}

/**
 * Sets if the discount applies at the product level.
 * @param {boolean} isProductLevel - True for product-level discount.
 */
setProductLevel(isProductLevel: boolean): void {
    this.isProductLevel = isProductLevel;
}

/**
 * Returns the minimum order amount required to apply the discount.
 * @returns {number} The minimum order amount.
 */
getMinOrderAmount(): number {
    return this.minOrderAmount;
}

/**
 * Sets the minimum order amount needed to use the discount.
 * @param {number} minOrderAmount - The minimum order amount.
 */
setMinOrderAmount(minOrderAmount: number): void {
    this.minOrderAmount = minOrderAmount;
}

/**
 * Checks if the discount is currently active:
 * - It is marked active
 * - It is not expired
 * - It can still be used (usage limits)
 * @returns {boolean} True if discount is active and usable, false otherwise.
 */
isActiveDiscount(): boolean {
    return this.isActive && !this.isExpired() && this.canUse();
}

/**
 * Sets whether the discount is active.
 * @param {boolean} isActive - True to activate, false to deactivate.
 */
setActive(isActive: boolean): void {
    this.isActive = isActive;
}

/**
 * Returns the discount percentage if the discount type is "percentage".
 * @returns {number} The percentage value or 0 if not a percentage discount.
 */
getPercentage(): number {
    if (this.discountType.toLowerCase() === "percentage") {
        return this.discountValue;
    }
    return 0;
}

/**
 * Sets the expiration date for the discount.
 * @param {Date} date - The expiration date.
 */
setExpirationDate(date: Date): void {
    this.expirationDate = date;
}

/**
 * Returns the expiration date of the discount, if set.
 * @returns {Date | undefined} The expiration date or undefined.
 */
getExpirationDate(): Date | undefined {
    return this.expirationDate;
}

/**
 * Checks if the discount has expired.
 * @returns {boolean} True if the current date is past expiration, false otherwise.
 */
isExpired(): boolean {
    return this.expirationDate ? new Date() > this.expirationDate : false;
}

/**
 * Sets the discount code (e.g., coupon code).
 * @param {string} code - The code to set.
 */
setCode(code: string): void {
    this.code = code;
}

/**
 * Returns the discount code, if any.
 * @returns {string | undefined} The discount code or undefined.
 */
getCode(): string | undefined {
    return this.code;
}

/**
 * Sets the description for the discount.
 * @param {string} desc - Description text.
 */
setDescription(desc: string): void {
    this.description = desc;
}

/**
 * Returns the discount description, if any.
 * @returns {string | undefined} The description or undefined.
 */
getDescription(): string | undefined {
    return this.description;
}

/**
 * Sets the maximum number of times the discount can be used.
 * @param {number} limit - The usage limit.
 */
setUsageLimit(limit: number): void {
    this.usageLimit = limit;
}

/**
 * Returns the usage limit of the discount.
 * @returns {number | undefined} The usage limit or undefined if unlimited.
 */
getUsageLimit(): number | undefined {
    return this.usageLimit;
}

/**
 * Increments the count of how many times the discount has been used.
 */
incrementUsage(): void {
    this.usageCount++;
}

/**
 * Returns the number of times the discount has been used.
 * @returns {number} The usage count.
 */
getUsageCount(): number {
    return this.usageCount;
}

/**
 * Checks if the discount can still be used based on usage limits.
 * @returns {boolean} True if under usage limit or unlimited, false if limit reached.
 */
canUse(): boolean {
    return this.usageLimit === undefined || this.usageCount < this.usageLimit;
}


}