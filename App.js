import './App.css';
import Font from './components/f_ont/font';
import Login2 from './components/Login2/login2';
import {BrowserRouter, Route, Routes, link, Link} from 'react-router-dom';
import "./components/Login2/login2.css"


function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login2 login1 = "Login" login2 = "Login" login3="Login" login4 = "Login" /> }   />
        
        <Route path="/main" element={<Font title="BoogieRadio"      boogieradio1 = "BoogieRadio"      boogieradio2 = "BoogieRadio"      boogieradio3 = "BoogieRadio"      boogieradio4 = "BoogieRadio"/>}   />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
