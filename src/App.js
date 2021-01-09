import NavigationBarSection from './sections/navigation-bar-section/NavigationBarSection';
import SubnavigationSection from './sections/subnavigation-section/SubnavigtionSection';

import HomePage from "./pages/home-page/HomePage";
import LoginPage from "./pages/login-page/LoginPage";
import SignupPage from "./pages/signup-page/SignupPage";
import BasketPage from "./pages/basket-page/BasketPage";
import CategoriesPage from "./pages/categories-page/CategoriesPage";
import OrdersPage from "./pages/orders-page/OrdersPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/login'>
            <LoginPage />
          </Route>
          <Route path='/signup'>
            <SignupPage />
          </Route>

          <Route path='/categories'>
            <NavigationBarSection />
            <SubnavigationSection />
            <CategoriesPage />
          </Route>

          <Route path='/orders'>
            <NavigationBarSection />
            <SubnavigationSection />
            <OrdersPage/>
          </Route>

          <Route path='/basket'>
            <NavigationBarSection />
            <SubnavigationSection />
            <BasketPage />
          </Route>

          <Route path='/'>
            <NavigationBarSection />
            <SubnavigationSection />
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
