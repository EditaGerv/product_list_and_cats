import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Cats from "./components/Cats";
import Insult from "./components/Insult";
import Product_list from "./components/Product_list";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cats">Cats</Link>
            </li>
            <li>
              <Link to="/insult">Insult</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/cats">
            <Cats />
          </Route>
          <Route exact path="/insult">
            <Insult />
          </Route>
          <Route exact path="/">
            <Product_list />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}