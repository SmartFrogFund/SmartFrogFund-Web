import React, { FC, useEffect, useState } from "react";

type IProps = {
  text: string;
  speed?: number;
};
const Typewriter: FC<IProps> = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(displayedText + text.charAt(index));
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, displayedText, speed]);
  return <div className="text-3xl font-bold text-center">{displayedText}</div>;
};

export default Typewriter;
