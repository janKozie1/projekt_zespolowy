import type { BaseGift } from '../gifts';

const gifts: unknown = JSON.parse(`[
  {
    \"name\": \"PŁYTA INDUKCYJNA ELECTROLUX EIV63443 CleverHeat\",
    \"price\": 1649,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b0b5/11ae125f49448815dbd103b55146/PLYTA-INDUKCYJNA-ELECTROLUX-EIV63443-CleverHeat\",
    \"desc\": \"Szerokość produktu: 59 cm, Liczba pól grzewczych: 4, Sterowanie: panel dotykowy\"
  },
  {
    \"name\": \"Piekarnik Samsung NV 75A6649RK 75l DualCook Flex\",
    \"price\": 2899,
    \"imageURL\": \"https://a.allegroimg.com/s180/11699e/1150d09644d18779e94f1711ddf6/Piekarnik-Samsung-NV-75A6649RK-75l-DualCook-Flex\",
    \"desc\": \"Pojemność: 75 l, Rodzaj piekarnika: elektryczny, Klasa efektywności energetycznej: A+\"
  },
  {
    \"name\": \"Zestaw Samsung Piekarnik Płyta indukcyjna Czarny\",
    \"price\": 2999,
    \"imageURL\": \"https://a.allegroimg.com/s180/114982/60ad5c4f4f17a0b5afd8a97367dc/Zestaw-Samsung-Piekarnik-Plyta-indukcyjna-Czarny\",
    \"desc\": \"Szerokość produktu: 60 cm, Liczba pól grzewczych: 4, Sterowanie: panel dotykowy\"
  },
  {
    \"name\": \"Płyta indukcyjna do zabudowy Gorenje (1258,1259)\",
    \"price\": 699,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d8d0/f67699b04862b791df1c8c27b6a4/Plyta-indukcyjna-do-zabudowy-Gorenje-1258-1259\",
    \"desc\": \"Szerokość produktu: 59.5 cm, Liczba pól grzewczych: 4, Sterowanie: panel dotykowy\"
  },
  {
    \"name\": \"PŁYTA INDUKCYJNA ELECTROLUX EIV63443 CleverHeat\",
    \"price\": 1649,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b0b5/11ae125f49448815dbd103b55146/PLYTA-INDUKCYJNA-ELECTROLUX-EIV63443-CleverHeat\",
    \"desc\": \"Szerokość produktu: 59 cm, Liczba pól grzewczych: 4, Sterowanie: panel dotykowy\"
  },
  {
    \"name\": \"Zmywarka Hoover HDIH 2T1045 45cm A++ 11 kpl 9l\",
    \"price\": 1194,
    \"imageURL\": \"https://a.allegroimg.com/s180/119ec2/5b400239479d8d11699afe63dbd1/Zmywarka-Hoover-HDIH-2T1045-45cm-A-11-kpl-9l\",
    \"desc\": \"Pojemność: 10 kompletów, Szerokość produktu: 45 cm, Sterowanie: elektroniczne\"
  },
  {
    \"name\": \"MD37531 15 kpl 9 Prog A+++ Dokładna i oszczędna\",
    \"price\": 849,
    \"imageURL\": \"https://a.allegroimg.com/s180/115c57/8cec1d4a4ebd82410693867c0d00/MD37531-15-kpl-9-Prog-A-Dokladna-i-oszczedna\",
    \"desc\": \"Pojemność: 15 kompletów, Szerokość produktu: 59.8 cm, Sterowanie: elektroniczne\"
  },
  {
    \"name\": \"Piekarnik Candy FCT600N WIFI czarny\",
    \"price\": 739,
    \"imageURL\": \"https://a.allegroimg.com/s180/1189b6/716aed2b4a7eb511306cc620b52f/Piekarnik-Candy-FCT600N-WIFI-czarny\",
    \"desc\": \"Pojemność: 65 l, Rodzaj piekarnika: elektryczny, Klasa efektywności energetycznej: A+\"
  },
  {
    \"name\": \"Zmywarka do zabudowy Beko DIN35320 60 cm 13kpl\",
    \"price\": 1133,
    \"imageURL\": \"https://a.allegroimg.com/s180/112511/52bb42e04d209f71cfde97536058/Zmywarka-do-zabudowy-Beko-DIN35320-60-cm-13kpl\",
    \"desc\": \"Pojemność: 13 kompletów, Szerokość produktu: 59.8 cm, Sterowanie: elektroniczne\"
  },
  {
    \"name\": \"Piekarnik BOSCH HBA534EB0\",
    \"price\": 1519,
    \"imageURL\": \"https://a.allegroimg.com/s180/1167d2/82bfd8d247169cbd76dd0f21f084/Piekarnik-BOSCH-HBA534EB0\",
    \"desc\": \"Pojemność: 71 l, Rodzaj piekarnika: elektryczny, Klasa efektywności energetycznej: A\"
  },
  {
    \"name\": \"BOSCH Zmywarka SPV6YMX11E\",
    \"price\": 3288,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c9cf/9bc6aff641f78d34ed8f7e649e68/BOSCH-Zmywarka-SPV6YMX11E\",
    \"desc\": \"Pojemność: 10 kompletów, Szerokość produktu: 45 cm, Sterowanie: elektroniczne\"
  },
  {
    \"name\": \"PIEKARNIK BEKO BIE2430B /termoobieg/czarny\",
    \"price\": 797,
    \"imageURL\": \"https://a.allegroimg.com/s180/113b6c/382b8f8a4aabbf18b4ad197ecc0e/PIEKARNIK-BEKO-BIE2430B-termoobieg-czarny\",
    \"desc\": \"Pojemność: 71 l, Rodzaj piekarnika: elektryczny, Klasa efektywności energetycznej: A\"
  },
  {
    \"name\": \"Zestaw Samsung Piekarnik Płyta indukcyjna Czarny\",
    \"price\": 2999,
    \"imageURL\": \"https://a.allegroimg.com/s180/114982/60ad5c4f4f17a0b5afd8a97367dc/Zestaw-Samsung-Piekarnik-Plyta-indukcyjna-Czarny\",
    \"desc\": \"Szerokość produktu: 60 cm, Liczba pól grzewczych: 4, Sterowanie: panel dotykowy\"
  },
  {
    \"name\": \"ZESTAW DO ZABUDOWY AMICA PIEKARNIK+PŁYTA +MIK+OKAP\",
    \"price\": 2888.88,
    \"imageURL\": \"https://a.allegroimg.com/s180/11bf5e/05f9a6c94802a5ea18c8aa32cf16/ZESTAW-DO-ZABUDOWY-AMICA-PIEKARNIK-PLYTA-MIK-OKAP\",
    \"desc\": \"Stan: Nowy, Marka: Amica, Zawartość zestawu: kuchenka mikrofalowa do zabudowy, okap, piekarnik, płyta gazowa\"
  },
  {
    \"name\": \"Lodówka do zabudowy Samsung BRB26602FWW NO FROST\",
    \"price\": 2199,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b785/0c229f864825a44a2c4b2cc866c2/Lodowka-do-zabudowy-Samsung-BRB26602FWW-NO-FROST\",
    \"desc\": \"Rodzaj: dwudrzwiowa, No Frost: tak\"
  },
  {
    \"name\": \"Piekarnik Amica EB 7541DB FINE 65L Czarny\",
    \"price\": 1099,
    \"imageURL\": \"https://a.allegroimg.com/s180/116cca/317ebd384e89aceb70ed83e79613/Piekarnik-Amica-EB-7541DB-FINE-65L-Czarny\",
    \"desc\": \"Pojemność: 65 l, Rodzaj piekarnika: elektryczny, Klasa efektywności energetycznej: A\"
  },
  {
    \"name\": \"Piekarnik SAMSUNG DUAL COOK NV7B4440VAK/U2 parowy\",
    \"price\": 2379,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c75f/dccb69034858b9fd34d5e4d0f3aa/Piekarnik-SAMSUNG-DUAL-COOK-NV7B4440VAK-U2-parowy\",
    \"desc\": \"Pojemność: 76 l, Rodzaj piekarnika: elektryczny parowy, Klasa efektywności energetycznej: A+\"
  },
  {
    \"name\": \"Piekarnik do zabudowy Candy FCT200N/E 70L Grill\",
    \"price\": 649,
    \"imageURL\": \"https://a.allegroimg.com/s180/1173d4/8bea5ffb477d91c28cef5389ee91/Piekarnik-do-zabudowy-Candy-FCT200N-E-70L-Grill\",
    \"desc\": \"Pojemność: 70 l, Rodzaj piekarnika: elektryczny, Klasa efektywności energetycznej: A\"
  },
  {
    \"name\": \"Zestaw Piekarnik Lodówka Side Zmywarka 6 elementów\",
    \"price\": null,
    \"imageURL\": \"https://a.allegroimg.com/s180/116302/93fa198740a5bd3a369a3fb1430d/Zestaw-Piekarnik-Lodowka-Side-Zmywarka-6-elementow\",
    \"desc\": \"Stan: Nowy, Marka: Samsung, Zawartość zestawu: kuchenka mikrofalowa do zabudowy, lodówka, okap, piekarnik, płyta indukcyjna, zmywarka do zabudowy\"
  },
  {
    \"name\": \"PIEKARNIK GRILL KUCHENKA MIKROFALOWA DO ZABUDOWY\",
    \"price\": 899.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/1180a2/6ac0890f40909f5d8a2bc37f36ab/PIEKARNIK-GRILL-KUCHENKA-MIKROFALOWA-DO-ZABUDOWY\",
    \"desc\": \"Pojemność: 44 l, Rodzaj piekarnika: elektryczny z funkcją mikrofali, Klasa efektywności energetycznej: A+++\"
  },
  {
    \"name\": \"PŁYTA GAZOWA BEKO HIZG64120SB czarna do zabudowy\",
    \"price\": 387.77,
    \"imageURL\": \"https://a.allegroimg.com/s180/111816/d634798f4c56b6386df7f91bca52/PLYTA-GAZOWA-BEKO-HIZG64120SB-czarna-do-zabudowy\",
    \"desc\": \"Wykonanie rusztu: emaliowany, Szerokość produktu: 61 cm, Liczba palników: 4, Sterowanie: pokrętła\"
  },
  {
    \"name\": \"PŁYTA indukcyjna WHIRLPOOL WB B3960 BF\",
    \"price\": 1369,
    \"imageURL\": \"https://a.allegroimg.com/s180/1193b8/b47e93de424d88545442e296fee9/PLYTA-indukcyjna-WHIRLPOOL-WB-B3960-BF\",
    \"desc\": \"Szerokość produktu: 59 cm, Liczba pól grzewczych: 4, Sterowanie: panel dotykowy\"
  },
  {
    \"name\": \"Piekarnik Gorenje BOPE759B Pyroliz Para Termosonda\",
    \"price\": 1299,
    \"imageURL\": \"https://a.allegroimg.com/s180/116327/b84579af40e0b02766e1ac896bab/Piekarnik-Gorenje-BOPE759B-Pyroliz-Para-Termosonda\",
    \"desc\": \"Pojemność: 70 l, Rodzaj piekarnika: elektryczny parowy, Klasa efektywności energetycznej: A+\"
  },
  {
    \"name\": \"Piekarnik Candy FCTS815XL WIFI Smart Steam Parowy\",
    \"price\": 999,
    \"imageURL\": \"https://a.allegroimg.com/s180/1147dd/ea34cd2a4e8ca896524623b18fee/Piekarnik-Candy-FCTS815XL-WIFI-Smart-Steam-Parowy\",
    \"desc\": \"Pojemność: 70 l, Rodzaj piekarnika: elektryczny parowy, Klasa efektywności energetycznej: A\"
  },
  {
    \"name\": \"Zestaw Amica Piekarnik+ Płyta+ Mikrofala+ Okap\",
    \"price\": 3099,
    \"imageURL\": \"https://a.allegroimg.com/s180/118485/e4107d6247aeb3a1550450a675f3/Zestaw-Amica-Piekarnik-Plyta-Mikrofala-Okap\",
    \"desc\": \"Stan: Nowy, Marka: Amica, Zawartość zestawu: kuchenka mikrofalowa do zabudowy, okap, piekarnik, płyta indukcyjna\"
  },
  {
    \"name\": \"Kuchenka gazowa czteropalnikowa Ravanson K-04SNG\",
    \"price\": 549.02,
    \"imageURL\": \"https://a.allegroimg.com/s180/113027/fb00bf264e5095cb8d958f170090/Kuchenka-gazowa-czteropalnikowa-Ravanson-K-04SNG\",
    \"desc\": \"Wykonanie rusztu: stalowy, Szerokość produktu: 58.5 cm, Liczba palników: 4, Sterowanie: pokrętła\"
  },
  {
    \"name\": \"Zmywarka do zabudowy Beko DIN35320 60 cm 13kpl\",
    \"price\": 1133,
    \"imageURL\": \"https://a.allegroimg.com/s180/112511/52bb42e04d209f71cfde97536058/Zmywarka-do-zabudowy-Beko-DIN35320-60-cm-13kpl\",
    \"desc\": \"Pojemność: 13 kompletów, Szerokość produktu: 59.8 cm, Sterowanie: elektroniczne\"
  },
  {
    \"name\": \"ZESTAW DO ZABUDOWY BEKO PIEKARNIK+PŁYTA+ZMYWARKA45\",
    \"price\": 2497.77,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c992/1aa391a546c29663c65cf184237d/ZESTAW-DO-ZABUDOWY-BEKO-PIEKARNIK-PLYTA-ZMYWARKA45\",
    \"desc\": \"Stan: Nowy, Marka: Beko, Zawartość zestawu: piekarnik, płyta gazowa, zmywarka do zabudowy\"
  },
  {
    \"name\": \"Piekarnik AMICA ED97614BA+ X-TYPE STEAM 77l\",
    \"price\": 1549,
    \"imageURL\": \"https://a.allegroimg.com/s180/113581/c71fa9104502bf53bf1b694ab1fd/Piekarnik-AMICA-ED97614BA-X-TYPE-STEAM-77l\",
    \"desc\": \"Pojemność: 77 l, Rodzaj piekarnika: elektryczny, Klasa efektywności energetycznej: A+\"
  },
  {
    \"name\": \"Okap kuchenny MAAN 60 do zabudowy Czarny LED Cichy\",
    \"price\": 328,
    \"imageURL\": \"https://a.allegroimg.com/s180/11cd40/56e7634e4f0ea11bd4a09dc09a13/Okap-kuchenny-MAAN-60-do-zabudowy-Czarny-LED-Cichy\",
    \"desc\": \"Szerokość produktu: 60 cm, Rodzaj okapu: podszafkowy, Klasa efektywności energetycznej: C\"
  },
  {
    \"name\": \"Piekarnik Beko BIE24300BCS 71L 2400W Termoobieg\",
    \"price\": 799,
    \"imageURL\": \"https://a.allegroimg.com/s180/11f37f/b2c0b6974d659c495df6d08bc4f0/Piekarnik-Beko-BIE24300BCS-71L-2400W-Termoobieg\",
    \"desc\": \"Pojemność: 71 l, Rodzaj piekarnika: elektryczny, Klasa efektywności energetycznej: A\"
  },
  {
    \"name\": \"kuchenka PŁYTA INDUKCYJNA podwójna dwupalnikowa\",
    \"price\": 347,
    \"imageURL\": \"https://a.allegroimg.com/s180/11fff6/ac719d2944acbb377f4d7d567c9f/kuchenka-PLYTA-INDUKCYJNA-podwojna-dwupalnikowa\",
    \"desc\": \"Szerokość produktu: 60 cm, Liczba pól grzewczych: 2, Sterowanie: panel dotykowy\"
  },
  {
    \"name\": \"Kuchenka mikrofalowa do zabudowy AMICA AMGB20E2GB\",
    \"price\": 769.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/119b37/928a2b894067af13ebc00423647e/Kuchenka-mikrofalowa-do-zabudowy-AMICA-AMGB20E2GB\",
    \"desc\": \"Pojemność: 20 l, Moc mikrofal: 700 W\"
  },
  {
    \"name\": \"Czarna Płyta gazowa do zabudowy BEKO HILG64120S\",
    \"price\": 619.01,
    \"imageURL\": \"https://a.allegroimg.com/s180/110d5b/5d489a11426499e8ac1e6437e1eb/Czarna-Plyta-gazowa-do-zabudowy-BEKO-HILG64120S\",
    \"desc\": \"Wykonanie rusztu: emaliowany, Szerokość produktu: 60 cm, Liczba palników: 4, Sterowanie: pokrętła\"
  },
  {
    \"name\": \"Piekarnik Samsung NV 66M3535BB Dual Cook 64L\",
    \"price\": 1849,
    \"imageURL\": \"https://a.allegroimg.com/s180/11abc7/6ebd09274dc0a83477b98ac0f3cc/Piekarnik-Samsung-NV-66M3535BB-Dual-Cook-64L\",
    \"desc\": \"Pojemność: 64 l, Rodzaj piekarnika: elektryczny, Klasa efektywności energetycznej: A\"
  },
  {
    \"name\": \"Zmywarka Amica DIM 41E5qO 9kpl AntiFlood 45 cm\",
    \"price\": 1199,
    \"imageURL\": \"https://a.allegroimg.com/s180/119557/f47c20e44965a885e1e7655cfdb5/Zmywarka-Amica-DIM-41E5qO-9kpl-AntiFlood-45-cm\",
    \"desc\": \"Pojemność: 9 kompletów, Szerokość produktu: 44.8 cm, Sterowanie: elektroniczne\"
  },
  {
    \"name\": \"Płyta indukcyjna dwupalnikowa 3,5kW MIDEA MIH351\",
    \"price\": 515,
    \"imageURL\": \"https://a.allegroimg.com/s180/115019/fdc405d94f6da1e9ce133c5c9327/Plyta-indukcyjna-dwupalnikowa-3-5kW-MIDEA-MIH351\",
    \"desc\": \"Szerokość produktu: 28.8 cm, Liczba pól grzewczych: 2, Sterowanie: panel dotykowy\"
  },
  {
    \"name\": \"ZESTAW DO ZABUDOWY BEKO PIEKARNIK+PŁYTA GAZOWA\",
    \"price\": 1244.44,
    \"imageURL\": \"https://a.allegroimg.com/s180/116c06/caeee5fa41ad94eea3f93cbc9222/ZESTAW-DO-ZABUDOWY-BEKO-PIEKARNIK-PLYTA-GAZOWA\",
    \"desc\": \"Stan: Nowy, Marka: Beko\"
  },
  {
    \"name\": \"CZARNY ZESTAW DO ZABUDOWY SAMSUNG Z LODÓWKĄ\",
    \"price\": 7995,
    \"imageURL\": \"https://a.allegroimg.com/s180/11affa/330b9aca45359d01c09b6e0f0b83/CZARNY-ZESTAW-DO-ZABUDOWY-SAMSUNG-Z-LODOWKA\",
    \"desc\": \"Stan: Nowy, Marka: Samsung, Zawartość zestawu: kuchenka mikrofalowa do zabudowy, lodówka, piekarnik, płyta indukcyjna, zmywarka do zabudowy\"
  },
  {
    \"name\": \"Płyta indukcyjna GORENJE IT64ASC PowerBoost timer\",
    \"price\": 828,
    \"imageURL\": \"https://a.allegroimg.com/s180/1110b5/c458f5694db9bc8b0f05c011aa97/Plyta-indukcyjna-GORENJE-IT64ASC-PowerBoost-timer\",
    \"desc\": \"Szerokość produktu: 59.5 cm, Liczba pól grzewczych: 4, Sterowanie: panel dotykowy\"
  },
  {
    \"name\": \"PŁYTA INDUKCYJNA do zabudowy BEKO 230/400V\",
    \"price\": 899,
    \"imageURL\": \"https://a.allegroimg.com/s180/11dcb5/291f22ae49b4aaefe4b896de6065/PLYTA-INDUKCYJNA-do-zabudowy-BEKO-230-400V\",
    \"desc\": \"Szerokość produktu: 60 cm, Liczba pól grzewczych: 4, Sterowanie: panel dotykowy\"
  },
  {
    \"name\": \"Zestaw Amica Płyta gazowa + Piekarnik do zabudowy\",
    \"price\": 1659,
    \"imageURL\": \"https://a.allegroimg.com/s180/117501/a7648ed94c0ea80bec0c38709955/Zestaw-Amica-Plyta-gazowa-Piekarnik-do-zabudowy\",
    \"desc\": \"Stan: Nowy, Marka: Amica, Zawartość zestawu: piekarnik, płyta gazowa\"
  },
  {
    \"name\": \"PIEKARNIK ELECTROLUX EOD5C50Z 72L SteamBake Czarny\",
    \"price\": 1739,
    \"imageURL\": \"https://a.allegroimg.com/s180/116743/b875ae4d448594c5d5587cd0cc98/PIEKARNIK-ELECTROLUX-EOD5C50Z-72L-SteamBake-Czarny\",
    \"desc\": \"Pojemność: 72 l, Rodzaj piekarnika: elektryczny parowy, Klasa efektywności energetycznej: A\"
  },
  {
    \"name\": \"OKAP podszafkowy/teleskopowy TEKA TL6310B - czarny\",
    \"price\": 266.66,
    \"imageURL\": \"https://a.allegroimg.com/s180/116503/6ff30b7840bb955da07b6a3528eb/OKAP-podszafkowy-teleskopowy-TEKA-TL6310B-czarny\",
    \"desc\": \"Szerokość produktu: 60 cm, Rodzaj okapu: podszafkowy, Klasa efektywności energetycznej: E\"
  },
  {
    \"name\": \"Płyta indukcyjna Beko HII 64401 MT 60 cm 4 pola\",
    \"price\": 999,
    \"imageURL\": \"https://a.allegroimg.com/s180/11becb/18e941094dad8776f95200f04e0e/Plyta-indukcyjna-Beko-HII-64401-MT-60-cm-4-pola\",
    \"desc\": \"Szerokość produktu: 58 cm, Liczba pól grzewczych: 4, Sterowanie: panel dotykowy\"
  },
  {
    \"name\": \"Płyta indukcyjna Candy CID 30/G3 2 Pola OUTLET\",
    \"price\": 499,
    \"imageURL\": \"https://a.allegroimg.com/s180/11edff/f2372be94a3db2ac136ec859344e/Plyta-indukcyjna-Candy-CID-30-G3-2-Pola-OUTLET\",
    \"desc\": \"Szerokość produktu: 28.8 cm, Liczba pól grzewczych: 2, Sterowanie: panel dotykowy\"
  },
  {
    \"name\": \"ZESTAW DO ZABUDOWY PIEKARNIK PAROWY PŁYTA GAZOWA\",
    \"price\": 1299,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c82f/48ec5316432f9e1320e74cd74d79/ZESTAW-DO-ZABUDOWY-PIEKARNIK-PAROWY-PLYTA-GAZOWA\",
    \"desc\": \"Stan: Nowy, Marka: Beko\"
  },
  {
    \"name\": \"Zmywarka do zabudowy BEKO szerokość 45 cm\",
    \"price\": 1069,
    \"imageURL\": \"https://a.allegroimg.com/s180/1158a1/36b60c2845f393a2a14fc87d03f7/Zmywarka-do-zabudowy-BEKO-szerokosc-45-cm\",
    \"desc\": \"Pojemność: 10 kompletów, Szerokość produktu: 44.8 cm, Sterowanie: elektroniczne\"
  },
  {
    \"name\": \"OKAP KUCHENNY PODSZAFKOWY 60 CM CZARNY LED FILTR\",
    \"price\": 249,
    \"imageURL\": \"https://a.allegroimg.com/s180/11658c/88cd97bf47feb9a24bcbc6f4c16b/OKAP-KUCHENNY-PODSZAFKOWY-60-CM-CZARNY-LED-FILTR\",
    \"desc\": \"Szerokość produktu: 60 cm, Rodzaj okapu: podszafkowy, Klasa efektywności energetycznej: D\"
  },
  {
    \"name\": \"Zmywarka do zabudowy Beko 45cm\",
    \"price\": 1249,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d141/9291ac05401192a34ae0f4e07e06/Zmywarka-do-zabudowy-Beko-45cm\",
    \"desc\": \"Pojemność: 10 kompletów, Szerokość produktu: 44.8 cm, Sterowanie: elektroniczne\"
  },
  {
    \"name\": \"PIEKARNIK ELECTROLUX EZF5C50X SurroundCook\",
    \"price\": 1359,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ae4d/5db5793c464a86285a03ea334932/PIEKARNIK-ELECTROLUX-EZF5C50X-SurroundCook\",
    \"desc\": \"Pojemność: 57 l, Rodzaj piekarnika: elektryczny, Klasa efektywności energetycznej: A\"
  },
  {
    \"name\": \"Płyta gazowa SOLGAZ GPC 4+1 gaz LPG Gaz na szkle\",
    \"price\": 2739.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/110518/bf6a15d24555bb53824615505108/Plyta-gazowa-SOLGAZ-GPC-4-1-gaz-LPG-Gaz-na-szkle\",
    \"desc\": \"Wykonanie rusztu: nie dotyczy, Szerokość produktu: 58.1 cm, Liczba palników: 4, Sterowanie: panel dotykowy\"
  },
  {
    \"name\": \"PŁYTA INDUKCYJNA do zabudowy AMICA PI6540PTU Timer\",
    \"price\": 1149,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d429/c42edce946e0a0fcbbb1df139ad9/PLYTA-INDUKCYJNA-do-zabudowy-AMICA-PI6540PTU-Timer\",
    \"desc\": \"Szerokość produktu: 57.6 cm, Liczba pól grzewczych: 4, Sterowanie: panel dotykowy\"
  },
  {
    \"name\": \"PŁYTA INDUKCYJNA ELECTROLUX CIT61443 Booster Szlif\",
    \"price\": 1389,
    \"imageURL\": \"https://a.allegroimg.com/s180/11af66/660e797d4d8592f5263727ed2645/PLYTA-INDUKCYJNA-ELECTROLUX-CIT61443-Booster-Szlif\",
    \"desc\": \"Szerokość produktu: 59 cm, Liczba pól grzewczych: 4, Sterowanie: panel dotykowy\"
  },
  {
    \"name\": \"Zmywarka do zabudowy Amica szerokość 45cm\",
    \"price\": 1077,
    \"imageURL\": \"https://a.allegroimg.com/s180/11fb97/0a4c7b43408994e0b8a35e6fdd60/Zmywarka-do-zabudowy-Amica-szerokosc-45cm\",
    \"desc\": \"Pojemność: 9 kompletów, Szerokość produktu: 44.8 cm, Sterowanie: elektroniczne\"
  },
  {
    \"name\": \"ZESTAW DO ZABUDOWY BEKO PIEKARNIK+PŁYTA INDUKCJA\",
    \"price\": 1797,
    \"imageURL\": \"https://a.allegroimg.com/s180/1145d7/26d4f7f84931819ce71bd8133668/ZESTAW-DO-ZABUDOWY-BEKO-PIEKARNIK-PLYTA-INDUKCJA\",
    \"desc\": \"Stan: Nowy, Marka: Beko, Zawartość zestawu: piekarnik, płyta indukcyjna\"
  },
  {
    \"name\": \"Zmywarka do zabudowy szerokość 60cm\",
    \"price\": 1095,
    \"imageURL\": \"https://a.allegroimg.com/s180/1195f7/d241053145018ada416d1a66b82f/Zmywarka-do-zabudowy-szerokosc-60cm\",
    \"desc\": \"Pojemność: 12 kompletów, Szerokość produktu: 59.8 cm, Sterowanie: elektroniczne\"
  },
  {
    \"name\": \"Kuchenka mikrofalowa do zabudowy Beko BMCB25433BG\",
    \"price\": 1190,
    \"imageURL\": \"https://a.allegroimg.com/s180/11cf41/cb4e945049b6bdc5c77734fd949c/Kuchenka-mikrofalowa-do-zabudowy-Beko-BMCB25433BG\",
    \"desc\": \"Materiał wnętrza: stal, Pojemność: 25 l, Moc mikrofal: 900 W, Grill: zwykły\"
  },
  {
    \"name\": \"PŁYTA indukcyjna WHIRLPOOL WB B3960 BF\",
    \"price\": 1369,
    \"imageURL\": \"https://a.allegroimg.com/s180/1193b8/b47e93de424d88545442e296fee9/PLYTA-indukcyjna-WHIRLPOOL-WB-B3960-BF\",
    \"desc\": \"Szerokość produktu: 59 cm, Liczba pól grzewczych: 4, Sterowanie: panel dotykowy\"
  },
  {
    \"name\": \"OKAP KUCHENNY PRZYŚCIENNY CZARNY 50 CM MAAN\",
    \"price\": 360.05,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b43a/8d76beb4481682cb31ede63b9d0b/OKAP-KUCHENNY-PRZYSCIENNY-CZARNY-50-CM-MAAN\",
    \"desc\": \"Szerokość produktu: 50 cm, Rodzaj okapu: kominowy, Klasa efektywności energetycznej: B\"
  },
  {
    \"name\": \"Piekarnik ELECTROLUX EOB9S31WX SteamBoost\",
    \"price\": 4599.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1137ba/58e0564847e1b33c2d33536cf8f4/Piekarnik-ELECTROLUX-EOB9S31WX-SteamBoost\",
    \"desc\": \"Pojemność: 70 l, Rodzaj piekarnika: elektryczny parowy, Klasa efektywności energetycznej: A++\"
  },
  {
    \"name\": \"Płyta indukcyjna Candy CI642CTT/E1 60cm 7200W\",
    \"price\": 799,
    \"imageURL\": \"https://a.allegroimg.com/s180/110dec/80cac70543a1b04084e2caccb4b2/Plyta-indukcyjna-Candy-CI642CTT-E1-60cm-7200W\",
    \"desc\": \"Szerokość produktu: 59 cm, Liczba pól grzewczych: 4, Sterowanie: panel dotykowy\"
  },
  {
    \"name\": \"Piekarnik BEKO BIE24300B Termoobieg BOOSTER GRILL\",
    \"price\": 833.33,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c8b9/e2e9a57d44e5918b0a0ec2d816e7/Piekarnik-BEKO-BIE24300B-Termoobieg-BOOSTER-GRILL\",
    \"desc\": \"Pojemność: 71 l, Rodzaj piekarnika: elektryczny, Klasa efektywności energetycznej: A\"
  },
  {
    \"name\": \"Płyta indukcyjna Amica PI6508PLU Plug&Play\",
    \"price\": 1155.49,
    \"imageURL\": \"https://a.allegroimg.com/s180/03bb44/c607a6864316bcbf49738e3e34fa/Plyta-indukcyjna-Amica-PI6508PLU-Plug-Play\",
    \"desc\": \"Szerokość produktu: 57.6 cm, Liczba pól grzewczych: 4, Sterowanie: panel dotykowy\"
  },
  {
    \"name\": \"PIEKARNIK BEKO czarny /termoobieg/71 l\",
    \"price\": 877,
    \"imageURL\": \"https://a.allegroimg.com/s180/11cae5/28e5ea7d4796ab2be67584019e32/PIEKARNIK-BEKO-czarny-termoobieg-71-l\",
    \"desc\": \"Pojemność: 71 l, Rodzaj piekarnika: elektryczny, Klasa efektywności energetycznej: A\"
  },
  {
    \"name\": \"Piekarnik AMICA ED376191B F-type 77 L Termoobieg\",
    \"price\": 974.79,
    \"imageURL\": \"https://a.allegroimg.com/s180/1113e3/23a638c64c70b23904a0544787fb/Piekarnik-AMICA-ED376191B-F-type-77-L-Termoobieg\",
    \"desc\": \"Pojemność: 77 l, Rodzaj piekarnika: elektryczny, Klasa efektywności energetycznej: A\"
  },
  {
    \"name\": \"Piekarnik do zabudowy Candy FCT200N/E 70L Grill\",
    \"price\": 649,
    \"imageURL\": \"https://a.allegroimg.com/s180/1173d4/8bea5ffb477d91c28cef5389ee91/Piekarnik-do-zabudowy-Candy-FCT200N-E-70L-Grill\",
    \"desc\": \"Pojemność: 70 l, Rodzaj piekarnika: elektryczny, Klasa efektywności energetycznej: A\"
  },
  {
    \"name\": \"Okap wertykalny BEKO HCA62321B 60cm LED czarny\",
    \"price\": 499,
    \"imageURL\": \"https://a.allegroimg.com/s180/115d80/e97a45374cdda25f9d4e2fb531e1/Okap-wertykalny-BEKO-HCA62321B-60cm-LED-czarny\",
    \"desc\": \"Szerokość produktu: 59.6 cm, Rodzaj okapu: kominowy, Klasa efektywności energetycznej: C\"
  },
  {
    \"name\": \"Zmywarka Beko DIN34320 60cm 13kpl WaterSafe\",
    \"price\": 1099,
    \"imageURL\": \"https://a.allegroimg.com/s180/113d41/4e98f995490e811c05a1f93aee6c/Zmywarka-Beko-DIN34320-60cm-13kpl-WaterSafe\",
    \"desc\": \"Pojemność: 13 kompletów, Szerokość produktu: 59.8 cm, Sterowanie: elektroniczne\"
  },
  {
    \"name\": \"Zmywarka do zabudowy Samsung DW60M6070IB 14kpl\",
    \"price\": 1899,
    \"imageURL\": \"https://a.allegroimg.com/s180/1102f8/969bdbc84a62bd56b4677262cfc6/Zmywarka-do-zabudowy-Samsung-DW60M6070IB-14kpl\",
    \"desc\": \"Pojemność: 14 kompletów, Szerokość produktu: 59.8 cm\"
  },
  {
    \"name\": \"OKAP podszafkowy AMICA do zabudowy 60cm CZARNY LED\",
    \"price\": 374,
    \"imageURL\": \"https://a.allegroimg.com/s180/116496/97f7ddab4601885c61f836da6e27/OKAP-podszafkowy-AMICA-do-zabudowy-60cm-CZARNY-LED\",
    \"desc\": \"Szerokość produktu: 59.8 cm, Rodzaj okapu: podszafkowy, Klasa efektywności energetycznej: C\"
  },
  {
    \"name\": \"Płyta indukcyjna Beko HII 64401 MT 60 cm 4 pola\",
    \"price\": 999,
    \"imageURL\": \"https://a.allegroimg.com/s180/11becb/18e941094dad8776f95200f04e0e/Plyta-indukcyjna-Beko-HII-64401-MT-60-cm-4-pola\",
    \"desc\": \"Szerokość produktu: 58 cm, Liczba pól grzewczych: 4, Sterowanie: panel dotykowy\"
  },
  {
    \"name\": \"Piekarnik do zabudowy WHIRLPOOL W6OM44S1HBL 73l\",
    \"price\": 1349,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c9dd/e5604d37497486a8bf1eea1af5a2/Piekarnik-do-zabudowy-WHIRLPOOL-W6OM44S1HBL-73l\",
    \"desc\": \"Pojemność: 73 l, Rodzaj piekarnika: elektryczny, Klasa efektywności energetycznej: A+\"
  }
]`);

const c = gifts as BaseGift[];

export default c;
