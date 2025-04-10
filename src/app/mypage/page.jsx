"use client";

import Header from "@/Component/Header";
import { UserContext } from "@/Context/UserContextProvider";
import { useContext } from "react";

const Page = () => {
  /** @TODO
   * context api 이용하여 사용자 이름, 청구금액 보여주기
   */
  const { value } = useContext(UserContext);

  return (
    <>
      <Header title="내 정보" />
      <div>이름: {value.name}</div>
      <div>청구금액: {value.billing}</div>
    </>
  );
};
export default Page;
