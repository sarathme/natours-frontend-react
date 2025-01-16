function ReviewStars({ rating }) {
  return (
    <div className="reviews__rating">
      {Array.from({ length: rating }).map((_, i) => (
        <svg key={i} className="reviews__star reviews__star--active">
          <use xlinkHref="/img/icons.svg#icon-star"></use>
        </svg>
      ))}
    </div>
  );
}

export default ReviewStars;
