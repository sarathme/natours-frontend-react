import TourPicture from "./TourPicture";

function TourPictures({ tour }) {
  return (
    <section className="section-pictures">
      {tour.images.map((image, i) => (
        <TourPicture
          key={image}
          name={tour.name}
          photoName={image}
          number={i}
        />
      ))}
    </section>
  );
}

export default TourPictures;
