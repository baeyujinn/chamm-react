import { useContext } from "react";
import { useRouter } from "next/navigation";
import { OrderContext } from "@/Context/OrderContextProvider";

const OrderButton = () => {
  const { value: orderContextValue } = useContext(OrderContext);
  const router = useRouter();
  return (
    <>
      {orderContextValue.query && (
        <button
          onClick={() => {
            router.push("/order");
          }}
        >
          구매하기
        </button>
      )}
    </>
  );
};

export default OrderButton;
