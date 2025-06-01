import { Review } from "../../models/review/Review";

export class ReviewServices {
    updateRating(review: Review, newRating: number): void {
        review.setRating(newRating);
    }

    updateComment(review: Review, newComment: string): void {
        review.setComment(newComment);
    }

    getReviewSummary(review: Review): string {
        return `Review #${review.getReviewId()} by ${review.getCustomer().name} for ${review.getProduct().getName()}:
Rating: ${review.getRating()}
Comment: ${review.getComment()}
Date: ${review.getDate().toLocaleDateString()}`;
    }
}