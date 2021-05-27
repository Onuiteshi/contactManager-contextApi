import React from 'react'
import './App.css';
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom'
import Contacts from './components/Contacts';
import Header from './layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from './Context';
import AddContact from './pages/AddContact';
import About from './pages/About';
import NotFound from './pages/NotFound';


function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header branding = 'Contact Manager' />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Contacts} />
              <Route exact path='/contact/add' component={AddContact} />
              <Route exact path='/about' component={About} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
    
  );
}

export default App;

