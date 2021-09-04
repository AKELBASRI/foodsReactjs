import React from "react";
import Navbar from "./components/Navbar";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import "./Home.css";
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Section1 />
      <Section2/>
    </React.Fragment>
  );
}

export default App;
