import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from "./components/Home";
import { LoginComponent } from "./components/LoginComponent";
import { RegisterComponent } from "./components/RegisterComponent";
import { Layout } from "./components/Layout";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Layout}>

          <Route index Component={Home}></Route>
          <Route path="/login" Component={LoginComponent}></Route>
          <Route path="/register" Component={RegisterComponent}></Route>
          </ Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
