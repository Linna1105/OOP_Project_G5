import { Invoice } from "../../models/invoice/Invoice";

export class InvoiceServices {
  /**
 * Returns formatted invoice details as a string.
 *
 * @param invoice - The Invoice object to retrieve details from.
 * @returns A formatted string containing invoice ID, order ID, issue date, and total amount.
 */
getInvoiceDetails(invoice: Invoice): string {
    return `
        Invoice ID: ${invoice.getInvoiceID()}
        Order ID: ${invoice.getOrder().getOrderID()}
        Issue Date: ${invoice.getIssueDate().toISOString().split('T')[0]}
        Total Amount: $${invoice.getTotalAmount().toFixed(2)}
    `;
}

/**
 * Updates the total amount of an invoice.
 *
 * @param invoice - The Invoice object to update.
 * @param newTotal - The new total amount to set.
 */
updateTotalAmount(invoice: Invoice, newTotal: number): void {
    invoice.setTotalAmount(newTotal);
}

/**
 * Updates the issue date of an invoice.
 *
 * @param invoice - The Invoice object to update.
 * @param newDate - The new issue date to set.
 */
updateIssueDate(invoice: Invoice, newDate: Date): void {
    invoice.setIssueDate(newDate);
}

}