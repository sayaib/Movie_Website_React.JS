import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Manu from './MoviePages/Manu';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './Home';
import GOT from './Webseries/GOT';
import WhatIf from './Webseries/WhatIf';


function App() {
  return (
    <>
    <Manu/>
    <BrowserRouter>
       <Switch>
       <Route exact path="/" component={Home} />
      <Route exact path="/got" component={GOT} />
      <Route exact path="/whatif" component={WhatIf} />
      </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
