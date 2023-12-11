import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react";
import { LocalServerUrl } from "../configuracao/LocalServer";
import axios from "axios";

import Paginahome from "./paginahome"
import Paginabiblioteca from "./paginabiblioteca";
import Paginaplataformas from "./paginaplataformas";
import Paginasuporte from './paginasuporte'
import Paginaconfiguracao from './paginaconfiguracao'
import Paginalogin from './paginalogin'
import Paginacadastro from './paginacadastro'
import Paginacadastrojogo from './paginacasdastrojogo'
import Paginagame from './paginagame'
import Paginacadastroplataforma from './paginacadastroplataformas'
import Paginasuporteexterno from "./paginasuporteexterno";
import Paginaatualizajogo from './paginaatualizajogo'
import Paginacadastrarcategoria from "./paginacadastrarcategoria";





const Rotas = () => {
    const usuarioLogado = localStorage.getItem('usuarioLogado')

    const [jogos, setJogos] = useState([]);
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
        <Router>
            <Routes>
                <Route exact path={"/home"} element={<Paginahome />} />
                <Route exact path={"/biblioteca"} element={<Paginabiblioteca />} />
                <Route exact path={"/plataformas"} element={<Paginaplataformas />} />
                <Route exact path={"/suporte"} element={<Paginasuporte />} />
                <Route exact path={"/suporteexterno"} element={<Paginasuporteexterno />} />
                <Route exact path={"/configuracao"} element={<Paginaconfiguracao />} />
                <Route exact path={"/login"} element={<Paginalogin />} />
                <Route exact path={"/"} element={<Paginalogin />} />
                <Route exact path={"/cadastro"} element={<Paginacadastro />} />
                <Route exact path={"/cadastrojogo"} element={<Paginacadastrojogo />} />
                {/* <Route exact path={"/game"} element={<Paginagame />} /> */}
                <Route exact path={"/plataformascadastro"} element={<Paginacadastroplataforma />} />
                <Route exact path={"/paginaatualizajogo"} element={<Paginaatualizajogo />} />
                <Route exact path={"/cadastrocategoria"} element={<Paginacadastrarcategoria/>} />
            </Routes>
            {
                jogos
                .filter((jogo) => jogo.usuario === usuarioLogado)
                .map(jogo => (
                        <Routes>
                            <Route exact path={`/game/${jogo.nomeJogo}`} element={<Paginagame/>}>
                            </Route>
                        </Routes>
                    ))
            }
            {
                jogos
                    .map(jogo => (
                        <Routes>
                            <Route exact path={`/paginaatualizajogo/${jogo.nomeJogo}`} element={<Paginaatualizajogo/>}>
                            </Route>
                        </Routes>
                    ))
            }

        </Router>
    )
}

export default Rotas;