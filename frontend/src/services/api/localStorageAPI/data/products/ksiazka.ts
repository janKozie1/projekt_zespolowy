import type { BaseGift } from '../gifts';

const gifts: unknown = JSON.parse(`[
  {
    \"name\": \"Kalendaria do kalendarzy trójdzielnych 2023 1 kpl\",
    \"price\": 13.3,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a7d9/91ce117b40508ee44f5009b38e9b/Kalendaria-do-kalendarzy-trojdzielnych-2023-1-kpl\",
    \"desc\": \"Kalendarz na rok: 2023, Producent: inny (Chroma Trójdzielne)\"
  },
  {
    \"name\": \"PAKIET nauka pisania 6w1 szlaczki literki cyferki\",
    \"price\": 48.01,
    \"imageURL\": \"https://a.allegroimg.com/s180/114bed/7a53a33a4f969c30e6e3cba7451b/PAKIET-nauka-pisania-6w1-szlaczki-literki-cyferki\",
    \"desc\": \"Okładka: miękka, Rok wydania: 2020, Przedział wiekowy: dla dzieci z klas I-III (6-9 lat)\"
  },
  {
    \"name\": \"PAKIET 4-LATKA Książeczka z naklejkami Elementarz\",
    \"price\": 52.92,
    \"imageURL\": \"https://a.allegroimg.com/s180/11e901/8597e31e427d8f3de6f2baec1f9d/PAKIET-4-LATKA-Ksiazeczka-z-naklejkami-Elementarz\",
    \"desc\": \"Okładka: miękka, Rok wydania: 2021, Przedział wiekowy: dla przedszkolaków (3-5 lat)\"
  },
  {
    \"name\": \"Kalendarz ścienny 33,5x40cm POLSKA 2023 rok\",
    \"price\": 19.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11e62f/828a607346a0bb742b7a21465659/Kalendarz-scienny-33-5x40cm-POLSKA-2023-rok\",
    \"desc\": \"Kalendarz na rok: 2023, Producent: Interdruk, Tematyka: krajobrazy\"
  },
  {
    \"name\": \"Kalendarz książkowy 2023 A4 DZIENNY terminarz\",
    \"price\": 59.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/112a83/ef226e50498facf5fa11cacb61fb/Kalendarz-ksiazkowy-2023-A4-DZIENNY-terminarz\",
    \"desc\": \"Producent: inny (Be-public), Rozmiar: A4, Kolor dominujący: odcienie brązu i beżu, Kalendarz na rok: 2023\"
  },
  {
    \"name\": \"kalendarz BE HAPPY 2023 planer pozytywnych nawyków\",
    \"price\": 37.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1184e6/30e66a8d4d06ab9c83aa2f1d57d7/kalendarz-BE-HAPPY-2023-planer-pozytywnych-nawykow\",
    \"desc\": \"Producent: inny (Planerki), Rozmiar: inny, Kolor dominujący: wielokolorowy, Kalendarz na rok: 2023\"
  },
  {
    \"name\": \"kalendarz planer motywacyjny BRIAN TRACY 2023\",
    \"price\": 42.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d522/f5ffbd434147ba92aa5cc7325150/kalendarz-planer-motywacyjny-BRIAN-TRACY-2023\",
    \"desc\": \"Producent: Eurograf, Rozmiar: B5, Kolor dominujący: odcienie niebieskiego, Kalendarz na rok: 2023\"
  },
  {
    \"name\": \"kalendarz planer 365 DNI MINDFULNESS 2023 z gumką\",
    \"price\": 45,
    \"imageURL\": \"https://a.allegroimg.com/s180/119190/68935abe4c72865b2b916da12ae4/kalendarz-planer-365-DNI-MINDFULNESS-2023-z-gumka\",
    \"desc\": \"Producent: inny (Planerki), Rozmiar: B5, Kolor dominujący: wielokolorowy, Kalendarz na rok: 2023\"
  },
  {
    \"name\": \"Kalendarz Książkowy Terminarz A5 Dzienny 2023 NOTE\",
    \"price\": 24,
    \"imageURL\": \"https://a.allegroimg.com/s180/110e32/a5bcbbfb4b259d4e983897979126/Kalendarz-Ksiazkowy-Terminarz-A5-Dzienny-2023-NOTE\",
    \"desc\": \"Producent: B-one, Rozmiar: A5, Kolor dominujący: inny, Kalendarz na rok: 2023\"
  },
  {
    \"name\": \"Kalendarz ścienny motywacyjny HASŁA 2023 rok\",
    \"price\": 16.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11172e/88aa0cbf4d0093fc68e60a0056fc/Kalendarz-scienny-motywacyjny-HASLA-2023-rok\",
    \"desc\": \"Kalendarz na rok: 2023, Producent: Interdruk, Tematyka: krajobrazy\"
  },
  {
    \"name\": \"PAKIET 4-LATKA z naklejkami NAUKA przez ZABAWĘ\",
    \"price\": 56.28,
    \"imageURL\": \"https://a.allegroimg.com/s180/111137/ad3f804740b7af8e21ea79c2f6a5/PAKIET-4-LATKA-z-naklejkami-NAUKA-przez-ZABAWE\",
    \"desc\": \"Okładka: miękka, Rok wydania: 2019\"
  },
  {
    \"name\": \"planer kalendarz KSIĘŻYCOWY 2023 Yasmin Boland\",
    \"price\": 54.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/116ff7/3db96ac14fb6b00032e650494252/planer-kalendarz-KSIEZYCOWY-2023-Yasmin-Boland\",
    \"desc\": \"Producent: Eurograf, Rozmiar: A5, Kolor dominujący: odcienie niebieskiego, Kalendarz na rok: 2023\"
  },
  {
    \"name\": \"kalendarz PLANER JOGINKI 2023 MadalenaYoga JOGA\",
    \"price\": 59.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1172a3/41454a4a4212abd605f395d7be48/kalendarz-PLANER-JOGINKI-2023-MadalenaYoga-JOGA\",
    \"desc\": \"Producent: inny (Planerki), Rozmiar: B5, Kolor dominujący: wielokolorowy, Kalendarz na rok: 2023\"
  },
  {
    \"name\": \"Kalendarz biurkowy stojący pionowy 2023 na biurko\",
    \"price\": 15.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11651c/76661346464baf59df48c808a4d9/Kalendarz-biurkowy-stojacy-pionowy-2023-na-biurko\",
    \"desc\": \"Kalendarz na rok: 2023, Producent: Panta Plast\"
  },
  {
    \"name\": \"KALENDARZ WIELOPLANSZOWY 2023 DUŻY ŚCIENNY 4 PORY\",
    \"price\": 25,
    \"imageURL\": \"https://a.allegroimg.com/s180/11f161/707294df4da38c0c24ac54fc46f8/KALENDARZ-WIELOPLANSZOWY-2023-DUZY-SCIENNY-4-PORY\",
    \"desc\": \"Kalendarz na rok: 2023, Producent: inny (EVENA), Tematyka: krajobrazy\"
  },
  {
    \"name\": \"Książki na wagę 1,99zł za kilogram 29 kg hurt\",
    \"price\": 3.31,
    \"imageURL\": \"https://a.allegroimg.com/s180/118adf/72af19854ba99beb048ca9e97f3a/Ksiazki-na-wage-1-99zl-za-kilogram-29-kg-hurt\",
    \"desc\": \"Okładka: twarda, Rok wydania: 2000\"
  },
  {
    \"name\": \"NOTATNIK NOTES RETRO PAMIĘTNIK A5 eko skóra\",
    \"price\": 42.79,
    \"imageURL\": \"https://a.allegroimg.com/s180/11007c/c8aef99d4357aa3b0fb8654d7437/NOTATNIK-NOTES-RETRO-PAMIETNIK-A5-eko-skora\",
    \"desc\": \"Rodzaj: notes, Kolor dominujący: odcienie brązu i beżu, Producent: Asgard, Rozmiar: A5\"
  },
  {
    \"name\": \"planer dla kobiet KALENDARZ ROZWOJOWY 2023 postać\",
    \"price\": 59.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1142b1/2788e2b3465eb86776c3a3ffa2db/planer-dla-kobiet-KALENDARZ-ROZWOJOWY-2023-postac\",
    \"desc\": \"Producent: Eurograf, Rozmiar: B5, Kolor dominujący: wielokolorowy, Kalendarz na rok: 2023\"
  },
  {
    \"name\": \"PAKIET WZOROWY MALUCH Zadania naklejki 3-LATKA\",
    \"price\": 57.82,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ad09/62c493874abaad3964af3b3c56ff/PAKIET-WZOROWY-MALUCH-Zadania-naklejki-3-LATKA\",
    \"desc\": \"Okładka: miękka, Rok wydania: 2022, Przedział wiekowy: dla najmłodszych (0-2 lata), dla przedszkolaków (3-5 lat)\"
  },
  {
    \"name\": \"kalendarz PLANER HOLISTYCZNY 2023 złocony SelfCare\",
    \"price\": 42.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/117aa8/e5b560b94d2aa2aae3e196edea99/kalendarz-PLANER-HOLISTYCZNY-2023-zlocony-SelfCare\",
    \"desc\": \"Producent: inny (Planerki), Rozmiar: B5, Kolor dominujący: odcienie fioletu, Kalendarz na rok: 2023\"
  },
  {
    \"name\": \"Reprint WSPOMNIENIE DZIECIŃSTWA! Falski ELEMENTARZ\",
    \"price\": 79.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11fd38/b0f73c36408cb28f7bb60660f388/Reprint-WSPOMNIENIE-DZIECINSTWA-Falski-ELEMENTARZ\",
    \"desc\": \"Okładka: twarda, Rok wydania: 2019, Przedział wiekowy: dla dzieci z klas I-III (6-9 lat)\"
  },
  {
    \"name\": \"Kalendarz Biurkowy 2023 Czytelny Poziomy\",
    \"price\": 32,
    \"imageURL\": \"https://a.allegroimg.com/s180/1126d4/d8f1839642b690db36135b94cc2f/Kalendarz-Biurkowy-2023-Czytelny-Poziomy\",
    \"desc\": \"Kalendarz na rok: 2023, Producent: inny (Pergamin)\"
  },
  {
    \"name\": \"Kalendarz Książkowy Terminarz A5 Dzienny 2023 NOTE\",
    \"price\": 69,
    \"imageURL\": \"https://a.allegroimg.com/s180/1128d2/8d74522b4dd7a8c5b594cd61117c/Kalendarz-Ksiazkowy-Terminarz-A5-Dzienny-2023-NOTE\",
    \"desc\": \"Producent: B-one, Rozmiar: A5, Kolor dominujący: inny, Kalendarz na rok: 2023\"
  },
  {
    \"name\": \"Kalendarz Książkowy A5 Dzienny 2023 z Długopisem\",
    \"price\": 34,
    \"imageURL\": \"https://a.allegroimg.com/s180/112710/f455545d43e6aeaf3a5ff6807671/Kalendarz-Ksiazkowy-A5-Dzienny-2023-z-Dlugopisem\",
    \"desc\": \"Producent: B-one, Rozmiar: A5, Kolor dominujący: inny, Kalendarz na rok: 2023\"
  },
  {
    \"name\": \"kalendarz PLANER MAMY 2023 RODZINNY złocony\",
    \"price\": 45,
    \"imageURL\": \"https://a.allegroimg.com/s180/11730c/20991b5f4ecfabd35abc4f0194a4/kalendarz-PLANER-MAMY-2023-RODZINNY-zlocony\",
    \"desc\": \"Producent: inny (Planerki), Rozmiar: B5, Kolor dominujący: odcienie różu, Kalendarz na rok: 2023\"
  },
  {
    \"name\": \"Atomowe nawyki. Drobne zmiany, niezwykłe efekty\",
    \"price\": 31.69,
    \"imageURL\": \"https://a.allegroimg.com/s180/115057/01ae00b14bb685f7885e9bcd2eac/Atomowe-nawyki-Drobne-zmiany-niezwykle-efekty\",
    \"desc\": \"Okładka: miękka, Rok wydania: 2019\"
  },
  {
    \"name\": \"Planer ścienny 2023 138x97,5 suchościeralny wielki\",
    \"price\": 64,
    \"imageURL\": \"https://a.allegroimg.com/s180/117902/5cd977f94d478618954496e4387c/Planer-scienny-2023-138x97-5-suchoscieralny-wielki\",
    \"desc\": \"Kalendarz na rok: 2023, Producent: Planowaki, Tematyka: inne\"
  },
  {
    \"name\": \"Kalendarz Książkowy Terminarz A4 Tygodniowy 2023\",
    \"price\": 40,
    \"imageURL\": \"https://a.allegroimg.com/s180/1192aa/9e766cbd48cb9660d1fa80c08cd7/Kalendarz-Ksiazkowy-Terminarz-A4-Tygodniowy-2023\",
    \"desc\": \"Producent: B-one, Rozmiar: A4, Kolor dominujący: inny, Kalendarz na rok: 2023\"
  },
  {
    \"name\": \"Kalendarz książkowy A5 2023 rok tygodniowy LINEART\",
    \"price\": 29.7,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c99a/3345597141cbb312336e83fbfa36/Kalendarz-ksiazkowy-A5-2023-rok-tygodniowy-LINEART\",
    \"desc\": \"Producent: Interdruk, Rozmiar: A5, Kolor dominujący: odcienie szarości i srebra, Kalendarz na rok: 2023\"
  },
  {
    \"name\": \"KALENDARZ KSIĄŻKOWY 2023 INTERDRUK A5 192 LINE ART\",
    \"price\": 28.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1135be/b8e20f5647a085c6798b677f4015/KALENDARZ-KSIAZKOWY-2023-INTERDRUK-A5-192-LINE-ART\",
    \"desc\": \"Producent: Interdruk, Rozmiar: A5, Kolor dominujący: odcienie szarości i srebra, Kalendarz na rok: 2023\"
  },
  {
    \"name\": \"Kalendarz biurkowy tygodniowy stojący poziomy 2023\",
    \"price\": 21.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b6f9/852b3a8f4e28b17ec0c945b6d979/Kalendarz-biurkowy-tygodniowy-stojacy-poziomy-2023\",
    \"desc\": \"Kalendarz na rok: 2023, Producent: Panta Plast\"
  },
  {
    \"name\": \"Malowanie doklejanie Zwierzęta na wsi Kolorowanka\",
    \"price\": 2.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b883/da82092d427a82e0ad698513045b/Malowanie-doklejanie-Zwierzeta-na-wsi-Kolorowanka\",
    \"desc\": \"Okładka: miękka, Rok wydania: 2021, Przedział wiekowy: dla przedszkolaków (3-5 lat)\"
  },
  {
    \"name\": \"Skarb Rodzina Monet Tom 1 Weronika Marczak\",
    \"price\": 30.38,
    \"imageURL\": \"https://a.allegroimg.com/s180/11daa6/f241398a4036925db30267fe8bd8/Skarb-Rodzina-Monet-Tom-1-Weronika-Marczak\",
    \"desc\": \"Okładka: miękka ze skrzydełkami, Rok wydania: 2022\"
  },
  {
    \"name\": \"Planer ścienny Kalendarz 2023 84x59 suchościeralny\",
    \"price\": 33,
    \"imageURL\": \"https://a.allegroimg.com/s180/115a6f/de11b9a946c69240b566f86aafcb/Planer-scienny-Kalendarz-2023-84x59-suchoscieralny\",
    \"desc\": \"Kalendarz na rok: 2023, Producent: Planowaki\"
  },
  {
    \"name\": \"Planer ścienny Kalendarz 2023 84x59 suchościeralny\",
    \"price\": 33,
    \"imageURL\": \"https://a.allegroimg.com/s180/115a6f/de11b9a946c69240b566f86aafcb/Planer-scienny-Kalendarz-2023-84x59-suchoscieralny\",
    \"desc\": \"Kalendarz na rok: 2023, Producent: Planowaki\"
  },
  {
    \"name\": \"Baw się i dotknij Na wsi Książeczka sensoryczna\",
    \"price\": 28.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/112037/5aef22e34531ab45e1aa1cc15189/Baw-sie-i-dotknij-Na-wsi-Ksiazeczka-sensoryczna\",
    \"desc\": \"Okładka: twarda, Rok wydania: 2020, Przedział wiekowy: dla najmłodszych (0-2 lata), dla przedszkolaków (3-5 lat)\"
  },
  {
    \"name\": \"Kalendaria do kalendarzy trójdzielnych 2023 1 kpl\",
    \"price\": 13.3,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a7d9/91ce117b40508ee44f5009b38e9b/Kalendaria-do-kalendarzy-trojdzielnych-2023-1-kpl\",
    \"desc\": \"Kalendarz na rok: 2023, Producent: inny (Chroma Trójdzielne)\"
  },
  {
    \"name\": \"KALENDARZ KSIĄŻKOWY 2023 INTERDRUK A6 192 FLOWERS\",
    \"price\": 19.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d11f/3c8b8a9140e194a305a5b9727a73/KALENDARZ-KSIAZKOWY-2023-INTERDRUK-A6-192-FLOWERS\",
    \"desc\": \"Producent: Interdruk, Rozmiar: A6, Kolor dominujący: wielokolorowy, Kalendarz na rok: 2023\"
  },
  {
    \"name\": \"PAKIET: ATLAS + GLOBUS INTERAKTYWNY Z APLIKACJĄ\",
    \"price\": 99.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d068/544de0d94d338c7713d4e72f728c/PAKIET-ATLAS-GLOBUS-INTERAKTYWNY-Z-APLIKACJA\",
    \"desc\": \"Okładka: miękka, Rok wydania: 2022, Typ publikacji: Atlas\"
  },
  {
    \"name\": \"ZESTAW 50 KSIĄŻEK WYPRZEDAŻ HURT PREMIUM\",
    \"price\": 107.01,
    \"imageURL\": \"https://a.allegroimg.com/s180/1131ac/c335fe044fcb94073ac30f8753fa/ZESTAW-50-KSIAZEK-WYPRZEDAZ-HURT-PREMIUM\",
    \"desc\": \"Okładka: twarda z obwolutą, Rok wydania: 2001\"
  },
  {
    \"name\": \"Mój Elementarz Nauka czytania i pisania\",
    \"price\": 24.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d6c4/df7f5da048808820ba1afbacbc72/Moj-Elementarz-Nauka-czytania-i-pisania\",
    \"desc\": \"Okładka: miękka, Rok wydania: 2019, Przedział wiekowy: dla dzieci z klas I-III (6-9 lat), dla dzieci z klas IV-VI (10-12 lat)\"
  },
  {
    \"name\": \"KALENDARZ KSIĄŻKOWY 2023 INTERDRUK A5 192 BOTANIC\",
    \"price\": 28.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1166a8/aa89d8fe467aa80cda732416c41d/KALENDARZ-KSIAZKOWY-2023-INTERDRUK-A5-192-BOTANIC\",
    \"desc\": \"Producent: Interdruk, Rozmiar: A5, Kolor dominujący: wielokolorowy, Kalendarz na rok: 2023\"
  },
  {
    \"name\": \"KALENDARZ KSIĄŻKOWY 2023 INTERDRUK A5 192 LINE ART\",
    \"price\": 28.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1135be/b8e20f5647a085c6798b677f4015/KALENDARZ-KSIAZKOWY-2023-INTERDRUK-A5-192-LINE-ART\",
    \"desc\": \"Producent: Interdruk, Rozmiar: A5, Kolor dominujący: odcienie szarości i srebra, Kalendarz na rok: 2023\"
  },
  {
    \"name\": \"Kalendarz ścienny motywacyjny WIDOKI 2023 rok\",
    \"price\": 16.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/119477/6f3ac8804fe88b15736070781902/Kalendarz-scienny-motywacyjny-WIDOKI-2023-rok\",
    \"desc\": \"Kalendarz na rok: 2023, Producent: Interdruk, Tematyka: krajobrazy\"
  },
  {
    \"name\": \"KALENDARZ TRÓJDZIELNY ŚCIENNY 2023 WZORY KOLORY\",
    \"price\": 25,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ac2e/5c658f764bb7a062afdceee96523/KALENDARZ-TROJDZIELNY-SCIENNY-2023-WZORY-KOLORY\",
    \"desc\": \"Kalendarz na rok: 2023, Producent: Jotan, Tematyka: krajobrazy\"
  },
  {
    \"name\": \"NOTATNIK NOTES RETRO PAMIĘTNIK A5 eko skóra\",
    \"price\": 42.79,
    \"imageURL\": \"https://a.allegroimg.com/s180/111ad2/6ed2c9a848ae95bc65eb5a21dfe8/NOTATNIK-NOTES-RETRO-PAMIETNIK-A5-eko-skora\",
    \"desc\": \"Rodzaj: notes, Kolor dominujący: czerń, Producent: Asgard, Rozmiar: A5\"
  },
  {
    \"name\": \"Reprint WSPOMNIENIE DZIECIŃSTWA! Falski ELEMENTARZ\",
    \"price\": 89.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/117a4d/f5f417a14cb9b4cd1b8bf8e32155/Reprint-WSPOMNIENIE-DZIECINSTWA-Falski-ELEMENTARZ\",
    \"desc\": \"Okładka: twarda, Rok wydania: 2017, Przedział wiekowy: dla dzieci z klas I-III (6-9 lat)\"
  },
  {
    \"name\": \"Reprint KULTOWY ELEMENTARZ Nauka czytania LITERY\",
    \"price\": 60.2,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c6ce/e7197f7a4fa296a4d6ae8c6ba71a/Reprint-KULTOWY-ELEMENTARZ-Nauka-czytania-LITERY\",
    \"desc\": \"Okładka: twarda, Rok wydania: 2022, Przedział wiekowy: dla przedszkolaków (3-5 lat), dla dzieci z klas I-III (6-9 lat)\"
  },
  {
    \"name\": \"planer KALENDARZ CISZA 2023 USŁYSZ SIEBIE\",
    \"price\": 45,
    \"imageURL\": \"https://a.allegroimg.com/s180/11cc20/c1d3e8ec41a9a7b1a16600bdf06d/planer-KALENDARZ-CISZA-2023-USLYSZ-SIEBIE\",
    \"desc\": \"Producent: Eurograf, Rozmiar: A5, Kolor dominujący: wielokolorowy, Kalendarz na rok: 2023\"
  },
  {
    \"name\": \"ELEMENTARZ Czytamy metodą sylabową nauka czytania\",
    \"price\": 22.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11f516/7ac554e240f398fe83ed1f644456/ELEMENTARZ-Czytamy-metoda-sylabowa-nauka-czytania\",
    \"desc\": \"Okładka: miękka, Rok wydania: 2017\"
  },
  {
    \"name\": \"KALENDARZ KSIĄŻKOWY 2023 INTERDRUK A6 192 FLOWERS\",
    \"price\": 19.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d11f/3c8b8a9140e194a305a5b9727a73/KALENDARZ-KSIAZKOWY-2023-INTERDRUK-A6-192-FLOWERS\",
    \"desc\": \"Producent: Interdruk, Rozmiar: A6, Kolor dominujący: wielokolorowy, Kalendarz na rok: 2023\"
  },
  {
    \"name\": \"Bogaty ojciec, biedny ojciec. Robert Kiyosaki\",
    \"price\": 24.48,
    \"imageURL\": \"https://a.allegroimg.com/s180/11be1a/fdc8ea9041eab5b27b22948ffebe/Bogaty-ojciec-biedny-ojciec-Robert-Kiyosaki\",
    \"desc\": \"Okładka: miękka, Rok wydania: 2018\"
  },
  {
    \"name\": \"Kalendarz Terminarz A5 Dzienny 2023 z Zapięciem\",
    \"price\": 49,
    \"imageURL\": \"https://a.allegroimg.com/s180/111cda/dd72ccde4e3ba3e0a37ec13ca725/Kalendarz-Terminarz-A5-Dzienny-2023-z-Zapieciem\",
    \"desc\": \"Producent: B-one, Rozmiar: A5, Kolor dominujący: inny, Kalendarz na rok: 2023\"
  },
  {
    \"name\": \"PSI PATROL 505 NAKLEJEK ZABAWY KOLOROWANKA ZADANIA\",
    \"price\": 14.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11307f/5d508324470f99a0da95fa30d454/PSI-PATROL-505-NAKLEJEK-ZABAWY-KOLOROWANKA-ZADANIA\",
    \"desc\": \"Okładka: miękka, Rok wydania: 2022\"
  },
  {
    \"name\": \"Odgłosy Zwierząt 60 dźwięków Przyciśnij Posłuchaj\",
    \"price\": 49.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c0b4/6de4ff114b3480a71bb347f6daba/Odglosy-Zwierzat-60-dzwiekow-Przycisnij-Posluchaj\",
    \"desc\": \"Okładka: twarda, Rok wydania: 2021, Przedział wiekowy: dla najmłodszych (0-2 lata)\"
  },
  {
    \"name\": \"Nie mam już k*rwa siły 2. Kolorowanka dla mam.\",
    \"price\": 43.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/115327/cc39f7f44ee4a9dcde419c0e3fc0/Nie-mam-juz-k-rwa-sily-2-Kolorowanka-dla-mam\",
    \"desc\": \"Okładka: miękka, Rok wydania: 2022\"
  },
  {
    \"name\": \"Opowieści o tym, co w życiu ważne\",
    \"price\": 26.63,
    \"imageURL\": \"https://a.allegroimg.com/s180/115262/e05020c04f77a059b15bfb759137/Opowiesci-o-tym-co-w-zyciu-wazne\",
    \"desc\": \"Okładka: twarda, Rok wydania: 2022, Przedział wiekowy: dla dzieci z klas I-III (6-9 lat), dla dzieci z klas IV-VI (10-12 lat)\"
  },
  {
    \"name\": \"Naklejam i czytam sylabami Nauka czytania zadania\",
    \"price\": 18.2,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ff9b/17a34b6942d7a22aad7978472b22/Naklejam-i-czytam-sylabami-Nauka-czytania-zadania\",
    \"desc\": \"Okładka: miękka, Rok wydania: 2021\"
  },
  {
    \"name\": \"Książka Nawyki 2.0 Maciej Wieczorek - BESTSELLER!\",
    \"price\": 89,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ba3e/07e7bb2648e1bb7f2e3b8079e47b/Ksiazka-Nawyki-2-0-Maciej-Wieczorek-BESTSELLER\",
    \"desc\": \"Okładka: twarda, Rok wydania: 2020\"
  },
  {
    \"name\": \"KALENDARZ TERMINARZ BIURKOWY 2023 SPIRALA WZORY\",
    \"price\": 15.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11f484/198b8ad147d393a213fef275a3d6/KALENDARZ-TERMINARZ-BIURKOWY-2023-SPIRALA-WZORY\",
    \"desc\": \"Kalendarz na rok: 2022, Producent: KJJ Group\"
  },
  {
    \"name\": \"KALENDARZ KSIĄŻKOWY 2023 INTERDRUK A5 192 GALAXY\",
    \"price\": 29.69,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a591/8933626846e6bbeaf601cd9dc9c6/KALENDARZ-KSIAZKOWY-2023-INTERDRUK-A5-192-GALAXY\",
    \"desc\": \"Producent: Interdruk, Rozmiar: A5, Kolor dominujący: odcienie niebieskiego, Kalendarz na rok: 2023\"
  },
  {
    \"name\": \"Kolorowanka z tatuażami. Jednorożce - praca\",
    \"price\": 6.28,
    \"imageURL\": \"https://a.allegroimg.com/s180/1187e9/3c4294c54279ae4ad6564c62e801/Kolorowanka-z-tatuazami-Jednorozce-praca\",
    \"desc\": \"Okładka: brak informacji, Rok wydania: 2022, Przedział wiekowy: dla przedszkolaków (3-5 lat), dla dzieci z klas I-III (6-9 lat)\"
  },
  {
    \"name\": \"Wyprzedaż Ksiażki na wagę hurt kilogramy wystawę\",
    \"price\": 3.5,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d13b/268a53d54b95b527560e9bcb51ef/Wyprzedaz-Ksiazki-na-wage-hurt-kilogramy-wystawe\",
    \"desc\": \"Okładka: miękka, Rok wydania: 1990\"
  },
  {
    \"name\": \"KALENDARZ BIZNESOWY 2023 - Wygraj ten rok!\",
    \"price\": 45,
    \"imageURL\": \"https://a.allegroimg.com/s180/115414/6d203a304577821f4d855c7467e7/KALENDARZ-BIZNESOWY-2023-Wygraj-ten-rok\",
    \"desc\": \"Producent: Eurograf, Rozmiar: B5, Kolor dominujący: odcienie niebieskiego, Kalendarz na rok: 2023\"
  },
  {
    \"name\": \"Książka 138 - Kacper Bisanz i Karol Chojnacki\",
    \"price\": 89,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d4d0/5061ef1f43c2a67d8696dffd39dc/Ksiazka-138-Kacper-Bisanz-i-Karol-Chojnacki\",
    \"desc\": \"Okładka: twarda, Rok wydania: 2021\"
  },
  {
    \"name\": \"PAKIET 4-LATKA z naklejkami NAUKA przez ZABAWĘ\",
    \"price\": 56.28,
    \"imageURL\": \"https://a.allegroimg.com/s180/111137/ad3f804740b7af8e21ea79c2f6a5/PAKIET-4-LATKA-z-naklejkami-NAUKA-przez-ZABAWE\",
    \"desc\": \"Okładka: miękka, Rok wydania: 2019\"
  },
  {
    \"name\": \"Książka 138 - Kacper Bisanz i Karol Chojnacki\",
    \"price\": 89,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d4d0/5061ef1f43c2a67d8696dffd39dc/Ksiazka-138-Kacper-Bisanz-i-Karol-Chojnacki\",
    \"desc\": \"Okładka: twarda, Rok wydania: 2021\"
  },
  {
    \"name\": \"KALENDARZ KSIĄŻKOWY 2023 INTERDRUK A6 192 DOTS\",
    \"price\": 19.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/112f56/a70f5de647ab80bdefd2e30996b7/KALENDARZ-KSIAZKOWY-2023-INTERDRUK-A6-192-DOTS\",
    \"desc\": \"Producent: Interdruk, Rozmiar: A6, Kolor dominujący: wielokolorowy, Kalendarz na rok: 2023\"
  },
  {
    \"name\": \"PAKIET nauka pisania 6w1 szlaczki literki cyferki\",
    \"price\": 48.01,
    \"imageURL\": \"https://a.allegroimg.com/s180/114bed/7a53a33a4f969c30e6e3cba7451b/PAKIET-nauka-pisania-6w1-szlaczki-literki-cyferki\",
    \"desc\": \"Okładka: miękka, Rok wydania: 2020, Przedział wiekowy: dla dzieci z klas I-III (6-9 lat)\"
  },
  {
    \"name\": \"NOTES PAMIĘTNIK NOTATNIK RETRO PREZENT klasyczny\",
    \"price\": 20.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/111469/7f2f53c64903b1a7afe33d51040d/NOTES-PAMIETNIK-NOTATNIK-RETRO-PREZENT-klasyczny\",
    \"desc\": \"Rodzaj: notes, Kolor dominujący: odcienie brązu i beżu, Producent: Verk Group, Rozmiar: inny\"
  },
  {
    \"name\": \"KOLOROWANKA WODNA malowanka Z PISAKIEM dla dzieci\",
    \"price\": 10,
    \"imageURL\": \"https://a.allegroimg.com/s180/1168ee/8637705742e18631e709c93d49ef/KOLOROWANKA-WODNA-malowanka-Z-PISAKIEM-dla-dzieci\",
    \"desc\": \"Okładka: twarda, Rok wydania: 2021, Przedział wiekowy: dla najmłodszych (0-2 lata), dla przedszkolaków (3-5 lat)\"
  },
  {
    \"name\": \"KALENDARZ KSIĄŻKOWY 2023 INTERDRUK A5 192 BOTANIC\",
    \"price\": 28.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1166a8/aa89d8fe467aa80cda732416c41d/KALENDARZ-KSIAZKOWY-2023-INTERDRUK-A5-192-BOTANIC\",
    \"desc\": \"Producent: Interdruk, Rozmiar: A5, Kolor dominujący: wielokolorowy, Kalendarz na rok: 2023\"
  },
  {
    \"name\": \"Baw się i dotknij Na wsi Książeczka sensoryczna\",
    \"price\": 28.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/112037/5aef22e34531ab45e1aa1cc15189/Baw-sie-i-dotknij-Na-wsi-Ksiazeczka-sensoryczna\",
    \"desc\": \"Okładka: twarda, Rok wydania: 2020, Przedział wiekowy: dla najmłodszych (0-2 lata), dla przedszkolaków (3-5 lat)\"
  }
]`);

const c = gifts as BaseGift[];

export default c;
