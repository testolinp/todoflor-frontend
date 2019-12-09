import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import HomeView from './views/home'
import LoginView from './views/login'
import RegisterView from './views/register'
import TermsView from './views/terms'

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={HomeView} />
      <Route path="/login" component={LoginView} />
      <Route path="/register" component={RegisterView} />
      <Route path="/terms" component={TermsView} />
    </Router>
  );
}

export default App;
