"use client";

import ItemsList from "@/app/search/component/ItemsList";
import OrderButton from "@/app/search/component/OrderButton";
import SearchBar from "@/app/search/component/SearchBar";
import Header from "@/Component/Header";

export default function Home() {
  return (
    <div>
      <Header title={"쇼핑"} />
      <SearchBar />
      <ItemsList />
      <OrderButton />
    </div>
  );
}
