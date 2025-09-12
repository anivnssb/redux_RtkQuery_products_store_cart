import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./store/counterSlice";
import AllProducts from "./components/AllProducts";
import type { RootState } from "./store/store";
import type { AppDispatch } from "./store/store";
import "./app.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<AllProducts />} />
      </Routes>
    </Router>
  );
};

export default App;
