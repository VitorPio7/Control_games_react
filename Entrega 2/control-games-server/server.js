const express = require('express')
const cors = require('cors')
const sqlite3 = require('sqlite3').verbose()
const app = express()
const port = 3002;

app.use(cors())
app.use(express.json())

const db = new sqlite3.Database('controlGames.db')

//criando tabela games
db.run('CREATE TABLE IF NOT EXISTS jogos (id INTEGER PRIMARY KEY AUTOINCREMENT, nomeJogo TEXT NOT NULL, urlCapaJogo TEXT NOT NULL, plataforma TEXT NOT NULL, status TEXT NOT NULL, categoria TEXT NOT NULL, progresso TEXT NOT NULL, recomendo TEXT NOT NULL, ano TEXT NOT NULL, descricao TEXT NOT NULL, usuario INTEGER NOT NULL, UNIQUE(nomeJogo, usuario), FOREIGN KEY(plataforma) REFERENCES plataformas(nomePlataforma), FOREIGN KEY(categoria) REFERENCES categorias(nomeCategoria), FOREIGN KEY(usuario) REFERENCES usuarios(id))')

// criando tabela usuarios
db.run('CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY AUTOINCREMENT, nickname TEXT NOT NULL UNIQUE, email TEXT NOT NULL, senha TEXT NOT NULL, avatar TEXT NOT NULL)')

//criando tabela plataformas
db.run('CREATE TABLE IF NOT EXISTS plataformas (id INTEGER PRIMARY KEY AUTOINCREMENT, nomePlataforma TEXT NOT NULL UNIQUE, urlCapaPlataforma TEXT NOT NULL)')

//criando tabela categorias
db.run('CREATE TABLE IF NOT EXISTS categorias (id INTEGER PRIMARY KEY AUTOINCREMENT, nomeCategoria TEXT NOT NULL UNIQUE)')

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Puxando dados dos jogos
app.get('/jogos', (req, res) => {
    db.all('SELECT jogos.*, usuarios.nickname AS sala FROM jogos LEFT JOIN usuarios ON jogos.usuario = usuarios.id', (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

//Inserindo novos jogos
app.post('/jogos', (req, res) => {
    const { nomeJogo, urlCapaJogo, plataforma, status, categoria, progresso, recomendo, ano, descricao, usuario } = req.body;
    console.log('Nome do Jogo:', nomeJogo);
    console.log('Capa:', urlCapaJogo);
    console.log('Plataforma:', plataforma);
    console.log('Status:', status);
    console.log('Categoria:', categoria);
    console.log('Progresso:', progresso);
    console.log('Recomendo:', recomendo);
    console.log('Ano:', ano);
    console.log('Descrição:', descricao);
    console.log('Usuario:', usuario);

    if (!nomeJogo || !urlCapaJogo || !plataforma || !status || !categoria || !progresso || !recomendo || !ano || !descricao || !usuario) {
        return res.status(400).json({ error: 'Todas as informações são obrigatórias' });
    }

    db.run('INSERT INTO jogos (nomeJogo, urlCapaJogo, plataforma, status, categoria, progresso, recomendo, ano, descricao, usuario) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [nomeJogo, urlCapaJogo, plataforma, status, categoria, progresso, recomendo, ano, descricao, usuario], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        res.json({ id: this.lastID, nomeJogo });
    });

});

//deletando jogos de acordo com nickname
app.delete('/jogos/:nomeJogo/:usuario', (req, res) => {
    const nomeJogo = req.params.nomeJogo;
    const usuario = req.params.usuario;

    if (!nomeJogo) {
        return res.status(400).json({ error: 'seleção do jogo é obrigatória' });
    }

    db.run('DELETE FROM jogos WHERE nomeJogo = ? AND usuario = ?', [nomeJogo, usuario], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        if (this.changes === 0) {
            return res.status(404).json({ error: 'Jogo não encontrado' });
        }

        res.json({ message: 'Jogo excluído com sucesso' });
    });
});

//atualizando jogo de acordo com nickname e usuário
app.put('/jogos/:nomeJogo/:usuario', (req, res) => {
    const { nomeJogo, usuario } = req.params;
    const { urlCapaJogo, plataforma, status, categoria, progresso, recomendo, ano, descricao } = req.body;

    console.log('Dados recebidos no servidor:', { urlCapaJogo, plataforma, status, categoria, progresso, recomendo, ano, descricao });

    if (!urlCapaJogo || !plataforma || !status || !categoria || !progresso || !recomendo || !ano || !descricao) {
        return res.status(400).json({ error: 'Os campos são obrigatórios' });
    }

    db.run(
        'UPDATE jogos SET urlCapaJogo = ?, plataforma = ?, status = ?, categoria = ?, progresso = ?, recomendo = ?, ano = ?, descricao = ? WHERE nomeJogo = ? AND usuario = ?',
        [urlCapaJogo, plataforma, status, categoria, progresso, recomendo, ano, descricao, nomeJogo, usuario],
        function (err) {
            if (err) {
                console.error('Erro ao atualizar jogo:', err);
                return res.status(500).json({ error: err.message });
            }

            // Se chegamos aqui, a atualização foi bem-sucedida
            console.log('Jogo atualizado com sucesso.');
            res.status(200).json({ message: 'Jogo atualizado com sucesso' });
        }
    );
});


// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Puxando dados usuarios para mostrar
app.get('/usuarios', (req, res) => {
    db.all('SELECT id, nickname, email, senha, avatar FROM usuarios', (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

//inserindo novos usuarios
app.post('/usuarios', (req, res) => {
    const { nickname, email, senha, avatar } = req.body;

    if (!nickname || !email || !senha || !avatar) {
        return res.status(400).json({ error: 'Os campos são obrigatórios' });
    }

    db.run('INSERT INTO usuarios (nickname, email, senha, avatar) VALUES (?, ?, ?, ?)', [nickname, email, senha, avatar], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ id: this.lastID, nickname });
    });

});

//atualizando dados do usuario com base no nickname
app.put('/usuarios/:nickname', (req, res) => {
    const { nickname } = req.params;
    const { email, senha, avatar } = req.body;

    console.log('Dados recebidos no servidor:', { email, senha, avatar });

    if (!email || !senha || !avatar) {
        return res.status(400).json({ error: 'Os campos são obrigatórios' });
    }

    db.run(
        'UPDATE usuarios SET email = ?, senha = ?, avatar = ? WHERE nickname = ?',
        [email, senha, avatar, nickname],
        function (err) {
            if (err) {
                console.error('Erro ao atualizar usuário:', err);
                return res.status(500).json({ error: err.message });
            }

            // Se chegamos aqui, a atualização foi bem-sucedida
            console.log('Usuário atualizado com sucesso.');
            res.status(200).json({ message: 'Usuário atualizado com sucesso' });
        }
    );
});

//puxando dados do usuario para efetuar login
app.post('/usuarios/login', (req, res) => {
    const { nickname, senha } = req.body;

    if (!nickname || !senha) {
        return res.status(400).json({ error: 'Nome da sala e senha são obrigatórios.' });
    }

    db.get('SELECT * FROM usuarios WHERE nickname = ? AND senha = ?', [nickname, senha], (err, salaRow) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        if (!salaRow) {
            return res.status(401).json({ error: 'Usuiario não encontrado ou senha incorreta.' });
        }

        res.json({ id: salaRow.id, nickname: salaRow.nickname });
    });
});

//deletando usuario com base no nickname
app.delete('/usuarios/:nickname', (req, res) => {
    const nickname = req.params.nickname;

    if (!nickname) {
        return res.status(400).json({ error: 'Nome do usuário é obrigatório' });
    }

    // Deletar usuario 
    db.run('DELETE FROM usuarios WHERE nickname = ?', [nickname], (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        // Deletar jogos de acordo com os usuarios deletado
        db.run('DELETE FROM jogos WHERE usuario = ?', [nickname], function (err) {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            if (this.changes === 0) {
                return res.status(404).json({ error: 'Usuário não encontrado' });
            }

            res.json({ message: 'Jogo excluído juntamente com seu usuário' });
        });
    });
});

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//puxando dados de plataformas
app.get('/plataformas', (req, res) => {
    db.all('SELECT id, nomePlataforma, urlCapaPlataforma FROM plataformas', (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

//inserindo nova plataforma
app.post('/plataformas', (req, res) => {
    const { nomePlataforma, urlCapaPlataforma } = req.body;

    if (!nomePlataforma || !urlCapaPlataforma) {
        return res.status(400).json({ error: 'Os campos são obrigatórios' });
    }

    db.run('INSERT INTO plataformas (nomePlataforma, urlCapaPlataforma) VALUES (?, ?)', [nomePlataforma, urlCapaPlataforma], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        res.json({ id: this.lastID, nomePlataforma });
    });
});

//deletando plataforma com base em nome da plataforma (codigo no front end para so poder excluir quem é administrador)
app.delete('/plataformas/:nomePlataforma/:usuario', (req, res) => {
    const nomePlataforma = req.params.nomePlataforma;
    const usuario = req.params.usuario;

    if (!nomePlataforma) {
        return res.status(400).json({ error: 'Nome da plataforma é obrigatório' });
    }

    // Atualizar o campo 'plataforma' nos jogos associados a essa plataforma
    db.run('SELECT nickname FROM usuarios WHERE nickname = ?', [usuario], (err) => {
        if (err) {
            return res.status(400).json({ error: 'Usuário tem que ser o administrador' });
        }
        if (usuario === 'admin') {

            db.run('UPDATE jogos SET plataforma = ? WHERE plataforma = ?', ['N/A Plataforma', nomePlataforma], (err) => {
                if (err) {
                    return res.status(500).json({ error: err.message });
                }

                // Excluir a plataforma após atualizar os jogos associados
                db.run('DELETE FROM plataformas WHERE nomePlataforma = ?', [nomePlataforma], function (err) {
                    if (err) {
                        return res.status(500).json({ error: err.message });
                    }

                    if (this.changes === 0) {
                        return res.status(404).json({ error: 'Plataforma não encontrada' });
                    }

                    res.json({ message: 'Plataforma excluída e campo "plataforma" atualizado nos jogos associados com sucesso' });
                });
            });
        }else {
            return res.status(400).json({ error: 'Usuário tem que ser o administrador' });
        }

    });
});


//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//puxando dados de categorias
app.get('/categorias', (req, res) => {
    db.all('SELECT id, nomeCategoria FROM categorias', (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

//inserindo nova categoria
app.post('/categorias', (req, res) => {
    const { nomeCategoria } = req.body;

    if (!nomeCategoria) {
        return res.status(400).json({ error: 'Os campos são obrigatórios' });
    }

    db.run('INSERT INTO categorias (nomeCategoria) VALUES (?)', [nomeCategoria], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        res.json({ id: this.lastID, nomeCategoria });
    });
});

//deletando categoria com base em nome da categoria (codigo no front end para so poder excluir quem é administrador)
app.delete('/categorias/:nomeCategoria/:usuario', (req, res) => {
    const nomeCategoria = req.params.nomeCategoria;
    const usuario = req.params.usuario;

    console.log(nomeCategoria)

    if (!nomeCategoria) {
        console.log('categoria obrigatorio')

        return res.status(400).json({ error: 'Nome da categoria é obrigatório' });
    }

    // Atualizar o campo 'categoria' nos jogos associados a essa plataforma
    db.run('SELECT nickname FROM usuarios WHERE nickname = ?', [usuario], (err) => {
        if (err) {
            return res.status(400).json({ error: 'Usuário tem que ser o administrador' });
        }
        if (usuario === 'admin') {

            db.run('UPDATE jogos SET categoria = ? WHERE categoria = ?', ['N/A Categoria', nomeCategoria], (err) => {
                if (err) {
                    return res.status(500).json({ error: err.message });
                }

                // Excluir a plataforma após atualizar os jogos associados
                db.run('DELETE FROM categorias WHERE nomeCategoria = ?', [nomeCategoria], function (err) {
                    if (err) {
                        return res.status(500).json({ error: err.message });
                    }

                    if (this.changes === 0) {
                        return res.status(404).json({ error: 'Categoria não encontrada' });
                    }

                    res.json({ message: 'Categoria excluída e campo "categoria" atualizado nos jogos associados com sucesso' });
                });
            });
        }else {
            return res.status(400).json({ error: 'Usuário tem que ser o administrador' });
        }
        
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
