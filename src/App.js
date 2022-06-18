import React from "react";
import "./App.css";
import Header from "./components/pages/layout/Header";
import Main from "./components/pages/layout/Main";
import Footer from "./components/pages/layout/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
