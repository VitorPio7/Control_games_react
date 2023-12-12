import './stilos/formcadastrojogo.css'
import { Botao_adicionar_jogo, Botao_editar_jogo } from './Botao';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LocalServerUrl } from '../configuracao/LocalServer';
import { Link } from 'react-router-dom';


function Form_cadastrojogo() {

    const [jogos, setJogos] = useState([]);
    const [nomeJogo, setNomeJogo] = useState('');
    const [urlCapaJogo, setUrlCapaJogo] = useState('');
    const [plataformas, setPlataformas] = useState([]);
    const [plataforma, setPlataforma] = useState('');
    const [status, setStatus] = useState('');
    const [categorias, setCategorias] = useState([]);
    const [categoria, setCategoria] = useState('');
    const [progresso, setProgresso] = useState('');
    const [recomendo, setRecomendo] = useState('');
    const [ano, setAno] = useState('');
    const [descricao, setDescricao] = useState('');
    const usuario = localStorage.getItem('usuarioLogado')

    const carregarPlataformas = async () => {
        try {
            const response = await axios.get(`http://${LocalServerUrl}/plataformas`);
            setPlataformas(response.data);
        } catch (error) {
            console.error('Erro ao carregar Plataformas:', error);
        }
    };

    const carregarCategorias = async () => {
        try {
            const response = await axios.get(`http://${LocalServerUrl}/categorias`);
            setCategorias(response.data);
        } catch (error) {
            console.error('Erro ao carregar Categorias:', error);
        }
    };

    useEffect(() => {
        carregarPlataformas();
        carregarCategorias();
    }, []);

    const CriarJogo = async () => {
        try {
            await axios.post(`http://${LocalServerUrl}/jogos`, { nomeJogo, urlCapaJogo, plataforma, status, categoria, progresso, recomendo, ano, descricao, usuario });
            alert(`Jogo  ${nomeJogo} cadastrado com sucesso`);
            setNomeJogo('');
            setUrlCapaJogo('');
            setPlataforma('');
            setStatus('');
            setCategoria('');
            setProgresso('');
            setRecomendo('');
            setAno('');
            setDescricao('');
            window.location.href = '/biblioteca'



        } catch (error) {
            console.error('Erro ao criar Jogo:');
            alert(`Erro ao criar Jogo, verifique se existe algum informação faltante ou Jogo já existe`);

        }
    };

    return (
        <div id='containercadastrarjogo'>

            <div class="divisaocadastrarjogo">
                <p>Cadastrar Jogo</p>
                <div class="linhacadastrarjogo"></div>
            </div>

            <div id='FormGamecadastrarjogo'>

                <div id="box_nomecadastrarjogo">
                    <p>Nome do Jogo</p>
                    <input type="text" id="nome_inputcadastrarjogo" value={nomeJogo} onChange={(e) => setNomeJogo(e.target.value)} />
                </div>

                <div id="box_nomecadastrarjogo">
                    <p>URL da capa do Jogo</p>
                    <input type="text" id="capa_input" value={urlCapaJogo} onChange={(e) => setUrlCapaJogo(e.target.value)} />
                </div>

                <div id="box_plataformacadastrarjogo">
                    <p>Plataforma</p>
                    <select id='plataformas_inputcadastrarjogo' name='plataformas' value={plataforma} onChange={(e) => setPlataforma(e.target.value)}>
                        <option value=''>Selecione uma plataforma</option>
                        {plataformas.map((plataforma) => (
                            <option key={plataforma.nomePlataforma} value={plataforma.nomePlataforma}>
                                {plataforma.nomePlataforma}
                            </option>
                        ))}
                    </select>
                </div>

                <div id="box_statuscadastrarjogo">
                    <p>Status</p>
                    <select id="status_inputcadastrarjogo" name="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value=''>Selecione uma Status</option>
                        <option value="Jogando">Jogando</option>
                        <option value="Jogado">Zerado</option>
                        <option value="Zerado">Nunca jogado</option>
                    </select>
                </div>

                {/* <div id="box_categoriacadastrarjogo">
                    <p>Categoria do jogo</p>
                    <select id="categoria_inputcadastrarjogo" name="categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                        <option value=''>Selecione uma Categoria</option>
                        <option value="rpg">RPG</option>
                        <option value="acao">Ação</option>
                        <option value="simulador">Simulador</option>
                        <option value="fps">FPS</option>
                        <option value="terror">Terror</option>
                        <option value="estratégia">Estratégia</option>
                        <option value="cooperativo">Cooperativo</option>
                        <option value="casual">Casual</option>
                        <option value="mundo aberto">Mundo Aberto</option>
                        <option value="esportes">Esportes</option>
                        <option value="aventura">Aventura</option>
                        <option value="quebra-cabeca">Quebra-Cabeça</option>
                        <option value="corrida">Corrida</option>
                        <option value="luta">Luta</option>
                        <option value="educativo">Educativo</option>
                        <option value="musical">Musical</option>
                        <option value="estrategia_em_tempo_real">Estratégia em Tempo Real</option>
                        <option value="construcao">Construção</option>
                        <option value="construcao">Outros</option>

                    </select>
                </div> */}

                <div id="box_categoriacadastrarjogo">
                    <p>Categoria do Jogo</p>
                    <select id="categoria_inputcadastrarjogo" name="categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                        <option value=''>Selecione uma Categoria</option>
                        {categorias.map((categoria) => (
                            <option key={categoria.nomeCategoria} value={categoria.nomeCategoria}>
                                {categoria.nomeCategoria}
                            </option>
                        ))}
                    </select>
                </div>


                <div id="box_progressocadastrarjogo">
                    <p>Progresso do jogo</p>
                    <input type="text" id="progresso_inputcadastrarjogo" value={progresso} onChange={(e) => setProgresso(e.target.value)} />
                </div>

                <div id="box_recomendocadastrarjogo">
                    <p>Recomendo o Jogo</p>
                    <select id="recomendo_inputcadastrarjogo" name="recomendacao" value={recomendo} onChange={(e) => setRecomendo(e.target.value)} >
                        <option value=''>Selecione uma recomendação</option>
                        <option value="sim">Sim</option>
                        <option value="nao">Não</option>
                        <option value="em avaliacao">Em avaliação</option>
                    </select>
                </div>

                <div id="box_ano_lancamentocadastrarjogo">
                    <p>Ano de Lançamento</p>
                    <input type="date" id="ano_inputcadastrarjogo" value={ano} onChange={(e) => setAno(e.target.value)} />
                </div>

                <div id="box_descricaocadastrarjogo">
                    <p>Descrição do Jogo</p>
                    <textarea name="descricao" id="descricao_inputcadastrarjogo" cols="55" rows="13" value={descricao} onChange={(e) => setDescricao(e.target.value)} ></textarea>
                </div>

                <div id='botao_adicionar_jogo'>
                    <button id="botao-cadastrar-jogo" onClick={CriarJogo}>Adicionar na Biblioteca</button>
                </div>

                <div id='botao_adicionar_categoria'>
                    <Link to='/cadastrocategoria'>
                        <button id="botao-adicionar-categoria">Adicionar/Remover Categoria</button>
                    </Link>
                </div>
            </div>


        </div>

    );
}

export default Form_cadastrojogo