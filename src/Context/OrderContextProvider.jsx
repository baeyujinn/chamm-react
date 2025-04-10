import React, { createContext, useState } from "react";

export const OrderContext = createContext();

const OrderContextProvider = ({ children }) => {
  const [value, setValue] = useState({
    cnt: 1,
    price: 0,
    query: "",
  });
  return (
    <OrderContext.Provider value={{ value, setValue }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
