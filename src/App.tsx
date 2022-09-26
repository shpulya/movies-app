import React from "react";

import "./App.scss";

import Header from "./Components/header/header"
import Footer from "./Components/footer/footer";
import Main from "./Components/main/main";

function App() {
  return (
    <div className="body">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
