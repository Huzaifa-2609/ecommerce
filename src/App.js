import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { authRoutes, routes } from "./static/data";
import { useSelector } from "react-redux";
import Store from "./redux/store";
import { loadSeller, loadUser } from "./redux/actions/user";
import { getAllProducts } from "./redux/actions/product";
import { getAllEvents } from "./redux/actions/event";
import { useEffect } from "react";
function App() {
  const { user, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    // Store.dispatch(loadUser());
    Store.dispatch(loadSeller());
    Store.dispatch(getAllProducts());
    // Store.dispatch(getAllEvents());
    // getStripeApikey();
  }, []);
  console.log({ isAuthenticated });
  return (
    <div className="App">
      <BrowserRouter>
        <Toaster />
        <Routes>
          {routes.map((item) => (
            <Route path={item.route} element={item.component} />
          ))}
          {!isAuthenticated &&
            authRoutes.map((item) => {
              return <Route path={item.route} element={item.component} />;
            })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
