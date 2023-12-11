PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE jogos (id INTEGER PRIMARY KEY AUTOINCREMENT, nomeJogo TEXT NOT NULL, urlCapaJogo TEXT NOT NULL, plataforma TEXT NOT NULL, status TEXT NOT NULL, categoria TEXT NOT NULL, progresso TEXT NOT NULL, recomendo TEXT NOT NULL, ano TEXT NOT NULL, descricao TEXT NOT NULL, usuario INTEGER NOT NULL, UNIQUE(nomeJogo, usuario), FOREIGN KEY(plataforma) REFERENCES plataformas(nomePlataforma), FOREIGN KEY(usuario) REFERENCES usuarios(id));

INSERT INTO jogos VALUES(1,'Call of Duty','https://cdn.akamai.steamstatic.com/steam/apps/1938090/header.jpg?t=1701363599','Xbox','Jogando','Tiro','80%','Sim','2023','na','vhtc');
INSERT INTO jogos VALUES(2,'GTA V','https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg?t=1695060909','Playstation','Zerado','modo aberto','100%','Sim','2013','NA','vhtc');
INSERT INTO jogos VALUES(3,'FC 24','https://cdn.akamai.steamstatic.com/steam/apps/2195250/header.jpg?t=1701266064','Xbox','Jogando','modo aberto','80%','Sim','2013','NA','vhtc');
INSERT INTO jogos VALUES(4,'Raimbow Six','https://cdn.akamai.steamstatic.com/steam/apps/359550/header.jpg?t=1701367305','Playstation','Jogando','modo aberto','80%','Não','2013','NA','vhtc');
INSERT INTO jogos VALUES(5,'Dead by Daylight','https://cdn.akamai.steamstatic.com/steam/apps/381210/header.jpg?t=1701297215','Playstation','Jogando','modo aberto','80%','Sim','2013','NA','vhtc');
INSERT INTO jogos VALUES(6,'Euro Truck Simulator','https://cdn.akamai.steamstatic.com/steam/apps/227300/header.jpg?t=1700739799','Nintendo Switch','Zerado','modo aberto','100%','Sim','2013','NA','vhtc');
INSERT INTO jogos VALUES(7,'Destiny 2','https://cdn.akamai.steamstatic.com/steam/apps/1085660/header_brazilian.jpg?t=1701200506','PC','Zerado','modo aberto','100%','Não','2013','NA','vhtc');
INSERT INTO jogos VALUES(8,'Horizon Zero Dawn','https://cdn.akamai.steamstatic.com/steam/apps/1151640/header.jpg?t=1698159193','Playstation','Zerado','modo aberto','100%','Não','2013','NA','vhtc');
INSERT INTO jogos VALUES(12,'League of Legends','https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/EGS_LeagueofLegends_RiotGames_S1_2560x1440-872a966297484acd0efe49f34edd5aed','PC','Jogando','construcao','80%','Não','2012-12-01','na','vhtc');
INSERT INTO jogos VALUES(13,'God of War Ragnarok','https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S1_2560x1440-5d74d9b240bba8f2c40920dcde7c5c67_2560x1440-5d74d9b240bba8f2c40920dcde7c5c67','Playstation','Zerado','acao','100%','sim','2018-08-08','Teste','vhtc');

CREATE TABLE usuarios (id INTEGER PRIMARY KEY AUTOINCREMENT, nickname TEXT NOT NULL UNIQUE, email TEXT NOT NULL, senha TEXT NOT NULL, avatar TEXT NOT NULL);

INSERT INTO usuarios VALUES(7,'vhtc','victor.tuy@hotmail.com','3142','https://png.pngtree.com/png-vector/20210128/ourlarge/pngtree-flat-default-avatar-png-image_2848906.jpg');
INSERT INTO usuarios VALUES(8,'admin','admin@admin.com.br','admin','https://thumbs.dreamstime.com/b/perfil-de-usu%C3%A1rio-do-vetor-avatar-padr%C3%A3o-179376714.jpg');
CREATE TABLE plataformas (id INTEGER PRIMARY KEY AUTOINCREMENT, nomePlataforma TEXT NOT NULL UNIQUE, urlCapaPlataforma TEXT NOT NULL);

INSERT INTO plataformas VALUES(1,'Playstation','https://s7test3.scene7.com/is/image/SIEPDC/playstation-family-logo?$native$');
INSERT INTO plataformas VALUES(2,'Xbox','https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/2048px-Xbox_one_logo.svg.png');
INSERT INTO plataformas VALUES(3,'PC','https://cdn.dooca.store/180/products/ajczsegdhpeqvpcnosfvag7g6dyvwnnrmoic_640x640+fill_ffffff.png?v=1675517447&webp=0');
INSERT INTO plataformas VALUES(4,'Nintendo Switch','https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Nintendo_switch_logo.png/480px-Nintendo_switch_logo.png');

DELETE FROM sqlite_sequence;

INSERT INTO sqlite_sequence VALUES('usuarios',8);
INSERT INTO sqlite_sequence VALUES('plataformas',4);
INSERT INTO sqlite_sequence VALUES('jogos',13);

COMMIT;
