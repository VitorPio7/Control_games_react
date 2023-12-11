// JSON DOS JOGOS
const jogosJSON = JSON.parse(localStorage.getItem('teste4')) || {
    "CODMW3": {
        "id": "CODMW3",
        "game": "Call of Duty: Modern Warfare 3",
        "plataforma": "PlayStation",
        "status1": "Jogado",
        "categoria": "Tiro em primeira pessoa",
        "progresso": "80%",
        "recomendo": "Sim",
        "ano": "2011",
        "descricao": "Uma intensa experiência de tiro em primeira pessoa que coloca os jogadores no meio de uma guerra global, enfrentando ameaças terroristas em várias localidades ao redor do mundo. O jogo é conhecido por sua jogabilidade frenética e multiplayer competitivo.",
        "foto": "imagens/Jogos img menor/calf of duty mw.jpg",
        "versao": "Física"
    },
    "RDR2": {
        "id": "RDR2",
        "game": "Red Dead Redemption 2",
        "plataforma": "Xbox",
        "status1": "Jogando",
        "categoria": "Ação e Aventura",
        "progresso": "60%",
        "recomendo": "Sim",
        "ano": "2018",
        "descricao": "Uma aventura de mundo aberto ambientada no Velho Oeste, onde você assume o papel de Arthur Morgan, um fora-da-lei em uma gangue. O jogo oferece uma narrativa rica, uma vasta paisagem para explorar e ação intensa, tanto em missões quanto na vida cotidiana do personagem.",
        "foto": "imagens/Jogos img menor/red dead redemption.jpg",
        "versao": "Física"
    },
    "SDIF": {
        "id": "SDIF",
        "game": "Six Days in Fallujah",
        "plataforma": "Steam",
        "status1": "Jogando",
        "categoria": "Tiro tático",
        "progresso": "45%",
        "recomendo": "Sim",
        "ano": "2022",
        "descricao": "Um jogo de tiro tático baseado em eventos reais, centrado na Batalha de Fallujah, durante a Guerra do Iraque. Ele oferece uma abordagem realista e desafiadora para simular o combate em um ambiente urbano.",
        "foto": "imagens/Jogos img menor/six day in fallujah.jpg",
        "versao": "Digital"
    },
    "WART": {
        "id": "WART",
        "game": "War Thunder",
        "plataforma": "PlayStation",
        "status1": "Jogando",
        "categoria": "Simulação de combate",
        "progresso": "70%",
        "recomendo": "Sim",
        "ano": "2013",
        "descricao": "Um jogo de simulação de combate que abrange várias eras, permitindo que os jogadores controlem uma variedade de veículos militares, como tanques, aviões e navios. A jogabilidade é focada em batalhas multiplayer.",
        "foto": "imagens/Jogos img menor/war thunder.jpg",
        "versao": "Física"
    },
    "SNE4": {
        "id": "SNE4",
        "game": "Sniper Elite 4",
        "plataforma": "Xbox",
        "status1": "Jogado",
        "categoria": "Tiro tático",
        "progresso": "100%",
        "recomendo": "Sim",
        "ano": "2017",
        "descricao": "Um jogo de tiro tático que coloca os jogadores no papel de um atirador de elite durante a Segunda Guerra Mundial. Ele é conhecido pelos tiros de precisão e pelas mortes cinematográficas.",
        "foto": "imagens/Jogos img menor/sniper elite 4.jpg",
        "versao": "Digital"
    },
    "FOH5": {
        "id": "FOH5",
        "game": "Forza Horizon 5",
        "plataforma": "Xbox",
        "status1": "Jogando",
        "categoria": "Corrida",
        "progresso": "55%",
        "recomendo": "Sim",
        "ano": "2021",
        "descricao": "Um jogo de corrida de mundo aberto que se passa no México. Oferece uma grande variedade de carros e eventos, com gráficos impressionantes e mecânicas de direção realistas.",
        "foto": "imagens/Jogos img menor/forza horizon5.jpg",
        "versao": "Física"
    },
    "SNC2": {
        "id": "SNC2",
        "game": "Sniper Contracts 2",
        "plataforma": "Steam",
        "status1": "Jogando",
        "categoria": "Tiro tático",
        "progresso": "30%",
        "recomendo": "Sim",
        "ano": "2021",
        "descricao": "Outro jogo da série Sniper, onde os jogadores assumem o papel de um atirador de elite contratado para completar missões de eliminação de alvos em cenários variados.",
        "foto": "imagens/Jogos img menor/sniper contracts 2.jpg",
        "versao": "Digital"
    },
    "NFSH": {
        "id": "NFSH",
        "game": "Need for Speed: Heat",
        "plataforma": "PlayStation",
        "status1": "Jogado",
        "categoria": "Corrida",
        "progresso": "90%",
        "recomendo": "Sim",
        "ano": "2019",
        "descricao": "Um jogo de corrida de rua que combina ação, personalização de carros e uma narrativa centrada em pilotos que competem nas ruas à noite. Os jogadores podem criar e personalizar seus veículos para dominar as corridas.",
        "foto": "imagens/Jogos img menor/nfs.jpg",
        "versao": "Física"
    },
    "DATD": {
        "id": "DATD",
        "game": "Dave the Diver",
        "plataforma": "Steam",
        "status1": "Jogando",
        "categoria": "Aventura submarina",
        "progresso": "40%",
        "recomendo": "Sim",
        "ano": "2023",
        "descricao": "Uma aventura submarina que segue a história de Dave, um mergulhador, enquanto ele explora recifes de coral e descobre tesouros subaquáticos. O jogo oferece uma experiência tranquila e exploratória.",
        "foto": "imagens/Jogos img menor/dave.jpg",
        "versao": "Digital"
    },
    "MTSA": {
        "id": "MTSA",
        "game": "My Time at Sandrock",
        "plataforma": "Steam",
        "status1": "Jogando",
        "categoria": "Simulação",
        "progresso": "75%",
        "recomendo": "Sim",
        "ano": "2022",
        "descricao": "Um jogo de simulação que coloca os jogadores em um ambiente rural e os desafia a construir, cultivar e interagir com a comunidade. É uma continuação de 'My Time at Portia'.",
        "foto": "imagens/Jogos img menor/mytime.jpg",
        "versao": "Digital"
    },
    "SNOW": {
        "id": "SNOW",
        "game": "SnowRunner",
        "plataforma": "Xbox",
        "status1": "Jogado",
        "categoria": "Simulação off-road",
        "progresso": "100%",
        "recomendo": "Sim",
        "ano": "2020",
        "descricao": "Um simulador de veículos off-road que desafia os jogadores a enfrentar terrenos difíceis e condições extremas. É um jogo de resistência, onde você deve transportar cargas valiosas por estradas perigosas.",
        "foto": "imagens/Jogos img menor/snow runner.jpg",
        "versao": "Física"
    },
    "STDW": {
        "id": "STDW",
        "game": "Stardew Valley",
        "plataforma": "PlayStation",
        "status1": "Jogado",
        "categoria": "Simulação de fazenda",
        "progresso": "85%",
        "recomendo": "Sim",
        "ano": "2016",
        "descricao": "Um jogo de simulação de fazenda onde os jogadores herdam uma fazenda e podem cultivar colheitas, criar animais, minerar e interagir com os habitantes da cidade. É um jogo relaxante e cheio de atividades para desfrutar.",
        "foto": "imagens/Jogos img menor/stardewvalley.jpg",
        "versao": "Digital"
    },
    "HOGW": {
        "id": "HOGW",
        "game": "Hogwarts Legacy",
        "plataforma": "PlayStation",
        "status1": "Jogando",
        "categoria": "Ação e Aventura",
        "progresso": "40%",
        "recomendo": "Sim",
        "ano": "2022",
        "descricao": "Embarque em uma aventura mágica no mundo de Harry Potter. Você é um estudante em Hogwarts e pode explorar o castelo, aprender magias e enfrentar desafios misteriosos. Uma experiência imersiva no universo bruxo.",
        "foto": "imagens/Jogos img menor/hogwarts.jpg",
        "versao": 'Digital'
    },
    "TLOU1": {
        "id": "TLOU1",
        "game": "The Last of Us Part 1",
        "plataforma": "PlayStation",
        "status1": "Jogando",
        "categoria": "Ação e Aventura",
        "progresso": "20%", 
        "recomendo": "Sim",
        "ano": "2013",
        "descricao": "Uma emocionante jornada pós-apocalíptica que segue Joel e Ellie, enquanto eles tentam sobreviver em um mundo devastado por uma pandemia. O jogo é conhecido por sua narrativa envolvente e personagens marcantes.",
        "foto": "imagens/Jogos img menor/the last of us.jpg",
        "versao": "Física"
    },
    "DIABLO4": {
        "id": "DIABLO4",
        "game": "Diablo 4",
        "plataforma": "PC",
        "status1": "Aguardando lançamento",
        "categoria": "RPG de ação",
        "progresso": "10%", 
        "recomendo": "A avaliar",
        "ano": "2023",
        "descricao": "A próxima entrada na renomada série Diablo, trazendo um novo capítulo na luta contra as forças do mal. Com gráficos aprimorados e uma história envolvente, Diablo 4 promete ser uma experiência épica para os fãs da franquia.",
        "foto": "imagens/Jogos img menor/diablo 4.jpg",
        "versao": "Digital"
    },
    "INCY": {
        "id": "INCY",
        "game": "Insurgency",
        "plataforma": "Steam",
        "status1": "Jogando",
        "categoria": "Tiro tático",
        "progresso": "60%", 
        "recomendo": "Sim",
        "ano": "2014", 
        "descricao": "Um jogo de tiro tático que oferece uma experiência intensa e realista de combate moderno. Os jogadores enfrentam situações desafiadoras em ambientes urbanos e rurais, com foco em trabalho em equipe e estratégia.",
        "foto": "imagens/Jogos img menor/insurgency.jpg",
        "versao": "Física"
    }
    
}

var Gamesid, jogoSelecionado, plataformaok, jogoSelecionado, gameimg; //Variavel global, não mexer

function abrirgame(Jogo) {

    // jogoSelecionado = jogosJSON[Jogo.id];

    jogoSelecionado = jogosJSON[Jogo];

    if (jogoSelecionado.plataforma == 'Steam') {
        plataformaok = '<a class="fa-brands fa-steam">'; /*Logo da steam sendo colada  na varaivel plataformak , o mesmo raciocinio acontece nos elses abaixo */
    }
    else if (jogoSelecionado.plataforma == 'PlayStation') {
        plataformaok = '<a class="fa-brands fa-playstation">';
    }
    else if (jogoSelecionado.plataforma == 'Xbox') {
        plataformaok = '<a class="fa-brands fa-xbox">';
    }
    else{
        plataformaok = '<i class="fa-sharp fa-solid fa-desktop"></i>'
    }

    // simplificando imagem pra não ficar grande no código
    // gameimg = '<img src="' + jogoSelecionado.foto + '" style="width: 100%; border-radius: 20px;">';
    // gameimg = '<img src="' + jogoSelecionado.foto + '" style="border-radius: 20px;">';
    // gameimg = '<img src="' + jogoSelecionado.foto + '" style="width: 100%">';
    // gameimg = '<img src="' + jogoSelecionado.foto + '" style="width: 100%; border-radius: 20px;">';
    gameimg = '<img id="img_game" src="' + jogoSelecionado.foto + '">';



    //inicio get/set
    localStorage.setItem('gameid', jogoSelecionado.game);
    localStorage.setItem('plataformaid', jogoSelecionado.plataforma);
    localStorage.setItem('plataformaokid', plataformaok);
    localStorage.setItem('statusid', jogoSelecionado.status1);
    localStorage.setItem('categoriaid', jogoSelecionado.categoria);
    localStorage.setItem('progressoid', jogoSelecionado.progresso);
    localStorage.setItem('recomendoid', jogoSelecionado.recomendo);
    localStorage.setItem('anoid', jogoSelecionado.ano);
    localStorage.setItem('descricaoid', jogoSelecionado.descricao);
    localStorage.setItem('fotoid', gameimg);
    localStorage.setItem('versao', jogoSelecionado.versao);
    //Fim Get/Set
}

// var botao_remover = document.getElementById('botao_remover');
// var botao_editar = document.getElementById('botao_editar');
// botao_remover.addEventListener('click', function() {confirmacao(1);});
// botao_editar.addEventListener('click', function() {confirmacao(2);});

function confirmacao(id) {
    if (id === 1) {
        var confirmou = window.confirm('Tem certeza que deseja apagar esse jogo da sua biblioteca ?');
        if (confirmou) {
            window.alert('O jogo Foi apagado da sua biblioteca')
            
        }
    } else {
        window.alert('Você agora irá editar as informações do jogo');
        
    }
}

// a partir daqui adicionar codigo automatico na tela biblioteca e também adicionar o game em um json no cache

function adicionarGame() {

    const id = document.getElementById('id_input').value;
    const game = document.getElementById('nome_input').value;
    const foto = document.getElementById('capa_input').value;
    const plataforma = document.getElementById('plataformas_input').value;
    const status1 = document.getElementById('status_input').value;
    const categoria = document.getElementById('categoria_input').value;
    const progresso = document.getElementById('progresso_input').value;
    const recomendo = document.getElementById('recomendo_input').value;
    const ano = document.getElementById('ano_input').value;
    const versao = document.getElementById('versao_input').value;
    const descricao = document.getElementById('descricao_input').value;
    
    jogosJSON[`${id}`] = {
        "id": id,
        "game": game,
        "foto": foto,
        "plataforma": plataforma,
        "status1": status1,   //aqui teve que ser status 2 pois o js estava dando erro com a palavra status, por favor verificar esse erro
        "categoria": categoria,
        "progresso": progresso,
        "recomendo": recomendo,
        "ano": ano,
        "versao": versao,
        "descricao": descricao
    };
    alert("Jogo Cadastrado com Sucesso!");
    salvarGamesLocalmente();
    atualizarListaGames();
    limparFormulario();
}

function atualizarListaGames() {
    // gamesContainer.innerHTML = '';
    let x = '';
    for (const key in jogosJSON) {
        if (jogosJSON.hasOwnProperty(key)) {
            const game = jogosJSON[key];
            // const gameDiv = document.createElement('div');
            var imggame = '<img src="' + game.foto + '">';
            // gameDiv.innerHTML = `<a id="${game.id}" href="game.html" onclick='abrirgame(this)'>${imggame} ${game.game}</a>`;
            x += `
            <div class="Imagem_jogos">
                <a class="link_img_jogo" href="game.html" onclick="abrirgame('${game.id}')">${imggame}</a>
                <a class="link_jogo" href="game.html">${game.game}</a>
            </div>`;
            // gamesContainer.appendChild(gameDiv);
        }
    }
    gamesContainer.innerHTML = x;
}

function limparFormulario() {
    formGame.reset();
}

function salvarGamesLocalmente() {
    localStorage.setItem('teste4', JSON.stringify(jogosJSON));
}
