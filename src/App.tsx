import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';


// CSS Modules (Style Sheets)
import './App.scss';




// Components
import Landing from './components/Landing';
import Store from './components/Store';



function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/store" element={<Store />} />
      <Route path="/" element={<Landing/>} />
      <Route path="/*" element={<Navigate to="/" />} />
     </Routes>
    </div>
  );
}


export default App;
