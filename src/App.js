//import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HansungRadio from "./HansungRadio";
//import Font from './index'// Font는 main화면 경로 -> HansungRadio
import Login from "./components/Login/Login";
function App() {
  return (
    <Login />
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Login />} />
    //     <Route path="/main" element={<HansungRadio />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
