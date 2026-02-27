import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";

function App() {
  axios.defaults.withCredentials = true;
  return (
    <div className="">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
