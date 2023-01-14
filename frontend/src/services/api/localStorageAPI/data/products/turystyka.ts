import type { BaseGift } from '../gifts';

const gifts: unknown = JSON.parse(`[
  {
    \"name\": \"SZPERACZ LATARKA AKUMULATOROWA POWERBANK LED\",
    \"price\": 149.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/112da1/f80ac1844c44a6f51b498c61f4fb/SZPERACZ-LATARKA-AKUMULATOROWA-POWERBANK-LED\",
    \"desc\": \"Stan: Nowy, Marka: Falcon, Rodzaj: reflektor i szperacz\"
  },
  {
    \"name\": \"Materac Dmuchany Welurowy Łóżko Bestway 2os Pompką\",
    \"price\": 109.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/117190/4148972e449a8cc4db21e8886233/Materac-Dmuchany-Welurowy-Lozko-Bestway-2os-Pompka\",
    \"desc\": \"Stan: Nowy, Marka: Bestway, Typ: dwuosobowy, Długość: 191 cm, Szerokość produktu: 137 cm, Grubość: 22 cm\"
  },
  {
    \"name\": \"KUCHENKA GAZOWA TURYSTYCZNA POLOWA 2W1 PRZENOŚNA\",
    \"price\": 78.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/1152d7/5bcfa14746378b2d4b8770af33c5/KUCHENKA-GAZOWA-TURYSTYCZNA-POLOWA-2W1-PRZENOSNA\",
    \"desc\": \"Stan: Nowy, Rodzaj: gazowe wolnostojące, Marka: inna marka (Logic)\"
  },
  {
    \"name\": \"WALIZKA MAŁA PODRÓŻNA TORBA KÓLKA BAGAŻ EXCLUSIVE\",
    \"price\": 129.19,
    \"imageURL\": \"https://a.allegroimg.com/s180/112ce0/8622117b4a049e0b39c46e1f56b3/WALIZKA-MALA-PODROZNA-TORBA-KOLKA-BAGAZ-EXCLUSIVE\",
    \"desc\": \"Stan: Nowy, Marka: Bagia, Wielkość: kabinowa, Materiał dominujący: ABS, Kolor: beżowy, czarny, granatowy, różowy, srebrny, szary, złoty, Wysokość: 55 cm, Szerokość (dłuższy bok): 37 cm, Głębokość (krótszy bok): 20 cm\"
  },
  {
    \"name\": \"WOJSKOWY SURVIVALOWY MEGA ZESTAW PRZEŻYCIA 62w1\",
    \"price\": 139,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c022/202927df4c548da79d927a9d9f18/WOJSKOWY-SURVIVALOWY-MEGA-ZESTAW-PRZEZYCIA-62w1\",
    \"desc\": \"Stan: Nowy, Liczba dodatkowych narzędzi: 30, Marka: BSH\"
  },
  {
    \"name\": \"SZPERACZ LATARKA AKUMULATOROWA POWERBANK LED\",
    \"price\": 149.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/112da1/f80ac1844c44a6f51b498c61f4fb/SZPERACZ-LATARKA-AKUMULATOROWA-POWERBANK-LED\",
    \"desc\": \"Stan: Nowy, Marka: Falcon, Rodzaj: reflektor i szperacz\"
  },
  {
    \"name\": \"WALIZKA DUŻA PODRÓŻNA KÓŁKA BAGAŻ EXCLUSIVE 88 XXL\",
    \"price\": 199,
    \"imageURL\": \"https://a.allegroimg.com/s180/11cdfd/a7544a834cd6b63de193cdb53efe/WALIZKA-DUZA-PODROZNA-KOLKA-BAGAZ-EXCLUSIVE-88-XXL\",
    \"desc\": \"Stan: Nowy, Marka: Bagia, Wielkość: duża, Materiał dominujący: ABS, Kolor: beżowy, brązowy, czarny, czerwony, fioletowy, granatowy, khaki, niebieski, pomarańczowy, różowy, srebrny, szary, turkusowy, zielony, złoty, żółty, Wysokość: 76 cm, Szerokość (dłuższy bok): 51 cm, Głębokość (krótszy bok): 30 cm\"
  },
  {
    \"name\": \"WALIZKA ŚREDNIA PODRÓŻNA KÓŁKA TORBA BAGAŻ ELITE M\",
    \"price\": 178.59,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d629/e888c86d4b38aceff46854fa80cf/WALIZKA-SREDNIA-PODROZNA-KOLKA-TORBA-BAGAZ-ELITE-M\",
    \"desc\": \"Stan: Nowy, Marka: Bagia, Wielkość: średnia, Materiał dominujący: ABS, Kolor: beżowy, czarny, granatowy, różowy, srebrny, szary, złoty, Wysokość: 68 cm, Szerokość (dłuższy bok): 44 cm, Głębokość (krótszy bok): 30 cm\"
  },
  {
    \"name\": \"WALIZKA PODRÓŻNA DUŻA ŚREDNIA MAŁA KUFEREK KÓŁKA L\",
    \"price\": 494,
    \"imageURL\": \"https://a.allegroimg.com/s180/1153ae/8d40d00c4f149a3a58ca397b77ff/WALIZKA-PODROZNA-DUZA-SREDNIA-MALA-KUFEREK-KOLKA-L\",
    \"desc\": \"Stan: Nowy, Marka: Bagia, Wielkość: zestaw, Materiał dominujący: ABS, Kolor: beżowy, brązowy, czarny, czerwony, granatowy, miedziany, niebieski, pomarańczowy, różowy, srebrny, szary, zielony, żółty, Wysokość: 75 cm, Szerokość (dłuższy bok): 50 cm, Głębokość (krótszy bok): 30 cm\"
  },
  {
    \"name\": \"Bielizna termoaktywna BRUBECK DRY Komplet Męska\",
    \"price\": 260.98,
    \"imageURL\": \"https://a.allegroimg.com/s180/111967/059e343d453e97d2fbadf5d1d99c/Bielizna-termoaktywna-BRUBECK-DRY-Komplet-Meska\",
    \"desc\": \"Stan: Nowy, Marka: Brubeck, Kolor: czarny, Materiał dominujący: Poliamid\"
  },
  {
    \"name\": \"Plecak wojskowy WARRIOR 35L turystyczny TAKTYCZNY\",
    \"price\": 99.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11481b/e78d40cc4820ae9244634c16b28b/Plecak-wojskowy-WARRIOR-35L-turystyczny-TAKTYCZNY\",
    \"desc\": \"Stan: Nowy, Marka: RG, Pojemność: 20-40 l, Materiał dominujący: poliester, Kolor dominujący: czarny\"
  },
  {
    \"name\": \"LATARKA TAKTYCZNA WOJSKOWA Z UCHWYTEM AKUMULATOR\",
    \"price\": 49,
    \"imageURL\": \"https://a.allegroimg.com/s180/111914/2b251121470195429dadd2ad6b2e/LATARKA-TAKTYCZNA-WOJSKOWA-Z-UCHWYTEM-AKUMULATOR\",
    \"desc\": \"Stan: Nowy, Marka: inna marka (in), Rodzaj: klasyczna\"
  },
  {
    \"name\": \"NÓŻ SKŁADANY DOMINATOR PARACORD KRZESIWO MORO 4w1\",
    \"price\": 32.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11166a/dba720a64ec4bf9ffc4c59392762/NOZ-SKLADANY-DOMINATOR-PARACORD-KRZESIWO-MORO-4w1\",
    \"desc\": \"Stan: Nowy, Rodzaj: taktyczny, Marka: Dominator\"
  },
  {
    \"name\": \"KUCHENKA GAZOWA TURYSTYCZNA POLOWA 2W1 PRZENOŚNA\",
    \"price\": 89.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d5ec/3403a6bc4cd58d623ca69576d5ce/KUCHENKA-GAZOWA-TURYSTYCZNA-POLOWA-2W1-PRZENOSNA\",
    \"desc\": \"Stan: Nowy, Rodzaj: gazowe wolnostojące, Marka: ASPECO\"
  },
  {
    \"name\": \"PLECAK MĘSKI WOJSKOWY DOMINATOR SHADOW OLIVE\",
    \"price\": 99,
    \"imageURL\": \"https://a.allegroimg.com/s180/114f8f/3e86ee064918b14ff1ed018cde38/PLECAK-MESKI-WOJSKOWY-DOMINATOR-SHADOW-OLIVE\",
    \"desc\": \"Stan: Nowy, Marka: Dominator, Pojemność: 20-40 l, Materiał dominujący: poliester, Kolor dominujący: odcienie zieleni\"
  },
  {
    \"name\": \"MOCNA LATARKA AKUMULATOROWA TAKTYCZNA LED ZOOM P50\",
    \"price\": 52.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11aa85/0f3568ec44b0bab1fdbfc8b6be3a/MOCNA-LATARKA-AKUMULATOROWA-TAKTYCZNA-LED-ZOOM-P50\",
    \"desc\": \"Stan: Nowy, Marka: X-Balog, Rodzaj: klasyczna\"
  },
  {
    \"name\": \"X-BALOG NAJMOCNIEJSZA LATARKA XHP100 USB POWERBANK\",
    \"price\": 139,
    \"imageURL\": \"https://a.allegroimg.com/s180/113e0a/f735f1444fe1878b921725b38834/X-BALOG-NAJMOCNIEJSZA-LATARKA-XHP100-USB-POWERBANK\",
    \"desc\": \"Stan: Nowy, Marka: X-Balog, Rodzaj: klasyczna\"
  },
  {
    \"name\": \"MUMIA CIEPŁY ŚPIWÓR TURYSTYCZNY |KAPTUR|KOMPRESJA\",
    \"price\": 167.7,
    \"imageURL\": \"https://a.allegroimg.com/s180/11fc20/e44806b64aaa90d7b776a766268b/MUMIA-CIEPLY-SPIWOR-TURYSTYCZNY-KAPTUR-KOMPRESJA\",
    \"desc\": \"Rodzaj: syntetyczne, Marka: B-Pro, Długość: 220 cm, Zamek: Lewy\"
  },
  {
    \"name\": \"Kuchenka gazowa turystyczna+kartusze EPK190\",
    \"price\": 89,
    \"imageURL\": \"https://a.allegroimg.com/s180/11fc1b/148801b243048f1927d918087012/Kuchenka-gazowa-turystyczna-kartusze-EPK190\",
    \"desc\": \"Stan: Nowy, Rodzaj: gazowe wolnostojące, Marka: Orgaz\"
  },
  {
    \"name\": \"LATARKA WOJSKOWA TAKTYCZNA SUPER MOCNA USB\",
    \"price\": 45,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b17a/67207eac4742926f6f2b631807d9/LATARKA-WOJSKOWA-TAKTYCZNA-SUPER-MOCNA-USB\",
    \"desc\": \"Stan: Nowy, Marka: inna marka (PTAK DESIGN), Rodzaj: wielofunkcyjna\"
  },
  {
    \"name\": \"ZESTAW 3x LATARKA TAKTYCZNA WOJSKOWA ZOOM +WALIZKA\",
    \"price\": 67.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/113a5a/9d6f8af9495dba1185d367b2facb/ZESTAW-3x-LATARKA-TAKTYCZNA-WOJSKOWA-ZOOM-WALIZKA\",
    \"desc\": \"Stan: Nowy, Marka: inna marka (Falconn), Rodzaj: wielofunkcyjna\"
  },
  {
    \"name\": \"LATARKA LED TAKTYCZNA MEGA MOCNA NA AKUMULATOR USB\",
    \"price\": 129.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/114bc0/620f3dec454aa5596ad2c78a8d70/LATARKA-LED-TAKTYCZNA-MEGA-MOCNA-NA-AKUMULATOR-USB\",
    \"desc\": \"Stan: Nowy, Marka: Smart World, Rodzaj: klasyczna\"
  },
  {
    \"name\": \"PLECAK TURYSTYCZNY SPORTOWY TREKINGOWY MOCNY 30l\",
    \"price\": 45.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11022b/99a6e7c14d8b9ddcd59eade5fff5/PLECAK-TURYSTYCZNY-SPORTOWY-TREKINGOWY-MOCNY-30l\",
    \"desc\": \"Stan: Nowy, Marka: inna (Podaj własną wartość), Pojemność: 20-40 l, Materiał dominujący: poliester, Kolor dominujący: odcienie niebieskiego\"
  },
  {
    \"name\": \"KUCHENKA GAZOWA TURYSTYCZNA PRZENOŚNA W WALIZCE\",
    \"price\": 78.79,
    \"imageURL\": \"https://a.allegroimg.com/s180/112d70/48f10e754662b0830f07f04ce5bb/KUCHENKA-GAZOWA-TURYSTYCZNA-PRZENOSNA-W-WALIZCE\",
    \"desc\": \"Stan: Nowy, Rodzaj: gazowe wolnostojące, Marka: Happy Home\"
  },
  {
    \"name\": \"KUBEK TERMICZNY SMART TERMOS BIDON LED TEMPERATURA\",
    \"price\": 40,
    \"imageURL\": \"https://a.allegroimg.com/s180/11563d/0ceaea934683b03a4d41173dffe6/KUBEK-TERMICZNY-SMART-TERMOS-BIDON-LED-TEMPERATURA\",
    \"desc\": \"Stan: Nowy, Pojemność: 500 ml, Marka: Falcon, Kolor dominujący: czarny\"
  },
  {
    \"name\": \"LAMPKA KEMPINGOWA SOLARNA BLACKOUT POWERBANK 6LED\",
    \"price\": 79,
    \"imageURL\": \"https://a.allegroimg.com/s180/116275/9e2ff0fb42d99c131b9a2b3b4b66/LAMPKA-KEMPINGOWA-SOLARNA-BLACKOUT-POWERBANK-6LED\",
    \"desc\": \"Stan: Nowy, Rodzaj: akumulatorowa, Marka: PSG\"
  },
  {
    \"name\": \"POTĘŻNY NÓŻ Myśliwski Wojskowy Finka Pokrowiec\",
    \"price\": 69,
    \"imageURL\": \"https://a.allegroimg.com/s180/1189fa/633fbd054762a25860e679ec5102/POTEZNY-NOZ-Mysliwski-Wojskowy-Finka-Pokrowiec\",
    \"desc\": \"Stan: Nowy, Rodzaj: turystyczny, Marka: Columbia\"
  },
  {
    \"name\": \"WALIZKA ŚREDNIA PODRÓŻNA KÓŁKA BAGAŻ EXCLUSIVE XL\",
    \"price\": 175.75,
    \"imageURL\": \"https://a.allegroimg.com/s180/110deb/24f18e074b3b9de26ca2ed885119/WALIZKA-SREDNIA-PODROZNA-KOLKA-BAGAZ-EXCLUSIVE-XL\",
    \"desc\": \"Stan: Nowy, Marka: Bagia, Wielkość: średnia, Materiał dominujący: ABS, Kolor: czerwony, fioletowy, granatowy, miedziany, niebieski, różowy, szary, żółty, Wysokość: 66 cm, Szerokość (dłuższy bok): 44 cm, Głębokość (krótszy bok): 25 cm\"
  },
  {
    \"name\": \"Plecak do samolotu torba bagaż podręczny RYANAIR\",
    \"price\": 58.8,
    \"imageURL\": \"https://a.allegroimg.com/s180/113940/d251320041dcb8f2a64e1f8c96d5/Plecak-do-samolotu-torba-bagaz-podreczny-RYANAIR\",
    \"desc\": \"Stan: Nowy, Marka: Perfekcyjny Styl, Kolor: szary, wielokolorowy\"
  },
  {
    \"name\": \"PLECAK TAKTYCZNY TURYSTYCZNY WOJSKOWY XTECH ZIELEŃ\",
    \"price\": 89.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/115084/f4d3c0d24ca59e5944e5fa517e4f/PLECAK-TAKTYCZNY-TURYSTYCZNY-WOJSKOWY-XTECH-ZIELEN\",
    \"desc\": \"Stan: Nowy, Marka: inna (XTECH), Pojemność: 20-40 l, Materiał dominujący: poliester, Kolor dominujący: odcienie zieleni\"
  },
  {
    \"name\": \"Bielizna termoaktywna BRUBECK DRY Komplet Męska\",
    \"price\": 260.98,
    \"imageURL\": \"https://a.allegroimg.com/s180/111967/059e343d453e97d2fbadf5d1d99c/Bielizna-termoaktywna-BRUBECK-DRY-Komplet-Meska\",
    \"desc\": \"Stan: Nowy, Marka: Brubeck, Kolor: czarny, Materiał dominujący: Poliamid\"
  },
  {
    \"name\": \"BIELIZNA TERMOAKTYWNA MĘSKA HI-TEC SORIN ZESTAW\",
    \"price\": 119,
    \"imageURL\": \"https://a.allegroimg.com/s180/11dcc6/71898c994ab3944fa9ddc9c7b0cf/BIELIZNA-TERMOAKTYWNA-MESKA-HI-TEC-SORIN-ZESTAW\",
    \"desc\": \"Stan: Nowy, Marka: Hi-Tec, Kolor: czarny, czerwony, Materiał dominujący: Poliester\"
  },
  {
    \"name\": \"Pojemnik termiczny Termos obiadowy ESBIT Jug 500ml\",
    \"price\": 99.89,
    \"imageURL\": \"https://a.allegroimg.com/s180/113de0/52fe0ec845e1ba44aa9d51469a67/Pojemnik-termiczny-Termos-obiadowy-ESBIT-Jug-500ml\",
    \"desc\": \"Stan: Nowy, Maksymalne utrzymanie ciepła: do 12 h, Pojemność: 0.5 l\"
  },
  {
    \"name\": \"Pojemnik termiczny Termos obiadowy ESBIT Jug 500ml\",
    \"price\": 99.89,
    \"imageURL\": \"https://a.allegroimg.com/s180/113de0/52fe0ec845e1ba44aa9d51469a67/Pojemnik-termiczny-Termos-obiadowy-ESBIT-Jug-500ml\",
    \"desc\": \"Stan: Nowy, Maksymalne utrzymanie ciepła: do 12 h, Pojemność: 0.5 l\"
  },
  {
    \"name\": \"FOX PRZYSTAWKA OGRZEWACZ DO KUCHENKI BUTLI GAZOWEJ\",
    \"price\": 69.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ebea/e72f60224c1482499e0d48994265/FOX-PRZYSTAWKA-OGRZEWACZ-DO-KUCHENKI-BUTLI-GAZOWEJ\",
    \"desc\": \"Stan: Nowy, Rodzaj: brak informacji, Marka: Fox outdoor\"
  },
  {
    \"name\": \"Zestaw narzędzi multitool Spokey 27w1 BOLD latarka\",
    \"price\": 113.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/117e44/39639cfc42fea68c3e3fe67f11e4/Zestaw-narzedzi-multitool-Spokey-27w1-BOLD-latarka\",
    \"desc\": \"Stan: Nowy, Liczba dodatkowych narzędzi: 27, Marka: Spokey\"
  },
  {
    \"name\": \"OGROMNY NÓŻ MYŚLIWSKI 43 CM SURVIVALOWY RAMBO 3\",
    \"price\": 137,
    \"imageURL\": \"https://a.allegroimg.com/s180/119506/c9cf3c4348c0af8ef66dc3e2f86d/OGROMNY-NOZ-MYSLIWSKI-43-CM-SURVIVALOWY-RAMBO-3\",
    \"desc\": \"Stan: Nowy, Rodzaj: taktyczny, Marka: BSH\"
  },
  {
    \"name\": \"PLECAK TURYSTYCZNY SPORTOWY TREKINGOWY MOCNY 40l\",
    \"price\": 79,
    \"imageURL\": \"https://a.allegroimg.com/s180/116e2b/a70945654df4ba95c212677b2201/PLECAK-TURYSTYCZNY-SPORTOWY-TREKINGOWY-MOCNY-40l\",
    \"desc\": \"Stan: Nowy, Marka: inna (Admir), Pojemność: 20-40 l, Materiał dominujący: poliester, Kolor dominujący: odcienie niebieskiego\"
  },
  {
    \"name\": \"KUCHENKA turystyczna GAZOWA polowa + 4x KARTUSZE\",
    \"price\": 134.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/115475/dfe72480438b90e7c3c1e30bd830/KUCHENKA-turystyczna-GAZOWA-polowa-4x-KARTUSZE\",
    \"desc\": \"Stan: Nowy, Rodzaj: gazowe wolnostojące, Marka: inna marka (BDZ-155-A)\"
  },
  {
    \"name\": \"Materac Dmuchany Welurowy Łóżko Bestway 2os Pompką\",
    \"price\": 109.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/117190/4148972e449a8cc4db21e8886233/Materac-Dmuchany-Welurowy-Lozko-Bestway-2os-Pompka\",
    \"desc\": \"Stan: Nowy, Marka: Bestway, Typ: dwuosobowy, Długość: 191 cm, Szerokość produktu: 137 cm, Grubość: 22 cm\"
  },
  {
    \"name\": \"ZESTAW 4X LATARKA LED TAKTYCZNA WOJSKOWA +WALIZKA\",
    \"price\": 74.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11cf55/b66cd1064c4e939a20f2977ab6cf/ZESTAW-4X-LATARKA-LED-TAKTYCZNA-WOJSKOWA-WALIZKA\",
    \"desc\": \"Stan: Nowy, Marka: Falcon, Rodzaj: klasyczna\"
  },
  {
    \"name\": \"ZESTAW PRZETRWANIA SURWIWAL NIEZBĘDNIK 12W1 ZS-3\",
    \"price\": 89,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a1f5/fa12121f42ec82627d1b49c1fc92/ZESTAW-PRZETRWANIA-SURWIWAL-NIEZBEDNIK-12W1-ZS-3\",
    \"desc\": \"Stan: Nowy, Marka: inna marka (specialreplicas)\"
  },
  {
    \"name\": \"DOUGLAS Kosmetyczka damska męska PODRÓŻNA Duża\",
    \"price\": 19.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b37b/23a154fb4d428dd755946d381d18/DOUGLAS-Kosmetyczka-damska-meska-PODROZNA-Duza\",
    \"desc\": \"Stan: Nowy, Rodzaj: rozkładana, Marka: Douglas\"
  },
  {
    \"name\": \"PLECAK MĘSKI WOJSKOWY DOMINATOR SPEAR LASER CZARNY\",
    \"price\": 159,
    \"imageURL\": \"https://a.allegroimg.com/s180/11639c/38d082df46aba675f7c7810396a6/PLECAK-MESKI-WOJSKOWY-DOMINATOR-SPEAR-LASER-CZARNY\",
    \"desc\": \"Stan: Nowy, Marka: Dominator, Pojemność: 20-40 l, Materiał dominujący: poliester, Kolor dominujący: czarny\"
  },
  {
    \"name\": \"PREZENT DLA WĘDKARZA MYŚLIWEGO TERMOS TURYSTYCZNY\",
    \"price\": 148.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11cb9b/37d2560b4bfd8587887cadeeb51a/PREZENT-DLA-WEDKARZA-MYSLIWEGO-TERMOS-TURYSTYCZNY\",
    \"desc\": \"Stan: Nowy, Pojemność: 1.6 l\"
  },
  {
    \"name\": \"Lodówka Turystyczna Przenośna 2w1 12V 220-240 V\",
    \"price\": 119,
    \"imageURL\": \"https://a.allegroimg.com/s180/117bda/d9c7254c49f381be13a8c68b8465/Lodowka-Turystyczna-Przenosna-2w1-12V-220-240-V\",
    \"desc\": \"Stan: Nowy, Rodzaj: elektryczne, Pojemność: do 10 l, Marka: MatMay, Zasilanie: sieciowe, gniazdo zapalniczki samochodowej (12 V)\"
  },
  {
    \"name\": \"NÓŻ SKŁADANY SCYZORYK KANDAR MYŚLIWSKI SURVIVALOWY\",
    \"price\": 89,
    \"imageURL\": \"https://a.allegroimg.com/s180/11485b/39291356471a9cf33788c79ea8e1/NOZ-SKLADANY-SCYZORYK-KANDAR-MYSLIWSKI-SURVIVALOWY\",
    \"desc\": \"Stan: Nowy, Rodzaj: turystyczny, Marka: Kandar\"
  },
  {
    \"name\": \"LATARKA CZOŁOWA LED XPE COB CZOŁÓWKA MAGNES USB\",
    \"price\": 24.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/117ebc/743e1074457497b1003de982a92d/LATARKA-CZOLOWA-LED-XPE-COB-CZOLOWKA-MAGNES-USB\",
    \"desc\": \"Stan: Nowy, Marka: inna marka (Interlook), Rodzaj: czołowa\"
  },
  {
    \"name\": \"WALIZKA DUŻA PODRÓŻNA KÓŁKA TORBA KOLORY XXL BAGIA\",
    \"price\": 224.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1114bc/a19e1ae54b878c76bbbad693ce86/WALIZKA-DUZA-PODROZNA-KOLKA-TORBA-KOLORY-XXL-BAGIA\",
    \"desc\": \"Stan: Nowy, Marka: Bagia, Wielkość: duża, Materiał dominujący: ABS, Kolor: inny kolor, Wysokość: 74 cm, Szerokość (dłuższy bok): 52 cm, Głębokość (krótszy bok): 29 cm\"
  },
  {
    \"name\": \"MULTITOOL NARZĘDZIE WIELOFUKCYJNE DOMINATOR ARMY\",
    \"price\": 49.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/113953/14327af545faaffc0919aa32ccab/MULTITOOL-NARZEDZIE-WIELOFUKCYJNE-DOMINATOR-ARMY\",
    \"desc\": \"Stan: Nowy, Liczba dodatkowych narzędzi: 22, Marka: Dominator\"
  },
  {
    \"name\": \"LAMPKA KEMPINGOWA SOLARNA BLACKOUT POWERBANK 6LED\",
    \"price\": 79,
    \"imageURL\": \"https://a.allegroimg.com/s180/116275/9e2ff0fb42d99c131b9a2b3b4b66/LAMPKA-KEMPINGOWA-SOLARNA-BLACKOUT-POWERBANK-6LED\",
    \"desc\": \"Stan: Nowy, Rodzaj: akumulatorowa, Marka: PSG\"
  },
  {
    \"name\": \"ŚPIWÓR TURYSTYCZNY ZIELONY CIEPŁY 210x75cm\",
    \"price\": 76.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1141c6/0a373f1d4b5ebd1e2f6176341543/SPIWOR-TURYSTYCZNY-ZIELONY-CIEPLY-210x75cm\",
    \"desc\": \"Rodzaj: syntetyczne, Marka: Omna, Temperatura komfortu (T-Comfort): od -30 do -25°C, Długość: 210 cm, Waga po złożeniu: 880 g, Zamek: Prawy\"
  },
  {
    \"name\": \"Kubek termiczny KAMBUKKA ETNA GRIP 500ml termos\",
    \"price\": 145.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/113a0f/dbc6c9b74bfe9e58466e9aef53b7/Kubek-termiczny-KAMBUKKA-ETNA-GRIP-500ml-termos\",
    \"desc\": \"Stan: Nowy, Maksymalne utrzymanie ciepła: do 9 h, Pojemność: 500 ml, Marka: Kambukka, Materiał: stal nierdzewna, Kolor dominujący: czarny\"
  },
  {
    \"name\": \"WALIZKA PODRÓŻNA LEKKA KABINÓWKA RYANAIR 55x40x20\",
    \"price\": 149.8,
    \"imageURL\": \"https://a.allegroimg.com/s180/11508b/aef850ac498f86fb065ecea84d0e/WALIZKA-PODROZNA-LEKKA-KABINOWKA-RYANAIR-55x40x20\",
    \"desc\": \"Stan: Nowy, Marka: Adleys, Wielkość: kabinowa, Materiał dominujący: inny (Materiał tekstylny), Kolor: czarny, czerwony, fioletowy, pomarańczowy, różowy, szary, wielokolorowy, zielony, Wysokość: 50 cm, Szerokość (dłuższy bok): 35 cm, Głębokość (krótszy bok): 15 cm\"
  },
  {
    \"name\": \"MULTITOOL NARZĘDZIE WIELOFUNKCYJNE SCYZORYK 21w1\",
    \"price\": 58.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b5fb/f4dfe4984e87816915293f320cdd/MULTITOOL-NARZEDZIE-WIELOFUNKCYJNE-SCYZORYK-21w1\",
    \"desc\": \"Stan: Nowy, Liczba dodatkowych narzędzi: 21, Marka: Logit\"
  },
  {
    \"name\": \"LATARKA CZOŁOWA CZOŁÓWKA COB 4w1 LAMPKA Z MAGNESEM\",
    \"price\": 19.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c668/75cc585a482ea628094806d86d11/LATARKA-CZOLOWA-CZOLOWKA-COB-4w1-LAMPKA-Z-MAGNESEM\",
    \"desc\": \"Stan: Nowy, Marka: inna marka (XPE T6 XML LED), Rodzaj: czołowa\"
  },
  {
    \"name\": \"PLECAK WOJSKOWY TAKTYCZNY TURYSTYCZNY SURVIVAL\",
    \"price\": 54,
    \"imageURL\": \"https://a.allegroimg.com/s180/1177aa/793f69c940f9ae976a26c0877877/PLECAK-WOJSKOWY-TAKTYCZNY-TURYSTYCZNY-SURVIVAL\",
    \"desc\": \"Stan: Nowy, Marka: inna (I-T), Pojemność: 20-40 l, Materiał dominujący: nylon, Kolor dominujący: czarny\"
  },
  {
    \"name\": \"KUBEK TERMICZNY SMART TERMOS BIDON LED TEMPERATURA\",
    \"price\": 40,
    \"imageURL\": \"https://a.allegroimg.com/s180/11563d/0ceaea934683b03a4d41173dffe6/KUBEK-TERMICZNY-SMART-TERMOS-BIDON-LED-TEMPERATURA\",
    \"desc\": \"Stan: Nowy, Pojemność: 500 ml, Marka: Falcon, Kolor dominujący: czarny\"
  },
  {
    \"name\": \"Latarka Olight Warrior X Pro Black + GRATIS\",
    \"price\": 579,
    \"imageURL\": \"https://a.allegroimg.com/s180/11945c/01602101423aa1c512c0f5d50073/Latarka-Olight-Warrior-X-Pro-Black-GRATIS\",
    \"desc\": \"Stan: Nowy, Marka: Olight, Rodzaj: klasyczna\"
  },
  {
    \"name\": \"MULTITOOL NARZĘDZIE WIELOFUNKCYJNE ZESTAW + ETUI\",
    \"price\": 159.89,
    \"imageURL\": \"https://a.allegroimg.com/s180/11dfaa/2cb8b22e4f62b6f188890b319338/MULTITOOL-NARZEDZIE-WIELOFUNKCYJNE-ZESTAW-ETUI\",
    \"desc\": \"Stan: Nowy, Liczba dodatkowych narzędzi: 13, Marka: Activ/Space\"
  },
  {
    \"name\": \"PLECAK WOJSKOWY TAKTYCZNY duży militarny męski 45L\",
    \"price\": 64.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d2c1/ee1bed16468b8066600c05c3ba44/PLECAK-WOJSKOWY-TAKTYCZNY-duzy-militarny-meski-45L\",
    \"desc\": \"Stan: Nowy, Marka: Kristrade, Pojemność: 41-60 l, Materiał dominujący: nylon, Kolor dominujący: wielokolorowy\"
  },
  {
    \"name\": \"PODRĘCZNA LATARKA AKUMULATOROWA ŁADOWANA LED\",
    \"price\": 6.4,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b4e6/2bfc9a4841e49a73340636264020/PODRECZNA-LATARKA-AKUMULATOROWA-LADOWANA-LED\",
    \"desc\": \"Stan: Nowy, Marka: Vergionic, Rodzaj: miniaturowa\"
  },
  {
    \"name\": \"PLECAK MĘSKI do pracy turystyczny wojskowy DUŻY\",
    \"price\": 59.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11fde7/4be88cd64860b296a9a7199f51c9/PLECAK-MESKI-do-pracy-turystyczny-wojskowy-DUZY\",
    \"desc\": \"Stan: Nowy, Marka: Kristrade, Pojemność: 41-60 l, Materiał dominujący: nylon, Kolor dominujący: wielokolorowy\"
  },
  {
    \"name\": \"BIELIZNA TERMOAKTYWNA MĘSKA TERMICZNA HI-TEC 1 XL\",
    \"price\": 105.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/115187/f48a6535429b918cc28f31660240/BIELIZNA-TERMOAKTYWNA-MESKA-TERMICZNA-HI-TEC-1-XL\",
    \"desc\": \"Stan: Nowy, Marka: Hi-Tec, Kolor: czarny, Materiał dominujący: Poliester\"
  },
  {
    \"name\": \"LATARKA LED TAKTYCZNA AKUMULATOROWA BARDZO MOCNA\",
    \"price\": 40,
    \"imageURL\": \"https://a.allegroimg.com/s180/11638d/8c3c8b7943b2959b997e84d3c2f9/LATARKA-LED-TAKTYCZNA-AKUMULATOROWA-BARDZO-MOCNA\",
    \"desc\": \"Stan: Nowy, Marka: inna marka (Moobilly), Rodzaj: reflektor i szperacz\"
  },
  {
    \"name\": \"SZPERACZ LATARKA AKUMULATOROWA SOLARNA USB LED\",
    \"price\": 29.95,
    \"imageURL\": \"https://a.allegroimg.com/s180/117907/1ab0afa74dd88f38048c06389ed8/SZPERACZ-LATARKA-AKUMULATOROWA-SOLARNA-USB-LED\",
    \"desc\": \"Stan: Nowy, Marka: inna marka (XBAY), Rodzaj: reflektor i szperacz\"
  },
  {
    \"name\": \"SZPERACZ LATARKA AKUMULATOROWA SOLARNA USB LED\",
    \"price\": 29.95,
    \"imageURL\": \"https://a.allegroimg.com/s180/117907/1ab0afa74dd88f38048c06389ed8/SZPERACZ-LATARKA-AKUMULATOROWA-SOLARNA-USB-LED\",
    \"desc\": \"Stan: Nowy, Marka: inna marka (XBAY), Rodzaj: reflektor i szperacz\"
  },
  {
    \"name\": \"Plecak do samolotu torba bagaż podręczny RYANAIR\",
    \"price\": 64.8,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ab56/24e529814f53a17d5c26e94249e9/Plecak-do-samolotu-torba-bagaz-podreczny-RYANAIR\",
    \"desc\": \"Stan: Nowy, Marka: Perfekcyjny Styl, Kolor: szary, wielokolorowy\"
  },
  {
    \"name\": \"MOCNA LATARKA AKUMULATOROWA TAKTYCZNA ZOOM XHP99\",
    \"price\": 54.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11adb4/1f8f0fee4f82ba1cc9a3cd9b86f7/MOCNA-LATARKA-AKUMULATOROWA-TAKTYCZNA-ZOOM-XHP99\",
    \"desc\": \"Stan: Nowy, Marka: inna marka (in), Rodzaj: pozostała\"
  },
  {
    \"name\": \"MOCNA LATARKA AKUMULATOROWA BIWAKOWA SZPERACZ LED\",
    \"price\": 62,
    \"imageURL\": \"https://a.allegroimg.com/s180/11eab1/0ea0c8994b398dab13dc785010fe/MOCNA-LATARKA-AKUMULATOROWA-BIWAKOWA-SZPERACZ-LED\",
    \"desc\": \"Stan: Nowy, Marka: bez marki, Rodzaj: pozostała\"
  },
  {
    \"name\": \"MULTITOOL NARZĘDZIE WIELOFUNKCYJNE ZESTAW + ETUI\",
    \"price\": 159.89,
    \"imageURL\": \"https://a.allegroimg.com/s180/11dfaa/2cb8b22e4f62b6f188890b319338/MULTITOOL-NARZEDZIE-WIELOFUNKCYJNE-ZESTAW-ETUI\",
    \"desc\": \"Stan: Nowy, Liczba dodatkowych narzędzi: 13, Marka: Activ/Space\"
  },
  {
    \"name\": \"BIELIZNA TERMOAKTYWNA MĘSKA HI-TEC SORIN ZESTAW\",
    \"price\": 119,
    \"imageURL\": \"https://a.allegroimg.com/s180/11dcc6/71898c994ab3944fa9ddc9c7b0cf/BIELIZNA-TERMOAKTYWNA-MESKA-HI-TEC-SORIN-ZESTAW\",
    \"desc\": \"Stan: Nowy, Marka: Hi-Tec, Kolor: czarny, czerwony, Materiał dominujący: Poliester\"
  }
]`);

const c = gifts as BaseGift[];

export default c;
