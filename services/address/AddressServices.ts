import { Address } from "../../models/address/Address";

export class AddressServices {
    getFullAddress(address: Address): string {
        return `${address.getStreet()}, ${address.getCity()}, ${address.getState()}, ${address.getCountry()} - ${address.getZipCode()}`;
    }
}