import React, { useState, useEffect } from 'react'
import './App.css';
import Login from './components/Login';
import Home from './components/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Switch, Route, Router} from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";


function App() {

  const  [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },5000)
  },[]);

  return (
    <div >
      {
        loading ?    
        <div className="spinner"><ClipLoader color={"#000000"} loading={loading} size={150} /></div>
        :
        <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
      </Switch>
      }
    </div>
  );
}

export default App;
