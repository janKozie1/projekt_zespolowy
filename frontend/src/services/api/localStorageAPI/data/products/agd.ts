import type { BaseGift } from '../gifts';

const gifts: unknown = JSON.parse(`[
  {
    \"name\": \"Kuchenka mikrofalowa Samsung MS23F301TAS 23L LED\",
    \"price\": 459,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a6f5/0096f2e74a67b8dde2b41b76fec1/Kuchenka-mikrofalowa-Samsung-MS23F301TAS-23L-LED\",
    \"desc\": \"Pojemność: 23 l, Moc mikrofal: 800 W, Grill: brak\"
  },
  {
    \"name\": \"KUCHENKA MIKROFALOWA SAMSUNG ME 83X 1150W 23L\",
    \"price\": 439,
    \"imageURL\": \"https://a.allegroimg.com/s180/1102fd/0f6dcd98498096e5e69a55decfbb/KUCHENKA-MIKROFALOWA-SAMSUNG-ME-83X-1150W-23L\",
    \"desc\": \"Pojemność: 23 l, Moc mikrofal: 800 W, Grill: brak\"
  },
  {
    \"name\": \"Mikrofalówka Samsung ME83X 23L T.D.S 800W AutoCook\",
    \"price\": 499,
    \"imageURL\": \"https://a.allegroimg.com/s180/0364fe/3af2e9a148aba8217b2cc6c30ab5/Mikrofalowka-Samsung-ME83X-23L-T-D-S-800W-AutoCook\",
    \"desc\": \"Pojemność: 23 l, Moc mikrofal: 800 W, Grill: brak\"
  },
  {
    \"name\": \"Zmywarka nablatowa Comfee CTG 556N 6kpl, 55cm\",
    \"price\": 759,
    \"imageURL\": \"https://a.allegroimg.com/s180/11903b/e67889c14fdc94391304647fcf76/Zmywarka-nablatowa-Comfee-CTG-556N-6kpl-55cm\",
    \"desc\": \"Pojemność: 6 kompletów, Szerokość produktu: 55 cm, Sterowanie: elektroniczne\"
  },
  {
    \"name\": \"KUCHENKA ELEKTRYCZNA JEDNOPALNIKOWA NA PRĄD MOCNA\",
    \"price\": 49,
    \"imageURL\": \"https://a.allegroimg.com/s180/110fbb/405efc1d4d55a1f4b2641ef4172e/KUCHENKA-ELEKTRYCZNA-JEDNOPALNIKOWA-NA-PRAD-MOCNA\",
    \"desc\": \"Rodzaj: elektryczna, Liczba pól grzewczych/palników: 1\"
  },
  {
    \"name\": \"OKAP KUCHENNY KOMINOWY CZARNY SZKŁO LED 60 + FILTR\",
    \"price\": 328.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11812b/2f483b994f21b1a173c069512c23/OKAP-KUCHENNY-KOMINOWY-CZARNY-SZKLO-LED-60-FILTR\",
    \"desc\": \"Szerokość produktu: 60 cm, Rodzaj okapu: kominowy, Klasa efektywności energetycznej: C\"
  },
  {
    \"name\": \"Okap kuchenny KOMINOWY MAAN Czarny LED 60cm CICHY\",
    \"price\": 389,
    \"imageURL\": \"https://a.allegroimg.com/s180/116394/d3e152a14bdaa1b0717819117733/Okap-kuchenny-KOMINOWY-MAAN-Czarny-LED-60cm-CICHY\",
    \"desc\": \"Szerokość produktu: 60 cm, Rodzaj okapu: kominowy, Klasa efektywności energetycznej: C\"
  },
  {
    \"name\": \"Pralka Whirlpool FFB 8258 BVPL 8 kg 14 programów\",
    \"price\": 1399,
    \"imageURL\": \"https://a.allegroimg.com/s180/115b78/b4cec2954d9a9143269c4b017947/Pralka-Whirlpool-FFB-8258-BVPL-8-kg-14-programow\",
    \"desc\": \"Szerokość produktu: 59.5 cm, Głębokość produktu: 63 cm, Sposób załadunku: od frontu, Maksymalny wsad: 8 kg, Klasa efektywności energetycznej: B\"
  },
  {
    \"name\": \"KUCHENKA PŁYTA INDUKCYJNA ELEKTRYCZNA 2000W\",
    \"price\": 91.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11feb2/6c3612a04f308b5c46dbdcde5441/KUCHENKA-PLYTA-INDUKCYJNA-ELEKTRYCZNA-2000W\",
    \"desc\": \"Rodzaj: indukcyjna, Liczba pól grzewczych/palników: 1\"
  },
  {
    \"name\": \"Kuchenka mikrofalowa Sharp YC-PG204AE-S\",
    \"price\": 409,
    \"imageURL\": \"https://a.allegroimg.com/s180/110f63/0aace3464b7dafa77e03414e9b96/Kuchenka-mikrofalowa-Sharp-YC-PG204AE-S\",
    \"desc\": \"Pojemność: 20 l, Moc mikrofal: 700 W, Grill: zwykły\"
  },
  {
    \"name\": \"Panasonic NN-GD38 Kuchenka mikrofalowa 1000W Grill\",
    \"price\": 899,
    \"imageURL\": \"https://a.allegroimg.com/s180/119b3a/61640b5644938c910a42231063c9/Panasonic-NN-GD38-Kuchenka-mikrofalowa-1000W-Grill\",
    \"desc\": \"Pojemność: 23 l, Moc mikrofal: 1000 W, Grill: kwarcowy\"
  },
  {
    \"name\": \"Kuchenka mikrofalowa wolnostojąca z grillem MEDION\",
    \"price\": 359,
    \"imageURL\": \"https://a.allegroimg.com/s180/117168/a5b509ec44809ef21c33b281c3c6/Kuchenka-mikrofalowa-wolnostojaca-z-grillem-MEDION\",
    \"desc\": \"Pojemność: 25 l, Moc mikrofal: 900 W, Grill: zwykły\"
  },
  {
    \"name\": \"KUCHENKA PRZENOŚNA ELEKTRYCZNA JEDNOPALNIKOWA\",
    \"price\": 44.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c9f4/af980973402fb9c203bcbf05d868/KUCHENKA-PRZENOSNA-ELEKTRYCZNA-JEDNOPALNIKOWA\",
    \"desc\": \"Rodzaj: elektryczna, Liczba pól grzewczych/palników: 1\"
  },
  {
    \"name\": \"Okap wertykalny AMICA OKP9651S 90cm czarny\",
    \"price\": 992.48,
    \"imageURL\": \"https://a.allegroimg.com/s180/11fe75/b6ec23ff474d9a53866b584e881a/Okap-wertykalny-AMICA-OKP9651S-90cm-czarny\",
    \"desc\": \"Szerokość produktu: 90 cm, Rodzaj okapu: kominowy, Klasa efektywności energetycznej: A+\"
  },
  {
    \"name\": \"Kuchenka mikrofalowa Samsung GE83X-P Grill 800 W\",
    \"price\": 499,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c3f2/b9a6bb864530b7cfca731232d943/Kuchenka-mikrofalowa-Samsung-GE83X-P-Grill-800-W\",
    \"desc\": \"Pojemność: 23 l, Moc mikrofal: 800 W, Grill: zwykły\"
  },
  {
    \"name\": \"Pralka Amica WA1S610CLiSH 6 kg 1000 obr/min SLIM\",
    \"price\": 1288.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b455/1c2c2cfb434786f23826a0059e49/Pralka-Amica-WA1S610CLiSH-6-kg-1000-obr-min-SLIM\",
    \"desc\": \"Szerokość produktu: 59.5 cm, Głębokość produktu: 40 cm, Sposób załadunku: od frontu, Maksymalny wsad: 6 kg, Klasa efektywności energetycznej: B\"
  },
  {
    \"name\": \"LODÓWKA TURYSTYCZNA SAMOCHODOWA AGREGAT 12/230 XXL\",
    \"price\": 330,
    \"imageURL\": \"https://a.allegroimg.com/s180/118657/bff2965b4056a197a9f8f963788a/LODOWKA-TURYSTYCZNA-SAMOCHODOWA-AGREGAT-12-230-XXL\",
    \"desc\": \"Rodzaj: jednodrzwiowa, No Frost: brak informacji\"
  },
  {
    \"name\": \"Kuchenka mikrofalowa AMICA AMG20E70GSV 20l 700W\",
    \"price\": 324.52,
    \"imageURL\": \"https://a.allegroimg.com/s180/116ffb/e514fd5f42709833453a3369e668/Kuchenka-mikrofalowa-AMICA-AMG20E70GSV-20l-700W\",
    \"desc\": \"Pojemność: 20 l, Moc mikrofal: 700 W, Grill: kwarcowy\"
  },
  {
    \"name\": \"OKAP KUCHENNY KOMINOWY SZKŁO LED BERDSEN 60cm\",
    \"price\": 369.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/118811/d74845a141dc9eeee99430ebdcbb/OKAP-KUCHENNY-KOMINOWY-SZKLO-LED-BERDSEN-60cm\",
    \"desc\": \"Szerokość produktu: 59.5 cm, Rodzaj okapu: kominowy, Klasa efektywności energetycznej: C\"
  },
  {
    \"name\": \"Kuchenka mikrofalowa WHIRLPOOL MWP101SB 20l 700W\",
    \"price\": 467.81,
    \"imageURL\": \"https://a.allegroimg.com/s180/112be7/d284b0a74b00a7e5bb7b93e18729/Kuchenka-mikrofalowa-WHIRLPOOL-MWP101SB-20l-700W\",
    \"desc\": \"Pojemność: 20 l, Moc mikrofal: 700 W, Grill: brak\"
  },
  {
    \"name\": \"OKAP KUCHENNY 60cm KOMINOWY BT-211 BERDSEN\",
    \"price\": 423.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a170/9c7a08e74e82a0af098ef34aaf1a/OKAP-KUCHENNY-60cm-KOMINOWY-BT-211-BERDSEN\",
    \"desc\": \"Szerokość produktu: 59.5 cm, Rodzaj okapu: kominowy, Klasa efektywności energetycznej: B\"
  },
  {
    \"name\": \"MINIBAR RETRO MAŁA LODÓWKA HOTELOWA BIAŁA\",
    \"price\": 429,
    \"imageURL\": \"https://a.allegroimg.com/s180/114e50/bf9fb6ab4f879bb7312c5b763c67/MINIBAR-RETRO-MALA-LODOWKA-HOTELOWA-BIALA\",
    \"desc\": \"Rodzaj: jednodrzwiowa, No Frost: nie\"
  },
  {
    \"name\": \"Kuchnia elektryczna Sencor SCP4501 3400W 2palniki\",
    \"price\": 588,
    \"imageURL\": \"https://a.allegroimg.com/s180/111714/a09e86d04349bb16b77d187a03fe/Kuchnia-elektryczna-Sencor-SCP4501-3400W-2palniki\",
    \"desc\": \"Rodzaj: indukcyjna, Liczba pól grzewczych/palników: 2\"
  },
  {
    \"name\": \"Lodówka Bosch KGN33NLEB NoFrost Inox 282L MultiBox\",
    \"price\": 1899,
    \"imageURL\": \"https://a.allegroimg.com/s180/11aca8/86db63144a069fb5b4849408b25c/Lodowka-Bosch-KGN33NLEB-NoFrost-Inox-282L-MultiBox\",
    \"desc\": \"Rodzaj: dwudrzwiowa, No Frost: tak\"
  },
  {
    \"name\": \"OKAP KUCHENNY KOMINOWY 60CM CZARNA STAL LED\",
    \"price\": 289,
    \"imageURL\": \"https://a.allegroimg.com/s180/115cc0/316a3e374280a8a25b8c417ad15e/OKAP-KUCHENNY-KOMINOWY-60CM-CZARNA-STAL-LED\",
    \"desc\": \"Szerokość produktu: 60 cm, Rodzaj okapu: kominowy, Klasa efektywności energetycznej: D\"
  },
  {
    \"name\": \"Kuchenka mikrofalowa Samsung MG 23K3515AS 23l 800W\",
    \"price\": 549,
    \"imageURL\": \"https://a.allegroimg.com/s180/11e9af/bc984378448aad8a68c11ea90770/Kuchenka-mikrofalowa-Samsung-MG-23K3515AS-23l-800W\",
    \"desc\": \"Pojemność: 23 l, Moc mikrofal: 800 W, Grill: zwykły\"
  },
  {
    \"name\": \"50L 12/230 AGREGAT LODÓWKA TURYSTYCZNA SAMOCHODOWA\",
    \"price\": 550,
    \"imageURL\": \"https://c.allegroimg.com/s180/0373cd/a255bb9d49d6b2a7264e19914cdc/50L-12-230-AGREGAT-LODOWKA-TURYSTYCZNA-SAMOCHODOWA\",
    \"desc\": \"Rodzaj: jednodrzwiowa, No Frost: brak informacji\"
  },
  {
    \"name\": \"KUCHENKA MIKROFALOWA AMICA AMMF20M1B CZARNA\",
    \"price\": 349,
    \"imageURL\": \"https://a.allegroimg.com/s180/1119c9/a53740044144b815086c4eca4ba8/KUCHENKA-MIKROFALOWA-AMICA-AMMF20M1B-CZARNA\",
    \"desc\": \"Pojemność: 20 l, Moc mikrofal: 700 W, Grill: brak\"
  },
  {
    \"name\": \"OKAP KUCHENNY KOMINOWY CZARNY SZKŁO LED 60CM FILTR\",
    \"price\": 363.8,
    \"imageURL\": \"https://a.allegroimg.com/s180/11168e/9d13a4d24e11b71f12bb8e0e3d84/OKAP-KUCHENNY-KOMINOWY-CZARNY-SZKLO-LED-60CM-FILTR\",
    \"desc\": \"Szerokość produktu: 60 cm, Rodzaj okapu: kominowy, Klasa efektywności energetycznej: C\"
  },
  {
    \"name\": \"KUCHENKA ELEKTRYCZNA JEDNOPALNIKOWA TURYSTYCZNA\",
    \"price\": 28.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11eea9/38b093a341328533bf48cb683972/KUCHENKA-ELEKTRYCZNA-JEDNOPALNIKOWA-TURYSTYCZNA\",
    \"desc\": \"Rodzaj: elektryczna, Liczba pól grzewczych/palników: 1\"
  },
  {
    \"name\": \"Kuchenka mikrofalowa wolnostojąca MIKROFALA 700W\",
    \"price\": 269.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/114139/d6b5088747da9312ed8ba8be4ef0/Kuchenka-mikrofalowa-wolnostojaca-MIKROFALA-700W\",
    \"desc\": \"Pojemność: 20 l, Moc mikrofal: 700 W, Grill: brak\"
  },
  {
    \"name\": \"Mikrofalówka Samsung ME83X 23L T.D.S 800W AutoCook\",
    \"price\": 499,
    \"imageURL\": \"https://a.allegroimg.com/s180/0364fe/3af2e9a148aba8217b2cc6c30ab5/Mikrofalowka-Samsung-ME83X-23L-T-D-S-800W-AutoCook\",
    \"desc\": \"Pojemność: 23 l, Moc mikrofal: 800 W, Grill: brak\"
  },
  {
    \"name\": \"OKAP kominowy 60 WHIRLPOOL WHVP 65F LM K czarny\",
    \"price\": 609,
    \"imageURL\": \"https://a.allegroimg.com/s180/111afe/082f50834d39b322333dd6fb4e4d/OKAP-kominowy-60-WHIRLPOOL-WHVP-65F-LM-K-czarny\",
    \"desc\": \"Szerokość produktu: 59.8 cm, Rodzaj okapu: ścienny, Klasa efektywności energetycznej: D\"
  },
  {
    \"name\": \"KUCHENKA ELEKTRYCZNA DWUPALNIKOWA TURYSTYCZNA 200\",
    \"price\": 59.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ec2d/59f4bb7942e8b784bdf65ce5ea8b/KUCHENKA-ELEKTRYCZNA-DWUPALNIKOWA-TURYSTYCZNA-200\",
    \"desc\": \"Rodzaj: elektryczna, Liczba pól grzewczych/palników: 2\"
  },
  {
    \"name\": \"Okap kuchenny KOMINOWY MAAN Czarny Cichy LED 50cm\",
    \"price\": 389,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b66f/a637d1e24e979245a2d656537ee1/Okap-kuchenny-KOMINOWY-MAAN-Czarny-Cichy-LED-50cm\",
    \"desc\": \"Szerokość produktu: 50 cm, Rodzaj okapu: kominowy, Klasa efektywności energetycznej: C\"
  },
  {
    \"name\": \"OKAP KUCHENNY 60cm KOMINOWY +RURA +KOMIN BT-213\",
    \"price\": 399.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1154c0/48600c4648ca82847b7bd3aac15a/OKAP-KUCHENNY-60cm-KOMINOWY-RURA-KOMIN-BT-213\",
    \"desc\": \"Szerokość produktu: 60 cm, Rodzaj okapu: kominowy, Klasa efektywności energetycznej: C\"
  },
  {
    \"name\": \"Kuchenka mikrofalowa wolnostojąca MIKROFALA 700W\",
    \"price\": 289,
    \"imageURL\": \"https://a.allegroimg.com/s180/114139/d6b5088747da9312ed8ba8be4ef0/Kuchenka-mikrofalowa-wolnostojaca-MIKROFALA-700W\",
    \"desc\": \"Pojemność: 20 l, Moc mikrofal: 700 W, Grill: brak\"
  },
  {
    \"name\": \"Kuchenka mikrofalowa 700 wat 17L 6 poziomów MEDION\",
    \"price\": 299,
    \"imageURL\": \"https://a.allegroimg.com/s180/1153e6/79e9ec3640f7903731b475c80057/Kuchenka-mikrofalowa-700-wat-17L-6-poziomow-MEDION\",
    \"desc\": \"Pojemność: 17 l, Moc mikrofal: 700 W\"
  },
  {
    \"name\": \"SKŁADANA MINI PRALKA turystyczna PRZENOŚNA podróżn\",
    \"price\": 149.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1199d8/8ddf5dac48dc9ed103fd132a036d/SKLADANA-MINI-PRALKA-turystyczna-PRZENOSNA-podrozn\",
    \"desc\": \"Sposób załadunku: brak informacji, Maksymalny wsad: 0 kg, Klasa efektywności energetycznej: B\"
  },
  {
    \"name\": \"Kuchenka mikrofalowa Samsung MS23F301TAS 23L LED\",
    \"price\": 459,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a6f5/0096f2e74a67b8dde2b41b76fec1/Kuchenka-mikrofalowa-Samsung-MS23F301TAS-23L-LED\",
    \"desc\": \"Pojemność: 23 l, Moc mikrofal: 800 W, Grill: brak\"
  },
  {
    \"name\": \"KUCHENKA ELEKTRYCZNA DWUPALNIKOWA PŁYTA NA PRĄD\",
    \"price\": 69.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/110e9e/2d0c39b14c74a52bd399b9207333/KUCHENKA-ELEKTRYCZNA-DWUPALNIKOWA-PLYTA-NA-PRAD\",
    \"desc\": \"Rodzaj: elektryczna, Liczba pól grzewczych/palników: 2\"
  },
  {
    \"name\": \"Przenośna pralka turystyczna składana USB\",
    \"price\": 98.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a424/506724534af2adee31cbfd6c004f/Przenosna-pralka-turystyczna-skladana-USB\",
    \"desc\": \"Sposób załadunku: od góry, Maksymalny wsad: 1 kg, Klasa efektywności energetycznej: A\"
  },
  {
    \"name\": \"Okap kuchenny MAAN 50cm Srebrny SZKŁO Cichy LED\",
    \"price\": 399,
    \"imageURL\": \"https://a.allegroimg.com/s180/113179/6aa6e7804fffa07ca56e51e1a840/Okap-kuchenny-MAAN-50cm-Srebrny-SZKLO-Cichy-LED\",
    \"desc\": \"Szerokość produktu: 50 cm, Rodzaj okapu: kominowy, Klasa efektywności energetycznej: B\"
  },
  {
    \"name\": \"Okap kuchenny ścienny Maan mix50 Srebrny Pasek LED\",
    \"price\": 396,
    \"imageURL\": \"https://a.allegroimg.com/s180/114b7b/22e5583548bf8fbdacde962dfcf7/Okap-kuchenny-scienny-Maan-mix50-Srebrny-Pasek-LED\",
    \"desc\": \"Szerokość produktu: 50 cm, Rodzaj okapu: kominowy, Klasa efektywności energetycznej: C\"
  },
  {
    \"name\": \"KUCHENKA ELEKTRYCZNA JEDNOPALNIKOWA TURYSTYCZNA\",
    \"price\": 40,
    \"imageURL\": \"https://a.allegroimg.com/s180/11abda/a8fd0633452395a27a18a51c21ec/KUCHENKA-ELEKTRYCZNA-JEDNOPALNIKOWA-TURYSTYCZNA\",
    \"desc\": \"Rodzaj: elektryczna, Liczba pól grzewczych/palników: 1\"
  },
  {
    \"name\": \"OKAP KUCHENNY KOMINOWY 60cm CZARNY SZKŁO LED FILTR\",
    \"price\": 299,
    \"imageURL\": \"https://a.allegroimg.com/s180/112273/743f233a4ed49485bf66c864a007/OKAP-KUCHENNY-KOMINOWY-60cm-CZARNY-SZKLO-LED-FILTR\",
    \"desc\": \"Szerokość produktu: 60 cm, Rodzaj okapu: kominowy, Klasa efektywności energetycznej: D\"
  },
  {
    \"name\": \"Okap kuchenny przyścienny Maan Vela 60 czarny LED\",
    \"price\": 356.98,
    \"imageURL\": \"https://a.allegroimg.com/s180/1146cc/7aaf316b44549e42a6a3925dc311/Okap-kuchenny-przyscienny-Maan-Vela-60-czarny-LED\",
    \"desc\": \"Szerokość produktu: 60 cm, Rodzaj okapu: kominowy, Klasa efektywności energetycznej: C\"
  },
  {
    \"name\": \"Lodówka Beko RCNA 366E40ZXPN 324l NoFrost inox LED\",
    \"price\": 2099,
    \"imageURL\": \"https://a.allegroimg.com/s180/112f61/2edbe1004c1fa54790df3680074b/Lodowka-Beko-RCNA-366E40ZXPN-324l-NoFrost-inox-LED\",
    \"desc\": \"Rodzaj: dwudrzwiowa, No Frost: tak\"
  },
  {
    \"name\": \"KUCHENKA PŁYTA INDUKCYJNA 1-PALNIKOWA ELEKTRYCZNA\",
    \"price\": 159.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/118234/2619870c4a369b495a9197ca4a5d/KUCHENKA-PLYTA-INDUKCYJNA-1-PALNIKOWA-ELEKTRYCZNA\",
    \"desc\": \"Rodzaj: indukcyjna, Liczba pól grzewczych/palników: 1\"
  },
  {
    \"name\": \"Kuchenka mikrofalowa Amica AMMF 20M1S 20L Srebrna\",
    \"price\": 349,
    \"imageURL\": \"https://a.allegroimg.com/s180/119477/cde68e934125a8cf78a894937c01/Kuchenka-mikrofalowa-Amica-AMMF-20M1S-20L-Srebrna\",
    \"desc\": \"Pojemność: 20 l, Moc mikrofal: 700 W, Grill: brak\"
  },
  {
    \"name\": \"OKAP KUCHENNY KOMINOWY INOX SZKŁO LED 60CM FILTR\",
    \"price\": 364.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/113a09/e3a58af54834adbe3bf1745a4b0d/OKAP-KUCHENNY-KOMINOWY-INOX-SZKLO-LED-60CM-FILTR\",
    \"desc\": \"Szerokość produktu: 59.6 cm, Rodzaj okapu: kominowy, Klasa efektywności energetycznej: A+\"
  },
  {
    \"name\": \"PODKŁADKI ANTYWIBRACYJNE POD NOŻKI PRALKĘ ZMYWARKĘ\",
    \"price\": 12.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/115164/e828e16a41f9935b816030167df6/PODKLADKI-ANTYWIBRACYJNE-POD-NOZKI-PRALKE-ZMYWARKE\",
    \"desc\": \"Producent: Aptel, Przeznaczenie: pralka, Kod producenta: APT_AG561A\"
  },
  {
    \"name\": \"Kuchenka elektryczna ceramiczna dwupalnikowa 2100W\",
    \"price\": 253.93,
    \"imageURL\": \"https://a.allegroimg.com/s180/11f255/71b77ee24eb0a676757796a609cd/Kuchenka-elektryczna-ceramiczna-dwupalnikowa-2100W\",
    \"desc\": \"Rodzaj: ceramiczna, Liczba pól grzewczych/palników: 2\"
  },
  {
    \"name\": \"KUCHENKA GAZOWA TURYSTYCZNA POLOWA 2W1 PRZENOŚNA\",
    \"price\": 99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c1b1/3a8bd53a4b36bb7a3cc8a41d8227/KUCHENKA-GAZOWA-TURYSTYCZNA-POLOWA-2W1-PRZENOSNA\",
    \"desc\": \"Rodzaj: gazowa, Liczba pól grzewczych/palników: 1\"
  },
  {
    \"name\": \"Kuchenka mikrofalowa AMICA AMGF17M2GW 17l 700W\",
    \"price\": 349,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a81e/fce87edc46089fd970fea1c0e17f/Kuchenka-mikrofalowa-AMICA-AMGF17M2GW-17l-700W\",
    \"desc\": \"Pojemność: 17 l, Moc mikrofal: 700 W, Grill: zwykły\"
  },
  {
    \"name\": \"Suszarka do ubrań ELECTROLUX EW8H458BP\",
    \"price\": 2279.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b7b1/897aa90b4ddf80b6e141b3544fa4/Suszarka-do-ubran-ELECTROLUX-EW8H458BP\",
    \"desc\": \"Szerokość produktu: 59.6 cm, Sposób załadunku: od frontu, Maksymalny wsad: 8 kg, Klasa efektywności energetycznej: A++\"
  },
  {
    \"name\": \"Panasonic NN-E20JWMEPG Kuchenka mikrofalowa 800 W\",
    \"price\": 466.69,
    \"imageURL\": \"https://a.allegroimg.com/s180/119118/0fa946694aa5bb75ecfec18530d2/Panasonic-NN-E20JWMEPG-Kuchenka-mikrofalowa-800-W\",
    \"desc\": \"Pojemność: 20 l, Moc mikrofal: 800 W, Grill: brak\"
  },
  {
    \"name\": \"Okap kuchenny ścienny Maan mix60 Srebrny Pasek LED\",
    \"price\": 397,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a4c7/016e8a9747c19267df32acf3105f/Okap-kuchenny-scienny-Maan-mix60-Srebrny-Pasek-LED\",
    \"desc\": \"Szerokość produktu: 60 cm, Rodzaj okapu: kominowy, Klasa efektywności energetycznej: C\"
  },
  {
    \"name\": \"BUTLA GAZOWA TURYSTYCZNA LPG 3kg + kuchenka\",
    \"price\": 238,
    \"imageURL\": \"https://a.allegroimg.com/s180/1148d2/2d1a181c482888aebd9595729ebf/BUTLA-GAZOWA-TURYSTYCZNA-LPG-3kg-kuchenka\",
    \"desc\": \"Rodzaj: gazowa, Liczba pól grzewczych/palników: 0\"
  },
  {
    \"name\": \"OKAP KUCHENNY WYSPOWY 35cm WISZĄCY BERDSEN PILOT\",
    \"price\": 799.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11882d/a895006246b5bd8cd23e26fe910f/OKAP-KUCHENNY-WYSPOWY-35cm-WISZACY-BERDSEN-PILOT\",
    \"desc\": \"Szerokość produktu: 35 cm, Rodzaj okapu: wyspowy, Klasa efektywności energetycznej: A+\"
  },
  {
    \"name\": \"LODÓWKA TURYSTYCZNA XXXL SAMOCHODOWA AGREGAT 32L\",
    \"price\": 380,
    \"imageURL\": \"https://a.allegroimg.com/s180/11e89c/c111c0e748dc9e15f55c51fb31f1/LODOWKA-TURYSTYCZNA-XXXL-SAMOCHODOWA-AGREGAT-32L\",
    \"desc\": \"Rodzaj: brak informacji, No Frost: brak informacji\"
  },
  {
    \"name\": \"KUCHENKA ELEKTRYCZNA DWUPALNIKOWA NA PRĄD 2500W\",
    \"price\": 109,
    \"imageURL\": \"https://a.allegroimg.com/s180/1199cd/ef983da340b89108cc073b8db004/KUCHENKA-ELEKTRYCZNA-DWUPALNIKOWA-NA-PRAD-2500W\",
    \"desc\": \"Rodzaj: elektryczna, Liczba pól grzewczych/palników: 2\"
  },
  {
    \"name\": \"KUCHENKA PRZENOŚNA ELEKTRYCZNA DWUPALNIKOWA\",
    \"price\": 79.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/117b11/8becaf0341f684a6be8145090427/KUCHENKA-PRZENOSNA-ELEKTRYCZNA-DWUPALNIKOWA\",
    \"desc\": \"Rodzaj: indukcyjna, Liczba pól grzewczych/palników: 1\"
  },
  {
    \"name\": \"KUCHENKA ELEKTRYCZNA JEDNOPALNIKOWA NA PRĄD MOCNA\",
    \"price\": 49,
    \"imageURL\": \"https://a.allegroimg.com/s180/110fbb/405efc1d4d55a1f4b2641ef4172e/KUCHENKA-ELEKTRYCZNA-JEDNOPALNIKOWA-NA-PRAD-MOCNA\",
    \"desc\": \"Rodzaj: elektryczna, Liczba pól grzewczych/palników: 1\"
  },
  {
    \"name\": \"OKAP KUCHENNY kominowy 60 ELECTROLUX EFF60560OX\",
    \"price\": 936.01,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c320/377d34ac41ab8882b3662ca26562/OKAP-KUCHENNY-kominowy-60-ELECTROLUX-EFF60560OX\",
    \"desc\": \"Szerokość produktu: 60 cm, Rodzaj okapu: kominowy, Klasa efektywności energetycznej: B\"
  },
  {
    \"name\": \"OKAP KUCHENNY KOMINOWY CZARNY SZKŁO LED 50CM FILTR\",
    \"price\": 338.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/1183ec/0a620cd2448c94fa70a4e912fbe2/OKAP-KUCHENNY-KOMINOWY-CZARNY-SZKLO-LED-50CM-FILTR\",
    \"desc\": \"Szerokość produktu: 50 cm, Rodzaj okapu: kominowy, Klasa efektywności energetycznej: C\"
  },
  {
    \"name\": \"Kuchenka mikrofalowa wolnostojąca MIKROFALA 700W\",
    \"price\": 299.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/114139/d6b5088747da9312ed8ba8be4ef0/Kuchenka-mikrofalowa-wolnostojaca-MIKROFALA-700W\",
    \"desc\": \"Pojemność: 20 l, Moc mikrofal: 700 W, Grill: brak\"
  },
  {
    \"name\": \"PRZENOŚNA MINI PRALKA TURYSTYCZNA WIRÓWKA WSAD 3kg\",
    \"price\": 299,
    \"imageURL\": \"https://a.allegroimg.com/s180/115252/1095cc104dcc82ad53e72d532fb2/PRZENOSNA-MINI-PRALKA-TURYSTYCZNA-WIROWKA-WSAD-3kg\",
    \"desc\": \"Rodzaj: pralka wirnikowa z wirówką, Maksymalny wsad - pranie: 3 kg, Maksymalny wsad - wirowanie: 1 kg\"
  },
  {
    \"name\": \"Kuchnia Amica 57GEH3.33HZpTaDNA(Xx) Chłodny front\",
    \"price\": 1340.27,
    \"imageURL\": \"https://a.allegroimg.com/s180/0349fb/f06316da4e0580aa566fb6746470/Kuchnia-Amica-57GEH3-33HZpTaDNA-Xx-Chlodny-front\",
    \"desc\": \"Rodzaj płyty: gazowa, Liczba pól grzewczych/palników: 4, Rodzaj piekarnika: elektryczny, Klasa efektywności energetycznej: A\"
  },
  {
    \"name\": \"Lodówka Polar POB 601 EK czarna 272l 159cm LED\",
    \"price\": 1229,
    \"imageURL\": \"https://a.allegroimg.com/s180/117d5b/03693ed14076bcbb14fd042b765d/Lodowka-Polar-POB-601-EK-czarna-272l-159cm-LED\",
    \"desc\": \"Rodzaj: dwudrzwiowa\"
  }
]`);

const c = gifts as BaseGift[];

export default c;
