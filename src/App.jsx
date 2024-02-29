import { Route, Routes } from "react-router-dom";
import "./App.css";
import XrTableContainer from "./components/xr-table/XrTableContainer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<XrTableContainer/>} />
    </Routes>
  );
}

export default App;
