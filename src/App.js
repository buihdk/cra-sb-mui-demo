import React, { Suspense } from "react";
import "./App.css";

import Routes from "./routes/index";

function App() {
  return (
    <Suspense fallback={<div className="loading-app" />}>
      <Routes />
    </Suspense>
  );
}

export default App;
