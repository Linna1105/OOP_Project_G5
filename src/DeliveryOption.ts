import { DeliveryType } from "./DeliveryType";

export class DeliveryOption {
    private type: DeliveryType;
    private fee: number;

    constructor(type: DeliveryType, fee: number) {
        this.type = type;
        this.fee = fee;
    }

    getType(): DeliveryType {
        return this.type;
    }

    getFee(): number {
        return this.fee;
    }

    setType(type: DeliveryType): void {
        this.type = type;
        console.log(`Delivery type updated to ${this.type}.`);
    }

    setFee(fee: number): void {
        this.fee = fee;
        console.log(`Delivery fee updated to ${this.fee}.`);
    }
}