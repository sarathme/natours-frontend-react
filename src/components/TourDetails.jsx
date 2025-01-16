import { useParams } from "react-router-dom";
import TourCta from "./TourCta";
import TourDescription from "./TourDescription";
import TourHeader from "./TourHeader";
import TourPictures from "./TourPictures";
import TourReviews from "./TourReviews";
import { useEffect, useState } from "react";
import { getTour } from "../apiFeatures/apiTours";
import TourMap from "./TourMap";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../ui/Spinner";

function TourDetails() {
  const { tourId } = useParams();
  const { isLoading, data: tour } = useQuery({
    queryKey: [`tour-${tourId}`],
    queryFn: () => getTour(tourId),
  });

  return (
    <main className="overview">
      {isLoading && <Spinner />}
      {!isLoading && tour && (
        <>
          <TourHeader tour={tour} />
          <TourDescription tour={tour} />

          <TourPictures tour={tour} />
          <TourMap tour={tour} />
          <TourReviews tour={tour} />
          <TourCta tour={tour} />
        </>
      )}
    </main>
  );
}

export default TourDetails;
