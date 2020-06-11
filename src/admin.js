import React from "react";

import Create from "./admin-components/create";
import Completed from "./admin-components/completed";
import InProgress from "./admin-components/inprogress";

const Admin = () => {
  const [check, setCheck] = React.useState(0);

  return (
    <div className="admin">
      <div className="buttons">
        <button id="create-link" onClick={() => setCheck(0)}>
          Create
        </button>
        <button onClick={() => setCheck(1)}>Completed</button>
        <button onClick={() => setCheck(2)}>In Progress</button>
      </div>
      {check === 0 ? <Create /> : check === 1 ? <Completed /> : <InProgress />}
    </div>
  );
};
export default Admin;
