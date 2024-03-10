import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Product from "./components/Product";
import Success from "./components/Success";
import Failure from "./components/Failure";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Product} />
          <Route path="/success" Component={Success} />
          <Route path="/failure" Component={Failure} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
