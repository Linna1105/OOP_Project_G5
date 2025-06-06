import { Refund } from "../../models/refund/Refund";

export class RefundServices {

  updateStatus(refund: Refund, status: string): void {
    refund.setStatus(status);
  }

  updateAmount(refund: Refund, amount: number): void {
    refund.setAmount(amount);
  }

  updateReason(refund: Refund, reason: string): void {
    refund.setReason(reason);
  }

  updateRefundDate(refund: Refund, refundDate: Date): void {
    refund.setRefundDate(refundDate);
  }

  /**
   * Returns a concise one-line summary that you can log or display in a table.
   * Adjust the Order getter names (`getOrderID`, `getItems`, …) to match
   * whatever you have in your Order class.
   */
  getRefundSummary(refund: Refund): string {
    const order   = refund.getOrder();
    const orderID = (order as any).getOrderID?.() ?? "N/A";  
    return `Refund #${refund.getRefundID()} | Order #${orderID} | ` +
           `Amount: $${refund.getAmount().toFixed(2)} | ` +
           `Reason: ${refund.getReason()} | ` +
           `Date: ${refund.getRefundDate().toLocaleDateString()} | ` +
           `Status: ${refund.getStatus()}`;
  }
}
