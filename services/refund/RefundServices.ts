import { Refund } from "../../models/refund/Refund";

export class RefundServices {
    updateStatus(refund: Refund, status: string): void {
        refund.setStatus(status);
    }

    updateAmount(refund: Refund, amount: number): void {
        refund.setAmount(amount);
    }

    updateRefundDate(refund: Refund, refundDate: Date): void {
        refund.setRefundDate(refundDate);
    }

    getRefundSummary(refund: Refund): string {
        return `Refund #${refund.getRefundID()} for OrderItem (Product: ${refund.getOrderItem().getProduct().getName()})
Amount: $${refund.getAmount().toFixed(2)}
Date: ${refund.getRefundDate().toLocaleDateString()}
Status: ${refund.getStatus()}`;
    }
}