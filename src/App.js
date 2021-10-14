import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./Pages/Home";
import Courses from "./Pages/Courses";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import PageNotFound from "./Pages/PageNotFound";
import About from "./Pages/About";



function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Switch>
          <Route exact path ='/'>
            <Home></Home>
          </Route>
          <Route path ='/home'>
            <Home></Home>
          </Route>
          <Route path ='/about'>
            <About></About>
          </Route>
          <Route path ='/courses'>
            <Courses></Courses>
          </Route>
          <Route path ='/contact'>
            <Contact></Contact>
          </Route>
          <Route path ='/cart'>
            <Cart></Cart>
          </Route>
          <Route path ='/login'>
            <Login></Login>
          </Route>
          <Route path ='/signup'>
            <Signup></Signup>
          </Route>
          <Route path ='*'>
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
