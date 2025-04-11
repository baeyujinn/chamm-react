"use client";

import Header from "@/Component/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header title={"주문"} />
      {children}
    </>
  );
};
export default Layout;
