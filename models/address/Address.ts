export class Address {
    private street: string;
    private city: string;
    private state: string;
    private country: string;
    private zipCode: string;

    constructor(street: string, city: string, state: string, country: string, zipCode: string) {
        this.street = street;
        this.city = city;
        this.state = state;
        this.country = country;
        this.zipCode = zipCode;
    }

    /**
 * Returns the street of the address.
 * @returns The street as a string.
 */
getStreet(): string {
    return this.street;
}

/**
 * Returns the city of the address.
 * @returns The city as a string.
 */
getCity(): string {
    return this.city;
}

/**
 * Returns the state of the address.
 * @returns The state as a string.
 */
getState(): string {
    return this.state;
}

/**
 * Returns the country of the address.
 * @returns The country as a string.
 */
getCountry(): string {
    return this.country;
}

/**
 * Returns the zip code of the address.
 * @returns The zip code as a string.
 */
getZipCode(): string {
    return this.zipCode;
}

/**
 * Sets the street of the address.
 * @param street - The street to assign to the address.
 */
setStreet(street: string): void {
    this.street = street;
}

/**
 * Sets the city of the address.
 * @param city - The city to assign to the address.
 */
setCity(city: string): void {
    this.city = city;
}

/**
 * Sets the state of the address.
 * @param state - The state to assign to the address.
 */
setState(state: string): void {
    this.state = state;
}

/**
 * Sets the country of the address.
 * @param country - The country to assign to the address.
 */
setCountry(country: string): void {
    this.country = country;
}

/**
 * Sets the zip code of the address.
 * @param zipCode - The zip code to assign to the address.
 */
setZipCode(zipCode: string): void {
    this.zipCode = zipCode;
}

/**
 * Returns the full formatted address string.
 * Combines country, street, city, state, and zip code into one line.
 * @returns A string representing the full address.
 */
public getFullAddress(): string {
    return `${this.country} ${this.street}, ${this.city}, ${this.state} ${this.zipCode}`;
}

}