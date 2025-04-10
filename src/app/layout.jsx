"use client";

import UserContextProvider from "../Context/UserContextProvider";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserContextProvider>
          {/** 4. routing */}
          <Link href={"/"}>홈 </Link>
          <Link href={"/mypage"}> 마이페이지</Link>
          {children}
        </UserContextProvider>
      </body>
    </html>
  );
}
