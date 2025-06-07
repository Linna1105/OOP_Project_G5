import { Review } from "../../models/review/Review";

export class ReviewServices {
    /**
 * Updates the rating of a given review.
 * 
 * @param review - The Review object to update.
 * @param newRating - The new rating value to set.
 */
updateRating(review: Review, newRating: number): void {
    review.setRating(newRating);
}

/**
 * Updates the comment text of a given review.
 * 
 * @param review - The Review object to update.
 * @param newComment - The new comment string to set.
 */
updateComment(review: Review, newComment: string): void {
    review.setComment(newComment);
}

/**
 * Generates a summary string for a review, including its ID, author, product name, rating, comment, and date.
 * Useful for display or logging purposes.
 * 
 * @param review - The Review object to summarize.
 * @returns A formatted string summarizing the review details.
 */
getReviewSummary(review: Review): string {
    return `Review #${review.getReviewId()} by ${review.getCustomer().name} for ${review.getProduct().getName()}:
Rating: ${review.getRating()}
Comment: ${review.getComment()}
Date: ${review.getDate().toLocaleDateString()}`;
}

}