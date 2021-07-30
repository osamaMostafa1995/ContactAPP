
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import AddContact from './component/Add';
import EditContact from './component/Edit';
import Home from './component/Home';


function App() {
  return (
    <div className="App">
   
      <Switch>
        <Route exact path = "/" >
        <Home/>
        </Route>
        <Route path = "/Add" >
        <AddContact/>
        </Route>
        <Route path = "/Edit/:id" >
        <EditContact/>
        </Route>
      </Switch>
      
      <ToastContainer/>
    </div>
  );
}

export default App;
