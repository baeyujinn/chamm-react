# 쇼핑몰 서비스

## 사전설정

- next config 경로 설정 필요

## 실습 내용

### jsx, props, useState, useEffect, routing, ContextAPI

1. jsx 실습
   - HOME 만들기 (root page)
1. props 실습
   - Header 만들기
1. routing 실습 (Link)
   - layout에 네비게이션 추가 (/mypage 없어도 일단 링크는 만들어놓기)
1. routing 실습 (Dynamic Routing)
   - mypage 껍데기 만들기 (header 까지만)
1. useState 실습
   - 메인 페이지에 counter useState 선언
   - Counter 컴포넌트 생성
   - Counter 컴포넌트에 state를 props로 넘기기
   - Counter +,- 함수구현
1. useEffect 실습
   - Counter 컴포넌트에서 useEffect 이용해서 value 1로 초기화
   - Counter 컴포넌트에서 useEffect 이용해서 value가 1보다 작아지지 않는 로직
1. context api 실습
   - UserContextProvider.jsx 생성
   - root layout에 context provider 추가
   - root page에 user context 선언
1. 쇼핑 화면 구현
   - user context 이용해서 캐모마일 이미지, 상품명, 카운터, 총 가격, 구매 버튼 기능 구현
1. mypage 화면 구현
   - user context 적용
