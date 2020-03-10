import React from "react";
import { sleep } from "app/utils/";

const useTypingEffect = (
  typing_speed: number = 100,
  erasing_speed: number = 60,
  pause: number = 3000
) => {
  const [text, setRet] = React.useState("");

  React.useEffect(() => {
    const mottos = Object.freeze([
      "KNOWLEDGE.",
      "BEST PRACTICES.",
      "INNOVATION.",
      "CRAFTMANSHIP."
    ]);

    const typing = async () => {
      let index = 0;
      let text = "";
      while (true) {
        let word = mottos[index];
        for (let i = 0, len = word.length; i < len; i++) {
          await sleep(typing_speed);
          text = text.concat(word[i]);
          setRet(text);
        }
        await sleep(pause);
        for (let i = word.length; i >= 0; i--) {
          await sleep(erasing_speed);
          text = text.slice(0, i);
          setRet(text);
        }
        index = (index + 1) % mottos.length;
      }
    };

    typing();
  }, [erasing_speed, typing_speed, pause]);

  return text;
};

export default useTypingEffect;
