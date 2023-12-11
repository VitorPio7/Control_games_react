import { Headerusuario } from '../componentes/Header'
import { Footer_interno } from '../componentes/Footer'
import { Botao_adicionar_plataforma, Botao_remover_plataforma } from '../componentes/Botao'
import './stilos/Paginaplataforma.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LocalServerUrl } from '../configuracao/LocalServer';
import { Link } from 'react-router-dom';

const Paginaplataformas = () => {
    const [plataformas, setPlataformas] = useState([]);
    const [plataforma, setPlataforma] = useState('');

    const usuarioLogado = localStorage.getItem('usuarioLogado')


    useEffect(() => {
        axios.get(`http://${LocalServerUrl}/plataformas`)
            .then(response => {
                setPlataformas(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar Plataformas:', error);
            });
    }, [plataformas]);


    const handleExcluirPlataforma = async () => {
        try {

            if (usuarioLogado != 'admin') {
                throw new Error('Apenas usuário admin pode excluir plataforma');
                console.log('Apenas usuário admin pode excluir plataforma')
            }

            if (!plataforma) {
                throw new Error('Por favor, escolha uma plataforma.');
            }

            

            var resultado = window.confirm("Deseja realmente excluir a plataforma? Jogos com essa plataforma associada deverão ser atualizados!");

            if (resultado) {
                console.log("Usuário clicou em OK");

                console.log('Plataforma selecionada para exclusão:', plataforma);
                // Fazer a requisição DELETE para o backend
                await axios.delete(`http://${LocalServerUrl}/plataformas/${plataforma}/${usuarioLogado}`);

                alert('Plataforma excluída com sucesso!');
                setPlataforma('')

            } else {
                console.log("Usuário clicou em Cancelar");
                setPlataforma('')
                throw new Error('Operação aborrtada pelo usuário');
            }

        } catch (error) {
            // Lidar com erros durante a exclusão
            alert(`Erro ao excluir plataforma: ${error.message}`);
        }
    };

    



    return (
        <>
            <div id='bodyplataformas'>
                <div>
                    <Headerusuario />
                </div>

                <div id='mainplataformas'>
                    <section id="biblioteca">
                        <div className="divisaoplataformas">
                            <div className="linhaplataformas"></div>
                            <p>Plataformas</p>
                            <div className="linhaplataformas"></div>
                        </div>
                        <div class="Jogos" id="games"></div>
                    </section>

                    <section id="Plataformas">

                        <div className='Mostrar_plataformas'>
                            {plataformas.map(plataforma => (
                                <>
                                    <div className='box_img_plataforma'>
                                        <img className='link_img_plataforma' src={plataforma.urlCapaPlataforma} alt={plataforma.nomePlataforma} ></img>
                                        <p class="link_plataforma">{plataforma.nomePlataforma}</p>
                                    </div>

                                </>
                            ))
                            }
                            {plataformas.length === 0 && (
                                <p className='retorno0'>Nenhuma plataforma encontrada.</p>
                            )}
                        </div>

                    </section>

                    <div id='botoesplatafromas'>
                        <div id='botaoadd'>
                            <Link to='/plataformascadastro'>
                                <button id="botao_adicionar_plataforma">Adiconar plataforma</button>
                            </Link>
                        </div>
                    </div>

                    <div id="box_plataforma">
                        <p>Plataforma</p>
                        <select id='plataformas_input' name='plataformas' value={plataforma} onChange={(e) => setPlataforma(e.target.value)}>
                            <option value=''>Selecione uma plataforma</option>
                            {plataformas.map((plataforma) => (
                                <option key={plataforma.nomePlataforma} value={plataforma.nomePlataforma}>
                                    {plataforma.nomePlataforma}
                                </option>
                            ))}
                        </select>
                        <div id='box_botao_remover_plataforma'>
                            <button id="botao_remover_plataforma" onClick={handleExcluirPlataforma}>Remover Plataforma</button>
                        </div>

                    </div>


                </div>


                <div id='footer01plataformas'>
                    <Footer_interno />
                </div>
            </div>
        </>

    )
}

export default Paginaplataformas