import type { BaseGift } from '../gifts';

const gifts: unknown = JSON.parse(`[
  {
    \"name\": \"LAMPKA ROWEROWA LED PRZÓD 800 LUMENÓW MOCNA + TYŁ\",
    \"price\": 48.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11dc95/f7389b5043a8a9b1f9d964f280a6/LAMPKA-ROWEROWA-LED-PRZOD-800-LUMENOW-MOCNA-TYL\",
    \"desc\": \"Stan: Nowy, Rodzaj: zestaw, Zasilanie: akumulator\"
  },
  {
    \"name\": \"LAMPKA ROWEROWA ŚWIATŁO PRZÓD TYŁ NA KIEROWNICĘ\",
    \"price\": 49.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11da58/f39d5d264cf18e4679194b45e781/LAMPKA-ROWEROWA-SWIATLO-PRZOD-TYL-NA-KIEROWNICE\",
    \"desc\": \"Stan: Nowy, Rodzaj: zestaw, Zasilanie: akumulator\"
  },
  {
    \"name\": \"Rower górski OLPRAN 29 , SHIMANO\",
    \"price\": 899,
    \"imageURL\": \"https://a.allegroimg.com/s180/1148ef/813b1df34940a329bd8924a92044/Rower-gorski-OLPRAN-29-SHIMANO\",
    \"desc\": \"Stan: Nowy, Marka: Olpran, Rozmiar ramy: 20 cali, Kolor: inny\"
  },
  {
    \"name\": \"ROWER TREKINGOWY OLPRAN MERCURY 28, SHIMANO\",
    \"price\": 849,
    \"imageURL\": \"https://a.allegroimg.com/s180/113ea1/dc03db2f4bd0a24574034e5d6fdb/ROWER-TREKINGOWY-OLPRAN-MERCURY-28-SHIMANO\",
    \"desc\": \"Stan: Nowy, Rozmiar ramy: 20 cali, Kolor: szary, Marka: Olpran\"
  },
  {
    \"name\": \"Rower górski OLPRAN DISCOVERY 29 , SHIMANO\",
    \"price\": 899,
    \"imageURL\": \"https://a.allegroimg.com/s180/117caa/d78b658541d48bb8faaa96a1bcce/Rower-gorski-OLPRAN-DISCOVERY-29-SHIMANO\",
    \"desc\": \"Stan: Nowy, Marka: Olpran, Rozmiar ramy: 20 cali, Kolor: biały\"
  },
  {
    \"name\": \"ROWER GÓRSKI OLPRAN APOLLO 29\\\" SHIMANO, ALU\",
    \"price\": 1399,
    \"imageURL\": \"https://a.allegroimg.com/s180/118be0/d7a504764d829c69f103d8476e0a/ROWER-GORSKI-OLPRAN-APOLLO-29-SHIMANO-ALU\",
    \"desc\": \"Stan: Nowy, Marka: Olpran, Rozmiar ramy: 21 cali, Kolor: wielokolorowy\"
  },
  {
    \"name\": \"Rower elektryczny F.lli Schiano E-Mercury r 19cali\",
    \"price\": 3999,
    \"imageURL\": \"https://a.allegroimg.com/s180/117fe4/aba3f37a4693aa6ced583114a1fa/Rower-elektryczny-F-lli-Schiano-E-Mercury-r-19cali\",
    \"desc\": \"Stan: Używany, Rozmiar ramy: 19 cali, Kolor: czarny, Marka: F.lli Schiano\"
  },
  {
    \"name\": \"Rower CROSSOWY OLPRAN PLAYER 28\\\",SHIMANO, ALU\",
    \"price\": 1399,
    \"imageURL\": \"https://a.allegroimg.com/s180/116e5d/1fbd51104a09a90a746e8d500b7b/Rower-CROSSOWY-OLPRAN-PLAYER-28-SHIMANO-ALU\",
    \"desc\": \"Stan: Nowy, Rozmiar ramy: 19 cali, Kolor: biały, Marka: Olpran\"
  },
  {
    \"name\": \"Regulowany STOJAK rowerowy 3w1 serwisowy (E058)\",
    \"price\": 59,
    \"imageURL\": \"https://a.allegroimg.com/s180/110215/8057a2cd44539d688e522406c3bb/Regulowany-STOJAK-rowerowy-3w1-serwisowy-E058\",
    \"desc\": \"Stan: Nowy, Liczba stanowisk: 3, Rodzaj: serwisowy\"
  },
  {
    \"name\": \"DOTYKOWE RĘKAWICZKI SPORTOWE WODOODPORNE ROWEROWE\",
    \"price\": 29.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11e930/6d4c8b994af88483d0370478ea4a/DOTYKOWE-REKAWICZKI-SPORTOWE-WODOODPORNE-ROWEROWE\",
    \"desc\": \"Stan: Nowy, Marka: Inna marka (ASMAT), Rozmiar: XL, Materiał dominujący: poliester, Typ: Długie\"
  },
  {
    \"name\": \"Grupa SRAM Rival ETAP AXS Disc\",
    \"price\": 5799,
    \"imageURL\": \"https://a.allegroimg.com/s180/11dd37/e47654c842869d6b03068bf256ce/Grupa-SRAM-Rival-ETAP-AXS-Disc\",
    \"desc\": \"Stan: Nowy, Marka: SRAM\"
  },
  {
    \"name\": \"Rower elektryczny Urban Glide E-Bike 140 czarny\",
    \"price\": 1899,
    \"imageURL\": \"https://a.allegroimg.com/s180/113896/a7cd622e460cb53944569cf18e69/Rower-elektryczny-Urban-Glide-E-Bike-140-czarny\",
    \"desc\": \"Stan: Nowy, Rozmiar ramy: brak informacji, Kolor: czarny, Marka: inna (Urban Glide)\"
  },
  {
    \"name\": \"LICZNIK ROWEROWY WODOODPORNY 25 FUNKCJI LCD\",
    \"price\": 29.7,
    \"imageURL\": \"https://a.allegroimg.com/s180/118ac2/ed0f49f144b5b8da0c2eb3ce9455/LICZNIK-ROWEROWY-WODOODPORNY-25-FUNKCJI-LCD\",
    \"desc\": \"Stan: Nowy, Rodzaj: przewodowy, Marka: Retoo\"
  },
  {
    \"name\": \"ROWER GÓRSKI OLPRAN SPIRIT FULL DISC 24 , SHIMANO\",
    \"price\": 799,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b315/e4cf007949e5b7fffc28fcb2a900/ROWER-GORSKI-OLPRAN-SPIRIT-FULL-DISC-24-SHIMANO\",
    \"desc\": \"Stan: Nowy, Rozmiar ramy: 13 cali, Kolor: żółty, Marka: Olpran\"
  },
  {
    \"name\": \"LED Rower Światła USB prędkościomierz Wodoodporny\",
    \"price\": 99.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b74e/c5d3d5c549f3be24f1930b5db9ba/LED-Rower-Swiatla-USB-predkosciomierz-Wodoodporny\",
    \"desc\": \"Stan: Nowy, Rodzaj: przednie, Zasilanie: USB\"
  },
  {
    \"name\": \"PRZEDNIA LAMPA ROWEROWA OŚWIETLENIE ROWEROWE 1100m\",
    \"price\": 66.1,
    \"imageURL\": \"https://a.allegroimg.com/s180/11689e/00d3258a453785b1f0f1114f8787/PRZEDNIA-LAMPA-ROWEROWA-OSWIETLENIE-ROWEROWE-1100m\",
    \"desc\": \"Stan: Nowy, Rodzaj: przednie, Zasilanie: akumulator\"
  },
  {
    \"name\": \"LAMPKA ROWEROWA LED PRZÓD 1800 LUMENÓW MOCNA + TYŁ\",
    \"price\": 129.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c932/3117f7a6424dae5fd4a8afb74607/LAMPKA-ROWEROWA-LED-PRZOD-1800-LUMENOW-MOCNA-TYL\",
    \"desc\": \"Stan: Nowy, Rodzaj: zestaw, Zasilanie: USB\"
  },
  {
    \"name\": \"STOPKA NÓŻKA PODPÓRKA REGULOWANA ROWEROWA NA ROWER\",
    \"price\": 10.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11cb99/01b9bb614aea80620dba105f3577/STOPKA-NOZKA-PODPORKA-REGULOWANA-ROWEROWA-NA-ROWER\",
    \"desc\": \"Stan: Nowy, Rodzaj: centralna, pojedyncza, regulowana, tylna, Marka: Inna marka (P&S)\"
  },
  {
    \"name\": \"ZESTAW NARZĘDZI KLUCZY ROWEROWYCH 44 SZT SKRZYNKA\",
    \"price\": 149,
    \"imageURL\": \"https://a.allegroimg.com/s180/0373af/8602f3214932b05805808918d064/ZESTAW-NARZEDZI-KLUCZY-ROWEROWYCH-44-SZT-SKRZYNKA\",
    \"desc\": \"Stan: Nowy, Marka: Korbi, Przeznaczenie: zestaw\"
  },
  {
    \"name\": \"WODOODPORNY LICZNIK ROWEROWY PRĘDKOŚCIOMIERZ LCD\",
    \"price\": 28.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/114fdf/3ac00225457bba508f3cd039b1ad/WODOODPORNY-LICZNIK-ROWEROWY-PREDKOSCIOMIERZ-LCD\",
    \"desc\": \"Stan: Nowy, Rodzaj: bezprzewodowy, Marka: Inna marka (LOGIT)\"
  },
  {
    \"name\": \"LAMPKA ROWEROWA ŚWIATŁO PRZÓD TYŁ NA KIEROWNICĘ\",
    \"price\": 49.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11da58/f39d5d264cf18e4679194b45e781/LAMPKA-ROWEROWA-SWIATLO-PRZOD-TYL-NA-KIEROWNICE\",
    \"desc\": \"Stan: Nowy, Rodzaj: zestaw, Zasilanie: akumulator\"
  },
  {
    \"name\": \"SAKWA TORBA ROWEROWA NA BAGAŻNIK PODWÓJNA POJEMNA\",
    \"price\": 125.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d968/b16696bf45a592e9e3f9a2ef4b92/SAKWA-TORBA-ROWEROWA-NA-BAGAZNIK-PODWOJNA-POJEMNA\",
    \"desc\": \"Stan: Nowy, Marka: SVENSSON, Rodzaj: tylna, Kolor dominujący: odcienie szarości\"
  },
  {
    \"name\": \"Rower górski OLPRAN BOMBER FULL disc 26 , SHIMANO\",
    \"price\": 799,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d615/f20fab294b35879eef0318dd9e3f/Rower-gorski-OLPRAN-BOMBER-FULL-disc-26-SHIMANO\",
    \"desc\": \"Stan: Nowy, Marka: Olpran, Rozmiar ramy: 17 cali, Kolor: wielokolorowy\"
  },
  {
    \"name\": \"Siodełko rowerowe czarne ONYX Citi elastomer HIT\",
    \"price\": 29,
    \"imageURL\": \"https://a.allegroimg.com/s180/031c8c/d440192e444a89e9eeb53a112b22/Siodelko-rowerowe-czarne-ONYX-Citi-elastomer-HIT\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"TORBA ROWEROWA ROWER SAKWA NA BAGAŻNIK KUFER GRUBA\",
    \"price\": 21.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1174ff/3d46eba0499db6a960b1afd1ac29/TORBA-ROWEROWA-ROWER-SAKWA-NA-BAGAZNIK-KUFER-GRUBA\",
    \"desc\": \"Stan: Nowy, Marka: Retoo, Rodzaj: tylna, Kolor dominujący: czarny\"
  },
  {
    \"name\": \"Sakwa rowerowa, Rockbros LF0444BK, torba na ramę\",
    \"price\": 109,
    \"imageURL\": \"https://a.allegroimg.com/s180/114c98/c95da53143dd85c2b8eb78cddedd/Sakwa-rowerowa-Rockbros-LF0444BK-torba-na-rame\",
    \"desc\": \"Stan: Nowy, Przeznaczenie: inne\"
  },
  {
    \"name\": \"Opona Continental RideTour 700x42C 28x1.60 42-622\",
    \"price\": 74.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a607/98d5f90b4e69a9f07ab82f832542/Opona-Continental-RideTour-700x42C-28x1-60-42-622\",
    \"desc\": \"Stan: Nowy, Rozmiar koła (\\\"): 28, Marka: Continental\"
  },
  {
    \"name\": \"Rower górski OLPRAN PROFESSIONAL 29 SHIMANO, ALU\",
    \"price\": 1799,
    \"imageURL\": \"https://a.allegroimg.com/s180/116488/2f90a8be4a3ebe993f7fe54cc1f6/Rower-gorski-OLPRAN-PROFESSIONAL-29-SHIMANO-ALU\",
    \"desc\": \"Stan: Nowy, Marka: Olpran, Rozmiar ramy: 21 cali, Kolor: czarny\"
  },
  {
    \"name\": \"ROWER GÓRSKI KROSS HEXAGON 5.0 KOŁA 29'' ROZ. L 21\",
    \"price\": 1864,
    \"imageURL\": \"https://a.allegroimg.com/s180/113989/3126a3b94e7a9ce5dd3ae3e81786/ROWER-GORSKI-KROSS-HEXAGON-5-0-KOLA-29-ROZ-L-21\",
    \"desc\": \"Stan: Nowy, Marka: Kross, Rozmiar ramy: 21 cali, Kolor: czerwony\"
  },
  {
    \"name\": \"Opona Black1 28 x 1,75 47-622 antyprzebiciowa\",
    \"price\": 27.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/111d58/b267c74f43a7bfd99431add60fdf/Opona-Black1-28-x-1-75-47-622-antyprzebiciowa\",
    \"desc\": \"Stan: Nowy, Rozmiar koła (\\\"): 28, Marka: Black1\"
  },
  {
    \"name\": \"Sakwa rowerowa, Rockbros LF0444BK, torba na ramę\",
    \"price\": 109,
    \"imageURL\": \"https://a.allegroimg.com/s180/114c98/c95da53143dd85c2b8eb78cddedd/Sakwa-rowerowa-Rockbros-LF0444BK-torba-na-rame\",
    \"desc\": \"Stan: Nowy, Przeznaczenie: inne\"
  },
  {
    \"name\": \"PRZYCZEPKA ROWEROWA PRO 3w1 AMORTYZACJA + LEDY\",
    \"price\": 659,
    \"imageURL\": \"https://a.allegroimg.com/s180/117640/eb7c87ce46468c386383d9e5740e/PRZYCZEPKA-ROWEROWA-PRO-3w1-AMORTYZACJA-LEDY\",
    \"desc\": \"Stan: Nowy, Przeznaczenie: dla dzieci, Marka: Funfit Kids\"
  },
  {
    \"name\": \"SPODNIE ROWEROWE KOLARSKIE ZIMOWE DŁUGIE MĘSKIE\",
    \"price\": 249.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/118e27/5e345ec04e72bc3d2318271cabfc/SPODNIE-ROWEROWE-KOLARSKIE-ZIMOWE-DLUGIE-MESKIE\",
    \"desc\": \"Stan: Nowy, Marka: X-Tiger, Rozmiar: 6XL, Materiał dominujący: poliester, Długość nogawki: długie\"
  },
  {
    \"name\": \"SPODNIE NA ROWER MĘSKIE DŁUGIE KOLARKI XL\",
    \"price\": 119,
    \"imageURL\": \"https://a.allegroimg.com/s180/11eb1a/6ef26287417f9da8fc26e1adcbc8/SPODNIE-NA-ROWER-MESKIE-DLUGIE-KOLARKI-XL\",
    \"desc\": \"Stan: Nowy, Marka: Wheel-Up, Rozmiar: XL, Materiał dominujący: poliester, Długość nogawki: długie\"
  },
  {
    \"name\": \"DUŻY BAGAŻNIK NA ROWER KUFER ROWEROWY PL +GRATIS\",
    \"price\": 46.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11149d/37e1d04e45e8b6e981023e11b2bd/DUZY-BAGAZNIK-NA-ROWER-KUFER-ROWEROWY-PL-GRATIS\",
    \"desc\": \"Stan: Nowy, Marka: Inna marka (DROZ), Kolor dominujący: czarny\"
  },
  {
    \"name\": \"UCHWYT ROWEROWY NA TELEFON GPS ROWER MOTOCYKL GSM\",
    \"price\": 7.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ce7b/bd99dd464686b3b7b0bdbbf04947/UCHWYT-ROWEROWY-NA-TELEFON-GPS-ROWER-MOTOCYKL-GSM\",
    \"desc\": \"Stan: Nowy, Przeznaczenie: telefon\"
  },
  {
    \"name\": \"LICZNIK ROWEROWY BEZPRZEWODOWY WODOODPORNY 2.8“\",
    \"price\": 129.87,
    \"imageURL\": \"https://a.allegroimg.com/s180/11addf/ac7642df41f79db61208114d6d06/LICZNIK-ROWEROWY-BEZPRZEWODOWY-WODOODPORNY-2-8\",
    \"desc\": \"Stan: Nowy, Rodzaj: bezprzewodowy, Marka: West biking\"
  },
  {
    \"name\": \"Rower elektryczny Schiano E-Moon biały rama 21cali\",
    \"price\": 2999,
    \"imageURL\": \"https://a.allegroimg.com/s180/118b4c/de9a4118474cb00be21140f5fcc5/Rower-elektryczny-Schiano-E-Moon-bialy-rama-21cali\",
    \"desc\": \"Stan: Nowy, Rozmiar ramy: 21 cali, Kolor: biały, Marka: inna (Schiano)\"
  },
  {
    \"name\": \"LICZNIK ROWEROWY WODOODPORNY 14 FUNKCJI LCD\",
    \"price\": 16.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/114156/3e10d0fa433cad2ad788654f1399/LICZNIK-ROWEROWY-WODOODPORNY-14-FUNKCJI-LCD\",
    \"desc\": \"Stan: Nowy, Rodzaj: przewodowy, Marka: Reto MB\"
  },
  {
    \"name\": \"Rower górski OLPRAN BOMBER FULL disc 26 , SHIMANO\",
    \"price\": 799,
    \"imageURL\": \"https://a.allegroimg.com/s180/113887/00c678684baf8cab140711e1d308/Rower-gorski-OLPRAN-BOMBER-FULL-disc-26-SHIMANO\",
    \"desc\": \"Stan: Nowy, Marka: Olpran, Rozmiar ramy: 17 cali, Kolor: inny\"
  },
  {
    \"name\": \"WODOODPORNY licznik komputer rowerowy 28 funkcji\",
    \"price\": 46.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/112971/849541cd42d8b20b592424b49651/WODOODPORNY-licznik-komputer-rowerowy-28-funkcji\",
    \"desc\": \"Stan: Nowy, Rodzaj: przewodowy, Marka: Sunding\"
  },
  {
    \"name\": \"Buty rowerowe MTB wygodne górskie SPD Vemont\",
    \"price\": 189.8,
    \"imageURL\": \"https://a.allegroimg.com/s180/111c22/73a29a784e44a0e1d67636a24793/Buty-rowerowe-MTB-wygodne-gorskie-SPD-Vemont\",
    \"desc\": \"Stan: Nowy, Marka: Vemont, Rozmiar: 46\"
  },
  {
    \"name\": \"Lampa rowerowa + tył 6400mAh SolarStorm X2 E034\",
    \"price\": 99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1196bf/ddef51534ec1a42b56ce6d80fd25/Lampa-rowerowa-tyl-6400mAh-SolarStorm-X2-E034\",
    \"desc\": \"Stan: Nowy, Rodzaj: przednie, Zasilanie: akumulator\"
  },
  {
    \"name\": \"Zestawy naklejek 100/50cm ! Aż do 128 elementów !\",
    \"price\": 23.99,
    \"imageURL\": \"https://0.allegroimg.com/s180/034f1b/f28f060442f39e361c2807d11450/Zestawy-naklejek-100-50cm-Az-do-128-elementow\",
    \"desc\": \"Kolor dominujący: wielokolorowy\"
  },
  {
    \"name\": \"Rower Romet Gazela E-bike elektryczny Spec Edition\",
    \"price\": 4499,
    \"imageURL\": \"https://a.allegroimg.com/s180/113f4a/8962e51f4b699b2adfdf92fce088/Rower-Romet-Gazela-E-bike-elektryczny-Spec-Edition\",
    \"desc\": \"Stan: Nowy, Rozmiar ramy: 18 cali, Kolor: grafitowy, Marka: Romet\"
  },
  {
    \"name\": \"ROWER GÓRSKI ROMET RAMBLER 24\\\" MTB SHIMANO\",
    \"price\": 990,
    \"imageURL\": \"https://a.allegroimg.com/s180/11218e/949a0ce442febf7ce99490cc880b/ROWER-GORSKI-ROMET-RAMBLER-24-MTB-SHIMANO\",
    \"desc\": \"Stan: Nowy, Rozmiar ramy: 13 cali, Kolor: wielokolorowy, Marka: Romet\"
  },
  {
    \"name\": \"ROWER GÓRSKI MTB ROMET RAMBLER 9.1 SPECIAL 29\",
    \"price\": 1489,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c4ab/6eaa1f244b5fb66ce34040f1d72a/ROWER-GORSKI-MTB-ROMET-RAMBLER-9-1-SPECIAL-29\",
    \"desc\": \"Stan: Nowy, Marka: Romet, Rozmiar ramy: 19 cali, Kolor: szary\"
  },
  {
    \"name\": \"ROWER DZIECIĘCY, GÓRSKI OLPRAN BUDDY 20 , SHIMANO\",
    \"price\": 649,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ca8d/8123f09546d39440dd3b2b5cb69d/ROWER-DZIECIECY-GORSKI-OLPRAN-BUDDY-20-SHIMANO\",
    \"desc\": \"Stan: Nowy, Marka: Kona, Rozmiar ramy: brak informacji, Kolor: zielony\"
  },
  {
    \"name\": \"PEDAŁY aluminium PLATFORMOWE LEKKIE ROCKRBOS\",
    \"price\": 99.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/111ea6/b7ef5b804f568f5defd7fb4a6da1/PEDALY-aluminium-PLATFORMOWE-LEKKIE-ROCKRBOS\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"ROWER GÓRSKI OLPRAN SPIRIT FULL DISC 24 , SHIMANO\",
    \"price\": 799,
    \"imageURL\": \"https://a.allegroimg.com/s180/113c8d/2daa452d472a8acf25be3dc5eee1/ROWER-GORSKI-OLPRAN-SPIRIT-FULL-DISC-24-SHIMANO\",
    \"desc\": \"Stan: Nowy, Rozmiar ramy: 13 cali, Kolor: czarny, Marka: Olpran\"
  },
  {
    \"name\": \"UCHWYT ROWEROWY MOTOCYKL NA TELEFON GPS ROWER GSM\",
    \"price\": 10,
    \"imageURL\": \"https://a.allegroimg.com/s180/11f3c0/48b947004c7ab9c576db3cb868c1/UCHWYT-ROWEROWY-MOTOCYKL-NA-TELEFON-GPS-ROWER-GSM\",
    \"desc\": \"Stan: Nowy, Przeznaczenie: telefon\"
  },
  {
    \"name\": \"Wozinsky pojemna torba sakwa rowerowa na bagażnik\",
    \"price\": 179,
    \"imageURL\": \"https://a.allegroimg.com/s180/11fb06/c902203842f99b5e8d679c20ab33/Wozinsky-pojemna-torba-sakwa-rowerowa-na-bagaznik\",
    \"desc\": \"Stan: Nowy, Marka: Wozinsky, Rodzaj: tylna, Kolor dominujący: czarny\"
  },
  {
    \"name\": \"WOZINSKY POJEMNA TORBA SAKWA ROWEROWA POD RAMĘ\",
    \"price\": 109,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ed78/8578b1784a178a5f1aa922243316/WOZINSKY-POJEMNA-TORBA-SAKWA-ROWEROWA-POD-RAME\",
    \"desc\": \"Stan: Nowy, Marka: Wozinsky, Rodzaj: brak informacji, Kolor dominujący: odcienie szarości\"
  },
  {
    \"name\": \"LAMPKA ROWEROWA LED PRZÓD 800 LUMENÓW MOCNA + TYŁ\",
    \"price\": 48.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11dc95/f7389b5043a8a9b1f9d964f280a6/LAMPKA-ROWEROWA-LED-PRZOD-800-LUMENOW-MOCNA-TYL\",
    \"desc\": \"Stan: Nowy, Rodzaj: zestaw, Zasilanie: akumulator\"
  },
  {
    \"name\": \"FORTIS LAMPKA ROWEROWA LED LICZNIK KLAKSON + TYLNA\",
    \"price\": 89,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ee80/1b00edaf4e68818dcc9846aa9093/FORTIS-LAMPKA-ROWEROWA-LED-LICZNIK-KLAKSON-TYLNA\",
    \"desc\": \"Stan: Nowy, Rodzaj: zestaw, Zasilanie: akumulator\"
  },
  {
    \"name\": \"Buty rowerowe wygodne MTB górskie SPD Vemont\",
    \"price\": 269.8,
    \"imageURL\": \"https://a.allegroimg.com/s180/11fddb/d14dd9f444dea1f5b2e9ba3c32f2/Buty-rowerowe-wygodne-MTB-gorskie-SPD-Vemont\",
    \"desc\": \"Stan: Nowy, Marka: Vemont, Rozmiar: 42\"
  },
  {
    \"name\": \"WOZINSKY 2x DUŻA TORBA ROWEROWA SAKWA NA BAGAŻNIK\",
    \"price\": 304,
    \"imageURL\": \"https://a.allegroimg.com/s180/1174e4/e3c2d6a74d33b688df2638024081/WOZINSKY-2x-DUZA-TORBA-ROWEROWA-SAKWA-NA-BAGAZNIK\",
    \"desc\": \"Stan: Nowy, Marka: Wozinsky, Rodzaj: tylna, Kolor dominujący: czarny\"
  },
  {
    \"name\": \"STOPKA NÓŻKA PODPÓRKA REGULOWANA ROWEROWA NA ROWER\",
    \"price\": 10.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11cb99/01b9bb614aea80620dba105f3577/STOPKA-NOZKA-PODPORKA-REGULOWANA-ROWEROWA-NA-ROWER\",
    \"desc\": \"Stan: Nowy, Rodzaj: centralna, pojedyncza, regulowana, tylna, Marka: Inna marka (P&S)\"
  },
  {
    \"name\": \"MEGA ZESTAW ODPOWIETRZANIA HAMULCÓW SHIMANO TEKTRO\",
    \"price\": 69,
    \"imageURL\": \"https://a.allegroimg.com/s180/116fc2/49ff931544ea9b87125accfd649a/MEGA-ZESTAW-ODPOWIETRZANIA-HAMULCOW-SHIMANO-TEKTRO\",
    \"desc\": \"Stan: Nowy, Marka: EZmtb\"
  },
  {
    \"name\": \"TRENAŻER MAGNETYCZNY rowerowy podstawka manetka 8\",
    \"price\": 297,
    \"imageURL\": \"https://a.allegroimg.com/s180/1153c3/cdcc217c4373adfbd278f9d3853f/TRENAZER-MAGNETYCZNY-rowerowy-podstawka-manetka-8\",
    \"desc\": \"Stan: Nowy, Rodzaj: magnetyczny, Marka: Inna marka (trenażer)\"
  },
  {
    \"name\": \"STRÓJ ROWEROWY KOMPLET KOLARSKI OCIEPLANY ŻELOWY\",
    \"price\": 374.98,
    \"imageURL\": \"https://a.allegroimg.com/s180/11931a/49e479174b71ace4e2eac3811382/STROJ-ROWEROWY-KOMPLET-KOLARSKI-OCIEPLANY-ZELOWY\",
    \"desc\": \"Stan: Nowy, Rozmiar: M, Materiał dominujący: poliester\"
  },
  {
    \"name\": \"MOCNA LATARKA CREE XH-P90 ZOOM\",
    \"price\": 64.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/117662/483f0c0a4574994f97587151a1ba/MOCNA-LATARKA-CREE-XH-P90-ZOOM\",
    \"desc\": \"Stan: Nowy, Rodzaj: brak informacji, Zasilanie: akumulator\"
  },
  {
    \"name\": \"KLUCZE ROWEROWE ZESTAW NARZĘDZI DO NAPRAWY ROWERU\",
    \"price\": 147,
    \"imageURL\": \"https://a.allegroimg.com/s180/11df47/1345f0d74818aced5adbbe070c63/KLUCZE-ROWEROWE-ZESTAW-NARZEDZI-DO-NAPRAWY-ROWERU\",
    \"desc\": \"Stan: Nowy, Marka: Inna marka (TopSmart), Przeznaczenie: wielofunkcyjne\"
  },
  {
    \"name\": \"MFH Poncho Peleryna Przeciwdeszczowa Vinyl Czarna\",
    \"price\": 21,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c4a3/4b2e8b4142eebf0a47fb3a7b3658/MFH-Poncho-Peleryna-Przeciwdeszczowa-Vinyl-Czarna\",
    \"desc\": \"Stan: Nowy, Marka: MFH, Kolor: czarny\"
  },
  {
    \"name\": \"Rower górski OLPRAN 29 , SHIMANO\",
    \"price\": 899,
    \"imageURL\": \"https://a.allegroimg.com/s180/1148ef/813b1df34940a329bd8924a92044/Rower-gorski-OLPRAN-29-SHIMANO\",
    \"desc\": \"Stan: Nowy, Marka: Olpran, Rozmiar ramy: 20 cali, Kolor: inny\"
  },
  {
    \"name\": \"BEZPRZEWODOWY LICZNIK ROWEROWY PRĘDKOŚCIOMIERZ LCD\",
    \"price\": 67.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11e27b/73fbea094279a123ccd39cf7d349/BEZPRZEWODOWY-LICZNIK-ROWEROWY-PREDKOSCIOMIERZ-LCD\",
    \"desc\": \"Stan: Nowy, Rodzaj: bezprzewodowy, Marka: Inna marka (LOGIT)\"
  },
  {
    \"name\": \"OPONA ROWEROWA 28X1 5/8X1 3/8 37-622 ANTYPRZEBICIE\",
    \"price\": 40,
    \"imageURL\": \"https://a.allegroimg.com/s180/111c02/3a9b02cf454d81d96832a09e85b6/OPONA-ROWEROWA-28X1-5-8X1-3-8-37-622-ANTYPRZEBICIE\",
    \"desc\": \"Stan: Nowy, Rozmiar koła (\\\"): 28, Marka: Black1\"
  },
  {
    \"name\": \"2x lampka rowerowa SPECTER DUO 300lm przód tył NEW\",
    \"price\": 59.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/116b47/d15be96e46bb9d9dbc0bdcc81979/2x-lampka-rowerowa-SPECTER-DUO-300lm-przod-tyl-NEW\",
    \"desc\": \"Stan: Nowy, Rodzaj: zestaw, Zasilanie: USB\"
  },
  {
    \"name\": \"WOZINSKY 2x DUŻA TORBA ROWEROWA SAKWA NA BAGAŻNIK\",
    \"price\": 304,
    \"imageURL\": \"https://a.allegroimg.com/s180/1174e4/e3c2d6a74d33b688df2638024081/WOZINSKY-2x-DUZA-TORBA-ROWEROWA-SAKWA-NA-BAGAZNIK\",
    \"desc\": \"Stan: Nowy, Marka: Wozinsky, Rodzaj: tylna, Kolor dominujący: czarny\"
  },
  {
    \"name\": \"KURTKA ROWEROWA KOLARSKA MĘSKA ZIMOWA DOPASOWANA\",
    \"price\": 269.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1189f8/7fc4c1bf44c3801e3c8bb5ee7780/KURTKA-ROWEROWA-KOLARSKA-MESKA-ZIMOWA-DOPASOWANA\",
    \"desc\": \"Stan: Nowy, Marka: X-Tiger, Rozmiar: 4XL, Materiał dominujący: poliester, Kaptur: bez kaptura\"
  },
  {
    \"name\": \"ROWER TREKINGOWY OLPRAN MERCURY 28, SHIMANO\",
    \"price\": 849,
    \"imageURL\": \"https://a.allegroimg.com/s180/113ea1/dc03db2f4bd0a24574034e5d6fdb/ROWER-TREKINGOWY-OLPRAN-MERCURY-28-SHIMANO\",
    \"desc\": \"Stan: Nowy, Rozmiar ramy: 20 cali, Kolor: szary, Marka: Olpran\"
  }
]`);

const c = gifts as BaseGift[];

export default c;
