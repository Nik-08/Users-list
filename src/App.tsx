import React from "react";
import { Route, Routes } from "react-router";

import { Aside } from "./components/layout/Aside";
import { HomePage, UserPage } from "./pages";

function App() {
  return (
    <Aside>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<UserPage />} />
      </Routes>
    </Aside>
  );
}

export default App;
