import { NextRequest, NextResponse } from "next/server";

export const PUT = async () => {
  try {
    throw Error();
  } catch (error) {
    return new NextResponse("Order Error", { status: 500 });
  }
};

export const DELETE = async (request) => {
  try {
    const body = await request.json(); // 클라이언트에서 받은 데이터

    return new NextResponse(
      JSON.stringify({
        orderState: "취소",
        timeStamp: new Date(),
        ...body, // 수량, 제품명, 가격, 주문자
      }),
      {
        status: 200,
      }
    );
  } catch (error) {
    return new NextResponse("Server Error", { status: 500 });
  }
};

export const POST = async (request) => {
  try {
    const body = await request.json(); // 클라이언트에서 받은 데이터

    return new NextResponse(
      JSON.stringify({
        orderState: "주문",
        timeStamp: new Date(),
        ...body, // 수량, 제품명, 가격, 주문자
      }),
      {
        status: 200,
      }
    );
  } catch (error) {
    return new NextResponse("Server Error", { status: 500 });
  }
};
