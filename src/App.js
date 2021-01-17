import NavigationBarSection from "./sections/navigation-bar-section/NavigationBarSection";
import SubnavigationSection from "./sections/subnavigation-section/SubnavigtionSection";
import FilterSection from "./sections/filter-section/FilterSection";

import HomePage from "./pages/home-page/HomePage";
import LoginPage from "./pages/login-page/LoginPage";
import SignupPage from "./pages/signup-page/SignupPage";
import BasketPage from "./pages/basket-page/BasketPage";
import CategoriesPage from "./pages/categories-page/CategoriesPage";
import OrdersPage from "./pages/orders-page/OrdersPage";
import PaymentPage from "./pages/payment-page/PaymentPage";
import ProductPage from "./pages/product-page/ProductPage";
import ProfilePage from "./pages/profile-page/ProfilePage";

import ChatbotComponent from './components/chatbot-component/ChatbotComponent';

import React, { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import FooterSection from "./sections/footer-section/FooterSection";
import ProductComponent from "./components/product-component/ProductComponent";
import ProductSection from "./sections/product-section/ProductSection";

const promise = loadStripe(
  "pk_test_51HtEeUIPopMtak88ibnyssYsDXC6WiDTHWcJr5NsLIFPzraUavkoMXB1usAbXpVbXKYTewhHU0sPkhVvXa5Ti3jx00M9u9p1zE"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);

      if (authUser) {
        //the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user was logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
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

          <Route path='/products'>
            <NavigationBarSection />
            <SubnavigationSection />
            <FilterSection />
            <ProductSection />
            <FooterSection />

            <ChatbotComponent />
          </Route>

          <Route path='/categories'>
            <NavigationBarSection />
            <SubnavigationSection />
            <CategoriesPage />

            <ChatbotComponent />
          </Route>

          <Route path='/orders'>
            <NavigationBarSection />
            <SubnavigationSection />
            <OrdersPage />

            <ChatbotComponent />
          </Route>

          <Route path='/profile'>
            <NavigationBarSection />
            <SubnavigationSection />
            <ProfilePage />

            <ChatbotComponent />
          </Route>

          <Route path='/basket'>
            <NavigationBarSection />
            <SubnavigationSection />
            <BasketPage />

            <ChatbotComponent />
          </Route>

          <Route path='/payment'>
            <NavigationBarSection />
            <Elements stripe={promise}>
              <PaymentPage />
            </Elements>

            <ChatbotComponent />
          </Route>

          <Route path='/productDetails'>
            <NavigationBarSection />
            <SubnavigationSection />
            <ProductPage />
            <ChatbotComponent />
            <FooterSection />
          </Route>



          <Route path='/'>
            <NavigationBarSection />
            <SubnavigationSection />
            <CategoriesPage />
            <ChatbotComponent />
            <FooterSection />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
