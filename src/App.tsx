import axios from "axios";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

axios.defaults.baseURL =
  "https://e8ded1e8-aad1-4586-a497-fe7d7d25cd1b.mock.pstmn.io/api";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
