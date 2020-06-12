import React from "react";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import './app.css';

function App() {
  return (
    <div id='appContainer'>
      <Header />
      <Body />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
