--Test data

--PODACI NACIONALNOST
select * from nacionalnost;

INSERT INTO "nacionalnost"("id", "naziv", "skracenica")
VALUES (NEXTVAL('nacionalnost_seq'), 'brazilska', 'BRA');
INSERT INTO "nacionalnost"("id", "naziv", "skracenica")
VALUES (NEXTVAL('nacionalnost_seq'), 'argentinska', 'ARG');
INSERT INTO "nacionalnost"("id", "naziv", "skracenica")
VALUES (NEXTVAL('nacionalnost_seq'), 'nemacka', 'DEU');
INSERT INTO "nacionalnost"("id", "naziv", "skracenica")
VALUES (NEXTVAL('nacionalnost_seq'), 'spanska', 'ESP');
INSERT INTO "nacionalnost"("id", "naziv", "skracenica")
VALUES (NEXTVAL('nacionalnost_seq'), 'kanadska', 'CAN');
INSERT INTO "nacionalnost"("id", "naziv", "skracenica")
VALUES (NEXTVAL('nacionalnost_seq'), 'portugalska', 'PRT');
INSERT INTO "nacionalnost"("id", "naziv", "skracenica")
VALUES (NEXTVAL('nacionalnost_seq'), 'poljska', 'POL');
INSERT INTO "nacionalnost"("id", "naziv", "skracenica")
VALUES (NEXTVAL('nacionalnost_seq'), 'belgijska', 'BEL');

INSERT INTO "nacionalnost"("id", "naziv", "skracenica")
VALUES (-100, 'TestNaz', 'TestSkr');

--PODACI LIGA
/*select * from liga*/
INSERT INTO "liga"("id", "naziv", "oznaka")
VALUES (NEXTVAL('liga_seq'), 'Liga Nacional de Futbol Profesional', 'La Liga');
INSERT INTO "liga"("id", "naziv", "oznaka")
VALUES (NEXTVAL('liga_seq'), 'The Football Association Premier League Limited', 'Premier League');
INSERT INTO "liga"("id", "naziv", "oznaka")
VALUES (NEXTVAL('liga_seq'), 'Bundesliga', 'Bundesliga');
INSERT INTO "liga"("id", "naziv", "oznaka")
VALUES (NEXTVAL('liga_seq'), 'Lega Serie A', 'Serie A');

INSERT INTO "liga"("id", "naziv", "oznaka")
VALUES (-100, 'TestNaz', 'TestOzn');

--PODACI TIM
/*select * from tim;*/
INSERT INTO "tim"("id", "naziv", "osnovan", "sediste", "liga")
VALUES (NEXTVAL('tim_seq'), 'FC Barcelona', to_date('20.11.1895.', 'dd.mm.yyyy.'), 'Barselona', 1);
INSERT INTO "tim"("id", "naziv", "osnovan", "sediste", "liga")
VALUES (NEXTVAL('tim_seq'), 'Liverpool FC', to_date('03.06.1892.', 'dd.mm.yyyy.'), 'Liverpul', 51);
INSERT INTO "tim"("id", "naziv", "osnovan", "sediste", "liga")
VALUES (NEXTVAL('tim_seq'), 'FC Bayern Munchen', to_date('27.02.1900.', 'dd.mm.yyyy.'), 'Minhen', 151);
INSERT INTO "tim"("id", "naziv", "osnovan", "sediste", "liga")
VALUES (NEXTVAL('tim_seq'), 'Real Madrid CF', to_date('06.03.1902.', 'dd.mm.yyyy.'), 'Madrid', 1);
INSERT INTO "tim"("id", "naziv", "osnovan", "sediste", "liga")
VALUES (NEXTVAL('tim_seq'), 'Juventus FC', to_date('01.11.1897.', 'dd.mm.yyyy.'), 'Torino', 151);
INSERT INTO "tim"("id", "naziv", "osnovan", "sediste", "liga")
VALUES (NEXTVAL('tim_seq'), 'Manchester City FC', to_date('16.04.1897.', 'dd.mm.yyyy.'), 'Mancester', 51);

INSERT INTO "tim"("id", "naziv", "osnovan", "sediste", "liga")
VALUES (-100, 'TestNaz', to_date('01.04.1897.', 'dd.mm.yyyy.'), 'TestSed', 1);

--PODACI IGRAC
/*select * from igrac;*/
INSERT INTO "igrac" ("id", "ime", "prezime","broj_reg", "datum_rodjenja", "nacionalnost", "tim")
VALUES (NEXTVAL('igrac_seq'), 'Alisson', 'Becker', '1', to_date('02.10.1992.', 'dd.mm.yyyy.'), 1, 51);
INSERT INTO "igrac" ("id", "ime", "prezime","broj_reg", "datum_rodjenja", "nacionalnost", "tim")
VALUES (NEXTVAL('igrac_seq'), 'Lionel', 'Messi', '10', to_date('24.06.1987.', 'dd.mm.yyyy.'), 51, 1);
INSERT INTO "igrac" ("id", "ime", "prezime","broj_reg", "datum_rodjenja", "nacionalnost", "tim")
VALUES (NEXTVAL('igrac_seq'), 'Joshua', 'Kimmich', '6', to_date('08.02.1995.', 'dd.mm.yyyy.'), 101, 101);
INSERT INTO "igrac" ("id", "ime", "prezime","broj_reg", "datum_rodjenja", "nacionalnost", "tim")
VALUES (NEXTVAL('igrac_seq'), 'Sergio', 'Ramos', '4', to_date('30.03.1986.', 'dd.mm.yyyy.'), 151, 151);
INSERT INTO "igrac" ("id", "ime", "prezime","broj_reg", "datum_rodjenja", "nacionalnost", "tim")
VALUES (NEXTVAL('igrac_seq'), 'Thiago', 'Alcantara', '6', to_date('11.04.1991.', 'dd.mm.yyyy.'), 151, 101);
INSERT INTO "igrac" ("id", "ime", "prezime","broj_reg", "datum_rodjenja", "nacionalnost", "tim")
VALUES (NEXTVAL('igrac_seq'), 'Alphonso', 'Davies', '19', to_date('02.11.2000.', 'dd.mm.yyyy.'), 201, 151);
INSERT INTO "igrac" ("id", "ime", "prezime","broj_reg", "datum_rodjenja", "nacionalnost", "tim")
VALUES (NEXTVAL('igrac_seq'), 'Christiano', 'Ronaldo', '7', to_date('05.02.1985.', 'dd.mm.yyyy.'), 251, 201);
INSERT INTO "igrac" ("id", "ime", "prezime","broj_reg", "datum_rodjenja", "nacionalnost", "tim")
VALUES (NEXTVAL('igrac_seq'), 'Robert', 'Lewandowski', '9', to_date('21.08.1988.', 'dd.mm.yyyy.'), 301, 101);
INSERT INTO "igrac" ("id", "ime", "prezime","broj_reg", "datum_rodjenja", "nacionalnost", "tim")
VALUES (NEXTVAL('igrac_seq'), 'Kevin', 'de Bruyne', '17', to_date('28.06.1991.', 'dd.mm.yyyy.'), 351, 251);

INSERT INTO "igrac" ("id", "ime", "prezime","broj_reg", "datum_rodjenja", "nacionalnost", "tim")
VALUES (-100, 'TestIme', 'TestPrez', '1', to_date('01.06.1991.', 'dd.mm.yyyy.'), 1, 1);



