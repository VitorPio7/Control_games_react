import Logo from '../imagens/Logotipo/logotipo header.png'
import Imagem_usuario from '../imagens/avatar/imgusuario.jpeg'
import Img_classe from '../imagens/avatar/imgclasse.png'
import './stilos/headerstyle.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { LocalServerUrl } from '../configuracao/LocalServer';


export function Headerusuario() {
    const [usuarios, setUsuarios] = useState([]);
    const usuarioLogado = localStorage.getItem('usuarioLogado')


    useEffect(() => {
        axios.get(`http://${LocalServerUrl}/usuarios`)
            .then(response => {
                setUsuarios(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.error('Erro ao buscar usuarios:', error);
            });
    }, []);

    return (
        <div id='header'>

            <section id="logotipo">
                <Link to='/home'>
                    <a><img src={Logo}></img></a>
                </Link>
                <Link to='/home'>
                    <a>Control_Games</a>
                </Link>
            </section>

            <section id="menu">
                <nav>
                    <Link to='/home'>
                        <a>Home</a>
                    </Link>
                    <Link to='/biblioteca'>
                        <a>Biblioteca</a>
                    </Link>
                    <Link to='/plataformas'>
                        <a>Plataformas</a>
                    </Link>
                </nav>
            </section>

            <section id='login'>

                {
                            usuarios
                                .filter((usuario) => usuario.nickname === usuarioLogado)
                                .slice(-1)
                                .map((usuario) => (
                                    (
                                        <a key={usuario.id} >
                                            <Link to='/configuracao'>
                                                <img id='img_usuario' src={usuario.avatar} ></img>
                                            </Link>
                                            <p id="usuario_font">{usuario.nickname}</p>

                                        </a>
                                    )
                                ))
                        }
            </section>

        </div>
    );
}

export function Headerlogin() {
    return (
        <div id='header'>

            <section id="logotipo">
                <a ><img src={Logo}></img></a>
                <a >Control_Games</a>
            </section>

            {/* <section id="voltar_login">
                <nav>
                    <a href="#">Login</a>
                </nav>
            </section> */}

        </div>
    );
}

export function Headersuportelogincadastro() {
    return (
        <div id='header'>

            <section id="logotipo">
                <Link to='/login'>
                <a><img src={Logo}></img></a>

                </Link>
                <Link to='/login'>
                <a>Control_Games</a>

                </Link>
            </section>

            <section id="voltar_login">
                <nav>
                    <Link to='/login'>
                        <a>Login</a>
                    </Link>
                </nav>
            </section>

        </div>
    );
}

