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

    getStreet(): string {
        return this.street;
    }

    getCity(): string {
        return this.city;
    }

    getState(): string {
        return this.state;
    }

    getCountry(): string {
        return this.country;
    }

    getZipCode(): string {
        return this.zipCode;
    }

    setStreet(street: string): void {
        this.street = street;
    }

    setCity(city: string): void {
        this.city = city;
    }

    setState(state: string): void {
        this.state = state;
    }

    setCountry(country: string): void {
        this.country = country;
    }

    setZipCode(zipCode: string): void {
        this.zipCode = zipCode;
    }
    public getFullAddress(): string {
        return `${this.country} ${this.street}, ${this.city}, ${this.state} ${this.zipCode}`;
}

   
}