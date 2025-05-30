import { Product } from "./Product";
import { Customer } from "./Customer";

class Review{
    private reviewId: number;
    private rating: number;
    private comment: string;
    private date: Date;
    private customers : Customer;
    private products: Product;

    constructor( reviewId: number, rating: number, comment: string, date: Date, customers: Customer, products:Product){
        this.reviewId = reviewId;
        this.rating = rating;
        this.comment = comment;
        this.date = date;
        this.customers = customers;
        this.products = products;
    }
}