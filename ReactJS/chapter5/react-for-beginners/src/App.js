import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Nav from "./components/Nav";


function App() {  
  return (
  <Router>
    <Nav></Nav>
    <Switch>
      <Route path="/movie/:id">
        <Detail></Detail>
      </Route>
      <Route path="/">
        <Home></Home>
      </Route>
    </Switch>

  </Router>
  );
}

export default App;
