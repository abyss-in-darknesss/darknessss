import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import 'styles/app.scss';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

import { App, Home, Register, Login, Write, Article } from './containers';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <>
        <Route path="/" component={App} />
        <div className="content">
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
          <Route path="/write" component={Write}/>
          <Route path="/article/:index" component={Article}/>
          <Route exact path="/" component={Home}/>
        </div>
      </>
    </Router>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
