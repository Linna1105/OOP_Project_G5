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

    getReviewId(): number {
        return this.reviewId;
    }

    getRating(): number {
        return this.rating;
    }

    getComment(): string {
        return this.comment;
    }

    getDate(): Date {
        return this.date;
    }

    getCustomer(): Customer {
        return this.customer;
    }

    getProduct(): Product {
        return this.product;
    }

    setRating(rating: number): void {
        this.rating = rating;
    }

    setComment(comment: string): void {
        this.comment = comment;
    }
}