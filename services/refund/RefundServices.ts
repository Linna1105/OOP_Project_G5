import { Refund } from "../../models/refund/Refund";

export class RefundServices {

  /**
 * Updates the status of a given refund.
 * 
 * @param refund - The Refund object to update.
 * @param status - The new status string to set.
 */
updateStatus(refund: Refund, status: string): void {
    refund.setStatus(status);
}

/**
 * Updates the refund amount.
 * 
 * @param refund - The Refund object to update.
 * @param amount - The new refund amount to set.
 */
updateAmount(refund: Refund, amount: number): void {
    refund.setAmount(amount);
}

/**
 * Updates the reason for the refund.
 * 
 * @param refund - The Refund object to update.
 * @param reason - The new reason string explaining the refund.
 */
updateReason(refund: Refund, reason: string): void {
    refund.setReason(reason);
}

/**
 * Updates the date when the refund was issued.
 * 
 * @param refund - The Refund object to update.
 * @param refundDate - The new Date object representing refund date.
 */
updateRefundDate(refund: Refund, refundDate: Date): void {
    refund.setRefundDate(refundDate);
}

/**
 * Generates a concise summary string of the refund details.
 * This is useful for logging or displaying in a table.
 * 
 * @param refund - The Refund object to summarize.
 * @returns A formatted string summarizing the refund's ID, associated order ID, amount, reason, date, and status.
 */
getRefundSummary(refund: Refund): string {
    const order   = refund.getOrder();
    // Safely get order ID if the method exists, else default to "N/A"
    const orderID = (order as any).getOrderID?.() ?? "N/A";  
    return `Refund #${refund.getRefundID()} | Order #${orderID} | ` +
           `Amount: $${refund.getAmount().toFixed(2)} | ` +
           `Reason: ${refund.getReason()} | ` +
           `Date: ${refund.getRefundDate().toLocaleDateString()} | ` +
           `Status: ${refund.getStatus()}`;
}

}
