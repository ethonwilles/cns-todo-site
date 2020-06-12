import React from "react";

const Todo = (props) => {
  const [style, setStyle] = React.useState("red");
  const [check, setCheck] = React.useState(props.check);
  const [Delete, setDelete] = React.useState(false);

  React.useEffect(() => {
    if (check) {
      setStyle("green");
    }
  }, []);

  const deleteItem = () => {
    fetch("https://cns-automate-backend.herokuapp.com/todo-check", {
      method: "DELETE",
      cors: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        task: props.content,
        completed: props.check,
        date: props.date,
      }),
    });
    setStyle("yellow");
    setDelete(true);
  };

  const changeColor = () => {
    if (check) {
      setStyle("red");
      setCheck(false);
    } else {
      setStyle("green");
      setCheck(true);
      fetch("https://cns-automate-backend.herokuapp.com/todo-check", {
        method: "PUT",
        cors: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          task: props.content,
          completed: true,
          date: props.date,
        }),
      });
    }
  };
  return (
    <div className="todo">
      <div className="todo-content">
        <p>{props.content}</p>
        <i onClick={deleteItem} class="far fa-trash-alt"></i>
      </div>
      <div className="check" style={{ backgroundColor: style }}>
        <button style={{ backgroundColor: style }} onClick={changeColor}>
          {check ? (
            <p>Done</p>
          ) : Delete ? (
            <p>Marked For Deletion</p>
          ) : (
            <p>Not Done</p>
          )}
        </button>
      </div>
    </div>
  );
};
export default Todo;
