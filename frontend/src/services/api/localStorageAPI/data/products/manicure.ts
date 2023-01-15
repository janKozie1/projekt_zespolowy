import type { BaseGift } from '../gifts';

const gifts: unknown = JSON.parse(`[
  {
    \"name\": \"Pochłaniacz Pyłu Do Paznokci 40W 3 Wiatraki +Worki\",
    \"price\": 94.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11079e/45ec5f5649f89ce7d82cb9c91173/Pochlaniacz-Pylu-Do-Paznokci-40W-3-Wiatraki-Worki\",
    \"desc\": \"Stan: Nowy, Marka: LOGIT, Moc: 40 W\"
  },
  {
    \"name\": \"Pochłaniacz Pyłu Do Paznokci Kasetowy 80W DC-900\",
    \"price\": 164.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11de32/d0cdd5e44935974ebe68164b5478/Pochlaniacz-Pylu-Do-Paznokci-Kasetowy-80W-DC-900\",
    \"desc\": \"Stan: Nowy, Marka: Profico, Moc: 80 W\"
  },
  {
    \"name\": \"CĄŻKI DO WRASTAJĄCYCH PAZNOKCI OBCINACZ CĘGI GOLD\",
    \"price\": 40,
    \"imageURL\": \"https://a.allegroimg.com/s180/111e4e/eb3ba92b43feb8e7be1a2e2f7611/CAZKI-DO-WRASTAJACYCH-PAZNOKCI-OBCINACZ-CEGI-GOLD\",
    \"desc\": \"Stan: Nowy, Marka: inna marka (GOLD DUST), Rodzaj: cążki, Długość ostrzy: 20 mm\"
  },
  {
    \"name\": \"FLEXY GEL TNS POLYGEL AKRYLOŻEL ACRYLGEL15ml\",
    \"price\": 9.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11f422/6d34c00f48d48602b6f3399fe828/FLEXY-GEL-TNS-POLYGEL-AKRYLOZEL-ACRYLGEL15ml\",
    \"desc\": \"Stan: Nowy, Marka: TNS, Rodzaj: podkładowy, budujący, Kolor dominujący: inny\"
  },
  {
    \"name\": \"FREZARKA DO PAZNOKCI SUPER MOCNA 65W PROFESJONALNA\",
    \"price\": 129,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ade5/be899caa40fab99d037e8baba346/FREZARKA-DO-PAZNOKCI-SUPER-MOCNA-65W-PROFESJONALNA\",
    \"desc\": \"Stan: Nowy, Marka: Clavier, Kolor dominujący: różowe złoto, Zasilanie: sieciowe, Kierunek obrotu: obustronny, Moment obrotowy: 30000 Nm, Moc: 65 W\"
  },
  {
    \"name\": \"SUNONE Zestaw do Hybryd S06 Lampa Frezarka Gratisy\",
    \"price\": 199,
    \"imageURL\": \"https://a.allegroimg.com/s180/1114e1/e6abaad94fe787d8babb81c3e70d/SUNONE-Zestaw-do-Hybryd-S06-Lampa-Frezarka-Gratisy\",
    \"desc\": \"Stan: Nowy, Marka: SUNONE\"
  },
  {
    \"name\": \"FREZARKA PAZNOKCI MANICURE PEDICURE + FREZY MOCNA\",
    \"price\": 87.89,
    \"imageURL\": \"https://a.allegroimg.com/s180/1186da/103fa35d4e07ac8a7c6ee1daa6ef/FREZARKA-PAZNOKCI-MANICURE-PEDICURE-FREZY-MOCNA\",
    \"desc\": \"Stan: Nowy, Marka: Proficare, Kolor dominujący: biały, Zasilanie: sieciowe, Kierunek obrotu: lewo, prawo, obustronny, Moment obrotowy: 2000 Nm, Moc: 0 W\"
  },
  {
    \"name\": \"FREZARKA DO PANOKCI MANICURE PEDICURE MOCNA 65W\",
    \"price\": 119,
    \"imageURL\": \"https://a.allegroimg.com/s180/11e50a/30ef49e94fc5a3b6943d937c90a3/FREZARKA-DO-PANOKCI-MANICURE-PEDICURE-MOCNA-65W\",
    \"desc\": \"Stan: Nowy, Marka: Clavier, Kolor dominujący: czarny, Zasilanie: sieciowe, Kierunek obrotu: lewo, prawo, Moment obrotowy: 10 Nm, Moc: 65 W\"
  },
  {
    \"name\": \"FREZARKA do Manicure 65W MOCNA + FREZ CERAMICZNY\",
    \"price\": 125.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/115511/511f61af4410bd4d1e9dd8801fa5/FREZARKA-do-Manicure-65W-MOCNA-FREZ-CERAMICZNY\",
    \"desc\": \"Stan: Nowy, Marka: Nail Drill, Kolor dominujący: złoty, Zasilanie: sieciowe, Kierunek obrotu: obustronny, Moment obrotowy: 4.8 Nm\"
  },
  {
    \"name\": \"Lampa do Paznokci żeli hybryd UV LED 120W MOCNA\",
    \"price\": 59.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/112486/ea91b0eb4eb0ac2c7c494e15159d/Lampa-do-Paznokci-zeli-hybryd-UV-LED-120W-MOCNA\",
    \"desc\": \"Stan: Nowy, Marka: Clavier, Kolor dominujący: biały, Rodzaj: LED+UV, Zasilanie: sieciowe, Moc: 120 W\"
  },
  {
    \"name\": \"Lampa Do Paznokci Alle X5 Plus UV/LED 120W Biała\",
    \"price\": 64.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/117455/41464e024d31b04232dbe650d93a/Lampa-Do-Paznokci-Alle-X5-Plus-UV-LED-120W-Biala\",
    \"desc\": \"Stan: Nowy, Marka: Allepaznokcie, Kolor dominujący: biały, Rodzaj: LED+UV, Zasilanie: sieciowe, Moc: 120 W\"
  },
  {
    \"name\": \"LAKIERY HYBRYDOWE DO MANICURE TNS 120 KOLORÓW 8ml\",
    \"price\": 6.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/03120f/4d7814144fda92a3b7b4128dad5a/LAKIERY-HYBRYDOWE-DO-MANICURE-TNS-120-KOLOROW-8ml\",
    \"desc\": \"Stan: Nowy, Marka: TNS, Kolor: Biel, Czerń, Odcienie brązu i beżu, Odcienie czerwieni i różu, Odcienie fioletu, Odcienie niebieskiego, Odcienie pomarańczowego, Odcienie szarości i srebra, Odcienie zieleni, Odcienie żółtego i złota, Inny kolor, Rodzaj: lakier kolorowy\"
  },
  {
    \"name\": \"FREZARKA DO PAZNOKCI SUPER MOCNA 65W PROFESJONALNA\",
    \"price\": 239,
    \"imageURL\": \"https://a.allegroimg.com/s180/114a99/d04eb9814ceea9208d792a64b0f4/FREZARKA-DO-PAZNOKCI-SUPER-MOCNA-65W-PROFESJONALNA\",
    \"desc\": \"Stan: Nowy, Marka: Clavier, Kolor dominujący: biały, Zasilanie: sieciowe, Kierunek obrotu: obustronny, Moment obrotowy: 35000 Nm, Moc: 65 W\"
  },
  {
    \"name\": \"Lampa do paznokci UV LED 80W do hybryd SUN X5 MAX\",
    \"price\": 59.98,
    \"imageURL\": \"https://a.allegroimg.com/s180/11fc51/c6e587ca47f7a71da6573c6e1009/Lampa-do-paznokci-UV-LED-80W-do-hybryd-SUN-X5-MAX\",
    \"desc\": \"Stan: Nowy, Marka: ManyBeauty, Kolor dominujący: biały, Rodzaj: LED+UV, Zasilanie: sieciowe, Moc: 80 W\"
  },
  {
    \"name\": \"Zestaw do hybryd lampa LED UV 48W +frezarka+gratis\",
    \"price\": 129.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/114f70/960aacf1414abb80fc72d15f659d/Zestaw-do-hybryd-lampa-LED-UV-48W-frezarka-gratis\",
    \"desc\": \"Stan: Nowy, Marka: inna marka (Lacco)\"
  },
  {
    \"name\": \"CLARESA LAKIER HYBRYDOWY MIX KOLORÓW DO WYBORU 5ML\",
    \"price\": 11.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/117175/d7539acf43e69448d4055dbe2924/CLARESA-LAKIER-HYBRYDOWY-MIX-KOLOROW-DO-WYBORU-5ML\",
    \"desc\": \"Stan: Nowy, Marka: Claresa, Kolor: Biel, Czerń, Odcienie brązu i beżu, Odcienie czerwieni i różu, Odcienie fioletu, Odcienie niebieskiego, Odcienie pomarańczowego, Odcienie szarości i srebra, Odcienie zieleni, Odcienie żółtego i złota, Rodzaj: lakier kolorowy, Właściwości: do zdobień\"
  },
  {
    \"name\": \"FREZARKA DO PAZNOKCI DO MANICURE + FREZY\",
    \"price\": 24,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a51b/11af800c4182aa837f57f1af448c/FREZARKA-DO-PAZNOKCI-DO-MANICURE-FREZY\",
    \"desc\": \"Stan: Nowy, Marka: SUNONE, Kolor dominujący: biały, Zasilanie: sieciowe, Kierunek obrotu: prawo, Moment obrotowy: 0 Nm, Moc: 6 W\"
  },
  {
    \"name\": \"Zestaw do hybryd lampa LED UV 48W + gratisy\",
    \"price\": 69,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d45a/7b40bde14792a85c5b36adde0cca/Zestaw-do-hybryd-lampa-LED-UV-48W-gratisy\",
    \"desc\": \"Stan: Nowy, Marka: SUNONE\"
  },
  {
    \"name\": \"SUNONE KUFEREK KOSMETYCZNY XL NA LAMPĘ LAKIERY\",
    \"price\": 188,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d66e/dcc4879b4f52b0f6d982a924a507/SUNONE-KUFEREK-KOSMETYCZNY-XL-NA-LAMPE-LAKIERY\",
    \"desc\": \"Stan: Nowy, Marka: SUNONE, Kolor dominujący: czarny, Wysokość produktu: 42 cm, Szerokość produktu: 32 cm, Głębokość produktu: 25 cm\"
  },
  {
    \"name\": \"Lampa do paznokci MDS802 DUAL UV LED 88W usb\",
    \"price\": 44.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/113ae4/f0c406dc4932a4fbcb47c213d75a/Lampa-do-paznokci-MDS802-DUAL-UV-LED-88W-usb\",
    \"desc\": \"Stan: Nowy, Marka: Allepaznokcie, Kolor dominujący: biały, Rodzaj: LED+UV, Zasilanie: sieciowe, Moc: 88 W\"
  },
  {
    \"name\": \"NEONAIL LAKIER HYBRYDOWY MIX KOLORÓW DO WYBORU\",
    \"price\": 26.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/112dd9/11aaa41c4182b4e55a69804af844/NEONAIL-LAKIER-HYBRYDOWY-MIX-KOLOROW-DO-WYBORU\",
    \"desc\": \"Stan: Nowy, Marka: NEONAIL, Kolor: Biel, Czerń, Odcienie brązu i beżu, Odcienie czerwieni i różu, Odcienie fioletu, Odcienie niebieskiego, Odcienie pomarańczowego, Odcienie szarości i srebra, Odcienie zieleni, Odcienie żółtego i złota, Rodzaj: lakier kolorowy, Właściwości: do zdobień\"
  },
  {
    \"name\": \"FREZARKA DO PAZNOKCI MANICURE PEDICURE DM992\",
    \"price\": 48,
    \"imageURL\": \"https://a.allegroimg.com/s180/11fcd9/902eaa074f65af7e77e47a777f8a/FREZARKA-DO-PAZNOKCI-MANICURE-PEDICURE-DM992\",
    \"desc\": \"Stan: Nowy, Marka: inna marka, Kolor dominujący: biały, Zasilanie: sieciowe, Kierunek obrotu: obustronny, Moment obrotowy: 1.5 Nm, Moc: 12 W\"
  },
  {
    \"name\": \"Claresa Lakier Hybrydowy Kolekcje Perfect Nude Mix\",
    \"price\": 11.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c44f/4e01de1d450f911e37b61f3151ae/Claresa-Lakier-Hybrydowy-Kolekcje-Perfect-Nude-Mix\",
    \"desc\": \"Stan: Nowy, Marka: Claresa, Kolor: Inny kolor, Rodzaj: lakier kolorowy, Właściwości: do zdobień\"
  },
  {
    \"name\": \"FREZARKA DO MANICURE 80W MOCNA + FREZ CERAMICZNY\",
    \"price\": 117.89,
    \"imageURL\": \"https://a.allegroimg.com/s180/11450a/3654019e44dbb9a010b594c18391/FREZARKA-DO-MANICURE-80W-MOCNA-FREZ-CERAMICZNY\",
    \"desc\": \"Stan: Nowy, Marka: Gordon, Kolor dominujący: różowe złoto, Zasilanie: sieciowe, Kierunek obrotu: obustronny, Moment obrotowy: 4.5 Nm, Moc: 80 W\"
  },
  {
    \"name\": \"Szablon SZPIC formy przedłużanie paznokci 100szt.\",
    \"price\": 7.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11fe06/186195a54934a523a6356807dd7d/Szablon-SZPIC-formy-przedluzanie-paznokci-100szt\",
    \"desc\": \"Stan: Nowy, Marka: inna marka, Liczba sztuk: 100 szt.\"
  },
  {
    \"name\": \"SUNONE ZESTAW DO HYBRYD Lampa Lakiery Gratisy F02\",
    \"price\": 59.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b163/1cd8aa8440e4b442493ccafbb069/SUNONE-ZESTAW-DO-HYBRYD-Lampa-Lakiery-Gratisy-F02\",
    \"desc\": \"Stan: Nowy, Marka: SUNONE\"
  },
  {
    \"name\": \"SEMILAC LAKIER HYBRYDOWY 404 BLACK BEANS MUFFIN\",
    \"price\": 25.39,
    \"imageURL\": \"https://a.allegroimg.com/s180/118362/05653d6a40028b08f69ea009dc2a/SEMILAC-LAKIER-HYBRYDOWY-404-BLACK-BEANS-MUFFIN\",
    \"desc\": \"Stan: Nowy, Marka: Semilac, Kolor: Odcienie czerwieni i różu, Rodzaj: lakier kolorowy\"
  },
  {
    \"name\": \"ZESTAW EASY COLOR LAKIER HYBRYDOWY 10szt +1 GRATIS\",
    \"price\": 74.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ea3b/c02df1af4e6188d684180bfc11e5/ZESTAW-EASY-COLOR-LAKIER-HYBRYDOWY-10szt-1-GRATIS\",
    \"desc\": \"Stan: Nowy, Marka: Easy Color, Kolor: Biel, Czerń, Odcienie brązu i beżu, Odcienie czerwieni i różu, Odcienie fioletu, Odcienie niebieskiego, Odcienie pomarańczowego, Odcienie szarości i srebra, Odcienie zieleni, Odcienie żółtego i złota, Inny kolor, Rodzaj: lakier kolorowy\"
  },
  {
    \"name\": \"FREZARKA Manicure 80W MOCNA zestaw FREZ CERAMICZNY\",
    \"price\": 136.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1189b0/7026536344a2bcd4ae434e0cb5c7/FREZARKA-Manicure-80W-MOCNA-zestaw-FREZ-CERAMICZNY\",
    \"desc\": \"Stan: Nowy, Marka: inna marka (ES), Kolor dominujący: róże i fiolety, Zasilanie: sieciowe, Kierunek obrotu: lewo, prawo, obustronny, Moment obrotowy: 30000 Nm, Moc: 80 W\"
  },
  {
    \"name\": \"FREZARKA PAZNOKCI MANICURE PEDICURE FREZY NASADKI\",
    \"price\": 46,
    \"imageURL\": \"https://a.allegroimg.com/s180/113712/dadd338349b6ab873106213ef70e/FREZARKA-PAZNOKCI-MANICURE-PEDICURE-FREZY-NASADKI\",
    \"desc\": \"Stan: Nowy, Marka: Proficare, Kolor dominujący: biały, Zasilanie: bateryjne, Kierunek obrotu: lewo, prawo, Moment obrotowy: 0 Nm, Moc: 0 W\"
  },
  {
    \"name\": \"ZESTAW ŻELOWY DO MANICURE 7X ŻEL AKCESORIA OZDOBY\",
    \"price\": 59.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/110913/f1f27a8f40abbad360e708a6a018/ZESTAW-ZELOWY-DO-MANICURE-7X-ZEL-AKCESORIA-OZDOBY\",
    \"desc\": \"Stan: Nowy, Marka: LaLill, Zawartość zestawu: aceton, blok polerski, cleaner, ozdoby, patyczki, pędzelek do żelu, pilnik do paznokci, primer, szablony do przedłużania paznokci, waciki bezpyłowe, oliwka do skórek, żel\"
  },
  {
    \"name\": \"ZESTAW DO HYBRYD Lampa LED UV 80W + akcesoria\",
    \"price\": 199.98,
    \"imageURL\": \"https://a.allegroimg.com/s180/1186ed/b60a3aa6454798466b863b648225/ZESTAW-DO-HYBRYD-Lampa-LED-UV-80W-akcesoria\",
    \"desc\": \"Stan: Nowy, Marka: Red-Ice\"
  },
  {
    \"name\": \"LoveLaQ Lakier hybrydowy 6 ml 98 Kolorów !\",
    \"price\": 3.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/112581/e619c83b4bb9bc2296a5b5ee63a7/LoveLaQ-Lakier-hybrydowy-6-ml-98-Kolorow\",
    \"desc\": \"Stan: Nowy, Marka: LaLill, Kolor: Bezbarwny, Biel, Czerń, Odcienie brązu i beżu, Odcienie czerwieni i różu, Odcienie fioletu, Odcienie niebieskiego, Odcienie pomarańczowego, Odcienie szarości i srebra, Odcienie zieleni, Odcienie żółtego i złota, Zestawy, Rodzaj: lakier kolorowy\"
  },
  {
    \"name\": \"PROFESJONALNA Frezarka do manicure SUPER MOCNA\",
    \"price\": 119,
    \"imageURL\": \"https://a.allegroimg.com/s180/11bd8b/5a2dce324da08376a5ab716e3c47/PROFESJONALNA-Frezarka-do-manicure-SUPER-MOCNA\",
    \"desc\": \"Stan: Nowy, Marka: Clavier, Kolor dominujący: biały, Zasilanie: sieciowe, Kierunek obrotu: lewo, prawo, Moment obrotowy: 35000 Nm, Moc: 65 W\"
  },
  {
    \"name\": \"Mocny Pochłaniacz Pyłu Manicure 3 Wiatraki 2 Worki\",
    \"price\": 89.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/118daf/04f181d64c6f8e7c901dd0200e15/Mocny-Pochlaniacz-Pylu-Manicure-3-Wiatraki-2-Worki\",
    \"desc\": \"Stan: Nowy, Marka: BeautyLushh, Moc: 40 W\"
  },
  {
    \"name\": \"SUNONE KUFEREK KOSMETYCZNY XL NA LAMPĘ LAKIERY\",
    \"price\": 188,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d66e/dcc4879b4f52b0f6d982a924a507/SUNONE-KUFEREK-KOSMETYCZNY-XL-NA-LAMPE-LAKIERY\",
    \"desc\": \"Stan: Nowy, Marka: SUNONE, Kolor dominujący: czarny, Wysokość produktu: 42 cm, Szerokość produktu: 32 cm, Głębokość produktu: 25 cm\"
  },
  {
    \"name\": \"PĘDZELKI DO ZDOBIEŃ PAZNOKCI ZESTAW 15szt\",
    \"price\": 7.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11affa/1983809543b98e1b5e8a3740995c/PEDZELKI-DO-ZDOBIEN-PAZNOKCI-ZESTAW-15szt\",
    \"desc\": \"Stan: Nowy, Marka: Hairworthy, Rodzaj: zestaw pędzelków, Włosie: syntetyczne, Przeznaczenie: do akrylu, do ombre, do usuwania pyłu, do zdobień, do żelu\"
  },
  {
    \"name\": \"CLAVIER LAKIER HYBRYDOWY UV 7,5 ML HYBRYDA KOLORY\",
    \"price\": 6.77,
    \"imageURL\": \"https://a.allegroimg.com/s180/11bfbc/112e48034773b5b3a09e1a4e5d81/CLAVIER-LAKIER-HYBRYDOWY-UV-7-5-ML-HYBRYDA-KOLORY\",
    \"desc\": \"Stan: Nowy, Marka: Clavier, Kolor: Odcienie czerwieni i różu, Rodzaj: lakier kolorowy\"
  },
  {
    \"name\": \"AG626A POCHŁANIACZ PYŁU MANICURE 3 WIATRAKI WORKI\",
    \"price\": 75.69,
    \"imageURL\": \"https://a.allegroimg.com/s180/116bca/3b320fcf4f6cbc013e911bc4fc64/AG626A-POCHLANIACZ-PYLU-MANICURE-3-WIATRAKI-WORKI\",
    \"desc\": \"Stan: Nowy, Marka: Aptel, Moc: 40 W\"
  },
  {
    \"name\": \"AkrylGel FLEXY GEL akrylożel zestaw duży XXL\",
    \"price\": 34.98,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b153/9ed76ab249eeaa47eb62639cf4a3/AkrylGel-FLEXY-GEL-akrylozel-zestaw-duzy-XXL\",
    \"desc\": \"Stan: Nowy, Marka: Poly System, Zawartość zestawu: blok polerski, pędzelek do żelu, pilnik do paznokci, szablony do przedłużania paznokci, żel\"
  },
  {
    \"name\": \"FREZARKA DO PAZNOKCI MANICURE PEDICURE MOCNA FREZY\",
    \"price\": 169.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11f6bd/2fe5779f4422839ae7bc3b8e8e33/FREZARKA-DO-PAZNOKCI-MANICURE-PEDICURE-MOCNA-FREZY\",
    \"desc\": \"Stan: Nowy, Marka: inna marka (MINEXO), Kolor dominujący: biały, Zasilanie: sieciowe, Kierunek obrotu: obustronny, Moment obrotowy: 5 Nm\"
  },
  {
    \"name\": \"ACRYLGEL POLY HYBRYDA GEL AKRYLOŻEL 30ml KOLORY\",
    \"price\": 15.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11771f/4d95af7342b8a6169c2bee5e23de/ACRYLGEL-POLY-HYBRYDA-GEL-AKRYLOZEL-30ml-KOLORY\",
    \"desc\": \"Stan: Nowy, Marka: Poly System, Rodzaj: podkładowy, budujący, Kolor dominujący: róże i fiolety\"
  },
  {
    \"name\": \"SUNONE SUN1 Lampa UV LED 24/48W Hybrydy Żele\",
    \"price\": 62,
    \"imageURL\": \"https://a.allegroimg.com/s180/1150c9/0cd16952414097d5df94e184a72b/SUNONE-SUN1-Lampa-UV-LED-24-48W-Hybrydy-Zele\",
    \"desc\": \"Stan: Nowy, Marka: SUNONE, Kolor dominujący: biały, Rodzaj: LED+UV, Zasilanie: sieciowe, Moc: 48 W\"
  },
  {
    \"name\": \"Pochłaniacz Pyłu Do Paznokci Kasetowy 80W DC-900\",
    \"price\": 164.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11de32/d0cdd5e44935974ebe68164b5478/Pochlaniacz-Pylu-Do-Paznokci-Kasetowy-80W-DC-900\",
    \"desc\": \"Stan: Nowy, Marka: Profico, Moc: 80 W\"
  },
  {
    \"name\": \"CLARESA LAKIER HYBRYDOWY MIX KOLORÓW DO WYBORU 5ML\",
    \"price\": 11.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1102d6/ba17431f4e04b8c7ae2498772e63/CLARESA-LAKIER-HYBRYDOWY-MIX-KOLOROW-DO-WYBORU-5ML\",
    \"desc\": \"Stan: Nowy, Marka: Claresa, Kolor: Biel, Czerń, Odcienie brązu i beżu, Odcienie czerwieni i różu, Odcienie fioletu, Odcienie niebieskiego, Odcienie pomarańczowego, Odcienie szarości i srebra, Odcienie zieleni, Odcienie żółtego i złota, Rodzaj: lakier kolorowy\"
  },
  {
    \"name\": \"FREZARKA manicure pedicure hybrydy żele mocna 65W\",
    \"price\": 119,
    \"imageURL\": \"https://a.allegroimg.com/s180/115dca/48b04dbd41589f8e7422d4453254/FREZARKA-manicure-pedicure-hybrydy-zele-mocna-65W\",
    \"desc\": \"Stan: Nowy, Marka: Clavier, Kolor dominujący: różowe złoto, Zasilanie: sieciowe, Kierunek obrotu: obustronny, Moment obrotowy: 5.71 Nm, Moc: 65 W\"
  },
  {
    \"name\": \"PREZENT KUFEREK WALIZKA DO MANICURE HYBRYDOWEGO\",
    \"price\": 59.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/111cf8/ccc38fe64b438cf49435d06c5a01/PREZENT-KUFEREK-WALIZKA-DO-MANICURE-HYBRYDOWEGO\",
    \"desc\": \"Stan: Nowy, Marka: Silcare, Kolor: Zestawy, Inny kolor, Rodzaj: 3w1/jednofazowy\"
  },
  {
    \"name\": \"MOCNA LAMPA do paznokci UV LED 220W hybrydy żele\",
    \"price\": 69,
    \"imageURL\": \"https://a.allegroimg.com/s180/119692/0840308b4bdb8d7707dee36e6edb/MOCNA-LAMPA-do-paznokci-UV-LED-220W-hybrydy-zele\",
    \"desc\": \"Stan: Nowy, Marka: Clavier, Kolor dominujący: biały, Rodzaj: LED+UV, Zasilanie: sieciowe, Moc: 220 W\"
  },
  {
    \"name\": \"CLARESA LAKIER HYBRYDOWY WINTER WONDERLAND MIX\",
    \"price\": 11.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/115a3b/9884fc1c4d8ebfc27a71b5884955/CLARESA-LAKIER-HYBRYDOWY-WINTER-WONDERLAND-MIX\",
    \"desc\": \"Stan: Nowy, Marka: Claresa, Kolor: Odcienie brązu i beżu, Odcienie fioletu, Odcienie szarości i srebra, Odcienie żółtego i złota, Rodzaj: lakier kolorowy, Właściwości: do zdobień\"
  },
  {
    \"name\": \"FREZARKA DO PANOKCI MANICURE PEDICURE MOCNA 65W\",
    \"price\": 177,
    \"imageURL\": \"https://a.allegroimg.com/s180/118dda/c582b8754254b83191799d11635e/FREZARKA-DO-PANOKCI-MANICURE-PEDICURE-MOCNA-65W\",
    \"desc\": \"Stan: Nowy, Marka: Clavier, Kolor dominujący: róże i fiolety, Zasilanie: sieciowe, Kierunek obrotu: obustronny, Moment obrotowy: 35000 Nm, Moc: 65 W\"
  },
  {
    \"name\": \"Profesjonalny Sterylizator Narzędzi Kulkowy Kulki\",
    \"price\": 44.99,
    \"imageURL\": \"https://f.allegroimg.com/s180/03a50d/356c07d84cb1b881091e450ec55f/Profesjonalny-Sterylizator-Narzedzi-Kulkowy-Kulki\",
    \"desc\": \"Stan: Nowy, Marka: inna marka (callissimo), Moc: 100 W\"
  },
  {
    \"name\": \"Lampa do paznokci SUN 1 UV LED 48w żele hybrydy\",
    \"price\": 40,
    \"imageURL\": \"https://a.allegroimg.com/s180/11df3b/59d48e974755a6d6cf16b74fa37e/Lampa-do-paznokci-SUN-1-UV-LED-48w-zele-hybrydy\",
    \"desc\": \"Stan: Nowy, Marka: Elektromet, Kolor dominujący: biały, Rodzaj: LED+UV, Zasilanie: sieciowe, Moc: 48 W\"
  },
  {
    \"name\": \"KUFEREK KOSMETYCZNY DUŻY NA LAMPĘ LAKIERY FREZARKĘ\",
    \"price\": 149.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/116e20/7738af76430dbbeb97a749731c16/KUFEREK-KOSMETYCZNY-DUZY-NA-LAMPE-LAKIERY-FREZARKE\",
    \"desc\": \"Stan: Nowy, Marka: inna marka (Multico), Kolor dominujący: czarny, Wysokość produktu: 25 cm, Szerokość produktu: 32 cm, Głębokość produktu: 25 cm\"
  },
  {
    \"name\": \"Waciki bezpyłowe Clavier Nail Wipes 325 szt.\",
    \"price\": 5.97,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ad23/98a963054dcab89d5a0c7069af96/Waciki-bezpylowe-Clavier-Nail-Wipes-325-szt\",
    \"desc\": \"Stan: Nowy, Marka: Clavier, Liczba sztuk: 325 szt.\"
  },
  {
    \"name\": \"Pochłaniacz Pyłu Do Paznokci 40W 3 Wiatraki +Worki\",
    \"price\": 94.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11079e/45ec5f5649f89ce7d82cb9c91173/Pochlaniacz-Pylu-Do-Paznokci-40W-3-Wiatraki-Worki\",
    \"desc\": \"Stan: Nowy, Marka: LOGIT, Moc: 40 W\"
  },
  {
    \"name\": \"CLARESA Lakier Hybrydowy Zestaw 6x Ice Cream\",
    \"price\": 63.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/111179/27d097d04b52827de2a020a03385/CLARESA-Lakier-Hybrydowy-Zestaw-6x-Ice-Cream\",
    \"desc\": \"Stan: Nowy, Marka: Claresa, Kolor: Odcienie brązu i beżu, Odcienie czerwieni i różu, Odcienie fioletu, Odcienie niebieskiego, Odcienie zieleni, Rodzaj: lakier kolorowy\"
  },
  {
    \"name\": \"Zestaw do hybryd paznokci Lampa 168W + akcesoria\",
    \"price\": 109.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11f857/a23131384f699643647e0a8dd12c/Zestaw-do-hybryd-paznokci-Lampa-168W-akcesoria\",
    \"desc\": \"Stan: Nowy, Marka: Sunny Nails\"
  },
  {
    \"name\": \"NEONAIL ZESTAW DO HYBRYDY Z LAMPĄ 48W +28 GRATISÓW\",
    \"price\": 249,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d9b7/cce4182a440b841c6a3dfedbc142/NEONAIL-ZESTAW-DO-HYBRYDY-Z-LAMPA-48W-28-GRATISOW\",
    \"desc\": \"Stan: Nowy, Marka: NEONAIL\"
  },
  {
    \"name\": \"Zestaw do hybryd lampa LED UV 48W +frezarka+gratis\",
    \"price\": 99.88,
    \"imageURL\": \"https://a.allegroimg.com/s180/117bf1/9cd666de4a95bef0f10e517e7e30/Zestaw-do-hybryd-lampa-LED-UV-48W-frezarka-gratis\",
    \"desc\": \"Stan: Nowy, Marka: 4Nails\"
  },
  {
    \"name\": \"ZESTAW pędzelków do zdobień CZARNE hybryd żelu 3sz\",
    \"price\": 5.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ef9f/1d49ff924064873adcaa3c2e4c98/ZESTAW-pedzelkow-do-zdobien-CZARNE-hybryd-zelu-3sz\",
    \"desc\": \"Stan: Nowy, Marka: inna marka, Rodzaj: zestaw pędzelków, Kolor uchwytu: czarny, Włosie: syntetyczne, Przeznaczenie: do zdobień, do żelu\"
  },
  {
    \"name\": \"SILCARE Base One Żel Kamuflaż Gel Uv COVER 50g\",
    \"price\": 28.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b9e5/d3c819034d809a009ffe88304c38/SILCARE-Base-One-Zel-Kamuflaz-Gel-Uv-COVER-50g\",
    \"desc\": \"Stan: Nowy, Marka: Silcare, Rodzaj: podkładowy, budujący, Kolor dominujący: inny\"
  },
  {
    \"name\": \"DŁUTKO DWUSTRONNE Radełko kopytko pusher do skórek\",
    \"price\": 5.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b39f/6427948f43ddb392fdb8ee4c4fc5/DLUTKO-DWUSTRONNE-Radelko-kopytko-pusher-do-skorek\",
    \"desc\": \"Stan: Nowy, Marka: Goldton Solingen, Rodzaj: kopytko\"
  },
  {
    \"name\": \"NeoNail Lakier Hybrydowy Zestaw Wszystkie Kolory\",
    \"price\": 69.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11dbf0/700b39d1462da9572d3728daf3d4/NeoNail-Lakier-Hybrydowy-Zestaw-Wszystkie-Kolory\",
    \"desc\": \"Stan: Nowy, Marka: NEONAIL, Kolor: Biel, Czerń, Odcienie brązu i beżu, Odcienie czerwieni i różu, Odcienie fioletu, Odcienie niebieskiego, Odcienie pomarańczowego, Odcienie szarości i srebra, Odcienie zieleni, Odcienie żółtego i złota, Rodzaj: lakier kolorowy\"
  },
  {
    \"name\": \"FLEXY GEL POLY AKRYLOŻEL ZESTAW TNS + FORMY\",
    \"price\": 23.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/112f7e/b6e8b4bb4381a0a0924bc66d6bfc/FLEXY-GEL-POLY-AKRYLOZEL-ZESTAW-TNS-FORMY\",
    \"desc\": \"Stan: Nowy, Marka: TNS, Zawartość zestawu: pędzelek do zdobień, pędzelek do żelu, pilnik do paznokci, primer, szablony do przedłużania paznokci, tipsy, żel\"
  },
  {
    \"name\": \"CA4W KUFEREK KOSMETYCZNY WALIZKA NA LAMPĘ KOSMETYK\",
    \"price\": 93.73,
    \"imageURL\": \"https://a.allegroimg.com/s180/110210/965321544e649301875c9d83b259/CA4W-KUFEREK-KOSMETYCZNY-WALIZKA-NA-LAMPE-KOSMETYK\",
    \"desc\": \"Stan: Nowy, Marka: Aptel, Kolor dominujący: wielokolorowy, Wysokość produktu: 17 cm, Szerokość produktu: 25 cm, Głębokość produktu: 17 cm\"
  },
  {
    \"name\": \"Profesjonalne Cążki Do Skórek Stal Chirurgiczna\",
    \"price\": 5.89,
    \"imageURL\": \"https://a.allegroimg.com/s180/1161c5/55cca4be4407a721ef218bb1090a/Profesjonalne-Cazki-Do-Skorek-Stal-Chirurgiczna\",
    \"desc\": \"Stan: Nowy, Marka: inna marka, Rodzaj: cążki\"
  },
  {
    \"name\": \"Victoria Vynn Build Gel15ml 06 Cover Blush +Gratis\",
    \"price\": 37,
    \"imageURL\": \"https://a.allegroimg.com/s180/113cd7/c40577f14832a90702a718b26437/Victoria-Vynn-Build-Gel15ml-06-Cover-Blush-Gratis\",
    \"desc\": \"Stan: Nowy, Marka: Victoria Vynn, Rodzaj: podkładowy, budujący, Kolor dominujący: beże i brązy\"
  },
  {
    \"name\": \"SUNONE SUN1 Lampa UV LED 24/48W Hybrydy Żele\",
    \"price\": 62,
    \"imageURL\": \"https://a.allegroimg.com/s180/1150c9/0cd16952414097d5df94e184a72b/SUNONE-SUN1-Lampa-UV-LED-24-48W-Hybrydy-Zele\",
    \"desc\": \"Stan: Nowy, Marka: SUNONE, Kolor dominujący: biały, Rodzaj: LED+UV, Zasilanie: sieciowe, Moc: 48 W\"
  },
  {
    \"name\": \"ZESTAW ACRYLGEL FLEXY GEL POLYLIQUID FORMY DUAL P2\",
    \"price\": 43.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/119406/964870174797944e940a467144ad/ZESTAW-ACRYLGEL-FLEXY-GEL-POLYLIQUID-FORMY-DUAL-P2\",
    \"desc\": \"Stan: Nowy, Marka: Isabellenails\"
  },
  {
    \"name\": \"Indigo Formy Do Modelowania Paznokci 100szt.\",
    \"price\": 16.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c7b7/f6da88734c2c9bf923701e593de3/Indigo-Formy-Do-Modelowania-Paznokci-100szt\",
    \"desc\": \"Stan: Nowy, Marka: Indigo, Liczba sztuk: 100 szt.\"
  },
  {
    \"name\": \"Profesjonalny Sterylizator Narzędzi Kulkowy Kulki\",
    \"price\": 44.99,
    \"imageURL\": \"https://f.allegroimg.com/s180/03a50d/356c07d84cb1b881091e450ec55f/Profesjonalny-Sterylizator-Narzedzi-Kulkowy-Kulki\",
    \"desc\": \"Stan: Nowy, Marka: inna marka (callissimo), Moc: 100 W\"
  },
  {
    \"name\": \"POCHŁANIACZ PYŁU DO PAZNOKCI BEZWORKOWY FILTR\",
    \"price\": 149,
    \"imageURL\": \"https://a.allegroimg.com/s180/11e966/64b884a0474b827ae1697da15a2c/POCHLANIACZ-PYLU-DO-PAZNOKCI-BEZWORKOWY-FILTR\",
    \"desc\": \"Stan: Nowy, Marka: MalTec, Moc: 68 W\"
  },
  {
    \"name\": \"Indigo Formy Do Modelowania Paznokci 100szt.\",
    \"price\": 16.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c7b7/f6da88734c2c9bf923701e593de3/Indigo-Formy-Do-Modelowania-Paznokci-100szt\",
    \"desc\": \"Stan: Nowy, Marka: Indigo, Liczba sztuk: 100 szt.\"
  }
]`);

const c = gifts as BaseGift[];

export default c;
