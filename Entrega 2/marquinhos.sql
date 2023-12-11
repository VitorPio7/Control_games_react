PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
-- INSERT INTO jogos VALUES
-- (91, 'Overwatch', 'https://cdn.cloudflare.steamstatic.com/steam/apps/578080/header.jpg?t=1675460126', 'PC', 'Jogando', 'FPS', '89%', 'Sim', '2016', 'Entre em combates frenéticos com heróis em Overwatch.', 'Deison-santos'),
--   (92, 'Red Dead Redemption 2', 'https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg?t=1704779032', 'Playstation', 'Jogando', 'Ação', '97%', 'Sim', '2018', 'Viva a épica saga de Arthur Morgan no Velho Oeste.', 'Deison-santos'),
--   (93, 'Fortnite', 'https://cdn.akamai.steamstatic.com/steam/apps/632360/header.jpg?t=1712455451', 'Xbox', 'Jogando', 'Battle Royale', '86%', 'Sim', '2017', 'Construa e lute para ser o último sobrevivente em Fortnite.', 'Deison-santos'),
--   (94, 'Horizon Zero Dawn', 'https://cdn.akamai.steamstatic.com/steam/apps/1151640/header.jpg?t=1710844292', 'Playstation', 'Jogando', 'Ação', '93%', 'Sim', '2020', 'Explore um mundo dominado por máquinas em Horizon Zero Dawn.', 'Deison-santos'),
--   (95, 'Dota 2', 'https://cdn.akamai.steamstatic.com/steam/apps/570/header.jpg?t=1701555641', 'PC', 'Jogando', 'MOBA', '88%', 'Sim', '2013', 'Enfrente batalhas estratégicas em Dota 2.', 'Deison-santos'),
--   (96, 'Call of Duty: Warzone', 'https://cdn.akamai.steamstatic.com/steam/apps/1086940/header.jpg?t=1709419682', 'Xbox', 'Jogando', 'Battle Royale', '85%', 'Sim', '2020', 'Entre em combates intensos em Warzone, parte de Call of Duty.', 'Deison-santos'),
--   (97, 'Cyberpunk 2077', 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/header_alt_assets_5_brazilian.jpg?t=1701776649', 'PC', 'Jogando', 'RPG', '89%', 'Sim', '2020', 'Mergulhe na megalópole futurista de Night City.', 'Deison-santos'),
--   (98, 'Minecraft', 'https://cdn.akamai.steamstatic.com/steam/apps/413150/header.jpg?t=1669479615', 'Nintendo Switch', 'Jogando', 'Sandbox', '95%', 'Sim', '2011', 'Crie e explore mundos infinitos em Minecraft.', 'Deison-santos'),
--   (99, 'Star Wars Jedi: Fallen Order', 'https://cdn.akamai.steamstatic.com/steam/apps/1172380/header.jpg?t=1720599789', 'Xbox', 'Jogando', 'Ação', '92%', 'Sim', '2019', 'Viva a história de Cal Kestis em Star Wars Jedi: Fallen Order.', 'Deison-santos'),
--   (100, 'Among Us', 'https://cdn.cloudflare.steamstatic.com/steam/apps/945360/header.jpg?t=1630548670', 'PC', 'Jogando', 'Party Game', '89%', 'Sim', '2018', 'Descubra o impostor em partidas multiplayer divertidas.', 'Deison-santos');

INSERT INTO usuarios VALUES
(1,'Victor-pio','victor.tuy@hotmail.com','3313','https://png.pngtree.com/png-vector/20210128/ourlarge/pngtree-flat-default-avatar-png-image_2848906.jpg'),
(2,'Kinho360ka','kinho360ka@example.com','1234','https://s2-techtudo.glbimg.com/zAVzm6CbZ6VSmpDe76jhK7Qx73E=/0x0:1200x700/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/u/G/eQpsXGQB6xTlFlvJsUOw/avatar-a-lenda-de-aang.jpg'),
(3,'Lopes-brasil','lopes.brasil@example.com','5678','https://s2-techtudo.glbimg.com/zAVzm6CbZ6VSmpDe76jhK7Qx73E=/0x0:1200x700/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/u/G/eQpsXGQB6xTlFlvJsUOw/avatar-a-lenda-de-aang.jpg'),
(4,'Eduardo-brasil','eduardo.brasil@example.com','9876','https://s2-techtudo.glbimg.com/zAVzm6CbZ6VSmpDe76jhK7Qx73E=/0x0:1200x700/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/u/G/eQpsXGQB6xTlFlvJsUOw/avatar-a-lenda-de-aang.jpg'),
(5,'Victor-brasil','victor.brasil@example.com','4321','https://s2-techtudo.glbimg.com/zAVzm6CbZ6VSmpDe76jhK7Qx73E=/0x0:1200x700/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/u/G/eQpsXGQB6xTlFlvJsUOw/avatar-a-lenda-de-aang.jpg'),
(6,'Hericles-lopes','hericles.lopes@example.com','6543','https://s2-techtudo.glbimg.com/zAVzm6CbZ6VSmpDe76jhK7Qx73E=/0x0:1200x700/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/u/G/eQpsXGQB6xTlFlvJsUOw/avatar-a-lenda-de-aang.jpg'),
(7,'Victoria-valentina','victoria.valentina@example.com','8765','https://s2-techtudo.glbimg.com/zAVzm6CbZ6VSmpDe76jhK7Qx73E=/0x0:1200x700/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/u/G/eQpsXGQB6xTlFlvJsUOw/avatar-a-lenda-de-aang.jpg'),
(8,'Mary-tuy','mary.tuy@example.com','2109','https://s2-techtudo.glbimg.com/zAVzm6CbZ6VSmpDe76jhK7Qx73E=/0x0:1200x700/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/u/G/eQpsXGQB6xTlFlvJsUOw/avatar-a-lenda-de-aang.jpg'),
(9,'Juan-Medeiros','juan.medeiros@example.com','1852','https://s2-techtudo.glbimg.com/zAVzm6CbZ6VSmpDe76jhK7Qx73E=/0x0:1200x700/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/u/G/eQpsXGQB6xTlFlvJsUOw/avatar-a-lenda-de-aang.jpg'),
(10,'Deison-santos','deison.santos@example.com','3498','https://s2-techtudo.glbimg.com/zAVzm6CbZ6VSmpDe76jhK7Qx73E=/0x0:1200x700/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/u/G/eQpsXGQB6xTlFlvJsUOw/avatar-a-lenda-de-aang.jpg');



COMMIT;
