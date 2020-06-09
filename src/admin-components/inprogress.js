import React from "react";
import Todo from "../todo";
const InProgress = () => {
  const [complete, setComplete] = React.useState([]);
  React.useEffect(() => {
    fetch("https://cns-automate-backend.herokuapp.com/todo-check")
      .then((res) => res.json())
      .then((data) => setComplete(data.items));
  }, []);
  const renderItems = () => {
    return complete.map((elem) => {
      if (elem.completed === false) {
        return <Todo content={elem.task} check={elem.completed} />;
      }
    });
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {renderItems()}
    </div>
  );
};
export default InProgress;
