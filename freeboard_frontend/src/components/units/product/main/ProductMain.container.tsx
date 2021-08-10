import { useState } from "react";
import { useRef } from "react";
import ProductMainUI from "./ProductMain.presenter";

export default function ProductMain() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [buttonX, setButtonX] = useState(0);
  const [buttonY, setButtonY] = useState(0);

  function onMouseMoveButton(event) {
    const x = event.pageX - buttonRef?.current.getBoundingClientRect().left;
    const y = event.pageY - buttonRef?.current.getBoundingClientRect().top;
    setButtonX(x);
    setButtonY(y);
  }

  return (
    <ProductMainUI
      buttonX={buttonX}
      buttonY={buttonY}
      buttonRef={buttonRef}
      onMouseMoveButton={onMouseMoveButton}
    />
  );
}
