import { Product } from "../product/Product";
import { Customer } from "../user/Customer";

export class Review {
    private reviewId: number;
    private rating: number;
    private comment: string;
    private date: Date;
    private customer: Customer;
    private product: Product;

    constructor(
        reviewId: number,
        rating: number,
        comment: string,
        date: Date,
        customer: Customer,
        product: Product
    ) {
        this.reviewId = reviewId;
        this.rating = rating;
        this.comment = comment;
        this.date = date;
        this.customer = customer;
        this.product = product;
    }

    /**
   * Returns the unique review ID.
   * @returns {number} The identifier of the review.
   */
    getReviewId(): number {
        return this.reviewId;
    }

    /**
     * Returns the rating given in the review.
     * @returns {number} The rating value (e.g., 1-5).
     */
    getRating(): number {
        return this.rating;
    }

    /**
     * Returns the text comment of the review.
     * @returns {string} The customer's comment.
     */
    getComment(): string {
        return this.comment;
    }

    /**
     * Returns the date when the review was submitted.
     * @returns {Date} The date of the review.
     */
    getDate(): Date {
        return this.date;
    }

    /**
     * Returns the customer who wrote the review.
     * @returns {Customer} The customer object.
     */
    getCustomer(): Customer {
        return this.customer;
    }

    /**
     * Returns the product the review is about.
     * @returns {Product} The reviewed product.
     */
    getProduct(): Product {
        return this.product;
    }

    /**
     * Sets the rating for the review.
     * @param {number} rating - The rating value to assign.
     */
    setRating(rating: number): void {
        this.rating = rating;
    }

    /**
     * Sets the comment text for the review.
     * @param {string} comment - The comment to assign.
     */
    setComment(comment: string): void {
        this.comment = comment;
    }

}