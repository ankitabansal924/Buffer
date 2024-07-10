import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage";
import Login from "./pages/LogIn";
import Signup from "./pages/signUpPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <HomePage></HomePage>
        </Route>
        <Route path="/login" exact>
          <Login></Login>
        </Route>
        <Route path="/signup" exact>
          <Signup></Signup>
        </Route>
        <Redirect to="/"/>
      </Switch>
    </Router>
  );
}

export default App;
