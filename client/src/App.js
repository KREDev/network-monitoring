// src/App.js
import React from "react";
import Dashboard from "./components/Dashboard";
import GrafanaDashboard from "./components/GrafanaDashboard";
import MetricDisplay from "./components/MetricDisplay";

function App() {
  return (
    <div className="App">
      <Dashboard />
      <GrafanaDashboard />
      <MetricDisplay />
    </div>
  );
}

export default App;
