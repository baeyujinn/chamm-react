import { OrderContext } from "@/Context/OrderContextProvider";
import { useContext, useState } from "react";

const SearchBar = () => {
  /** @TODO
   * 1. 상품명 검색 input
   * 2. 검색 버튼: 실제로 검색을 수행하는 api 호출은 ItemsList에서 하므로 여기서 context api를 사용해 ItemsList로 검색어가 무엇인지 보내줘야한다.
   */
  const { setValue: setOrderContextValue } = useContext(OrderContext);
  const [query, setQuery] = useState(""); // 검색어

  const search = () => {
    //order context 변경
    setOrderContextValue((prev) => {
      return { ...prev, query: query };
      /** ...prev의 ... : spread operator 스프레드 연산자
       * object를 펼쳐주는 연산자, 제일 바깥에 있는 {}를 없애준다고 생각하면 된다.
       * ex. prev가 {cnt:1, price:2000, query:'old query'}일 때
       * spread operator를 사용하지 않고 prev 그대로 넣으면 {{query:'jelly', cnt:1, price:2000, query:'old query'}, query:'new query'} 가 된다.
       * spread operator를 사용하면 {cnt:1, price:2000, query:'new query'} 가 된다.
       * (이미 prev에 query가 있는데 뒤에 또 query를 선언하면 뒤에 있는 값으로 대체된다.)
       */
    });
  };

  return (
    <>
      <input
        onChange={(e) => setQuery(e.target.value)}
        placeholder="상품명을 검색하세요."
      />
      <button onClick={search}>검색</button>
    </>
  );
};

export default SearchBar;
