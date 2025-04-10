import { useEffect } from "react";

const Counter = (props) => {
  /** @TODO
   * 1. 현재 수량 표시
   * 2. 수량 추가
   * 3. 수량 삭제
   */
  const plusValue = () => props.setValue((prev) => prev + 1);
  const minusValue = () => {
    if (props.value === 1) return alert("값은 1보다 작을 수 없습니다.");
    props.setValue((prev) => prev - 1);
  };

  useEffect(() => {
    // 최초 값을 1로 설정해줌
    props.setValue(1);
  }, []);

  return (
    <div style={{ display: "flex", gap: "5px" }}>
      <div>{props.value}개</div>
      <button onClick={plusValue}>+</button>
      <button onClick={minusValue}>-</button>
    </div>
  );
};

export default Counter;
