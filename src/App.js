import React, { useState } from "react";
import "./styles.css";
import Edit from "./EditableLabel";

export default function App() {
  const [text, setText] = useState("Hello edit");
  console.log("text", text);
  return (
    <div className="App">
      <Edit
        text={text}
        onTextChange={v => setText(v)}
        labelClassName="myLabelClass"
        inputClassName="myInputClass"
        inputWidth="200px"
        inputHeight="25px"
        inputMaxLength="50"
        labelFontWeight="bold"
        inputFontWeight="bold"
        onFocus={t => console.log("focus", t)}
        onFocusOut={t => console.log("focus out", t)}
      />
    </div>
  );
}
