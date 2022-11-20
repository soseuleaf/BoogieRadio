import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Font from './components/f_ont/font'// Font는 main화면 경로
import Login from './components/Login/Login';
import "./components/Login/Login.css"
function App() {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/> }   />
        <Route path="/main" element={<Font title="BoogieRadio"      boogieradio1 = "BoogieRadio"      boogieradio2 = "BoogieRadio"      boogieradio3 = "BoogieRadio"      boogieradio4 = "BoogieRadio"/>}   />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
