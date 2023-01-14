import type { BaseGift } from '../gifts';

const gifts: unknown = JSON.parse(`[
  {
    \"name\": \"360 KART POKEMON MEGA ZESTAW - SASZETKI 36 SZTUK\",
    \"price\": 58.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11cd11/10f20ee4420aa123221937cd2076/360-KART-POKEMON-MEGA-ZESTAW-SASZETKI-36-SZTUK\",
    \"desc\": \"Stan: Nowy, Producent: Nintendo\"
  },
  {
    \"name\": \"rozmawiajMY INTYMNIE - elegancka gra erotyczna\",
    \"price\": 115,
    \"imageURL\": \"https://a.allegroimg.com/s180/118d3d/256685b64d63976c51e668e14c45/rozmawiajMY-INTYMNIE-elegancka-gra-erotyczna\",
    \"desc\": \"Stan: Nowy, Wydawnictwo: Rozmawiaj.MY, Typ: Podstawa, Minimalna liczba graczy: 2, Maksymalna liczba graczy: 2, Wersja językowa gry: polska\"
  },
  {
    \"name\": \"NIEPOKONANE UNIKALNE KARTY POKEMON OP ALBUM GRATIS\",
    \"price\": 40,
    \"imageURL\": \"https://a.allegroimg.com/s180/119fa4/e9ec02174d1e8cf2ccd009f4d8cc/NIEPOKONANE-UNIKALNE-KARTY-POKEMON-OP-ALBUM-GRATIS\",
    \"desc\": \"Stan: Nowy, Producent: inny (ENADA)\"
  },
  {
    \"name\": \"360 KART POKEMON MEGA ZESTAW - SASZETKI 36 SZTUK\",
    \"price\": 58.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11cd11/10f20ee4420aa123221937cd2076/360-KART-POKEMON-MEGA-ZESTAW-SASZETKI-36-SZTUK\",
    \"desc\": \"Stan: Nowy, Producent: Nintendo\"
  },
  {
    \"name\": \"10 SEKUND GRA IMPREZOWA BEZ CENZURY TOWARZYSKA\",
    \"price\": 49,
    \"imageURL\": \"https://a.allegroimg.com/s180/1194b8/f15279ab439d82214cf37062d877/10-SEKUND-GRA-IMPREZOWA-BEZ-CENZURY-TOWARZYSKA\",
    \"desc\": \"Stan: Nowy, Wydawnictwo: Propaganda, Typ: Podstawa, Minimalna liczba graczy: 2, Maksymalna liczba graczy: Więcej niż 6, Wersja językowa gry: polska\"
  },
  {
    \"name\": \"GRA PLANSZOWA IMPREZOWA TOWARZYSKA DLA DOROSŁYCH\",
    \"price\": 36.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/113910/4f9c4708481b9c06684c951cc5f1/GRA-PLANSZOWA-IMPREZOWA-TOWARZYSKA-DLA-DOROSLYCH\",
    \"desc\": \"Stan: Nowy, Wydawnictwo: Propaganda, Typ: Podstawa, Minimalna liczba graczy: 2, Maksymalna liczba graczy: 4, Wersja językowa gry: polska\"
  },
  {
    \"name\": \"Dupa Biskupa - towarzyska gra karciana\",
    \"price\": 28.49,
    \"imageURL\": \"https://a.allegroimg.com/s180/114fa4/f7dc12704e8697ae2842a6020ae0/Dupa-Biskupa-towarzyska-gra-karciana\",
    \"desc\": \"Stan: Nowy, Typ: Podstawa, Czas rozgrywki: Do 15 minut, Wiek gracza: 18+, Minimalna liczba graczy: 2, Maksymalna liczba graczy: Więcej niż 6\"
  },
  {
    \"name\": \"GRA ALKOHOLOWA TOWARZYSKA ALKOPRZEPRAWA ZESTAW 5w1\",
    \"price\": 25.59,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c3d1/5b4cfcdc4e9e9e2cc1a4193541ee/GRA-ALKOHOLOWA-TOWARZYSKA-ALKOPRZEPRAWA-ZESTAW-5w1\",
    \"desc\": \"Stan: Nowy, Wydawnictwo: Grammi, Typ: Podstawa, Minimalna liczba graczy: 2, Maksymalna liczba graczy: Więcej niż 6, Wersja językowa gry: polska\"
  },
  {
    \"name\": \"NIEPOKONANE UNIKALNE KARTY POKEMON OP ALBUM GRATIS\",
    \"price\": 40,
    \"imageURL\": \"https://a.allegroimg.com/s180/119fa4/e9ec02174d1e8cf2ccd009f4d8cc/NIEPOKONANE-UNIKALNE-KARTY-POKEMON-OP-ALBUM-GRATIS\",
    \"desc\": \"Stan: Nowy, Producent: inny (ENADA)\"
  },
  {
    \"name\": \"100 Sztuk Legendarnych kart Pokemon GX MEGA\",
    \"price\": 59.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b744/1087c3904e07bb7624d9864c56eb/100-Sztuk-Legendarnych-kart-Pokemon-GX-MEGA\",
    \"desc\": \"Stan: Nowy, Producent: inny (guinek8)\"
  },
  {
    \"name\": \"Dupa Biskupa - towarzyska gra karciana\",
    \"price\": 28.49,
    \"imageURL\": \"https://a.allegroimg.com/s180/114fa4/f7dc12704e8697ae2842a6020ae0/Dupa-Biskupa-towarzyska-gra-karciana\",
    \"desc\": \"Stan: Nowy, Typ: Podstawa, Czas rozgrywki: Do 15 minut, Wiek gracza: 18+, Minimalna liczba graczy: 2, Maksymalna liczba graczy: Więcej niż 6\"
  },
  {
    \"name\": \"Zestaw Gier 8 szt\",
    \"price\": 169.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/111c8a/9a7605a743c7b42be5ab8fe8fbb7/Zestaw-Gier-8-szt\",
    \"desc\": \"Stan: Używany, Granice wiekowe (PEGI): 7, Wersja językowa: Polska, Angielska\"
  },
  {
    \"name\": \"GRA PLANSZOWA ŻULOBIZNES Z KIELISZKAMI TOWARZYSKA\",
    \"price\": 46.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/110401/86b039c14ce0be1f9ad4b26c46ea/GRA-PLANSZOWA-ZULOBIZNES-Z-KIELISZKAMI-TOWARZYSKA\",
    \"desc\": \"Stan: Nowy, Wydawnictwo: Propaganda, Typ: Podstawa, Minimalna liczba graczy: 2, Maksymalna liczba graczy: Więcej niż 6, Wersja językowa gry: polska\"
  },
  {
    \"name\": \"Gra Gorący Ziemniak Kieszonkowy Alexander\",
    \"price\": 12.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11cb90/7c20d06f4dc59cd609f77e5a338d/Gra-Goracy-Ziemniak-Kieszonkowy-Alexander\",
    \"desc\": \"Stan: Nowy, Marka: Alexander, Typ: Podstawa, Minimalna liczba graczy: 2, Maksymalna liczba graczy: 5\"
  },
  {
    \"name\": \"JUMANJI GRA PLANSZOWA ORYGINALNA NOWE WYDANIE\",
    \"price\": 169.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/1149c7/0e93952e4d6aa9aed29853001f91/JUMANJI-GRA-PLANSZOWA-ORYGINALNA-NOWE-WYDANIE\",
    \"desc\": \"Stan: Nowy, Marka: Spin Master, Typ: Podstawa, Minimalna liczba graczy: 2, Maksymalna liczba graczy: 4\"
  },
  {
    \"name\": \"360 KART POKEMON MEGA ZESTAW SASZETKI ALBUM GRATIS\",
    \"price\": 89.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11de37/8913e5404f3e833c88cab0098b23/360-KART-POKEMON-MEGA-ZESTAW-SASZETKI-ALBUM-GRATIS\",
    \"desc\": \"Stan: Nowy, Producent: inny (KUGOkids)\"
  },
  {
    \"name\": \"KARTY POKEMON BOX ZESTAW 360szt w tym 72 Specjalne\",
    \"price\": 45.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c438/733957974359b65e61c078a3354d/KARTY-POKEMON-BOX-ZESTAW-360szt-w-tym-72-Specjalne\",
    \"desc\": \"Stan: Nowy, Producent: inny (Pokemon GO ASTRAL RADIANCE Box 360 kart)\"
  },
  {
    \"name\": \"BALAN WONDERWORLD Polska wersja PLATFORMÓWKA NS\",
    \"price\": 37.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b9d9/a076ce3f46ee819abc2068131cac/BALAN-WONDERWORLD-Polska-wersja-PLATFORMOWKA-NS\",
    \"desc\": \"Stan: Nowy, Wersja gry: pudełkowa, Rodzaj wydania: Podstawa, Granice wiekowe (PEGI): 3, Wersja językowa: Polska, Tryb gry: singleplayer, multiplayer, Minimalna liczba graczy: 1, Maksymalna liczba graczy: 2\"
  },
  {
    \"name\": \"KROKODYL ZĄBEK DUŻY GRA RODZINNA ZRĘCZNOŚCIOWA\",
    \"price\": 16.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d92f/08848242449699b266c2afd6e6e7/KROKODYL-ZABEK-DUZY-GRA-RODZINNA-ZRECZNOSCIOWA\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 3 lata +, Bohater: Inny (aligator), Minimalna liczba graczy: 1\"
  },
  {
    \"name\": \"GRA EROTYCZNA Akcesoria Zabawki Erotyczne\",
    \"price\": 42.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a1ca/9d27f08f45dcbeced882ae790030/GRA-EROTYCZNA-Akcesoria-Zabawki-Erotyczne\",
    \"desc\": \"Stan: Nowy, Wydawnictwo: Grammi, Typ: Podstawa, Minimalna liczba graczy: 2, Maksymalna liczba graczy: 2, Wersja językowa gry: polska\"
  },
  {
    \"name\": \"UNIKALNE KARTY POKEMON 3D WYSOKIE HP ALBUM GRATIS\",
    \"price\": 34.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b370/8f03d360456a9c14c7fc1af73404/UNIKALNE-KARTY-POKEMON-3D-WYSOKIE-HP-ALBUM-GRATIS\",
    \"desc\": \"Stan: Nowy, Producent: inny (3D HOLOGRAM)\"
  },
  {
    \"name\": \"CLEMENTONI MÓWIĄCE PIÓRO 500 PYTAŃ GRA EDUKACYJNA\",
    \"price\": 38.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/110617/282f4e4241b684016914c6e381af/CLEMENTONI-MOWIACE-PIORO-500-PYTAN-GRA-EDUKACYJNA\",
    \"desc\": \"Stan: Nowy, Marka: Clementoni, Typ: Podstawa, Minimalna liczba graczy: 1, Maksymalna liczba graczy: 1\"
  },
  {
    \"name\": \"GRA TOM CLANCY'S GHOST RECON BREAKPOINT - PL - PS4\",
    \"price\": 24.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/1190ec/a77b49b64194a732f31f2fd03657/GRA-TOM-CLANCY-S-GHOST-RECON-BREAKPOINT-PL-PS4\",
    \"desc\": \"Stan: Nowy, Wersja gry: pudełkowa, Granice wiekowe (PEGI): 18, Wersja językowa: Polska\"
  },
  {
    \"name\": \"Pełny Kurnik. Gra rodzinna\",
    \"price\": 25.69,
    \"imageURL\": \"https://a.allegroimg.com/s180/1186b1/a1bf07f94182ac852a31372177c3/Pelny-Kurnik-Gra-rodzinna\",
    \"desc\": \"Stan: Nowy, Marka: Kukuryku, Typ: Podstawa, Minimalna liczba graczy: 2, Maksymalna liczba graczy: 4\"
  },
  {
    \"name\": \"UNIKALNE KARTY POKEMON 3D WYSOKIE HP SPECJALNE\",
    \"price\": 20,
    \"imageURL\": \"https://a.allegroimg.com/s180/11522f/c5b89f2c496998c956a1b20217fe/UNIKALNE-KARTY-POKEMON-3D-WYSOKIE-HP-SPECJALNE\",
    \"desc\": \"Stan: Nowy, Producent: inny (ENADA)\"
  },
  {
    \"name\": \"ALBUM KLASER 432 KARTY POKEMON + GRATIS SPECJALNE\",
    \"price\": 48.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1180a9/a273efb040b2a491bb23363d99d1/ALBUM-KLASER-432-KARTY-POKEMON-GRATIS-SPECJALNE\",
    \"desc\": \"Stan: Nowy, Producent: inny (11)\"
  },
  {
    \"name\": \"100 Sztuk Legendarnych kart Pokemon GX MEGA\",
    \"price\": 59.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b744/1087c3904e07bb7624d9864c56eb/100-Sztuk-Legendarnych-kart-Pokemon-GX-MEGA\",
    \"desc\": \"Stan: Nowy, Producent: inny (guinek8)\"
  },
  {
    \"name\": \"GRA 69 EROTYCZNA DLA DWOJGA PLANSZOWA sex KARTY\",
    \"price\": 47.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b4ad/779d85044c8097b3b8d32a6ce49d/GRA-69-EROTYCZNA-DLA-DWOJGA-PLANSZOWA-sex-KARTY\",
    \"desc\": \"Stan: Nowy, Wydawnictwo: inne (Czerwona Papryczka), Typ: Podstawa + dodatek, Minimalna liczba graczy: 2, Maksymalna liczba graczy: 2, Wersja językowa gry: polska\"
  },
  {
    \"name\": \"CZARNE KARTY POKEMON ZESTAW 55SZT KOLEKCJONERSKIE\",
    \"price\": 42,
    \"imageURL\": \"https://a.allegroimg.com/s180/11bb74/ddfd74d0401d8a2509a859f1f526/CZARNE-KARTY-POKEMON-ZESTAW-55SZT-KOLEKCJONERSKIE\",
    \"desc\": \"Stan: Nowy, Producent: inny (EA)\"
  },
  {
    \"name\": \"GRA NIE MÓW TAK NIE MÓW NIE - GRA FAMILIJNA ZABAWA\",
    \"price\": 85.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/112fc2/ace558b641209d4effabb627db55/GRA-NIE-MOW-TAK-NIE-MOW-NIE-GRA-FAMILIJNA-ZABAWA\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 7 lat +, Bohater: brak, Minimalna liczba graczy: 2\"
  },
  {
    \"name\": \"ZOŁTE KARTY POKEMON ZESTAW 55SZT KOLEKCJONERSKIE\",
    \"price\": 59.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11cef6/2dc2d6f643af8a177975584b0de8/ZOLTE-KARTY-POKEMON-ZESTAW-55SZT-KOLEKCJONERSKIE\",
    \"desc\": \"Stan: Nowy, Producent: inny (ENADA)\"
  },
  {
    \"name\": \"GRA TOWARZYSKA ALKOHOLOWA POLISH BIZNES MONOPOL\",
    \"price\": 28.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a9c1/a80770b14c7cb8472072e7e7b5b2/GRA-TOWARZYSKA-ALKOHOLOWA-POLISH-BIZNES-MONOPOL\",
    \"desc\": \"Stan: Nowy, Wydawnictwo: Grammi, Typ: Podstawa, Minimalna liczba graczy: 2, Maksymalna liczba graczy: 6, Wersja językowa gry: polska\"
  },
  {
    \"name\": \"DUŻY ALBUM 3D NA 432 KART POKEMON+ 40 KARTY GRATIS\",
    \"price\": 46,
    \"imageURL\": \"https://a.allegroimg.com/s180/11fef1/54ce42db4ce2832111f218838a74/DUZY-ALBUM-3D-NA-432-KART-POKEMON-40-KARTY-GRATIS\",
    \"desc\": \"Stan: Nowy, Producent: inny (11)\"
  },
  {
    \"name\": \"Zestaw kart tarota The Rider-Waite Tarot\",
    \"price\": 40,
    \"imageURL\": \"https://a.allegroimg.com/s180/11f0c4/0c5a1fb3447d99bfbdf320f171b5/Zestaw-kart-tarota-The-Rider-Waite-Tarot\",
    \"desc\": \"Stan: Nowy, Marka: inna (Okazeo)\"
  },
  {
    \"name\": \"GRA RODZINNA BINGO LOTTO LOTERIA MASZYNA LOSUJĄCA\",
    \"price\": 28.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11735d/4e72b2fd45379684aee967639c7d/GRA-RODZINNA-BINGO-LOTTO-LOTERIA-MASZYNA-LOSUJACA\",
    \"desc\": \"Stan: Nowy, Marka: inna (GRA RODZINNA BINGO LOTTO), Typ: Podstawa + dodatek, Minimalna liczba graczy: 2, Maksymalna liczba graczy: 2\"
  },
  {
    \"name\": \"100 Sztuk Legendarnych TAG kart Pokemon EX+GX\",
    \"price\": 59.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11f3ea/a08fae31416799492485baef547c/100-Sztuk-Legendarnych-TAG-kart-Pokemon-EX-GX\",
    \"desc\": \"Stan: Nowy, Producent: inny (enada)\"
  },
  {
    \"name\": \"Kangurek Kao Gra PS4\",
    \"price\": 129,
    \"imageURL\": \"https://a.allegroimg.com/s180/11acd0/b615a3064cfeaa008748eccd0d5f/Kangurek-Kao-Gra-PS4\",
    \"desc\": \"Stan: Nowy, Wersja gry: pudełkowa, Granice wiekowe (PEGI): 7, Wersja językowa: Polska, Tryb gry: singleplayer\"
  },
  {
    \"name\": \"Gra planszowa RAVENSBURGER Minecraft\",
    \"price\": 144.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11e0d0/9ab4c6b6431d96c23ea5674587f0/Gra-planszowa-RAVENSBURGER-Minecraft\",
    \"desc\": \"Stan: Nowy, Marka: Ravensburger, Typ: Podstawa, Minimalna liczba graczy: 2, Maksymalna liczba graczy: 4\"
  },
  {
    \"name\": \"KARTY POKEMON ZESTAW KOLEKCJONERSKI 100 SZTUK\",
    \"price\": 23,
    \"imageURL\": \"https://a.allegroimg.com/s180/114f52/6d1ff315483ba5c92b96a125675b/KARTY-POKEMON-ZESTAW-KOLEKCJONERSKI-100-SZTUK\",
    \"desc\": \"Stan: Nowy, Producent: inny (Pobutka24)\"
  },
  {
    \"name\": \"SUMMER SPORTS GAMES Sport Gra Nintendo Switch NS\",
    \"price\": 24.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/1126b9/896ad229417fb3a608f6775a9118/SUMMER-SPORTS-GAMES-Sport-Gra-Nintendo-Switch-NS\",
    \"desc\": \"Stan: Nowy, Wersja gry: pudełkowa, Rodzaj wydania: Podstawa, Granice wiekowe (PEGI): 3, Wersja językowa: Angielska\"
  },
  {
    \"name\": \"ZŁOTA KARTA POKEMON GOLD 1 sztuka KOLEKCJONERSKA\",
    \"price\": 1.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11cc5f/2c2dc04e4794a962d659eb67efc4/ZLOTA-KARTA-POKEMON-GOLD-1-sztuka-KOLEKCJONERSKA\",
    \"desc\": \"Stan: Nowy, Producent: Nintendo\"
  },
  {
    \"name\": \"SREBRNE KARTY POKEMON ZESTAW 55SZT KOLEKCJONERSKIE\",
    \"price\": 40,
    \"imageURL\": \"https://a.allegroimg.com/s180/110e06/768e20fd4fe5ade8b81c30d35b7a/SREBRNE-KARTY-POKEMON-ZESTAW-55SZT-KOLEKCJONERSKIE\",
    \"desc\": \"Stan: Nowy, Producent: inny (EA)\"
  },
  {
    \"name\": \"Cielesne rozkosze gra dla par erotyczna\",
    \"price\": 39.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/114138/0925260740929419d7784b700514/Cielesne-rozkosze-gra-dla-par-erotyczna\",
    \"desc\": \"Stan: Nowy, Wydawnictwo: Grammi, Typ: Podstawa, Minimalna liczba graczy: 2, Maksymalna liczba graczy: 2\"
  },
  {
    \"name\": \"MONOPOLY PRL WYJĄTKOWA GRA PLANSZOWA + FIAT 126p\",
    \"price\": 119.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/119c9c/55db3338415e869fee5ca13e89e3/MONOPOLY-PRL-WYJATKOWA-GRA-PLANSZOWA-FIAT-126p\",
    \"desc\": \"Stan: Nowy, Marka: Winning Moves, Seria: Monopoly, Typ: Podstawa, Minimalna liczba graczy: 2, Maksymalna liczba graczy: 6\"
  },
  {
    \"name\": \"Rebel Zaginiona Wyspa Arnak\",
    \"price\": 148.75,
    \"imageURL\": \"https://a.allegroimg.com/s180/115b5c/878e1e7b4842b8bcca9403c9cfb1/Rebel-Zaginiona-Wyspa-Arnak\",
    \"desc\": \"Stan: Nowy, Marka: Rebel, Seria: Zaginiona wyspa Arnak, Typ: Podstawa, Minimalna liczba graczy: 1, Maksymalna liczba graczy: 4\"
  },
  {
    \"name\": \"UNO GRA KARCIANA ZESTAW 108 KART UNO KARTY DO GRY\",
    \"price\": 12,
    \"imageURL\": \"https://a.allegroimg.com/s180/119753/7b3113b44595b860dabd2494387f/UNO-GRA-KARCIANA-ZESTAW-108-KART-UNO-KARTY-DO-GRY\",
    \"desc\": \"Stan: Nowy, Marka: inna (Karty do Gry UNO), Bohater: brak, Seria: Uno\"
  },
  {
    \"name\": \"Call of Duty: Modern Warfare II PS5\",
    \"price\": 259.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11149a/60a872e44daf9c34992e889e5662/Call-of-Duty-Modern-Warfare-II-PS5\",
    \"desc\": \"Stan: Nowy, Wersja gry: pudełkowa, Rodzaj wydania: Podstawa, Granice wiekowe (PEGI): 18, Wersja językowa: Polska - napisy, Polska - dialog, Angielska, Tytuł: Call of Duty: Modern Warfare II, Tryb gry: singleplayer, massive online multiplayer, Tematyka: gry akcji, Minimalna liczba graczy: 1, Maksymalna liczba graczy: Więcej niż 6, Platforma: PS5\"
  },
  {
    \"name\": \"MDR, GIERKI MAŁŻEŃSKIE – towarzyska gra planszowa\",
    \"price\": 101.8,
    \"imageURL\": \"https://a.allegroimg.com/s180/119476/7eddeb524cd8bf615c98e222db27/MDR-GIERKI-MALZENSKIE-towarzyska-gra-planszowa\",
    \"desc\": \"Stan: Nowy, Typ: Podstawa, Czas rozgrywki: Do 1 godziny, Wiek gracza: 15-18 lat, 18+, Minimalna liczba graczy: 2, Maksymalna liczba graczy: Więcej niż 6\"
  },
  {
    \"name\": \"Gra Rodzinna Wyścig Pingwinów Planszówka Pingwiny\",
    \"price\": 36.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11427a/231fa02e4da9b7e3404e7f92f252/Gra-Rodzinna-Wyscig-Pingwinow-Planszowka-Pingwiny\",
    \"desc\": \"Stan: Nowy, Wiek dziecka: 3 lata +, Bohater: Inny (Pingwiny), Minimalna liczba graczy: 2\"
  },
  {
    \"name\": \"Gra Ego\",
    \"price\": 99.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d765/471821a544d19490bb72a34c363a/Gra-Ego\",
    \"desc\": \"Stan: Nowy, Marka: Trefl, Typ: Podstawa, Minimalna liczba graczy: 2, Maksymalna liczba graczy: 6\"
  },
  {
    \"name\": \"GRA W POZYCJE EROTYCZNA GRA KAMASUTRA DLA PAR PARY\",
    \"price\": 20.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11fb97/f25f691640d4af6dbc23d017d0f4/GRA-W-POZYCJE-EROTYCZNA-GRA-KAMASUTRA-DLA-PAR-PARY\",
    \"desc\": \"Stan: Nowy, Wydawnictwo: Grammi, Typ: Podstawa, Minimalna liczba graczy: 2, Maksymalna liczba graczy: 2, Wersja językowa gry: polska\"
  },
  {
    \"name\": \"60 sztuk DUŻY ZESTAW KART Karty POKEMON RÓŻNE\",
    \"price\": 24.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/1114ec/2611d4434b759e320b2219317358/60-sztuk-DUZY-ZESTAW-KART-Karty-POKEMON-ROZNE\",
    \"desc\": \"Stan: Nowy, Producent: inny (KATYPOK)\"
  },
  {
    \"name\": \"Gierki Małżeńskie ZNAMY SIĘ imprezowa gra dla par\",
    \"price\": 129.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/114cec/95abbeca49bc8e773d8b7bd63f18/Gierki-Malzenskie-ZNAMY-SIE-imprezowa-gra-dla-par\",
    \"desc\": \"Stan: Nowy, Wydawnictwo: inne (MDR), Typ: Podstawa, Minimalna liczba graczy: 2, Maksymalna liczba graczy: Więcej niż 6, Wersja językowa gry: polska\"
  },
  {
    \"name\": \"CLEMENTONI MÓWIĄCE PIÓRO ŚWIECI 1000 PYTAŃ + GRA\",
    \"price\": 61.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/119100/4b1dcd584197af1f4d2315216ad3/CLEMENTONI-MOWIACE-PIORO-SWIECI-1000-PYTAN-GRA\",
    \"desc\": \"Stan: Nowy, Marka: Clementoni, Typ: Podstawa, Minimalna liczba graczy: 1, Maksymalna liczba graczy: 1\"
  },
  {
    \"name\": \"GRA RODZINNA BINGO LOTTO LOTERIA MASZYNA LOSUJĄCA\",
    \"price\": 28.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11735d/4e72b2fd45379684aee967639c7d/GRA-RODZINNA-BINGO-LOTTO-LOTERIA-MASZYNA-LOSUJACA\",
    \"desc\": \"Stan: Nowy, Marka: inna (GRA RODZINNA BINGO LOTTO), Typ: Podstawa + dodatek, Minimalna liczba graczy: 2, Maksymalna liczba graczy: 2\"
  },
  {
    \"name\": \"Splatoon 3 Gra NINTENDO SWITCH\",
    \"price\": 254.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/115423/aa248df5416fa70586d68997105b/Splatoon-3-Gra-NINTENDO-SWITCH\",
    \"desc\": \"Stan: Nowy, Wersja gry: pudełkowa, Rodzaj wydania: Podstawa, Granice wiekowe (PEGI): 7, Wersja językowa: Angielska, Tryb gry: multiplayer, singleplayer, Minimalna liczba graczy: 3, Maksymalna liczba graczy: 3\"
  },
  {
    \"name\": \"Klasyczne SZACHY drewniane gra w PUDEŁKU etui\",
    \"price\": 29.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/06e040/2025ee864b6cb6734084bb837559/Klasyczne-SZACHY-drewniane-gra-w-PUDELKU-etui\",
    \"desc\": \"Stan: Nowy, Producent: Iso Trade\"
  },
  {
    \"name\": \"GRA WYŚCIG PINGWINÓW PLANSZOWA RODZINNA CHIŃCZYK\",
    \"price\": 29.89,
    \"imageURL\": \"https://a.allegroimg.com/s180/117bc8/6b325dac4a9b929a8f71365e1863/GRA-WYSCIG-PINGWINOW-PLANSZOWA-RODZINNA-CHINCZYK\",
    \"desc\": \"Stan: Nowy, Marka: inna (PrzydaSie.pl), Typ: Podstawa, Minimalna liczba graczy: 2, Maksymalna liczba graczy: 4\"
  },
  {
    \"name\": \"Gra Erotyczna Wstępna Planszowa Dla Par Dwojga Sex\",
    \"price\": 41.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11db03/e79db421422baad20087fb34efb5/Gra-Erotyczna-Wstepna-Planszowa-Dla-Par-Dwojga-Sex\",
    \"desc\": \"Stan: Nowy, Wydawnictwo: Grammi, Typ: Podstawa, Minimalna liczba graczy: 2, Maksymalna liczba graczy: 2, Wersja językowa gry: polska\"
  },
  {
    \"name\": \"TOM CLANCY'S THE DIVISION 2 Polska wersja - PS4\",
    \"price\": 13.5,
    \"imageURL\": \"https://a.allegroimg.com/s180/114ad8/14c733d644998d6534c9e409ab4c/TOM-CLANCY-S-THE-DIVISION-2-Polska-wersja-PS4\",
    \"desc\": \"Stan: Nowy, Wersja gry: pudełkowa, Granice wiekowe (PEGI): 18, Wersja językowa: Polska, Tryb gry: singleplayer, multiplayer, Minimalna liczba graczy: 1, Maksymalna liczba graczy: 2\"
  },
  {
    \"name\": \"GRA IMPREZOWA DLA DOROSŁYCH WYZWANIE ALBO CHLANIE\",
    \"price\": 25.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1133da/9098e4c74387a0a3711af05f66c1/GRA-IMPREZOWA-DLA-DOROSLYCH-WYZWANIE-ALBO-CHLANIE\",
    \"desc\": \"Stan: Nowy, Typ: Podstawa, Czas rozgrywki: Do 2 godzin, Wiek gracza: 18+, Minimalna liczba graczy: 2, Maksymalna liczba graczy: Więcej niż 6\"
  },
  {
    \"name\": \"Gra Asterix & Obelix XXL: Romastered PS4 NOWA\",
    \"price\": 47.5,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b44e/23c3ea39478c91308039bbc7e787/Gra-Asterix-Obelix-XXL-Romastered-PS4-NOWA\",
    \"desc\": \"Stan: Nowy, Wersja gry: pudełkowa, Granice wiekowe (PEGI): 7, Wersja językowa: Angielska, Minimalna liczba graczy: 1, Maksymalna liczba graczy: 1\"
  },
  {
    \"name\": \"God of War Ragnarök Gra PS4 PL\",
    \"price\": 299.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11950f/e8aa06b34139a7a5a301494800a6/God-of-War-Ragnaroek-Gra-PS4-PL\",
    \"desc\": \"Stan: Nowy, Wersja gry: pudełkowa, Granice wiekowe (PEGI): 18, Wersja językowa: Polska, Angielska, Tryb gry: singleplayer, Minimalna liczba graczy: 1, Maksymalna liczba graczy: 1\"
  },
  {
    \"name\": \"GRA PS4 UFC 4\",
    \"price\": 109.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11cc88/df60821f4b39b4b8645981b4a282/GRA-PS4-UFC-4\",
    \"desc\": \"Stan: Nowy, Wersja gry: pudełkowa, Granice wiekowe (PEGI): 16, Wersja językowa: Angielska\"
  },
  {
    \"name\": \"KARTY POKEMON ZŁOTE GOLD 55szt LEGANDARNE\",
    \"price\": 41.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1181e8/0b696c824dba97ef38259b153d68/KARTY-POKEMON-ZLOTE-GOLD-55szt-LEGANDARNE\",
    \"desc\": \"Stan: Nowy, Producent: inny (Poke)\"
  },
  {
    \"name\": \"SONIC FORCES POLSKA WERSJA -NOWA- NINTENDO SWITCH\",
    \"price\": 109.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/112826/76d7618041a09d01801c50573340/SONIC-FORCES-POLSKA-WERSJA-NOWA-NINTENDO-SWITCH\",
    \"desc\": \"Stan: Nowy, Wersja gry: pudełkowa, Rodzaj wydania: Podstawa, Granice wiekowe (PEGI): 7, Wersja językowa: Polska\"
  },
  {
    \"name\": \"ZOŁTE KARTY POKEMON ZESTAW 55SZT KOLEKCJONERSKIE\",
    \"price\": 59.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11cef6/2dc2d6f643af8a177975584b0de8/ZOLTE-KARTY-POKEMON-ZESTAW-55SZT-KOLEKCJONERSKIE\",
    \"desc\": \"Stan: Nowy, Producent: inny (ENADA)\"
  },
  {
    \"name\": \"NOWA GRA PS4 SONIC FORCES Polska wersja PS4 / PS5\",
    \"price\": 74.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/110d35/98f4617f49e69aba2f8c2f176c91/NOWA-GRA-PS4-SONIC-FORCES-Polska-wersja-PS4-PS5\",
    \"desc\": \"Stan: Nowy, Wersja gry: pudełkowa, Granice wiekowe (PEGI): 7, Wersja językowa: Polska, Tryb gry: singleplayer, Minimalna liczba graczy: 1, Maksymalna liczba graczy: 1\"
  },
  {
    \"name\": \"2 talie KART do gry w SUPER CENIE 2×54 sztuki\",
    \"price\": 6.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b8bc/5762f1e04f69a86802ebc23db67b/2-talie-KART-do-gry-w-SUPER-CENIE-254-sztuki\",
    \"desc\": \"Marka: Promatek\"
  },
  {
    \"name\": \"Gra w Statki Bitwa Morska Logiczna Kieszonkowa\",
    \"price\": 29.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/111747/e07a57024bfaad69939505ff1c24/Gra-w-Statki-Bitwa-Morska-Logiczna-Kieszonkowa\",
    \"desc\": \"Stan: Nowy, Marka: Kruzzel, Typ: Podstawa, Minimalna liczba graczy: 2, Maksymalna liczba graczy: 2\"
  },
  {
    \"name\": \"gra zręcznościowa dla dzieci KLOCKI wieża z drewna\",
    \"price\": 21,
    \"imageURL\": \"https://a.allegroimg.com/s180/116328/36f024104221bca85e32c5f437b4/gra-zrecznosciowa-dla-dzieci-KLOCKI-wieza-z-drewna\",
    \"desc\": \"Stan: Nowy, Marka: Ramiz, Typ: Podstawa + dodatek, Minimalna liczba graczy: 2, Maksymalna liczba graczy: Więcej niż 6\"
  },
  {
    \"name\": \"GRA ALKOHOLOWA TOWARZYSKA ALKOPRZEPRAWA ZESTAW 5w1\",
    \"price\": 25.59,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c3d1/5b4cfcdc4e9e9e2cc1a4193541ee/GRA-ALKOHOLOWA-TOWARZYSKA-ALKOPRZEPRAWA-ZESTAW-5w1\",
    \"desc\": \"Stan: Nowy, Wydawnictwo: Grammi, Typ: Podstawa, Minimalna liczba graczy: 2, Maksymalna liczba graczy: Więcej niż 6, Wersja językowa gry: polska\"
  },
  {
    \"name\": \"UNIKALNE KARTY POKEMON 3D WYSOKIE HP SPECJALNE\",
    \"price\": 20,
    \"imageURL\": \"https://a.allegroimg.com/s180/11522f/c5b89f2c496998c956a1b20217fe/UNIKALNE-KARTY-POKEMON-3D-WYSOKIE-HP-SPECJALNE\",
    \"desc\": \"Stan: Nowy, Producent: inny (ENADA)\"
  }
]`);

const c = gifts as BaseGift[];

export default c;
