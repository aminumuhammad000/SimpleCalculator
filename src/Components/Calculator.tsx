import { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  let [text, setText] = useState("");
  return (
    <div className="wrapper">
          <input
            type="text"
            value={text}
            onChange={() => setText(text)}
            autoFocus
            disabled
           minLength={0}
          />
      <div className="buttons">
        <div>
          <button onClick={() => setText((text += "%"))}>%</button>
          <button onClick={() => setText("")}>CE</button>
          <button onClick={() => setText(text.slice(0, -1))}>C</button>
          <button onClick={() => setText((text += "/"))}>/</button>
        </div>

        <div>
          <button onClick={() => setText((text += 7))}>7</button>
          <button onClick={() => setText((text += 8))}>8</button>
          <button onClick={() => setText((text += 9))}>9</button>
          <button onClick={() => setText((text += "*"))}>x</button>
        </div>

        <div>
          <button onClick={() => setText((text += 4))}>4</button>
          <button onClick={() => setText((text += 5))}>5</button>
          <button onClick={() => setText((text += 6))}>6</button>
          <button onClick={() => setText((text += "-"))}>-</button>
        </div>

        <div>
          <button onClick={() => setText((text += 1))}>1</button>
          <button onClick={() => setText((text += 2))}>2</button>
          <button onClick={() => setText((text += 3))}>3</button>
          <button onClick={() => setText((text += "+"))}>+</button>
        </div>

        <div>
          <button onClick={() => setText((text += "0.0"))}>0.0</button>
          <button onClick={() => setText((text += "0"))}>0</button>
          <button onClick={() => setText((text += "."))}>.</button>
          <button className="eq" onClick={() => setText(eval(text))}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
