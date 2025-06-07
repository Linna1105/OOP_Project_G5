export class Category {
    private categoryID: number;
    private name: string;
    private description: string;

    constructor(categoryID: number, name: string, description: string) {
        this.categoryID = categoryID;
        this.name = name;
        this.description = description;
    }

    /**
 * Returns the unique ID of the category.
 * @returns {number} The category ID.
 */
getCategoryID(): number {
    return this.categoryID;
}

/**
 * Returns the name of the category.
 * @returns {string} The category name.
 */
getName(): string {
    return this.name;
}

/**
 * Returns the description of the category.
 * @returns {string} The category description.
 */
getDescription(): string {
    return this.description;
}

/**
 * Sets the name of the category.
 * @param {string} name - The new name to set.
 */
setName(name: string): void {
    this.name = name;
}

/**
 * Sets the description of the category.
 * @param {string} description - The new description to set.
 */
setDescription(description: string): void {
    this.description = description;
}

}