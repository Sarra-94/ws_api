import { Route, Switch } from "react-router-dom";

import Details from "./Pages/Details";
import Error from "./Pages/Error";
import Home from "./Pages/Home";

import "./App.css";
import Navbar from "./Components/Navbar";
import PaginationComponent from "./Components/PaginationComponent";

function App() {
  return (
    <div className="App">
      <h2>API Workshop</h2>
      <Navbar />
      <PaginationComponent />
      {/* <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/details/:id" component={Details} />
        <Route path="/*" component={Error} />
      </Switch> */}
    </div>
  );
}

export default App;
