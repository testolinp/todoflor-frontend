import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import HomeView from './views/home'
import LoginView from './views/login'
import RegisterView from './views/register'

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={HomeView} />
      <Route path="/login" component={LoginView} />
      <Route path="/register" component={RegisterView} />
    </Router>
  );
}

export default App;
