function TourPicture({ name, photoName, number }) {
  return (
    <div className="picture-box">
      <img
        className={`picture-box__img picture-box__img--${number + 1}`}
        src={`/img/tours/${photoName}`}
        alt={`${name}-${number + 1}`}
      />
    </div>
  );
}

export default TourPicture;
