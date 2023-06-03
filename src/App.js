import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { routes } from "./static/data";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Toaster />
        <Routes>
          {routes.map((item) => (
            <Route path={item.route} element={item.component} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
