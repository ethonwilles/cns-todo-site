import React from "react";
import moment from "moment";

const Create = () => {
  const [task, setTask] = React.useState("");
  const [dates, setDates] = React.useState([]);
  const [date, setDate] = React.useState(
    `${moment().month() + 1}/${moment().date()}`
  );
  React.useEffect(() => {
    document.getElementById("admin-link").click();
    console.log("ran?");
    for (var i = moment().date(); i <= moment().date() + 7; i++) {
      dates.push(i);
    }
  }, []);

  const submitTask = (e) => {
    e.preventDefault();
    fetch("https://cns-automate-backend.herokuapp.com/todo-check", {
      method: "POST",
      cors: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task: task, completed: false, date: date }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const renderOptions = () => {
    return dates.map((elem) => {
      return (
        <option value={`${moment().month() + 1}/${elem}`}>
          {moment().month() + 1}/{elem}
        </option>
      );
    });
  };
  return (
    <div className="create">
      <form onSubmit={submitTask}>
        <textarea
          placeholder="Enter task here.."
          onChange={(e) => setTask(e.target.value)}
        />
        <select
          onChange={(e) => {
            setDate(e.target.value);
            console.log(e.target.value);
            console.log(date);
          }}
        >
          {renderOptions()}
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Create;
