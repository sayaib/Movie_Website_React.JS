import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Manu from './Manu';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './Home';
import GOT from './Webseries/GOT';
import WhatIf from './Webseries/WhatIf';
import Lucifer from './Webseries/Lucifer';


function App() {
  return (
    <>
    <Manu/>
    <BrowserRouter>
       <Switch>
       <Route exact path="/" component={Home} />
      <Route exact path="/got" component={GOT} />
      <Route exact path="/whatif" component={WhatIf} />
      <Route exact path="/lucifer" component={Lucifer} />
      </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
