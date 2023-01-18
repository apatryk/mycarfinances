import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import { MainPage } from "./app/MainPage";

function App() {
  return (
    <Routes>
      <Route path="/"  element={<MainPage />} />
    </Routes>
  );
}

export default App;
