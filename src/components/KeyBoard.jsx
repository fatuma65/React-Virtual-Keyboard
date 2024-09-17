import { numbers, firstRowKeys, thirdRow, fourth, fifth, sixth } from "./keys";
import "./KeyBoardStyles.css";
const KeyBoard = ({ inputValue, handleInput, capslock, handleCharacters }) => {
  const handleRenderKey = (key) => {
    let isCapital = /^[a-zA-Z]$/.test(key);
    if (isCapital) {
      return capslock ? key.toLowerCase() : key.toUpperCase();
    } else {
      return key;
    }
  };
  return (
    <div className="main-container">
      <input
        type="text"
        placeholder="Please type in here"
        value={inputValue}
        onChange={handleInput}
      />
      <div className="keyContainer">
        <div className="key">
          {firstRowKeys.map((keyButton, index) => (
            <button key={index} onClick={() => handleCharacters(keyButton)}>
              {handleRenderKey(keyButton)}
            </button>
          ))}
        </div>
        <div className="key">
          {numbers.map((keyButton, index) => (
            <button key={index} onClick={() => handleCharacters(keyButton)}>
              {handleRenderKey(keyButton)}
            </button>
          ))}
        </div>
        <div className="key">
          {thirdRow.map((keyButton, index) => (
            <button key={index} onClick={() => handleCharacters(keyButton)}>
              {handleRenderKey(keyButton)}
            </button>
          ))}
        </div>
        <div className="key">
          {fourth.map((keyButton, index) => (
            <button key={index} onClick={() => handleCharacters(keyButton)}>
              {handleRenderKey(keyButton)}
            </button>
          ))}
        </div>
        <div className="key">
          {fifth.map((keyButton, index) => (
            <button key={index} onClick={() => handleCharacters(keyButton)}>
              {handleRenderKey(keyButton)}
            </button>
          ))}
        </div>
        <div className="key">
          {sixth.map((keyButton, index) => (
            <button key={index} onClick={() => handleCharacters(keyButton)}>
              {handleRenderKey(keyButton)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyBoard;
