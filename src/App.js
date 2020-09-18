import React, { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/Login/Login';
import News from './components/News/News';
import Destination from './components/Destination/Destination';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Booking from './components/Booking/Booking';
import BookingDetails from './components/BookingDetails/BookingDetails';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/news">
              <News></News>
            </Route>
            <Route path="/destination">
              <Destination></Destination>
            </Route>
            <Route path="/blog">
              <Blog></Blog>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/booking/:cityId">
              <Booking></Booking>
            </Route>
            <PrivateRoute path="/booking-details">
              <BookingDetails></BookingDetails>
            </PrivateRoute>
            <Route path="*">
              <Login></Login>
            </Route>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
