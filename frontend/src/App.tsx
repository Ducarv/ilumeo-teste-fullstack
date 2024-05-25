import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Points from "./components/Points";
import "./App.css"

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/points" element={<Points />} />
      </Routes>
    </div>
  );
}

export default App;
