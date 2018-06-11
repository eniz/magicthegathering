import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from './store';
import Header from './components/Header';
import HomePage from './containers/HomePage';
import CardDetail from './containers/CardDetail';

//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/:id" component={CardDetail} />
      </React.Fragment>
    </Router>
  </Provider>,
  document.getElementById('root'),
)

//registerServiceWorker();
