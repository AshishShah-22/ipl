import React from "react";
import Header from "./components/Header";
import "./App.css";
import HomePage from "./page/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/ui/footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="flex flex-col min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/test" element={<HomePage />} />
          </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;