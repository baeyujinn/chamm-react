import { useContext } from "react";
import { OrderContext } from "@/Context/OrderContextProvider";
import { UserContext } from "@/Context/UserContextProvider";

const OrderButton = () => {
  const { value: orderContextValue } = useContext(OrderContext);
  const { setValue: setUserContextValue } = useContext(UserContext);
  /** @TODO
   * 1. 청구 금액 업데이트
   * 2. 구매 완료 안내 창
   */
  return (
    <>
      {orderContextValue.query /** 검색 버튼 클릭 후, 구매하기 버튼이 떠야함 */ && (
        <button
          onClick={() => {
            setUserContextValue((prev) => {
              return {
                ...prev,
                billing:
                  parseInt(prev.billing) +
                  parseInt(orderContextValue.price) * orderContextValue.cnt,
              };
            });

            alert("구매 완료");
          }}
        >
          구매하기
        </button>
      )}
    </>
  );
};

export default OrderButton;
