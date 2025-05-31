import { Invoice } from "../../models/invoice/Invoice";

export class InvoiceServices {
    getInvoiceDetails(invoice: Invoice): string {
        return `
            Invoice ID: ${invoice.getInvoiceID()}
            Order ID: ${invoice.getOrder().getOrderID()}
            Issue Date: ${invoice.getIssueDate().toISOString().split('T')[0]}
            Total Amount: $${invoice.getTotalAmount().toFixed(2)}
        `;
    }

    updateTotalAmount(invoice: Invoice, newTotal: number): void {
        invoice.setTotalAmount(newTotal);
    }

    updateIssueDate(invoice: Invoice, newDate: Date): void {
        invoice.setIssueDate(newDate);
    }
}