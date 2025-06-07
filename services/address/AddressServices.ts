import { Address } from "../../models/address/Address";

export class AddressServices {
  /**
* Returns a formatted full address string from the given Address object.
* The returned string includes street, city, state, country, and zip code,
* formatted in a readable manner.
*
* @param address - An instance of the Address class containing location details.
* @returns A single string representing the full address.
*/
  getFullAddress(address: Address): string {
    return `${address.getStreet()}, ${address.getCity()}, ${address.getState()}, ${address.getCountry()} - ${address.getZipCode()}`;
  }

}