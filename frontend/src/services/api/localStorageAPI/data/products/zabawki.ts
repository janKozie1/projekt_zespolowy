import type { BaseGift } from '../gifts';

const gifts: unknown = JSON.parse(`[
  {
    \"name\": \"KLOCKI MAGNETYCZNE KONSTRUKCYJNE ŚWIECĄCY TOR 75el\",
    \"price\": 109,
    \"imageURL\": \"https://a.allegroimg.com/s180/110f37/c12dfa7b484a88307f78674ccdde/KLOCKI-MAGNETYCZNE-KONSTRUKCYJNE-SWIECACY-TOR-75el\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 3 lata +, Marka: inna (JIMMY), Liczba elementów: 75 szt.\"
  },
  {
    \"name\": \"MEGA TOR WYŚCIGOWY XXXL DINOZAUR DINO PARK 169 el.\",
    \"price\": 139.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a931/30410b274e5cb809dce6dd7e0af2/MEGA-TOR-WYSCIGOWY-XXXL-DINOZAUR-DINO-PARK-169-el\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 3 lata +, Marka: inna (ORBITAL PARADISE), Długość: 210 cm\"
  },
  {
    \"name\": \"KLOCKI MAGNETYCZNE KONSTRUKCYJNE ŚWIECĄCY TOR 75el\",
    \"price\": 109,
    \"imageURL\": \"https://a.allegroimg.com/s180/110f37/c12dfa7b484a88307f78674ccdde/KLOCKI-MAGNETYCZNE-KONSTRUKCYJNE-SWIECACY-TOR-75el\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 3 lata +, Marka: inna (JIMMY), Liczba elementów: 75 szt.\"
  },
  {
    \"name\": \"TOR KULKOWY KULODROM ZESTAW 113 EL KULKI WYRZUTNIA\",
    \"price\": 129.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ee02/afc0907c452b9f7adc7db5c0fdd6/TOR-KULKOWY-KULODROM-ZESTAW-113-EL-KULKI-WYRZUTNIA\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 3 lata +, Marka: DK, Szerokość produktu: 36 cm, Głębokość produktu: 18 cm, Wysokość produktu: 42.5 cm, Kolor dominujący: wielokolorowy\"
  },
  {
    \"name\": \"KARABIN MASZYNOWY SNAJPERSKI LUNETA LASER KULKI\",
    \"price\": 119.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/113c73/6aba7d3749c4ab8f3ca3d6025cef/KARABIN-MASZYNOWY-SNAJPERSKI-LUNETA-LASER-KULKI\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 18 lat +, Marka: Skleplolki, Efekty: brak, Wysokość produktu: 30 cm, Szerokość produktu: 74 cm, Głębokość produktu: 5 cm, Kolor dominujący: czerń\"
  },
  {
    \"name\": \"HAFT DIAMENTOWY MALOWANIE DIAMENTAMI MOZAIKA 5D\",
    \"price\": 73,
    \"imageURL\": \"https://a.allegroimg.com/s180/1152d8/7e8b8ef946599638c16b87fb58a2/HAFT-DIAMENTOWY-MALOWANIE-DIAMENTAMI-MOZAIKA-5D\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 7 lat +, Marka: Martius, Wysokość produktu: 24 cm, Szerokość produktu: 24 cm, Głębokość produktu: 5 cm\"
  },
  {
    \"name\": \"GADAJĄCY INTERAKTYWNY CHOMIK GADUŁA PRZEDRZEŹNIACZ\",
    \"price\": 29.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/110140/ef830b5c475d81d531c8d360fb09/GADAJACY-INTERAKTYWNY-CHOMIK-GADULA-PRZEDRZEZNIACZ\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 2 lata +, Marka: inna (Satis), Wysokość produktu: 16 cm, Kolor dominujący: odcienie brązu i beżu\"
  },
  {
    \"name\": \"KREDKI ZESTAW ARTYSTYCZNY 258 EL WALIZKA\",
    \"price\": 109,
    \"imageURL\": \"https://a.allegroimg.com/s180/117ce3/dd0b5c4542fcbab8a53dd0b14196/KREDKI-ZESTAW-ARTYSTYCZNY-258-EL-WALIZKA\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 3 lata +, Marka: inna (Rot Service), Wysokość produktu: 46 cm, Szerokość produktu: 48 cm, Głębokość produktu: 5.5 cm\"
  },
  {
    \"name\": \"EICHHORN DREWNIANA FARMA ZAGRODA ZWIERZĄTKA 23 EL.\",
    \"price\": 69.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11e865/cb01c603431889553e94ad23d6c0/EICHHORN-DREWNIANA-FARMA-ZAGRODA-ZWIERZATKA-23-EL\",
    \"desc\": \"Kod producenta: EI-4304, Wiek dziecka: 3 lata +, Marka: Eichhorn, Bohater: brak, Płeć: Chłopcy, Dziewczynki, Typ: zestaw, Materiał: drewno, plastik\"
  },
  {
    \"name\": \"LEGO Technic 2 w 1 - Wywrotka lub Koparka (42147)\",
    \"price\": 49.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1111df/d255cbae4657be4589b556de5f2f/LEGO-Technic-2-w-1-Wywrotka-lub-Koparka-42147\",
    \"desc\": \"Wiek dziecka: 7 lat +, Liczba elementów: 177 szt., Numer produktu: 42147\"
  },
  {
    \"name\": \"RZEPY CZEPY KLOCKI KULKI KOLOROWE KREATYWNE 400 EL\",
    \"price\": 71.15,
    \"imageURL\": \"https://a.allegroimg.com/s180/1141b9/bcf216b049aba6095b9900fbea51/RZEPY-CZEPY-KLOCKI-KULKI-KOLOROWE-KREATYWNE-400-EL\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 4 lata +, Marka: Thorn Ball, Wysokość produktu: 16 cm, Szerokość produktu: 24 cm, Głębokość produktu: 26.5 cm\"
  },
  {
    \"name\": \"MP-40 SCHMEISSER KARABIN NA KULKI SNAJPERKA ASG\",
    \"price\": 64.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/114d0d/cdd7afa54d74a37ebd5bf49bab62/MP-40-SCHMEISSER-KARABIN-NA-KULKI-SNAJPERKA-ASG\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 18 lat +, Marka: inna (tomdorix.pl), Wysokość produktu: 28 cm, Szerokość produktu: 82 cm\"
  },
  {
    \"name\": \"HAFT DIAMENTOWY MALOWANIE DIAMENTAMI MOZAIKA 5D\",
    \"price\": 20.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11e37a/90027683447a99bdc2ed3e42bb28/HAFT-DIAMENTOWY-MALOWANIE-DIAMENTAMI-MOZAIKA-5D\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 3 lata +, Marka: inna (Qulki)\"
  },
  {
    \"name\": \"Tor Wyścigowy Dinozaur Dino Park 271el. XXXL 360cm\",
    \"price\": 94.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11fc05/c91c2dee4a3686e8567bca881fbe/Tor-Wyscigowy-Dinozaur-Dino-Park-271el-XXXL-360cm\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 3 lata +, Marka: inna (ProNice)\"
  },
  {
    \"name\": \"ŚPIEWAJĄCY TAŃCZĄCY ZABAWKA KAKTUS POWTARZA +LED\",
    \"price\": 42.65,
    \"imageURL\": \"https://a.allegroimg.com/s180/118fbf/c1b9307d4c52a3f544c365fdbc6f/SPIEWAJACY-TANCZACY-ZABAWKA-KAKTUS-POWTARZA-LED\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 3 lata +, Marka: inna, Wysokość produktu: 33 cm, Kolor dominujący: odcienie zieleni\"
  },
  {
    \"name\": \"Zestaw Artystyczny do Malowania 168szt + Walizka\",
    \"price\": 34.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/111cde/ee052b5d4afeac8a6d00fe44ebb4/Zestaw-Artystyczny-do-Malowania-168szt-Walizka\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 3 lata +, Marka: Kruzzel, Wysokość produktu: 33 cm, Szerokość produktu: 3.5 cm, Głębokość produktu: 39 cm\"
  },
  {
    \"name\": \"LEGO Technic Wytrzymała koparka 42121\",
    \"price\": 209.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1198c9/d4d813244f22b77f19a9c00f7a22/LEGO-Technic-Wytrzymala-koparka-42121\",
    \"desc\": \"Płeć: Chłopcy, Dziewczynki, Wiek dziecka: 8 lat +, Liczba elementów: 569 szt., Numer produktu: 42121\"
  },
  {
    \"name\": \"WKRĘTARKA WIERTARKA ZESTAW KONSTRUKCYJNY ŚRUBKI 3D\",
    \"price\": 59,
    \"imageURL\": \"https://a.allegroimg.com/s180/11e03d/e86eadb34d9d916939b77fc5302b/WKRETARKA-WIERTARKA-ZESTAW-KONSTRUKCYJNY-SRUBKI-3D\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 3 lata +, Marka: DK, Wysokość produktu: 6 cm, Szerokość produktu: 30 cm, Głębokość produktu: 24 cm, Kolor dominujący: wielokolorowy\"
  },
  {
    \"name\": \"Zdalnie sterowany samochód auto na pilota RC Duży\",
    \"price\": 89.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11aab3/b8388714457a963d45e8d42a5ad8/Zdalnie-sterowany-samochod-auto-na-pilota-RC-Duzy\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 6 lat +, Marka: inna (Samochód zdalnie sterowany RC na pilota), Efekty: świetlne, Skala: 1:16, Zakres częstotliwości: 27 MHz, Zasięg pilota: 10 m, Prędkość maksymalna: 10 km/h, Wysokość produktu: 9 cm, Szerokość produktu: 28 cm, Głębokość produktu: 14 cm, Kolor dominujący: odcienie czerwieni\"
  },
  {
    \"name\": \"BEZPIECZNY pistolet karabin automat KULKI ŻELOWE\",
    \"price\": 99.89,
    \"imageURL\": \"https://a.allegroimg.com/s180/115d41/029ef4b549faa2f83417f4ede9bd/BEZPIECZNY-pistolet-karabin-automat-KULKI-ZELOWE\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 14 lat +, Marka: Skleplolki, Efekty: dźwiękowe, podświetlenie LED, świetlne, wibracje, Wysokość produktu: 14 cm, Szerokość produktu: 40 cm, Głębokość produktu: 3 cm, Kolor dominujący: wielokolorowy\"
  },
  {
    \"name\": \"Koło garncarskie zestaw z gliną farbami kreatywny\",
    \"price\": 52.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/1134e2/3e3546ae40b29aa087e7453cb5b6/Kolo-garncarskie-zestaw-z-glina-farbami-kreatywny\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 8 lat +, Marka: inna (Really)\"
  },
  {
    \"name\": \"LEGO Technic 2 w 1 - Wywrotka lub Koparka (42147)\",
    \"price\": 49.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1111df/d255cbae4657be4589b556de5f2f/LEGO-Technic-2-w-1-Wywrotka-lub-Koparka-42147\",
    \"desc\": \"Wiek dziecka: 7 lat +, Liczba elementów: 177 szt., Numer produktu: 42147\"
  },
  {
    \"name\": \"TABLET GRAFICZNY DO RYSOWANIA ZNIKOPIS TABLICA LCD\",
    \"price\": 18.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/110968/3efd72824e95a832ba27136b0fc1/TABLET-GRAFICZNY-DO-RYSOWANIA-ZNIKOPIS-TABLICA-LCD\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 3 lata +, Marka: MAX SELL, Szerokość produktu: 15 cm, Głębokość produktu: 0.8 cm, Wysokość produktu: 23 cm, Kolor dominujący: odcienie czerwieni\"
  },
  {
    \"name\": \"Układanka Edukacyjna Guzikowa Mozaika 58 elementów\",
    \"price\": 77.77,
    \"imageURL\": \"https://a.allegroimg.com/s180/114f4e/4ea928264d33a882fcfd79c7c1fb/Ukladanka-Edukacyjna-Guzikowa-Mozaika-58-elementow\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 2 lata +, Marka: Bobo-San, Płeć: Chłopcy, Dziewczynki, Materiał: plastik, inny, Szerokość produktu: 25.5 cm, Głębokość produktu: 25.5 cm, Wysokość produktu: 4 cm, Kolor dominujący: wielokolorowy\"
  },
  {
    \"name\": \"MEGA TOR WYŚCIGOWY XXXL DINOZAUR DINO PARK 169 el.\",
    \"price\": 139.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a931/30410b274e5cb809dce6dd7e0af2/MEGA-TOR-WYSCIGOWY-XXXL-DINOZAUR-DINO-PARK-169-el\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 3 lata +, Marka: inna (ORBITAL PARADISE), Długość: 210 cm\"
  },
  {
    \"name\": \"Zdalnie sterowany samochód auto na pilota RC Duży\",
    \"price\": 89.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11aab3/b8388714457a963d45e8d42a5ad8/Zdalnie-sterowany-samochod-auto-na-pilota-RC-Duzy\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 6 lat +, Marka: inna (Samochód zdalnie sterowany RC na pilota), Efekty: świetlne, Skala: 1:16, Zakres częstotliwości: 27 MHz, Zasięg pilota: 10 m, Prędkość maksymalna: 10 km/h, Wysokość produktu: 9 cm, Szerokość produktu: 28 cm, Głębokość produktu: 14 cm, Kolor dominujący: odcienie czerwieni\"
  },
  {
    \"name\": \"LEGO MINECRAFT 21246 BITWA W MROCZNEJ GŁĘBI UNIKAT\",
    \"price\": 489.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a1aa/d82bd2ee4d62bc4e7a864c756153/LEGO-MINECRAFT-21246-BITWA-W-MROCZNEJ-GLEBI-UNIKAT\",
    \"desc\": \"Wiek dziecka: 8 lat +, Liczba elementów: 584 szt., Numer produktu: 21246\"
  },
  {
    \"name\": \"DŁUGI KOTEK MASKOTKA PLUSZAK PODUSZKA KOT\",
    \"price\": 24.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/115cdd/20ab3c9d450b96389e7fb13b70a8/DLUGI-KOTEK-MASKOTKA-PLUSZAK-PODUSZKA-KOT\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 3 lata +, Marka: MAX SELL\"
  },
  {
    \"name\": \"MINIGUN KARABIN PISTOLET AUTOMAT NA KULKI ŻELOWE\",
    \"price\": 179,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b1bb/cb74017a4563888725b85b3c795c/MINIGUN-KARABIN-PISTOLET-AUTOMAT-NA-KULKI-ZELOWE\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 8 lat +, Marka: Skleplolki, Efekty: dźwiękowe, wibracje, Wysokość produktu: 16 cm, Szerokość produktu: 48 cm, Głębokość produktu: 17 cm, Kolor dominujący: wielokolorowy\"
  },
  {
    \"name\": \"KARABIN PISTOLET MP AUTOMAT na KULKI ŻELOWE_EAGLE\",
    \"price\": 99.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1121bd/e541bd6f4393a7471742fc9999e2/KARABIN-PISTOLET-MP-AUTOMAT-na-KULKI-ZELOWE_EAGLE\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 14 lat +, Marka: inna (Żabolek), Efekty: dźwiękowe, wibracje, Wysokość produktu: 14 cm, Głębokość produktu: 4 cm, Kolor dominujący: wielokolorowy\"
  },
  {
    \"name\": \"DRON E90 PRO KAMERY 4K WIFI HD ZABAWKA ZAWIS 250m\",
    \"price\": 229,
    \"imageURL\": \"https://a.allegroimg.com/s180/1190b8/744ff03f4c308a1972313deca22b/DRON-E90-PRO-KAMERY-4K-WIFI-HD-ZABAWKA-ZAWIS-250m\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 10 lat +, Marka: ALLNOEL, Kolor dominujący: czerń\"
  },
  {
    \"name\": \"Zestaw kreatywne plastyczny artystyczny rękodzieło\",
    \"price\": 69.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/110e7b/fd598f684aa8b19cddbd72bff402/Zestaw-kreatywne-plastyczny-artystyczny-rekodzielo\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 3 lata +, Marka: Sferazabawek\"
  },
  {
    \"name\": \"LEGO Speed 76917 Nissan Skyline GT-R (R34) z Filmu\",
    \"price\": 125.83,
    \"imageURL\": \"https://a.allegroimg.com/s180/11e9bf/9c9f8202498aada34f985dc0da2b/LEGO-Speed-76917-Nissan-Skyline-GT-R-R34-z-Filmu\",
    \"desc\": \"Wiek dziecka: 9 lat +, Liczba elementów: 319 szt., Numer produktu: 76917\"
  },
  {
    \"name\": \"TOR KULKOWY KULODROM ZESTAW 113 EL KULKI WYRZUTNIA\",
    \"price\": 129.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ee02/afc0907c452b9f7adc7db5c0fdd6/TOR-KULKOWY-KULODROM-ZESTAW-113-EL-KULKI-WYRZUTNIA\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 3 lata +, Marka: DK, Szerokość produktu: 36 cm, Głębokość produktu: 18 cm, Wysokość produktu: 42.5 cm, Kolor dominujący: wielokolorowy\"
  },
  {
    \"name\": \"EICHHORN DREWNIANA FARMA ZAGRODA +ZWIERZĄTKA 25 EL\",
    \"price\": 159.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/112c27/e12f78814279a1101cd13cb56be9/EICHHORN-DREWNIANA-FARMA-ZAGRODA-ZWIERZATKA-25-EL\",
    \"desc\": \"Kod producenta: 4308, Wiek dziecka: 3 lata +, Marka: Eichhorn, Bohater: brak, Płeć: Chłopcy, Typ: figurka, Materiał: drewno, plastik, inny\"
  },
  {
    \"name\": \"Kuferek kosmetyków paznokci makijaż MakeUp Zestaw\",
    \"price\": 109.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11bfdf/f2f9df2b4d6dab15d98863f144e7/Kuferek-kosmetykow-paznokci-makijaz-MakeUp-Zestaw\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 5 lat +, Marka: Sferazabawek, Szerokość produktu: 12 cm, Kolor dominujący: wielokolorowy\"
  },
  {
    \"name\": \"Gra Zręcznościowa Operacja Lekarz Szalony Doktor\",
    \"price\": 40,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d94f/ac13054e41319e7d5a47c722a2e2/Gra-Zrecznosciowa-Operacja-Lekarz-Szalony-Doktor\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 3 lata +, Marka: Iso Trade, Bohater: Inny, Minimalna liczba graczy: 1\"
  },
  {
    \"name\": \"WYRZUTNIA BALONÓW SAMOCHÓD AERODYNAMICZNY 2 AUTA\",
    \"price\": 45.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11bb7a/c51fdb744d73bcfa57474c49f97b/WYRZUTNIA-BALONOW-SAMOCHOD-AERODYNAMICZNY-2-AUTA\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 3 lata +, Marka: Martom, Efekty: brak\"
  },
  {
    \"name\": \"Projektor Rzutnik do rysowania Zestaw ze stolikiem\",
    \"price\": 119.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11fce3/ec39b08c4d9683bf6c6928a46e55/Projektor-Rzutnik-do-rysowania-Zestaw-ze-stolikiem\",
    \"desc\": \"Stan: Nowy, Marka: inna (LEDprojektor), Baterie: AA, Szerokość produktu: 25 cm, Wysokość produktu: 35 cm, Kolor dominujący: odcienie niebieskiego\"
  },
  {
    \"name\": \"DUŻA MATA EDUKACYJNA INTERAKTYWNA XXL + PIANINKO\",
    \"price\": 79.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11cbee/cd1bb0f746d5959cf509166ccf27/DUZA-MATA-EDUKACYJNA-INTERAKTYWNA-XXL-PIANINKO\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 0 +, Marka: RicoKids, Efekty: dźwiękowe, podświetlenie LED, świetlne, Wysokość produktu: 45 cm, Szerokość produktu: 60 cm, Głębokość produktu: 75 cm\"
  },
  {
    \"name\": \"ZAPLATARKA DO WARKOCZYKÓW ZAPLATACZ WŁOSÓW MASZYNA\",
    \"price\": 84.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/114320/aedd9b3c4136b04a09742d69d931/ZAPLATARKA-DO-WARKOCZYKOW-ZAPLATACZ-WLOSOW-MASZYNA\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 6 lat +, Marka: inna (Baggio), Wysokość produktu: 31 cm, Szerokość produktu: 39.5 cm, Głębokość produktu: 8 cm\"
  },
  {
    \"name\": \"DRON E90 PRO KAMERY 4K WIFI HD ZABAWKA ZAWIS 250m\",
    \"price\": 229,
    \"imageURL\": \"https://a.allegroimg.com/s180/1190b8/744ff03f4c308a1972313deca22b/DRON-E90-PRO-KAMERY-4K-WIFI-HD-ZABAWKA-ZAWIS-250m\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 10 lat +, Marka: ALLNOEL, Kolor dominujący: czerń\"
  },
  {
    \"name\": \"EDUKACYJNA GUZIKOWA MOZAIKA UKŁADANKA DUŻE ELEMENT\",
    \"price\": 43.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11af9f/3ef9110841f6b1c9a2c84efa087f/EDUKACYJNA-GUZIKOWA-MOZAIKA-UKLADANKA-DUZE-ELEMENT\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 2 lata +, Marka: Technok, Płeć: Chłopcy, Dziewczynki, Materiał: plastik, Szerokość produktu: 38.5 cm, Głębokość produktu: 29.2 cm, Wysokość produktu: 4.7 cm, Kolor dominujący: wielokolorowy\"
  },
  {
    \"name\": \"KARABIN NA KULKI M4 PISTOLET AUTOMAT ELEKTRYK ASG\",
    \"price\": 249.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d80d/70b9402b446093ea8e09c3d36712/KARABIN-NA-KULKI-M4-PISTOLET-AUTOMAT-ELEKTRYK-ASG\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 18 lat +, Marka: Cabo-Toys, Wysokość produktu: 23 cm, Szerokość produktu: 72 cm, Głębokość produktu: 5 cm, Kolor dominujący: czerń\"
  },
  {
    \"name\": \"ZESTAW DO ROBIENIA BRANSOLETEK KORALIKI XL\",
    \"price\": 48.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/1194ae/baf348514e4d833fec8a37d26d3f/ZESTAW-DO-ROBIENIA-BRANSOLETEK-KORALIKI-XL\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 6 lat +, Marka: Bedde\"
  },
  {
    \"name\": \"Piłeczki sensoryczne Piłki 5 szt. Hencz Sensorky\",
    \"price\": 29.89,
    \"imageURL\": \"https://a.allegroimg.com/s180/114782/effa89c64ac59451517f35ca8a4a/Pileczki-sensoryczne-Pilki-5-szt-Hencz-Sensorky\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 0 +, Marka: Hencz Toys\"
  },
  {
    \"name\": \"PISTOLET KARABIN NERF ELITE MODULUS RETALIATOR 4W1\",
    \"price\": 169.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/115d5b/ed58ee1f45d5abbc90bb051438c4/PISTOLET-KARABIN-NERF-ELITE-MODULUS-RETALIATOR-4W1\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 7 lat +, Marka: NERF, Kolor dominujący: odcienie niebieskiego\"
  },
  {
    \"name\": \"Karabin NERF Fortnite E7522\",
    \"price\": 179.5,
    \"imageURL\": \"https://a.allegroimg.com/s180/05d032/e093f84c4db8ad847dc7eb04aa35/Karabin-NERF-Fortnite-E7522\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 8 lat +, Marka: NERF, Efekty: brak, Wysokość produktu: 26 cm, Szerokość produktu: 76 cm, Głębokość produktu: 7 cm, Kolor dominujący: wielokolorowy\"
  },
  {
    \"name\": \"Długi Kotek Maskotka Poduszka Pluszak Kot 70cm XXL\",
    \"price\": 44.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/114440/e85860664a63b8ca3389582e0371/Dlugi-Kotek-Maskotka-Poduszka-Pluszak-Kot-70cm-XXL\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 0 +, Marka: Drobiazgarnia\"
  },
  {
    \"name\": \"WYRZUTNIA BALONÓW SAMOCHÓD AERODYNAMICZNY 2 AUTA\",
    \"price\": 45.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11bb7a/c51fdb744d73bcfa57474c49f97b/WYRZUTNIA-BALONOW-SAMOCHOD-AERODYNAMICZNY-2-AUTA\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 3 lata +, Marka: Martom, Efekty: brak\"
  },
  {
    \"name\": \"ZESTAW KORALIKI DO ROBIENIA BRANSOLETEK biżuterii\",
    \"price\": 54.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1129a7/f2db4b474f25b7c5afe60ed0f42e/ZESTAW-KORALIKI-DO-ROBIENIA-BRANSOLETEK-bizuterii\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 3 lata +, Marka: For Fun\"
  },
  {
    \"name\": \"@ AUTO AKROBATA ZDALNIE STEROWANY SAMOCHÓD + PILOT\",
    \"price\": 109.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1165dc/c5893f82465ebd9b007f222385e9/AUTO-AKROBATA-ZDALNIE-STEROWANY-SAMOCHOD-PILOT\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 3 lata +, Marka: inna (360), Zakres częstotliwości: 2400 MHz, Liczba kanałów sterowania: 1, Zasięg pilota: 60 m, Prędkość maksymalna: 12 km/h\"
  },
  {
    \"name\": \"LEGO Technic Sterowany buldożer CAT D11 42131\",
    \"price\": 1926.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/054e5c/a392cf4c4a6b81e322f4e666e349/LEGO-Technic-Sterowany-buldozer-CAT-D11-42131\",
    \"desc\": \"Płeć: Chłopcy, Dziewczynki, Wiek dziecka: 18 lat +, Liczba elementów: 3854 szt., Numer produktu: 42131\"
  },
  {
    \"name\": \"60 SZT Plastelina SENSO GLINA POLIMEROWA piankowa\",
    \"price\": 34.5,
    \"imageURL\": \"https://a.allegroimg.com/s180/118b25/7d9da3ca474281f743db5c029f2b/60-SZT-Plastelina-SENSO-GLINA-POLIMEROWA-piankowa\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 3 lata +, Marka: Drobiazgarnia, Liczba kolorów: 12\"
  },
  {
    \"name\": \"METALOWY PISTOLET GLOCK 43 TŁUMIK 6 MM ASG KULKI\",
    \"price\": 59.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11725d/f98fb66c4433bd35f543ebb5b234/METALOWY-PISTOLET-GLOCK-43-TLUMIK-6-MM-ASG-KULKI\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 14 lat +, Marka: inna (Żabolek)\"
  },
  {
    \"name\": \"Koło garncarskie farby glina zestaw kreatywny Diy\",
    \"price\": 74.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/1148e3/a8d9291c4b7bbb514ce200766038/Kolo-garncarskie-farby-glina-zestaw-kreatywny-Diy\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 8 lat +, Marka: Sferazabawek, Wysokość produktu: 24 cm, Szerokość produktu: 22 cm, Głębokość produktu: 25 cm\"
  },
  {
    \"name\": \"RAINBOW HIGH ROCKSTAR LALKA VANESSA TEMPO PERKUSJA\",
    \"price\": 342.38,
    \"imageURL\": \"https://a.allegroimg.com/s180/117935/aedb19914169ae70567eedeb77d8/RAINBOW-HIGH-ROCKSTAR-LALKA-VANESSA-TEMPO-PERKUSJA\",
    \"desc\": \"Wiek dziecka: 3 lata +, Marka: Rainbow High, Efekty: brak, Wysokość produktu: 27 cm, Kolor dominujący: wielokolorowy\"
  },
  {
    \"name\": \"DŁUGI KOTEK MASKOTKA PLUSZAK PODUSZKA KOT\",
    \"price\": 24.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/115cdd/20ab3c9d450b96389e7fb13b70a8/DLUGI-KOTEK-MASKOTKA-PLUSZAK-PODUSZKA-KOT\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 3 lata +, Marka: MAX SELL\"
  },
  {
    \"name\": \"Kolorowanka wydrapywanka ZDRAPYWANKA karty 20x14\",
    \"price\": 4.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b0d9/7518e967405488ffd896170a5a2d/Kolorowanka-wydrapywanka-ZDRAPYWANKA-karty-20x14\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 3 lata +, Marka: inna (kostasklep.pl)\"
  },
  {
    \"name\": \"Lalka Barbie Big City Big Dreams Camping HDF73\",
    \"price\": 65.33,
    \"imageURL\": \"https://a.allegroimg.com/s180/25cb42/66a759f0488b97f31010317b9be1/Lalka-Barbie-Big-City-Big-Dreams-Camping-HDF73\",
    \"desc\": \"Wiek dziecka: 3 lata +, Marka: Mattel, Seria: Big City Big Dreams\"
  },
  {
    \"name\": \"KARABIN PISTOLET NA KULKI SNAJPERSKI SNAJPERKA asg\",
    \"price\": 99.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11bd17/96e49d534531ad8409ca25f2b2d1/KARABIN-PISTOLET-NA-KULKI-SNAJPERSKI-SNAJPERKA-asg\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 18 lat +, Marka: Skleplolki, Efekty: dźwiękowe, świetlne, Wysokość produktu: 21 cm, Szerokość produktu: 101 cm, Głębokość produktu: 5 cm, Kolor dominujący: odcienie brązu i beżu\"
  },
  {
    \"name\": \"KULKI MAGNETYCZNE KLOCKI NEOCUBE XXL 8mm 126szt\",
    \"price\": 64.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1188fd/f52903834c6d8409d7fe65c3e881/KULKI-MAGNETYCZNE-KLOCKI-NEOCUBE-XXL-8mm-126szt\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 12 lat +, Marka: inna (KLOCKI MAGNETYCZNE), Liczba elementów: 126 szt.\"
  },
  {
    \"name\": \"2W1 PISTOLET AUTOMAT NA KULKI ŻELOWE KARABIN ORBIZ\",
    \"price\": 139,
    \"imageURL\": \"https://a.allegroimg.com/s180/118022/8ca5966d449785e9d6ff9d1b1714/2W1-PISTOLET-AUTOMAT-NA-KULKI-ZELOWE-KARABIN-ORBIZ\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 14 lat +, Marka: Skleplolki, Efekty: dźwiękowe, Wysokość produktu: 14 cm, Szerokość produktu: 33 cm, Głębokość produktu: 3 cm, Kolor dominujący: czerń\"
  },
  {
    \"name\": \"GLOCK PISTOLET NA KULKI ASG METAL 800 GRATIS\",
    \"price\": 49.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11265c/f2bb981041e997d7af88055ba668/GLOCK-PISTOLET-NA-KULKI-ASG-METAL-800-GRATIS\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 18 lat +, Marka: Skleplolki, Efekty: dźwiękowe, Wysokość produktu: 11 cm, Szerokość produktu: 15 cm, Głębokość produktu: 2.5 cm, Kolor dominujący: czerń\"
  },
  {
    \"name\": \"ZESTAW KREATYWNY PLASTYCZNY dla dzieci 1500el\",
    \"price\": 79,
    \"imageURL\": \"https://a.allegroimg.com/s180/1164fd/2e81821945c4a33acf80a6502005/ZESTAW-KREATYWNY-PLASTYCZNY-dla-dzieci-1500el\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 3 lata +, Marka: inna (Loveart)\"
  },
  {
    \"name\": \"HAFT DIAMENTOWY MALOWANIE DIAMENTAMI MOZAIKA 5D\",
    \"price\": 20.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11e37a/90027683447a99bdc2ed3e42bb28/HAFT-DIAMENTOWY-MALOWANIE-DIAMENTAMI-MOZAIKA-5D\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 3 lata +, Marka: inna (Qulki)\"
  },
  {
    \"name\": \"12 x MOCHI SQUISHY FIDGET GNIOTKI POP IT GNIOTEK\",
    \"price\": 29.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11db8e/a7cdb94a4708bd2ac2792072108d/12-x-MOCHI-SQUISHY-FIDGET-GNIOTKI-POP-IT-GNIOTEK\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 3 lata +, Marka: inna (LIDA), Kolor dominujący: wielokolorowy\"
  },
  {
    \"name\": \"LEGO City Elektryczny samochód sportowy 60383\",
    \"price\": 41.89,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b475/a2ff2fa84cb980a77c33934fe1ad/LEGO-City-Elektryczny-samochod-sportowy-60383\",
    \"desc\": \"Wiek dziecka: 5 lat +, Liczba elementów: 95 szt., Numer produktu: 60383\"
  },
  {
    \"name\": \"SmART Sketcher 2.0 więcej niż zwykły projektor!\",
    \"price\": 288,
    \"imageURL\": \"https://a.allegroimg.com/s180/11398b/dccc2b1c491dab45fccfba59a0b0/SmART-Sketcher-2-0-wiecej-niz-zwykly-projektor\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 5 lat +, Marka: SMART SKETCHER, Wysokość produktu: 28 cm, Szerokość produktu: 25 cm, Głębokość produktu: 25 cm, Kolor dominujący: biel\"
  },
  {
    \"name\": \"LEGO Creator 31129 Majestatyczny tygrys\",
    \"price\": 187.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/052202/e46c40054435a625d9148f7ea962/LEGO-Creator-31129-Majestatyczny-tygrys\",
    \"desc\": \"Wiek dziecka: 9 lat +, Płeć: Chłopcy, Dziewczynki, Liczba elementów: 755 szt., Numer produktu: 31129\"
  },
  {
    \"name\": \"@ AUTO AKROBATA ZDALNIE STEROWANY SAMOCHÓD + PILOT\",
    \"price\": 109.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1165dc/c5893f82465ebd9b007f222385e9/AUTO-AKROBATA-ZDALNIE-STEROWANY-SAMOCHOD-PILOT\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 3 lata +, Marka: inna (360), Zakres częstotliwości: 2400 MHz, Liczba kanałów sterowania: 1, Zasięg pilota: 60 m, Prędkość maksymalna: 12 km/h\"
  },
  {
    \"name\": \"ROBOT INTERAKTYWNY ŚWIATŁO DŹWIĘK CHODZI STRZELA\",
    \"price\": 70.2,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a399/9a56a3d44fb986d4dea365ad5e98/ROBOT-INTERAKTYWNY-SWIATLO-DZWIEK-CHODZI-STRZELA\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 3 lata +, Marka: Artyk, Kolor dominujący: wielokolorowy, Wysokość produktu: 37 cm, Szerokość produktu: 21.5 cm, Głębokość produktu: 11 cm, Efekty: dźwiękowe, podświetlenie LED, ruchowe, świetlne, wibracje\"
  }
]`);

const c = gifts as BaseGift[];

export default c;
