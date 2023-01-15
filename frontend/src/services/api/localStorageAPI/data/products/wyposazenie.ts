import type { BaseGift } from '../gifts';

const gifts: unknown = JSON.parse(`[
  {
    \"name\": \"SZATKOWNICA DO WARZYW KRAJALNICA TARKA 13W1\",
    \"price\": 129.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/118997/f0a7dffa4e9584bfb96f52fc9522/SZATKOWNICA-DO-WARZYW-KRAJALNICA-TARKA-13W1\",
    \"desc\": \"Stan: Nowy, Marka: inna (JKR)\"
  },
  {
    \"name\": \"KRAJACZ UNIWERSALNY SIEKACZ DO WARZYW CEBULI DUŻY\",
    \"price\": 49.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/115e5b/5c0410754e98bbf772c08a1d05e1/KRAJACZ-UNIWERSALNY-SIEKACZ-DO-WARZYW-CEBULI-DUZY\",
    \"desc\": \"Stan: Nowy, Marka: Kadax\"
  },
  {
    \"name\": \"TORTOWNICA BLACHA FORMA PIECZENIA CIAST 3EL.ZESTAW\",
    \"price\": 49.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/113359/21daac1d44e8be1b0ee849dd0b9a/TORTOWNICA-BLACHA-FORMA-PIECZENIA-CIAST-3EL-ZESTAW\",
    \"desc\": \"Stan: Nowy, Marka: inna (IMS-NOVA), Rodzaj: tortownica\"
  },
  {
    \"name\": \"KOMPLET POŚCIELI 160x200 GRUBA BAWEŁNA POŚCIEL\",
    \"price\": 35.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/117f9e/49205cfa4cba9bbc43f3c387c8cc/KOMPLET-POSCIELI-160x200-GRUBA-BAWELNA-POSCIEL\",
    \"desc\": \"Stan: Nowy, Materiał: satyna bawełniana, Długość poszewki na kołdrę: 200 cm, Szerokość poszewki na kołdrę: 160 cm\"
  },
  {
    \"name\": \"DYWAN BOHO BERBER DO SALONU SYPIALNI 60x100\",
    \"price\": 109.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a891/e672a9854e999d42c60a97a2521f/DYWAN-BOHO-BERBER-DO-SALONU-SYPIALNI-60x100\",
    \"desc\": \"Stan: Nowy, Rodzaj: shaggy, Materiał wykonania: poliester, Długość: 100 cm, Grubość: 30 mm\"
  },
  {
    \"name\": \"TORTOWNICA BLACHA FORMA PIECZENIA CIAST 3EL.ZESTAW\",
    \"price\": 49.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/113359/21daac1d44e8be1b0ee849dd0b9a/TORTOWNICA-BLACHA-FORMA-PIECZENIA-CIAST-3EL-ZESTAW\",
    \"desc\": \"Stan: Nowy, Marka: inna (IMS-NOVA), Rodzaj: tortownica\"
  },
  {
    \"name\": \"PREZENT NA DZIEŃ BABCI I DZIADKA ZESTAW KUBKI HAFT\",
    \"price\": 104.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a530/594528754fe780e68e45bcdad184/PREZENT-NA-DZIEN-BABCI-I-DZIADKA-ZESTAW-KUBKI-HAFT\",
    \"desc\": \"Stan: Nowy, Okazja: Dzień Babci, Rodzaj gadżetu: ręczniki\"
  },
  {
    \"name\": \"PREZENT DLA BABCI I DZIADKA PUDEŁKO RĘCZNIK GRAWER\",
    \"price\": 64.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/115069/645d429f483db0e47c588109adeb/PREZENT-DLA-BABCI-I-DZIADKA-PUDELKO-RECZNIK-GRAWER\",
    \"desc\": \"Stan: Nowy, Okazja: Dzień Babci, Rodzaj gadżetu: ręczniki\"
  },
  {
    \"name\": \"CHLEBAK Z DREWNIANĄ POKRYWKĄ POJEMNIK NA PIECZYWO\",
    \"price\": 94.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/117899/8fb53b3a41a08bf04ca03f606ae5/CHLEBAK-Z-DREWNIANA-POKRYWKA-POJEMNIK-NA-PIECZYWO\",
    \"desc\": \"Stan: Nowy, Rodzaj: jednoczęściowy\"
  },
  {
    \"name\": \"TABLICZKA NA SŁODYCZE PREZENT DLA BABCI I DZIADKA\",
    \"price\": 69.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/113aa7/5b962c1a49459f5e3c2874f79d6a/TABLICZKA-NA-SLODYCZE-PREZENT-DLA-BABCI-I-DZIADKA\",
    \"desc\": \"Stan: Nowy, Okazja: Dzień Babci, Rodzaj gadżetu: ramka z życzeniami\"
  },
  {
    \"name\": \"Słoik plastikowy 1500ml pojemnik 1,5L makaron 6szt\",
    \"price\": 33.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d10b/69f848a94c0396c45a4eb25fe316/Sloik-plastikowy-1500ml-pojemnik-1-5L-makaron-6szt\",
    \"desc\": \"Stan: Nowy, Materiał wykonania: tworzywo sztuczne, Pojemność: 1.5 l\"
  },
  {
    \"name\": \"KRAJACZ UNIWERSALNY SIEKACZ DO WARZYW CEBULI DUŻY\",
    \"price\": 49.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/115e5b/5c0410754e98bbf772c08a1d05e1/KRAJACZ-UNIWERSALNY-SIEKACZ-DO-WARZYW-CEBULI-DUZY\",
    \"desc\": \"Stan: Nowy, Marka: Kadax\"
  },
  {
    \"name\": \"Komplet pościeli 160x200 + 2 poszewki pościel\",
    \"price\": 57.49,
    \"imageURL\": \"https://a.allegroimg.com/s180/11021e/321566f2459bb3da65921dcfe1e6/Komplet-poscieli-160x200-2-poszewki-posciel\",
    \"desc\": \"Stan: Nowy, Materiał: satyna bawełniana, Długość poszewki na kołdrę: 200 cm, Szerokość poszewki na kołdrę: 160 cm\"
  },
  {
    \"name\": \"PREZENT KOMPLET RĘCZNIKÓW 70x140 BABCIA I DZIADEK\",
    \"price\": 74.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d5bf/53bc9a524ae49f327a889a0260c0/PREZENT-KOMPLET-RECZNIKOW-70x140-BABCIA-I-DZIADEK\",
    \"desc\": \"Stan: Nowy, Okazja: Dzień Babci, Rodzaj gadżetu: ręczniki\"
  },
  {
    \"name\": \"SKRZYNKA DLA DZIADKA prezent dzień babci i dziadka\",
    \"price\": 45,
    \"imageURL\": \"https://a.allegroimg.com/s180/11442b/bf0cb9bf4ed8af495736ec695fa1/SKRZYNKA-DLA-DZIADKA-prezent-dzien-babci-i-dziadka\",
    \"desc\": \"Stan: Nowy, Okazja: Dzień Dziadka, Rodzaj gadżetu: opakowanie na alkohol\"
  },
  {
    \"name\": \"PREZENT NA DZIEŃ BABCI I DZIADKA ZESTAW RĘCZNIKÓW\",
    \"price\": 104.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/117a0c/6d6203c44c6a8a261ea08e98216a/PREZENT-NA-DZIEN-BABCI-I-DZIADKA-ZESTAW-RECZNIKOW\",
    \"desc\": \"Stan: Nowy, Okazja: Dzień Babci, Rodzaj gadżetu: ręczniki\"
  },
  {
    \"name\": \"Zestaw prezent czekolada konfitura Babci Święta\",
    \"price\": 37.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11f834/44d893aa40f289c62b95950b9f59/Zestaw-prezent-czekolada-konfitura-Babci-Swieta\",
    \"desc\": \"Stan: Nowy, Okazja: Dzień Babci, Rodzaj gadżetu: kosz prezentowy\"
  },
  {
    \"name\": \"PAPIER TOALETOWY ALMUSSO BIG 3 WARSTWY 40 ROLEK\",
    \"price\": 54.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/114c7e/2cf74aeb436fb4f1bf1d8ae6670c/PAPIER-TOALETOWY-ALMUSSO-BIG-3-WARSTWY-40-ROLEK\",
    \"desc\": \"Stan: Nowy, Marka: Almusso, Postać: rolka, Liczba sztuk w opakowaniu: 40 szt., Liczba warstw: 3, Długość rolki: 11.55 m\"
  },
  {
    \"name\": \"SERWIS OBIADOWY KOMPLET TALERZE CZARNY 6 os 18 el\",
    \"price\": 163,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ece0/5137c54c47dc938f863a9db2c6df/SERWIS-OBIADOWY-KOMPLET-TALERZE-CZARNY-6-os-18-el\",
    \"desc\": \"Stan: Nowy, Marka: Luminarc, Liczba osób: 6, Rodzaj serwisu: obiadowy, Liczba elementów w zestawie: 18\"
  },
  {
    \"name\": \"SZATKOWNICA DO WARZYW KRAJALNICA TARKA 13W1\",
    \"price\": 129.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/118997/f0a7dffa4e9584bfb96f52fc9522/SZATKOWNICA-DO-WARZYW-KRAJALNICA-TARKA-13W1\",
    \"desc\": \"Stan: Nowy, Marka: inna (JKR)\"
  },
  {
    \"name\": \"SERWIS OBIADOWY KOMPLET TALERZE CZARNY 6 os 18 el\",
    \"price\": 163,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ece0/5137c54c47dc938f863a9db2c6df/SERWIS-OBIADOWY-KOMPLET-TALERZE-CZARNY-6-os-18-el\",
    \"desc\": \"Stan: Nowy, Marka: Luminarc, Liczba osób: 6, Rodzaj serwisu: obiadowy, Liczba elementów w zestawie: 18\"
  },
  {
    \"name\": \"Komplet Pościeli 160x200 Bawełna Poszewka 70x80\",
    \"price\": 51.69,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b511/d302fc984adeaeeb3c9d97dbbf6a/Komplet-Poscieli-160x200-Bawelna-Poszewka-70x80\",
    \"desc\": \"Stan: Nowy, Materiał: satyna bawełniana, Długość poszewki na kołdrę: 200 cm, Szerokość poszewki na kołdrę: 160 cm\"
  },
  {
    \"name\": \"FIRANA DO SALONU FIRANY GOTOWE NA TAŚMIE 500x230\",
    \"price\": 118,
    \"imageURL\": \"https://a.allegroimg.com/s180/1162d9/a482cb24477abd97979a803570a4/FIRANA-DO-SALONU-FIRANY-GOTOWE-NA-TASMIE-500x230\",
    \"desc\": \"Stan: Nowy, Materiał: woal\"
  },
  {
    \"name\": \"KOMPLET TALERZY NA 6 OSÓB OBIADOWY 18 ELEMENTÓW\",
    \"price\": 199.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/112d97/adcb1c0243f393974f03333c032e/KOMPLET-TALERZY-NA-6-OSOB-OBIADOWY-18-ELEMENTOW\",
    \"desc\": \"Stan: Nowy, Marka: Prymus AGD, Liczba osób: 6, Rodzaj serwisu: obiadowy, Liczba elementów w zestawie: 18\"
  },
  {
    \"name\": \"Prezent na DZIEŃ BABCI i DZIADKA dziadków wzory\",
    \"price\": 54.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b468/f7ea2a1b40f29795fb571c46b95d/Prezent-na-DZIEN-BABCI-i-DZIADKA-dziadkow-wzory\",
    \"desc\": \"Stan: Nowy, Okazja: Dzień Babci, Rodzaj gadżetu: kosz prezentowy\"
  },
  {
    \"name\": \"DYWAN 160x220 BCF LUXURY MIĘKKI NOWOCZESNE WZORY\",
    \"price\": 146.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1137d4/5f49125b415face4290227955548/DYWAN-160x220-BCF-LUXURY-MIEKKI-NOWOCZESNE-WZORY\",
    \"desc\": \"Stan: Nowy, Rodzaj: z krótkim włosiem, Materiał wykonania: polipropylen, Długość: 220 cm, Grubość: 8 mm\"
  },
  {
    \"name\": \"STOLNICA SILIKONOWA MATA KUCHENNA WAŁEK ZESTAW XXL\",
    \"price\": 74.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11dd65/b37983d14f42a4fe060bb363cbca/STOLNICA-SILIKONOWA-MATA-KUCHENNA-WALEK-ZESTAW-XXL\",
    \"desc\": \"Stan: Nowy, Rodzaj: zestaw\"
  },
  {
    \"name\": \"KALENDARZ DLA BABCI I DZIADKA ZE ZDJĘCIEM PREZENT\",
    \"price\": 29.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1124f0/b54a4abb4baea4f09d4277ebd603/KALENDARZ-DLA-BABCI-I-DZIADKA-ZE-ZDJECIEM-PREZENT\",
    \"desc\": \"Stan: Nowy, Okazja: Dzień Babci\"
  },
  {
    \"name\": \"Skrzynka na alkohol MaszLitra prezent na urodziny\",
    \"price\": 45,
    \"imageURL\": \"https://a.allegroimg.com/s180/11f0df/c73f29e14780965c0c9ba62dbab4/Skrzynka-na-alkohol-MaszLitra-prezent-na-urodziny\",
    \"desc\": \"Stan: Nowy, Okazja: Dzień Chłopaka, Rodzaj gadżetu: opakowanie na alkohol\"
  },
  {
    \"name\": \"KOMPLET POŚCIELI BAWEŁNIANEJ 200x220 DWUSTRONNA\",
    \"price\": 59.5,
    \"imageURL\": \"https://a.allegroimg.com/s180/1174d7/321d17a64dca9dd2528ef2dc235c/KOMPLET-POSCIELI-BAWELNIANEJ-200x220-DWUSTRONNA\",
    \"desc\": \"Stan: Nowy, Materiał: satyna bawełniana, Długość poszewki na kołdrę: 220 cm, Szerokość poszewki na kołdrę: 200 cm\"
  },
  {
    \"name\": \"Słoik plastikowy 1500ml pojemnik 1,5L makaron 6szt\",
    \"price\": 33.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d10b/69f848a94c0396c45a4eb25fe316/Sloik-plastikowy-1500ml-pojemnik-1-5L-makaron-6szt\",
    \"desc\": \"Stan: Nowy, Materiał wykonania: tworzywo sztuczne, Pojemność: 1.5 l\"
  },
  {
    \"name\": \"ZESTAW BITÓW SZCZĘKA prezent urodziny 18-99 faceta\",
    \"price\": 79.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/118a4b/420d57574f11ab4c5129db618908/ZESTAW-BITOW-SZCZEKA-prezent-urodziny-18-99-faceta\",
    \"desc\": \"Stan: Nowy, Okazja: Dzień Chłopaka, Rodzaj gadżetu: inny\"
  },
  {
    \"name\": \"SUSZARKA DO NACZYŃ CZARNA STOJĄCA OCIEKACZ DUŻA\",
    \"price\": 59.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11f654/5cee41744d5d8fba44dccd18b2e9/SUSZARKA-DO-NACZYN-CZARNA-STOJACA-OCIEKACZ-DUZA\",
    \"desc\": \"Stan: Nowy, Marka: Brunbeste\"
  },
  {
    \"name\": \"Prezent na dzień i babci dziadka zestaw box kubek\",
    \"price\": 79,
    \"imageURL\": \"https://a.allegroimg.com/s180/11bf34/5f938ba24eefa281689ec1ad8ef2/Prezent-na-dzien-i-babci-dziadka-zestaw-box-kubek\",
    \"desc\": \"Stan: Nowy, Okazja: upominek uniwersalny, Rodzaj gadżetu: ręczniki\"
  },
  {
    \"name\": \"BLACK OPIUM - SOJOWA ŚWIECZKA ZAPACHOWA W SZKLE\",
    \"price\": 26.59,
    \"imageURL\": \"https://a.allegroimg.com/s180/11e826/b28fab694728b5793e4ea79e8941/BLACK-OPIUM-SOJOWA-SWIECZKA-ZAPACHOWA-W-SZKLE\",
    \"desc\": \"Stan: Nowy, Rodzaj: tradycyjna, Czas palenia: Do 75h, Zapach: drzewny, przyprawowy, świąteczny\"
  },
  {
    \"name\": \"STOLNICA SILIKONOWA MATA KUCHENNA WAŁEK ZESTAW XXL\",
    \"price\": 74.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11dd65/b37983d14f42a4fe060bb363cbca/STOLNICA-SILIKONOWA-MATA-KUCHENNA-WALEK-ZESTAW-XXL\",
    \"desc\": \"Stan: Nowy, Rodzaj: zestaw\"
  },
  {
    \"name\": \"KOMPLET POŚCIELI POŚCIEL 200x220 + PRZEŚCIERADŁO\",
    \"price\": 69.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/114b1b/ded87acf4bacbd43467b5706d73f/KOMPLET-POSCIELI-POSCIEL-200x220-PRZESCIERADLO\",
    \"desc\": \"Stan: Nowy, Materiał: satyna bawełniana, Długość poszewki na kołdrę: 220 cm, Szerokość poszewki na kołdrę: 200 cm\"
  },
  {
    \"name\": \"PREZENT NA DZIEŃ BABCI I DZIADKA ZESTAW KUBKÓW\",
    \"price\": 59.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11314c/34a4caf3412dadd83a07b4d1540e/PREZENT-NA-DZIEN-BABCI-I-DZIADKA-ZESTAW-KUBKOW\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"KUBKI PREZENT NA DZIEŃ BABCI I DZIADKA DUŻY ZESTAW\",
    \"price\": 104.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/111593/2cddb17945c8bf3f29c249ae7560/KUBKI-PREZENT-NA-DZIEN-BABCI-I-DZIADKA-DUZY-ZESTAW\",
    \"desc\": \"Stan: Nowy, Okazja: Dzień Babci, Rodzaj gadżetu: kosz prezentowy\"
  },
  {
    \"name\": \"CZOŁG NA PIWO prezent dla na Dzień Babci i Dziadka\",
    \"price\": 45,
    \"imageURL\": \"https://a.allegroimg.com/s180/11167f/ee6d34f44fca804e8a2198443902/CZOLG-NA-PIWO-prezent-dla-na-Dzien-Babci-i-Dziadka\",
    \"desc\": \"Stan: Nowy, Okazja: Dzień Dziadka, Rodzaj gadżetu: opakowanie na alkohol\"
  },
  {
    \"name\": \"SKARPETY prezent DZIEŃ BABCI i DZIADKA na Święta\",
    \"price\": 22.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/111081/ee4f63034f2a9ab5b9cbadfdfe51/SKARPETY-prezent-DZIEN-BABCI-i-DZIADKA-na-Swieta\",
    \"desc\": \"Stan: Nowy, Okazja: Dzień Babci, Rodzaj gadżetu: inny\"
  },
  {
    \"name\": \"DWUSTRONNA POŚCIEL BAWEŁNA 200X220 + 2 POSZEWKI\",
    \"price\": 55.55,
    \"imageURL\": \"https://a.allegroimg.com/s180/11359b/163502464b479b913191ec648502/DWUSTRONNA-POSCIEL-BAWELNA-200X220-2-POSZEWKI\",
    \"desc\": \"Stan: Nowy, Materiał: satyna bawełniana, Długość poszewki na kołdrę: 220 cm, Szerokość poszewki na kołdrę: 200 cm\"
  },
  {
    \"name\": \"PREZENT NA DZIEŃ BABCI DZIADKA ZESTAW RĘCZNIK HAFT\",
    \"price\": 59.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1173bb/5aecee3d4d75b409d00796d702ed/PREZENT-NA-DZIEN-BABCI-DZIADKA-ZESTAW-RECZNIK-HAFT\",
    \"desc\": \"Stan: Nowy, Okazja: Dzień Babci, Rodzaj gadżetu: ręczniki\"
  },
  {
    \"name\": \"KOSZULKA prezent na DZIEŃ BABCI i dla DZIADKA wzor\",
    \"price\": 35.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/118cc6/a5581ec745f888265c6d1df34db3/KOSZULKA-prezent-na-DZIEN-BABCI-i-dla-DZIADKA-wzor\",
    \"desc\": \"Stan: Nowy, Okazja: Dzień Dziadka, Rodzaj gadżetu: koszulka\"
  },
  {
    \"name\": \"Serwis obiadowy komplet talerzy DIWALI 18 el.\",
    \"price\": 159,
    \"imageURL\": \"https://a.allegroimg.com/s180/117c11/9c6f114546159f05ee4a88ffbe05/Serwis-obiadowy-komplet-talerzy-DIWALI-18-el\",
    \"desc\": \"Stan: Nowy, Marka: Luminarc, Liczba osób: 6, Rodzaj serwisu: obiadowy, Liczba elementów w zestawie: 18\"
  },
  {
    \"name\": \"ZESTAW GARNKÓW STALOWYCH INDUKCJA KOMPLET 6 EL.\",
    \"price\": 116.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ef4e/b48b4e124ec1bc16ee2a5f2eb434/ZESTAW-GARNKOW-STALOWYCH-INDUKCJA-KOMPLET-6-EL\",
    \"desc\": \"Stan: Nowy, Liczba elementów w zestawie: 6, Marka: Edel-Hoff\"
  },
  {
    \"name\": \"Prezent na DZIEŃ BABCI i DZIADKA wzory dziadków\",
    \"price\": 49.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/119210/e6ec944e4c5dbdc197aef3982629/Prezent-na-DZIEN-BABCI-i-DZIADKA-wzory-dziadkow\",
    \"desc\": \"Stan: Nowy, Okazja: Dzień Babci, Rodzaj gadżetu: kosz prezentowy\"
  },
  {
    \"name\": \"ZESTAW POJEMNIKÓW KOMPLET KAWA HERBATA CUKIER SÓL\",
    \"price\": 76.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11e312/8eddbac041b6846a7b4829ac8654/ZESTAW-POJEMNIKOW-KOMPLET-KAWA-HERBATA-CUKIER-SOL\",
    \"desc\": \"Stan: Nowy, Materiał wykonania: metal\"
  },
  {
    \"name\": \"FIRANA GOTOWA ŁUK gipiura WOAL 400x160\",
    \"price\": 77.85,
    \"imageURL\": \"https://a.allegroimg.com/s180/115bf5/eea6383448ad89a317b1fa1be497/FIRANA-GOTOWA-LUK-gipiura-WOAL-400x160\",
    \"desc\": \"Stan: Nowy, Materiał: woal\"
  },
  {
    \"name\": \"PREZENT DLA BABCI I DZIADKA KUBEK RĘCZNIK ZESTAW\",
    \"price\": 109.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1184ea/722fdb434cdabd39d3f01b5a4a2b/PREZENT-DLA-BABCI-I-DZIADKA-KUBEK-RECZNIK-ZESTAW\",
    \"desc\": \"Stan: Nowy, Okazja: upominek uniwersalny, Rodzaj gadżetu: kubek\"
  },
  {
    \"name\": \"PREZENT NA DZIEŃ BABCI I DZIADKA ZESTAW KUBKI HAFT\",
    \"price\": 104.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a530/594528754fe780e68e45bcdad184/PREZENT-NA-DZIEN-BABCI-I-DZIADKA-ZESTAW-KUBKI-HAFT\",
    \"desc\": \"Stan: Nowy, Okazja: Dzień Babci, Rodzaj gadżetu: ręczniki\"
  },
  {
    \"name\": \"MATA ŁAZIENKOWA SZYBKOSCHNĄCA CHŁONNA DYWANIK\",
    \"price\": 40,
    \"imageURL\": \"https://a.allegroimg.com/s180/115102/b638701843d79fc44219be317fab/MATA-LAZIENKOWA-SZYBKOSCHNACA-CHLONNA-DYWANIK\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"SZKATUŁKA ORGANIZER NA KOSMETYKI SZUFLADY XXL\",
    \"price\": 46.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11fcad/2ebdcab2409bb428340cc7835243/SZKATULKA-ORGANIZER-NA-KOSMETYKI-SZUFLADY-XXL\",
    \"desc\": \"Stan: Nowy, Wysokość: 27 cm\"
  },
  {
    \"name\": \"DYWAN 120x170 BCF LUXURY MIĘKKI NOWOCZESNE WZORY\",
    \"price\": 84.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1146f0/dccd508446bfb9a8ff8f6f40a9fd/DYWAN-120x170-BCF-LUXURY-MIEKKI-NOWOCZESNE-WZORY\",
    \"desc\": \"Stan: Nowy, Rodzaj: z krótkim włosiem, Materiał wykonania: polipropylen, Długość: 170 cm, Grubość: 8 mm\"
  },
  {
    \"name\": \"Krajacz do Warzyw Cebuli Rozdrabniacz Ręczny Duży\",
    \"price\": 31.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/116606/c82109694d8c99a5e5ab8c3e567b/Krajacz-do-Warzyw-Cebuli-Rozdrabniacz-Reczny-Duzy\",
    \"desc\": \"Stan: Nowy, Marka: Galicja\"
  },
  {
    \"name\": \"CHLEBAK POJEMNIK NA PIECZYWO Z DREWNIANĄ POKRYWKĄ\",
    \"price\": 86.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a138/67f6189d49428f369e55952cce0c/CHLEBAK-POJEMNIK-NA-PIECZYWO-Z-DREWNIANA-POKRYWKA\",
    \"desc\": \"Stan: Nowy, Rodzaj: jednoczęściowy\"
  },
  {
    \"name\": \"FIRANA DO KUCHNI firanka woal z gipiurą 200x100wys\",
    \"price\": 59.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a5c0/8202824c48caa42e093c0ee639f1/FIRANA-DO-KUCHNI-firanka-woal-z-gipiura-200x100wys\",
    \"desc\": \"Stan: Nowy, Materiał: woal\"
  },
  {
    \"name\": \"DWUSTRONNA POŚCIEL BAWEŁNA 160X200 + 2 POSZEWKI\",
    \"price\": 58.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11cf90/aed05a114c7081fd344509bcbc13/DWUSTRONNA-POSCIEL-BAWELNA-160X200-2-POSZEWKI\",
    \"desc\": \"Stan: Nowy, Materiał: bawełna, Długość poszewki na kołdrę: 200 cm, Szerokość poszewki na kołdrę: 160 cm\"
  },
  {
    \"name\": \"PREZENT NA DZIEŃ BABCI I DZIADKA ZESTAW RĘCZNIKÓW\",
    \"price\": 104.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/117a0c/6d6203c44c6a8a261ea08e98216a/PREZENT-NA-DZIEN-BABCI-I-DZIADKA-ZESTAW-RECZNIKOW\",
    \"desc\": \"Stan: Nowy, Okazja: Dzień Babci, Rodzaj gadżetu: ręczniki\"
  },
  {
    \"name\": \"PREZENT DLA BABCI ZESTAW KUBEK HERBATA UPOMINEK NA\",
    \"price\": 64.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/112fcb/0e12a2d24a658126e5d381d61a8a/PREZENT-DLA-BABCI-ZESTAW-KUBEK-HERBATA-UPOMINEK-NA\",
    \"desc\": \"Stan: Nowy, Okazja: Dzień Babci, Rodzaj gadżetu: kosz prezentowy\"
  },
  {
    \"name\": \"KOMPLET POŚCIELI 200x220 100% BAWEŁNA + 2 POSZEWKI\",
    \"price\": 84.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11cb9a/18ee9cb8461d8910f20659444eff/KOMPLET-POSCIELI-200x220-100-BAWELNA-2-POSZEWKI\",
    \"desc\": \"Stan: Nowy, Materiał: bawełna, Długość poszewki na kołdrę: 220 cm, Szerokość poszewki na kołdrę: 200 cm\"
  },
  {
    \"name\": \"Prezent dla Babć i Dziadków album na zdjęcia\",
    \"price\": 41.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/112729/314e8e624585ae9ef3bd9aaf6065/Prezent-dla-Babc-i-Dziadkow-album-na-zdjecia\",
    \"desc\": \"Stan: Nowy, Okazja: Dzień Babci, Rodzaj gadżetu: dekoracje\"
  },
  {
    \"name\": \"SUSZARKA DO NACZYŃ DWUPOZIOMOWA CZARNA OCIEKACZ\",
    \"price\": 69,
    \"imageURL\": \"https://a.allegroimg.com/s180/114136/e53d893f426eb8a08e4d54d6ef77/SUSZARKA-DO-NACZYN-DWUPOZIOMOWA-CZARNA-OCIEKACZ\",
    \"desc\": \"Stan: Nowy, Marka: Brunbeste\"
  },
  {
    \"name\": \"ZESTAW GARNKÓW STALOWYCH INDUKCJA KOMPLET 12 EL.\",
    \"price\": 269.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ebf9/2518467c4456bf142650dec7c21f/ZESTAW-GARNKOW-STALOWYCH-INDUKCJA-KOMPLET-12-EL\",
    \"desc\": \"Stan: Nowy, Liczba elementów w zestawie: 12, Marka: Edel-Hoff\"
  },
  {
    \"name\": \"FIRANA GOTOWA NA PRZELOTKACH 145x230 ŚNIEŻNOBIAŁA\",
    \"price\": 23.8,
    \"imageURL\": \"https://a.allegroimg.com/s180/11396e/382a321d4b329b1b51cd1022f1fe/FIRANA-GOTOWA-NA-PRZELOTKACH-145x230-SNIEZNOBIALA\",
    \"desc\": \"Stan: Nowy, Materiał: woal\"
  },
  {
    \"name\": \"MATA ŁAZIENKOWA SZYBKOSCHNĄCA CHŁONNA DYWANIK XL\",
    \"price\": 48.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ce21/d572be564dd6acfc1027bf190247/MATA-LAZIENKOWA-SZYBKOSCHNACA-CHLONNA-DYWANIK-XL\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"DYWAN SHAGGY WYSOKI PLUSZOWY WŁOCHACZ 100x160 cm\",
    \"price\": 59.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/110159/5dc1bcc8453aaa30b828725a0a18/DYWAN-SHAGGY-WYSOKI-PLUSZOWY-WLOCHACZ-100x160-cm\",
    \"desc\": \"Stan: Nowy, Rodzaj: shaggy, Materiał wykonania: poliamid, Długość: 160 cm, Grubość: 3 mm\"
  },
  {
    \"name\": \"DYWAN SHAGGY WYSOKI PLUSZOWY WŁOCHACZ 100x160 cm\",
    \"price\": 59.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/110159/5dc1bcc8453aaa30b828725a0a18/DYWAN-SHAGGY-WYSOKI-PLUSZOWY-WLOCHACZ-100x160-cm\",
    \"desc\": \"Stan: Nowy, Rodzaj: shaggy, Materiał wykonania: poliamid, Długość: 160 cm, Grubość: 3 mm\"
  },
  {
    \"name\": \"PREZENT NA DZIEŃ BABCI I DZIADKA KOMPLET RĘCZNIKÓW\",
    \"price\": 64.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/114439/d1ea801146aaaf9b684a819c3477/PREZENT-NA-DZIEN-BABCI-I-DZIADKA-KOMPLET-RECZNIKOW\",
    \"desc\": \"Stan: Nowy, Okazja: Dzień Babci, Rodzaj gadżetu: ręczniki\"
  },
  {
    \"name\": \"SŁODKA CHATKA PREZENT DLA NA DZIEŃ BABCI I DZIADKA\",
    \"price\": 45,
    \"imageURL\": \"https://a.allegroimg.com/s180/11892c/b9ae6f584610a96403f7718583f3/SLODKA-CHATKA-PREZENT-DLA-NA-DZIEN-BABCI-I-DZIADKA\",
    \"desc\": \"Stan: Nowy, Okazja: Dzień Babci, Rodzaj gadżetu: kosz prezentowy\"
  },
  {
    \"name\": \"NOWOCZESNY GĘSTY DYWAN 120x170 RÓŻNE WZORY\",
    \"price\": 129,
    \"imageURL\": \"https://a.allegroimg.com/s180/117b5e/87dac45b4120bfcef554e9c02c92/NOWOCZESNY-GESTY-DYWAN-120x170-ROZNE-WZORY\",
    \"desc\": \"Stan: Nowy, Rodzaj: z krótkim włosiem, Materiał wykonania: polipropylen, Długość: 170 cm, Grubość: 8 mm\"
  },
  {
    \"name\": \"CHLEBAK Z DREWNIANĄ POKRYWKĄ POJEMNIK NA PIECZYWO\",
    \"price\": 94.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/117899/8fb53b3a41a08bf04ca03f606ae5/CHLEBAK-Z-DREWNIANA-POKRYWKA-POJEMNIK-NA-PIECZYWO\",
    \"desc\": \"Stan: Nowy, Rodzaj: jednoczęściowy\"
  },
  {
    \"name\": \"Forma Pierogów Uszek Ravioli Ciastek Pierogownica\",
    \"price\": 14.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/117045/1b208f174760a861a1760dfd6e1d/Forma-Pierogow-Uszek-Ravioli-Ciastek-Pierogownica\",
    \"desc\": \"Stan: Nowy\"
  }
]`);

const c = gifts as BaseGift[];

export default c;
