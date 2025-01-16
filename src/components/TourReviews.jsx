import ReviewCard from "./ReviewCard";

function TourReviews({ tour }) {
  return (
    <section className="section-reviews">
      <div className="reviews">
        {tour.reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
}

export default TourReviews;
