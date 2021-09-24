import Footer from "./components/Footer/Footer";
import NavBar from "./components/MainNav/NavBar";
import { Switch, Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "./components/Pages/Home";
import We from "./components/Pages/We";
import Contact from "./components/Pages/Contact";
import Services from "./components/Pages/Services";
import Certifications from "./components/Pages/Certifications";

const browserHistory = createBrowserHistory();

function App() {
  return (
    <Router history={browserHistory}>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/nosotros" component={We} />
        <Route exact path="/contacto" component={Contact} />
        <Route exact path="/servicios" component={Services} />
        <Route exact path="/certificaciones" component={Certifications} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
