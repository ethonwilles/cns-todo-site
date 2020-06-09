import React from "react";
import Todo from "./todo";

const Content = () => {
  const [tasks, setTasks] = React.useState([]);
  React.useEffect(() => {
    fetch("https://cns-automate-backend.herokuapp.com/todo-check")
      .then((res) => res.json())
      .then((data) => setTasks(data.items));
  }, []);
  const renderTasks = () => {
    console.log(tasks);
    return tasks.map((elem) => {
      if (elem.completed === false) {
        return <Todo content={elem.task} check={elem.completed} />;
      }
    });
  };
  return <div className="content">{renderTasks()}</div>;
};
export default Content;
