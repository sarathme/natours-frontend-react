import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import PayButton from "./PayButton";
import { useCurrentUser } from "../hooks/useCurrentUser";

function TourCta({ tour }) {
  const { user } = useAuth();

  console.log(user);

  return (
    <section className="section-cta">
      <div className="cta">
        <div className="cta__img cta__img--logo">
          <img src="/img/logo-white.png" alt="Natours logo" className="" />
        </div>
        <img
          src="/img/tours/tour-5-2.jpg"
          alt=""
          className="cta__img cta__img--1"
        />
        <img
          src="/img/tours/tour-5-1.jpg"
          alt=""
          className="cta__img cta__img--2"
        />

        <div className="cta__content">
          <h2 className="heading-secondary">What are you waiting for?</h2>
          <p className="cta__text">
            {`${tour.duration} days. 1 adventure. Infinite memories. Make it yours today!`}
          </p>
          {user && <PayButton tour={tour} />}
          {!user && (
            <Link className="btn btn--green span-all-rows" to="/login">
              Login to book tour
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export default TourCta;
