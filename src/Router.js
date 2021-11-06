import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home.jsx";
import Server from "./components/sever.jsx";
import Dashboard from "./components/Dashboard.jsx";

export default function Routing() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/account">
          <Dashboard />
        </Route>
        <Route path="/server/:id">
          <Server />
        </Route>
      </Switch>
    </Router>
  );
}
