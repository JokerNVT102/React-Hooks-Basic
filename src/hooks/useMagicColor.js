import { useEffect, useRef, useState } from "react";
function randomColor(currentColor) {
  const CONST_LIST = ["red", "back", "deeppink", "blue", "yellow", "green"];
  //random 0->5 va khong bi trung lap;
  const currentIndex = CONST_LIST.indexOf(currentColor);
  let newIndex = currentIndex;
  while (currentIndex === newIndex) {
      newIndex =Math.trunc(Math.random() * 6);

  }
  console.log(CONST_LIST[newIndex]);
  return CONST_LIST[newIndex];
}
function useMagicColor() {
  const [color, setColor] = useState("transparent");
  const colorRef = useRef("transparent");
  //change color every 1 second
  useEffect(() => {
    const colorInterval = setInterval(() => {
      // console.log("first color: ", color);
      console.log("change color: ", colorRef.current);
      const newColor = randomColor(colorRef.current);
      setColor(newColor);
      colorRef.current = newColor;
    }, 1000);
    return () => {
      clearInterval(colorInterval);
    };
  }, []);
  return color;
}

export default useMagicColor;
