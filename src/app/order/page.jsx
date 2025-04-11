"use client";

import { OrderContext } from "@/Context/OrderContextProvider";
import { UserContext } from "@/Context/UserContextProvider";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

export default function Order() {
  const PRICE = 1000;
  const { value: userContextValue, setValue: setUserContextValue } =
    useContext(UserContext);
  const { value: orderContextValue } = useContext(OrderContext);

  const [address, setAddress] = useState("");
  const [orderStatus, setOrderState] = useState();

  const router = useRouter();

  const onSubmit = (event) => {
    event.preventDefault();

    fetch("/api/order", {
      method: "post",
      body: JSON.stringify({
        productName: orderContextValue.query,
        productCnt: orderContextValue.cnt,
        totalPrice: orderContextValue.price,
        address: address,
      }),
    }).then(async (res) => {
      const result = await res.json();
      setOrderState(result);

      // 마이페이지 청구 금액 업데이트
      setUserContextValue((prev) => {
        return {
          ...prev,
          billing:
            prev.billing +
            (orderContextValue.price || PRICE) * orderContextValue.cnt,
        };
      });
      alert("주문 완료");
    });
  };

  const onCancelOrder = () => {
    fetch("/api/order", {
      method: "delete",
      body: JSON.stringify({
        productName: orderContextValue.query,
        productCnt: orderContextValue.cnt,
        productPrice: orderContextValue.price,
        address: address,
      }),
    }).then(async (res) => {
      const result = await res.json();

      /** 마이페이지 청구 금액 업데이트 */
      setUserContextValue((prev) => {
        return {
          ...prev,
          billing: prev.billing - result.productPrice * result.productCnt,
        };
      });

      alert("주문취소 완료");
      router.replace("/");
    });
  };
  return (
    <>
      {!orderStatus && (
        <>
          <div>제품명: {orderContextValue.query}</div>
          <div>수량: {orderContextValue.cnt}</div>
          <div>
            가격:{" "}
            {(orderContextValue.price * orderContextValue.cnt).toLocaleString()}
            원
          </div>

          <form onSubmit={(e) => onSubmit(e)}>
            <label>주소: </label>
            <input
              placeholder="주소를 입력하세요"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
            <button type="submit">주문하기</button>
          </form>
        </>
      )}

      {orderStatus?.timeStamp && (
        <>
          {`${orderStatus?.timeStamp} 주문완료`}
          <button onClick={onCancelOrder}>주문취소</button>
          <div>총 청구 금액: {userContextValue.billing}</div>
        </>
      )}
      <div>
        <Link href={"/"}>홈으로</Link>
      </div>
    </>
  );
}
