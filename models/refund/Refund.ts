import { Order } from "../order/Order";

export class Refund {
  constructor(
    private refundID: number,
    private order: Order,
    private amount: number,
    private reason: string,
    private refundDate: Date,
    private status: string
  ) {}

 /**
 * Returns the unique refund ID.
 * @returns {number} The refund identifier.
 */
getRefundID(): number {
    return this.refundID;
}

/**
 * Returns the associated order for the refund.
 * @returns {Order} The order linked to this refund.
 */
getOrder(): Order {
    return this.order;
}

/**
 * Returns the refund amount.
 * @returns {number} The amount to be refunded.
 */
getAmount(): number {
    return this.amount;
}

/**
 * Returns the reason for the refund.
 * @returns {string} The explanation or reason for refund.
 */
getReason(): string {
    return this.reason;
}

/**
 * Returns the date when the refund was issued.
 * @returns {Date} The refund date.
 */
getRefundDate(): Date {
    return this.refundDate;
}

/**
 * Returns the current status of the refund.
 * @returns {string} The refund status (e.g., pending, completed).
 */
getStatus(): string {
    return this.status;
}

/**
 * Sets the order associated with the refund.
 * @param {Order} order - The order to link to this refund.
 */
setOrder(order: Order): void {
    this.order = order;
}

/**
 * Sets the refund amount.
 * @param {number} amount - The amount to refund.
 */
setAmount(amount: number): void {
    this.amount = amount;
}

/**
 * Sets the reason for the refund.
 * @param {string} reason - The explanation for refund.
 */
setReason(reason: string): void {
    this.reason = reason;
}

/**
 * Sets the refund date.
 * @param {Date} refundDate - The date refund was processed.
 */
setRefundDate(refundDate: Date): void {
    this.refundDate = refundDate;
}

/**
 * Sets the current refund status.
 * @param {string} status - The refund status (e.g., pending, approved).
 */
setStatus(status: string): void {
    this.status = status;
}

}
