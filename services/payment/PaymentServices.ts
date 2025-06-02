import { Payment } from "../../models/payment/Payment";
import { PaymentMethod } from "../../models/payment/PaymentMethod";

export class PaymentServices {
    processPayment(payment: Payment): boolean {
        if (payment.getAmount() > 0 && payment.getStatus() !== "Paid") {
            // Handle special case for CashOnDelivery
            if (payment.getPaymentMethod() === PaymentMethod.CashOnDelivery) {
                console.log("Cash on Delivery: Payment will be collected upon delivery.");
                payment.setStatus("Pending");
            } else {
                payment.setStatus("Paid");
                payment.setPaidDate(new Date());
                console.log("Payment processed successfully.");
            }
            return true;
        }
        console.log("Payment was not processed. Either already paid or invalid amount.");
        return false;
    }

    refund(payment: Payment): void {
        if (payment.getStatus() === "Paid") {
            payment.setStatus("Refunded");
            console.log(`Payment #${payment.getPaymentID()} has been refunded.`);
        } else {
            console.log(`Cannot refund payment #${payment.getPaymentID()} — status is '${payment.getStatus()}'`);
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
