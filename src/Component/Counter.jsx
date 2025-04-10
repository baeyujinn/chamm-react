import { useEffect } from "react";

const Counter = (props) => {
  const plusValue = () => {
    props.setValue((prev) => prev + 1);
  };
  const minusValue = () => {
    props.setValue((prev) => prev - 1);
  };

  useEffect(() => {
    props.setValue(1);
  }, []);

  useEffect(() => {
    if (props.value < 1) {
      alert("값은 1 이상이어야 합니다.");
      props.setValue(1);
    }
  }, [props.value]);

  return (
    <div style={{ display: "flex", gap: "5px" }}>
      <div>{props.value}개</div>
      <button onClick={plusValue}>+</button>
      <button onClick={minusValue}>-</button>
    </div>
  );
};

export default Counter;
