import { useState } from "react";
import ShowCharacters from "./ShowCharacters";

const InputValue = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <ShowCharacters
        setInputValue={setInputValue}
        inputValue={inputValue}
        handleInput={handleInput}
      />
    </>
  );
};

export default InputValue;
