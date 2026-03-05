"use client";

export default function ButtonSample(props) {
  function handleButtonClick() {
    alert("click!");
  }

  return (
    <button type={props.type} onClick={handleButtonClick}>{props.text}</button>
  );
}
