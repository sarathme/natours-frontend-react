import { useOrder } from "../hooks/useOrder";

function PayButton({ tour }) {
  const { createOrder, isCreatingOrder } = useOrder();

  function handleOrder(e) {
    e.preventDefault();

    createOrder({ tourId: tour.id });
  }
  return (
    <button
      className="btn btn--green span-all-rows"
      onClick={handleOrder}
      disabled={isCreatingOrder}>
      {isCreatingOrder ? "Processing..." : "Book tour now!"}
    </button>
  );
}

export default PayButton;
