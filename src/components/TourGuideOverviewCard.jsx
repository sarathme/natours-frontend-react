function TourGuideOverviewCard({ guide }) {
  return (
    <div className="overview-box__detail">
      <img
        src="/img/users/user-19.jpg"
        alt="Lead guide"
        className="overview-box__img"
      />
      <span className="overview-box__label">{guide.role}</span>
      <span className="overview-box__text">{guide.name}</span>
    </div>
  );
}

export default TourGuideOverviewCard;
