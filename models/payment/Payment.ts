import { Order } from "../order/Order";
import { PaymentMethod } from "./PaymentMethod";

export class Payment {
    private paymentID: number;
    private order: Order;
    private paymentMethod: PaymentMethod;
    private amount: number;
    private status: string;
    private paidDate: Date;

    constructor(
        paymentID: number,
        order: Order,
        paymentMethod: PaymentMethod,
        amount: number,
        status: string,
        paidDate: Date
    ) {
        this.paymentID = paymentID;
        this.order = order;
        this.paymentMethod = paymentMethod;
        this.amount = amount;
        this.status = status;
        this.paidDate = paidDate;
    }

   /**
 * Returns the unique ID of the payment.
 * @returns {number} The payment ID.
 */
getPaymentID(): number {
    return this.paymentID;
}

/**
 * Returns the order associated with this payment.
 * @returns {Order} The order object.
 */
getOrder(): Order {
    return this.order;
}

/**
 * Returns the payment method used.
 * @returns {PaymentMethod} The payment method object.
 */
getPaymentMethod(): PaymentMethod {
    return this.paymentMethod;
}

/**
 * Returns the amount paid.
 * @returns {number} The payment amount.
 */
getAmount(): number {
    return this.amount;
}

/**
 * Returns the current status of the payment.
 * @returns {string} The status (e.g., 'pending', 'completed').
 */
getStatus(): string {
    return this.status;
}

/**
 * Returns the date when the payment was made.
 * @returns {Date} The paid date.
 */
getPaidDate(): Date {
    return this.paidDate;
}

/**
 * Updates the status of the payment.
 * @param {string} status - The new status to set.
 */
setStatus(status: string): void {
    this.status = status;
}

/**
 * Sets or updates the date the payment was made.
 * @param {Date} date - The date the payment was completed.
 */
setPaidDate(date: Date): void {
    this.paidDate = date;
}

}
