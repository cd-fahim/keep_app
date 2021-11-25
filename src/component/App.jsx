import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";

// NOTE: There are added all external components.

class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <Note />
        <Footer />
      </main>
    );
  }
}

export default App;
