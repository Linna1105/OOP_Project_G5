import { DeliveryType } from "./DeliveryType";

export class DeliveryOption {
    private type: DeliveryType;
    private fee: number;

    constructor(type: DeliveryType, fee: number) {
        this.type = type;
        this.fee = fee;
    }

    /**
     * Returns the type of delivery.
     * @returns The delivery type as a DeliveryType enum or object.
     */
    getType(): DeliveryType {
        return this.type;
    }

    /**
     * Returns the delivery fee.
     * @returns The delivery fee as a number.
     */
    getFee(): number {
        return this.fee;
    }

    /**
     * Sets the delivery type.
     * Also logs the updated type to the console.
     * @param type - The delivery type to assign.
     */
    setType(type: DeliveryType): void {
        this.type = type;
        console.log(`Delivery type updated to ${this.type}.`);
    }

    /**
     * Sets the delivery fee.
     * Also logs the updated fee to the console.
     * @param fee - The delivery fee to assign.
     */
    setFee(fee: number): void {
        this.fee = fee;
        console.log(`Delivery fee updated to ${this.fee}.`);
    }

}