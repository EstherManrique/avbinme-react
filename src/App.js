import Footer from "./components/Footer/Footer";
import NavBar from "./components/MainNav/NavBar";
import { Switch, Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "./components/Pages/Home";
import We from "./components/Pages/We";


const browserHistory = createBrowserHistory();

function App() {
  return (
    <Router history={browserHistory}>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/nosotros">
          <We />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
