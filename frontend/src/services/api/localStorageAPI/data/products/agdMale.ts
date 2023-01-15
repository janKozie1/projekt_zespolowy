import type { BaseGift } from '../gifts';

const gifts: unknown = JSON.parse(`[
  {
    \"name\": \"Szczoteczka Elektryczna Do Zębów Oral-B Vitality\",
    \"price\": 109,
    \"imageURL\": \"https://a.allegroimg.com/s180/11adee/4d9d19c5457d89090adb15a081bf/Szczoteczka-Elektryczna-Do-Zebow-Oral-B-Vitality\",
    \"desc\": \"Zasilanie: akumulatorowe, Typ szczoteczki: obrotowa, Liczba końcówek w zestawie: 5, Prędkość maksymalna: 7600 obr./min, Czas pracy bezprzewodowej: 28 min\"
  },
  {
    \"name\": \"OSUSZACZ POWIETRZA POCHŁANIACZ WILGOCI CICHY\",
    \"price\": 217,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b240/f7184bb64b6cb956f14aa3042fec/OSUSZACZ-POWIETRZA-POCHLANIACZ-WILGOCI-CICHY\",
    \"desc\": \"Wydajność: 0.3 l/24 h, Moc: 23 W\"
  },
  {
    \"name\": \"MASZYNKA TRYMER DO STRZYŻENIA GOLENIA WŁOSÓW BRODY\",
    \"price\": 89.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11e945/7548ff864833bbcbecf6bfd2fe53/MASZYNKA-TRYMER-DO-STRZYZENIA-GOLENIA-WLOSOW-BRODY\",
    \"desc\": \"Stan: Nowy, Zasilanie: akumulatorowe, Zastosowanie: do stylizacji brody, do ciała, Możliwość mycia pod wodą: tak\"
  },
  {
    \"name\": \"MOCNY ODKURZACZ BEZPRZEWODOWY 2W1 4KPA TURBO LED\",
    \"price\": 169,
    \"imageURL\": \"https://a.allegroimg.com/s180/11fac2/af3c98174b5591bd5a755b845063/MOCNY-ODKURZACZ-BEZPRZEWODOWY-2W1-4KPA-TURBO-LED\",
    \"desc\": \"Zasilanie: akumulatorowe, Odłączany odkurzacz ręczny: tak, Praca na mokro: nie\"
  },
  {
    \"name\": \"AMICA ODKURZACZ WORKOWY MOCNY, CICHY i NIEZAWODNY!\",
    \"price\": 244.44,
    \"imageURL\": \"https://a.allegroimg.com/s180/117e3e/8b5f489c4650b301498b324237f6/AMICA-ODKURZACZ-WORKOWY-MOCNY-CICHY-i-NIEZAWODNY\",
    \"desc\": \"Moc: 900 W, Rodzaj odkurzacza: workowy\"
  },
  {
    \"name\": \"Duży AUTOMATYCZNY OCZYSZCZACZ POWIETRZA jony 7w1\",
    \"price\": 399,
    \"imageURL\": \"https://a.allegroimg.com/s180/11e4cf/c3ce3fba43ffbad28398fcb24a3f/Duzy-AUTOMATYCZNY-OCZYSZCZACZ-POWIETRZA-jony-7w1\",
    \"desc\": \"Poziom hałasu: 50 dB, Maksymalna wydajność: 180 m³/h, Moc: 45 W\"
  },
  {
    \"name\": \"Robot Sprzątający Mopujący Ultenic D5s WiFi 3w1\",
    \"price\": 548.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11bec0/63a8e77f454d84b6c081753830ae/Robot-Sprzatajacy-Mopujacy-Ultenic-D5s-WiFi-3w1\",
    \"desc\": \"Pojemność zbiornika na kurz: 0.5 l, Czas pracy bezprzewodowej: 120 min\"
  },
  {
    \"name\": \"ODKURZACZ BEZWORKOWY CYKLONOWY 3300 +TURBOSZCZOTKA\",
    \"price\": 359.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/118f12/b3612406401fa9c885d076846df7/ODKURZACZ-BEZWORKOWY-CYKLONOWY-3300-TURBOSZCZOTKA\",
    \"desc\": \"Moc: 3999 W, Rodzaj odkurzacza: bezworkowy, Pojemność zbiornika na kurz: 3 l\"
  },
  {
    \"name\": \"FRYTKOWNICA BEZTŁUSZCZOWA FRYTOWNICA MOCNA 3.6L\",
    \"price\": 247.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1105e1/ed026f224a4c855e7503859a961b/FRYTKOWNICA-BEZTLUSZCZOWA-FRYTOWNICA-MOCNA-3-6L\",
    \"desc\": \"Pojemność misy: 3.6 l, Pojemność koszyka: 2.6 kg, Moc: 1300 W, Typ: air fryer\"
  },
  {
    \"name\": \"Kenwood Robot planetarny Prospero+ KHC29.H0BK\",
    \"price\": 499,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d1ea/22a2c604464582f467001b4e9b65/Kenwood-Robot-planetarny-Prospero-KHC29-H0BK\",
    \"desc\": \"Moc: 1000 W\"
  },
  {
    \"name\": \"Robot sprzątający RoboJet X-ONE 2 PRO\",
    \"price\": 2290,
    \"imageURL\": \"https://a.allegroimg.com/s180/111fae/b3ca96794410a2d48d57f3079a15/Robot-sprzatajacy-RoboJet-X-ONE-2-PRO\",
    \"desc\": \"Pojemność zbiornika na kurz: 0.25 l, Czas pracy bezprzewodowej: 150 min\"
  },
  {
    \"name\": \"GRILL OPIEKACZ TOSTER do KANAPEK GRZANEK PANINI LD\",
    \"price\": 99.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11add9/5d0b031a40cdb953f7cf021002d4/GRILL-OPIEKACZ-TOSTER-do-KANAPEK-GRZANEK-PANINI-LD\",
    \"desc\": \"Moc: 750 W, Liczba kanapek: 2, Nieprzywierająca powłoka: tak\"
  },
  {
    \"name\": \"MASZYNKA GOLARKA PHILIPS 8W1 WŁOSY I BRODA TRYMER\",
    \"price\": 199,
    \"imageURL\": \"https://a.allegroimg.com/s180/118c34/93fbe4dc44c4b5ff91610df921ed/MASZYNKA-GOLARKA-PHILIPS-8W1-WLOSY-I-BRODA-TRYMER\",
    \"desc\": \"Zasilanie: akumulatorowe, Możliwość mycia pod wodą: tak\"
  },
  {
    \"name\": \"Szczoteczka Elektryczna Do Zębów Oral-B Vitality\",
    \"price\": 109,
    \"imageURL\": \"https://a.allegroimg.com/s180/11adee/4d9d19c5457d89090adb15a081bf/Szczoteczka-Elektryczna-Do-Zebow-Oral-B-Vitality\",
    \"desc\": \"Zasilanie: akumulatorowe, Typ szczoteczki: obrotowa, Liczba końcówek w zestawie: 5, Prędkość maksymalna: 7600 obr./min, Czas pracy bezprzewodowej: 28 min\"
  },
  {
    \"name\": \"OPIEKACZ TOSTER GRILL do KANAPEK PANINI TORTILLA\",
    \"price\": 108.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d52f/db96b47f4f4c92f2a72cf1cf12a7/OPIEKACZ-TOSTER-GRILL-do-KANAPEK-PANINI-TORTILLA\",
    \"desc\": \"Moc: 700 W\"
  },
  {
    \"name\": \"Ciśnieniowy Ekspres do kawy AUTOMATYCZNY Yoer INOX\",
    \"price\": 698,
    \"imageURL\": \"https://a.allegroimg.com/s180/111ae3/e53ab1754d1787cb6dfd01e3279d/Cisnieniowy-Ekspres-do-kawy-AUTOMATYCZNY-Yoer-INOX\",
    \"desc\": \"Ciśnienie: 20 bar, Rodzaj ekspresu: automatyczny, Rodzaje kawy: mielona, Wbudowany młynek: nie\"
  },
  {
    \"name\": \"ROBOT KUCHENNY PLANETARNY MIKSER MyCHEF 2200W 6,2L\",
    \"price\": 469.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/110a80/04ed476f4e429cdcebec2a989b96/ROBOT-KUCHENNY-PLANETARNY-MIKSER-MyCHEF-2200W-6-2L\",
    \"desc\": \"Moc: 2200 W, Rodzaj regulacji obrotów: skokowa, Tryby pracy: pulsacyjny\"
  },
  {
    \"name\": \"ODKURZACZ PIONOWY BEZPRZEWODOWY 3w1 ZEEGMA 400W\",
    \"price\": 719,
    \"imageURL\": \"https://a.allegroimg.com/s180/117b91/ad112ac84b139f12860e6c973d2f/ODKURZACZ-PIONOWY-BEZPRZEWODOWY-3w1-ZEEGMA-400W\",
    \"desc\": \"Zasilanie: akumulatorowe, Odłączany odkurzacz ręczny: tak, Praca na mokro: nie\"
  },
  {
    \"name\": \"Szczoteczka Elektryczna Oral-B Vitality 100 ZESTAW\",
    \"price\": 109.15,
    \"imageURL\": \"https://a.allegroimg.com/s180/11eede/d80a7770429183ce6b508557738b/Szczoteczka-Elektryczna-Oral-B-Vitality-100-ZESTAW\",
    \"desc\": \"Zasilanie: akumulatorowe, Typ szczoteczki: obrotowa, Liczba końcówek w zestawie: 9, Prędkość maksymalna: 7600 obr./min, Czas pracy bezprzewodowej: 28 min\"
  },
  {
    \"name\": \"Ekspres ciśnieniowy De'Longhi ECAM 23.460.SB\",
    \"price\": 1599,
    \"imageURL\": \"https://a.allegroimg.com/s180/11945e/6ab9a42c45ca80a6e408e7d8a77f/Ekspres-cisnieniowy-De-Longhi-ECAM-23-460-SB\",
    \"desc\": \"Ciśnienie: 15 bar, Rodzaj ekspresu: automatyczny, Rodzaje kawy: ziarnista, mielona, Wbudowany młynek: tak\"
  },
  {
    \"name\": \"Beztłuszczowa Frytkownica Piekarnik 12L 1800W 12w1\",
    \"price\": 348.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/114c7f/7020980f4f9696fdf53476f1240d/Beztluszczowa-Frytkownica-Piekarnik-12L-1800W-12w1\",
    \"desc\": \"Moc: 1800 W, Pojemność: 12 l, Otwieranie drzwi: do dołu\"
  },
  {
    \"name\": \"Robot sprzątający Xiaomi Mi Vacuum-Mop 2 Pro black\",
    \"price\": 1399,
    \"imageURL\": \"https://a.allegroimg.com/s180/118593/51f03b7b4bc6a587865f657250a7/Robot-sprzatajacy-Xiaomi-Mi-Vacuum-Mop-2-Pro-black\",
    \"desc\": \"Pojemność zbiornika na kurz: 0.45 l, Czas pracy bezprzewodowej: 110 min\"
  },
  {
    \"name\": \"Ekspres ciśnieniowy De'Longhi Magnifica S 21.117.B\",
    \"price\": 1309,
    \"imageURL\": \"https://a.allegroimg.com/s180/252655/b74577994666be9a91d6337dffd9/Ekspres-cisnieniowy-De-Longhi-Magnifica-S-21-117-B\",
    \"desc\": \"Ciśnienie: 15 bar, Rodzaj ekspresu: automatyczny, Rodzaje kawy: ziarnista, Wbudowany młynek: tak\"
  },
  {
    \"name\": \"Bezprzewodowy Odkurzacz Pionowy Proscenic P11 WiFi\",
    \"price\": 498.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a3b2/92d7688e435d815fdb513749c98a/Bezprzewodowy-Odkurzacz-Pionowy-Proscenic-P11-WiFi\",
    \"desc\": \"Zasilanie: akumulatorowe, Odłączany odkurzacz ręczny: tak, Praca na mokro: nie\"
  },
  {
    \"name\": \"Deerma Odkurzacz Pionowy DX115C 600W 14000Pa HEPA\",
    \"price\": 108.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11817c/16c827674293817a19d0be51f30e/Deerma-Odkurzacz-Pionowy-DX115C-600W-14000Pa-HEPA\",
    \"desc\": \"Zasilanie: sieciowe, Odłączany odkurzacz ręczny: tak, Praca na mokro: nie\"
  },
  {
    \"name\": \"TOSTER OPIEKACZ DO KANAPEK TOSTÓW SANDWICH 1000W\",
    \"price\": 49.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/117fe5/0fcc4c2a433fabd4e3702b727c50/TOSTER-OPIEKACZ-DO-KANAPEK-TOSTOW-SANDWICH-1000W\",
    \"desc\": \"Moc: 1000 W, Pojemność: 2 tosty\"
  },
  {
    \"name\": \"BEZPRZEWODOWY ODKURZACZ SAMOCHODOWY RĘCZNY 120W\",
    \"price\": 99.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11db47/7ca5d347490bbd1f2ca14b18be76/BEZPRZEWODOWY-ODKURZACZ-SAMOCHODOWY-RECZNY-120W\",
    \"desc\": \"Zasilanie: sieciowe, akumulatorowe, gniazdo zapalniczki samochodowej, Czas pracy bezprzewodowej: 40 min, Praca na mokro: tak\"
  },
  {
    \"name\": \"2w1 BEZPRZEWODOWY PIONOWY Odkurzacz TURBOSZCZOTKA\",
    \"price\": 189,
    \"imageURL\": \"https://a.allegroimg.com/s180/116ccf/b81544e742d0acda5f65a5aaebdc/2w1-BEZPRZEWODOWY-PIONOWY-Odkurzacz-TURBOSZCZOTKA\",
    \"desc\": \"Moc: 4000 W, Rodzaj odkurzacza: bezworkowy, Pojemność zbiornika na kurz: 0.5 l\"
  },
  {
    \"name\": \"ODKURZACZ bezworkowy AMICA Bagio VM3041 900W\",
    \"price\": 279,
    \"imageURL\": \"https://a.allegroimg.com/s180/1150a1/d3536ecf4601a3a295efc8d3718c/ODKURZACZ-bezworkowy-AMICA-Bagio-VM3041-900W\",
    \"desc\": \"Moc: 900 W, Rodzaj odkurzacza: bezworkowy, Pojemność zbiornika na kurz: 1.5 l\"
  },
  {
    \"name\": \"MASZYNKA TRYMER DO STRZYŻENIA GOLENIA WŁOSÓW BRODY\",
    \"price\": 89.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11e945/7548ff864833bbcbecf6bfd2fe53/MASZYNKA-TRYMER-DO-STRZYZENIA-GOLENIA-WLOSOW-BRODY\",
    \"desc\": \"Stan: Nowy, Zasilanie: akumulatorowe, Zastosowanie: do stylizacji brody, do ciała, Możliwość mycia pod wodą: tak\"
  },
  {
    \"name\": \"OCZYSZCZACZ POWIETRZA XIAOMI MI AIR PURIFIER 3C\",
    \"price\": 449,
    \"imageURL\": \"https://a.allegroimg.com/s180/1120ed/b9be8c9e45a783259405b84ae0e1/OCZYSZCZACZ-POWIETRZA-XIAOMI-MI-AIR-PURIFIER-3C\",
    \"desc\": \"Poziom hałasu: 61 dB, Maksymalna wydajność: 320 m³/h, Moc: 29 W\"
  },
  {
    \"name\": \"OPIEKACZ TOSTER GOFROWNICA 3w1 MESKO 1000W MS3045\",
    \"price\": 104.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/111221/ab0677c84b50acf82e520ba70a45/OPIEKACZ-TOSTER-GOFROWNICA-3w1-MESKO-1000W-MS3045\",
    \"desc\": \"Moc: 1000 W, Liczba kanapek: 2, Nieprzywierająca powłoka: tak\"
  },
  {
    \"name\": \"Bezprzewodowy Odkurzacz Pionowy Proscenic P8 PLUS\",
    \"price\": 348.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/118241/bc0b7fde4f52b09aed0d2241f88c/Bezprzewodowy-Odkurzacz-Pionowy-Proscenic-P8-PLUS\",
    \"desc\": \"Zasilanie: akumulatorowe, Odłączany odkurzacz ręczny: tak, Praca na mokro: nie\"
  },
  {
    \"name\": \"ELEKTRYCZNA MASZYNKA DO MIELENIA MIĘSA 2200W 3SITA\",
    \"price\": 159,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ccbb/186bd2414de0854bc7c5b89fd169/ELEKTRYCZNA-MASZYNKA-DO-MIELENIA-MIESA-2200W-3SITA\",
    \"desc\": \"Wydajność mielenia: 2 kg/min, Moc: 2000 W, Bieg wsteczny: tak\"
  },
  {
    \"name\": \"SUSZARKA DO WŁOSÓW JONIZACJA DYFUZOR MOCNA 2200W\",
    \"price\": 117.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11f355/c45caa084dc2abd3b6b47c7d1f48/SUSZARKA-DO-WLOSOW-JONIZACJA-DYFUZOR-MOCNA-2200W\",
    \"desc\": \"Stan: Nowy, Moc: 2200 W, Funkcje: zimny nadmuch\"
  },
  {
    \"name\": \"SILVERCREST Zgrzewarka próżniowa najnowszy model\",
    \"price\": 185,
    \"imageURL\": \"https://a.allegroimg.com/s180/116899/e5a017e04826b6d060e057d55d27/SILVERCREST-Zgrzewarka-prozniowa-najnowszy-model\",
    \"desc\": \"Moc: 125 W, Maksymalna szerokość zgrzewu: 30 cm\"
  },
  {
    \"name\": \"Odkurzacz CYKLONOWY ZEEGMA Bezworkowy 4000W 2xHEPA\",
    \"price\": 279,
    \"imageURL\": \"https://a.allegroimg.com/s180/119e6d/db4b05804a2e9b0d51ae3057ddc5/Odkurzacz-CYKLONOWY-ZEEGMA-Bezworkowy-4000W-2xHEPA\",
    \"desc\": \"Moc: 4000 W, Rodzaj odkurzacza: bezworkowy, Pojemność zbiornika na kurz: 2.5 l\"
  },
  {
    \"name\": \"Odkurzacz bezworkowy PHILIPS PowerPro FC9333/09\",
    \"price\": 549,
    \"imageURL\": \"https://a.allegroimg.com/s180/113da3/cf51b6764ae3babbc1028202d56c/Odkurzacz-bezworkowy-PHILIPS-PowerPro-FC9333-09\",
    \"desc\": \"Moc: 900 W, Rodzaj odkurzacza: bezworkowy, Pojemność zbiornika na kurz: 1.5 l\"
  },
  {
    \"name\": \"GOLARKA SIECIOWA DO UBRAŃ TAPICERKI MOCNA I DUŻA\",
    \"price\": 22.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11080f/652bace742b8bc3ac3f16a0688e7/GOLARKA-SIECIOWA-DO-UBRAN-TAPICERKI-MOCNA-I-DUZA\",
    \"desc\": \"Marka: LTC, Zasilanie: sieciowe\"
  },
  {
    \"name\": \"OPIEKACZ TOSTER 5W1 GOFROWNICA GRILL PANINI 1200W\",
    \"price\": 142.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/112d0b/f93368fe4ce191e08b56ea75eea2/OPIEKACZ-TOSTER-5W1-GOFROWNICA-GRILL-PANINI-1200W\",
    \"desc\": \"Moc: 1200 W, Liczba kanapek: 4, Nieprzywierająca powłoka: tak\"
  },
  {
    \"name\": \"Ciśnieniowy Ekspres do kawy Yoer 1100W 20bar 10kaw\",
    \"price\": 458,
    \"imageURL\": \"https://a.allegroimg.com/s180/118fd6/2838ed9c439e8cdc75b870e31462/Cisnieniowy-Ekspres-do-kawy-Yoer-1100W-20bar-10kaw\",
    \"desc\": \"Ciśnienie: 20 bar, Rodzaj ekspresu: kolbowy, Rodzaje kawy: mielona, Wbudowany młynek: nie\"
  },
  {
    \"name\": \"OSUSZACZ POWIETRZA POCHŁANIACZ WILGOCI CICHY\",
    \"price\": 217,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b240/f7184bb64b6cb956f14aa3042fec/OSUSZACZ-POWIETRZA-POCHLANIACZ-WILGOCI-CICHY\",
    \"desc\": \"Wydajność: 0.3 l/24 h, Moc: 23 W\"
  },
  {
    \"name\": \"Robot Sprzątający Mopujący Ultenic D5s WiFi 3w1\",
    \"price\": 548.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11bec0/63a8e77f454d84b6c081753830ae/Robot-Sprzatajacy-Mopujacy-Ultenic-D5s-WiFi-3w1\",
    \"desc\": \"Pojemność zbiornika na kurz: 0.5 l, Czas pracy bezprzewodowej: 120 min\"
  },
  {
    \"name\": \"Szczoteczka Elektryczna Oral-B Vitality 100 ZESTAW\",
    \"price\": 109.15,
    \"imageURL\": \"https://a.allegroimg.com/s180/11eede/d80a7770429183ce6b508557738b/Szczoteczka-Elektryczna-Oral-B-Vitality-100-ZESTAW\",
    \"desc\": \"Zasilanie: akumulatorowe, Typ szczoteczki: obrotowa, Liczba końcówek w zestawie: 9, Prędkość maksymalna: 7600 obr./min, Czas pracy bezprzewodowej: 28 min\"
  },
  {
    \"name\": \"TOSTER OPIEKACZ DO KANAPEK TOSTÓW SANDWICH 1000W\",
    \"price\": 46.88,
    \"imageURL\": \"https://a.allegroimg.com/s180/11cba6/d87045264bbfa6932ef8863d88c3/TOSTER-OPIEKACZ-DO-KANAPEK-TOSTOW-SANDWICH-1000W\",
    \"desc\": \"Moc: 1000 W, Liczba kanapek: 2, Nieprzywierająca powłoka: tak\"
  },
  {
    \"name\": \"LOKÓWKA AUTOMATYCZNA DO WŁOSÓW FALOWNICA CERAMICZN\",
    \"price\": 137,
    \"imageURL\": \"https://a.allegroimg.com/s180/112bae/49a859ae41119526a3b7a0bcadbf/LOKOWKA-AUTOMATYCZNA-DO-WLOSOW-FALOWNICA-CERAMICZN\",
    \"desc\": \"Stan: Nowy, Typ: lokówka automatyczna, Powłoka: ceramiczna, Moc: 25 W, Regulacja temperatury: tak\"
  },
  {
    \"name\": \"ODKURZACZ MOP MYJĄCY POWER AQUA 3W1 BEZPRZEWODOWY\",
    \"price\": 549,
    \"imageURL\": \"https://a.allegroimg.com/s180/117609/feb7bbe34a38913bd5a6faf4b050/ODKURZACZ-MOP-MYJACY-POWER-AQUA-3W1-BEZPRZEWODOWY\",
    \"desc\": \"Zasilanie: akumulatorowe, Odłączany odkurzacz ręczny: tak, Praca na mokro: tak\"
  },
  {
    \"name\": \"OPIEKACZ SANDWICH MAKER TOSTER GRILL PANINI 2200W\",
    \"price\": 196.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/111ad1/a956515d4395aac641721c5adb71/OPIEKACZ-SANDWICH-MAKER-TOSTER-GRILL-PANINI-2200W\",
    \"desc\": \"Moc: 2200 W\"
  },
  {
    \"name\": \"SZCZOTECZKA SONICZNA DO ZĘBÓW ELEKTRYCZNA U-SMILER\",
    \"price\": 169,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c7f6/5fe8f6584093b35c7e86288331fa/SZCZOTECZKA-SONICZNA-DO-ZEBOW-ELEKTRYCZNA-U-SMILER\",
    \"desc\": \"Zasilanie: akumulatorowe, Typ szczoteczki: soniczna, Liczba końcówek w zestawie: 2, Prędkość maksymalna: 84000 obr./min, Czas pracy bezprzewodowej: 360 min\"
  },
  {
    \"name\": \"FRYTKOWNICA BEZTŁUSZCZOWA FRYTOWNICA EASY 4L 1500W\",
    \"price\": 269.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/118bc2/a07201ec4dc3b1cf7b2844471107/FRYTKOWNICA-BEZTLUSZCZOWA-FRYTOWNICA-EASY-4L-1500W\",
    \"desc\": \"Pojemność misy: 4 l, Pojemność koszyka: 2.6 kg, Moc: 1500 W, Typ: air fryer\"
  },
  {
    \"name\": \"Cichy Odkurzacz workowy Yoer INTELIGENTNY +PILOT\",
    \"price\": 798,
    \"imageURL\": \"https://a.allegroimg.com/s180/11e180/d83ef62940e6aa597541a3ec0d7f/Cichy-Odkurzacz-workowy-Yoer-INTELIGENTNY-PILOT\",
    \"desc\": \"Moc: 4200 W, Rodzaj odkurzacza: workowy\"
  },
  {
    \"name\": \"Odkurzacz bezworkowy Bosch BGC05A322 700W 9 m\",
    \"price\": 449,
    \"imageURL\": \"https://a.allegroimg.com/s180/113c13/174bdd7844cda0cc01989abf120c/Odkurzacz-bezworkowy-Bosch-BGC05A322-700W-9-m\",
    \"desc\": \"Moc: 700 W, Rodzaj odkurzacza: bezworkowy, Pojemność zbiornika na kurz: 1.5 l\"
  },
  {
    \"name\": \"ODKURZACZ WORKOWY AMICA VM2062 TURBOSZCZOTKA HEPA\",
    \"price\": 289,
    \"imageURL\": \"https://a.allegroimg.com/s180/11f6f8/785320a6444789b8b875ab77d1d6/ODKURZACZ-WORKOWY-AMICA-VM2062-TURBOSZCZOTKA-HEPA\",
    \"desc\": \"Moc: 900 W, Rodzaj odkurzacza: workowy, Pojemność zbiornika na kurz: 3 l\"
  },
  {
    \"name\": \"EKSPRES CIŚNIENIOWY AMICA Espris CD 1011 5bar 800W\",
    \"price\": 169,
    \"imageURL\": \"https://a.allegroimg.com/s180/11f27f/c6cffefa4674a7bd3bcbe15c236a/EKSPRES-CISNIENIOWY-AMICA-Espris-CD-1011-5bar-800W\",
    \"desc\": \"Ciśnienie: 5 bar, Rodzaj ekspresu: kolbowy, Rodzaje kawy: mielona, Wbudowany młynek: nie\"
  },
  {
    \"name\": \"ROBOT KUCHENNY PLANETARNY MIKSER z MISĄ MOCNY\",
    \"price\": 249,
    \"imageURL\": \"https://a.allegroimg.com/s180/11abca/6dc47be448e8863402d03864eadd/ROBOT-KUCHENNY-PLANETARNY-MIKSER-z-MISA-MOCNY\",
    \"desc\": \"Moc: 1200 W, Rodzaj regulacji obrotów: skokowa, Tryby pracy: pulsacyjny\"
  },
  {
    \"name\": \"ODKURZACZ WORKOWY VM 1034 ORA AMICA 900W MOCNY\",
    \"price\": 219,
    \"imageURL\": \"https://a.allegroimg.com/s180/110c87/368f9e0a4a50bcc553d5e610b266/ODKURZACZ-WORKOWY-VM-1034-ORA-AMICA-900W-MOCNY\",
    \"desc\": \"Moc: 900 W, Rodzaj odkurzacza: workowy, Pojemność zbiornika na kurz: 2 l\"
  },
  {
    \"name\": \"BEZPRZEWODOWY ODKURZACZ SAMOCHODOWY RĘCZNY 120W\",
    \"price\": 99.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11db47/7ca5d347490bbd1f2ca14b18be76/BEZPRZEWODOWY-ODKURZACZ-SAMOCHODOWY-RECZNY-120W\",
    \"desc\": \"Zasilanie: sieciowe, akumulatorowe, gniazdo zapalniczki samochodowej, Czas pracy bezprzewodowej: 40 min, Praca na mokro: tak\"
  },
  {
    \"name\": \"ODKURZACZ PIONOWY BEZPRZEWODOWY dirt devil\",
    \"price\": 289,
    \"imageURL\": \"https://a.allegroimg.com/s180/113ac4/655e6c0d40c09ea3d6fd52134771/ODKURZACZ-PIONOWY-BEZPRZEWODOWY-dirt-devil\",
    \"desc\": \"Zasilanie: akumulatorowe, Odłączany odkurzacz ręczny: tak, Praca na mokro: nie\"
  },
  {
    \"name\": \"MOCNY ODKURZACZ BEZPRZEWODOWY 2W1 4KPA TURBO LED\",
    \"price\": 169,
    \"imageURL\": \"https://a.allegroimg.com/s180/11fac2/af3c98174b5591bd5a755b845063/MOCNY-ODKURZACZ-BEZPRZEWODOWY-2W1-4KPA-TURBO-LED\",
    \"desc\": \"Zasilanie: akumulatorowe, Odłączany odkurzacz ręczny: tak, Praca na mokro: nie\"
  },
  {
    \"name\": \"Golarka ubrań DUŻA MOCNA NOWOCZESNA swetrów 2 NOŻE\",
    \"price\": 69,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ab6d/08b6222c48d69687c9f313a5973c/Golarka-ubran-DUZA-MOCNA-NOWOCZESNA-swetrow-2-NOZE\",
    \"desc\": \"Marka: DM, Zasilanie: sieciowo-akumulatorowe\"
  },
  {
    \"name\": \"GOLARKA DO UBRAŃ SWETRÓW TAPICERKI GRZEBIEŃ MOCNA\",
    \"price\": 7.79,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ff3c/5d9465b847fe8a7881a0de658b23/GOLARKA-DO-UBRAN-SWETROW-TAPICERKI-GRZEBIEN-MOCNA\",
    \"desc\": \"Marka: inna (Sell), Zasilanie: brak informacji\"
  },
  {
    \"name\": \"Szczoteczka Elektryczna Oral-B Vitality 100 Zestaw\",
    \"price\": 103.55,
    \"imageURL\": \"https://a.allegroimg.com/s180/115d48/ca4a9c08416faae5703b54b93bae/Szczoteczka-Elektryczna-Oral-B-Vitality-100-Zestaw\",
    \"desc\": \"Zasilanie: akumulatorowe, Typ szczoteczki: obrotowa, Liczba końcówek w zestawie: 9, Prędkość maksymalna: 7600 obr./min, Czas pracy bezprzewodowej: 28 min\"
  },
  {
    \"name\": \"ODKURZACZ BEZWORKOWY CYKLONOWY 3200 +TURBOSZCZOTKA\",
    \"price\": 329.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1185b1/91bfb52043c4a04b5e7a56609280/ODKURZACZ-BEZWORKOWY-CYKLONOWY-3200-TURBOSZCZOTKA\",
    \"desc\": \"Moc: 3999 W, Rodzaj odkurzacza: bezworkowy, Pojemność zbiornika na kurz: 2.5 l\"
  },
  {
    \"name\": \"DUZA GOLARKA DO UBRAŃ SWETROW TAPICERKI SIECIOWA\",
    \"price\": 40,
    \"imageURL\": \"https://a.allegroimg.com/s180/117e3e/13e73b6e4317aaa31fd17cfde3a6/DUZA-GOLARKA-DO-UBRAN-SWETROW-TAPICERKI-SIECIOWA\",
    \"desc\": \"Marka: inna, Zasilanie: sieciowe\"
  },
  {
    \"name\": \"Bezprzewodowy Odkurzacz Pionowy ORFELD EV679 LED\",
    \"price\": 338.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1121e9/2c3f316942619ab1578b8e2b9b99/Bezprzewodowy-Odkurzacz-Pionowy-ORFELD-EV679-LED\",
    \"desc\": \"Zasilanie: akumulatorowe, Odłączany odkurzacz ręczny: tak, Praca na mokro: nie\"
  },
  {
    \"name\": \"GOLARKA DO UBRAŃ ODZIEŻY TKANIN sieciowa\",
    \"price\": 40,
    \"imageURL\": \"https://a.allegroimg.com/s180/1106f1/76cd5b4044e19df5fd8dabd867b0/GOLARKA-DO-UBRAN-ODZIEZY-TKANIN-sieciowa\",
    \"desc\": \"Marka: Sonny, Zasilanie: sieciowe\"
  },
  {
    \"name\": \"TOSTER OPIEKACZ DO KANAPEK TOSTÓW SANDWICH 1000W\",
    \"price\": 49.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/117fe5/0fcc4c2a433fabd4e3702b727c50/TOSTER-OPIEKACZ-DO-KANAPEK-TOSTOW-SANDWICH-1000W\",
    \"desc\": \"Moc: 1000 W, Pojemność: 2 tosty\"
  },
  {
    \"name\": \"Odkurzacz ręczny bezworkowy pionowy mocny max 600W\",
    \"price\": 159.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c3d2/04dc61514895bf0e8681eadfd09d/Odkurzacz-reczny-bezworkowy-pionowy-mocny-max-600W\",
    \"desc\": \"Zasilanie: sieciowe, Odłączany odkurzacz ręczny: nie, Praca na mokro: nie\"
  },
  {
    \"name\": \"FRYTKOWNICA FRYTOWNICA BEZTŁUSZCZOWA 3,5L MOCNA XL\",
    \"price\": 329,
    \"imageURL\": \"https://a.allegroimg.com/s180/11565d/11e96c6c49b4b500c8afcad07cf3/FRYTKOWNICA-FRYTOWNICA-BEZTLUSZCZOWA-3-5L-MOCNA-XL\",
    \"desc\": \"Pojemność misy: 3.5 l, Pojemność koszyka: 2.9 kg, Moc: 1500 W, Typ: air fryer\"
  },
  {
    \"name\": \"ELEKTRONICZNA WAGA KUCHENNA PRECYZYJNA LCD DOTYK\",
    \"price\": 24.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c1c9/747cec094ac59fc3165424732bdd/ELEKTRONICZNA-WAGA-KUCHENNA-PRECYZYJNA-LCD-DOTYK\",
    \"desc\": \"Marka: Esperanza, Rodzaj baterii: baterie CR2032, Maksymalne obciążenie: 5 kg\"
  },
  {
    \"name\": \"SUSZARKA DO WŁOSÓW JONIZACJA DYFUZOR MOCNA 2200W\",
    \"price\": 117.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11f355/c45caa084dc2abd3b6b47c7d1f48/SUSZARKA-DO-WLOSOW-JONIZACJA-DYFUZOR-MOCNA-2200W\",
    \"desc\": \"Stan: Nowy, Moc: 2200 W, Funkcje: zimny nadmuch\"
  },
  {
    \"name\": \"OPIEKACZ TOSTER GOFROWNICA 3w1 MESKO 1000W MS3045\",
    \"price\": 104.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/111221/ab0677c84b50acf82e520ba70a45/OPIEKACZ-TOSTER-GOFROWNICA-3w1-MESKO-1000W-MS3045\",
    \"desc\": \"Moc: 1000 W, Liczba kanapek: 2, Nieprzywierająca powłoka: tak\"
  },
  {
    \"name\": \"Bezprzewodowy Odkurzacz Pionowy ORFELD EV679 LED\",
    \"price\": 338.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1121e9/2c3f316942619ab1578b8e2b9b99/Bezprzewodowy-Odkurzacz-Pionowy-ORFELD-EV679-LED\",
    \"desc\": \"Zasilanie: akumulatorowe, Odłączany odkurzacz ręczny: tak, Praca na mokro: nie\"
  }
]`);

const c = gifts as BaseGift[];

export default c;
