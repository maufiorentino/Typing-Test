import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

function Word({ index, letter }) {
  const wordIndex = useSelector((state) => state.typingSpeed.wordIndex);
  const selectedLang = useSelector((state) => state.typingSpeed.selectedLanguage);
  const lang = useSelector((state) => state.typingSpeed.lang);
  const currentWord = useRef();

  useEffect(() => {
    if (wordIndex === index) {
      currentWord.current.scrollIntoView();
    }
  }, [wordIndex, index]);

  return (
    <span
      ref={currentWord}
      key={index}
      className={`${index === wordIndex
        ? "bg-yellow-200 text-black m-3 rounded-md py-1"
        : "#191970 m-3 py-1"
        }
    
      ${letter.status === "wrong" ? "text-red-500" : ""}
       ${letter.status === "correct" ? "text-green-600" : ""}
          `}
    >
      {letter[selectedLang ? selectedLang : lang[0]]}{" "}
    </span>
  );
}

function TextArea() {
  const words = useSelector((state) => state.typingSpeed.vocabulary);

  return (
    <div className="flex items-center justify-center mt-10 overflow-hidden h-48 p-2">
      <div className=" border-yellow-500 border-4  w-1/2 h-full text-25xl py-2 overflow-hidden">
        {words.map((letter, index) => {
          return (
            <Word index={index} key={index} letter={letter} words={words} />
          );
        })}
      </div>
    </div>
  );
}

export default TextArea;
