"use client";

import OrderContextProvider from "../Context/OrderContextProvider";
import UserContextProvider from "../Context/UserContextProvider";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserContextProvider>
          <OrderContextProvider>
            <Link href={"/"}>홈 </Link>
            <Link href={"/search"}>쇼핑 </Link>
            <Link href={"/mypage"}> 마이페이지</Link>
            {children}
          </OrderContextProvider>
        </UserContextProvider>
      </body>
    </html>
  );
}
