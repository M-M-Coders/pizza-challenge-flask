import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Navbar from "./Navbar";
import Restaurant from "./Restaurant";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="http://127.0.0.1:5555/restaurants/:id">
          <Restaurant />
        </Route>
        <Route exact path="http://127.0.0.1:5555/">
          <Home />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;