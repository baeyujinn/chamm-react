import Counter from "@/app/search/component/Counter";
import { OrderContext } from "@/Context/OrderContextProvider";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

const ItemsList = () => {
  /** @TODO
   * 1. fetch get으로 상품 받아오기: 검색어는 search bar에서 설정해준 order context의 query를 가져온다.
   * 2. 받아온 상품 이미지, 상품명, 가격 화면에 표시하기
   * 3. 카운터로 상품 수량, 총가격 설정하기
   * 4. (선택) 페이지네이션
   */
  const { value: orderContextValue, setValue: setOrderContextValue } =
    useContext(OrderContext);

  const [page, setPage] = useState(1);
  const [searchedItem, setSearchedItem] = useState(); // 검색 결과 저장
  const [counterValue, setCounterValue] = useState(); // 물품 수량 저장

  const getSearchResult = async () => {
    /** 네이버 검색 api를 통해 상품 검색 */
    await fetch(`/api/order?query=${orderContextValue.query}`, {
      method: "GET",
      headers: {
        "X-Naver-Client-Id": process.env.NEXT_PUBLIC_API_CLIENT_ID,
        "X-Naver-Client-Secret": process.env.NEXT_PUBLIC_API_CLIENT_SECRET,
      },
    }).then(async (res) => {
      /** 검색 결과를 order context와 state에 저장 */
      const result = await res.json();
      setOrderContextValue((prev) => {
        return {
          ...prev,
          price: result.items.length
            ? result.items[0]?.lprice ?? result.items[0]?.hprice
            : 0,
        };
      });
      setSearchedItem(result);
    });
  };

  /** 페이지 이동, 검색어 변경 될 때 마다 검색 api 호출 */
  useEffect(() => {
    if (!orderContextValue.query) return;
    getSearchResult();
  }, [page, orderContextValue.query]);

  /** 상품 변경 될 때 마다 order context에 cnt 업데이트 */
  useEffect(() => {
    setOrderContextValue((prev) => {
      return {
        ...prev,
        cnt: counterValue,
      };
    });
  }, [counterValue]);

  /** 페이지 이동 컴포넌트 */
  // const Pagination = () => {
  //   return (
  //     <div style={{ display: "flex", flexDirection: "row" }}>
  //       <button
  //         onClick={() => {
  //           if (page === 1) return;
  //           setPage((prev) => prev - 1);
  //         }}
  //       >
  //         이전 페이지
  //       </button>
  //       {page}페이지
  //       <button
  //         onClick={() => {
  //           setPage((prev) => prev + 1);
  //         }}
  //       >
  //         다음 페이지
  //       </button>
  //     </div>
  //   );
  // };

  return (
    <div>
      {
        /** 아이템 리스트를 화면에 보여주는 조건: 검색어 입력 완료 && 아이템 검색 완료 */
        orderContextValue.query &&
          searchedItem &&
          searchedItem.items?.map((val) => {
            return (
              <div key={val.title}>
                {/** 상품 이미지 */}
                <Image
                  alt={`${val.title} 이미지`}
                  src={val.image}
                  width={400}
                  height={400}
                />

                {/** 상품명 - val.title이 html형식으로 넘어와서 html을 보여주기 위해 dangerouslySetInnerHTML 사용 */}
                <div dangerouslySetInnerHTML={{ __html: val.title }}></div>

                {/** 상품 가격 - toLocaleString()은 number를 string으로 변환하고 1000단위 , 표시해줌*/}
                <div>가격: {(val.lprice ?? val.hprice).toLocaleString()}원</div>

                {/**
                 * 상품 수량
                 * || 은 앞의 값이 null, undefiend, 0, '', NaN, false 면 뒤의 값을 사용함
                 * ?? 은 앞의 값이 null, undefined 면 뒤의 값을 사용함
                 * */}
                <Counter
                  value={counterValue}
                  setValue={setCounterValue}
                  price={val.lprice ?? val.hprice}
                />

                {/** 총 가격 */}
                <div>
                  총 가격:{" "}
                  {((val.lprice ?? val.hprice) * counterValue).toLocaleString()}
                  원
                </div>

                {/** 페이지네이션 */}
                {/* <Pagination /> */}
              </div>
            );
          })
      }
    </div>
  );
};

export default ItemsList;
