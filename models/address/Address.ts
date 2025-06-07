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
     * Returns the street address.
     * @returns {string} The street.
     */
    getStreet(): string {
        return this.street;
    }

    /**
     * Returns the city.
     * @returns {string} The city.
     */
    getCity(): string {
        return this.city;
    }

    /**
     * Returns the state or province.
     * @returns {string} The state.
     */
    getState(): string {
        return this.state;
    }

    /**
     * Returns the country.
     * @returns {string} The country.
     */
    getCountry(): string {
        return this.country;
    }

    /**
     * Returns the postal or ZIP code.
     * @returns {string} The zip code.
     */
    getZipCode(): string {
        return this.zipCode;
    }

    /**
     * Sets the street address.
     * @param {string} street - The street to set.
     */
    setStreet(street: string): void {
        this.street = street;
    }

    /**
     * Sets the city.
     * @param {string} city - The city to set.
     */
    setCity(city: string): void {
        this.city = city;
    }

    /**
     * Sets the state or province.
     * @param {string} state - The state to set.
     */
    setState(state: string): void {
        this.state = state;
    }

    /**
     * Sets the country.
     * @param {string} country - The country to set.
     */
    setCountry(country: string): void {
        this.country = country;
    }

    /**
     * Sets the postal or ZIP code.
     * @param {string} zipCode - The ZIP code to set.
     */
    setZipCode(zipCode: string): void {
        this.zipCode = zipCode;
    }

    /**
     * Returns the full formatted address as a single string.
     * Format: "<country> <street>, <city>, <state> <zipCode>"
     * @returns {string} The full address.
     */
    public getFullAddress(): string {
        return `${this.country} ${this.street}, ${this.city}, ${this.state} ${this.zipCode}`;
    }

}