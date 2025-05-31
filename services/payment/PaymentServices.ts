import { Payment } from "../../models/payment/Payment";

export class PaymentServices {
    processPayment(payment: Payment): boolean {
        if (payment.getAmount() > 0 && payment.getStatus() !== "Paid") {
            payment.setStatus("Paid");
            payment.setPaidDate(new Date());
            return true;
        }
        return false;
    }

    refund(payment: Payment): void {
        if (payment.getStatus() === "Paid") {
            payment.setStatus("Refunded");
        }
    }

    getPaymentSummary(payment: Payment): string {
        return `Payment #${payment.getPaymentID()} for Order #${payment.getOrder().getOrderID()}
Method: ${payment.getPaymentMethod()}
Amount: $${payment.getAmount().toFixed(2)}
Status: ${payment.getStatus()}
Paid Date: ${payment.getPaidDate().toLocaleDateString()}`;
    }
}