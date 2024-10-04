import React from "react";
import Header from "./components/Header/header";
import Home from "./pages/Home/home";
import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="main">
      <Home/>
      </div>
      
    </div>
  );
}

export default App;
