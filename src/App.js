import React, { PureComponent } from "react";
import Router from "./router";
import { connect } from "react-redux";

class App extends PureComponent {
  // Only Android
  // componentWillMount() {
  //   BackHandler.addEventListener("hardwareBackPress", this.backHandle);
  // }

  // componentWillUnmount() {
  //   BackHandler.removeEventListener("hardwareBackPress", this.backHandle);
  // }

  // backHandle = () => {
  //   const currentScreen = getActiveRouteName(this.props.router);
  //   if (currentScreen === "Login") {
  //     return true;
  //   }
  //   if (currentScreen !== "Home") {
  //     this.props.dispatch(NavigationActions.back());
  //     return true;
  //   }
  //   return false;
  // };

  render() {
    const { app, dispatch, router } = this.props;

    return <Router dispatch={dispatch} state={router} />;
  }
}

const mapStateToProps = state => {
  const { app, router } = state;
  return { app, router };
};

export default connect(mapStateToProps)(App);

const getActiveRouteName = navigationState => {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  if (route.routes) {
    return getActiveRouteName(route);
  }
  return route.routeName;
};
