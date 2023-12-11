import './stilos/formcadastrojogo.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LocalServerUrl } from '../configuracao/LocalServer';
import { Link, useNavigate } from 'react-router-dom';
import imagem from '../imagens/Jogos img menor/diablo 4.jpg'


export function Form_atualizajogo() {

    const [jogos, setJogos] = useState([]);
    const [usuarios, setUsuarios] = useState([]);
    const [jogoAchado, setJogoAchado] = useState('');



    const [nomeJogo, setNomeJogo] = useState('');

    const [urlCapaJogo, setUrlCapaJogo] = useState('');
    const [plataformas, setPlataformas] = useState([]);
    const [plataforma, setPlataforma] = useState('');
    const [status, setStatus] = useState('');
    const [categoria, setCategoria] = useState('');
    const [categorias, setCategorias] = useState([]);
    const [progresso, setProgresso] = useState('');
    const [recomendo, setRecomendo] = useState('');
    const [ano, setAno] = useState('');
    const [descricao, setDescricao] = useState('');
    const [jogoAberto, setJogoAberto] = useState('');

    const [nomeJogoPadrao, setNomeJogoPadrao] = useState('');

    const [urlCapaJogoPadrao, setUrlCapaJogoPadrao] = useState('');
    const [plataformaPadrao, setPlataformaPadrao] = useState('');
    const [statusPadrao, setStatusPadrao] = useState('');
    const [categoriaPadrao, setCategoriaPadrao] = useState('');
    const [progressoPadrao, setProgressoPadrao] = useState('');
    const [recomendoPadrao, setRecomendoPadrao] = useState('');
    const [anoPadrao, setAnoPadrao] = useState('');
    const [descricaoPadrao, setDescricaoPadrao] = useState('');

    const [novaUrlCapaJogo, setNovaUrlCapaJogo] = useState('');
    const [novaPlataforma, setNovaPlataforma] = useState('');
    const [novoStatus, setNovoStatus] = useState('');
    const [novaCategoria, setNovaCategoria] = useState('');
    const [novoProgresso, setNovoProgresso] = useState('');
    const [novoRecomendo, setNovoRecomendo] = useState('');
    const [novoAno, setNovoAno] = useState('');
    const [novaDescricao, setNovaDescricao] = useState('');

    const usuarioLogado = localStorage.getItem('usuarioLogado')
    const usuario = localStorage.getItem('usuarioLogado')

    const navigate = useNavigate()

    const carregarPlataformas = async () => {
        try {
            const response = await axios.get(`http://${LocalServerUrl}/plataformas`);
            setPlataformas(response.data);
        } catch (error) {
            console.error('Erro ao carregar Plataformas:', error);
        }
    };


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
        axios.get(`http://${LocalServerUrl}/categorias`)
            .then(response => {
                setCategorias(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.error('Erro ao buscar Jogos:', error);
            });
    }, []);


    useEffect(() => {
        carregarPlataformas();
    }, []);

    useEffect(() => {
        axios.get(`http://${LocalServerUrl}/usuarios`)
            .then(response => {
                setUsuarios(response.data);
                console.log(response.data)

            })
            .catch(error => {
                console.error('Erro ao buscar Usuarios:', error);
            });
    }, []);


    useEffect(() => {
        const jogoAberto = decodeURIComponent(window.location.pathname.split('/paginaatualizajogo/').pop());
        setJogoAchado(jogoAberto);
        console.log('jogo aberto', jogoAberto)

    }, []);


    const handleAtualizarDados = async () => {
        try {
            const dadosAtualizados = {};

            if (novaUrlCapaJogo === '' && novaPlataforma === '' && novoStatus === '' && novaCategoria === '' && novoProgresso === '' && novoRecomendo === '' && novoAno === '' && novaDescricao === '') {
                alert('Nenhum valor novo foi fornecido.');
                return;
            }

            if (novaUrlCapaJogo !== '') dadosAtualizados.urlCapaJogo = novaUrlCapaJogo;
            else dadosAtualizados.urlCapaJogo = urlCapaJogoPadrao;

            if (novaPlataforma !== '') dadosAtualizados.plataforma = novaPlataforma;
            else dadosAtualizados.plataforma = plataformaPadrao;

            if (novoStatus !== '') dadosAtualizados.status = novoStatus;
            else dadosAtualizados.status = statusPadrao;

            if (novaCategoria !== '') dadosAtualizados.categoria = novaCategoria;
            else dadosAtualizados.categoria = categoriaPadrao;

            if (novoProgresso !== '') dadosAtualizados.progresso = novoProgresso;
            else dadosAtualizados.progresso = progressoPadrao;

            if (novoRecomendo !== '') dadosAtualizados.recomendo = novoRecomendo;
            else dadosAtualizados.recomendo = recomendoPadrao;

            if (novoAno !== '') dadosAtualizados.ano = novoAno;
            else dadosAtualizados.ano = anoPadrao;

            if (novaDescricao !== '') dadosAtualizados.descricao = novaDescricao;
            else dadosAtualizados.descricao = descricaoPadrao;




            // Verificar se há algo para atualizar
            if (Object.keys(dadosAtualizados).length === 0) {
                console.log('Nenhum dado para atualizar.');
                return;
            }

            // Fazer a requisição para atualizar os dados no backend
            const response = await axios.put(
                `http://${LocalServerUrl}/jogos/${jogoAberto}/${usuarioLogado}`,
                {
                    usuario: usuarioLogado,
                    nomeJogo: jogoAberto,

                    ...dadosAtualizados,
                }
            );

            // Verificar se a atualização foi bem-sucedida
            if (response.status === 200) {
                console.log('Dados atualizados com sucesso!');
                alert('Dados atualizados com sucesso!')
                setNovaUrlCapaJogo('');
                setNovaPlataforma('');
                setNovoStatus('');
                setNovaCategoria('');
                setNovoProgresso('');
                setNovoRecomendo('');
                setNovoAno('');
                setNovaDescricao('');

                window.location.href = "/biblioteca";

            } else {
                console.log('Erro ao atualizar dados.');
                alert('erro ao atualizar dados')

            }
        } catch (error) {
            // Lidar com erros durante a exclusão
            alert(`Erro ao excluir usuário: ${error.message}`);
        }
    };

    useEffect(() => {
        const jogoEncontrado = jogos.find((jogo) => jogo.usuario === usuarioLogado && jogo.nomeJogo === jogoAchado);

        if (jogoEncontrado) {
            setNomeJogoPadrao(jogoEncontrado.nomeJogo)
            setUrlCapaJogoPadrao(jogoEncontrado.urlCapaJogo);
            setPlataformaPadrao(jogoEncontrado.plataforma);
            setStatusPadrao(jogoEncontrado.status);
            setCategoriaPadrao(jogoEncontrado.categoria);
            setProgressoPadrao(jogoEncontrado.progresso);
            setRecomendoPadrao(jogoEncontrado.recomendo);
            setAnoPadrao(jogoEncontrado.ano);
            setDescricaoPadrao(jogoEncontrado.descricao);

            setJogoAberto(jogoEncontrado.nomeJogo);
            console.log(jogoEncontrado.nomeJogo);
        }
    }, [jogos, usuarioLogado]);


    return (
        <div id='containeratualizajogo'>

            <div class="divisaocadastrarjogo">
                <p>Atualizar Jogo</p>
                <div class="linhacadastrarjogo"></div>
            </div>

            <div id='FormGamecadastrarjogo'>

                {
                    jogos
                        .filter((jogo) => jogo.usuario === usuarioLogado && jogo.nomeJogo === jogoAberto)
                        .map(jogo => (
                            (
                                <div id='box_img_atualizajogo'>

                                    <img src={jogo.urlCapaJogo}></img>
                                </div>
                            )
                        ))
                }

                <div id="box_nomecadastrarjogo">
                    <p>Nome do Jogo</p>
                    <input type="text" id="nome_inputcadastrarjogo" value={nomeJogoPadrao} placeholder={nomeJogoPadrao} />
                </div>

                <div id="box_nomecadastrarjogo">
                    <p>URL da capa do Jogo</p>
                    <input type="text" id="capa_input" value={novaUrlCapaJogo} onChange={(e) => setNovaUrlCapaJogo(e.target.value)} />
                </div>

                <div id="box_plataformacadastrarjogo">
                    <p>Plataforma</p>
                    <select id='plataformas_inputcadastrarjogo' name='plataformas' value={novaPlataforma} onChange={(e) => setPlataforma(e.target.value)}>
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
                    <select id="status_inputcadastrarjogo" name="status" value={novoStatus} onChange={(e) => setNovoStatus(e.target.value)}>
                        <option value=''>Selecione uma Status</option>
                        <option value="Jogando">Jogando</option>
                        <option value="Jogado">Zerado</option>
                        <option value="Zerado">Nunca jogado</option>
                    </select>
                </div>

                <div id="box_categoriacadastrarjogo">
                    <p>Categoria do jogo</p>
                    <select id="categoria_inputcadastrarjogo" name="categoria" value={novaCategoria} onChange={(e) => setNovaCategoria(e.target.value)}>
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
                    <input type="text" id="progresso_inputcadastrarjogo" value={novoProgresso} onChange={(e) => setNovoProgresso(e.target.value)} />
                </div>

                <div id="box_recomendocadastrarjogo">
                    <p>Recomendo o Jogo</p>
                    <select id="recomendo_inputcadastrarjogo" name="recomendacao" value={novoRecomendo} onChange={(e) => setNovoRecomendo(e.target.value)}>
                    <option value=''>Selecione uma recomendação</option>
                        <option value="sim">Sim</option>
                        <option value="nao">Não</option>
                        <option value="em avaliacao">Em avaliação</option>                    </select>
                </div>

                <div id="box_ano_lancamentocadastrarjogo">
                    <p>Ano de Lançamento</p>
                    <input type="date" id="ano_inputcadastrarjogo" value={novoAno} onChange={(e) => setNovoAno(e.target.value)} />
                </div>

                <div id="box_descricaocadastrarjogo">
                    <p>Descrição do Jogo</p>
                    <textarea name="descricao" id="descricao_inputcadastrarjogo" cols="55" rows="13" value={novaDescricao} onChange={(e) => setNovaDescricao(e.target.value)} ></textarea>
                </div>




                <div id='botao_adicionar_jogo'>
                    <button id="botao-atualizar-jogo" onClick={handleAtualizarDados}>Atualizar na Biblioteca</button>
                </div>
            </div>


        </div>

    );
}

export default Form_atualizajogo