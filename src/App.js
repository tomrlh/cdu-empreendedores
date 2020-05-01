import React from 'react'
import Navbar from './components/global/Navbar'
import Parallax from './components/global/Parallax'
import Sobre from './components/global/Sobre'
import Rodape from './components/global/Rodape'
import Empreendedores from './components/global/Empreendedores'
import './App.css'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Parallax/>
      <Sobre/>
      <Empreendedores/>
      <Rodape/>
    </div>
  );
}

export default App;
