"use client";

import Counter from "@/Component/Counter";
import Header from "@/Component/Header";
import { UserContext } from "@/Context/UserContextProvider";
import Image from "next/image";
import { useContext, useState } from "react";

export default function Home() {
  const [value, setValue] = useState();

  const { setValue: setUserContextValue } = useContext(UserContext);
  const CHMM_PRICE = 1500;

  return (
    <>
      <Header title={"HOME"} />
      <h3>어서오세요</h3>
      <div>캐모마일 쇼핑 입니다 ~</div>

      <div>
        <Image
          src="https://chamomile.lotteinnovate.com/storage/2022/06/cropped-chamomile-1-1.png"
          width={200}
          height={200}
          alt="캐모마일 로고"
        />
        <div>맛있는 캐모마일 티 {CHMM_PRICE}원</div>
        <Counter value={value} setValue={setValue}></Counter>
        <div>총 가격: {(value ?? 10) * CHMM_PRICE}원</div>
        <button
          onClick={() => {
            setUserContextValue((prev) => {
              return {
                ...prev,
                billing: prev.billing + (value ?? 10) * CHMM_PRICE,
              };
            });
            alert("구매완료");
          }}
        >
          구매
        </button>
      </div>
    </>
  );
}
