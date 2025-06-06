import { Order } from "../order/Order";

export class Refund {
  constructor(
    private refundID: number,
    private order: Order,
    private amount: number,
    private reason: string,
    private refundDate: Date,
    private status: string
  ) {}

  getRefundID(): number {
    return this.refundID;
  }

  getOrder(): Order {
    return this.order;
  }

  getAmount(): number {
    return this.amount;
  }

  getReason(): string {
    return this.reason;
  }

  getRefundDate(): Date {
    return this.refundDate;
  }

  getStatus(): string {
    return this.status;
  }

  setOrder(order: Order): void {
    this.order = order;
  }

  setAmount(amount: number): void {
    this.amount = amount;
  }

  setReason(reason: string): void {
    this.reason = reason;
  }

  setRefundDate(refundDate: Date): void {
    this.refundDate = refundDate;
  }

  setStatus(status: string): void {
    this.status = status;
  }
}
