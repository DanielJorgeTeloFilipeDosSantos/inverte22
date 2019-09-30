import React from "react";
import "../styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarr from "../components/Navbarr";
import Signup2 from "../components/Signup2";
import Signin2 from "../components/Signin2";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbarr />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={Signup2} />
          <Route path="/signin" exact component={Signin2} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
