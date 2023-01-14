import type { BaseGift } from '../gifts';

const gifts: unknown = JSON.parse(`[
  {
    \"name\": \"Mix smaków 8x ZANĘTA PROFESS OPTIMA 8kg + WIADRO\",
    \"price\": 85.39,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d239/088a80764d94aabd08be1a66ab23/Mix-smakow-8x-ZANETA-PROFESS-OPTIMA-8kg-WIADRO\",
    \"desc\": \"Marka: Profess\"
  },
  {
    \"name\": \"duża SKRZYNKA WĘDKARSKA + zestaw 200 akcesoriów\",
    \"price\": 199.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/03a959/a5f77f644d359efc85db273b289b/duza-SKRZYNKA-WEDKARSKA-zestaw-200-akcesoriow\",
    \"desc\": \"Stan: Nowy, Marka: Jaxon\"
  },
  {
    \"name\": \"ZESTAW SPINNING jaxon WĘDKA 2,4m +66 elementów Z45\",
    \"price\": 189.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/117012/7102207b4b32bd938898f4bc65cd/ZESTAW-SPINNING-jaxon-WEDKA-2-4m-66-elementow-Z45\",
    \"desc\": \"Stan: Nowy, Długość całkowita: 240 cm, Marka: inna (ATILO), Konstrukcja wędki: segmentowe\"
  },
  {
    \"name\": \"Killer Osmo Mini Larwa Wafters- ALIEN\",
    \"price\": 22.5,
    \"imageURL\": \"https://a.allegroimg.com/s180/11f5ea/b829a4c641e3821dc77a07bd708c/Killer-Osmo-Mini-Larwa-Wafters-ALIEN\",
    \"desc\": \"Marka: Osmo, Rodzaj: inny\"
  },
  {
    \"name\": \"ECHOSONDA Wędkarska LUCKY Sonar BEZPRZEWODOWA WiFi\",
    \"price\": 449,
    \"imageURL\": \"https://a.allegroimg.com/s180/11f8dc/63157766441daab51d8c7dc81b6b/ECHOSONDA-Wedkarska-LUCKY-Sonar-BEZPRZEWODOWA-WiFi\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"PRZYNĘTY WOBLERY NA RYBY ZESTAW WĘDKARSKI 141szt\",
    \"price\": 139,
    \"imageURL\": \"https://a.allegroimg.com/s180/1162f8/ace4014944368c853800f8981cd4/PRZYNETY-WOBLERY-NA-RYBY-ZESTAW-WEDKARSKI-141szt\",
    \"desc\": \"Stan: Nowy, Marka: inna (Meridian)\"
  },
  {
    \"name\": \"Plecionka Wędkarska Tonąca 4splotowa 0,20mm 1000M\",
    \"price\": 79.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1133fe/0e8561d24279b1727416ecac8f21/Plecionka-Wedkarska-Tonaca-4splotowa-0-20mm-1000M\",
    \"desc\": \"Stan: Nowy, Marka: Miracle Fish\"
  },
  {
    \"name\": \"Zestaw Zanęta Wędkarska Profess Optima 10x1kg\",
    \"price\": 64.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a59a/6527aea7458aa720b03bd7339f41/Zestaw-Zaneta-Wedkarska-Profess-Optima-10x1kg\",
    \"desc\": \"Marka: Profess\"
  },
  {
    \"name\": \"Zestaw 6 Koszyków do Metody 2x Forma method feeder\",
    \"price\": 24.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1181bd/752eb164402ab580d66ea6f6c5ae/Zestaw-6-Koszykow-do-Metody-2x-Forma-method-feeder\",
    \"desc\": \"Stan: Nowy, Rodzaj: koszyk, Marka: inna (Trafione_zakupy)\"
  },
  {
    \"name\": \"ZESTAW WĘDKARSKI karpiowy JAXON 2x wędka kołow Z22\",
    \"price\": 549.9,
    \"imageURL\": \"https://b.allegroimg.com/s180/064c13/3d02140c488393f547691f496b6b/ZESTAW-WEDKARSKI-karpiowy-JAXON-2x-wedka-kolow-Z22\",
    \"desc\": \"Stan: Nowy, Długość całkowita: 330 cm, Marka: Jaxon, Konstrukcja wędki: segmentowe\"
  },
  {
    \"name\": \"Wędka Spinningowa MIKADO Bixlite Fast 2,40m 5-25g\",
    \"price\": 130.62,
    \"imageURL\": \"https://a.allegroimg.com/s180/118ad7/4d4664b44648a883e0e61c06682a/Wedka-Spinningowa-MIKADO-Bixlite-Fast-2-40m-5-25g\",
    \"desc\": \"Stan: Nowy, Długość całkowita: 240 cm, Marka: Mikado, Konstrukcja wędki: segmentowe, Materiał wędki: włókno węglowe\"
  },
  {
    \"name\": \"MIX Smaków 10 x Zanęta PROFESS Optima 10kg\",
    \"price\": 64.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/1151d7/0191147d4c04aeeccd7a22d83d6c/MIX-Smakow-10-x-Zaneta-PROFESS-Optima-10kg\",
    \"desc\": \"Marka: Profess\"
  },
  {
    \"name\": \"wędka karpiowa JAXON zaffira CARP 3,6m 3,0LBS NEW!\",
    \"price\": 99.9,
    \"imageURL\": \"https://e.allegroimg.com/s180/063245/c77cbc7f4dec8ddda6f3b0b857ce/wedka-karpiowa-JAXON-zaffira-CARP-3-6m-3-0LBS-NEW\",
    \"desc\": \"Stan: Nowy, Długość całkowita: 360 cm, Marka: Jaxon, Konstrukcja wędki: segmentowe\"
  },
  {
    \"name\": \"ZESTAW PRZYNĘT GAMA + PUDEŁKO JAXON 54 elementy !\",
    \"price\": 64.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/03f966/fbc0ebf14bfe8e1957eb73774875/ZESTAW-PRZYNET-GAMA-PUDELKO-JAXON-54-elementy\",
    \"desc\": \"Stan: Nowy, Marka: inna\"
  },
  {
    \"name\": \"Echosonda FISH FINDER SONAR Wykrywacz Ryb\",
    \"price\": 188,
    \"imageURL\": \"https://3.allegroimg.com/s180/03738e/0128d7b24e51bf8437ca5fd18b83/Echosonda-FISH-FINDER-SONAR-Wykrywacz-Ryb\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"Kosz wędkarski CAPERLAN CSB Competition D25\",
    \"price\": 1679.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d4a9/9dee198649c18f568d1ce8e3b1d1/Kosz-wedkarski-CAPERLAN-CSB-Competition-D25\",
    \"desc\": \"Stan: Nowy, Marka: Caperlan\"
  },
  {
    \"name\": \"Kołowrotek karpiowy Z WOLNYM BIEGIEM CARP 3000 9+1\",
    \"price\": 69.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/116a38/626b6a3a4abdb26e19e8c4b7136c/Kolowrotek-karpiowy-Z-WOLNYM-BIEGIEM-CARP-3000-9-1\",
    \"desc\": \"Stan: Nowy, Marka: Miracle Fish, Przełożenie: 5.2:1, Rozmiar: 3000, Liczba łożysk kulkowych: 9, Liczba łożysk oporowych: 1, Hamulec: przedni, Waga: 305 g\"
  },
  {
    \"name\": \"ZESTAW WĘDKARSKI 2 x Wędka 2 x Kołowrotek TORBA\",
    \"price\": 119,
    \"imageURL\": \"https://a.allegroimg.com/s180/11e69c/bd85d05a431986dcbfda726a899e/ZESTAW-WEDKARSKI-2-x-Wedka-2-x-Kolowrotek-TORBA\",
    \"desc\": \"Stan: Nowy, Długość całkowita: 240 cm, Marka: Margrom, Konstrukcja wędki: teleskopowe\"
  },
  {
    \"name\": \"Kołowrotek karpiowy WOLNY BIEG 8+1BB do Feeder\",
    \"price\": 69.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11779e/b8e91f31470bac9619f5b7d1e5dd/Kolowrotek-karpiowy-WOLNY-BIEG-8-1BB-do-Feeder\",
    \"desc\": \"Stan: Nowy, Marka: FL, Przełożenie: 5.0:1, Rozmiar: 4000, Liczba łożysk kulkowych: 8, Liczba łożysk oporowych: 1, Waga: 305 g\"
  },
  {
    \"name\": \"wędka FEEDER FL Classic 3,6m 60-150g karp leszcz\",
    \"price\": 109.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11e650/51f00783477a80fd9a4ec6647a51/wedka-FEEDER-FL-Classic-3-6m-60-150g-karp-leszcz\",
    \"desc\": \"Stan: Nowy, Długość całkowita: 360 cm, Marka: FL, Konstrukcja wędki: segmentowe, Materiał wędki: kompozyt\"
  },
  {
    \"name\": \"Wędka Mikado SASORI FEEDER 3,60m 30-100g\",
    \"price\": 134.2,
    \"imageURL\": \"https://a.allegroimg.com/s180/112170/26cfaf7f45119668adbb3725c52c/Wedka-Mikado-SASORI-FEEDER-3-60m-30-100g\",
    \"desc\": \"Stan: Nowy, Długość całkowita: 360 cm, Marka: Mikado, Konstrukcja wędki: segmentowe\"
  },
  {
    \"name\": \"KOŁOWROTEK SPINNING 6 ŁOŻYSK ALUMINIOWA SZPULA\",
    \"price\": 49.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/1177da/90e4e55a40d9a2957eca916b9bf6/KOLOWROTEK-SPINNING-6-LOZYSK-ALUMINIOWA-SZPULA\",
    \"desc\": \"Stan: Nowy, Marka: FL\"
  },
  {
    \"name\": \"Wędka Delphin Revir 3.00m 60g\",
    \"price\": 220,
    \"imageURL\": \"https://a.allegroimg.com/s180/117e92/9cae086342e2b9ddb091394c40a6/Wedka-Delphin-Revir-3-00m-60g\",
    \"desc\": \"Stan: Nowy, Długość całkowita: 300 cm, Marka: Delphin, Konstrukcja wędki: segmentowe\"
  },
  {
    \"name\": \"Pokrowiec wędkarski na wędki JAXON 3 komory 150cm\",
    \"price\": 100,
    \"imageURL\": \"https://a.allegroimg.com/s180/11641a/6e273a2f4197a6f211ca992d93e3/Pokrowiec-wedkarski-na-wedki-JAXON-3-komory-150cm\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"Plecionka Wędkarska Tonąca 8splotowa 0,20mm MOCNA\",
    \"price\": 21.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a64a/d523fc2f472e8f8f385e29349792/Plecionka-Wedkarska-Tonaca-8splotowa-0-20mm-MOCNA\",
    \"desc\": \"Stan: Nowy, Marka: Miracle Fish\"
  },
  {
    \"name\": \"Mega ZESTAW WOBLER 10szt WOBLERY OKOŃ SZCZUPAK MIX\",
    \"price\": 49.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11561c/91174be1493290784c73fb502ec1/Mega-ZESTAW-WOBLER-10szt-WOBLERY-OKON-SZCZUPAK-MIX\",
    \"desc\": \"Stan: Nowy, Marka: FL\"
  },
  {
    \"name\": \"Zanęta wędkarska Lin-Karaś Marcepan 3kg Popularna\",
    \"price\": 22.49,
    \"imageURL\": \"https://a.allegroimg.com/s180/115af8/9013e45e4603871cca8b1dfbab74/Zaneta-wedkarska-Lin-Karas-Marcepan-3kg-Popularna\",
    \"desc\": \"Marka: Boland\"
  },
  {
    \"name\": \"MIX smaków ZESTAW 6x Kulki Proteinowe JAXON\",
    \"price\": 43.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/117f21/5def2d5f46bb95c5e998b1dd5952/MIX-smakow-ZESTAW-6x-Kulki-Proteinowe-JAXON\",
    \"desc\": \"Marka: Jaxon, Rodzaj: kulki proteinowe\"
  },
  {
    \"name\": \"Zestaw Karp Jaxon Wędka Tenesa 3,6m, Wolny Bieg\",
    \"price\": 185,
    \"imageURL\": \"https://a.allegroimg.com/s180/11f7de/8c133cd449be80b794eb89003d8f/Zestaw-Karp-Jaxon-Wedka-Tenesa-3-6m-Wolny-Bieg\",
    \"desc\": \"Stan: Nowy, Długość całkowita: 360 cm, Marka: FL, Konstrukcja wędki: segmentowe, Materiał wędki: kompozyt\"
  },
  {
    \"name\": \"Żyłka MEGA BAITS METHOD FEEDER tonąca 0.25mm 300 m\",
    \"price\": 20,
    \"imageURL\": \"https://a.allegroimg.com/s180/11e15e/eb7b691642d0913eadd6c914d16f/Zylka-MEGA-BAITS-METHOD-FEEDER-tonaca-0-25mm-300-m\",
    \"desc\": \"Stan: Nowy, Marka: Dragon\"
  },
  {
    \"name\": \"Zestaw gotowa zanęta Jaxon Method Feeder 10x750g\",
    \"price\": 109.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11e5e1/c3f2eef14c099e52aace1ff66b08/Zestaw-gotowa-zaneta-Jaxon-Method-Feeder-10x750g\",
    \"desc\": \"Marka: Jaxon\"
  },
  {
    \"name\": \"Mix smaków 8x ZANĘTA PROFESS OPTIMA 8kg + WIADRO\",
    \"price\": 85.39,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d239/088a80764d94aabd08be1a66ab23/Mix-smakow-8x-ZANETA-PROFESS-OPTIMA-8kg-WIADRO\",
    \"desc\": \"Marka: Profess\"
  },
  {
    \"name\": \"Kołowrotek MIKADO Inazuma 2006 FD 6 łożysk\",
    \"price\": 88,
    \"imageURL\": \"https://a.allegroimg.com/s180/110a56/24495e4345a79faa447e27d815ab/Kolowrotek-MIKADO-Inazuma-2006-FD-6-lozysk\",
    \"desc\": \"Stan: Nowy, Marka: Mikado, Przełożenie: 5.5:1, Rozmiar: 2000, Liczba łożysk kulkowych: 5, Liczba łożysk oporowych: 1, Waga: 248 g\"
  },
  {
    \"name\": \"GOTOWY Uzbrojony Zestaw Wędkarski nad wodę\",
    \"price\": 53.5,
    \"imageURL\": \"https://a.allegroimg.com/s180/116c85/8013b23441308bf6da562e4fc446/GOTOWY-Uzbrojony-Zestaw-Wedkarski-nad-wode\",
    \"desc\": \"Stan: Nowy, Długość całkowita: 210 cm, Marka: Margrom, Konstrukcja wędki: teleskopowe\"
  },
  {
    \"name\": \"Zanęta Champion Feed Wonder Black 2kg\",
    \"price\": 32.5,
    \"imageURL\": \"https://a.allegroimg.com/s180/111f3a/0ac52ee6465a9a13374889eb8fb0/Zaneta-Champion-Feed-Wonder-Black-2kg\",
    \"desc\": \"Marka: Champion\"
  },
  {
    \"name\": \"Zanęta wędkarska na Leszcza 5x3kg Zestaw Boland\",
    \"price\": 99.15,
    \"imageURL\": \"https://a.allegroimg.com/s180/111455/ddf170394d13916a11a262a83eb7/Zaneta-wedkarska-na-Leszcza-5x3kg-Zestaw-Boland\",
    \"desc\": \"Marka: Boland\"
  },
  {
    \"name\": \"Zanęta Wędkarska PROFESS OPTIMA OCHOTKA I KRYL1kg\",
    \"price\": 6.49,
    \"imageURL\": \"https://a.allegroimg.com/s180/11fe7d/c3d7ee9141caae21ab0569e59e86/Zaneta-Wedkarska-PROFESS-OPTIMA-OCHOTKA-I-KRYL1kg\",
    \"desc\": \"Marka: Profess\"
  },
  {
    \"name\": \"Zestaw na Spinning 5x wobler Jaxon Kleń + Pudełko\",
    \"price\": 56.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/113202/da288ed546cbbae9abd76882f544/Zestaw-na-Spinning-5x-wobler-Jaxon-Klen-Pudelko\",
    \"desc\": \"Stan: Nowy, Marka: Jaxon\"
  },
  {
    \"name\": \"Killer Osmo Mini Larwa Wafters- TOXIC\",
    \"price\": 22.5,
    \"imageURL\": \"https://a.allegroimg.com/s180/119dbe/ef71e5684b9481466447398e2ab8/Killer-Osmo-Mini-Larwa-Wafters-TOXIC\",
    \"desc\": \"Marka: Osmo, Rodzaj: inny\"
  },
  {
    \"name\": \"ECHOSONDA Wędkarska LUCKY Sonar BEZPRZEWODOWA WiFi\",
    \"price\": 449,
    \"imageURL\": \"https://a.allegroimg.com/s180/11f8dc/63157766441daab51d8c7dc81b6b/ECHOSONDA-Wedkarska-LUCKY-Sonar-BEZPRZEWODOWA-WiFi\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"Plecionka Wędkarska Tonąca 4splotowa 0,30mm 600M\",
    \"price\": 55.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/110c45/34dd0b074bf1a5a405afb6814652/Plecionka-Wedkarska-Tonaca-4splotowa-0-30mm-600M\",
    \"desc\": \"Stan: Nowy, Marka: Miracle Fish\"
  },
  {
    \"name\": \"KOŁOWROTEK FL5000 WOLNY BIEG 9bb KARPIOWY metalowy\",
    \"price\": 79.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/03ba3f/3fff94e4416986e0bccc47e58ab8/KOLOWROTEK-FL5000-WOLNY-BIEG-9bb-KARPIOWY-metalowy\",
    \"desc\": \"Stan: Nowy, Marka: FL\"
  },
  {
    \"name\": \"Zestaw Zanęta Wędkarska Profess Optima 16x1kg MIX\",
    \"price\": 103.84,
    \"imageURL\": \"https://a.allegroimg.com/s180/114553/063ef51c4331afc997c4cab40f8e/Zestaw-Zaneta-Wedkarska-Profess-Optima-16x1kg-MIX\",
    \"desc\": \"Marka: Profess\"
  },
  {
    \"name\": \"Zestaw NA SZCZUPAKA Wędka Kołowrotek Wobler JAXON\",
    \"price\": 199.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/118c9f/22c9da9746ecada324064e8d7faa/Zestaw-NA-SZCZUPAKA-Wedka-Kolowrotek-Wobler-JAXON\",
    \"desc\": \"Stan: Nowy, Długość całkowita: 240 cm, Marka: Jaxon, Konstrukcja wędki: segmentowe, Materiał wędki: kompozyt\"
  },
  {
    \"name\": \"Mocny Feeder Leszcz, Rzeka Matrix 555 Carbon 360cm\",
    \"price\": 105,
    \"imageURL\": \"https://a.allegroimg.com/s180/1166a0/d8ffb2e44ed0900b42679aa4c7ba/Mocny-Feeder-Leszcz-Rzeka-Matrix-555-Carbon-360cm\",
    \"desc\": \"Stan: Nowy, Długość całkowita: 360 cm, Marka: Miracle Fish, Konstrukcja wędki: segmentowe, Materiał wędki: włókno węglowe\"
  },
  {
    \"name\": \"Podbierak Wędkarski TELESKOPOWY\",
    \"price\": 40,
    \"imageURL\": \"https://a.allegroimg.com/s180/114c14/b6a641664db785448b822da5f49f/Podbierak-Wedkarski-TELESKOPOWY\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"Kołowrotek FOX EOS 10000\",
    \"price\": 299.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/112cf3/714faf5c4dde8e61fabec07cc9cc/Kolowrotek-FOX-EOS-10000\",
    \"desc\": \"Stan: Nowy, Marka: Fox\"
  },
  {
    \"name\": \"Killer Osmo Mini Larwa Wafters- ALIEN\",
    \"price\": 22.5,
    \"imageURL\": \"https://a.allegroimg.com/s180/11f5ea/b829a4c641e3821dc77a07bd708c/Killer-Osmo-Mini-Larwa-Wafters-ALIEN\",
    \"desc\": \"Marka: Osmo, Rodzaj: inny\"
  },
  {
    \"name\": \"Zestaw 20 szt KOPYTO guma 10cm / 8,4g, 12cm / 13g\",
    \"price\": 28.59,
    \"imageURL\": \"https://a.allegroimg.com/s180/117ff6/2fb3ddf94ff1a50f6c1b8dbd8c85/Zestaw-20-szt-KOPYTO-guma-10cm-8-4g-12cm-13g\",
    \"desc\": \"Stan: Nowy, Marka: MF\"
  },
  {
    \"name\": \"Zestaw SPINNING NA OKONIA Wędka Kołowrotek MIKADO\",
    \"price\": 234.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11369c/5377321742b18cf55809e454d078/Zestaw-SPINNING-NA-OKONIA-Wedka-Kolowrotek-MIKADO\",
    \"desc\": \"Stan: Nowy, Długość całkowita: 208 cm, Marka: Mikado, Konstrukcja wędki: segmentowe, Materiał wędki: włókno węglowe\"
  },
  {
    \"name\": \"MIX smaków ZESTAW 10x Kulki Proteinowe JAXON\",
    \"price\": 71.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/110fcd/e24bb1314034a2ce01a0b33b29f7/MIX-smakow-ZESTAW-10x-Kulki-Proteinowe-JAXON\",
    \"desc\": \"Marka: Jaxon\"
  },
  {
    \"name\": \"Walizka TEAM DRAGON na Wędki i Akcesoria - 110cm\",
    \"price\": 228.24,
    \"imageURL\": \"https://a.allegroimg.com/s180/1117ae/a7783dca4c68a5af46f4d22b9b62/Walizka-TEAM-DRAGON-na-Wedki-i-Akcesoria-110cm\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"2x SYGNALIZATOR CARP ELEKTRONICZNY 2x SWINGER\",
    \"price\": 54.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/119871/8ed47b134689a90fec8dc313b3e8/2x-SYGNALIZATOR-CARP-ELEKTRONICZNY-2x-SWINGER\",
    \"desc\": \"Stan: Nowy, Marka: FL, Rodzaj: elektroniczny\"
  },
  {
    \"name\": \"Zestaw 8x Koszyk do Metody +2x Forma method feeder\",
    \"price\": 29.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/110365/c837644c4286bef42b3cff4ae023/Zestaw-8x-Koszyk-do-Metody-2x-Forma-method-feeder\",
    \"desc\": \"Stan: Nowy, Rodzaj: sprężyna z obciążeniem, Marka: Miracle Fish\"
  },
  {
    \"name\": \"KOŁOWROTEK raider SW2000 10bb FEEDER, SPINNING\",
    \"price\": 79.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/119c55/01cfb9e3470c8e8d6e136b894997/KOLOWROTEK-raider-SW2000-10bb-FEEDER-SPINNING\",
    \"desc\": \"Stan: Nowy, Marka: FL, Przełożenie: 5.2:1, Rozmiar: 2000, Liczba łożysk kulkowych: 9, Liczba łożysk oporowych: 1\"
  },
  {
    \"name\": \"PRZYNĘTY WOBLERY NA RYBY ZESTAW WĘDKARSKI 141szt\",
    \"price\": 139,
    \"imageURL\": \"https://a.allegroimg.com/s180/1162f8/ace4014944368c853800f8981cd4/PRZYNETY-WOBLERY-NA-RYBY-ZESTAW-WEDKARSKI-141szt\",
    \"desc\": \"Stan: Nowy, Marka: inna (Meridian)\"
  },
  {
    \"name\": \"Zestaw Karp Jaxon Wędki 3,6m, Kołowrotki Karpiowe\",
    \"price\": 513,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b78d/15c35e5943eb8cff7ffa27eadb5d/Zestaw-Karp-Jaxon-Wedki-3-6m-Kolowrotki-Karpiowe\",
    \"desc\": \"Stan: Nowy, Długość całkowita: 360 cm, Marka: FL, Konstrukcja wędki: segmentowe, Materiał wędki: kompozyt\"
  },
  {
    \"name\": \"Echosonda Lowrance Hook2 4x\",
    \"price\": 694,
    \"imageURL\": \"https://4.allegroimg.com/s180/061d62/8d001f374d5884f86703d40ab614/Echosonda-Lowrance-Hook2-4x\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"Wędka MIKADO Sensual Ultra Light Spin 2,35m 2-14g\",
    \"price\": 107.8,
    \"imageURL\": \"https://a.allegroimg.com/s180/11565d/de0027e54050afedd499e8005fc5/Wedka-MIKADO-Sensual-Ultra-Light-Spin-2-35m-2-14g\",
    \"desc\": \"Stan: Nowy, Długość całkowita: 235 cm, Marka: Mikado, Konstrukcja wędki: segmentowe, Materiał wędki: włókno węglowe\"
  },
  {
    \"name\": \"Pokrowiec wędkarski na wędki JAXON 3 komory 150cm\",
    \"price\": 100,
    \"imageURL\": \"https://a.allegroimg.com/s180/11641a/6e273a2f4197a6f211ca992d93e3/Pokrowiec-wedkarski-na-wedki-JAXON-3-komory-150cm\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"KOŁOWROTEK 9 Łożysk Spinning Match Metalowa Szpula\",
    \"price\": 64.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1195c5/ecac7f1943d5b57fee2b1702703b/KOLOWROTEK-9-Lozysk-Spinning-Match-Metalowa-Szpula\",
    \"desc\": \"Stan: Nowy, Marka: Miracle Fish, Przełożenie: 5.2:1, Rozmiar: 2000, Liczba łożysk kulkowych: 8, Liczba łożysk oporowych: 1, Waga: 230 g\"
  },
  {
    \"name\": \"MEGA BOGATY ZESTAW WĘDKARSKI JAXON 3x wędka Z68\",
    \"price\": 219.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b1e4/4eee92e7423e830d70b80fa621ea/MEGA-BOGATY-ZESTAW-WEDKARSKI-JAXON-3x-wedka-Z68\",
    \"desc\": \"Stan: Nowy, Długość całkowita: 300 cm, Marka: Jaxon, Konstrukcja wędki: teleskopowe\"
  },
  {
    \"name\": \"Żyłka Karpiowa Jaxon Carp Academy 1000m - 0,25mm\",
    \"price\": 46.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/118356/cbc313614baf87584c59d98f9d13/Zylka-Karpiowa-Jaxon-Carp-Academy-1000m-0-25mm\",
    \"desc\": \"Stan: Nowy, Marka: Jaxon\"
  },
  {
    \"name\": \"Echosonda STRIKER VIVID 5CV Decathlon\",
    \"price\": 1499,
    \"imageURL\": \"https://a.allegroimg.com/s180/1152c6/3767e0e2415eb6060930680ad047/Echosonda-STRIKER-VIVID-5CV-Decathlon\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"Zestaw na Spinning 5x wobler łamany Pudełko Mikado\",
    \"price\": 84.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a1e7/9edfcea147de97817ba8dd84e585/Zestaw-na-Spinning-5x-wobler-lamany-Pudelko-Mikado\",
    \"desc\": \"Stan: Nowy, Marka: inna (FL Mikado)\"
  },
  {
    \"name\": \"MOCNA WĘDKA KARPIÓWKA 3,60 m DIAMANT 150-260 g !\",
    \"price\": 159.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11012f/f85e757a4b13ac9ac6737faa0c69/MOCNA-WEDKA-KARPIOWKA-3-60-m-DIAMANT-150-260-g\",
    \"desc\": \"Stan: Nowy, Długość całkowita: 360 cm, Marka: Miracle Fish, Konstrukcja wędki: teleskopowe\"
  },
  {
    \"name\": \"ADUSTA FORCE MIX, 20.5CM, 43G, 069 BLACK CRYSTAL\",
    \"price\": 144.17,
    \"imageURL\": \"https://a.allegroimg.com/s180/112055/788d4a7a4d228bad99b9f66ebb64/ADUSTA-FORCE-MIX-20-5CM-43G-069-BLACK-CRYSTAL\",
    \"desc\": \"Stan: Nowy, Marka: ADUSTA\"
  },
  {
    \"name\": \"Sygnalizatory bran 4+1 CRYSTAL FR 698 BLACK PRO !!\",
    \"price\": 480,
    \"imageURL\": \"https://a.allegroimg.com/s180/112f4a/7240d8be43b6acf89648735ade90/Sygnalizatory-bran-4-1-CRYSTAL-FR-698-BLACK-PRO\",
    \"desc\": \"Stan: Nowy, Marka: Crystal, Rodzaj: elektroniczny\"
  },
  {
    \"name\": \"Killer Osmo Mini Larwa Wafters- TOXIC\",
    \"price\": 22.5,
    \"imageURL\": \"https://a.allegroimg.com/s180/119dbe/ef71e5684b9481466447398e2ab8/Killer-Osmo-Mini-Larwa-Wafters-TOXIC\",
    \"desc\": \"Marka: Osmo, Rodzaj: inny\"
  },
  {
    \"name\": \"Killer Osmo Mini Larwa Wafters- TURBO\",
    \"price\": 22.5,
    \"imageURL\": \"https://a.allegroimg.com/s180/11effa/fa8a9528453ea78679ae251e7a3e/Killer-Osmo-Mini-Larwa-Wafters-TURBO\",
    \"desc\": \"Marka: Osmo, Rodzaj: inny\"
  }
]`);

const c = gifts as BaseGift[];

export default c;
