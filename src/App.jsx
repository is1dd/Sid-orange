import "./App.css";
import { Route, Routes } from "react-router-dom";
import Category from "./Category";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Routes>
      <Route element={<Category />} path="/" />
      <Route element={<Dashboard />} path="/dashboard" />
    </Routes>
  );
}

export default App;
