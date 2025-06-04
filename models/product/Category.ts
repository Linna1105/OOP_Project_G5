export class Category {
    private categoryID: number;
    private name: string;
    private description: string;

    constructor(categoryID: number, name: string, description: string) {
        this.categoryID = categoryID;
        this.name = name;
        this.description = description;
    }

    getCategoryID(): number {
        return this.categoryID;
    }

    getName(): string {
        return this.name;
    }

    getDescription(): string {
        return this.description;
    }

    setName(name: string): void {
        this.name = name;
    }

    setDescription(description: string): void {
        this.description = description;
    }
}