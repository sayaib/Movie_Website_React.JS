import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Manu from './MoviePages/Manu';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './Home';
import GOT from './Webseries/GOT';

function App() {
  return (
    <>
    <Manu/>
    <BrowserRouter>
       <Switch>
       <Route exact path="/" component={Home} />
      <Route exact path="/GOT" component={GOT} />
      </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
