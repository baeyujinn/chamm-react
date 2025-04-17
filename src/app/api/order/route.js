import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");

    let goods = [];
    switch (query) {
      case "전화기":
      case "phone":
        goods = {
          items: [
            {
              lprice: 35000,
              title: "전화기",
              image: "https://s.w.org/images/core/emoji/14.0.0/svg/260e.svg",
              desc: "전화기 입니다.",
            },
          ],
        };
        break;
      case "젤리":
      case "jelly":
        goods = {
          items: [
            {
              lprice: 2400,
              title: "하이보젤리",
              image:
                "https://chamomile.lotteinnovate.com/storage/2024/01/Landseer-1536x563.jpg",
              desc: "거친 식감의 젤리",
            },
          ],
        };
        break;
      case "그림":
      case "paint":
        goods = {
          items: [
            {
              lprice: 13000000,
              title: "비싼 그림",
              image:
                "https://chamomile.lotteinnovate.com/storage/2023/10/395-Le-Sacre-de-lempereur-e1700817234888.jpg",
              desc: "진품 입니다.",
            },
          ],
        };
        break;
      case "로켓":
      case "rocket":
        goods = {
          items: [
            {
              lprice: 23050,
              title: "물로켓 만들기",
              image: "https://s.w.org/images/core/emoji/14.0.0/svg/1f680.svg",
              desc: "과학대회용",
            },
          ],
        };
        break;
      case "카메라":
      case "camera":
        goods = {
          items: [
            {
              lprice: 119300,
              title: "최신 카메라",
              image:
                "https://chamomile.lotteinnovate.com/storage/2022/06/photocamera_78342-300x300.png",
              desc: "3만 화소 카메라 입니다.",
            },
          ],
        };
        break;

      default:
        goods = {
          items: [
            {
              lprice: 1500,
              title: "캐모마일",
              image:
                "https://chamomile.lotteinnovate.com/storage/2022/06/cropped-chamomile-1-1.png",
            },
          ],
        };
        break;
    }

    return new NextResponse(JSON.stringify(goods), { status: 200 });
  } catch (error) {
    return new NextResponse("Server Error", { status: 500 });
  }
};

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
