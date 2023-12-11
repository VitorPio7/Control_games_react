import { Headerusuario } from '../componentes/Header'
import { Footer_interno } from '../componentes/Footer'
import './stilos/Paginagame.css'

import { Botao_editar_jogo, Botao_remover_jogo } from '../componentes/Botao'
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { LocalServerUrl } from "../configuracao/LocalServer";
import axios from "axios";


const Paginagame = () => {

    const [jogos, setJogos] = useState([]);
    const [jogoEncontrado, setJogoEncontrado] = useState('');
    const usuarioLogado = localStorage.getItem('usuarioLogado')
    console.log(usuarioLogado)
    const navigate = useNavigate()


    useEffect(() => {
        axios.get(`http://${LocalServerUrl}/jogos`)
            .then(response => {
                setJogos(response.data);
                console.log(response.data)

            })
            .catch(error => {
                console.error('Erro ao buscar Jogos:', error);
            });
    }, []);


    useEffect(() => {
        const jogoAberto = decodeURIComponent(window.location.pathname.split('/game/').pop());
        setJogoEncontrado(jogoAberto);
        console.log(jogoAberto)



    }, []);

    useEffect(() => {
        const alertPlataforma = jogos.find((jogo) => jogo.plataforma === 'N/A Categoria')


        if (alertPlataforma) {
            alert('É necessário alterar a categoria do Jogo!')
        }

    }, [jogos]);

    useEffect(() => {
        const alertCategoria = jogos.find((jogo) => jogo.categoria === 'N/A Plataforma')


        if (alertCategoria) {
            alert('É necessário alterar a plataforma do Jogo!')
        }

    }, [jogos]);


    const handleExcluirJogo = async () => {
        try {

            var resultado = window.confirm("Deseja realmente excluir o Jogo? Isso apagará definitivamente o Jogo do Control Games!");

            if (resultado) {
                console.log("Usuário clicou em OK");

                console.log('Jogo selecionado para exclusão:', jogoEncontrado);
                // Fazer a requisição DELETE para o backend
                await axios.delete(`http://${LocalServerUrl}/jogos/${jogoEncontrado}/${usuarioLogado}`);

                alert('Jogo excluído com sucesso! Você será redirecionado para sua biblioteca');
                navigate('/biblioteca')
            } else {
                console.log("Usuário clicou em Cancelar");
                throw new Error('Operação aborrtada pelo usuário');
            }

        } catch (error) {
            // Lidar com erros durante a exclusão
            alert(`Erro ao excluir jogo: ${error.message}`);
        }
    };


    return (
        <>
            <div id='bodygame'>
                <div>
                    <Headerusuario />
                </div>

                <div id='maingame'>
                    <section className='box_game'>
                        <div className="divisaogame">
                            <div className="linhagame"></div>
                            {
                                jogos
                                    .filter((jogo) => jogo.usuario === usuarioLogado && (jogo.nomeJogo === jogoEncontrado))
                                    .map(jogo => (
                                        (
                                            <p id="gameid">{jogo.nomeJogo}</p>

                                        )
                                    ))
                            }
                            <div className="linhagame"></div>
                        </div>

                        {
                            jogos
                                .filter((jogo) => jogo.usuario === usuarioLogado && (jogo.nomeJogo === jogoEncontrado))
                                .map(jogo => (
                                    (
                                        <div id="foto_box">
                                            <img className="img_game" src={jogo.urlCapaJogo}></img>
                                        </div>
                                    )
                                ))
                        }


                        <article className="info">
                            {
                                jogos
                                    .filter((jogo) => jogo.usuario === usuarioLogado && (jogo.nomeJogo === jogoEncontrado))
                                    .map(jogo => (
                                        (
                                            <ul>
                                                <li>Plataforma : <p id="plataformaid">{jogo.plataforma}</p> <span id="plataformaokid"></span></li>
                                                <li>Status : <p id="statusid">{jogo.status}</p></li>
                                                <li>Categoria : <p id="categoriaid">{jogo.categoria}</p></li>
                                                <li>Progresso : <p id="progressoid">{jogo.progresso}</p></li>
                                                <li>Recomendo : <p id="recomendoid">{jogo.recomendo}</p></li>
                                                <li>Ano de Lançamento : <p id="anoid">{jogo.ano}</p></li>
                                            </ul>
                                        )
                                    ))
                            }

                            {
                                jogos
                                    .filter((jogo) => jogo.usuario === usuarioLogado && (jogo.nomeJogo === jogoEncontrado))
                                    .map(jogo => (
                                        (
                                            <aside id="box_descricao">
                                                <h2>Descrição</h2>
                                                <p id="descricaoid">{jogo.descricao}</p>
                                            </aside>
                                        )
                                    ))
                            }


                        </article>
                    </section>

                    {
                        jogos
                            .filter((jogo) => jogo.usuario === usuarioLogado && (jogo.nomeJogo === jogoEncontrado))
                            .map(jogo => (
                                (
                                    <div className='botoes_game'>
                                        <Link to={`/paginaatualizajogo/${jogo.nomeJogo}`}>
                                            <button id="botao-editar-jogo">Editar Jogo</button>
                                        </Link>
                                        <button id="botao-remover-jogo" onClick={handleExcluirJogo}>Remover Jogo</button>

                                    </div>
                                )
                            ))
                    }

                </div>

                <div id='footer01game'>
                    <Footer_interno />
                </div>
            </div>
        </>

    )
}

export default Paginagame