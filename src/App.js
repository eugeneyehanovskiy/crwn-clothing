import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUp from "./pages/sign-in-sing-up/sign-in-sing-up.component";
import { auth } from "./firebase/firebase.utils";

import "./pages/homepage/homepage.style.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  //Closing the subscription:
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
