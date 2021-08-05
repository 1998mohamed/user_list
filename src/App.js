
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Switch, Route, Router} from "react-router-dom";


function App() {

  return (
    <div >
      
        <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
