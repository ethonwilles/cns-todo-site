import React from "react";
import Todo from "../todo";
import { findByLabelText } from "@testing-library/react";

const Completed = () => {
  const [complete, setComplete] = React.useState([]);
  React.useEffect(() => {
    fetch("https://cns-automate-backend.herokuapp.com/todo-check")
      .then((res) => res.json())
      .then((data) => setComplete(data.items));
  }, []);
  const renderItems = () => {
    return complete.map((elem) => {
      if (elem.completed) {
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
export default Completed;
