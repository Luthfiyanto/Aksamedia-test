import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Login from "./Login.jsx";
import Dashboard from "./Dashboard.jsx";
import Explore from "./Explore.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppContextProvider from "./contexts/App.contexts.jsx";

createRoot(document.getElementById("root")).render(
  <AppContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<App />} />
          <Route path="home" element={<App />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="explore" element={<Explore />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AppContextProvider>
);
