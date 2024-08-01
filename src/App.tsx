import React from "react";
import Dashboard from "./components/Dashboard";
import 'handsontable/dist/handsontable.full.min.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Dashboard />
      </header>
    </div>
  );
};
export default App;
