import logo from "./logo.svg";
import "./App.css";
import Singup from "./pages/Signup";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Singup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
