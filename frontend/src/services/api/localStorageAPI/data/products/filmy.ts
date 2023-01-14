import type { BaseGift } from '../gifts';

const gifts: unknown = JSON.parse(`[
  {
    \"name\": \"Kevin Sam W Domu 1-2 Pakiet (2xDVD)\",
    \"price\": 52.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/115186/9b500e8148e3968b315ffa4ebf0a/Kevin-Sam-W-Domu-1-2-Pakiet-2xDVD\",
    \"desc\": \"Stan: Nowy, Rodzaj opakowania: DVD-box, Polska wersja językowa: lektor, Rodzaj wydania: Wydanie pełne, Nośnik: płyta DVD\"
  },
  {
    \"name\": \"FURIOZA (BLU-RAY)\",
    \"price\": 55,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a445/b34d28cf4a629a471890d4fcb6ef/FURIOZA-BLU-RAY\",
    \"desc\": \"Stan: Nowy, Opakowanie: w folii, Nośnik: płyta Blu-ray\"
  },
  {
    \"name\": \"Clint Eastwood - kolekcja (DVD)\",
    \"price\": 69.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/113450/723d50c74380a83570904b9b67b1/Clint-Eastwood-kolekcja-DVD\",
    \"desc\": \"Stan: Nowy, Rodzaj opakowania: DVD-box, Region producenta filmu: Europa, Polska wersja językowa: napisy, lektor, Rodzaj wydania: Wydanie pełne, Nośnik: płyta DVD\"
  },
  {
    \"name\": \"PLATYNOWA KOLEKCJA KINA POLSKIEGO PAKIET 1 [15DVD]\",
    \"price\": 89.62,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b0ea/4dc451f64cf080bc9fa645cc9fe8/PLATYNOWA-KOLEKCJA-KINA-POLSKIEGO-PAKIET-1-15DVD\",
    \"desc\": \"Stan: Nowy, Opakowanie: w folii, Rodzaj wydania: Wydanie pełne, Nośnik: płyta DVD\"
  },
  {
    \"name\": \"Kevin Sam W Domu 1-2 Pakiet (2xDVD)\",
    \"price\": 52.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/115186/9b500e8148e3968b315ffa4ebf0a/Kevin-Sam-W-Domu-1-2-Pakiet-2xDVD\",
    \"desc\": \"Stan: Nowy, Rodzaj opakowania: DVD-box, Polska wersja językowa: lektor, Rodzaj wydania: Wydanie pełne, Nośnik: płyta DVD\"
  },
  {
    \"name\": \"WŁADCA PIERŚCIENI TRYLOGIA (WERSJA ROZSZERZONA) BO\",
    \"price\": 339,
    \"imageURL\": \"https://a.allegroimg.com/s180/114eba/fa5798ae43a2a096fca7f63f2f50/WLADCA-PIERSCIENI-TRYLOGIA-WERSJA-ROZSZERZONA-BO\",
    \"desc\": \"Stan: Nowy, Opakowanie: w folii, Polska wersja językowa: lektor, napisy, Nośnik: płyta Blu-ray\"
  },
  {
    \"name\": \"FURIOZA (BLU-RAY)\",
    \"price\": 55,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a445/b34d28cf4a629a471890d4fcb6ef/FURIOZA-BLU-RAY\",
    \"desc\": \"Stan: Nowy, Opakowanie: w folii, Nośnik: płyta Blu-ray\"
  },
  {
    \"name\": \"SZYBCY I WŚCIEKLI: Sezony 1-10 (11 DVD)\",
    \"price\": 136.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11bf9d/6c5f33324e6e80d0f48ba9bad6d2/SZYBCY-I-WSCIEKLI-Sezony-1-10-11-DVD\",
    \"desc\": \"Stan: Nowy, Nośnik: płyta DVD\"
  },
  {
    \"name\": \"Zestaw 100 filmów-DVD wydania tekturowe gazety\",
    \"price\": 150.02,
    \"imageURL\": \"https://a.allegroimg.com/s180/11311b/0977fdb64fd4a66054345641c450/Zestaw-100-filmow-DVD-wydania-tekturowe-gazety\",
    \"desc\": \"Stan: Używany, Rodzaj opakowania: Koperta kartonowa, Region producenta filmu: Ameryka Północna, Opakowanie: bez folii, Polska wersja językowa: napisy, lektor, Rodzaj wydania: Wydanie pełne, Nośnik: płyta DVD\"
  },
  {
    \"name\": \"HARRY POTTER. PEŁNA KOLEKCJA 8 FILMÓW [8DVD]+KARTY\",
    \"price\": 149.83,
    \"imageURL\": \"https://a.allegroimg.com/s180/119c19/2957398146af9add0705bbb5733b/HARRY-POTTER-PELNA-KOLEKCJA-8-FILMOW-8DVD-KARTY\",
    \"desc\": \"Stan: Nowy, Opakowanie: w folii, Polska wersja językowa: dubbing, napisy, Rodzaj wydania: Wydanie pełne, Nośnik: płyta DVD\"
  },
  {
    \"name\": \"HOBBIT TRYLOGIA (6 płyt DVD) Pakiet - 3 FILMY\",
    \"price\": 89.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/117d1e/f66354e44e4cbdf75fca3c40a276/HOBBIT-TRYLOGIA-6-plyt-DVD-Pakiet-3-FILMY\",
    \"desc\": \"Stan: Nowy, Rodzaj opakowania: DVD-box, Region producenta filmu: Europa, Opakowanie: w folii, Polska wersja językowa: napisy, dubbing, Rodzaj wydania: Wydanie pełne, Nośnik: płyta DVD\"
  },
  {
    \"name\": \"GWIEZDNE WOJNY PEŁNA KOLEKCJA PAKIET (STAR WARS) 1\",
    \"price\": 1000.05,
    \"imageURL\": \"https://a.allegroimg.com/s180/119435/c4e3bce048b18a010e7de74ddccd/GWIEZDNE-WOJNY-PELNA-KOLEKCJA-PAKIET-STAR-WARS-1\",
    \"desc\": \"Stan: Nowy, Rodzaj opakowania: DVD-box, Opakowanie: w folii, Polska wersja językowa: napisy, dubbing\"
  },
  {
    \"name\": \"007 JAMES BOND NIE CZAS UMIERAĆ (BLU-RAY 4K)+(BLU-\",
    \"price\": 154.53,
    \"imageURL\": \"https://a.allegroimg.com/s180/1115e1/de24f40844aca9523bf7483db1cb/007-JAMES-BOND-NIE-CZAS-UMIERAC-BLU-RAY-4K-BLU\",
    \"desc\": \"Stan: Nowy, Opakowanie: w folii, Polska wersja językowa: lektor, napisy, Nośnik: płyta Blu-ray 4K\"
  },
  {
    \"name\": \"Dvd: AVATAR (2009) - Sam Worthington, Zoe Saldana\",
    \"price\": 9.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/113695/a84e37644226bb3ade88b3a3e876/Dvd-AVATAR-2009-Sam-Worthington-Zoe-Saldana\",
    \"desc\": \"Stan: Nowy, Rodzaj opakowania: DVD-box, Region producenta filmu: Europa, Opakowanie: w folii, Polska wersja językowa: napisy, lektor, Rodzaj wydania: Wydanie pełne, Nośnik: płyta DVD\"
  },
  {
    \"name\": \"MICHAEL JACKSON: MOONWALKER (BLU-RAY)\",
    \"price\": 52.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c025/6a6af7364a71a6f3d8572ca14f38/MICHAEL-JACKSON-MOONWALKER-BLU-RAY\",
    \"desc\": \"Stan: Nowy, Opakowanie: w folii, Nośnik: płyta Blu-ray\"
  },
  {
    \"name\": \"NASZE MAGICZNE ENCANTO (DISNEY) [DVD]\",
    \"price\": 30,
    \"imageURL\": \"https://a.allegroimg.com/s180/11854e/c9cab07b46f787e914625d471f88/NASZE-MAGICZNE-ENCANTO-DISNEY-DVD\",
    \"desc\": \"Stan: Nowy, Rodzaj opakowania: DVD-box, Opakowanie: w folii, Polska wersja językowa: dubbing, napisy, Rodzaj wydania: Wydanie pełne, Nośnik: płyta DVD\"
  },
  {
    \"name\": \"GWIEZDNE WOJNY TRYLOGIA [3BLU-RAY]\",
    \"price\": 299.13,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d44b/94437ea84df9ba4d37fe64e741b7/GWIEZDNE-WOJNY-TRYLOGIA-3BLU-RAY\",
    \"desc\": \"Stan: Nowy, Opakowanie: w folii, Polska wersja językowa: napisy, dubbing, Nośnik: płyta Blu-ray\"
  },
  {
    \"name\": \"Disney zaczarowana kolekcja: Zakochany Kundel DVD\",
    \"price\": 36.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/111533/340b09bc4109ab60b674a0ac3182/Disney-zaczarowana-kolekcja-Zakochany-Kundel-DVD\",
    \"desc\": \"Stan: Nowy, Rodzaj opakowania: DVD-box, Polska wersja językowa: lektor, napisy, Nośnik: płyta DVD\"
  },
  {
    \"name\": \"Top Gun: Maverick (DVD)\",
    \"price\": 55.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/1149d4/20b802c74cbaab734aa6a4313047/Top-Gun-Maverick-DVD\",
    \"desc\": \"Stan: Nowy, Rodzaj opakowania: DVD-box, Polska wersja językowa: lektor, napisy, Rodzaj wydania: Wydanie pełne, Nośnik: płyta DVD\"
  },
  {
    \"name\": \"Dvd: AUTA 3 (2017) - Disney - FOLIA\",
    \"price\": 7.49,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ee4d/0014ea324c9c92228e5c459ddfa9/Dvd-AUTA-3-2017-Disney-FOLIA\",
    \"desc\": \"Stan: Nowy, Rodzaj opakowania: DVD-box, Opakowanie: w folii, Polska wersja językowa: napisy, dubbing, Nośnik: płyta DVD\"
  },
  {
    \"name\": \"PIRACI Z KARAIBÓW PAKIET 1-5 (5DVD)\",
    \"price\": 99.83,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d293/d64318704e0bb3849ed4b06303c3/PIRACI-Z-KARAIBOW-PAKIET-1-5-5DVD\",
    \"desc\": \"Stan: Nowy, Rodzaj opakowania: DVD-box, Opakowanie: w folii, Polska wersja językowa: dubbing, lektor, napisy, Rodzaj wydania: Wydanie pełne, Nośnik: płyta DVD\"
  },
  {
    \"name\": \"Przyjaciele [32 DVD] Friends: Sezony 1-10\",
    \"price\": 269.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/1172fa/08a4154840beaf925cd422671f1b/Przyjaciele-32-DVD-Friends-Sezony-1-10\",
    \"desc\": \"Stan: Nowy, Nośnik: płyta DVD\"
  },
  {
    \"name\": \"DRAGON BALL COMPLETE SERIES SEASON 1-5 (25 DVDs)\",
    \"price\": 229.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11e9dd/e51609524b168c690e89b631b64a/DRAGON-BALL-COMPLETE-SERIES-SEASON-1-5-25-DVDs\",
    \"desc\": \"Stan: Nowy, Nośnik: płyta DVD\"
  },
  {
    \"name\": \"Pudełka dvd Ps3 Xbox 100 sztuk zestaw z płytą HURT\",
    \"price\": 50.01,
    \"imageURL\": \"https://a.allegroimg.com/s180/113c14/4ad0571f452097569bc9c74c262b/Pudelka-dvd-Ps3-Xbox-100-sztuk-zestaw-z-plyta-HURT\",
    \"desc\": \"Stan: Używany, Nośnik: płyta DVD\"
  },
  {
    \"name\": \"Kaseta VHS do nagrania zestaw 10 sztuk NIE czysta\",
    \"price\": 40,
    \"imageURL\": \"https://a.allegroimg.com/s180/11fab0/95a184b7488db0d39f0dbdd5ba4a/Kaseta-VHS-do-nagrania-zestaw-10-sztuk-NIE-czysta\",
    \"desc\": \"Stan: Używany, Nośnik: kaseta wideo\"
  },
  {
    \"name\": \"Gra o tron. Sezon 8 DVD 4\",
    \"price\": 40,
    \"imageURL\": \"https://a.allegroimg.com/s180/114926/ab9e99c147e3bdcd37daae1e8e83/Gra-o-tron-Sezon-8-DVD-4\",
    \"desc\": \"Stan: Nowy, Rodzaj opakowania: DVD-box, Region producenta filmu: Ameryka Północna, Polska wersja językowa: napisy, lektor, Rodzaj wydania: Wydanie pełne, Nośnik: płyta DVD\"
  },
  {
    \"name\": \"Obcy Pakiet 6 Filmów (6xDVD)\",
    \"price\": 134.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/117c38/e386a80a40108d3976b96e4af55a/Obcy-Pakiet-6-Filmow-6xDVD\",
    \"desc\": \"Stan: Nowy, Polska wersja językowa: lektor, napisy, Rodzaj wydania: Wydanie pełne, Nośnik: płyta DVD\"
  },
  {
    \"name\": \"TOP GUN: MAVERICK [BLU-RAY 4K]\",
    \"price\": 125.31,
    \"imageURL\": \"https://a.allegroimg.com/s180/11027c/d0d1c2284252bf6575050f454492/TOP-GUN-MAVERICK-BLU-RAY-4K\",
    \"desc\": \"Stan: Nowy, Opakowanie: w folii, Polska wersja językowa: lektor, napisy, Nośnik: płyta Blu-ray 4K\"
  },
  {
    \"name\": \"KRAINA LODU Disney DVD bajka\",
    \"price\": 36.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/0604be/40b482c74fc18c80c32db93ace3a/KRAINA-LODU-Disney-DVD-bajka\",
    \"desc\": \"Stan: Nowy, Rodzaj opakowania: DVD-box, Region producenta filmu: Europa, Opakowanie: w folii, Polska wersja językowa: napisy, dubbing, Rodzaj wydania: Wydanie pełne, Nośnik: płyta DVD\"
  },
  {
    \"name\": \"DVD BAJKI ZESTAW PAKIET FILM 14 DVD BAJKA\",
    \"price\": 40,
    \"imageURL\": \"https://a.allegroimg.com/s180/112bd0/67bc771140178f75d319b6c7fd2c/DVD-BAJKI-ZESTAW-PAKIET-FILM-14-DVD-BAJKA\",
    \"desc\": \"Stan: Nowy, Rodzaj opakowania: DVD-box, Region producenta filmu: Europa, Polska wersja językowa: dubbing, Rodzaj wydania: Wydanie pełne, Nośnik: płyta DVD\"
  },
  {
    \"name\": \"NAGA BROŃ TRYLOGIA [3DVD]\",
    \"price\": 100.81,
    \"imageURL\": \"https://a.allegroimg.com/s180/1105e1/43dcd36743dd8a0035ad256c89fc/NAGA-BRON-TRYLOGIA-3DVD\",
    \"desc\": \"Stan: Nowy, Rodzaj opakowania: DVD-box, Opakowanie: w folii, Polska wersja językowa: napisy, Rodzaj wydania: Wydanie pełne, Nośnik: płyta DVD\"
  },
  {
    \"name\": \"HOBBIT + WŁADCA PIERŚCIENI 6 FILMÓW [6DVD]\",
    \"price\": 141,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d9c4/14161a0d4dfb81e85eb095358d21/HOBBIT-WLADCA-PIERSCIENI-6-FILMOW-6DVD\",
    \"desc\": \"Stan: Nowy, Rodzaj opakowania: DVD-box, Opakowanie: w folii, Polska wersja językowa: dubbing, lektor, napisy, Rodzaj wydania: Wydanie pełne, Nośnik: płyta DVD\"
  },
  {
    \"name\": \"Obcy Pakiet 6 Filmów (6xDVD)\",
    \"price\": 134.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/117c38/e386a80a40108d3976b96e4af55a/Obcy-Pakiet-6-Filmow-6xDVD\",
    \"desc\": \"Stan: Nowy, Polska wersja językowa: lektor, napisy, Rodzaj wydania: Wydanie pełne, Nośnik: płyta DVD\"
  },
  {
    \"name\": \"MIASTECZKO TWIN PEAKS SEZON 2 [6DVD]\",
    \"price\": 336.05,
    \"imageURL\": \"https://a.allegroimg.com/s180/112856/52706a214ea0879c370745a5eb34/MIASTECZKO-TWIN-PEAKS-SEZON-2-6DVD\",
    \"desc\": \"Stan: Nowy, Opakowanie: w folii, Polska wersja językowa: lektor, napisy, Rodzaj wydania: Wydanie pełne, Nośnik: płyta DVD\"
  },
  {
    \"name\": \"Psi Patrol: Film (DVD)\",
    \"price\": 55.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/113533/42f0251e41a5a5d53bd96e684d17/Psi-Patrol-Film-DVD\",
    \"desc\": \"Stan: Nowy, Rodzaj opakowania: DVD-box, Polska wersja językowa: dubbing, Rodzaj wydania: Wydanie pełne, Nośnik: płyta DVD\"
  },
  {
    \"name\": \"Ostatni Mohikanin blu-ray NAPISY PL wersja reż.\",
    \"price\": 199,
    \"imageURL\": \"https://a.allegroimg.com/s180/1e735c/9fa9c14f4401a995c2b19b60d5cd/Ostatni-Mohikanin-blu-ray-NAPISY-PL-wersja-rez\",
    \"desc\": \"Opakowanie: bez folii, Polska wersja językowa: napisy, Liczba płyt w wydaniu: jedna, Nośnik: płyta Blu-ray\"
  },
  {
    \"name\": \"Dvd PIĘKNA I BESTIA Emma Watson folia\",
    \"price\": 7.77,
    \"imageURL\": \"https://6.allegroimg.com/s180/033a83/d1ef3f764d2ea5d563866c230ab6/Dvd-PIEKNA-I-BESTIA-Emma-Watson-folia\",
    \"desc\": \"Stan: Nowy, Rodzaj opakowania: DVD-box, Opakowanie: w folii, Polska wersja językowa: napisy, dubbing, Nośnik: płyta DVD\"
  },
  {
    \"name\": \"Film Wielka Kolekcja Westernów PRZEŁĘCZ ZŁAMANYCH\",
    \"price\": 12.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c96a/0b3d78d54d388ee33a570a6c0735/Film-Wielka-Kolekcja-Westernow-PRZELECZ-ZLAMANYCH\",
    \"desc\": \"Stan: Nowy, Rodzaj opakowania: Opakowanie książkowe, Region producenta filmu: Europa, Polska wersja językowa: napisy, Rodzaj wydania: Wydanie pełne, Nośnik: płyta DVD\"
  },
  {
    \"name\": \"Jurassic World: Dominion (DVD)\",
    \"price\": 56.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c26d/2b4ab6e34c758f59286540ceb714/Jurassic-World-Dominion-DVD\",
    \"desc\": \"Stan: Nowy, Rodzaj opakowania: DVD-box, Polska wersja językowa: lektor, napisy, Rodzaj wydania: Wydanie pełne, Nośnik: płyta DVD\"
  },
  {
    \"name\": \"KRAINA LODU 1-2 (DISNEY) (BOX) (DVD)\",
    \"price\": 56.01,
    \"imageURL\": \"https://a.allegroimg.com/s180/110927/f9a2fe6f419993561297ef44e11d/KRAINA-LODU-1-2-DISNEY-BOX-DVD\",
    \"desc\": \"Stan: Nowy, Rodzaj opakowania: DVD-box, Opakowanie: w folii, Polska wersja językowa: dubbing, napisy, Rodzaj wydania: Wydanie pełne, Nośnik: płyta DVD\"
  },
  {
    \"name\": \"Dvd GWIEZDNE WOJNY VII Przebudzenie Mocy STAR WARS\",
    \"price\": 8,
    \"imageURL\": \"https://a.allegroimg.com/s180/1149f7/dae17c3c4ad3ad4657a081d4a27b/Dvd-GWIEZDNE-WOJNY-VII-Przebudzenie-Mocy-STAR-WARS\",
    \"desc\": \"Stan: Nowy, Rodzaj opakowania: DVD-box, Opakowanie: w folii, Polska wersja językowa: napisy, dubbing, Nośnik: płyta DVD\"
  },
  {
    \"name\": \"HOBBIT Niezwykła podróż (2xDVD) film\",
    \"price\": 34.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/032f3a/80aa56d248f58a9553b366233869/HOBBIT-Niezwykla-podroz-2xDVD-film\",
    \"desc\": \"Stan: Nowy, Rodzaj opakowania: DVD-box, Region producenta filmu: Europa, Opakowanie: w folii, Polska wersja językowa: dubbing, napisy, Rodzaj wydania: Wydanie specjalne, limitowane, Nośnik: płyta DVD\"
  },
  {
    \"name\": \"Dvd: PERCY JACKSON I BOGOWIE: Złodziej Pioruna\",
    \"price\": 4.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/030ef5/2736301f4e10a33ced7a931b4ee7/Dvd-PERCY-JACKSON-I-BOGOWIE-Zlodziej-Pioruna\",
    \"desc\": \"Stan: Nowy, Rodzaj opakowania: DVD-box, Region producenta filmu: Ameryka Północna, Opakowanie: w folii, Polska wersja językowa: napisy, lektor, Rodzaj wydania: Wydanie pełne, Nośnik: płyta DVD\"
  },
  {
    \"name\": \"GWIEZDNE WOJNY IV-VI [3DVD] Dubbing PL\",
    \"price\": 226.04,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d539/27275f8e473ca48f5c2097844ed3/GWIEZDNE-WOJNY-IV-VI-3DVD-Dubbing-PL\",
    \"desc\": \"Stan: Nowy, Rodzaj opakowania: DVD-box, Opakowanie: w folii, Polska wersja językowa: napisy, dubbing, Rodzaj wydania: Wydanie pełne, Nośnik: płyta DVD\"
  },
  {
    \"name\": \"ŚWIĘTA POLSKIE KOLEKCJA (KRÓLOWA CHMUR) (4DVD)\",
    \"price\": 40.05,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a37f/a39e27f74541908b6f54c217d8be/SWIETA-POLSKIE-KOLEKCJA-KROLOWA-CHMUR-4DVD\",
    \"desc\": \"Stan: Nowy, Rodzaj opakowania: DVD-box, Opakowanie: w folii, Rodzaj wydania: Wydanie pełne, Nośnik: płyta DVD\"
  },
  {
    \"name\": \"CHUCKY: COMPLETE 7-MOVIE COLLECTION (7XBLU-RAY)\",
    \"price\": 379.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11dfc5/14a177f948778f49c6d7a667bf69/CHUCKY-COMPLETE-7-MOVIE-COLLECTION-7XBLU-RAY\",
    \"desc\": \"Stan: Nowy, Opakowanie: w folii, Nośnik: płyta Blu-ray\"
  },
  {
    \"name\": \"ELVIS (DVD)\",
    \"price\": 38.14,
    \"imageURL\": \"https://a.allegroimg.com/s180/11e678/a348798e44468f6959d393a49503/ELVIS-DVD\",
    \"desc\": \"Stan: Nowy, Rodzaj opakowania: DVD-box, Opakowanie: w folii, Polska wersja językowa: lektor, napisy, Rodzaj wydania: Wydanie pełne, Nośnik: płyta DVD\"
  },
  {
    \"name\": \"ALTERNATYWY 4 ODŚWIEŻONY CYFROWO (3DVD)\",
    \"price\": 23.08,
    \"imageURL\": \"https://a.allegroimg.com/s180/11145d/5abd864442f4ac2e51cf5aad91bc/ALTERNATYWY-4-ODSWIEZONY-CYFROWO-3DVD\",
    \"desc\": \"Stan: Nowy, Rodzaj opakowania: DVD-box, Opakowanie: w folii, Rodzaj wydania: Wydanie pełne, Nośnik: płyta DVD\"
  },
  {
    \"name\": \"LOST Zagubieni Sezony 1 + 2 + 3 blu-ray LEKTOR PL \",
    \"price\": 250,
    \"imageURL\": \"https://a.allegroimg.com/s180/1e67fc/bcd8a38a44e4a66f4ee688491091/LOST-Zagubieni-Sezony-1-2-3-blu-ray-LEKTOR-PL\",
    \"desc\": \"Opakowanie: bez folii, Polska wersja językowa: napisy, lektor, Liczba płyt w wydaniu: trzy i więcej, Nośnik: płyta Blu-ray\"
  },
  {
    \"name\": \"Król Lew - Disney [DVD]\",
    \"price\": 36.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11f59f/58cfba874310926bd40de32104b4/Krol-Lew-Disney-DVD\",
    \"desc\": \"Stan: Nowy, Rodzaj opakowania: DVD-box, Polska wersja językowa: napisy, lektor, Nośnik: płyta DVD\"
  },
  {
    \"name\": \"SEKSMISJA (REKONSTRUKCJA CYFROWA) [BLU-RAY]\",
    \"price\": 61.65,
    \"imageURL\": \"https://a.allegroimg.com/s180/112e42/ffa4bd0447698fc086eb32eb727d/SEKSMISJA-REKONSTRUKCJA-CYFROWA-BLU-RAY\",
    \"desc\": \"Stan: Nowy, Opakowanie: w folii, Nośnik: płyta Blu-ray\"
  },
  {
    \"name\": \"IRON MAN TRYLOGIA (3DVD)\",
    \"price\": 57.96,
    \"imageURL\": \"https://a.allegroimg.com/s180/111f09/4e83ba2140d09f46808699669fc9/IRON-MAN-TRYLOGIA-3DVD\",
    \"desc\": \"Stan: Nowy, Rodzaj opakowania: DVD-box, Opakowanie: w folii, Polska wersja językowa: dubbing, lektor, napisy, Rodzaj wydania: Wydanie pełne, Nośnik: płyta DVD\"
  },
  {
    \"name\": \"AKIRA KUROSAWA Kolekcjonerski Pakiet 12 filmów DVD\",
    \"price\": 1206,
    \"imageURL\": \"https://a.allegroimg.com/s180/114196/15c439474dbabca0054d74e4a3f2/AKIRA-KUROSAWA-Kolekcjonerski-Pakiet-12-filmow-DVD\",
    \"desc\": \"Stan: Używany, Rodzaj opakowania: DVD-box, Region producenta filmu: Europa, Polska wersja językowa: napisy, lektor, Rodzaj wydania: Wydanie pełne, Nośnik: płyta DVD\"
  },
  {
    \"name\": \"TRYLOGIA SERGIO LEONE STEELBOOK 3xBLU-RAY WERS.PL\",
    \"price\": 392.05,
    \"imageURL\": \"https://a.allegroimg.com/s180/111604/81fa245f48fa864b63dbddf5e6ff/TRYLOGIA-SERGIO-LEONE-STEELBOOK-3xBLU-RAY-WERS-PL\",
    \"desc\": \"Stan: Nowy, Opakowanie: w folii, Polska wersja językowa: lektor, napisy, Nośnik: płyta Blu-ray\"
  },
  {
    \"name\": \"PSI PATROL - PIESKI RATUJĄ DZIEŃ SPORTU DVD PL 24h\",
    \"price\": 29.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/039ebf/18b4745f41e092cc12146e54187d/PSI-PATROL-PIESKI-RATUJA-DZIEN-SPORTU-DVD-PL-24h\",
    \"desc\": \"Stan: Nowy, Rodzaj opakowania: DVD-box, Region producenta filmu: Europa, Opakowanie: w folii, Polska wersja językowa: dubbing, Rodzaj wydania: Wydanie pełne, Nośnik: płyta DVD\"
  },
  {
    \"name\": \"Clint Eastwood - kolekcja (DVD)\",
    \"price\": 69.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/113450/723d50c74380a83570904b9b67b1/Clint-Eastwood-kolekcja-DVD\",
    \"desc\": \"Stan: Nowy, Rodzaj opakowania: DVD-box, Region producenta filmu: Europa, Polska wersja językowa: napisy, lektor, Rodzaj wydania: Wydanie pełne, Nośnik: płyta DVD\"
  },
  {
    \"name\": \"Płyty cd dvd winyle kasety vhs na wagę kilogamy\",
    \"price\": 40,
    \"imageURL\": \"https://a.allegroimg.com/s180/11779c/3a0c7c4c4a2d9b6715999a0a7ab5/Plyty-cd-dvd-winyle-kasety-vhs-na-wage-kilogamy\",
    \"desc\": \"Stan: Używany, Nośnik: płyta DVD\"
  },
  {
    \"name\": \"Jurassic World: Dominion (DVD)\",
    \"price\": 56.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c26d/2b4ab6e34c758f59286540ceb714/Jurassic-World-Dominion-DVD\",
    \"desc\": \"Stan: Nowy, Rodzaj opakowania: DVD-box, Polska wersja językowa: lektor, napisy, Rodzaj wydania: Wydanie pełne, Nośnik: płyta DVD\"
  },
  {
    \"name\": \"TOP GUN: MAVERICK [DVD]\",
    \"price\": 39.52,
    \"imageURL\": \"https://a.allegroimg.com/s180/110e10/f1c1b3d54790b940a295cc9094bc/TOP-GUN-MAVERICK-DVD\",
    \"desc\": \"Stan: Nowy, Rodzaj opakowania: DVD-box, Opakowanie: w folii, Polska wersja językowa: lektor, napisy, Rodzaj wydania: Wydanie pełne, Nośnik: płyta DVD\"
  },
  {
    \"name\": \"KEEPING UP APPEARANCES / CO LUDZIE POWIEDZĄ COMPLE\",
    \"price\": 199.69,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a4e6/3d43af7f4f888174be3c126b432b/KEEPING-UP-APPEARANCES-CO-LUDZIE-POWIEDZA-COMPLE\",
    \"desc\": \"Stan: Nowy, Opakowanie: w folii, Rodzaj wydania: Wydanie pełne, Nośnik: płyta DVD\"
  },
  {
    \"name\": \"Dvd KEVIN SAM W DOMU (1990) Macaulay Culkin LEKTOR\",
    \"price\": 19.5,
    \"imageURL\": \"https://a.allegroimg.com/s180/1140c5/cbeba60b4879a633a9848b1a71ee/Dvd-KEVIN-SAM-W-DOMU-1990-Macaulay-Culkin-LEKTOR\",
    \"desc\": \"Stan: Nowy, Rodzaj opakowania: DVD-box, Region producenta filmu: Ameryka Północna, Polska wersja językowa: napisy, lektor, Rodzaj wydania: Wydanie pełne, Nośnik: płyta DVD\"
  },
  {
    \"name\": \"Pustynny szlak Randy samotny jeździec Wiatry...\",
    \"price\": 270,
    \"imageURL\": \"https://a.allegroimg.com/s180/11f728/802edff743e599b73fe8d1a1528f/Pustynny-szlak-Randy-samotny-jezdziec-Wiatry\",
    \"desc\": \"Stan: Używany, Polska wersja językowa: napisy, lektor, Nośnik: płyta DVD\"
  },
  {
    \"name\": \"CZTEREJ PANCERNI I PIES BOX (7DVD)\",
    \"price\": 79.08,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a13b/0f4ace6643a3b6b668b0bb36da98/CZTEREJ-PANCERNI-I-PIES-BOX-7DVD\",
    \"desc\": \"Stan: Nowy, Opakowanie: w folii, Rodzaj wydania: Wydanie pełne, Nośnik: płyta DVD\"
  },
  {
    \"name\": \"DOKTOR STRANGE W MULTIWERSUM OBŁĘDU [BLU-RAY]\",
    \"price\": 84.86,
    \"imageURL\": \"https://a.allegroimg.com/s180/1155eb/fda75bb846809b1d57fcbd3be2ce/DOKTOR-STRANGE-W-MULTIWERSUM-OBLEDU-BLU-RAY\",
    \"desc\": \"Stan: Nowy, Opakowanie: w folii, Polska wersja językowa: dubbing, napisy, Nośnik: płyta Blu-ray\"
  },
  {
    \"name\": \"HOBBIT Niezwykła podróż (2xDVD) film\",
    \"price\": 34.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/032f3a/80aa56d248f58a9553b366233869/HOBBIT-Niezwykla-podroz-2xDVD-film\",
    \"desc\": \"Stan: Nowy, Rodzaj opakowania: DVD-box, Region producenta filmu: Europa, Opakowanie: w folii, Polska wersja językowa: dubbing, napisy, Rodzaj wydania: Wydanie specjalne, limitowane, Nośnik: płyta DVD\"
  },
  {
    \"name\": \"Gwiezdne Wojny: Trylogia - Epizody 7-9 DVD film\",
    \"price\": 109,
    \"imageURL\": \"https://a.allegroimg.com/s180/118540/e7bc93624264b70432fb25e677ff/Gwiezdne-Wojny-Trylogia-Epizody-7-9-DVD-film\",
    \"desc\": \"Stan: Nowy, Rodzaj opakowania: DVD-box, Region producenta filmu: Europa, Opakowanie: w folii, Polska wersja językowa: napisy, dubbing, Rodzaj wydania: Wydanie pełne, Nośnik: płyta DVD\"
  },
  {
    \"name\": \"ETERNALS (DVD)\",
    \"price\": 39.32,
    \"imageURL\": \"https://a.allegroimg.com/s180/1141d6/9da4615d4b28950be949b15d19e1/ETERNALS-DVD\",
    \"desc\": \"Stan: Nowy, Rodzaj opakowania: DVD-box, Opakowanie: w folii, Polska wersja językowa: dubbing, napisy, Rodzaj wydania: Wydanie pełne, Nośnik: płyta DVD\"
  },
  {
    \"name\": \"SEAL Team : Complete Series Seasons 1-6 (27 DVDs)\",
    \"price\": 198.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/115992/0f5d73c64638a8a206ba9252b389/SEAL-Team-Complete-Series-Seasons-1-6-27-DVDs\",
    \"desc\": \"Stan: Nowy, Nośnik: płyta DVD\"
  },
  {
    \"name\": \"JAMES BOND CASINO ROYALE (Daniel CRAIG) [BLU-RAY]\",
    \"price\": 33.6,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d93b/2d506f6c494e8a672b85bfed737d/JAMES-BOND-CASINO-ROYALE-Daniel-CRAIG-BLU-RAY\",
    \"desc\": \"Stan: Nowy, Opakowanie: w folii, Polska wersja językowa: lektor, napisy, Nośnik: płyta Blu-ray\"
  },
  {
    \"name\": \"AUTA / AUTA 2 / AUTA 3 PAKIET (DISNEY) [3DVD]\",
    \"price\": 60.03,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ffea/4018dd6643d1829e41d7172bd956/AUTA-AUTA-2-AUTA-3-PAKIET-DISNEY-3DVD\",
    \"desc\": \"Stan: Nowy, Opakowanie: w folii, Polska wersja językowa: napisy, dubbing\"
  },
  {
    \"name\": \"Looney Tunes Super Gwiazdy: Królik Bugs (DVD)\",
    \"price\": 29.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c3d2/7cc17e3541b6aa1010a27c821f9c/Looney-Tunes-Super-Gwiazdy-Krolik-Bugs-DVD\",
    \"desc\": \"Stan: Nowy, Rodzaj opakowania: DVD-box, Region producenta filmu: Europa, Polska wersja językowa: napisy, Rodzaj wydania: Wydanie pełne, Nośnik: płyta DVD\"
  },
  {
    \"name\": \"GWIEZDNE WOJNY: TRYLOGIA. EPIZODY 7-9 (BOX) (3XBLU\",
    \"price\": 152.16,
    \"imageURL\": \"https://a.allegroimg.com/s180/117329/f094570c49da9656db82ca0108e5/GWIEZDNE-WOJNY-TRYLOGIA-EPIZODY-7-9-BOX-3XBLU\",
    \"desc\": \"Stan: Nowy, Opakowanie: w folii, Polska wersja językowa: dubbing, napisy, Nośnik: płyta Blu-ray\"
  }
]`);

const c = gifts as BaseGift[];

export default c;
