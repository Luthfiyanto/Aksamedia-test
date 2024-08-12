import { createRoot } from "react-dom/client";
import App from "./pages/App.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Explore from "./pages/Explore.jsx";
import Manage from "./pages/Manage.jsx";
import Setting from "./pages/Setting.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppContextProvider from "./contexts/App.contexts.jsx";
import AuthContextProvider from "./contexts/Auth.contexts.jsx";
import ProductContextProvider from "./contexts/Product.contexts.jsx";

createRoot(document.getElementById("root")).render(
  <AppContextProvider>
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<App />} />
            <Route path="home" element={<App />} />
            <Route path="login" element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="explore" element={<Explore />} />
              <Route
                path="manage"
                element={
                  <ProductContextProvider>
                    <Manage />
                  </ProductContextProvider>
                }
              />
              <Route path="setting" element={<Setting />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  </AppContextProvider>
);
