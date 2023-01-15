import type { BaseGift } from '../gifts';

const gifts: unknown = JSON.parse(`[
  {
    \"name\": \"Peeling Kawitacyjny 5w1 Herz Medical Bezprzewodowy\",
    \"price\": 179,
    \"imageURL\": \"https://a.allegroimg.com/s180/118520/ed625dbc4359bda6efd14336043f/Peeling-Kawitacyjny-5w1-Herz-Medical-Bezprzewodowy\",
    \"desc\": \"Stan: Nowy, Marka: Herz Medical Instruments\"
  },
  {
    \"name\": \"ZESTAW NATURALNYCH KOSMETYKÓW Z KONOPI DLA KOBIET\",
    \"price\": 197,
    \"imageURL\": \"https://a.allegroimg.com/s180/1110d2/ffc37fff48efb678fe7825439a77/ZESTAW-NATURALNYCH-KOSMETYKOW-Z-KONOPI-DLA-KOBIET\",
    \"desc\": \"Stan: Nowy, Marka: Kropla CBD\"
  },
  {
    \"name\": \"Mikrodermabrazja diamentowa mobilna Beauty Limited\",
    \"price\": 168.15,
    \"imageURL\": \"https://a.allegroimg.com/s180/113c8a/e99960bd45f38ed0ed02fa664368/Mikrodermabrazja-diamentowa-mobilna-Beauty-Limited\",
    \"desc\": \"Stan: Nowy, Marka: Beauty Limited\"
  },
  {
    \"name\": \"DEPILATOR LASEROWY IPL\",
    \"price\": 199.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/117bbc/c872753a469389fe61d166beaa17/DEPILATOR-LASEROWY-IPL\",
    \"desc\": \"Stan: Nowy, Marka: Lunar Studio, Zasilanie: sieciowe, Sposób depilacji: impuls światła\"
  },
  {
    \"name\": \"LOKÓWKA AUTOMATYCZNA DO WŁOSÓW FALOWNICA CERAMICZN\",
    \"price\": 137,
    \"imageURL\": \"https://a.allegroimg.com/s180/112bae/49a859ae41119526a3b7a0bcadbf/LOKOWKA-AUTOMATYCZNA-DO-WLOSOW-FALOWNICA-CERAMICZN\",
    \"desc\": \"Stan: Nowy, Typ: lokówka automatyczna, Powłoka: ceramiczna, Moc: 25 W, Regulacja temperatury: tak\"
  },
  {
    \"name\": \"Depilator Laserowy IPL Herz Medical Ciało, Bikini\",
    \"price\": 349,
    \"imageURL\": \"https://a.allegroimg.com/s180/110f56/b587e604431fb2b72eff6947bdc0/Depilator-Laserowy-IPL-Herz-Medical-Cialo-Bikini\",
    \"desc\": \"Stan: Nowy, Marka: Herz Medical Instruments, Zasilanie: sieciowe, Sposób depilacji: impuls światła\"
  },
  {
    \"name\": \"Stapiz Sleek Line Szampon z Jedwabiem Repair 1L\",
    \"price\": 19.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1192d8/9137c18a4be1af0fc3caee5cd345/Stapiz-Sleek-Line-Szampon-z-Jedwabiem-Repair-1L\",
    \"desc\": \"Stan: Nowy, Marka: Stapiz, Działanie: regeneracja i nawilżenie, Typ włosów: suche i zniszczone, Pojemność opakowania: 1000 ml, Opakowanie: butelka z pompką, Kolor włosów: brak informacji, Wielkość: Produkt pełnowymiarowy\"
  },
  {
    \"name\": \"Peeling Kawitacyjny 5w1 Herz Medical Bezprzewodowy\",
    \"price\": 179,
    \"imageURL\": \"https://a.allegroimg.com/s180/118520/ed625dbc4359bda6efd14336043f/Peeling-Kawitacyjny-5w1-Herz-Medical-Bezprzewodowy\",
    \"desc\": \"Stan: Nowy, Marka: Herz Medical Instruments\"
  },
  {
    \"name\": \"Zestaw kosmetyków do ciała Marshmallow Ziaja\",
    \"price\": 46.92,
    \"imageURL\": \"https://a.allegroimg.com/s180/11dc19/916878e34539884218481d0d76c7/Zestaw-kosmetykow-do-ciala-Marshmallow-Ziaja\",
    \"desc\": \"Stan: Nowy, Marka: Ziaja\"
  },
  {
    \"name\": \"ZESTAW KOSMETYKÓW DLA NASTOLATKI PREZENT\",
    \"price\": 24.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/110760/6446ab75435185979f402aa79d87/ZESTAW-KOSMETYKOW-DLA-NASTOLATKI-PREZENT\",
    \"desc\": \"Stan: Nowy, Marka: Douglas\"
  },
  {
    \"name\": \"Depilator Laserowy IPL Herz Medical Ciało, Bikini\",
    \"price\": 349,
    \"imageURL\": \"https://a.allegroimg.com/s180/110f56/b587e604431fb2b72eff6947bdc0/Depilator-Laserowy-IPL-Herz-Medical-Cialo-Bikini\",
    \"desc\": \"Stan: Nowy, Marka: Herz Medical Instruments, Zasilanie: sieciowe, Sposób depilacji: impuls światła\"
  },
  {
    \"name\": \"DOUGLAS ZESTAW DO MAKIJAŻU PIELĘGNACJI PREZENT\",
    \"price\": 37.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/113886/b3b39634429582b5b5dc651a444f/DOUGLAS-ZESTAW-DO-MAKIJAZU-PIELEGNACJI-PREZENT\",
    \"desc\": \"Stan: Nowy, Marka: Douglas\"
  },
  {
    \"name\": \"Depilator laserowy IPL LOVINE Gentle Light PRO\",
    \"price\": 295,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ea90/dcae2be24a0790070efc343ac805/Depilator-laserowy-IPL-LOVINE-Gentle-Light-PRO\",
    \"desc\": \"Stan: Nowy, Marka: Lovine, Zasilanie: sieciowe, Sposób depilacji: impuls światła\"
  },
  {
    \"name\": \"LOKÓWKA DO WŁOSÓW KRĘCENIA LOKÓW CERAMICZNA MOCNA\",
    \"price\": 40,
    \"imageURL\": \"https://a.allegroimg.com/s180/11f108/3af1f9b24705a5f853985bfaa71b/LOKOWKA-DO-WLOSOW-KRECENIA-LOKOW-CERAMICZNA-MOCNA\",
    \"desc\": \"Stan: Nowy, Typ: lokówka tradycyjna, Powłoka: ceramiczna, turmalinowa, Moc: 25 W, Regulacja temperatury: nie\"
  },
  {
    \"name\": \"Pantene Pro-V Repair szampon + odżywka do włosów\",
    \"price\": 69.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/111404/3fc3485747f180745d62f0454690/Pantene-Pro-V-Repair-szampon-odzywka-do-wlosow\",
    \"desc\": \"Stan: Nowy, Marka: Pantene, Działanie: regeneracja i nawilżenie, Typ włosów: suche i zniszczone, Pojemność opakowania: 1000 ml, Opakowanie: butelka z pompką, Kolor włosów: do każdego koloru włosów, Wielkość: Produkt pełnowymiarowy\"
  },
  {
    \"name\": \"SUSZARKA DO WŁOSÓW JONIZACJA DYFUZOR MOCNA 2200W\",
    \"price\": 117.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11f355/c45caa084dc2abd3b6b47c7d1f48/SUSZARKA-DO-WLOSOW-JONIZACJA-DYFUZOR-MOCNA-2200W\",
    \"desc\": \"Stan: Nowy, Moc: 2200 W, Funkcje: zimny nadmuch\"
  },
  {
    \"name\": \"DOUGLAS ZESTAW KOSMETYKÓW DLA KOBIET PREZENT\",
    \"price\": 27.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a395/76a48ea74991812cc435ee4df475/DOUGLAS-ZESTAW-KOSMETYKOW-DLA-KOBIET-PREZENT\",
    \"desc\": \"Stan: Nowy, Marka: Douglas\"
  },
  {
    \"name\": \"MEZOTERAPIA LOVINE 4w1 TERAPIA ŚWIATŁEM LIFTING\",
    \"price\": 195.55,
    \"imageURL\": \"https://a.allegroimg.com/s180/1152ac/ecc396cf4ef5834a7109f18aded1/MEZOTERAPIA-LOVINE-4w1-TERAPIA-SWIATLEM-LIFTING\",
    \"desc\": \"Stan: Nowy, Marka: Lovine, Typ: pen, Rodzaj mezoterapii: bezigłowa\"
  },
  {
    \"name\": \"Mezoterapia Bezigłowa SKINLOVERS Masażer 5w1 BONUS\",
    \"price\": 449,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ac27/46ff6c984fe7bfb5250112605969/Mezoterapia-Beziglowa-SKINLOVERS-Masazer-5w1-BONUS\",
    \"desc\": \"Stan: Nowy, Marka: inna marka (SkinLovers), Typ: roller, Rodzaj mezoterapii: bezigłowa\"
  },
  {
    \"name\": \"LOKÓWKA DO WŁOSÓW KRĘCENIA LOKÓW CERAMICZNA 32mm\",
    \"price\": 49.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d851/18a76ae24e7f9a0e4e96b6bc3c0f/LOKOWKA-DO-WLOSOW-KRECENIA-LOKOW-CERAMICZNA-32mm\",
    \"desc\": \"Stan: Nowy, Typ: lokówka automatyczna, Regulacja temperatury: tak\"
  },
  {
    \"name\": \"SERUM DO TWARZY Z WITAMINĄ C FACE FACTS\",
    \"price\": 14.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11f2ec/455e9ba345b4ad3c0fed20852977/SERUM-DO-TWARZY-Z-WITAMINA-C-FACE-FACTS\",
    \"desc\": \"Stan: Nowy, Marka: inna marka (FACE FACTS), Typ skóry: Do wszystkich typów skóry, Działanie: odżywiający, Opakowanie: butelka z pipetą, Wielkość: Produkt pełnowymiarowy, Pojemność: 30 ml\"
  },
  {
    \"name\": \"DEPILATOR BRAUN 3-420 TRYMER BIKINI FG1100 3420\",
    \"price\": 179,
    \"imageURL\": \"https://a.allegroimg.com/s180/039afe/ff61ac134f5d948e472150c18b6e/DEPILATOR-BRAUN-3-420-TRYMER-BIKINI-FG1100-3420\",
    \"desc\": \"Stan: Nowy, Marka: Braun, Zasilanie: sieciowe, Sposób depilacji: pęsety\"
  },
  {
    \"name\": \"Nawilżający krem z kwasem hialuronowym 100ml APIS\",
    \"price\": 27.05,
    \"imageURL\": \"https://a.allegroimg.com/s180/111453/e6976ca64e8d906e38fb5e109a36/Nawilzajacy-krem-z-kwasem-hialuronowym-100ml-APIS\",
    \"desc\": \"Stan: Nowy, Marka: Apis, Rodzaj: brak informacji, Typ skóry: Sucha, Działanie: nawilżający, Konsystencja: krem, Wielkość: Produkt pełnowymiarowy, Pojemność: 100 ml, Opakowanie: butelka z pompką\"
  },
  {
    \"name\": \"PEELING KAWITACYJNY BEZPRZEWODOWY 5w1 DO TWARZY\",
    \"price\": 65.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/118017/e12434c64c9a9823e282e9e259de/PEELING-KAWITACYJNY-BEZPRZEWODOWY-5w1-DO-TWARZY\",
    \"desc\": \"Stan: Nowy, Marka: Retoo\"
  },
  {
    \"name\": \"Rituals The Ritual of Sakura zestaw upominkowy\",
    \"price\": 69.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11fd8d/922a32b040cb97f15ed755148f8d/Rituals-The-Ritual-of-Sakura-zestaw-upominkowy\",
    \"desc\": \"Stan: Nowy, Marka: Rituals\"
  },
  {
    \"name\": \"Zestaw BOTOKS Do Włosów BOTOX na Włosy MEGA EFEKT\",
    \"price\": 79.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11fdfa/61c3b9dc4c4f8832d25e64263275/Zestaw-BOTOKS-Do-Wlosow-BOTOX-na-Wlosy-MEGA-EFEKT\",
    \"desc\": \"Stan: Nowy, Marka: Envie, Typ włosów: suche i zniszczone, Działanie: regeneracja i nawilżenie, Kolor włosów: do każdego koloru włosów, Typ: do spłukiwania, Pojemność opakowania: 150 ml, Opakowanie: butelka z pompką, Wielkość: Produkt pełnowymiarowy\"
  },
  {
    \"name\": \"DEPILATOR LASEROWY IPL Depilaze DO CIAŁA BIKINI\",
    \"price\": 419.97,
    \"imageURL\": \"https://a.allegroimg.com/s180/1126e9/5651dd3c4568b9ac35e867d195cb/DEPILATOR-LASEROWY-IPL-Depilaze-DO-CIALA-BIKINI\",
    \"desc\": \"Stan: Nowy, Marka: inna marka (Depilaze), Zasilanie: sieciowe, Sposób depilacji: impuls światła\"
  },
  {
    \"name\": \"GREEN TEA MASK STICK Maseczka Oczyszczająca wągry\",
    \"price\": 40,
    \"imageURL\": \"https://a.allegroimg.com/s180/114f30/104dbb404598b37d50f4017f691f/GREEN-TEA-MASK-STICK-Maseczka-Oczyszczajaca-wagry\",
    \"desc\": \"Stan: Nowy, Marka: Melao, Typ skóry: Do wszystkich typów skóry, Działanie: oczyszczający, Postać: kremowa, Wielkość: Produkt pełnowymiarowy, Pojemność: 40 ml, Opakowanie: roll-on, Przeznaczenie: do twarzy\"
  },
  {
    \"name\": \"Falownica do Włosów Lokówka Karbownica Fale Loki 2\",
    \"price\": 49.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/1105cf/a54ed09d4081b9a110b69c92bcfe/Falownica-do-Wlosow-Lokowka-Karbownica-Fale-Loki-2\",
    \"desc\": \"Stan: Nowy, Typ: lokówka automatyczna, Powłoka: inna, Moc: 45 W, Regulacja temperatury: tak\"
  },
  {
    \"name\": \"ZESTAW KOSMETYKÓW HIMALAYA DLA NASTOLATKI PREZENT\",
    \"price\": 24.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11adc5/af9c6ad942a7849ec44719e2247a/ZESTAW-KOSMETYKOW-HIMALAYA-DLA-NASTOLATKI-PREZENT\",
    \"desc\": \"Stan: Nowy, Marka: Himalaya\"
  },
  {
    \"name\": \"PILATEN PŁATKI KOLAGENOWE POD OCZY MASKA CRYSTAL\",
    \"price\": 1.2,
    \"imageURL\": \"https://a.allegroimg.com/s180/1195bb/3da1596542e5825d0df3ef5ef7e7/PILATEN-PLATKI-KOLAGENOWE-POD-OCZY-MASKA-CRYSTAL\",
    \"desc\": \"Stan: Nowy, Marka: Pilaten, Typ skóry: Dojrzała, Działanie: nawilżający, Postać: w płacie, Wielkość: Produkt pełnowymiarowy, Pojemność: 6 ml, Opakowanie: saszetka, Przeznaczenie: pod oczy\"
  },
  {
    \"name\": \"PERUKA blond brąz ombre DŁUGIE WŁOSY fale 60 cm\",
    \"price\": 89.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/114a01/25d4015b46d697ef3b37815556a9/PERUKA-blond-braz-ombre-DLUGIE-WLOSY-fale-60-cm\",
    \"desc\": \"Stan: Nowy, Marka: Luvu, Typ włosów: syntetyczne, Fryzura: włosy długie\"
  },
  {
    \"name\": \"LOKÓWKA DO WŁOSÓW KRĘCENIA LOKÓW CERAMICZNA 9 mm\",
    \"price\": 62.79,
    \"imageURL\": \"https://a.allegroimg.com/s180/115f15/9ff4d4864cada74fe9067458f0a6/LOKOWKA-DO-WLOSOW-KRECENIA-LOKOW-CERAMICZNA-9-mm\",
    \"desc\": \"Stan: Nowy, Typ: lokówka tradycyjna, Powłoka: ceramiczna, Moc: 25 W, Regulacja temperatury: nie\"
  },
  {
    \"name\": \"Masażer Roller 3D do Twarzy Ciała Wibracyjny Kulki\",
    \"price\": 23.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c5b4/3bdc1de141e3918c570aea07bdf2/Masazer-Roller-3D-do-Twarzy-Ciala-Wibracyjny-Kulki\",
    \"desc\": \"Stan: Nowy, Marka: Soulima, Rodzaj: masażer\"
  },
  {
    \"name\": \"DEPILATOR LASEROWY IPL\",
    \"price\": 199.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/117bbc/c872753a469389fe61d166beaa17/DEPILATOR-LASEROWY-IPL\",
    \"desc\": \"Stan: Nowy, Marka: Lunar Studio, Zasilanie: sieciowe, Sposób depilacji: impuls światła\"
  },
  {
    \"name\": \"Depilator Laserowy IPL do Twarzy i Ciała 999999\",
    \"price\": 199.98,
    \"imageURL\": \"https://a.allegroimg.com/s180/11dcd6/5bfaf06f4bb4b83550137017a159/Depilator-Laserowy-IPL-do-Twarzy-i-Ciala-999999\",
    \"desc\": \"Stan: Nowy, Marka: inna marka (CIICII), Zasilanie: sieciowe, Sposób depilacji: impuls światła\"
  },
  {
    \"name\": \"Pantene Rosewater szampon+odżywka + maska+olejek\",
    \"price\": 59.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11cfe8/eae0db75451c8836db78c4f58527/Pantene-Rosewater-szampon-odzywka-maska-olejek\",
    \"desc\": \"Stan: Nowy, Marka: Pantene, Działanie: dodatkowa objętość, Typ włosów: do każdego typu włosów, Pojemność opakowania: 300 ml, Opakowanie: butelka, Kolor włosów: do każdego koloru włosów, Wielkość: Produkt pełnowymiarowy\"
  },
  {
    \"name\": \"GOLARKA MĘSKA MASZYNKA DO GOLENIA TRYMER 3W1\",
    \"price\": 69.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ac33/f96bb276450a997bfd78ffe58a30/GOLARKA-MESKA-MASZYNKA-DO-GOLENIA-TRYMER-3W1\",
    \"desc\": \"Stan: Nowy, Marka: Geemy, Rodzaj: inny\"
  },
  {
    \"name\": \"Włosy doczepiane naturalne CLIP-IN 50-55cm 3 taśmy\",
    \"price\": 124.99,
    \"imageURL\": \"https://1.allegroimg.com/s180/035fb0/458162e746da9b83c11af9f55f71/Wlosy-doczepiane-naturalne-CLIP-IN-50-55cm-3-tasmy\",
    \"desc\": \"Stan: Nowy, Marka: Star My Hair, Typ włosów: naturalne, Fryzura: włosy długie\"
  },
  {
    \"name\": \"PODGRZEWACZ WOSK TWARDY W PUSZCE DEPILACJA 100 W\",
    \"price\": 31.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d93d/d65c19944f72b572c4d2bf3fd92b/PODGRZEWACZ-WOSK-TWARDY-W-PUSZCE-DEPILACJA-100-W\",
    \"desc\": \"Stan: Nowy, Marka: Activeshop\"
  },
  {
    \"name\": \"60 el ZESTAW MAGIC LEVERAG WAŁKI włosy PAPILOTY !!\",
    \"price\": 48.8,
    \"imageURL\": \"https://a.allegroimg.com/s180/1192f3/6be610f740eba4a9bebbfd734e02/60-el-ZESTAW-MAGIC-LEVERAG-WALKI-wlosy-PAPILOTY\",
    \"desc\": \"Marka: inna marka (inna), Liczba sztuk: 60 szt., Rodzaj: papiloty\"
  },
  {
    \"name\": \"Kallos Keratin Maska Odżywka z Keratyną 1000ml\",
    \"price\": 13.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/01df62/170c8cd54aa799ae35f91031485f/Kallos-Keratin-Maska-Odzywka-z-Keratyna-1000ml\",
    \"desc\": \"Stan: Nowy, Marka: Kallos, Kolor włosów: do każdego koloru włosów, Typ włosów: cienkie i delikatne, Działanie: regeneracja i nawilżenie, Pojemność opakowania: 1000 ml, Opakowanie: słoiczek, Wielkość: Produkt pełnowymiarowy\"
  },
  {
    \"name\": \"Pantene Rosewater szampon+odżywka + maska+olejek\",
    \"price\": 59.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11cfe8/eae0db75451c8836db78c4f58527/Pantene-Rosewater-szampon-odzywka-maska-olejek\",
    \"desc\": \"Stan: Nowy, Marka: Pantene, Działanie: dodatkowa objętość, Typ włosów: do każdego typu włosów, Pojemność opakowania: 300 ml, Opakowanie: butelka, Kolor włosów: do każdego koloru włosów, Wielkość: Produkt pełnowymiarowy\"
  },
  {
    \"name\": \"Jantar Zestaw Prezentowy Szampon Odżywka Wcierka\",
    \"price\": 32.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/114f94/83d1bfd648c99b5e4c1e3187fbc9/Jantar-Zestaw-Prezentowy-Szampon-Odzywka-Wcierka\",
    \"desc\": \"Stan: Nowy, Marka: Farmona\"
  },
  {
    \"name\": \"AVON MEGA Zestaw Cashmere z Wodą Perfumowaną\",
    \"price\": 53.79,
    \"imageURL\": \"https://a.allegroimg.com/s180/1161c8/8ca3602640ea92ef0bad2ffe1755/AVON-MEGA-Zestaw-Cashmere-z-Woda-Perfumowana\",
    \"desc\": \"Stan: Nowy, Marka: Avon\"
  },
  {
    \"name\": \"Pantene Pro-V Repair szampon+odżywka+maska+olejek\",
    \"price\": 89.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c7eb/cbeb22b4454396514c7c47a5be0d/Pantene-Pro-V-Repair-szampon-odzywka-maska-olejek\",
    \"desc\": \"Stan: Nowy, Marka: Pantene, Działanie: regeneracja i nawilżenie, Typ włosów: suche i zniszczone, Pojemność opakowania: 400 ml, Opakowanie: butelka, Kolor włosów: do każdego koloru włosów, Wielkość: Produkt pełnowymiarowy\"
  },
  {
    \"name\": \"Gillette Mach3 Start Ostrza wkłady 10 sztuk\",
    \"price\": 79.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/294d88/29449c2447b596fd40c9e23ae07e/Gillette-Mach3-Start-Ostrza-wklady-10-sztuk\",
    \"desc\": \"Stan: Nowy, Marka: Gillette\"
  },
  {
    \"name\": \"ZESTAW ŁYŻECZKI UNNY USUWANIA WĄGRÓW ZASKÓRNIKÓW\",
    \"price\": 5.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/113e6c/8711b47540c686be9bd323bfb3a6/ZESTAW-LYZECZKI-UNNY-USUWANIA-WAGROW-ZASKORNIKOW\",
    \"desc\": \"Stan: Nowy, Marka: inna marka (Beauty Tool Series)\"
  },
  {
    \"name\": \"ANWEN GROW ME TENDER ZIOŁOWA WCIERKA ROZGRZEWAJĄCA\",
    \"price\": 27.8,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ed97/cd926eeb41dea0612851e9c50334/ANWEN-GROW-ME-TENDER-ZIOLOWA-WCIERKA-ROZGRZEWAJACA\",
    \"desc\": \"Marka: Anwen, Rodzaj: wcierka\"
  },
  {
    \"name\": \"PROSTOWNICA DO WŁOSÓW LOKÓWKA 2w1 CERAMICZNA LCD\",
    \"price\": 79,
    \"imageURL\": \"https://a.allegroimg.com/s180/118cac/bf7e7df64b17bb250861268c1342/PROSTOWNICA-DO-WLOSOW-LOKOWKA-2w1-CERAMICZNA-LCD\",
    \"desc\": \"Stan: Nowy, Typ: prostownica, Powłoka: ceramiczna, turmalinowa, Regulacja temperatury: tak\"
  },
  {
    \"name\": \"Pantene Pro-V Repair szampon + odżywka do włosów\",
    \"price\": 69.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/111404/3fc3485747f180745d62f0454690/Pantene-Pro-V-Repair-szampon-odzywka-do-wlosow\",
    \"desc\": \"Stan: Nowy, Marka: Pantene, Działanie: regeneracja i nawilżenie, Typ włosów: suche i zniszczone, Pojemność opakowania: 1000 ml, Opakowanie: butelka z pompką, Kolor włosów: do każdego koloru włosów, Wielkość: Produkt pełnowymiarowy\"
  },
  {
    \"name\": \"PILATEN ORYGINALNA MASECZKA KOLAGENOWA NA USTA 9g\",
    \"price\": 1.2,
    \"imageURL\": \"https://a.allegroimg.com/s180/1100a6/a24d19a942baacc76ceaee7ddd13/PILATEN-ORYGINALNA-MASECZKA-KOLAGENOWA-NA-USTA-9g\",
    \"desc\": \"Stan: Nowy, Marka: Pilaten, Typ skóry: Do wszystkich typów skóry, Działanie: nawilżający, Postać: żelowa, Wielkość: Produkt pełnowymiarowy, Pojemność: 7 ml, Opakowanie: saszetka, Przeznaczenie: na usta\"
  },
  {
    \"name\": \"SZCZOTKA SUSZARKA DO WŁOSÓW PROSTOWNICA 1000W 4W1\",
    \"price\": 38,
    \"imageURL\": \"https://a.allegroimg.com/s180/1155da/581118714694916ec83a2618392f/SZCZOTKA-SUSZARKA-DO-WLOSOW-PROSTOWNICA-1000W-4W1\",
    \"desc\": \"Stan: Nowy, Moc: 1000 W, Funkcje: jonizacja\"
  },
  {
    \"name\": \"PODGRZEWACZ WOSKU + TWARDY WOSK 600g+100 PATYCZKÓW\",
    \"price\": 58.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1103de/c3a0e6c843e6a0b3aa9537817194/PODGRZEWACZ-WOSKU-TWARDY-WOSK-600g-100-PATYCZKOW\",
    \"desc\": \"Marka: Retoo\"
  },
  {
    \"name\": \"Mikrodermabrazja diamentowa mobilna Beauty Limited\",
    \"price\": 168.15,
    \"imageURL\": \"https://a.allegroimg.com/s180/113c8a/e99960bd45f38ed0ed02fa664368/Mikrodermabrazja-diamentowa-mobilna-Beauty-Limited\",
    \"desc\": \"Stan: Nowy, Marka: Beauty Limited\"
  },
  {
    \"name\": \"PROSTOWNICA LOKÓWKA DO WŁOSÓW 2w1ceramiczna LOVINE\",
    \"price\": 113.49,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c196/2d27798b47bf86b3145162207370/PROSTOWNICA-LOKOWKA-DO-WLOSOW-2w1ceramiczna-LOVINE\",
    \"desc\": \"Stan: Nowy, Typ: prostownica, Powłoka: ceramiczna, Regulacja temperatury: tak\"
  },
  {
    \"name\": \"SUSZARKA DO WŁOSÓW PRO JONIZACJA MOCNA\",
    \"price\": 38,
    \"imageURL\": \"https://a.allegroimg.com/s180/115a91/04ac817a49af9d48e7b65a0559f0/SUSZARKA-DO-WLOSOW-PRO-JONIZACJA-MOCNA\",
    \"desc\": \"Stan: Nowy, Moc: 800 W, Funkcje: jonizacja, zimny nadmuch\"
  },
  {
    \"name\": \"DEPILATOR LASEROWY PHILIPS LUMEA IPL 9000 BRI955 !\",
    \"price\": 1897.97,
    \"imageURL\": \"https://a.allegroimg.com/s180/110335/86c30d3d485dadb95faddb61e727/DEPILATOR-LASEROWY-PHILIPS-LUMEA-IPL-9000-BRI955\",
    \"desc\": \"Stan: Nowy, Marka: Philips, Zasilanie: sieciowo-akumulatorowe, Sposób depilacji: impuls światła\"
  },
  {
    \"name\": \"PROSTOWNICA DO WŁOSÓW LOKÓWKA 2w1 CERAMICZNA LCD\",
    \"price\": 79,
    \"imageURL\": \"https://a.allegroimg.com/s180/118cac/bf7e7df64b17bb250861268c1342/PROSTOWNICA-DO-WLOSOW-LOKOWKA-2w1-CERAMICZNA-LCD\",
    \"desc\": \"Stan: Nowy, Typ: prostownica, Powłoka: ceramiczna, turmalinowa, Regulacja temperatury: tak\"
  },
  {
    \"name\": \"Ziaja zestaw kosmetyków marshmallow\",
    \"price\": 49.39,
    \"imageURL\": \"https://a.allegroimg.com/s180/11edc5/6ae2ceaf442c8138ed052acf02eb/Ziaja-zestaw-kosmetykow-marshmallow\",
    \"desc\": \"Stan: Nowy, Marka: Ziaja\"
  },
  {
    \"name\": \"URZĄDZENIE OCZYSZCZANIA TWARZY MASAŻER SZCZOTECZKA\",
    \"price\": 40,
    \"imageURL\": \"https://a.allegroimg.com/s180/115cc9/9f2937a941238248ca0ab2286914/URZADZENIE-OCZYSZCZANIA-TWARZY-MASAZER-SZCZOTECZKA\",
    \"desc\": \"Stan: Nowy, Marka: Proficare, Rodzaj: elektryczna, Zasilanie: akumulatorowe\"
  },
  {
    \"name\": \"ŁADNA LEKKA PROSTOWNICA DO WŁOSÓW CERAMICZNA\",
    \"price\": 46.55,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ea0c/6cb1309f4fbd8cd9f7f3cde91e77/LADNA-LEKKA-PROSTOWNICA-DO-WLOSOW-CERAMICZNA\",
    \"desc\": \"Stan: Nowy, Typ: prostownica, Powłoka: ceramiczna, Regulacja temperatury: nie\"
  },
  {
    \"name\": \"Gillette Fusion5 Start Ostrza wkłady 8 sztuk\",
    \"price\": 99.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/291afa/d51e5ce947469417e17fc8b87897/Gillette-Fusion5-Start-Ostrza-wklady-8-sztuk\",
    \"desc\": \"Stan: Nowy, Marka: Gillette\"
  },
  {
    \"name\": \"LOKÓWKA DO KRĘCENIA WŁOSÓW LOKÓW CERAMICZNA LOKI\",
    \"price\": 40,
    \"imageURL\": \"https://a.allegroimg.com/s180/11f162/7a26d89a45e5b06e2aa369ee7b16/LOKOWKA-DO-KRECENIA-WLOSOW-LOKOW-CERAMICZNA-LOKI\",
    \"desc\": \"Stan: Nowy, Typ: lokówka automatyczna, Regulacja temperatury: tak\"
  },
  {
    \"name\": \"PEELING KAWITACYJNY DO TWARZY BEZPRZEWODOWY 5W1\",
    \"price\": 64.59,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b752/803463404c948d2b75a08d03cd49/PEELING-KAWITACYJNY-DO-TWARZY-BEZPRZEWODOWY-5W1\",
    \"desc\": \"Stan: Nowy, Marka: Beautifly\"
  },
  {
    \"name\": \"LOreal Absolut Repair Szampon Odbudowujący 500ml\",
    \"price\": 68.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/1153b3/730cc4a74865a4c9d90a6c74556f/LOreal-Absolut-Repair-Szampon-Odbudowujacy-500ml\",
    \"desc\": \"Stan: Nowy, Marka: L'Oréal Professionnel, Działanie: regeneracja i nawilżenie, Typ włosów: suche i zniszczone, Pojemność opakowania: 500 ml, Opakowanie: butelka z pompką, Kolor włosów: do każdego koloru włosów, Wielkość: Produkt pełnowymiarowy\"
  },
  {
    \"name\": \"Pantene Pro-V Repair szampon+odżywka+maska+olejek\",
    \"price\": 89.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c7eb/cbeb22b4454396514c7c47a5be0d/Pantene-Pro-V-Repair-szampon-odzywka-maska-olejek\",
    \"desc\": \"Stan: Nowy, Marka: Pantene, Działanie: regeneracja i nawilżenie, Typ włosów: suche i zniszczone, Pojemność opakowania: 400 ml, Opakowanie: butelka, Kolor włosów: do każdego koloru włosów, Wielkość: Produkt pełnowymiarowy\"
  },
  {
    \"name\": \"Rituals The Ritual of Ayurveda zestaw upominkowy\",
    \"price\": 99.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ee76/7bbed1914650b50a5395b80152c8/Rituals-The-Ritual-of-Ayurveda-zestaw-upominkowy\",
    \"desc\": \"Stan: Nowy, Marka: Rituals\"
  },
  {
    \"name\": \"WAŁEK OPASKA DO KRĘCENIA WŁOSÓW LOKÓW PAPILOTY\",
    \"price\": 16.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/1142ab/c59d6167464eaac78a67307f2d43/WALEK-OPASKA-DO-KRECENIA-WLOSOW-LOKOW-PAPILOTY\",
    \"desc\": \"Marka: Deni Carte, Liczba sztuk: 1 szt., Rodzaj: papiloty\"
  },
  {
    \"name\": \"OLAPLEX NO 3 HAIR PROTECTION odbudowująca kuracja\",
    \"price\": 99.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c8fd/bd3e86b749afb3e6a61a19824ed9/OLAPLEX-NO-3-HAIR-PROTECTION-odbudowujaca-kuracja\",
    \"desc\": \"Stan: Nowy, Marka: Olaplex, Typ włosów: suche i zniszczone, Działanie: regeneracja i nawilżenie, Kolor włosów: do każdego koloru włosów, Typ: do spłukiwania, Pojemność opakowania: 100 ml, Opakowanie: butelka, Wielkość: Produkt pełnowymiarowy\"
  },
  {
    \"name\": \"Rituals The Rituals of Karma zestaw upominkowy\",
    \"price\": 159.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/2942d6/15e0833547419541273000e18125/Rituals-The-Rituals-of-Karma-zestaw-upominkowy\",
    \"desc\": \"Stan: Nowy, Marka: Rituals\"
  },
  {
    \"name\": \"PROSTOWNICA LOKÓWKA DO WŁOSÓW 2w1ceramiczna LOVINE\",
    \"price\": 113.49,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c196/2d27798b47bf86b3145162207370/PROSTOWNICA-LOKOWKA-DO-WLOSOW-2w1ceramiczna-LOVINE\",
    \"desc\": \"Stan: Nowy, Typ: prostownica, Powłoka: ceramiczna, Regulacja temperatury: tak\"
  },
  {
    \"name\": \"Gillette Fusion5 Start Ostrza wkłady 8 sztuk\",
    \"price\": 99.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/291afa/d51e5ce947469417e17fc8b87897/Gillette-Fusion5-Start-Ostrza-wklady-8-sztuk\",
    \"desc\": \"Stan: Nowy, Marka: Gillette\"
  }
]`);

const c = gifts as BaseGift[];

export default c;
