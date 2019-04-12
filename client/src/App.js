import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import LogIn from './pages/LogIn';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <AppHeader />
            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/LogIn" component={LogIn} />
            <AppFooter />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
