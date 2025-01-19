import { getAllTours } from "./../apiFeatures/apiTours";
import OverviewCard from "./OverviewCard";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../ui/Spinner";

function Overview() {
  const { isLoading, data: tours } = useQuery({
    queryKey: ["tours"],
    queryFn: getAllTours,
  });

  return (
    <section className="overview">
      <div className="card-container">
        {isLoading && <Spinner />}
        {!isLoading &&
          tours &&
          tours.map((tour) => <OverviewCard key={tour.id} tour={tour} />)}
        {!isLoading && !tours && <p>No tours available</p>}
      </div>
    </section>
  );
}

export default Overview;
