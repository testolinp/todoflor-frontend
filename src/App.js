import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import HomeView from './views/home'
import LoginView from './views/login'
import RegisterView from './views/register'
import TermsView from './views/terms'
import ProductView from './views/product'
import ProductCategoryView from './views/product-category'
import ProductDetailView from './views/product-detail'
import SuccessView from './views/success'
import Error404View from './views/404'

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={HomeView} />
      <Route path="/login" component={LoginView} />
      <Route path="/register" component={RegisterView} />
      <Route path="/terms" component={TermsView} />
      <Route path="/products" component={ProductView} />
      <Route path="/category" component={ProductCategoryView} />
      <Route path="/product" component={ProductDetailView} />
      <Route path="/success" component={SuccessView} />
      <Route path="/404" component={Error404View} />
    </Router>
  );
}

export default App;
