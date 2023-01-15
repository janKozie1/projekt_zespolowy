import type { BaseGift } from '../gifts';

const gifts: unknown = JSON.parse(`[
  {
    \"name\": \"MARKERY ALKOHOLOWE DWUSTRONNE ZESTAW 48SZT + TORBA\",
    \"price\": 28,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ee4d/898935d649efadd5bda674d9da34/MARKERY-ALKOHOLOWE-DWUSTRONNE-ZESTAW-48SZT-TORBA\",
    \"desc\": \"Stan: Nowy, Marka: inna (Care Life), Liczba sztuk w zestawie: 48 szt.\"
  },
  {
    \"name\": \"MARKERY ALKOHOLOWE DWUSTRONNE ZESTAW 80SZT + TORBA\",
    \"price\": 57.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11385f/1998d27347838b38cc409ca64749/MARKERY-ALKOHOLOWE-DWUSTRONNE-ZESTAW-80SZT-TORBA\",
    \"desc\": \"Stan: Nowy, Marka: Touch, Liczba sztuk w zestawie: 80 szt.\"
  },
  {
    \"name\": \"MARKERY ALKOHOLOWE FLAMASTRY ZESTAW 80 TORBA PRO\",
    \"price\": 66.49,
    \"imageURL\": \"https://a.allegroimg.com/s180/112279/c27fd51e4d79a89479f582c4a9ef/MARKERY-ALKOHOLOWE-FLAMASTRY-ZESTAW-80-TORBA-PRO\",
    \"desc\": \"Stan: Nowy, Marka: inna (SmartWorld), Liczba sztuk w zestawie: 80 szt.\"
  },
  {
    \"name\": \"KREDKI OŁÓWKOWE ZESTAW ARTYSTYCZNY 50 sztuk\",
    \"price\": 28.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/117abe/1a9aa27c40078f22817f957df853/KREDKI-OLOWKOWE-ZESTAW-ARTYSTYCZNY-50-sztuk\",
    \"desc\": \"Stan: Nowy, Rodzaj: kredki ołówkowe, Marka: H & B, Liczba sztuk w zestawie: 50 szt.\"
  },
  {
    \"name\": \"DŁUGOPIS WYMAZYWALNY NIEBIESKI 0,7 mm KIDEA\",
    \"price\": 2.45,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c2d8/9681ff794995b448aa5890997f55/DLUGOPIS-WYMAZYWALNY-NIEBIESKI-0-7-mm-KIDEA\",
    \"desc\": \"Stan: Nowy, Marka: Kidea\"
  },
  {
    \"name\": \"MARKERY ALKOHOLOWE PRO ZESTAW TOUCH 80SZT + TORBA\",
    \"price\": 73.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/112ee9/e912ffe3438ab26b5ff0fa0c620d/MARKERY-ALKOHOLOWE-PRO-ZESTAW-TOUCH-80SZT-TORBA\",
    \"desc\": \"Stan: Nowy, Marka: Pan i Pani Gadżet, Liczba sztuk w zestawie: 80 szt.\"
  },
  {
    \"name\": \"MAGICZNE MARKERY do rysowania na wodzie + ŁYŻKA\",
    \"price\": 59.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c85a/24f2dc55488983ae709ab6caab9e/MAGICZNE-MARKERY-do-rysowania-na-wodzie-LYZKA\",
    \"desc\": \"Stan: Nowy, Marka: Touch, Liczba sztuk w zestawie: 12 szt.\"
  },
  {
    \"name\": \"Promarkery z etui markery dwustronne 80szt RAWMARK\",
    \"price\": 129.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/112c4a/854ef2d744cea4af2230043be05c/Promarkery-z-etui-markery-dwustronne-80szt-RAWMARK\",
    \"desc\": \"Stan: Nowy, Marka: Rawmark, Liczba sztuk w zestawie: 80 szt.\"
  },
  {
    \"name\": \"DŁUGOPIS SZPIEGOWSKI NIEWIDZIALNY Z LATARKĄ UV\",
    \"price\": 1.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11f276/10ff6f474b13ae90d80b03001c33/DLUGOPIS-SZPIEGOWSKI-NIEWIDZIALNY-Z-LATARKA-UV\",
    \"desc\": \"Stan: Nowy, Marka: inna (karwil)\"
  },
  {
    \"name\": \"PLECAK SZKOLNY MŁODZIEŻOWY ŚWIECĄCY ODBLASKOWY USB\",
    \"price\": 109.97,
    \"imageURL\": \"https://a.allegroimg.com/s180/117cee/076075594258befa6e312ac2a263/PLECAK-SZKOLNY-MLODZIEZOWY-SWIECACY-ODBLASKOWY-USB\",
    \"desc\": \"Stan: Nowy, Typ: wielokomorowy, Marka: inna (Backpack), Wysokość produktu: 42 cm, Szerokość produktu: 32 cm, Głębokość produktu: 17 cm\"
  },
  {
    \"name\": \"KREDKI DWUSTRONNE OŁÓWKOWE ASTRA 24/48 KOLORÓW\",
    \"price\": 20.36,
    \"imageURL\": \"https://a.allegroimg.com/s180/03d8ef/ce9e351345f89ecf5037b68781a7/KREDKI-DWUSTRONNE-OLOWKOWE-ASTRA-24-48-KOLOROW\",
    \"desc\": \"Stan: Nowy, Rodzaj: kredki ołówkowe, Marka: Astra, Liczba sztuk w zestawie: 24 szt.\"
  },
  {
    \"name\": \"KUBOTAN DŁUGOPIS TAKTYCZNY WOJSKOWY SURVIVAL 6W1\",
    \"price\": 12.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1109a3/69355071432eb212a18320abeb7a/KUBOTAN-DLUGOPIS-TAKTYCZNY-WOJSKOWY-SURVIVAL-6W1\",
    \"desc\": \"Stan: Nowy, Marka: Ecoverso\"
  },
  {
    \"name\": \"DŁUGOPIS AUTOMATYCZNY ELEGANCKI ZENITH SILVER\",
    \"price\": 13.49,
    \"imageURL\": \"https://a.allegroimg.com/s180/117ca5/bad825914cde882f08010c1da361/DLUGOPIS-AUTOMATYCZNY-ELEGANCKI-ZENITH-SILVER\",
    \"desc\": \"Stan: Nowy, Marka: Zenith\"
  },
  {
    \"name\": \"SEGREGATOR OFFICE A4 75 MM OKUCIE OKUCIEM CZARNY\",
    \"price\": 7.45,
    \"imageURL\": \"https://a.allegroimg.com/s180/11bce2/a4c7d2f943deac21a199d2ee2d34/SEGREGATOR-OFFICE-A4-75-MM-OKUCIE-OKUCIEM-CZARNY\",
    \"desc\": \"Stan: Nowy, Marka: Hexagon\"
  },
  {
    \"name\": \"KREDKI ZESTAW ARTYSTYCZNY 258 EL WALIZKA\",
    \"price\": 109,
    \"imageURL\": \"https://a.allegroimg.com/s180/117ce3/dd0b5c4542fcbab8a53dd0b14196/KREDKI-ZESTAW-ARTYSTYCZNY-258-EL-WALIZKA\",
    \"desc\": \"Stan: Nowy, Marka: Tellacio, Liczba sztuk w zestawie: 258 szt.\"
  },
  {
    \"name\": \"ZESTAW ARTYSTYCZNY KREDKI OŁÓWKI + PIÓRNIK 100szt\",
    \"price\": 129,
    \"imageURL\": \"https://a.allegroimg.com/s180/114bfe/b7690d8c40fdb52e35170942b69a/ZESTAW-ARTYSTYCZNY-KREDKI-OLOWKI-PIORNIK-100szt\",
    \"desc\": \"Stan: Nowy, Marka: Ragi\"
  },
  {
    \"name\": \"Markery Kolorowe Zakreślacze Pisaki Dwustronne x80\",
    \"price\": 59.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/1190e3/89efb71e4244ab6ddb872e6fe712/Markery-Kolorowe-Zakreslacze-Pisaki-Dwustronne-x80\",
    \"desc\": \"Stan: Nowy, Marka: Iso Trade, Liczba sztuk w zestawie: 80 szt.\"
  },
  {
    \"name\": \"Promarkery z etui markery dwustronne 80szt RAWMARK\",
    \"price\": 129.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/112c4a/854ef2d744cea4af2230043be05c/Promarkery-z-etui-markery-dwustronne-80szt-RAWMARK\",
    \"desc\": \"Stan: Nowy, Marka: Rawmark, Liczba sztuk w zestawie: 80 szt.\"
  },
  {
    \"name\": \"ZAKAZANY DŁUGOPIS ściąga, ze ściągą, ORYGINALNY\",
    \"price\": 15.9,
    \"imageURL\": \"https://6.allegroimg.com/s180/0347e9/7b41fba34001ad26e1b411cc04f6/ZAKAZANY-DLUGOPIS-sciaga-ze-sciaga-ORYGINALNY\",
    \"desc\": \"Stan: Nowy, Marka: Zakazany Długopis\"
  },
  {
    \"name\": \"DŁUGOPIS BIC 1,0 mm ROUND STICK 60 sztuk NIEBIESKI\",
    \"price\": 39.89,
    \"imageURL\": \"https://a.allegroimg.com/s180/113288/9462d2bf4bd1b26cc9e9ae512135/DLUGOPIS-BIC-1-0-mm-ROUND-STICK-60-sztuk-NIEBIESKI\",
    \"desc\": \"Stan: Nowy, Marka: BIC\"
  },
  {
    \"name\": \"_ZAKREŚLACZE MARKERY MAZAKI PISAKI DWUSTRONNE X60_\",
    \"price\": 54.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d5da/d1b07963484f958de0a94e40a142/_ZAKRESLACZE-MARKERY-MAZAKI-PISAKI-DWUSTRONNE-X60_\",
    \"desc\": \"Stan: Nowy, Marka: inna (Promarkery), Liczba sztuk w zestawie: 60 szt.\"
  },
  {
    \"name\": \"PLECAK SZKOLNY MŁODZIEŻOWY ŚWIECĄCY ODBLASKOWY USB\",
    \"price\": 99.97,
    \"imageURL\": \"https://a.allegroimg.com/s180/11033e/c93b75e64b23ac5d548a57a8fee4/PLECAK-SZKOLNY-MLODZIEZOWY-SWIECACY-ODBLASKOWY-USB\",
    \"desc\": \"Stan: Nowy, Typ: wielokomorowy, Marka: inna (Backpack), Wysokość produktu: 46 cm, Szerokość produktu: 30 cm, Głębokość produktu: 14 cm\"
  },
  {
    \"name\": \"ZESTAW 4 DŁUGOPISY NIEBIESKIE ŚCIERALNE ZWIERZAKI\",
    \"price\": 18.09,
    \"imageURL\": \"https://a.allegroimg.com/s180/11fb0e/f7d34d194b219009bb8e995fbedf/ZESTAW-4-DLUGOPISY-NIEBIESKIE-SCIERALNE-ZWIERZAKI\",
    \"desc\": \"Stan: Nowy, Marka: Kidea\"
  },
  {
    \"name\": \"Zestaw artystyczny do malowania w walizce DREWNO\",
    \"price\": 78.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11529b/242a1ecb4b6e83a2607bbdb45ba4/Zestaw-artystyczny-do-malowania-w-walizce-DREWNO\",
    \"desc\": \"Stan: Nowy, Marka: inna (LEO), Liczba sztuk w zestawie: 220 szt.\"
  },
  {
    \"name\": \"Mega Zestaw do Malowania Rysowania Walizka Farby\",
    \"price\": 72.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c646/6a39963646e8b8cac6b6e9eba16a/Mega-Zestaw-do-Malowania-Rysowania-Walizka-Farby\",
    \"desc\": \"Stan: Nowy, Marka: Iso Trade, Liczba sztuk w zestawie: 81 szt.\"
  },
  {
    \"name\": \"MARKERY ALKOHOLOWE TOUCH ZESTAW 168 SZTUK + TORBA\",
    \"price\": 139,
    \"imageURL\": \"https://a.allegroimg.com/s180/118090/6b3aa88247dfbcacb5d217e36ca1/MARKERY-ALKOHOLOWE-TOUCH-ZESTAW-168-SZTUK-TORBA\",
    \"desc\": \"Stan: Nowy, Marka: Touch Sketch, Liczba sztuk w zestawie: 168 szt.\"
  },
  {
    \"name\": \"PLECAK ADIDAS SZKOLNY LK BP BOS HM5027 CZARNY\",
    \"price\": 99.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11631e/1d6696cf49309e593613b91ccaec/PLECAK-ADIDAS-SZKOLNY-LK-BP-BOS-HM5027-CZARNY\",
    \"desc\": \"Stan: Nowy, Typ: jednokomorowy, Marka: adidas, Wysokość produktu: 30 cm, Szerokość produktu: 33 cm, Głębokość produktu: 11 cm\"
  },
  {
    \"name\": \"KREDKI OŁÓWKOWE PROFESJONALNE ZESTAW 46 SZTUK ETUI\",
    \"price\": 49.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11cde4/67408b29499b95883f090cfbb4a1/KREDKI-OLOWKOWE-PROFESJONALNE-ZESTAW-46-SZTUK-ETUI\",
    \"desc\": \"Stan: Nowy, Rodzaj: kredki ołówkowe, Marka: Craft Sensations, Liczba sztuk w zestawie: 46 szt.\"
  },
  {
    \"name\": \"MARKERY KOLOROWE DWUSTRONNE ZAKREŚLACZE PISAKI 40x\",
    \"price\": 44.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11fe45/ee7c746145f09901879f092e74d9/MARKERY-KOLOROWE-DWUSTRONNE-ZAKRESLACZE-PISAKI-40x\",
    \"desc\": \"Stan: Nowy, Marka: Logit, Liczba sztuk w zestawie: 48 szt.\"
  },
  {
    \"name\": \"Długopis automatyczny niebieski Pentel BK417-10szt\",
    \"price\": 13.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11dcea/8c46dfdd40d29fa3534d271b2e1f/Dlugopis-automatyczny-niebieski-Pentel-BK417-10szt\",
    \"desc\": \"Stan: Nowy, Marka: Pentel\"
  },
  {
    \"name\": \"ŚNIADANIÓWKA PASO BEUNIQ LUNCH BOX\",
    \"price\": 23.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11df03/8babb21842b3a9a41cb96f7362e0/SNIADANIOWKA-PASO-BEUNIQ-LUNCH-BOX\",
    \"desc\": \"Stan: Nowy, Marka: Paso, Kolor: czarny, Płeć: Chłopcy, Dziewczynki\"
  },
  {
    \"name\": \"MARKERY ALKOHOLOWE TOUCH ZESTAW 168 SZTUK + TORBA\",
    \"price\": 139,
    \"imageURL\": \"https://a.allegroimg.com/s180/118090/6b3aa88247dfbcacb5d217e36ca1/MARKERY-ALKOHOLOWE-TOUCH-ZESTAW-168-SZTUK-TORBA\",
    \"desc\": \"Stan: Nowy, Marka: Touch Sketch, Liczba sztuk w zestawie: 168 szt.\"
  },
  {
    \"name\": \"Kalkulator naukowy inżynierski Casio FX-991CEX LCD\",
    \"price\": 129,
    \"imageURL\": \"https://a.allegroimg.com/s180/11217d/fcb55de74120a2acc5f62e6285d8/Kalkulator-naukowy-inzynierski-Casio-FX-991CEX-LCD\",
    \"desc\": \"Stan: Nowy, Marka: Casio\"
  },
  {
    \"name\": \"Długopis kulkowy automatyczny 0,5 mm Niebieski\",
    \"price\": 1.89,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ef3f/b36eca27434bb53fb698bb89bba1/Dlugopis-kulkowy-automatyczny-0-5-mm-Niebieski\",
    \"desc\": \"Stan: Nowy, Marka: Toma\"
  },
  {
    \"name\": \"PIÓRNIK wielofunkcyjny saszetka SZKOŁA I103\",
    \"price\": 59,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ab38/721e3d4a4510ac2276038f640b20/PIORNIK-wielofunkcyjny-saszetka-SZKOLA-I103\",
    \"desc\": \"Stan: Nowy, Typ: saszetka, Marka: inna (Domowiskooo)\"
  },
  {
    \"name\": \"ZESTAW ARTYSTYCZNY DO MALOWANIA POLSKA MARKA XXL\",
    \"price\": 29.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/112292/a863a747489fa6d3daba57bd17fe/ZESTAW-ARTYSTYCZNY-DO-MALOWANIA-POLSKA-MARKA-XXL\",
    \"desc\": \"Stan: Nowy, Marka: Logit, Liczba sztuk w zestawie: 168 szt.\"
  },
  {
    \"name\": \"MEPAL BENTO LUNCH BOX ŚNIADANIÓWKA DZIECKA 900 ml\",
    \"price\": 58.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11e1e9/196d91cf4d659c05c83301a7f9a8/MEPAL-BENTO-LUNCH-BOX-SNIADANIOWKA-DZIECKA-900-ml\",
    \"desc\": \"Stan: Nowy, Marka: Mepal, Kolor: biały, czarny, Odcienie różu, Wielokolorowy, Płeć: Chłopcy, Dziewczynki\"
  },
  {
    \"name\": \"Zestaw Artystyczny do Malowania 142 szt + Walizka\",
    \"price\": 109.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/112f5f/c0e82c7e48b4a704ee4f145bfd22/Zestaw-Artystyczny-do-Malowania-142-szt-Walizka\",
    \"desc\": \"Stan: Nowy, Marka: Iso Trade, Liczba sztuk w zestawie: 142 szt.\"
  },
  {
    \"name\": \"ŚNIADANIÓWKA BackUP 3 przegródki Lunchbox BPA FREE\",
    \"price\": 22.36,
    \"imageURL\": \"https://a.allegroimg.com/s180/111b5b/1fc24e7b45e2bf9cbc1bc25fa85a/SNIADANIOWKA-BackUP-3-przegrodki-Lunchbox-BPA-FREE\",
    \"desc\": \"Stan: Nowy, Marka: Backup, Kolor: Odcienie szarości i srebra, Płeć: Chłopcy, Dziewczynki\"
  },
  {
    \"name\": \"Zestaw Artystyczny do Malowania 168el+ DŁUGOPIS UV\",
    \"price\": 41.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a5e5/ebcd97ef4e6b8684c26a72a5b91b/Zestaw-Artystyczny-do-Malowania-168el-DLUGOPIS-UV\",
    \"desc\": \"Stan: Nowy, Marka: inna (leo), Liczba sztuk w zestawie: 168 szt.\"
  },
  {
    \"name\": \"BAZGROWNIK PAPIER 1kg BLOK RYSUNKOWY>200 kartek\",
    \"price\": 14.27,
    \"imageURL\": \"https://a.allegroimg.com/s180/11baad/1e9157e94c6c8aa07c2fd4599a4a/BAZGROWNIK-PAPIER-1kg-BLOK-RYSUNKOWY-200-kartek\",
    \"desc\": \"Stan: Nowy, Marka: Rexus, Format: A4\"
  },
  {
    \"name\": \"PLECAK MŁODZIEŻOWY szkolny TORBA 2w1 (T200)\",
    \"price\": 49,
    \"imageURL\": \"https://a.allegroimg.com/s180/1169c8/c17fc9234b708be5ca576bf743b7/PLECAK-MLODZIEZOWY-szkolny-TORBA-2w1-T200\",
    \"desc\": \"Stan: Nowy, Typ: wielokomorowy, Marka: K&M\"
  },
  {
    \"name\": \"KREDKI OŁÓWKOWE PROFESJONALNE DUŻY ZESTAW KREDEK\",
    \"price\": 54.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/111abd/dee17d4c46ef94e2a798a74b346a/KREDKI-OLOWKOWE-PROFESJONALNE-DUZY-ZESTAW-KREDEK\",
    \"desc\": \"Stan: Nowy, Rodzaj: kredki ołówkowe, Marka: KD Art Studio, Liczba sztuk w zestawie: 48 szt.\"
  },
  {
    \"name\": \"ZESTAW DO MALOWANIA ARTYSTYCZNY SZTALUGA FARBY SET\",
    \"price\": 79.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11cb39/50b8921b4c9f9871e27d3b7a89b6/ZESTAW-DO-MALOWANIA-ARTYSTYCZNY-SZTALUGA-FARBY-SET\",
    \"desc\": \"Stan: Nowy, Marka: inna (Artmaker), Liczba sztuk w zestawie: 23 szt.\"
  },
  {
    \"name\": \"DŁUGOPIS WYMAZYWALNY ŚCIERALNY 0,5mm Z GUMKĄ\",
    \"price\": 2.43,
    \"imageURL\": \"https://a.allegroimg.com/s180/1102fb/9171587b4a498f6f0ee243596b56/DLUGOPIS-WYMAZYWALNY-SCIERALNY-0-5mm-Z-GUMKA\",
    \"desc\": \"Stan: Nowy, Marka: inna (PrzydaSie.pl)\"
  },
  {
    \"name\": \"Zestaw Artystyczny do Malowania w Walizce 180 szt\",
    \"price\": 49,
    \"imageURL\": \"https://a.allegroimg.com/s180/11955e/24fbfba04783b75ebec2fc4b3a5e/Zestaw-Artystyczny-do-Malowania-w-Walizce-180-szt\",
    \"desc\": \"Stan: Nowy, Marka: inna (InnaMarka), Liczba sztuk w zestawie: 180 szt.\"
  },
  {
    \"name\": \"WIELKI ZESTAW ARTYSTYCZNY DO MALOWANIA WALIZKA 168\",
    \"price\": 29.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/117de5/051b1dec4cd881dc0ba264527b2d/WIELKI-ZESTAW-ARTYSTYCZNY-DO-MALOWANIA-WALIZKA-168\",
    \"desc\": \"Stan: Nowy, Marka: Logit, Liczba sztuk w zestawie: 168 szt.\"
  },
  {
    \"name\": \"ZESTAW DO MALOWANIA ARTYSTYCZNY SZTALUGA FARBY SET\",
    \"price\": 79.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11cb39/50b8921b4c9f9871e27d3b7a89b6/ZESTAW-DO-MALOWANIA-ARTYSTYCZNY-SZTALUGA-FARBY-SET\",
    \"desc\": \"Stan: Nowy, Marka: inna (Artmaker), Liczba sztuk w zestawie: 23 szt.\"
  },
  {
    \"name\": \"ZESTAW 3 DŁUGOPISY NIEBIESKIE ŚCIERALNE ZWIERZAKI\",
    \"price\": 13.73,
    \"imageURL\": \"https://a.allegroimg.com/s180/11241a/3d13ebb044dabddc0ecc3aa2e01b/ZESTAW-3-DLUGOPISY-NIEBIESKIE-SCIERALNE-ZWIERZAKI\",
    \"desc\": \"Stan: Nowy, Marka: Kidea\"
  },
  {
    \"name\": \"6 x DŁUGOPIS NIEBIESKI WYMAZYWALNY GRA PIXELE GAME\",
    \"price\": 26.27,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c892/f7c50f224e7c9f9b396493bbbbb4/6-x-DLUGOPIS-NIEBIESKI-WYMAZYWALNY-GRA-PIXELE-GAME\",
    \"desc\": \"Stan: Nowy, Marka: Kidea\"
  },
  {
    \"name\": \"Pojemnik na lunch Bento Cube 1,25l SISTEMA bez BPA\",
    \"price\": 49.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1175e4/18d56d5441bea1a1b136cc76254a/Pojemnik-na-lunch-Bento-Cube-1-25l-SISTEMA-bez-BPA\",
    \"desc\": \"Stan: Nowy, Marka: Sistema, Kolor: Odcienie niebieskiego, Płeć: Chłopcy, Dziewczynki\"
  },
  {
    \"name\": \"PLECAK SZKOLNY MŁODZIEŻOWY ŚWIECĄCY ODBLASKOWY USB\",
    \"price\": 88.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/114327/52473c36482ba0d3920018cb0749/PLECAK-SZKOLNY-MLODZIEZOWY-SWIECACY-ODBLASKOWY-USB\",
    \"desc\": \"Stan: Nowy, Typ: wielokomorowy, Marka: Logit, Wysokość produktu: 44 cm, Szerokość produktu: 30 cm, Głębokość produktu: 17 cm\"
  },
  {
    \"name\": \"MARKERY ALKOHOLOWE TOUCH ZESTAW PRO 168 TORBA ETUI\",
    \"price\": 139,
    \"imageURL\": \"https://a.allegroimg.com/s180/114d4e/b1667b8c42cdb0f1026f62766be2/MARKERY-ALKOHOLOWE-TOUCH-ZESTAW-PRO-168-TORBA-ETUI\",
    \"desc\": \"Stan: Nowy, Marka: MatMay, Liczba sztuk w zestawie: 168 szt.\"
  },
  {
    \"name\": \"LUNCHBOX POJEMNIK ŚNIADANIÓWKA PODGRZEWANY 1100ml\",
    \"price\": 54.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1141c5/4cec670e4c178688dc22016f4185/LUNCHBOX-POJEMNIK-SNIADANIOWKA-PODGRZEWANY-1100ml\",
    \"desc\": \"Stan: Nowy, Marka: Adler, Kolor: Odcienie szarości i srebra, Płeć: Chłopcy, Dziewczynki\"
  },
  {
    \"name\": \"PLECAK SZKOLNY MŁODZIEŻOWY PASO DUŻY\",
    \"price\": 129.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11538c/62f8c7da4efbba837f2f32741af9/PLECAK-SZKOLNY-MLODZIEZOWY-PASO-DUZY\",
    \"desc\": \"Stan: Nowy, Typ: wielokomorowy, Marka: Paso, Wysokość produktu: 50 cm, Szerokość produktu: 30 cm, Głębokość produktu: 22 cm\"
  },
  {
    \"name\": \"Elegancki Długopis Automatyczny Diplomat Magnum\",
    \"price\": 24.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/113f6b/dbef42084d94b96c5bd5947ed1c9/Elegancki-Dlugopis-Automatyczny-Diplomat-Magnum\",
    \"desc\": \"Stan: Nowy, Marka: DIPLOMAT\"
  },
  {
    \"name\": \"Piórnik szkolny podwójny organizer saszetka (C004)\",
    \"price\": 49,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ca13/3dc20fa4451d9318ca5570c6518a/Piornik-szkolny-podwojny-organizer-saszetka-C004\",
    \"desc\": \"Stan: Nowy, Typ: saszetka, Marka: inna (Domowiskooo)\"
  },
  {
    \"name\": \"Kredki ołówkowe trójkątne Astra Vision 12 kolorów\",
    \"price\": 9.94,
    \"imageURL\": \"https://a.allegroimg.com/s180/11f309/ef1303264a4c84cc97d086349009/Kredki-olowkowe-trojkatne-Astra-Vision-12-kolorow\",
    \"desc\": \"Stan: Nowy, Rodzaj: kredki ołówkowe, Marka: Astra, Liczba sztuk w zestawie: 12 szt.\"
  },
  {
    \"name\": \"_ZAKREŚLACZE MARKERY MAZAKI PISAKI DWUSTRONNE X48_\",
    \"price\": 45,
    \"imageURL\": \"https://a.allegroimg.com/s180/1114ac/5825c0d248b7b28e161d2f6a4f22/_ZAKRESLACZE-MARKERY-MAZAKI-PISAKI-DWUSTRONNE-X48_\",
    \"desc\": \"Stan: Nowy, Marka: inna (Własna), Liczba sztuk w zestawie: 48 szt.\"
  },
  {
    \"name\": \"Zestaw Artystyczny do Malowania w Walizce XXL\",
    \"price\": 119,
    \"imageURL\": \"https://a.allegroimg.com/s180/112f59/5eae862146ed900d084ad7806139/Zestaw-Artystyczny-do-Malowania-w-Walizce-XXL\",
    \"desc\": \"Stan: Nowy, Marka: inna (Gemson), Liczba sztuk w zestawie: 145 szt.\"
  },
  {
    \"name\": \"Segregator A4/75 Metallic Dreams Czarny Interdruk\",
    \"price\": 15.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/111db8/465180b8417cb80687f71cae4690/Segregator-A4-75-Metallic-Dreams-Czarny-Interdruk\",
    \"desc\": \"Stan: Nowy, Marka: Interdruk\"
  },
  {
    \"name\": \"DŁUGOPISY ŻELOWE BROKATOWE KOLOROWE ZESTAW 48 SZT\",
    \"price\": 40,
    \"imageURL\": \"https://a.allegroimg.com/s180/1143a9/4db3d654463c8a6687ab0c109c3f/DLUGOPISY-ZELOWE-BROKATOWE-KOLOROWE-ZESTAW-48-SZT\",
    \"desc\": \"Stan: Nowy, Marka: Zuixua\"
  },
  {
    \"name\": \"KREDKI OŁÓWKOWE PROFESJONALNE ZESTAW KREDEK 48 KOL\",
    \"price\": 44.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1167d8/7fe2eae84c96a6460409cd0b830c/KREDKI-OLOWKOWE-PROFESJONALNE-ZESTAW-KREDEK-48-KOL\",
    \"desc\": \"Stan: Nowy, Rodzaj: kredki ołówkowe, Marka: Avec, Liczba sztuk w zestawie: 48 szt.\"
  },
  {
    \"name\": \"MARKERY ALKOHOLOWE FLAMASTRY ZESTAW 80 TORBA PRO\",
    \"price\": 66.49,
    \"imageURL\": \"https://a.allegroimg.com/s180/112279/c27fd51e4d79a89479f582c4a9ef/MARKERY-ALKOHOLOWE-FLAMASTRY-ZESTAW-80-TORBA-PRO\",
    \"desc\": \"Stan: Nowy, Marka: inna (SmartWorld), Liczba sztuk w zestawie: 80 szt.\"
  },
  {
    \"name\": \"COOLPACK PLECAK SZKOLNY MŁODZIEŻOWY Factor\",
    \"price\": 174,
    \"imageURL\": \"https://a.allegroimg.com/s180/11713d/8a1a4fb746af8832da42a7d3d976/COOLPACK-PLECAK-SZKOLNY-MLODZIEZOWY-Factor\",
    \"desc\": \"Stan: Nowy, Typ: wielokomorowy, Marka: CoolPack\"
  },
  {
    \"name\": \"Zestaw Długopis BIC Round Stic 5szt Niebieski\",
    \"price\": 3.45,
    \"imageURL\": \"https://a.allegroimg.com/s180/11acdf/a09b265b4f838aed7bf20cd6d2a0/Zestaw-Dlugopis-BIC-Round-Stic-5szt-Niebieski\",
    \"desc\": \"Stan: Nowy, Marka: BIC\"
  },
  {
    \"name\": \"Kalkulator naukowy Casio FX-350ESPLUS2 252 Funkcji\",
    \"price\": 84,
    \"imageURL\": \"https://a.allegroimg.com/s180/115f78/51a0731d46a7a7331b91636e3471/Kalkulator-naukowy-Casio-FX-350ESPLUS2-252-Funkcji\",
    \"desc\": \"Stan: Nowy, Marka: Casio\"
  },
  {
    \"name\": \"Zestaw artystyczny do rysowania malowania walizka\",
    \"price\": 56,
    \"imageURL\": \"https://a.allegroimg.com/s180/118199/734d8f604a8e866b0df917b8133d/Zestaw-artystyczny-do-rysowania-malowania-walizka\",
    \"desc\": \"Stan: Nowy, Marka: inna (Rot Service), Liczba sztuk w zestawie: 53 szt.\"
  },
  {
    \"name\": \"ZESTAW ARTYSTYCZNY DO MALOWANIA KREDKI 168 WALIZKA\",
    \"price\": 45,
    \"imageURL\": \"https://a.allegroimg.com/s180/1172a5/1615c4124d54bef788b350167bdf/ZESTAW-ARTYSTYCZNY-DO-MALOWANIA-KREDKI-168-WALIZKA\",
    \"desc\": \"Stan: Nowy, Marka: inna (BK), Liczba sztuk w zestawie: 168 szt.\"
  },
  {
    \"name\": \"ZESTAW 50 FLAMASTRÓW PEACOCK W PLAST WAL\",
    \"price\": 81.45,
    \"imageURL\": \"https://a.allegroimg.com/s180/11df49/5517af7e4c6594942c041e96616b/ZESTAW-50-FLAMASTROW-PEACOCK-W-PLAST-WAL\",
    \"desc\": \"Stan: Nowy, Marka: Milan, Liczba sztuk w zestawie: 50 szt.\"
  }
]`);

const c = gifts as BaseGift[];

export default c;
