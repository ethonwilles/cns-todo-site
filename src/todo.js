import React from "react";

const Todo = (props) => {
  const [style, setStyle] = React.useState("red");
  const [check, setCheck] = React.useState(false);
  const changeColor = () => {
    if (check) {
      setStyle("red");
      setCheck(false);
    } else {
      setStyle("green");
      setCheck(true);
    }
  };
  return (
    <div className="todo">
      <div className="todo-content">
        <p>{props.content}</p>
      </div>
      <div className="check" style={{ backgroundColor: style }}>
        <button style={{ backgroundColor: style }} onClick={changeColor}>
          {check ? <p>Done</p> : <p>Not Done</p>}
        </button>
      </div>
    </div>
  );
};
export default Todo;
