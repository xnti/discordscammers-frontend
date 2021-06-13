import './App.css';

import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js"
import Search from './components/Search';
import Donate from './components/Donate';
import APIGuide from './components/APIGuide';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";




function App() {
  return (
    <Router>

        <div className="d-flex flex-column min-vh-100">
        <Switch>

          <Route exact path="/">
            <Header />
            <Main />
            <Footer />
          </Route>

          <Route exact path="/application">
            <Header />
            <APIGuide />
            <Footer />
          </Route>

          <Route exact path="/donate">
            <Header />
            <Donate />
            <Footer />
          </Route>

          <Route exact path="/aboutus">
            <Header />
            <Main />
            <Footer />
          </Route>

          </Switch>
          <Switch>
            <Route path="/search/:id" component={Search}/>
            </Switch>
        </div>

    </Router>
  );
}

export default App;
