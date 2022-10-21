import React from "react";
import HomeScreen from "./HomeScreen";
import "./App.css";
import LoginScreen from "./LoginScreen";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

function App() {
  const user = null
  return (
    <div className="app">
      <Router>
      {!user ? (
      <LoginScreen />
      ) : (
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
