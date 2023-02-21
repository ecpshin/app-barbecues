DROP TABLE IF EXISTS pedidos;
DROP TABLE IF EXISTS atendentes;
DROP TABLE IF EXISTS mesas;
DROP TABLE IF EXISTS cardapio;

CREATE TABLE IF NOT EXISTS mesas(
  id SERIAL PRIMARY KEY,
  ocupada BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS atendentes(
	id SERIAL PRIMARY KEY,
  nome TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS cardapio(
	id SERIAL PRIMARY KEY,
  tipo VARCHAR(50),
  descricao TEXT NOT NULL,
  preco INT NOT NULL
);

CREATE TABLE IF NOT EXISTS pedidos  (
	id SERIAL NOT NULL PRIMARY KEY,
  atendente INT NOT NULL REFERENCES atendentes(id) ON UPDATE CASCADE ON DELETE NO ACTION,
  mesa INT NOT NULL REFERENCES mesas(id) ON UPDATE CASCADE ON DELETE NO ACTION,
  cardapio INT NOT NULL REFERENCES cardapio(id) ON UPDATE CASCADE ON DELETE NO ACTION, 
  quantidade INT DEFAULT 1,
  preco INT NOT NULL,
  fechado BOOLEAN DEFAULT FALSE
);

CREATE VIEW tb_pedidos AS SELECT pedidos.id, pedidos.mesa, pedidos.atendente, cardapio.tipo, cardapio.descricao, 
pedidos.quantidade, cardapio.preco, mesas.ocupada as fechado 
FROM pedidos JOIN cardapio ON pedidos.cardapio = cardapio.id 
JOIN mesas ON pedidos.mesa = mesas.id ORDER BY pedidos.mesa ASC;

INSERT INTO atendentes (nome) VALUES ('sergio'), ('lindalva'), ('nicholas'), ('marcela'), ('Custom');
INSERT INTO cardapio (tipo, descricao, preco) VALUES ('Espetinho', 'Espetinho de frango', 500), 
('Espetinho', 'Espetinho de lingua', 500),
('Bebida', 'Cerveja Skol (lata)', 500),
('Bebida', 'Cachaça Matauta (dose)', 300)
('Espetinho', 'Pão de alho', 500)
('Espetinho', 'Espetinho de carne', 500);
INSERT INTO mesas (ocupada) VALUES ('FALSE'), ('FALSE'), ('FALSE'), ('FALSE'), ('FALSE'), ('FALSE');
