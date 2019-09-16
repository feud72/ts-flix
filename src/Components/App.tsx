import React from "react";
import Router from "./Router";
import GlobalStyle from "./GlobalStyles";

class App extends React.Component {
  render() {
    return (
      <>
        <Router />
        <GlobalStyle />
      </>
    );
  }
}

export default App;
