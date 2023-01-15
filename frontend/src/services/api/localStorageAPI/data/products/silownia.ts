import type { BaseGift } from '../gifts';

const gifts: unknown = JSON.parse(`[
  {
    \"name\": \"HULAHOP ODCHUDZAJĄCE SKŁADANE Z WYPUSTKAMI PIANKA\",
    \"price\": 40,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d7ac/8d779b544756b976866bf784c5cb/HULAHOP-ODCHUDZAJACE-SKLADANE-Z-WYPUSTKAMI-PIANKA\",
    \"desc\": \"Stan: Nowy, Marka: 4fizjo, Rodzaj: z wypustkami\"
  },
  {
    \"name\": \"ODCHUDZAJĄCE KOŁO HULAHOP Z MASAŻEREM SKŁADANE FIT\",
    \"price\": 159.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d042/1e5a9eb849d8b4f9f451a097ffd0/ODCHUDZAJACE-KOLO-HULAHOP-Z-MASAZEREM-SKLADANE-FIT\",
    \"desc\": \"Stan: Nowy, Marka: Lukoss, Rodzaj: z kulkami\"
  },
  {
    \"name\": \"Zestaw 5 Gum do Ćwiczeń Taśmy Oporowe Band Fitness\",
    \"price\": 26.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/113a98/28f11e154334a047c99b2bda8c25/Zestaw-5-Gum-do-Cwiczen-Tasmy-Oporowe-Band-Fitness\",
    \"desc\": \"Stan: Nowy, Marka: Trizand, Grubość: 0.1 mm, Opór: 1-18 kg\"
  },
  {
    \"name\": \"BIEŻNIA DOMOWA ELEKTRYCZNA SLIM WALKINGPAD F2200\",
    \"price\": 999,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d5d7/efdcdfe3400fba091e33f9d16946/BIEZNIA-DOMOWA-ELEKTRYCZNA-SLIM-WALKINGPAD-F2200\",
    \"desc\": \"Stan: Nowy, Rodzaj: elektryczna, Marka: inna (Walden), Maksymalna waga użytkownika: 100 kg, Moc: 1 KM\"
  },
  {
    \"name\": \"Stepper Steper Skrętny Linki Licznik LCD Regulacja\",
    \"price\": 179,
    \"imageURL\": \"https://a.allegroimg.com/s180/11f91b/d38e1cf042ca92f727facd0eae1b/Stepper-Steper-Skretny-Linki-Licznik-LCD-Regulacja\",
    \"desc\": \"Stan: Nowy, Marka: inna (Trizand), Rodzaj: stepper skrętny\"
  },
  {
    \"name\": \"ZESTAW 5 GUM DO ĆWICZEŃ MINI BAND 4FIZJO FITNESS\",
    \"price\": 27.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/116a8f/8db3d7a6458fa27259cf88831f69/ZESTAW-5-GUM-DO-CWICZEN-MINI-BAND-4FIZJO-FITNESS\",
    \"desc\": \"Stan: Nowy, Marka: 4fizjo, Opór: 0.5-20 kg\"
  },
  {
    \"name\": \"ŁAWKA TRENINGOWA ŁAWECZKA DO ĆWICZEŃ POD SZTANGĘ\",
    \"price\": 287.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d399/c9a2485a4ffaba28b968c166c9ad/LAWKA-TRENINGOWA-LAWECZKA-DO-CWICZEN-POD-SZTANGE\",
    \"desc\": \"Stan: Nowy, Marka: Funfit, Rodzaj: regulowana, Maksymalna waga użytkownika: 110 kg\"
  },
  {
    \"name\": \"ZESTAW 5 GUM OPOROWYCH DO ĆWICZEŃ WYSOKA JAKOŚĆ\",
    \"price\": 139.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/114591/f8a84f03446e95ecb61ef3a0f3cd/ZESTAW-5-GUM-OPOROWYCH-DO-CWICZEN-WYSOKA-JAKOSC\",
    \"desc\": \"Stan: Nowy, Marka: KUDDA, Grubość: 32 mm, Opór: 5-75 kg\"
  },
  {
    \"name\": \"Białko BULK Amix Predator Mocny Suplement na mase\",
    \"price\": 129,
    \"imageURL\": \"https://a.allegroimg.com/s180/118cd2/f8a912484447b4a9f3dbbe8141d7/Bialko-BULK-Amix-Predator-Mocny-Suplement-na-mase\",
    \"desc\": \"Rodzaj: koncentrat białka serwatkowego (WPC), Marka: Amix, Smak: truskawkowy, Waga: 1000 g\"
  },
  {
    \"name\": \"PAS MASAŻER WIBRUJĄCY ODCHUDZAJĄCY Z MIARKĄ 7W1\",
    \"price\": 99.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/118ae5/0e16f1b447719132f34c67d676b6/PAS-MASAZER-WIBRUJACY-ODCHUDZAJACY-Z-MIARKA-7W1\",
    \"desc\": \"Stan: Nowy, Rozmiar: uniwersalny\"
  },
  {
    \"name\": \"ELEKTROSTYMULATOR STYMULATOR MIĘŚNI BRZUCHA 3x EMS\",
    \"price\": 109.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1119f2/8f34e8654db587283cd40b92e1fc/ELEKTROSTYMULATOR-STYMULATOR-MIESNI-BRZUCHA-3x-EMS\",
    \"desc\": \"Stan: Nowy, Rozmiar: uniwersalny\"
  },
  {
    \"name\": \"HULAHOP ODCHUDZAJĄCE SKŁADANE Z WYPUSTKAMI PIANKA\",
    \"price\": 40,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b4f7/c664badc4545aabbd5f151075efa/HULAHOP-ODCHUDZAJACE-SKLADANE-Z-WYPUSTKAMI-PIANKA\",
    \"desc\": \"Stan: Nowy, Marka: Bestif, Rodzaj: z wypustkami\"
  },
  {
    \"name\": \"REDIN 100kaps. MOCNY SPALACZ TŁUSZCZU REDUKCJA\",
    \"price\": 149,
    \"imageURL\": \"https://a.allegroimg.com/s180/11eabd/3bb149c54b7eb6050133a28caf8a/REDIN-100kaps-MOCNY-SPALACZ-TLUSZCZU-REDUKCJA\",
    \"desc\": \"Rodzaj: termogeniki, Marka: Redin, Liczba sztuk w opakowaniu: 100 szt.\"
  },
  {
    \"name\": \"SPALACZ TŁUSZCZU Z BRZUCHA BURN FAT BLOKER APETYTU\",
    \"price\": 90.15,
    \"imageURL\": \"https://a.allegroimg.com/s180/113b8e/ea61e78f45e0ad80776a2d95c3ca/SPALACZ-TLUSZCZU-Z-BRZUCHA-BURN-FAT-BLOKER-APETYTU\",
    \"desc\": \"Rodzaj: wielozadaniowe, Marka: FITALL, Liczba sztuk w opakowaniu: 90 szt.\"
  },
  {
    \"name\": \"ZESTAW 5 GUM OPOROWYCH DO ĆWICZEŃ WYSOKA JAKOŚĆ\",
    \"price\": 139.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/114591/f8a84f03446e95ecb61ef3a0f3cd/ZESTAW-5-GUM-OPOROWYCH-DO-CWICZEN-WYSOKA-JAKOSC\",
    \"desc\": \"Stan: Nowy, Marka: KUDDA, Grubość: 32 mm, Opór: 5-75 kg\"
  },
  {
    \"name\": \"R2G Testapil dla mężczyzn Testosteron Siła Seks\",
    \"price\": 69,
    \"imageURL\": \"https://a.allegroimg.com/s180/112901/22086a664fa9b656a90b5e277f8d/R2G-Testapil-dla-mezczyzn-Testosteron-Sila-Seks\",
    \"desc\": \"Rodzaj: inny, Marka: R2G, Działanie: wielozadaniowe, Liczba sztuk w opakowaniu: 100 szt.\"
  },
  {
    \"name\": \"Rower Rowerek Treningowy Stacjonarny Oporowy\",
    \"price\": 249.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/110ed5/217d00c34b6984df9333250e1d2d/Rower-Rowerek-Treningowy-Stacjonarny-Oporowy\",
    \"desc\": \"Stan: Nowy, Marka: Veovision Sport, Rodzaj: mechaniczny, Typ: pionowy, Maksymalna waga użytkownika: 100 kg\"
  },
  {
    \"name\": \"WOZINSKY 3 GUMY OPOROWE TAŚMY MATERIAŁOWE ĆWICZEŃ\",
    \"price\": 34.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/1181ed/b598e614412b9ab30f4c83c4d451/WOZINSKY-3-GUMY-OPOROWE-TASMY-MATERIALOWE-CWICZEN\",
    \"desc\": \"Stan: Nowy, Marka: Wozinsky, Grubość: 0.4 mm, Opór: 8-31.5 kg\"
  },
  {
    \"name\": \"Hulahop odchudzające składane z wypustkami pianka\",
    \"price\": 40,
    \"imageURL\": \"https://a.allegroimg.com/s180/113c32/6ca8c67f48f4a6db0db9d4766763/Hulahop-odchudzajace-skladane-z-wypustkami-pianka\",
    \"desc\": \"Stan: Nowy, Marka: inna (01529), Rodzaj: z wypustkami\"
  },
  {
    \"name\": \"DESKA UCHWYTY DO POMPEK ĆWICZEŃ POMPKI PUSH 14w1\",
    \"price\": 44.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1153f6/d29629ab447780e820dfc632dee3/DESKA-UCHWYTY-DO-POMPEK-CWICZEN-POMPKI-PUSH-14w1\",
    \"desc\": \"Stan: Nowy, Marka: Inna marka (OMNA), Maksymalna waga użytkownika: 130 kg\"
  },
  {
    \"name\": \"MATA DO ĆWICZEŃ JOGI FITNESS PILATES GRUBA 1CM\",
    \"price\": 41.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11bf39/9f1957284dcd8f2b284e556c21e8/MATA-DO-CWICZEN-JOGI-FITNESS-PILATES-GRUBA-1CM\",
    \"desc\": \"Stan: Uszkodzony\"
  },
  {
    \"name\": \"Rowerek Stacjonarny Treningowy Rower z Komputerem\",
    \"price\": 269,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a177/6a04c19f41c19f93f7194cfb8cb3/Rowerek-Stacjonarny-Treningowy-Rower-z-Komputerem\",
    \"desc\": \"Stan: Nowy, Marka: Care Life, Rodzaj: inny, Typ: inny, Maksymalna waga użytkownika: 120 kg\"
  },
  {
    \"name\": \"trenażer magnetyczny CYBER 01 wyświetlacz\",
    \"price\": 299,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a296/1c18ed6a4ee5b1e42de8718290cf/trenazer-magnetyczny-CYBER-01-wyswietlacz\",
    \"desc\": \"Stan: Nowy, Marka: inna, Rodzaj: magnetyczny, Maksymalna waga użytkownika: 120 kg, Waga koła zamachowego: 8 kg\"
  },
  {
    \"name\": \"PISTOLET DO MASAŻU MASAŻER MASSAGE GUN ULTRA 100W\",
    \"price\": 289,
    \"imageURL\": \"https://a.allegroimg.com/s180/116a1d/e70ac7b74d6ab1b3198119171003/PISTOLET-DO-MASAZU-MASAZER-MASSAGE-GUN-ULTRA-100W\",
    \"desc\": \"Stan: Nowy, Marka: 4fizjo\"
  },
  {
    \"name\": \"ŁAWECZKA DO ĆWICZEŃ TRENINGOWA HANTLE NEOSPORT\",
    \"price\": 199.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d443/d069bdd94657815da73ec46d189c/LAWECZKA-DO-CWICZEN-TRENINGOWA-HANTLE-NEOSPORT\",
    \"desc\": \"Stan: Nowy, Marka: Neo-sport, Rodzaj: regulowana, Maksymalna waga użytkownika: 100 kg\"
  },
  {
    \"name\": \"WIOŚLARZ POWIETRZNO MAGNETYCZNY DASH - ZIPRO\",
    \"price\": 2499,
    \"imageURL\": \"https://a.allegroimg.com/s180/03346f/8805ed67465dbd0d5af2896042cb/WIOSLARZ-POWIETRZNO-MAGNETYCZNY-DASH-ZIPRO\",
    \"desc\": \"Stan: Nowy, Marka: Zipro, Maksymalna waga użytkownika: 135 kg, Waga koła zamachowego: 9 kg\"
  },
  {
    \"name\": \"ROWEREK Stacjonarny ROWER TRENINGOWY z Komputerem\",
    \"price\": 299.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11f9bc/2fad5b934bb8af4fa507137a3ad2/ROWEREK-Stacjonarny-ROWER-TRENINGOWY-z-Komputerem\",
    \"desc\": \"Stan: Nowy, Marka: Veovision, Rodzaj: magnetyczny, Typ: pionowy, Maksymalna waga użytkownika: 100 kg, Waga koła zamachowego: 1 kg\"
  },
  {
    \"name\": \"DUŻA MATA DO ĆWICZEŃ JOGI YOGA FITNESS GRUBA\",
    \"price\": 59.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/113d7d/36549f01487ca7c8509bb4cbd6b1/DUZA-MATA-DO-CWICZEN-JOGI-YOGA-FITNESS-GRUBA\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"MATA GIMNASTYCZNA DO ĆWICZEŃ JOGI PILATESU FITNESS\",
    \"price\": 49.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c3e5/0dc158d14d8486adad884764c57d/MATA-GIMNASTYCZNA-DO-CWICZEN-JOGI-PILATESU-FITNESS\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"STEP stepper 2w1 fitness DO AEROBIKU ROAM - Zipro\",
    \"price\": 399,
    \"imageURL\": \"https://a.allegroimg.com/s180/114804/8b1c12ae41d69f39c4547cafaedb/STEP-stepper-2w1-fitness-DO-AEROBIKU-ROAM-Zipro\",
    \"desc\": \"Stan: Nowy, Marka: Zipro, Rodzaj: stepper skrętny z linkami\"
  },
  {
    \"name\": \"ZESTAW 3 GUMY OPOROWE TAŚMY MATERIAŁOWE DO ĆWICZEŃ\",
    \"price\": 27.54,
    \"imageURL\": \"https://a.allegroimg.com/s180/114d75/51f7a6a5481588eadd4523955b9f/ZESTAW-3-GUMY-OPOROWE-TASMY-MATERIALOWE-DO-CWICZEN\",
    \"desc\": \"Stan: Nowy, Marka: 001\"
  },
  {
    \"name\": \"WITAMINY MINERAŁY OLIMP VITA MIN MULTIPLE SPORT 60\",
    \"price\": 68.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/1168bd/0eea47a0457fa4ec4fc227e0b240/WITAMINY-MINERALY-OLIMP-VITA-MIN-MULTIPLE-SPORT-60\",
    \"desc\": \"Składnik dominujący: multiwitaminy, Marka: Olimp, Liczba sztuk w opakowaniu: 60 szt.\"
  },
  {
    \"name\": \"PRZYRZĄD DO ĆWICZEŃ REVOFLEX XTREME wielofunkcyjne\",
    \"price\": 40,
    \"imageURL\": \"https://a.allegroimg.com/s180/11503d/2040808b4f9d8a9282ffd3c414d7/PRZYRZAD-DO-CWICZEN-REVOFLEX-XTREME-wielofunkcyjne\",
    \"desc\": \"Stan: Nowy, Marka: Revolflex Xtrem\"
  },
  {
    \"name\": \"TREC BOOGIEMAN 300g PRZEDTRENINGÓWKA POMPA SIŁA NO\",
    \"price\": 79.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/1190c1/f0d81d674aea800c0a14f99a7497/TREC-BOOGIEMAN-300g-PRZEDTRENINGOWKA-POMPA-SILA-NO\",
    \"desc\": \"Składnik dominujący: produkt wieloskładnikowy, Marka: Trec Nutrition, Działanie: wielozadaniowe, Smak: inny, Waga: 300 g\"
  },
  {
    \"name\": \"STEP DO AEROBIKU ĆWICZEŃ STEPPER FITNESS 3-STOPNIE\",
    \"price\": 94.97,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d43c/416dea7f4061a96a8c569a1f1d67/STEP-DO-AEROBIKU-CWICZEN-STEPPER-FITNESS-3-STOPNIE\",
    \"desc\": \"Stan: Nowy, Marka: 7Sports, Rodzaj: step\"
  },
  {
    \"name\": \"GUMY OPOROWE DO ĆWICZEŃ TRENINGOWE FITNESS-5 SZTUK\",
    \"price\": 19.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/116175/ec71dcb7455ebf7b431bd50885c1/GUMY-OPOROWE-DO-CWICZEN-TRENINGOWE-FITNESS-5-SZTUK\",
    \"desc\": \"Stan: Nowy, Marka: Minexo, Grubość: 1 mm, Opór: 1-25 kg\"
  },
  {
    \"name\": \"BIEŻNIA DOMOWA ELEKTRYCZNA SKŁADANA 1-10 KM/H\",
    \"price\": 999,
    \"imageURL\": \"https://a.allegroimg.com/s180/11bce7/60fd2be94254ae168da95412cf58/BIEZNIA-DOMOWA-ELEKTRYCZNA-SKLADANA-1-10-KM-H\",
    \"desc\": \"Stan: Nowy, Rodzaj: elektryczna, Marka: inna (Walden), Maksymalna waga użytkownika: 100 kg, Liczba programów treningowych: 12, Moc: 1 KM\"
  },
  {
    \"name\": \"GRUBA MATA 1,5CM DO ĆWICZEŃ DUŻA ANTYPOŚLIZGOWA AS\",
    \"price\": 66.89,
    \"imageURL\": \"https://a.allegroimg.com/s180/117644/9c852c314b2fb7d54c9667d449ea/GRUBA-MATA-1-5CM-DO-CWICZEN-DUZA-ANTYPOSLIZGOWA-AS\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"Mega mocny zestaw na szybką masę i siłę\",
    \"price\": 89.5,
    \"imageURL\": \"https://a.allegroimg.com/s180/063baa/21c86f0349c9bcbcb7e0ac29cd4a/Mega-mocny-zestaw-na-szybka-mase-i-sile\",
    \"desc\": \"Rodzaj: inny (suplement), Marka: Bio Age Pharmacy, Smak: naturalny\"
  },
  {
    \"name\": \"LEGALNE STERYDY NA MASĘ MIĘŚNIOWĄ Kompletny Zestaw\",
    \"price\": 194,
    \"imageURL\": \"https://a.allegroimg.com/s180/11853a/b886a8b249909e66b2fc3b501f60/LEGALNE-STERYDY-NA-MASE-MIESNIOWA-Kompletny-Zestaw\",
    \"desc\": \"Rodzaj: monohydrat kreatyny, Marka: Amix, Smak: naturalny, Waga: 190 g\"
  },
  {
    \"name\": \"ŁAWKA ŁAWECZKA DO ĆWICZEŃ TRENINGOWA DIPY\",
    \"price\": 319.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11e6df/24a7df3d43a2bc76e011bb7c20f8/LAWKA-LAWECZKA-DO-CWICZEN-TRENINGOWA-DIPY\",
    \"desc\": \"Stan: Nowy, Marka: Neo-sport, Rodzaj: regulowana, Maksymalna waga użytkownika: 100 kg\"
  },
  {
    \"name\": \"ROWEREK TRENINGOWY rower stacjonarny BEAT RS ZIPRO\",
    \"price\": 619,
    \"imageURL\": \"https://a.allegroimg.com/s180/115c63/508866294a84b985afc12c2c3e6c/ROWEREK-TRENINGOWY-rower-stacjonarny-BEAT-RS-ZIPRO\",
    \"desc\": \"Stan: Nowy, Marka: Zipro, Rodzaj: magnetyczny, Typ: pionowy, Maksymalna waga użytkownika: 120 kg, Waga koła zamachowego: 6 kg\"
  },
  {
    \"name\": \"Rower Treningowy Rowerek Stacjonarny TRIZAND\",
    \"price\": 304.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/117ddb/03bf7a0f4e40b83aa832a4a3380c/Rower-Treningowy-Rowerek-Stacjonarny-TRIZAND\",
    \"desc\": \"Stan: Nowy, Marka: Trizand, Rodzaj: magnetyczny, Typ: pionowy, Maksymalna waga użytkownika: 80 kg, Liczba programów treningowych: 8\"
  },
  {
    \"name\": \"ZESTAW 5 GUM DO ĆWICZEŃ FITNESS MINI BAND TAŚMY\",
    \"price\": 24.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b1ec/f9f811ff4cf091b659918028fa56/ZESTAW-5-GUM-DO-CWICZEN-FITNESS-MINI-BAND-TASMY\",
    \"desc\": \"Stan: Nowy, Marka: FitnessBox\"
  },
  {
    \"name\": \"ROWEREK STACJONARNY rower treningowy Drift - Zipro\",
    \"price\": 599,
    \"imageURL\": \"https://a.allegroimg.com/s180/118c88/d0df53b24efbbea922e42fd21f0c/ROWEREK-STACJONARNY-rower-treningowy-Drift-Zipro\",
    \"desc\": \"Stan: Nowy, Marka: Zipro, Rodzaj: magnetyczny, Typ: pionowy, Maksymalna waga użytkownika: 120 kg, Waga koła zamachowego: 6 kg\"
  },
  {
    \"name\": \"ROWER STACJONARNY treningowy Instinct BW - Zipro\",
    \"price\": 769,
    \"imageURL\": \"https://a.allegroimg.com/s180/114e07/c4fe4ba04f5fb299cd284644992d/ROWER-STACJONARNY-treningowy-Instinct-BW-Zipro\",
    \"desc\": \"Stan: Nowy, Marka: Zipro, Rodzaj: magnetyczny, Typ: pionowy, Maksymalna waga użytkownika: 120 kg, Waga koła zamachowego: 5 kg\"
  },
  {
    \"name\": \"ROWEREK TRENINGOWY rower stacjonarny ONE S - ZIPRO\",
    \"price\": 479,
    \"imageURL\": \"https://a.allegroimg.com/s180/018d7c/0b4d2ef04c45a76973e55c4d5e3a/ROWEREK-TRENINGOWY-rower-stacjonarny-ONE-S-ZIPRO\",
    \"desc\": \"Stan: Nowy, Marka: Zipro, Rodzaj: magnetyczny, Typ: pionowy, Maksymalna waga użytkownika: 110 kg, Waga koła zamachowego: 4.5 kg\"
  },
  {
    \"name\": \"REDIN 100kaps. MOCNY SPALACZ TŁUSZCZU REDUKCJA\",
    \"price\": 149,
    \"imageURL\": \"https://a.allegroimg.com/s180/11eabd/3bb149c54b7eb6050133a28caf8a/REDIN-100kaps-MOCNY-SPALACZ-TLUSZCZU-REDUKCJA\",
    \"desc\": \"Rodzaj: termogeniki, Marka: Redin, Liczba sztuk w opakowaniu: 100 szt.\"
  },
  {
    \"name\": \"ZESTAW 5 GUM OPOROWYCH DO ĆWICZEŃ WYSOKA JAKOŚĆ AS\",
    \"price\": 119.89,
    \"imageURL\": \"https://a.allegroimg.com/s180/1128b9/9b1c44ff47129dcc0e9c77c3520b/ZESTAW-5-GUM-OPOROWYCH-DO-CWICZEN-WYSOKA-JAKOSC-AS\",
    \"desc\": \"Stan: Nowy, Marka: Activ/Space, Opór: 5-75 kg\"
  },
  {
    \"name\": \"GUMY OPOROWE DO ĆWICZEŃ TRENINGOWE FITNESS 5 SZTUK\",
    \"price\": 20,
    \"imageURL\": \"https://a.allegroimg.com/s180/11e791/c41416a44c21b8c02f7744513bcf/GUMY-OPOROWE-DO-CWICZEN-TRENINGOWE-FITNESS-5-SZTUK\",
    \"desc\": \"Stan: Nowy, Marka: inna (MINI BAND), Grubość: 1.1 mm, Opór: 0.5-53 kg\"
  },
  {
    \"name\": \"MATA DO ĆWICZEŃ JOGI ANTYPOŚLIZGOWA FITNESS czarna\",
    \"price\": 59,
    \"imageURL\": \"https://a.allegroimg.com/s180/110369/c199184141f58200643e47e097e9/MATA-DO-CWICZEN-JOGI-ANTYPOSLIZGOWA-FITNESS-czarna\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"HULAHOP ODCHUDZAJĄCE Z WYPUSTKAMI MASAŻEREM PIANKA\",
    \"price\": 29.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/119a18/49a669da449f916111de1fb88bd7/HULAHOP-ODCHUDZAJACE-Z-WYPUSTKAMI-MASAZEREM-PIANKA\",
    \"desc\": \"Stan: Nowy, Marka: inna (Hula hop), Rodzaj: z wypustkami\"
  },
  {
    \"name\": \"HANTLE BITUMICZNE ZESTAW 2x10 KG 20KG REGULOWANE\",
    \"price\": 119.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1157cd/294ef0db4323a7db562e7c8dca2f/HANTLE-BITUMICZNE-ZESTAW-2x10-KG-20KG-REGULOWANE\",
    \"desc\": \"Stan: Nowy, Marka: Sportvida, Waga: 2x 10 kg\"
  },
  {
    \"name\": \"4EVERFIT Półpiłka Trener Równowagi Balans + Linki\",
    \"price\": 169,
    \"imageURL\": \"https://a.allegroimg.com/s180/1109cd/f4289eca4c63a2bd08fd809a229d/4EVERFIT-Polpilka-Trener-Rownowagi-Balans-Linki\",
    \"desc\": \"Stan: Nowy, Marka: 4everfit, Średnica: 63 cm, Maksymalna waga użytkownika: 150 kg\"
  },
  {
    \"name\": \"DRĄŻEK DO ĆWICZEŃ PODCIĄGANIA ŚCIENNY UCHWYT WOREK\",
    \"price\": 75.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1145f2/328025ab47169c04ed4a5fb84b02/DRAZEK-DO-CWICZEN-PODCIAGANIA-SCIENNY-UCHWYT-WOREK\",
    \"desc\": \"Stan: Nowy, Marka: Gotel, Przeznaczenie: do podciągania\"
  },
  {
    \"name\": \"TESTOSTERON + HORMON WZROSTU Zestaw na suchą masę\",
    \"price\": 199,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ab13/5d5062f749c29445857059795be3/TESTOSTERON-HORMON-WZROSTU-Zestaw-na-sucha-mase\",
    \"desc\": \"Rodzaj: wieloskładnikowy, Marka: Amix, Smak: naturalny, Działanie: wielozadaniowe, Liczba sztuk w opakowaniu: 100 szt.\"
  },
  {
    \"name\": \"Monohydrat Kreatyny 400 g Formotiva CREATINE MONO\",
    \"price\": 59.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a77b/7b8d682c46c2a14165f31ece9165/Monohydrat-Kreatyny-400-g-Formotiva-CREATINE-MONO\",
    \"desc\": \"Rodzaj: monohydrat kreatyny, Marka: Formotiva, Smak: grejpfrut\"
  },
  {
    \"name\": \"ORBI-TREK TRENINGOWY MAGNETYCZNY MK-E002\",
    \"price\": 549,
    \"imageURL\": \"https://a.allegroimg.com/s180/114dd2/ab54475e45d0b91bbb5376db878c/ORBI-TREK-TRENINGOWY-MAGNETYCZNY-MK-E002\",
    \"desc\": \"Stan: Nowy, Marka: inna (ACTIM), Rodzaj: magnetyczny, Maksymalna waga użytkownika: 100 kg, Waga koła zamachowego: 4 kg\"
  },
  {
    \"name\": \"SKAKANKA Z ŁOŻYSKAMI CROSSFIT FITNESS BOKSERSKA\",
    \"price\": 14.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11dd51/133168454050b2ba718a51342fe4/SKAKANKA-Z-LOZYSKAMI-CROSSFIT-FITNESS-BOKSERSKA\",
    \"desc\": \"Stan: Nowy, Długość linki: 280 cm\"
  },
  {
    \"name\": \"Activlab Mega Protein 700g KONCENTRAT ODŻYWKA WPC\",
    \"price\": 57.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11564d/0bce7baf47f4aca101d5fe026c67/Activlab-Mega-Protein-700g-KONCENTRAT-ODZYWKA-WPC\",
    \"desc\": \"Rodzaj: koncentrat białka serwatkowego (WPC), Marka: Activlab, Smak: tiramisu, Waga: 700 g\"
  },
  {
    \"name\": \"Zestaw do masażu 3w1 Roller Piłka Duoball\",
    \"price\": 41.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/1103b5/c34b4431410599d6f41f5ebb4ac1/Zestaw-do-masazu-3w1-Roller-Pilka-Duoball\",
    \"desc\": \"Stan: Nowy, Twardość: twarde\"
  },
  {
    \"name\": \"LEGALNE STERYDY NA MASĘ MIĘŚNIOWĄ Kompletny Zestaw\",
    \"price\": 194,
    \"imageURL\": \"https://a.allegroimg.com/s180/11853a/b886a8b249909e66b2fc3b501f60/LEGALNE-STERYDY-NA-MASE-MIESNIOWA-Kompletny-Zestaw\",
    \"desc\": \"Rodzaj: monohydrat kreatyny, Marka: Amix, Smak: naturalny, Waga: 190 g\"
  },
  {
    \"name\": \"BATONY PROTEINOWE tylko 1,7g cukru! 33% białka\",
    \"price\": 89.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d07b/cff6cf8f49809e0e6e5ed038e07e/BATONY-PROTEINOWE-tylko-1-7g-cukru-33-bialka\",
    \"desc\": \"Rodzaj: mieszanka białek zwierzęcych, Marka: Amix, Smak: inny, Waga: 600 g\"
  },
  {
    \"name\": \"Białko BULK Amix Predator Mocny Suplement na mase\",
    \"price\": 129,
    \"imageURL\": \"https://a.allegroimg.com/s180/118cd2/f8a912484447b4a9f3dbbe8141d7/Bialko-BULK-Amix-Predator-Mocny-Suplement-na-mase\",
    \"desc\": \"Rodzaj: koncentrat białka serwatkowego (WPC), Marka: Amix, Smak: truskawkowy, Waga: 1000 g\"
  },
  {
    \"name\": \"Hula hop składane z obciążeniem odchudzające stal\",
    \"price\": 20,
    \"imageURL\": \"https://a.allegroimg.com/s180/11e0e9/ec6a16604a7b87606eb6837996a8/Hula-hop-skladane-z-obciazeniem-odchudzajace-stal\",
    \"desc\": \"Stan: Nowy, Marka: Bestif, Rodzaj: z wypustkami\"
  },
  {
    \"name\": \"SZCZELNY SHAKER DO ODŻYWEK SOLIDNY SZEJKER 500 ml\",
    \"price\": 49.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/118bb2/287470ff43bd8a5ce5498f62fbe0/SZCZELNY-SHAKER-DO-ODZYWEK-SOLIDNY-SZEJKER-500-ml\",
    \"desc\": \"Stan: Nowy, Pojemność: 500 ml, Marka: BergHOFF\"
  },
  {
    \"name\": \"WITAMINY MINERAŁY OLIMP VITA MIN MULTIPLE SPORT 60\",
    \"price\": 68.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/1168bd/0eea47a0457fa4ec4fc227e0b240/WITAMINY-MINERALY-OLIMP-VITA-MIN-MULTIPLE-SPORT-60\",
    \"desc\": \"Składnik dominujący: multiwitaminy, Marka: Olimp, Liczba sztuk w opakowaniu: 60 szt.\"
  },
  {
    \"name\": \"ROWER MAGNETYCZNY rowerek treningowy One S - ZIPRO\",
    \"price\": 479,
    \"imageURL\": \"https://a.allegroimg.com/s180/117ecf/92f39a494ec5b6e5b9fa6090a1b4/ROWER-MAGNETYCZNY-rowerek-treningowy-One-S-ZIPRO\",
    \"desc\": \"Stan: Nowy, Marka: Zipro, Rodzaj: magnetyczny, Typ: pionowy, Maksymalna waga użytkownika: 110 kg, Waga koła zamachowego: 4.5 kg\"
  },
  {
    \"name\": \"SPALACZ TŁUSZCZU Z BRZUCHA BURN FAT BLOKER APETYTU\",
    \"price\": 90.15,
    \"imageURL\": \"https://a.allegroimg.com/s180/113b8e/ea61e78f45e0ad80776a2d95c3ca/SPALACZ-TLUSZCZU-Z-BRZUCHA-BURN-FAT-BLOKER-APETYTU\",
    \"desc\": \"Rodzaj: wielozadaniowe, Marka: FITALL, Liczba sztuk w opakowaniu: 90 szt.\"
  },
  {
    \"name\": \"ELEKTROSTYMULATOR STYMULATOR MIĘŚNI BRZUCHA 3x EMS\",
    \"price\": 109.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1119f2/8f34e8654db587283cd40b92e1fc/ELEKTROSTYMULATOR-STYMULATOR-MIESNI-BRZUCHA-3x-EMS\",
    \"desc\": \"Stan: Nowy, Rozmiar: uniwersalny\"
  }
]`);

const c = gifts as BaseGift[];

export default c;
