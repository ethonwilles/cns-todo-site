import React from "react";
import Content from "./content";
import Admin from "./admin";
import Home from "./home";
import { BrowserRouter as BR, Route, Switch, Link } from "react-router-dom";

function App() {
  const [check, setCheck] = React.useState(true);
  return (
    <div className="App">
      <BR>
        <div className="navbar">
          <Link to="/admin">Admin</Link>
          <Link to="/content">Jordon ToDo</Link>
        </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/admin" component={Admin} />
          <Route path="/content" component={Content} />
        </Switch>
      </BR>
    </div>
  );
}

export default App;
