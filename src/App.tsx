import "./App.css";
import { Route, Routes } from "react-router";
import { MainPage } from "./app/MainPage";
import { AddCarProfile } from "./app/AddCarProfile";

function App() {
  return (
    <Routes>
      <Route path="/"  element={<MainPage />} />
      <Route path="/car_profile"  element={<AddCarProfile />} />
    </Routes>
  );
}

export default App;
