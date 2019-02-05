import React, { Component } from "react";
import Styles from "../styles";
import MapsAPI from "../containers/MapsAPI";

class App extends Component {
  render() {
    Styles();
    /* wrap everything inside MapsAPI provider */
    return <MapsAPI />;
  }
}

export default App;
