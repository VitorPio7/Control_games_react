import './stilos/formaddcategoria.css'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { LocalServerUrl } from '../configuracao/LocalServer';

const Form_add_categoria = () => {

    const [nomeCategoria, setNomeCategoria] = useState(''); //adicionar categoria

    const [categorias, setCategorias] = useState([]);
    const [categoria, setCategoria] = useState('');
    const usuarioLogado = localStorage.getItem('usuarioLogado')

    const navigate = useNavigate()
    const handleCriarCategoria = async () => {
        try {

            if (nomeCategoria === '') {
                alert('Todos os campos são obrigatórios');
                return;
            }
            await axios.post(`http://${LocalServerUrl}/categorias`, { nomeCategoria });
            alert(`Categoria cadastrada com sucesso`);

            setNomeCategoria('');
            navigate('/cadastrojogo')


        } catch (error) {
            alert(`Erro ao criar Categoria, Categoria já existe`);
            setNomeCategoria('');
        }
    };

    useEffect(() => {
        axios.get(`http://${LocalServerUrl}/categorias`)
            .then(response => {
                setCategorias(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar Categoria:', error);
            });
    }, [categorias]);


    const handleExcluirCategoria = async () => {
        try {

            if (usuarioLogado != 'admin') {
                throw new Error('Apenas usuário admin pode excluir categoria');
                console.log('Apenas usuário admin pode excluir categoria')
            }

            if (!categoria) {
                throw new Error('Por favor, escolha uma categoria.');
            }

            

            var resultado = window.confirm("Deseja realmente excluir a categoria? Jogos com essa plataforma associada deverão ser atualizados!");

            if (resultado) {
                console.log("Usuário clicou em OK");

                console.log('Categoria selecionada para exclusão:', categoria);
                // Fazer a requisição DELETE para o backend
                await axios.delete(`http://${LocalServerUrl}/categorias/${categoria}/${usuarioLogado}`);

                alert('Categoria excluída com sucesso!');
                setCategoria('')

            } else {
                console.log("Usuário clicou em Cancelar");
                setCategoria('')
                throw new Error('Operação aborrtada pelo usuário');
            }

        } catch (error) {
            // Lidar com erros durante a exclusão
            alert(`Erro ao excluir categoria: ${error.message}`);
        }
    };

    return (
        <div id='container_categoria'>

            <div className="divisao_categoria">
                <p>Adicionar Categoria</p>
                <div className="linha_categoria"></div>
            </div>

            <article className="form_categoria">

                <div id="box_nome_categoria">
                    <p>Nome da Categoria</p>
                    <input type="text" id="nomeplataforma" value={nomeCategoria} onChange={(e) => setNomeCategoria(e.target.value)} />
                </div>

                <section id='box_add_categoria'>
                    <button type="submit" onClick={handleCriarCategoria} id='botao_add_plataforma' >Adicionar Categoria</button>
                </section>

                <section id='box_remover_categoria'>
                    <select id="categoria_input" name="categorias" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                        <option value=''>Selecione uma Categoria</option>
                        {categorias.map((categoria) => (
                            <option key={categoria.nomeCategoria} value={categoria.nomeCategoria}>
                                {categoria.nomeCategoria}
                            </option>
                        ))}
                    </select>

                    <section id='box_button_remover_categoria'>
                        <button type="submit" id='botao_remove_plataforma' onClick={handleExcluirCategoria} >Remover Categoria</button>
                    </section>

                </section>

            </article>

        </div>
    );
}

export default Form_add_categoria