import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Support from "./pages/Support";
import Product from "./pages/Product";
import Property from "./pages/Property";

import "./animate.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/support" component={Support} />
          <Route path="/product" component={Product} />
          <Route path="/property" component={Property} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
