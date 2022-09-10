import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Packages from "./pages/Packages";
import Custompack from "./pages/Custompack";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={"/packages"} element={<Packages />} />
        <Route path={"/custompack"} element={<Custompack />} />
      </Routes>
    </div>
  );
}

export default App;
