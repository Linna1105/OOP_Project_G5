import { Invoice } from "../../models/invoice/Invoice";

export class InvoiceServices {
  /**
   * Returns formatted invoice details as a string, including items and shipping address.
   *
   * @param invoice - The Invoice object to retrieve details from.
   * @returns A formatted string containing invoice details.
   */
  getInvoiceDetails(invoice: Invoice): string {
    const order = invoice.getOrder();
    const customer = order.getCustomer();
    const shippingAddress = customer.getShippingAddress();
    const items = order.getItems()
      .map(item =>
        `    - ${item.getProduct().getName()} x${item.getQuantity()}`
      ).join('\n');

    return `
Invoice ID: ${invoice.getInvoiceID()}
Order ID: ${order.getOrderID()}
Issue Date: ${invoice.getIssueDate().toISOString().split('T')[0]}
Total Amount: $${invoice.getTotalAmount().toFixed(2)}
Customer: ${customer.getName()} (${customer.getEmail()})
Shipping Address: ${shippingAddress.getFullAddress()}
Items:
${items}
`;
  }

  updateTotalAmount(invoice: Invoice, newTotal: number): void {
    invoice.setTotalAmount(newTotal);
  }

  updateIssueDate(invoice: Invoice, newDate: Date): void {
    invoice.setIssueDate(newDate);
  }
}