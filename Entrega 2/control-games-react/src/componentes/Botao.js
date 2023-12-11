import './stilos/botaostyle.css'
import { Link } from 'react-router-dom';

export function Botao_Jogaragora() {
  return (
    // <div id="botao-jogar">
    //       <a href="#">Jogar Agora</a>
    // </div>

    <button id="botao-jogar">Jogar Agora</button>
  );
}

export function Botao_cadastrar_jogo() {
  return (
    <Link to='/cadastrojogo'>
      <button id="botao-cadastrar-jogo">Cadastrar Novo Jogo</button>
    </Link>
  );
}

export function Botao_adicionar_jogo() {
  return (
    <button id="botao-cadastrar-jogo">Adicionar na Biblioteca</button>
  );
}


export function Botao_editar_jogo() {
  return (
    <Link to='/paginaatualizajogo'>
      <button id="botao-editar-jogo">Editar Jogo</button>
    </Link>

  );
}

export function Botao_remover_jogo() {
  return (
    <button id="botao-remover-jogo">Remover Jogo</button>
  );
}

export function Botao_adicionar_plataforma() {
  return (
    <button id="botao_adicionar_plataforma">Adiconar plataforma</button>
  );
}


export function Botao_remover_plataforma() {
  return (
    <button id="botao_remover_plataforma">Remover plataforma</button>
  );
}
