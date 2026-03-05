"use client";

export default function ButtonSample() {
  function handleButtonClick() {
    alert("click!");
  }

  return (
    <button type="button" onClick={handleButtonClick}>ボタン</button>
  );
}
