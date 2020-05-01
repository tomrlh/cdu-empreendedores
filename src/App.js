import React from 'react';
import logo from './logo.svg';
import CategoriasView from './components/empreendedores/CategoriasView'
import {Container} from 'semantic-ui-react'
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <CategoriasView/>
      </Container>
    </div>
  );
}

export default App;
