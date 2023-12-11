// import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './stilos/index.css';

// import Paginaplataformas from './Paginas/paginaplataformas';
//import Paginahome  from './Paginas/paginahome';
//import {Form_cadastro} from './componentes/Formularios'
//import Rotas from './Paginas/Rotas';
//import Paginalogin from './Paginas/Paginalogin';
//import Paginacadastro from './Paginas/paginacadastro';

// import Paginahome from './Paginas/paginahome';
// import Paginabiblioteca from './Paginas/paginabiblioteca'
// import Paginasuporte from './Paginas/paginasuporte';
// import {Form_configuracao} from './componentes/Formularios'
// import Paginaconfiguracao from './Paginas/paginaconfiguracao'
// import Paginasuporteexterno from './Paginas/paginasuporteexterno';
// import Rotas from './Rotas';
import Rotas from './Paginas/Rotas';
// import Paginagame from './Paginas/paginagame'
// import Form_cadastrojogo from './componentes/Formulariocadastrojogo'
// import Paginacadastrojogo from './Paginas/paginacasdastrojogo';
// import Paginaplataformas from './Paginas/paginaplataformas';
// import {Form_add_plataforma} from './componentes/Formularios'
// import Paginacadastroplataforma from './Paginas/paginacadastroplataformas'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <Rotas/>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// React.StrictMode