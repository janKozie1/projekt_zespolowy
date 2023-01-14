import type { BaseGift } from '../gifts';

const gifts: unknown = JSON.parse(`[
  {
    \"name\": \"PSP + SUPER ZESTAW GRY -GTA ,ŁAD -,MARIO\",
    \"price\": 539.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/03a84b/965a767647ffa606add77e0f0869/PSP-SUPER-ZESTAW-GRY-GTA-LAD-MARIO\",
    \"desc\": \"Stan: Używany, Wersja konsoli: PSP Go\"
  },
  {
    \"name\": \"KONSOLA PRZENOŚNA DO GIER X12 1000 GIER RETRO MINI\",
    \"price\": 699.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/117e4c/dbd02a514824b70782eb7408be3e/KONSOLA-PRZENOSNA-DO-GIER-X12-1000-GIER-RETRO-MINI\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"MEGA ZESTAW -Ps3 Slim GB + Pady +ZESTAW GIER\",
    \"price\": 497.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/113889/cb0815164a82b9ed88868c4965ce/MEGA-ZESTAW-Ps3-Slim-GB-Pady-ZESTAW-GIER\",
    \"desc\": \"Stan: Używany, Kolor: czarny, Wersja konsoli: Slim, Dysk / wbudowana pamięć: 320 GB\"
  },
  {
    \"name\": \"XBOX ONE S 1TB ALL DIGITAL + PAD - ZESTAW SKLEP !\",
    \"price\": 939,
    \"imageURL\": \"https://a.allegroimg.com/s180/03677c/32370327418193a36c4dce77e714/XBOX-ONE-S-1TB-ALL-DIGITAL-PAD-ZESTAW-SKLEP\",
    \"desc\": \"Stan: Używany, Kolor: biały, Wersja konsoli: Xbox One S All-Digital Edition, Dysk / wbudowana pamięć: 1 TB\"
  },
  {
    \"name\": \"GRA TELEWIZYJNA KONSOLA RETRO + 2 PADY + 3000 GRY\",
    \"price\": 218.4,
    \"imageURL\": \"https://a.allegroimg.com/s180/1181fc/c07dc1984a05ae23339682a95efe/GRA-TELEWIZYJNA-KONSOLA-RETRO-2-PADY-3000-GRY\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"Konsola Sony PlayStation 4 Ps4 500GB + PAD x2\",
    \"price\": 1199,
    \"imageURL\": \"https://a.allegroimg.com/s180/1167b1/82c84677443ea7721b86549de30b/Konsola-Sony-PlayStation-4-Ps4-500GB-PAD-x2\",
    \"desc\": \"Stan: Używany, Kolor: czarny, Wersja: PlayStation 4, Dysk / wbudowana pamięć: 500 GB\"
  },
  {
    \"name\": \"Konsola Xbox Series X 1TB\",
    \"price\": 2499,
    \"imageURL\": \"https://a.allegroimg.com/s180/11030f/ba19717b41d3a6dad74720e516df/Konsola-Xbox-Series-X-1TB\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"KONSOLA GRA TELEWIZYJNA 8-BIT HDMI 621 GIER 2X PAD\",
    \"price\": 69.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/116b37/c461cb4242d881530f63880ebe03/KONSOLA-GRA-TELEWIZYJNA-8-BIT-HDMI-621-GIER-2X-PAD\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"PLAYSTATION 2 SLIM + 2 PADY + ZESTAW GIER\",
    \"price\": 379,
    \"imageURL\": \"https://a.allegroimg.com/s180/11656c/7d44c3ea47beb00a5f562e169933/PLAYSTATION-2-SLIM-2-PADY-ZESTAW-GIER\",
    \"desc\": \"Stan: Używany, Wersja: Slim\"
  },
  {
    \"name\": \"MICROSOFT XBOX ONE S 500GB 4K HDR - ZESTAW SKLEP !\",
    \"price\": 849,
    \"imageURL\": \"https://a.allegroimg.com/s180/031049/644dee06412c9350f9a7721c39e6/MICROSOFT-XBOX-ONE-S-500GB-4K-HDR-ZESTAW-SKLEP\",
    \"desc\": \"Stan: Używany, Kolor: biały, Wersja konsoli: Xbox One S, Dysk / wbudowana pamięć: 500 GB\"
  },
  {
    \"name\": \"Konsola Xbox One S 500 GB + 2 Pady + Okablowanie !\",
    \"price\": 1099,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d5bc/ebe6158b45e98a22f981fefe6091/Konsola-Xbox-One-S-500-GB-2-Pady-Okablowanie\",
    \"desc\": \"Stan: Używany, Kolor: biały, Wersja konsoli: Xbox One S, Dysk / wbudowana pamięć: 500 GB\"
  },
  {
    \"name\": \"PRZENOŚNA MINI KONSOLA RETRO 400 GIER GAMEBOY GRA\",
    \"price\": 48.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11857f/c3b6ebb9465d9105f9e507374020/PRZENOSNA-MINI-KONSOLA-RETRO-400-GIER-GAMEBOY-GRA\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"Konsola Nintendo Switch 32GB czerwono-niebieska V2\",
    \"price\": 1399,
    \"imageURL\": \"https://a.allegroimg.com/s180/25ab3e/5a69c3094b978966d337f23cbdeb/Konsola-Nintendo-Switch-32GB-czerwono-niebieska-V2\",
    \"desc\": \"Stan: Nowy, Wersja: Switch, Liczba kontrolerów w zestawie: 2\"
  },
  {
    \"name\": \"KONSOLA DO GIER PEGAZUS RETRO 2 PADY 2000 gier\",
    \"price\": 49.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1199f6/257ced7a49209ea21002a6c62fe0/KONSOLA-DO-GIER-PEGAZUS-RETRO-2-PADY-2000-gier\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"Konsola Sony PlayStation 4 pro 1 TB czarny/GRA\",
    \"price\": 1499,
    \"imageURL\": \"https://a.allegroimg.com/s180/118b39/ccc35faa425da29b16af9aeddb42/Konsola-Sony-PlayStation-4-pro-1-TB-czarny-GRA\",
    \"desc\": \"Stan: Używany, Kolor: czarny, Wersja: PlayStation 4 pro, Dysk / wbudowana pamięć: 1 TB\"
  },
  {
    \"name\": \"KONSOLA TELEWIZYJNA PEGASUS + 499 UNIKALNYCH GIER\",
    \"price\": 78.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1189ec/ef9d2b9e45418df0a6423334cc32/KONSOLA-TELEWIZYJNA-PEGASUS-499-UNIKALNYCH-GIER\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"KONSOLA MINI RETRO 400 GIER GRA PRZENOŚNA GAME BOX\",
    \"price\": 39.95,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c848/51874f8847af940208184608c4aa/KONSOLA-MINI-RETRO-400-GIER-GRA-PRZENOSNA-GAME-BOX\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"KONSOLA PRZENOŚNA DO GIER X7 1000 GIER RETRO MINI\",
    \"price\": 229.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/117157/7c488f514ad7bbd7cda1639dbc16/KONSOLA-PRZENOSNA-DO-GIER-X7-1000-GIER-RETRO-MINI\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"SONY PS4 PRO 1TB KOMPLET//GWARANCJA //IDEAL\",
    \"price\": 1499,
    \"imageURL\": \"https://a.allegroimg.com/s180/03ef47/27af0e19452fabfb88ee264fa4c9/SONY-PS4-PRO-1TB-KOMPLET-GWARANCJA-IDEAL\",
    \"desc\": \"Stan: Używany, Kolor: czarny, Wersja: PlayStation 4 pro, Dysk / wbudowana pamięć: 1 TB\"
  },
  {
    \"name\": \"Ps2 SLIM NAJNOWSZY MODEL+ 2 PADY + GRY\",
    \"price\": 369.77,
    \"imageURL\": \"https://a.allegroimg.com/s180/1120c9/844a3e54415ca66b4148d20ea22b/Ps2-SLIM-NAJNOWSZY-MODEL-2-PADY-GRY\",
    \"desc\": \"Stan: Używany, Wersja: Slim\"
  },
  {
    \"name\": \"GRA TELEWIZYJNA KONSOLA RETRO TV + PISTOLET\",
    \"price\": 49.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/118f5c/7280be1545359ce7e725b88ce498/GRA-TELEWIZYJNA-KONSOLA-RETRO-TV-PISTOLET\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"Konsola PlayStation 3 PS3 500GB+2PADY+2MOVE+5GIER\",
    \"price\": 1199,
    \"imageURL\": \"https://a.allegroimg.com/s180/119c78/ce0bd84d4d01ae9e7e29d8fdfc66/Konsola-PlayStation-3-PS3-500GB-2PADY-2MOVE-5GIER\",
    \"desc\": \"Stan: Powystawowy, Kolor: czarny, Wersja konsoli: Super Slim, Dysk / wbudowana pamięć: 500 GB\"
  },
  {
    \"name\": \"KONSOLA RETRO GRA TELEWIZYJNA + PISTOLET GRY MARIO\",
    \"price\": 59,
    \"imageURL\": \"https://a.allegroimg.com/s180/118e10/947130224c649347de79989876b1/KONSOLA-RETRO-GRA-TELEWIZYJNA-PISTOLET-GRY-MARIO\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"PRZENOŚNA KONSOLA MINI RETRO 400 GAMEBOY GRA\",
    \"price\": 45,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a584/bf8f098b4a3285333db5ee0e50ef/PRZENOSNA-KONSOLA-MINI-RETRO-400-GAMEBOY-GRA\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"GRA TELEWIZYJNA KONSOLA RETRO + 2 PADY\",
    \"price\": 217.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/117ff6/77162ed5441eac9420e59f5d3844/GRA-TELEWIZYJNA-KONSOLA-RETRO-2-PADY\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"Najnowsza SONY PS5 Playstation 5 ||Digital Edition\",
    \"price\": 2819,
    \"imageURL\": \"https://a.allegroimg.com/s180/118fc4/67abd223408daa883b691635163e/Najnowsza-SONY-PS5-Playstation-5-Digital-Edition\",
    \"desc\": \"Stan: Używany, Wersja: PlayStation 5 Digital Edition\"
  },
  {
    \"name\": \"X7 PLUS przenośna konsola do gier retro + prezent\",
    \"price\": 238.89,
    \"imageURL\": \"https://a.allegroimg.com/s180/1101cf/ebc9ff3d4096ad54da09f125a9b6/X7-PLUS-przenosna-konsola-do-gier-retro-prezent\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"SONY PSP STREET + KARTA PAMIĘCI + GRA\",
    \"price\": 389,
    \"imageURL\": \"https://a.allegroimg.com/s180/032383/619d0e1648c6b1c78ac752bf74fa/SONY-PSP-STREET-KARTA-PAMIECI-GRA\",
    \"desc\": \"Stan: Używany, Wersja konsoli: Slim\"
  },
  {
    \"name\": \"KONSOLA XBOX SERIES S\",
    \"price\": 1439.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/117b8e/98e480d642d79762d6cb7fdd641d/KONSOLA-XBOX-SERIES-S\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"MICROSOFT XBOX ONE 500GB + PAD + ZESTAW GIER SKLEP\",
    \"price\": 699,
    \"imageURL\": \"https://a.allegroimg.com/s180/0311c8/5a0bc9d844578c73016457d3d59d/MICROSOFT-XBOX-ONE-500GB-PAD-ZESTAW-GIER-SKLEP\",
    \"desc\": \"Stan: Używany, Kolor: czarny, Wersja konsoli: Xbox One, Dysk / wbudowana pamięć: 500 GB\"
  },
  {
    \"name\": \"Sony PlayStation 4 pro 1 TB 2x PAD PS4 ZESTAW\",
    \"price\": 1699,
    \"imageURL\": \"https://a.allegroimg.com/s180/116879/8310e03b4528bf4f492b830a61eb/Sony-PlayStation-4-pro-1-TB-2x-PAD-PS4-ZESTAW\",
    \"desc\": \"Stan: Używany, Kolor: czarny, Wersja: PlayStation 4 pro, Dysk / wbudowana pamięć: 1 TB\"
  },
  {
    \"name\": \"KONSOLA PRZENOŚNA DO GIER X12 1000 GIER RETRO MINI\",
    \"price\": 239,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b304/ec3e19cd42e6b2495ea9a97e17a7/KONSOLA-PRZENOSNA-DO-GIER-X12-1000-GIER-RETRO-MINI\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"GRA TELEWIZYJNA KONSOLA RETRO + 2 PADY ANDROID TV\",
    \"price\": 299,
    \"imageURL\": \"https://a.allegroimg.com/s180/113ef7/b4378c2248059aa10277462ac784/GRA-TELEWIZYJNA-KONSOLA-RETRO-2-PADY-ANDROID-TV\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"Konsola Nintendo Switch Lite Turkusowa\",
    \"price\": 879,
    \"imageURL\": \"https://a.allegroimg.com/s180/1149f0/80784fd4492f933fe8440a2e236b/Konsola-Nintendo-Switch-Lite-Turkusowa\",
    \"desc\": \"Stan: Nowy, Wersja: Switch Lite, Liczba kontrolerów w zestawie: brak\"
  },
  {
    \"name\": \"MINI KONSOLA GIER RETRO 400 GIER 3'' + PAD\",
    \"price\": 47.49,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c8b1/19e16c0641739727c0cd6789e3b5/MINI-KONSOLA-GIER-RETRO-400-GIER-3-PAD\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"Konsola Microsoft Xbox Series S 512GB\",
    \"price\": 1399,
    \"imageURL\": \"https://a.allegroimg.com/s180/25d066/ee049ce74f0d8d2eda90b10f0925/Konsola-Microsoft-Xbox-Series-S-512GB\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"KONSOLA PEGASUS GRA TELEWIZYJNA GRA VIDEO MARIO\",
    \"price\": 39.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/119c7b/acc992894da3bb7ebe7a2096e781/KONSOLA-PEGASUS-GRA-TELEWIZYJNA-GRA-VIDEO-MARIO\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"Konsola Sony Playstation 3 Slim 320 GB 2 Pady Gry\",
    \"price\": 399,
    \"imageURL\": \"https://a.allegroimg.com/s180/114cf4/89261086483fa388129ba144ed7d/Konsola-Sony-Playstation-3-Slim-320-GB-2-Pady-Gry\",
    \"desc\": \"Stan: Używany, Kolor: czarny, Wersja konsoli: Slim, Dysk / wbudowana pamięć: 320 GB\"
  },
  {
    \"name\": \"Konsola Xbox Series S 512 GB + 2x kontroler\",
    \"price\": 1669,
    \"imageURL\": \"https://a.allegroimg.com/s180/113cb1/2481ebbc4966a84c305ecaeff20b/Konsola-Xbox-Series-S-512-GB-2x-kontroler\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"Konsola Sony PlayStation 4 Ps4 500GB + PAD x2\",
    \"price\": 1199,
    \"imageURL\": \"https://a.allegroimg.com/s180/1167b1/82c84677443ea7721b86549de30b/Konsola-Sony-PlayStation-4-Ps4-500GB-PAD-x2\",
    \"desc\": \"Stan: Używany, Kolor: czarny, Wersja: PlayStation 4, Dysk / wbudowana pamięć: 500 GB\"
  },
  {
    \"name\": \"Konsola Sony PlayStation 4 slim 1TB + 5x GRA\",
    \"price\": 1299,
    \"imageURL\": \"https://a.allegroimg.com/s180/1190c0/37eaaee0423f942c731a064f7771/Konsola-Sony-PlayStation-4-slim-1TB-5x-GRA\",
    \"desc\": \"Stan: Używany, Kolor: czarny, Wersja: PlayStation 4 slim, Dysk / wbudowana pamięć: 1 TB\"
  },
  {
    \"name\": \"NINTENDO SWITCH RED&BLUE 32GB - ZESTAW SKLEP !\",
    \"price\": 1249,
    \"imageURL\": \"https://a.allegroimg.com/s180/11db96/49da52cb4841a480956f7cc90f4d/NINTENDO-SWITCH-RED-BLUE-32GB-ZESTAW-SKLEP\",
    \"desc\": \"Stan: Używany, Wersja: Switch, Liczba kontrolerów w zestawie: 2\"
  },
  {
    \"name\": \"BEZPRZEWODOWA KONSOLA RETRO 628 GIER HDMI FULL HD\",
    \"price\": 149,
    \"imageURL\": \"https://a.allegroimg.com/s180/1163c8/0cd16ed340a793b732ce5943600d/BEZPRZEWODOWA-KONSOLA-RETRO-628-GIER-HDMI-FULL-HD\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"MICROSOFT XBOX ONE 500GB + KINECT - ZESTAW SKLEP !\",
    \"price\": 999,
    \"imageURL\": \"https://a.allegroimg.com/s180/1162ce/b67deedd4fac9eab7233731df9d5/MICROSOFT-XBOX-ONE-500GB-KINECT-ZESTAW-SKLEP\",
    \"desc\": \"Stan: Używany, Kolor: czarny, Wersja konsoli: Xbox One, Dysk / wbudowana pamięć: 500 GB\"
  },
  {
    \"name\": \"KONSOLA PLAYSTATION 4 PS4 SLIM + PAD 500GB\",
    \"price\": 1049,
    \"imageURL\": \"https://a.allegroimg.com/s180/111ed8/b9b75424428b983fd97441e73455/KONSOLA-PLAYSTATION-4-PS4-SLIM-PAD-500GB\",
    \"desc\": \"Stan: Używany, Kolor: czarny, Wersja: PlayStation 4 slim, Dysk / wbudowana pamięć: 500 GB\"
  },
  {
    \"name\": \"KONSOLA NINTENDO SWITCH 32GB - ZESTAW\",
    \"price\": 1495,
    \"imageURL\": \"https://a.allegroimg.com/s180/115e54/7b527ab748a38f303dd8064e769d/KONSOLA-NINTENDO-SWITCH-32GB-ZESTAW\",
    \"desc\": \"Stan: Używany, Wersja: Switch, Liczba kontrolerów w zestawie: 2\"
  },
  {
    \"name\": \"MICROSOFT XBOX SERIES X 1TB + PAD - KOMPLET SKLEP\",
    \"price\": 2199,
    \"imageURL\": \"https://a.allegroimg.com/s180/11e1c9/7c264ee34c4fad3d0ea525b563c1/MICROSOFT-XBOX-SERIES-X-1TB-PAD-KOMPLET-SKLEP\",
    \"desc\": \"Stan: Używany\"
  },
  {
    \"name\": \"KONSOLA MINI PROJEKTOR RETRO PAD GRY ALL IN ONE\",
    \"price\": 259,
    \"imageURL\": \"https://a.allegroimg.com/s180/1123c3/9fcb94a54fbeaed488acf81c4ed8/KONSOLA-MINI-PROJEKTOR-RETRO-PAD-GRY-ALL-IN-ONE\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"Microsoft XBOX ONE X 1TB 4K HDR - KOMPLET + PAD !\",
    \"price\": 1349,
    \"imageURL\": \"https://a.allegroimg.com/s180/03cb27/14fc3d3c45b6b68d1115fcf21607/Microsoft-XBOX-ONE-X-1TB-4K-HDR-KOMPLET-PAD\",
    \"desc\": \"Stan: Używany, Kolor: czarny, Wersja konsoli: Xbox One X, Dysk / wbudowana pamięć: 1 TB\"
  },
  {
    \"name\": \"SONY PLAYSTATION 4 500GB JET BLACK - PAD - ZESTAW\",
    \"price\": 999,
    \"imageURL\": \"https://a.allegroimg.com/s180/032554/97403ec84d74932416b724717b82/SONY-PLAYSTATION-4-500GB-JET-BLACK-PAD-ZESTAW\",
    \"desc\": \"Stan: Używany, Kolor: czarny, Wersja: PlayStation 4, Dysk / wbudowana pamięć: 500 GB\"
  },
  {
    \"name\": \"Najnowsza SONY PS5 Playstation 5 ||Digital Edition\",
    \"price\": 2899,
    \"imageURL\": \"https://a.allegroimg.com/s180/118fc4/67abd223408daa883b691635163e/Najnowsza-SONY-PS5-Playstation-5-Digital-Edition\",
    \"desc\": \"Stan: Po zwrocie, Wersja: PlayStation 5 Digital Edition\"
  },
  {
    \"name\": \"KONSOLA SONY PLAYSTATION 4 PS4 SLIM 500GB\",
    \"price\": 1029,
    \"imageURL\": \"https://a.allegroimg.com/s180/117f8f/683eb6d44796a96390cac01fa823/KONSOLA-SONY-PLAYSTATION-4-PS4-SLIM-500GB\",
    \"desc\": \"Stan: Używany, Kolor: czarny, Wersja: PlayStation 4 slim, Dysk / wbudowana pamięć: 500 GB\"
  },
  {
    \"name\": \"Najnowszy MICROSOFT XBOX Series S ||Najmniejszy\",
    \"price\": 1099,
    \"imageURL\": \"https://a.allegroimg.com/s180/11110c/44a89b6c4e9188f78a8d0c7da104/Najnowszy-MICROSOFT-XBOX-Series-S-Najmniejszy\",
    \"desc\": \"Stan: Używany\"
  },
  {
    \"name\": \"BEZPRZEWODOWA KONSOLA RETRO HDMI 2 PADY 30T+ GIER\",
    \"price\": 299,
    \"imageURL\": \"https://a.allegroimg.com/s180/11240c/a18512f645e097bfea7cc77f4c38/BEZPRZEWODOWA-KONSOLA-RETRO-HDMI-2-PADY-30T-GIER\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"ZESTAW XBOX 360 SLIM 250 gb +2xPAD+GRY+HDMI KINECT\",
    \"price\": 599,
    \"imageURL\": \"https://a.allegroimg.com/s180/110cb1/b646661d4be8b28be007e97dfbe1/ZESTAW-XBOX-360-SLIM-250-gb-2xPAD-GRY-HDMI-KINECT\",
    \"desc\": \"Stan: Używany, Kolor: czarny, Wersja konsoli: Xbox 360 E, Dysk / wbudowana pamięć: 250 GB\"
  },
  {
    \"name\": \"KONSOLA PRZENOŚNA GIERKA MARIO RETRO GAMEBOY\",
    \"price\": 88,
    \"imageURL\": \"https://a.allegroimg.com/s180/11f894/de8fdaec41719e058da267eaf02e/KONSOLA-PRZENOSNA-GIERKA-MARIO-RETRO-GAMEBOY\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"KONSOLA SONY PLAYSTATION 4 PS4 SLIM 1TB 1x PAD\",
    \"price\": 1899,
    \"imageURL\": \"https://a.allegroimg.com/s180/117f8f/683eb6d44796a96390cac01fa823/KONSOLA-SONY-PLAYSTATION-4-PS4-SLIM-1TB-1x-PAD\",
    \"desc\": \"Stan: Nowy, Kolor: czarny, Wersja: PlayStation 4 slim, Dysk / wbudowana pamięć: 1 TB\"
  },
  {
    \"name\": \"KONSOLA XBOX SERIES X\",
    \"price\": 2499,
    \"imageURL\": \"https://a.allegroimg.com/s180/11fb52/8cd9c6f24c45afc2d2f02f088961/KONSOLA-XBOX-SERIES-X\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"PlayStation 5 + 2xPAD+5GIER +PILOT+SŁUCHAWKI+90PSN\",
    \"price\": 5599,
    \"imageURL\": \"https://a.allegroimg.com/s180/11058a/769884be40ce933b804220799dd2/PlayStation-5-2xPAD-5GIER-PILOT-SLUCHAWKI-90PSN\",
    \"desc\": \"Stan: Nowy, Wersja: PlayStation 5\"
  },
  {
    \"name\": \"KONSOLA RETRO GRA TELEWIZYJNA + PISTOLET PADY +GRY\",
    \"price\": 48.85,
    \"imageURL\": \"https://a.allegroimg.com/s180/11325e/7dfbbba9458fa206ed610e49a926/KONSOLA-RETRO-GRA-TELEWIZYJNA-PISTOLET-PADY-GRY\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"GRA TELEWIZYJNA KONSOLA RETRO GRY EMULATOR 2 PADY\",
    \"price\": 218.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c99e/87eada374109ab12f6677d33b8d0/GRA-TELEWIZYJNA-KONSOLA-RETRO-GRY-EMULATOR-2-PADY\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"KONSOLA SONY PS3 SLIM 320GB + GRY + 2 PADY\",
    \"price\": 598,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ea22/04fae60145ba934bffbedf87fb67/KONSOLA-SONY-PS3-SLIM-320GB-GRY-2-PADY\",
    \"desc\": \"Stan: Używany, Kolor: czarny, Wersja konsoli: Slim, Dysk / wbudowana pamięć: 320 GB\"
  },
  {
    \"name\": \"SONY PS4 SLIM1TB ZESTAW 2xPAD V2 NOWY MODEL\",
    \"price\": 1379,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c13f/f313ff3342c5a8c182cbcb1ff17d/SONY-PS4-SLIM1TB-ZESTAW-2xPAD-V2-NOWY-MODEL\",
    \"desc\": \"Stan: Używany, Kolor: czarny, Wersja: PlayStation 4 slim, Dysk / wbudowana pamięć: 1 TB\"
  },
  {
    \"name\": \"BEZPRZEWODOWA KONSOLA RETRO HDMI 2 PADY 900+ GIER\",
    \"price\": 175.75,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ab14/431f3353482c84a21a021fd79d5a/BEZPRZEWODOWA-KONSOLA-RETRO-HDMI-2-PADY-900-GIER\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"BEZPRZEWODOWA KONSOLA RETRO HDMI 2 PADY 10T+ GIER\",
    \"price\": 207,
    \"imageURL\": \"https://a.allegroimg.com/s180/11642d/2584c67c4b0dbf8987fe351b730b/BEZPRZEWODOWA-KONSOLA-RETRO-HDMI-2-PADY-10T-GIER\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"PRZENOŚNA KONSOLA MINI RETRO 400 GAMEBOY GRA\",
    \"price\": 45,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a584/bf8f098b4a3285333db5ee0e50ef/PRZENOSNA-KONSOLA-MINI-RETRO-400-GAMEBOY-GRA\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"KONSOLA PLAYSTATION 4 PS4 500GB + PAD - KOMPLET\",
    \"price\": 999.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ba6d/7aab0304423889738b05d97fcba1/KONSOLA-PLAYSTATION-4-PS4-500GB-PAD-KOMPLET\",
    \"desc\": \"Stan: Używany, Kolor: czarny, Wersja: PlayStation 4, Dysk / wbudowana pamięć: 500 GB\"
  },
  {
    \"name\": \"KONSOLA PLAYSTATION 4 PS4 1000GB 1TB + 2x PAD\",
    \"price\": 1329.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d7b0/9f6262384f928caa38d537a7857c/KONSOLA-PLAYSTATION-4-PS4-1000GB-1TB-2x-PAD\",
    \"desc\": \"Stan: Używany, Kolor: czarny, Wersja: PlayStation 4, Dysk / wbudowana pamięć: 1 TB\"
  },
  {
    \"name\": \"BEZPRZEWODOWA KONSOLA RETRO HDMI 2 PADY 30T+ GIER\",
    \"price\": 299,
    \"imageURL\": \"https://a.allegroimg.com/s180/11240c/a18512f645e097bfea7cc77f4c38/BEZPRZEWODOWA-KONSOLA-RETRO-HDMI-2-PADY-30T-GIER\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"GRA TELEWIZYJNA KONSOLA RETRO + 2 PADY ANDROID TV\",
    \"price\": 299,
    \"imageURL\": \"https://a.allegroimg.com/s180/113ef7/b4378c2248059aa10277462ac784/GRA-TELEWIZYJNA-KONSOLA-RETRO-2-PADY-ANDROID-TV\",
    \"desc\": \"Stan: Nowy\"
  }
]`);

const c = gifts as BaseGift[];

export default c;
