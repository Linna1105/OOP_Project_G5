import { Order } from "../../models/order/Order";

export class Invoice {
    private invoiceID: number;
    private order: Order;
    private issueDate: Date;
    private totalAmount: number;

    constructor(invoiceID: number, order: Order, issueDate: Date, totalAmount: number) {
        if (invoiceID <= 0) {
            throw new Error('Invoice ID must be a positive number');
        }
        if (totalAmount < 0) {
            throw new Error('Total amount cannot be negative');
        }
        if (!(issueDate instanceof Date) || isNaN(issueDate.getTime())) {
            throw new Error('Invalid issue date');
        }
        this.invoiceID = invoiceID;
        this.order = order;
        this.issueDate = issueDate;
        this.totalAmount = totalAmount;
    }

    /**
  * Returns the invoice ID.
  * @returns {number} The unique identifier of the invoice.
  */
    getInvoiceID(): number {
        return this.invoiceID;
    }

    /**
     * Returns the associated order object.
     * @returns {Order} The order related to this invoice.
     */
    getOrder(): Order {
        return this.order;
    }

    /**
     * Returns the issue date of the invoice.
     * @returns {Date} The date when the invoice was issued.
     */
    getIssueDate(): Date {
        return this.issueDate;
    }

    /**
     * Returns the total amount of the invoice.
     * @returns {number} The total monetary amount of the invoice.
     */
    getTotalAmount(): number {
        return this.totalAmount;
    }

    /**
     * Sets the total amount of the invoice.
     * @param {number} totalAmount - The total amount to set. Must be non-negative.
     * @throws Will throw an error if the total amount is negative.
     */
    setTotalAmount(totalAmount: number): void {
        if (totalAmount < 0) {
            throw new Error('Total amount cannot be negative');
        }
        this.totalAmount = totalAmount;
    }

    /**
     * Sets the issue date of the invoice.
     * @param {Date} issueDate - The date when the invoice was issued. Must be a valid Date object.
     * @throws Will throw an error if the date is invalid or not a Date instance.
     */
    setIssueDate(issueDate: Date): void {
        if (!(issueDate instanceof Date) || isNaN(issueDate.getTime())) {
            throw new Error('Invalid issue date');
        }
        this.issueDate = issueDate;
    }

}