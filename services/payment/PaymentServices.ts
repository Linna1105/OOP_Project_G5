import { Payment } from "../../models/payment/Payment";
import { PaymentMethod } from "../../models/payment/PaymentMethod";

export class PaymentServices {
   /**
 * Processes a payment by updating its status based on the payment method and amount.
 * - If the payment amount is greater than zero and not already paid:
 *   - For CashOnDelivery, marks payment as "Pending" since payment is collected on delivery.
 *   - For other methods, marks payment as "Paid" and sets the paid date to now.
 * @param payment - The Payment object to be processed.
 * @returns true if payment was processed, false otherwise.
 */
processPayment(payment: Payment): boolean {
    if (payment.getAmount() > 0 && payment.getStatus() !== "Paid") {
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

/**
 * Issues a refund for a payment if it has been paid.
 * Updates the payment status to "Refunded" and logs the refund.
 * If payment is not in "Paid" status, logs that refund cannot be performed.
 * @param payment - The Payment object to refund.
 */
refund(payment: Payment): void {
    if (payment.getStatus() === "Paid") {
        payment.setStatus("Refunded");
        console.log(`Payment #${payment.getPaymentID()} has been refunded.`);
    } else {
        console.log(`Cannot refund payment #${payment.getPaymentID()} — status is '${payment.getStatus()}'`);
    }
}

/**
 * Returns a formatted summary string of the payment details including:
 * Payment ID, associated Order ID, payment method, amount, status, and paid date.
 * @param payment - The Payment object.
 * @returns A formatted string summarizing the payment.
 */
getPaymentSummary(payment: Payment): string {
    return `Payment #${payment.getPaymentID()} for Order #${payment.getOrder().getOrderID()}
Method: ${payment.getPaymentMethod()}
Amount: $${payment.getAmount().toFixed(2)}
Status: ${payment.getStatus()}
Paid Date: ${payment.getPaidDate().toLocaleDateString()}`;
}

}
