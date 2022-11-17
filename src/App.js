//import React, {component} from 'react';
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import  Login  from './Login';
import "./App.css";
import Tippy from '@tippy.js/react';




    function App() {
        return (
             <div className='App'>
              <div style={{paddingBottom: '20px'}}>

              </div>
                <Tippy placement='right' arrow={true} content='Basic Tooltip'>
                    <button>Hover</button>
                </Tippy>
            </div>
        )
    }
   


export default App;