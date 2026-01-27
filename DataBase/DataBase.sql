/* Ce dossier correspond aux datas que la base de donné postgressql aura par défault au démarrage */  
/* En cas de changement, il faut d'abord faire dans le terminal : docker compose down -v */
/* puis : docker compose up -d --build */
    
CREATE TABLE People ( 
    id BIGSERIAL PRIMARY KEY, 
    name TEXT NOT NULL, 
    first_name TEXT NOT NULL, 
    phone_number TEXT, 
    mail TEXT NOT NULL,
    password TEXT NOT NULL ); 

INSERT INTO People (id, name, first_name, phone_number, mail, password, adress, city) VALUES
(1, 'Dupont', 'Alice', '0612345678', 'alice.dupont@mail.com', 'passAlice'),
(2, 'Leroy', 'Marc', '0623456789', 'marc.leroy@mail.com', 'passMarc'),