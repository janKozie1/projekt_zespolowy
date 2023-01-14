import type { BaseGift } from '../gifts';

const gifts: unknown = JSON.parse(`[
  {
    \"name\": \"SAMOSSĄCA MYJKA CIŚNIENIOWA RIWALL 230 BAR ew Turb\",
    \"price\": 319,
    \"imageURL\": \"https://a.allegroimg.com/s180/032268/13b752c14c6abe0905c0ebde2896/SAMOSSACA-MYJKA-CISNIENIOWA-RIWALL-230-BAR-ew-Turb\",
    \"desc\": \"Stan: Nowy, Marka: Riwall, Rodzaj pompy: aluminiowa, Ciśnienie robocze: 230 bar, Maksymalna moc: 1500 W, Napięcie zasilania: 230 V\"
  },
  {
    \"name\": \"MAKITA CLX224X ZESTAW WKRĘTARKA ZAKRĘTARKA +CZAPKA\",
    \"price\": 799,
    \"imageURL\": \"https://a.allegroimg.com/s180/1153e0/67d9d56742e09f5a5fc420626177/MAKITA-CLX224X-ZESTAW-WKRETARKA-ZAKRETARKA-CZAPKA\",
    \"desc\": \"Stan: Nowy, Zasilanie: akumulatorowe, Napięcie (V): 12 V, Rodzaj silnika: silnik szczotkowy\"
  },
  {
    \"name\": \"WYSOKOCIŚNIENIOWA MYJKA KARCHER K3 ZESTAW GIGA XXL\",
    \"price\": 1068.75,
    \"imageURL\": \"https://a.allegroimg.com/s180/11cc85/790da5924cfc9c7a93bec6c0ee5f/WYSOKOCISNIENIOWA-MYJKA-KARCHER-K3-ZESTAW-GIGA-XXL\",
    \"desc\": \"Stan: Nowy, Marka: Kärcher, Rodzaj pompy: kompozytowa, Ciśnienie robocze: 80 bar, Maksymalna moc: 1600 W, Napięcie zasilania: 230 V\"
  },
  {
    \"name\": \"STACJA LUTOWNICZA SPAWARKA HOT-AIR 858D 100-500°C\",
    \"price\": 171.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b9d8/1c0a374641b4869cce8fb6b330a8/STACJA-LUTOWNICZA-SPAWARKA-HOT-AIR-858D-100-500C\",
    \"desc\": \"Stan: Nowy, Moc: 700 W, Marka: Techrebal, Zasilanie: sieciowe\"
  },
  {
    \"name\": \"PIŁA PILARKA ŁAŃCUCHOWA AKUMULATOROWA 6CAL 2X AKU\",
    \"price\": 289.92,
    \"imageURL\": \"https://a.allegroimg.com/s180/114b30/8d167ac34760aa4d473109bcedf5/PILA-PILARKA-LANCUCHOWA-AKUMULATOROWA-6CAL-2X-AKU\",
    \"desc\": \"Stan: Nowy, Marka: Inny producent (REDDEVILS totalstore), Zasilanie: akumulatorowe\"
  },
  {
    \"name\": \"KLUCZE PŁASKO OCZKOWE 6-32 TORX ZESTAW KLUCZY 47sz\",
    \"price\": 295,
    \"imageURL\": \"https://b.allegroimg.com/s180/03da34/7d3dc97e4d96bcdd4cec2771d05b/KLUCZE-PLASKO-OCZKOWE-6-32-TORX-ZESTAW-KLUCZY-47sz\",
    \"desc\": \"Stan: Nowy, Marka: inna (SV), Rodzaj klucza: płasko-oczkowy\"
  },
  {
    \"name\": \"SPAWARKA INWERTOROWA PÓŁAUTOMAT MIGOMAT MIG 250\",
    \"price\": 599,
    \"imageURL\": \"https://a.allegroimg.com/s180/11700e/a83fcecf423b8416efd5e4cbe83a/SPAWARKA-INWERTOROWA-POLAUTOMAT-MIGOMAT-MIG-250\",
    \"desc\": \"Stan: Nowy, Marka: Weldbox, Zakres spawania: 30-130 A\"
  },
  {
    \"name\": \"WIERTARKO WKRĘTARKA AKUMULATOROWA 21V WIERTARKA2AH\",
    \"price\": 219,
    \"imageURL\": \"https://a.allegroimg.com/s180/117a12/c8963f054c459eb5adb53b00f7f9/WIERTARKO-WKRETARKA-AKUMULATOROWA-21V-WIERTARKA2AH\",
    \"desc\": \"Stan: Nowy, Zasilanie: akumulatorowe, Napięcie (V): 20 V, Rodzaj silnika: silnik szczotkowy\"
  },
  {
    \"name\": \"NASADKI DO USZKODZONYCH OBROBIONYCH ŚRUB NAKRĘTEK\",
    \"price\": 69.95,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d19d/5fe42e6d498486abd97726152480/NASADKI-DO-USZKODZONYCH-OBROBIONYCH-SRUB-NAKRETEK\",
    \"desc\": \"Stan: Nowy, Marka: Vorfal, Rodzaj klucza: nasadowy\"
  },
  {
    \"name\": \"MINI PIŁA ŁAŃCUCHOWA AKUMULATOROWA GAŁĘZIÓWKA+2AKU\",
    \"price\": 169,
    \"imageURL\": \"https://a.allegroimg.com/s180/113555/e2252ac1487cbb2106fd55e3357d/MINI-PILA-LANCUCHOWA-AKUMULATOROWA-GALEZIOWKA-2AKU\",
    \"desc\": \"Stan: Nowy, Marka: Kraft&Dale, Zasilanie: akumulatorowe\"
  },
  {
    \"name\": \"MOCNA PIŁA PILARKA ŁAŃCUCHOWA SPALINOWA 2,7KM XXXL\",
    \"price\": 429.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1101e2/e30e337241a19f95e4f9a7ce8442/MOCNA-PILA-PILARKA-LANCUCHOWA-SPALINOWA-2-7KM-XXXL\",
    \"desc\": \"Stan: Nowy, Marka: Inny producent (VENOM PRIME 2023), Zasilanie: spalinowe\"
  },
  {
    \"name\": \"ZESTAW NARZĘDZI WALIZKA 186 ELEMENTÓW + GRZECHOTKI\",
    \"price\": 399,
    \"imageURL\": \"https://a.allegroimg.com/s180/11253a/08072518493483a13c7f9745323f/ZESTAW-NARZEDZI-WALIZKA-186-ELEMENTOW-GRZECHOTKI\",
    \"desc\": \"Stan: Nowy, Marka: Lex, Liczba elementów w zestawie: 186\"
  },
  {
    \"name\": \"NOWY MODEL WKRĘTARKA PARKSIDE +AKU+BITY PABS X 20V\",
    \"price\": 279,
    \"imageURL\": \"https://a.allegroimg.com/s180/11cb56/3609fa794aa2b0c2154e7b427313/NOWY-MODEL-WKRETARKA-PARKSIDE-AKU-BITY-PABS-X-20V\",
    \"desc\": \"Stan: Nowy, Zasilanie: akumulatorowe, Napięcie (V): 20 V, Rodzaj silnika: silnik szczotkowy\"
  },
  {
    \"name\": \"ZESTAW KOMPLET WIERTEŁ DŁUT BITÓW OTWORNIC 300 EL\",
    \"price\": 268,
    \"imageURL\": \"https://a.allegroimg.com/s180/06b85c/1ba5ded243b98157e3b29fab3f21/ZESTAW-KOMPLET-WIERTEL-DLUT-BITOW-OTWORNIC-300-EL\",
    \"desc\": \"Stan: Nowy, Marka: Inny producent, Liczba elementów w zestawie: 300\"
  },
  {
    \"name\": \"SAMOSSĄCA MYJKA CIŚNIENIOWA RIWALL 230 BAR ew Turb\",
    \"price\": 319,
    \"imageURL\": \"https://a.allegroimg.com/s180/032268/13b752c14c6abe0905c0ebde2896/SAMOSSACA-MYJKA-CISNIENIOWA-RIWALL-230-BAR-ew-Turb\",
    \"desc\": \"Stan: Nowy, Marka: Riwall, Rodzaj pompy: aluminiowa, Ciśnienie robocze: 230 bar, Maksymalna moc: 1500 W, Napięcie zasilania: 230 V\"
  },
  {
    \"name\": \"SATA KLUCZE PŁASKO OCZKOWE GRZECHOTKĄ KOMPLET ETUI\",
    \"price\": 199,
    \"imageURL\": \"https://a.allegroimg.com/s180/119bf6/b0dfe73b470db98ab9859f9466d9/SATA-KLUCZE-PLASKO-OCZKOWE-GRZECHOTKA-KOMPLET-ETUI\",
    \"desc\": \"Stan: Nowy, Marka: SATA, Rodzaj klucza: płasko-oczkowy\"
  },
  {
    \"name\": \"Spawarka Migomat MIG MAG MMA TIG LIFT 210 Synergia\",
    \"price\": 549,
    \"imageURL\": \"https://a.allegroimg.com/s180/119ad9/7e2dac034cfea938a0f85adb99af/Spawarka-Migomat-MIG-MAG-MMA-TIG-LIFT-210-Synergia\",
    \"desc\": \"Stan: Nowy, Marka: inna (RED TECHNIC), Zakres spawania: 20-210 A\"
  },
  {
    \"name\": \"PIŁA SPALINOWA PILARKA ŁAŃCUCHOWA 5,7km ZESTAW XXL\",
    \"price\": 398,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b9fa/b431be6547188b16349550284d40/PILA-SPALINOWA-PILARKA-LANCUCHOWA-5-7km-ZESTAW-XXL\",
    \"desc\": \"Stan: Nowy, Marka: Majster Polska, Zasilanie: spalinowe\"
  },
  {
    \"name\": \"PILARKA ELEKTRYCZNA PILA LANCUCHOWA 2500W TURBO XL\",
    \"price\": 329.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11e6dc/d7c76410430bb966c2d5b2162574/PILARKA-ELEKTRYCZNA-PILA-LANCUCHOWA-2500W-TURBO-XL\",
    \"desc\": \"Stan: Nowy, Marka: Inny producent (PROFFESIONAL TOOLS 2023), Zasilanie: sieciowe\"
  },
  {
    \"name\": \"Neo Tools ZESTAW KLUCZE nasadowe walizka 110el\",
    \"price\": 366.66,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ac99/7175a15d4abb831e82bb72789402/Neo-Tools-ZESTAW-KLUCZE-nasadowe-walizka-110el\",
    \"desc\": \"Stan: Nowy, Marka: Neo Tools, Rodzaj klucza: nasadowy\"
  },
  {
    \"name\": \"PIŁA SPALINOWA ŁAŃCUCHOWA PILARKA DREWNA + OLEJ\",
    \"price\": 339,
    \"imageURL\": \"https://a.allegroimg.com/s180/116b80/bbbd610543a488d13e4cc90022af/PILA-SPALINOWA-LANCUCHOWA-PILARKA-DREWNA-OLEJ\",
    \"desc\": \"Stan: Nowy, Marka: Wuber, Zasilanie: spalinowe\"
  },
  {
    \"name\": \"MAKITA CLX224X ZESTAW WKRĘTARKA ZAKRĘTARKA +CZAPKA\",
    \"price\": 799,
    \"imageURL\": \"https://a.allegroimg.com/s180/1153e0/67d9d56742e09f5a5fc420626177/MAKITA-CLX224X-ZESTAW-WKRETARKA-ZAKRETARKA-CZAPKA\",
    \"desc\": \"Stan: Nowy, Zasilanie: akumulatorowe, Napięcie (V): 12 V, Rodzaj silnika: silnik szczotkowy\"
  },
  {
    \"name\": \"PIŁA ŁAŃCUCHOWA AKUMULATOROWA 2X AKU 24V ZESTAW\",
    \"price\": 259,
    \"imageURL\": \"https://a.allegroimg.com/s180/11863e/13377d1745d1953324fdce473b1d/PILA-LANCUCHOWA-AKUMULATOROWA-2X-AKU-24V-ZESTAW\",
    \"desc\": \"Stan: Nowy, Marka: Inny producent (BBOX), Zasilanie: akumulatorowe\"
  },
  {
    \"name\": \"Pilarka PIŁA TARCZOWA ręczna do DREWNA 2300W 185mm\",
    \"price\": 174,
    \"imageURL\": \"https://a.allegroimg.com/s180/11e5c8/9ccb23cc401b820cef152637d73a/Pilarka-PILA-TARCZOWA-reczna-do-DREWNA-2300W-185mm\",
    \"desc\": \"Stan: Nowy, Marka: Inny producent (RED TECHNIC)\"
  },
  {
    \"name\": \"ZESTAW KLUCZY NASADOWYCH KLUCZE NASADOWE TORX 108\",
    \"price\": 148.99,
    \"imageURL\": \"https://0.allegroimg.com/s180/03f08c/571c77af426e9c750609c3f9bf30/ZESTAW-KLUCZY-NASADOWYCH-KLUCZE-NASADOWE-TORX-108\",
    \"desc\": \"Stan: Nowy, Marka: Best Tools, Rodzaj klucza: nasadowy\"
  },
  {
    \"name\": \"Spawarka INWERTOROWA LCD MMA PULSE TIG LIFT 330A\",
    \"price\": 247,
    \"imageURL\": \"https://a.allegroimg.com/s180/112470/fbf2dbd742beab91077bb5bfb6d4/Spawarka-INWERTOROWA-LCD-MMA-PULSE-TIG-LIFT-330A\",
    \"desc\": \"Stan: Nowy, Marka: inna (RED TECHNIC), Zakres spawania: 20-330 A\"
  },
  {
    \"name\": \"BLUETTI EB55 STACJA ZASILANIA 700W 537Wh PowerBank\",
    \"price\": 4290,
    \"imageURL\": \"https://a.allegroimg.com/s180/1169c2/6eb5cfa84104bdad1eaf07e03b48/BLUETTI-EB55-STACJA-ZASILANIA-700W-537Wh-PowerBank\",
    \"desc\": \"Stan: Nowy, Marka: inny (BLUETTI), Maksymalna moc: 400 W\"
  },
  {
    \"name\": \"Tablica warsztatowa narzędziowa 230x78 cm ścianka\",
    \"price\": 245.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/112f8c/0af4054546e088bbc7462888f792/Tablica-warsztatowa-narzedziowa-230x78-cm-scianka\",
    \"desc\": \"Stan: Nowy, Marka: Botle\"
  },
  {
    \"name\": \"Piła łańcuchowa ASSUR piła akumulatorowa do gałęzi\",
    \"price\": 350,
    \"imageURL\": \"https://a.allegroimg.com/s180/113309/e9fd68b14a5c99fad4cf287389ff/Pila-lancuchowa-ASSUR-pila-akumulatorowa-do-galezi\",
    \"desc\": \"Stan: Nowy, Marka: Assur, Zasilanie: akumulatorowe\"
  },
  {
    \"name\": \"SZLIFIERKA KĄTOWA Z REGULACJĄ OBROTÓW WYPRZEDAŻ\",
    \"price\": 139,
    \"imageURL\": \"https://a.allegroimg.com/s180/11fef8/7259921d41b1ab6a5e9e34102701/SZLIFIERKA-KATOWA-Z-REGULACJA-OBROTOW-WYPRZEDAZ\",
    \"desc\": \"Stan: Nowy, Marka: Eurotec, Rodzaj zasilania: sieciowa\"
  },
  {
    \"name\": \"ZESTAW KLUCZY NASADOWYCH KLUCZE NASADOWE 160+ YATO\",
    \"price\": 249,
    \"imageURL\": \"https://c.allegroimg.com/s180/03ad6d/b38235aa495ba1f49e6d573bac1c/ZESTAW-KLUCZY-NASADOWYCH-KLUCZE-NASADOWE-160-YATO\",
    \"desc\": \"Stan: Nowy, Marka: Mar-Pol, Rodzaj klucza: nasadowy\"
  },
  {
    \"name\": \"SKRZYNKA NARZĘDZIOWA ZESTAW KLUCZE NASADOWE BITY\",
    \"price\": 399,
    \"imageURL\": \"https://a.allegroimg.com/s180/11bd91/d95c4d7a46a381f3de6d19dfe151/SKRZYNKA-NARZEDZIOWA-ZESTAW-KLUCZE-NASADOWE-BITY\",
    \"desc\": \"Stan: Nowy, Marka: Inny producent (th), Liczba elementów w zestawie: 60\"
  },
  {
    \"name\": \"WIERTARKA UDAROWA WKRĘTARKA+ZESTAW AKCESORIÓW 2AKU\",
    \"price\": 249,
    \"imageURL\": \"https://a.allegroimg.com/s180/113573/0cd9dea942c4aac5e553b7353fde/WIERTARKA-UDAROWA-WKRETARKA-ZESTAW-AKCESORIOW-2AKU\",
    \"desc\": \"Stan: Nowy, Zasilanie: akumulatorowe, Napięcie (V): inna (21), Rodzaj silnika: silnik szczotkowy\"
  },
  {
    \"name\": \"WIERTARKO-WKRĘTARKA Subkompaktowa M12BDD-201C\",
    \"price\": 519,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a943/9265ff6e4928b76f01c082fb70a0/WIERTARKO-WKRETARKA-Subkompaktowa-M12BDD-201C\",
    \"desc\": \"Stan: Nowy, Zasilanie: akumulatorowe, Napięcie (V): 12 V, Rodzaj silnika: silnik szczotkowy\"
  },
  {
    \"name\": \"SUWMIARKA METALOWA ELEKTRONICZNA CYFROWA LCD 150mm\",
    \"price\": 78.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/115f67/3f01c8b44daaa8a8007bd32f5dd1/SUWMIARKA-METALOWA-ELEKTRONICZNA-CYFROWA-LCD-150mm\",
    \"desc\": \"Stan: Nowy, Marka: Benetech\"
  },
  {
    \"name\": \"MŁOTOWIERTARKA WIERTARKA MŁOT UDAROWY SDS+ MOCNA\",
    \"price\": 249,
    \"imageURL\": \"https://a.allegroimg.com/s180/118cab/699e90424b8cb1f138dc884f7b25/MLOTOWIERTARKA-WIERTARKA-MLOT-UDAROWY-SDS-MOCNA\",
    \"desc\": \"Stan: Nowy, Marka: Eurotec, Funkcyjność: 4-funkcyjny (wiercenie z i bez udaru, podkuwanie, indeksacja/blokowanie dłuta), Zasilanie: sieciowe, Energia udaru: 4 J, Typ uchwytu: SDS Plus\"
  },
  {
    \"name\": \"ZESTAW NARZĘDZI WALIZKA NARZĘDZIOWA 300 EL KLUCZE\",
    \"price\": 529,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d32d/7b16743c4074b08232a186da87fc/ZESTAW-NARZEDZI-WALIZKA-NARZEDZIOWA-300-EL-KLUCZE\",
    \"desc\": \"Stan: Nowy, Marka: WMC, Liczba elementów w zestawie: 300\"
  },
  {
    \"name\": \"SPODNIE ROBOCZE OCHRONNE BARDZO MOCNE 320g/m2 R.62\",
    \"price\": 64.37,
    \"imageURL\": \"https://1.allegroimg.com/s180/03951f/81f50ce94c1eab34b0e9c34dc1f1/SPODNIE-ROBOCZE-OCHRONNE-BARDZO-MOCNE-320g-m2-R-62\",
    \"desc\": \"Stan: Nowy, Marka: inna (Art), Rozmiar: 62\"
  },
  {
    \"name\": \"Makita DLX6068PF akumulatorowy zestaw Combo 18V\",
    \"price\": 3499,
    \"imageURL\": \"https://a.allegroimg.com/s180/114782/d3f002eb4509912dbc35b1a9f0af/Makita-DLX6068PF-akumulatorowy-zestaw-Combo-18V\",
    \"desc\": \"Stan: Nowy, Marka: Makita\"
  },
  {
    \"name\": \"MINI PIŁA PILARKA ŁAŃCUCHOWA AKUMULATOROWA 48V\",
    \"price\": 259.92,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a6ed/aeafd7c64ac8b9e8f41eae3cf86a/MINI-PILA-PILARKA-LANCUCHOWA-AKUMULATOROWA-48V\",
    \"desc\": \"Stan: Nowy, Marka: Inny producent (REDDEVILS totalstore), Zasilanie: akumulatorowe\"
  },
  {
    \"name\": \"ZESTAW 108 KLUCZY KLUCZE NASADOWE TORX NASADKI\",
    \"price\": 148.97,
    \"imageURL\": \"https://3.allegroimg.com/s180/03248d/480564a34c3184899cea1bbc8373/ZESTAW-108-KLUCZY-KLUCZE-NASADOWE-TORX-NASADKI\",
    \"desc\": \"Stan: Nowy, Marka: Inny producent (1), Liczba elementów w zestawie: 108\"
  },
  {
    \"name\": \"WIERTŁA GWINTUJĄCE HSS M3 - M10 GWINTOWNIKI 6 SZT.\",
    \"price\": 36.89,
    \"imageURL\": \"https://a.allegroimg.com/s180/116605/edcad4ca406fa095de805115e5d7/WIERTLA-GWINTUJACE-HSS-M3-M10-GWINTOWNIKI-6-SZT\",
    \"desc\": \"Stan: Nowy, Marka: Kraft&Dele\"
  },
  {
    \"name\": \"Piła łańcuchowa Spalinowa Riwall Pro 4500 W / 8 KM\",
    \"price\": 599,
    \"imageURL\": \"https://a.allegroimg.com/s180/116a01/caf183a04ecfb8a3e560e1eca281/Pila-lancuchowa-Spalinowa-Riwall-Pro-4500-W-8-KM\",
    \"desc\": \"Stan: Nowy, Marka: Riwall, Europejski standard emisji spalin: EURO 5, Zasilanie: spalinowe\"
  },
  {
    \"name\": \"Szlifierka kątowa Makita DGA452Z\",
    \"price\": 398.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a7c0/9486b11a438c84391ee003fda51c/Szlifierka-katowa-Makita-DGA452Z\",
    \"desc\": \"Stan: Nowy, Marka: Makita, Rodzaj zasilania: akumulatorowa\"
  },
  {
    \"name\": \"SPODNIE ENGELBERT STRAUSS MOTION 2020 65511 r.46\",
    \"price\": 419,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a868/18fbc7ef496d83c58e4b1f46bc41/SPODNIE-ENGELBERT-STRAUSS-MOTION-2020-65511-r-46\",
    \"desc\": \"Stan: Nowy, Marka: Engelbert Strauss, Rozmiar: 46\"
  },
  {
    \"name\": \"PILARKA PIŁA DREWNA STOŁOWA KRAJZEGA 3-BLATY 3400W\",
    \"price\": 798,
    \"imageURL\": \"https://a.allegroimg.com/s180/110521/c7ac0cfd4763b512039b71f2644a/PILARKA-PILA-DREWNA-STOLOWA-KRAJZEGA-3-BLATY-3400W\",
    \"desc\": \"Stan: Nowy, Marka: Majster Polska\"
  },
  {
    \"name\": \"JUEMEL AKUMULATOROWA PILARKA 6cal 2x Bateria\",
    \"price\": 303.05,
    \"imageURL\": \"https://a.allegroimg.com/s180/1141f7/04e81d2c42a7a8e1621eb6c06ad9/JUEMEL-AKUMULATOROWA-PILARKA-6cal-2x-Bateria\",
    \"desc\": \"Stan: Nowy, Marka: Inny producent (JUEMEL), Zasilanie: akumulatorowe\"
  },
  {
    \"name\": \"MAKITA HP457DWE WIERTARKO WKRĘTARKA UDAROWA 2x18V\",
    \"price\": 659,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a6c0/981581314e0c8c46cbafa0405aeb/MAKITA-HP457DWE-WIERTARKO-WKRETARKA-UDAROWA-2x18V\",
    \"desc\": \"Stan: Nowy, Zasilanie: akumulatorowe, Napięcie (V): 18 V, Rodzaj silnika: silnik szczotkowy\"
  },
  {
    \"name\": \"WYRZYNARKA PRZECINARKA PIŁA DO DREWNA + 11 NOŻY\",
    \"price\": 119,
    \"imageURL\": \"https://a.allegroimg.com/s180/114924/8af11faa4e1c87b7158815e461c5/WYRZYNARKA-PRZECINARKA-PILA-DO-DREWNA-11-NOZY\",
    \"desc\": \"Stan: Nowy, Marka: Eurotec, Zasilanie: sieciowe, Rodzaj silnika: silnik szczotkowy\"
  },
  {
    \"name\": \"KOMPRESOR OLEJOWY SPRĘŻARKA 50L GRATIS ZESTAW 18w1\",
    \"price\": 699,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d226/4346b5c540e0b62677c8d96b2780/KOMPRESOR-OLEJOWY-SPREZARKA-50L-GRATIS-ZESTAW-18w1\",
    \"desc\": \"Stan: Nowy, Marka: Tagred, Typ: kompresor olejowy, Moc (kW): 2.8 kW, Wydajność efektywna: 300 l/min, Ciśnienie maksymalne: 8 bar, Pojemność zbiornika: 50 l, Zasilanie: sieciowe\"
  },
  {
    \"name\": \"DeWALT DT70767 ZESTAW DO WIERCENIA WKRĘCANIA 80pc\",
    \"price\": 274,
    \"imageURL\": \"https://a.allegroimg.com/s180/112082/e9f3d20c423085fecd18b82b868e/DeWALT-DT70767-ZESTAW-DO-WIERCENIA-WKRECANIA-80pc\",
    \"desc\": \"Stan: Nowy, Liczba elementów w zestawie: 80 szt.\"
  },
  {
    \"name\": \"SPAWARKA INWERTOROWA INWERTEROWA 300A LCD MMA TIG\",
    \"price\": 258,
    \"imageURL\": \"https://a.allegroimg.com/s180/116153/d8cffb234dbf88e491183dec3030/SPAWARKA-INWERTOROWA-INWERTEROWA-300A-LCD-MMA-TIG\",
    \"desc\": \"Stan: Nowy, Marka: Majster Polska, Zakres spawania: 20-300 A\"
  },
  {
    \"name\": \"ZESTAW KLUCZY KLUCZE NASADOWE TORX TAGRED 108 EL\",
    \"price\": 129,
    \"imageURL\": \"https://a.allegroimg.com/s180/11f6fe/bea5988d40bd9d7aede6387f5500/ZESTAW-KLUCZY-KLUCZE-NASADOWE-TORX-TAGRED-108-EL\",
    \"desc\": \"Stan: Nowy, Liczba elementów w zestawie: 108\"
  },
  {
    \"name\": \"Tablica Narzędziowa Ścianka Warsztatowa XXL 154x78\",
    \"price\": 139.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a154/bf5874164b61b422d0694777bfcd/Tablica-Narzedziowa-Scianka-Warsztatowa-XXL-154x78\",
    \"desc\": \"Stan: Nowy, Marka: Valle Verde\"
  },
  {
    \"name\": \"Piła Łańcuchowa JUEMEL AKUMULATOROWA PILARKA 6cal\",
    \"price\": 269,
    \"imageURL\": \"https://a.allegroimg.com/s180/1145c4/13354edb42f19a500f90cc0ff711/Pila-Lancuchowa-JUEMEL-AKUMULATOROWA-PILARKA-6cal\",
    \"desc\": \"Stan: Nowy, Marka: Inny producent (JUEMEL), Zasilanie: akumulatorowe\"
  },
  {
    \"name\": \"ZESTAW KLUCZY NASADOWYCH KLUCZE NASADOWE 46 TORX\",
    \"price\": 52,
    \"imageURL\": \"https://a.allegroimg.com/s180/112abe/8d7b296f4aaea0ca1abe43ef38dc/ZESTAW-KLUCZY-NASADOWYCH-KLUCZE-NASADOWE-46-TORX\",
    \"desc\": \"Stan: Nowy, Liczba elementów w zestawie: 46\"
  },
  {
    \"name\": \"KLUCZE PŁASKIE OCZKOWE Z GRZECHOTKĄ KUTE CrV 12-EL\",
    \"price\": 154.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/117c68/a8d140244e2593689fe2f770adec/KLUCZE-PLASKIE-OCZKOWE-Z-GRZECHOTKA-KUTE-CrV-12-EL\",
    \"desc\": \"Stan: Nowy, Marka: Tagred, Rodzaj klucza: płasko-oczkowy\"
  },
  {
    \"name\": \"Wytrzymałe SPODNIE ROBOCZE do PASA męskie MOCNE\",
    \"price\": 52.52,
    \"imageURL\": \"https://a.allegroimg.com/s180/119f50/c7e7a64d45138dce489a39bba814/Wytrzymale-SPODNIE-ROBOCZE-do-PASA-meskie-MOCNE\",
    \"desc\": \"Stan: Nowy, Marka: Art-Mas, Rozmiar: 48\"
  },
  {
    \"name\": \"SPODNIE ENGELBERT STRAUSS MOTION 2020 65511 r.46\",
    \"price\": 419,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a868/18fbc7ef496d83c58e4b1f46bc41/SPODNIE-ENGELBERT-STRAUSS-MOTION-2020-65511-r-46\",
    \"desc\": \"Stan: Nowy, Marka: Engelbert Strauss, Rozmiar: 46\"
  },
  {
    \"name\": \"FREZARKA do drewna GÓRNOWRZECIONOWA 2000W MASYWNA\",
    \"price\": 249,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b3b9/6b04b33b4bedbff3df25e13e7f65/FREZARKA-do-drewna-GORNOWRZECIONOWA-2000W-MASYWNA\",
    \"desc\": \"Stan: Nowy, Marka: Heidmann, Zasilanie: sieciowe\"
  },
  {
    \"name\": \"10PCS Usunąć Nasadki Do Uszkodzonych Śrub Nakretek\",
    \"price\": 75.98,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d8e8/b618edb54a5b91b216f672d7d93a/10PCS-Usunac-Nasadki-Do-Uszkodzonych-Srub-Nakretek\",
    \"desc\": \"Stan: Nowy, Liczba elementów w zestawie: 10\"
  },
  {
    \"name\": \"SZLIFIERKA OSCYLACYJNA DREWNA METALU MIMOŚRODOWA\",
    \"price\": 149,
    \"imageURL\": \"https://a.allegroimg.com/s180/117e13/6b7e1dca4ef4aedfbdac96153006/SZLIFIERKA-OSCYLACYJNA-DREWNA-METALU-MIMOSRODOWA\",
    \"desc\": \"Stan: Nowy, Marka: Deko, Rodzaj zasilania: sieciowa\"
  },
  {
    \"name\": \"PILARKA ELEKTRYCZNA PILA LANCUCHOWA 2500W TURBO XL\",
    \"price\": 329.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11e6dc/d7c76410430bb966c2d5b2162574/PILARKA-ELEKTRYCZNA-PILA-LANCUCHOWA-2500W-TURBO-XL\",
    \"desc\": \"Stan: Nowy, Marka: Inny producent (PROFFESIONAL TOOLS 2023), Zasilanie: sieciowe\"
  },
  {
    \"name\": \"TABLICA ŚCIANKA NARZĘDZIOWA DO GARAŻU 50 KUWET\",
    \"price\": 238.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ac7c/14e29b2c4b63be0f26181e4d1d75/TABLICA-SCIANKA-NARZEDZIOWA-DO-GARAZU-50-KUWET\",
    \"desc\": \"Stan: Nowy, Marka: Botle\"
  },
  {
    \"name\": \"STANLEY 83-065 Imadło ślusarskie obrotowe maxsteel\",
    \"price\": 149,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c187/a3967d7347edb0c2f24e16e84754/STANLEY-83-065-Imadlo-slusarskie-obrotowe-maxsteel\",
    \"desc\": \"Stan: Nowy, Marka: Stanley, Szerokość szczęk: 100 mm, Maksymalny rozstaw szczęk: 100 mm\"
  },
  {
    \"name\": \"Myjka ciśnieniowa Karcher K3 1.601-888.0\",
    \"price\": 426.55,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ea88/b14c3a5442a7b9b1965206391841/Myjka-cisnieniowa-Karcher-K3-1-601-888-0\",
    \"desc\": \"Stan: Nowy, Marka: Kärcher, Rodzaj pompy: kompozytowa, Ciśnienie robocze: 120 bar, Maksymalna moc: 1600 W, Napięcie zasilania: 230 V\"
  },
  {
    \"name\": \"WIERTARKA UDAROWA WKRĘTARKA+ZESTAW AKCESORIÓW 2AKU\",
    \"price\": 249,
    \"imageURL\": \"https://a.allegroimg.com/s180/113573/0cd9dea942c4aac5e553b7353fde/WIERTARKA-UDAROWA-WKRETARKA-ZESTAW-AKCESORIOW-2AKU\",
    \"desc\": \"Stan: Nowy, Zasilanie: akumulatorowe, Napięcie (V): inna (21), Rodzaj silnika: silnik szczotkowy\"
  },
  {
    \"name\": \"WIERTARKA WKRĘTARKA UDAROWA AKUMULATOROWA AKU BITY\",
    \"price\": 239,
    \"imageURL\": \"https://a.allegroimg.com/s180/11fedc/34100f9d4f72bae968c74f9b5add/WIERTARKA-WKRETARKA-UDAROWA-AKUMULATOROWA-AKU-BITY\",
    \"desc\": \"Stan: Nowy, Zasilanie: akumulatorowe, Napięcie (V): 20 V, Rodzaj silnika: silnik szczotkowy\"
  },
  {
    \"name\": \"SZLIFIERKA WIELOFUNKCYJNA STOŁOWA TAŚMOWA KAMIEŃ\",
    \"price\": 269,
    \"imageURL\": \"https://a.allegroimg.com/s180/1184f4/b241c32742f9b9a4f9e0a4b97419/SZLIFIERKA-WIELOFUNKCYJNA-STOLOWA-TASMOWA-KAMIEN\",
    \"desc\": \"Stan: Nowy, Marka: Heidmann\"
  },
  {
    \"name\": \"ZESTAW KLUCZY NASADOWYCH KLUCZE NASADOWE YATO\",
    \"price\": 109,
    \"imageURL\": \"https://a.allegroimg.com/s180/1159a8/8b172f764540928426c604bc1b5a/ZESTAW-KLUCZY-NASADOWYCH-KLUCZE-NASADOWE-YATO\",
    \"desc\": \"Stan: Nowy, Marka: Yato, Rodzaj klucza: nasadowy\"
  },
  {
    \"name\": \"Stacja Lutownicza WEP 852D+ 2w1 3 dysze 700W\",
    \"price\": 299,
    \"imageURL\": \"https://a.allegroimg.com/s180/119b2d/19672d6d487586fab044c8c33e0e/Stacja-Lutownicza-WEP-852D-2w1-3-dysze-700W\",
    \"desc\": \"Stan: Nowy, Moc: 60 W, Marka: Inna (WEP), Zasilanie: sieciowe\"
  },
  {
    \"name\": \"SZLIFIERKA MIMOŚRODOWA OSCYLACYJNA 125MM + PAPIER\",
    \"price\": 109,
    \"imageURL\": \"https://a.allegroimg.com/s180/11f77b/e9f144d64d00b4961bf3f67d00f4/SZLIFIERKA-MIMOSRODOWA-OSCYLACYJNA-125MM-PAPIER\",
    \"desc\": \"Stan: Nowy, Marka: Wuber, Rodzaj zasilania: sieciowa\"
  },
  {
    \"name\": \"MAKITA HR2630 MŁOTOWIERTARKA SDS+ 800W + OSPRZĘT\",
    \"price\": 828,
    \"imageURL\": \"https://a.allegroimg.com/s180/112d9e/747b806949749d398a9f0e535b9f/MAKITA-HR2630-MLOTOWIERTARKA-SDS-800W-OSPRZET\",
    \"desc\": \"Stan: Nowy, Marka: Makita, Funkcyjność: 3-funkcyjny (wiercenie z i bez udaru, podkuwanie), Zasilanie: sieciowe, Energia udaru: 2.4 J, Typ uchwytu: SDS Plus\"
  }
]`);

const c = gifts as BaseGift[];

export default c;
