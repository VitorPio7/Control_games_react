import './stilos/formstyle.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LocalServerUrl } from '../configuracao/LocalServer';
import { Link, useNavigate } from 'react-router-dom'

export function Form_login() {
    const [nickname, setNickname] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate()

    const handleFazerLogin = async () => {
        try {
            const response = await axios.post(`http://${LocalServerUrl}/usuarios/login`, { nickname, senha });
            alert(`Login bem-sucedido! Bem vindo: ${response.data.nickname}, você será redirecionado para o Control Games`);
            localStorage.setItem('usuarioLogado', response.data.nickname)
            console.log('Usuario Logado:', localStorage.getItem('usuarioLogado'))

            window.location.href = "/home";
            setNickname('');
            setSenha('');

        } catch (error) {
            alert(`Erro ao fazer login: Usuario ou Senha incorretos`);
            setSenha('');
        }
    };


    return (
        <>
            <div id='container_login'>

                <div className="divisaologin">
                    <p>Login</p>
                    <div className="linhalogin"></div>
                </div>

                <article className="formlogin">
                    <div id="box_email_login">
                        <p>Nickname</p>
                        <input type="text" id="email_input" value={nickname} onChange={(e) => setNickname(e.target.value)} />
                    </div>

                    <div id="box_senha_login">
                        <p>Senha</p>
                        <input type="password" id="senha_input" value={senha} onChange={(e) => setSenha(e.target.value)} />
                    </div>

                    <div id="box_login_form">
                        <button id="botao_logar" type="submit" onClick={handleFazerLogin}>Login</button>
                        <Link>
                            <a>Esqueceu a senha ?</a>
                        </Link>
                        <Link to='/cadastro'>
                            <a href="#">Ainda Não tem cadastro , Clique aqui !</a>
                        </Link>
                    </div>

                </article>

            </div>
        </>
    );
}

export function Form_cadastro() {

    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmSenha, setConfirmSenha] = useState('');
    const [avatar, setAvatar] = useState('');

    const navigate = useNavigate();

    const handleCriarUsuario = async () => {
        try {

            if (nickname === '' || email === '' || senha === '' || confirmSenha === '' || avatar === '') {
                alert('Todos os campos são obrigatórios');
                return;
            } else if (senha !== confirmSenha) {
                alert('As senhas não coincidem. Por favor, digite novamente.');
                return;
            }

            await axios.post(`http://${LocalServerUrl}/usuarios`, { nickname, email, senha, avatar });
            alert(`Usuario cadastrado com sucesso você será redirecionado para a tela de login`);

            setNickname('');
            setEmail('');
            setSenha('');
            setAvatar('');
            setConfirmSenha('');
            navigate('/login')

        } catch (error) {
            alert(`Erro ao criar Usuario, Usuario já existe`);
            setSenha('');
            setConfirmSenha('')
        }
    };

    return (
        <div id='container_cadastrouser'>

            <div className="divisao_cadastrouser">
                <p>Cadastro</p>
                <div className="linha_cadastrouser"></div>
            </div>

            <article className="form_cadastro">

                <div id="box_nicknameuser">
                <div id='box_img_avatar'>
                    <img id='imgavatar' src={avatar}></img>
                </div>

                    <p>Avatar</p>

                    <select id='select_avatar' value={avatar} onChange={(e) => setAvatar(e.target.value)}>
                        <option value=''>Selecione seu Avatar</option>
                        <option value='https://thumbs.dreamstime.com/b/perfil-de-usu%C3%A1rio-do-vetor-avatar-padr%C3%A3o-179376714.jpg'>Padrão
                        </option>
                        <option value='https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg?t=1695140956'>RDR23
                        </option>

                    </select>
                    
                </div>

                

                <div id="box_nicknameuser">
                    <p>Nickname</p>
                    <input type="text" id="email" value={nickname} onChange={(e) => setNickname(e.target.value)} />
                </div>

                <div id="box_emailuser">
                    <p>Email</p>
                    <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div id="box_senhauser">
                    <p>Senha</p>
                    <input type="password" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
                </div>

                <div id="box_repetir_senhauser">
                    <p>Repetir Senha</p>
                    <input type="password" id="confirmSenha" value={confirmSenha} onChange={(e) => setConfirmSenha(e.target.value)} />                </div>

                <div id="box_cadastrouser">
                    <button type="submit" onClick={handleCriarUsuario}>Cadastro</button>
                </div>

                <div id="box_voltar_loginuser">
                    <Link to='/login'>
                        <a>Fazer Login</a>
                    </Link>
                </div>

            </article>

        </div>
    );
}


export function Form_configuracao() {

    const [usuarios, setUsuarios] = useState([]);

    const [emailPadrao, setEmailPadrao] = useState([]);
    const [senhaPadrao, setSenhaPadrao] = useState([]);
    const [avatarPadrao, setAvatarPadrao] = useState([]);

    const [novoEmail, setNovoEmail] = useState('');
    const [novaSenha, setNovaSenha] = useState('');
    const [novoAvatar, setNovoAvatar] = useState('');

    const usuarioLogado = localStorage.getItem('usuarioLogado')
    const navigate = useNavigate()



    const handleDeslogar = () => {
        localStorage.setItem('usuarioLogado', '')
        window.location.href = "/login";

    }

    const handleAtualizarDados = async () => {
        try {
            const dadosAtualizados = {};

            if (novoEmail !== '') dadosAtualizados.email = novoEmail;
            else dadosAtualizados.email = emailPadrao;

            if (novaSenha !== '') dadosAtualizados.senha = novaSenha;
            else dadosAtualizados.senha = senhaPadrao;

            if (novoAvatar !== '') dadosAtualizados.avatar = novoAvatar;
            else dadosAtualizados.avatar = avatarPadrao;

            if (novoEmail === '' && novaSenha === '' && novoAvatar === '') {
                alert('Campos em Branco')
                return;
            }

            // Verificar se há algo para atualizar
            if (Object.keys(dadosAtualizados).length === 0) {
                console.log('Nenhum dado para atualizar.');
                return;
            }

            // Fazer a requisição para atualizar os dados no backend
            const response = await axios.put(
                `http://${LocalServerUrl}/usuarios/${usuarioLogado}`,
                {
                    nickname: usuarioLogado,
                    ...dadosAtualizados,
                }
            );

            // Verificar se a atualização foi bem-sucedida
            if (response.status === 200) {
                console.log('Dados atualizados com sucesso!');
                alert('Dados atualizados com sucesso!')
                setNovoEmail('')
                setNovaSenha('')
                setNovoAvatar('');
                window.location.href = "/configuracao";

            } else {
                console.log('Erro ao atualizar dados.');
                alert('erro ao atualizar dados')

            }
        } catch (error) {
            console.error('Erro ao processar a requisição:', error);
        }
    };

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
        const usuarioEncontrado = usuarios.find((usuario) => usuario.nickname === usuarioLogado)

        if (usuarioEncontrado) {
            setEmailPadrao(usuarioEncontrado.email)
            setSenhaPadrao(usuarioEncontrado.senha)
            setAvatarPadrao(usuarioEncontrado.avatar)
        }

    }, [usuarios, usuarioLogado]);

    const handleExcluirUsuario = async () => {
        try {

            if (usuarioLogado === 'admin'){
                throw new Error('Não é possível excluir a conta de Administrador');
            }

            if (!usuarioLogado) {
                throw new Error('Por favor, Faça login');
            }

            var resultado = window.confirm("Deseja realmente excluir sua conta? Todos os seus jogos serão excluídos!");

            if (resultado) {
                console.log("Usuário clicou em OK");

                console.log('Usuário selecionado para exclusão:', usuarioLogado);
                // Fazer a requisição DELETE para o backend
                await axios.delete(`http://${LocalServerUrl}/usuarios/${usuarioLogado}`);
                alert('Usuário excluído com sucesso!');
                window.location.href = ('/login')

            } else {
                console.log("Usuário clicou em Cancelar");
                throw new Error('Operação abortada pelo usuário');
            }

        } catch (error) {
            // Lidar com erros durante a exclusão
            alert(`Erro ao excluir usuário: ${error.message}`);
        }
    };

    return (
        <div id='container_configuracao'>

            <div className="divisao_configuracao">
                <p>Configuração da conta</p>
                <div className="linha_configuracao"></div>
            </div>

            <article className="form_configuracao">

                <div id="box_nickname_config">
                    <p>Nickname</p>
                    <input type="text" id="email" value={usuarioLogado} placeholder={usuarioLogado} />
                </div>

                <div id="box_email_config">
                    <p>Email</p>
                    <input type="text" id="email" value={novoEmail} placeholder={`Clique para alterar o email atual: ${emailPadrao}`} onChange={(e) => setNovoEmail(e.target.value)} />
                </div>

                <div id="box_senha_config">
                    <p>Senha</p>
                    <input type="password" id="senha" value={novaSenha} placeholder={`Clique para alterar a senha atual: ${senhaPadrao}`} onChange={(e) => setNovaSenha(e.target.value)} />
                </div>

                <div id="box_email_config">
                    <p>Url do Avatar</p>
                    <input type="text" id="email" value={novoAvatar} placeholder={`Clique para alterar o Avatar atual:`} onChange={(e) => setNovoAvatar(e.target.value)} />
                </div>

                <section id='botoes_config'>
                    <button type="submit" id='botao_exluir_conta' onClick={handleExcluirUsuario}>Excluir conta</button>
                    <button type="submit" id='botao_alterar_conta' onClick={handleAtualizarDados}>Alterar dados da conta</button>
                </section>

                <div id='box_botao_sair'>
                    <button type="submit" id='botao_sair_conta' onClick={handleDeslogar}>Fazer Logout</button>
                </div>
            </article>

        </div>
    );
}

export function Form_add_plataforma() {

    const [nomePlataforma, setNomePlataforma] = useState('');
    const [urlCapaPlataforma, setUrlCapaPlataforma] = useState('');
    const navigate = useNavigate()


    const handleCriarPlataforma = async () => {
        try {

            if (nomePlataforma === '' || urlCapaPlataforma === '') {
                alert('Todos os campos são obrigatórios');
                return;
            }
            await axios.post(`http://${LocalServerUrl}/plataformas`, { nomePlataforma, urlCapaPlataforma });
            alert(`Plataforma cadastrada com sucesso`);

            setNomePlataforma('');
            setUrlCapaPlataforma('');
            navigate('/plataformas')



        } catch (error) {
            alert(`Erro ao criar Plataforma, Plataforma já existe`);
            setNomePlataforma('');
            setUrlCapaPlataforma('')
        }
    };

    return (
        <div id='container_plataforma'>

            <div className="divisao_plataforma">
                <p>Adicionar Plataforma</p>
                <div className="linha_plataforma"></div>
            </div>

            <article className="form_plataforma">

                <div id="box_nome">
                    <p>Nome da Plataforma</p>
                    <input type="text" id="nomeplataforma" value={nomePlataforma} onChange={(e) => setNomePlataforma(e.target.value)} />
                </div>

                <div id="box_url">
                    <p>URL imagem</p>
                    <input type="text" id="urlimg" value={urlCapaPlataforma} onChange={(e) => setUrlCapaPlataforma(e.target.value)} />
                </div>

                <section id='box_add_plataforma'>
                    <button type="submit" id='botao_add_plataforma' onClick={handleCriarPlataforma}>Adicionar Plataforma</button>
                </section>

            </article>

        </div>
    );
}

