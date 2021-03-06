import React from "react";
import Todo from "../todo";
import moment from "moment";
const InProgress = () => {
  const [complete, setComplete] = React.useState([]);

  const [dates, setDates] = React.useState([]);
  const [date, setDate] = React.useState(
    `${moment().month() + 1}/${moment().date()}`
  );
  React.useEffect(() => {
    fetch("https://cns-automate-backend.herokuapp.com/todo-check")
      .then((res) => res.json())
      .then((data) => setComplete(data.items));

    for (var i = moment().date(); i <= moment().date() + 7; i++) {
      dates.push(i);
    }
  }, []);
  const renderItems = () => {
    return complete.map((elem) => {
      if (elem.completed === false) {
        if (elem.date == date) {
          return (
            <Todo content={elem.task} check={elem.completed} date={elem.date} />
          );
        }
      }
    });
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
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <select
        onChange={(e) => {
          setDate(e.target.value);
          console.log(e.target.value);
          console.log(date);
        }}
      >
        {renderOptions()}
      </select>
      {renderItems()}
    </div>
  );
};
export default InProgress;
