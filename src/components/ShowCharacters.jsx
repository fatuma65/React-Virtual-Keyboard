import { useState } from "react";
import KeyBoard from "./KeyBoard";

const ShowCharacters = ({ setInputValue, inputValue, handleInput }) => {
  const [capslock, setCapsLock] = useState(false);

  const handleCapsLockToggle = () => {
    setCapsLock(!capslock);
  };

  const handleSpaceKey = () => {
    setInputValue(inputValue + " ");
  };
  const handleCharacters = (keyButton) => {
    if (keyButton === "backspace") {
      setInputValue(inputValue.slice(0, -1));
    } else if (keyButton === "space") {
      handleSpaceKey();
    } else if (keyButton === "capslock") {
      handleCapsLockToggle();
    } else {
      // Check if the letters are capital or lower case
      let isCapital = /^[a-zA-Z]$/.test(keyButton);
      if (isCapital) {
        let outPut = capslock
          ? keyButton.toLowerCase()
          : keyButton.toUpperCase();
        setInputValue(inputValue + outPut);
      } else {
        setInputValue(inputValue + keyButton);
      }
    }
  };
  return (
    <>
      <KeyBoard
        handleCharacters={handleCharacters}
        capslock={capslock}
        inputValue={inputValue}
        handleInput={handleInput}
      />
    </>
  );
};

export default ShowCharacters;
