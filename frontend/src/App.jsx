import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/signin";
import { Dashboard } from "./pages/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
