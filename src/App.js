import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import HomeView from './views/home'
import LoginView from './views/login'
import RegisterView from './views/register'
import TermsView from './views/terms'
import ProductView from './views/product'
import ProductCategoryView from './views/product-category'
import ProductDetailView from './views/product-detail'

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={HomeView} />
      <Route path="/login" component={LoginView} />
      <Route path="/register" component={RegisterView} />
      <Route path="/terms" component={TermsView} />
      <Route path="/products" component={ProductView} />
      <Route path="/products/category" component={ProductCategoryView} />
      <Route path="/product" component={ProductDetailView} />
    </Router>
  );
}

export default App;
