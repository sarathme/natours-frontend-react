import TourGuideOverviewCard from "./TourGuideOverviewCard";

function TourDescription({ tour }) {
  return (
    <section className="section-description">
      <div className="overview-box">
        <div>
          <div className="overview-box__group">
            <h2 className="heading-secondary ma-bt-lg">Quick facts</h2>
            <div className="overview-box__detail">
              <svg className="overview-box__icon">
                <use xlinkHref="/img/icons.svg#icon-calendar"></use>
              </svg>
              <span className="overview-box__label">Next date</span>
              <span className="overview-box__text">
                {" "}
                {new Date(tour.startDates[0]).toLocaleString("default", {
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
            <div className="overview-box__detail">
              <svg className="overview-box__icon">
                <use xlinkHref="/img/icons.svg#icon-trending-up"></use>
              </svg>
              <span className="overview-box__label">Difficulty</span>
              <span className="overview-box__text">{tour.difficulty}</span>
            </div>
            <div className="overview-box__detail">
              <svg className="overview-box__icon">
                <use xlinkHref="/img/icons.svg#icon-user"></use>
              </svg>
              <span className="overview-box__label">Participants</span>
              <span className="overview-box__text">{`${tour.maxGroupSize} peoples`}</span>
            </div>
            <div className="overview-box__detail">
              <svg className="overview-box__icon">
                <use xlinkHref="/img/icons.svg#icon-star"></use>
              </svg>
              <span className="overview-box__label">Rating</span>
              <span className="overview-box__text">
                {tour.ratingsAverage} / 5
              </span>
            </div>
          </div>

          <div className="overview-box__group">
            <h2 className="heading-secondary ma-bt-lg">Your tour guides</h2>

            {tour.guides.map((guide) => (
              <TourGuideOverviewCard key={guide._id} guide={guide} />
            ))}
          </div>
        </div>
      </div>

      <div className="description-box">
        <h2 className="heading-secondary ma-bt-lg">
          {`About the ${tour.name} tour`}
        </h2>
        <p className="description__text">{tour.description}</p>
      </div>
    </section>
  );
}

export default TourDescription;
