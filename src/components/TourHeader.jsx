function TourHeader({ tour }) {
  return (
    <section className="section-header">
      <div className="heading-box">
        <h1 className="heading-primary">
          <span>{tour.name}</span>
        </h1>
        <div className="heading-box__group">
          <div className="heading-box__detail">
            <svg className="heading-box__icon">
              <use xlinkHref="/img/icons.svg#icon-clock"></use>
            </svg>
            <span className="heading-box__text">{`${tour.duration} days`}</span>
          </div>
          <div className="heading-box__detail">
            <svg className="heading-box__icon">
              <use xlinkHref="/img/icons.svg#icon-map-pin"></use>
            </svg>
            <span className="heading-box__text">
              {tour.startLocation.description}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TourHeader;
