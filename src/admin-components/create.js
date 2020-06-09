import React from "react";

const Create = () => {
  const [task, setTask] = React.useState("");

  const submitTask = (e) => {
    e.preventDefault();
    fetch("https://cns-automate-backend.herokuapp.com/todo-check", {
      method: "POST",
      cors: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task: task, completed: false }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="create">
      <form onSubmit={submitTask}>
        <textarea
          placeholder="Enter task here.."
          onChange={(e) => setTask(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Create;
