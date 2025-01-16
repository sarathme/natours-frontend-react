import ReviewStars from "./ReviewStars";

function ReviewCard({ review }) {
  return (
    <div className="reviews__card">
      <div className="reviews__avatar">
        <img
          src={`/img/users/${review.user.photo}`}
          alt="Jim Brown"
          className="reviews__avatar-img"
        />
        <h6 className="reviews__user">{review.user.name}</h6>
      </div>
      <p className="reviews__text">{review.review}</p>
      <ReviewStars rating={review.rating} />
    </div>
  );
}

export default ReviewCard;
