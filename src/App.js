import React from 'react';
import Test from './components/test'
import Login from '@/views/Login'
import {BrowserRouter as Router,Route}from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
        <Route path="/" exact component={Test}></Route>
        <Route path="/login" exact component={Login}></Route>
    </div>
    </Router>
  );
}

export default App;
