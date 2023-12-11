import { Headerusuario } from '../componentes/Header'
import { Footer_interno } from '../componentes/Footer'
import { Botao_Jogaragora } from '../componentes/Botao'
import './stilos/Paginahome.css'
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LocalServerUrl } from '../configuracao/LocalServer';

const Paginahome = () => {

    const [jogos, setJogos] = useState([]);


    const usuarioLogado = localStorage.getItem('usuarioLogado')

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

    


    return (
        <>
            <div id='bodyhome'>
                <div>
                    <Headerusuario />
                </div>

                <div id='mainhome'>
                    <section id="ultimo_jogo">
                        <div className="divisao">
                            <div className="linha"></div>
                            <p>Ultimo Jogo Adicionado</p>
                            <div className="linha"></div>
                        </div>

                        {
                            jogos
                                .filter((jogo) => jogo.usuario === usuarioLogado)
                                .slice(-1)
                                .map((jogo) => (
                                    (
                                        <a key={jogo.id} >
                                            <Link to={`/game/${jogo.nomeJogo}`}>
                                                <img  src={jogo.urlCapaJogo} alt={jogo.nomeJogo} ></img>
                                            </Link>
                                        </a>
                                    )
                                ))
                        }
                        {
                            jogos
                                .filter((jogo) => jogo.usuario === usuarioLogado).length === 0
                                ? <p className='retorno0'>Nenhum jogo encontrado.</p>
                                : null
                        }

                        <Botao_Jogaragora id='botao-jogar' />
                    </section>

                    <section id="mais">
                        <div className="divisao">
                            <div className="linha"></div>
                            <p>Mais Jogados no Momento</p>
                            <div className="linha"></div>
                        </div>

                        <div className="Imagem_mais_jogados">
                            {
                                jogos
                                    .filter((jogo) => jogo.usuario === usuarioLogado && jogo.status === 'Jogando')
                                    .slice(0, 4)
                                    .sort(() => Math.random() - 0.5)
                                    .map((jogo) => (
                                        (
                                            <a className='Mais_jogados' key={jogo.id} >
                                                <Link to={`/game/${jogo.nomeJogo}`}>
                                                    <img className='link_img_jogo' src={jogo.urlCapaJogo} alt={jogo.nomeJogo} ></img>
                                                </Link>
                                                <a className="link_jogo" >{jogo.nomeJogo}</a>

                                            </a>
                                        )
                                    ))
                            }
                            {
                                jogos
                                    .filter((jogo) => jogo.usuario === usuarioLogado && jogo.status === 'Jogando').length === 0
                                    ? <p className='retorno0'>Nenhum jogo encontrado.</p>
                                    : null
                            }
                        </div>
                    </section>
                    <section id="zerado">
                        <div className="divisao">
                            <div className="linha"></div>
                            <p>Zerados</p>
                            <div className="linha"></div>
                        </div>

                        <div className="Imagens_zerados">
                            {
                                jogos
                                    .filter((jogo) => jogo.usuario === usuarioLogado && jogo.status === 'Zerado')
                                    .slice(0, 4)
                                    .sort(() => Math.random() - 0.5)
                                    .map((jogo) => (
                                        (
                                            <a className='Jogando_agora' key={jogo.id} >
                                                <Link to={`/game/${jogo.nomeJogo}`}>
                                                    <img className='link_img_jogo' src={jogo.urlCapaJogo} alt={jogo.nomeJogo} ></img>
                                                </Link>
                                                <a className="link_jogo" >{jogo.nomeJogo}</a>

                                            </a>
                                        )
                                    ))
                            }
                            {
                                jogos
                                    .filter((jogo) => jogo.usuario === usuarioLogado && jogo.status === 'Zerado').length === 0
                                    ? <p className='retorno0'>Nenhum jogo encontrado.</p>
                                    : null
                            }
                        </div>
                    </section>

                    <section id="agora">
                        <div className="divisao">
                            <div className="linha"></div>
                            <p>Nunca Jogado</p>
                            <div className="linha"></div>
                        </div>

                        <div className="Imagens_jogando_agora">

                            {
                                jogos
                                    .filter((jogo) => jogo.usuario === usuarioLogado && jogo.status === 'Nunca jogado')
                                    .slice(0, 4)
                                    .sort(() => Math.random() - 0.5)
                                    .map((jogo) => (
                                        (
                                            <a className='Jogando_agora' key={jogo.id} >
                                                <Link to={`/game/${jogo.nomeJogo}`}>
                                                    <img className='link_img_jogo' src={jogo.urlCapaJogo} alt={jogo.nomeJogo} ></img>
                                                </Link>
                                                <a className="link_jogo" >{jogo.nomeJogo}</a>

                                            </a>
                                        )
                                    ))
                            }
                            {
                                jogos
                                    .filter((jogo) => jogo.usuario === usuarioLogado && jogo.status === 'Nunca jogado').length === 0
                                    ? <p className='retorno0'>Nenhum jogo encontrado.</p>
                                    : null
                            }
                        </div>
                    </section>



                    {/* <section id="categorias">
                        <div className="divisao">
                            <div className="linha"></div>
                            <p>Categorias</p>
                            <div className="linha"></div>
                        </div>

                        <div className="Imagens_categoria">
                            <div className="Categoria">
                                <a href="#"><img src="imagens/Categorias/adventure.png" alt="" /></a>
                                <a className="link_categoria" href="#">Aventura</a>
                            </div>

                            <div className="Categoria">
                                <a href="#"><img src="imagens/Categorias/ação.png" alt="" /></a>
                                <a className="link_categoria" href="#">Ação</a>
                            </div>

                            <div className="Categoria">
                                <a href="#"><img src="imagens/Categorias/fighting_martial_arts.png" alt="" /></a>
                                <a className="link_categoria" href="#">Luta</a>
                            </div>

                            <div className="Categoria">
                                <a href="#"><img src="imagens/Categorias/rpg.png" alt="" /></a>
                                <a className="link_categoria" href="#">R.P.G</a>
                            </div>
                        </div>
                    </section> */}

                    <section id="nrecomendado">
                        <div className="divisao">
                            <div className="linha"></div>
                            <p>Não Recomendados</p>
                            <div className="linha"></div>
                        </div>

                        <div className="Imagens_nrecomendado">
                            {
                                jogos
                                    .filter((jogo) => jogo.usuario === usuarioLogado && jogo.recomendo === 'Não')
                                    .slice(0, 4)
                                    .sort(() => Math.random() - 0.5)
                                    .map((jogo) => (
                                        (
                                            <a className='Nao_recomendados' key={jogo.id} >
                                                <Link to={`/game/${jogo.nomeJogo}`}>
                                                    <img className='link_img_jogo' src={jogo.urlCapaJogo} alt={jogo.nomeJogo} ></img>
                                                </Link>
                                            </a>
                                        )
                                    ))
                            }
                        </div>


                    </section>

                </div>


                <div id='footer01home'>
                    <Footer_interno />
                </div>
            </div>
        </>

    )
}

export default Paginahome