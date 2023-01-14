import type { BaseGift } from '../gifts';

const gifts: unknown = JSON.parse(`[
  {
    \"name\": \"Zestaw 50 płyt winylowych . winyli hurt\",
    \"price\": 100.01,
    \"imageURL\": \"https://a.allegroimg.com/s180/113343/201118394797ae1b7930aa1c28b3/Zestaw-50-plyt-winylowych-winyli-hurt\",
    \"desc\": \"Stan: Używany, Nośnik: Winyl\"
  },
  {
    \"name\": \"Lombard – Live - SPIN - 1992 - NOWA - UNIKAT\",
    \"price\": 360,
    \"imageURL\": \"https://a.allegroimg.com/s180/111b84/2802c8cd44b8b1f2c54016eb7ce1/Lombard-Live-SPIN-1992-NOWA-UNIKAT\",
    \"desc\": \"Stan: Nowy, Nośnik: CD\"
  },
  {
    \"name\": \"Savage - Greatest Hits & Remixes Vol. 1 LP 12'\",
    \"price\": 64.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/117263/8551b1bd40a69ae88a710e22d46e/Savage-Greatest-Hits-Remixes-Vol-1-LP-12\",
    \"desc\": \"Stan: Nowy, Rok wydania: 2016, Pochodzenie: zagraniczne, Seria: Greatest Hits & Remixes\"
  },
  {
    \"name\": \"10 SZT HURT PŁYTY WINYLOWE DEKORACYJNE DUŻE 30 CM\",
    \"price\": 26.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/113ef3/6dc0f4ef4566aff773cf53384a9c/10-SZT-HURT-PLYTY-WINYLOWE-DEKORACYJNE-DUZE-30-CM\",
    \"desc\": \"Stan: Używany, Nośnik: Winyl\"
  },
  {
    \"name\": \"Zestaw 100 cd muzyki z gazety - wydanie tekturowe\",
    \"price\": 100.02,
    \"imageURL\": \"https://a.allegroimg.com/s180/113ec4/61f7385d4ce7a7f48ac54e141e2a/Zestaw-100-cd-muzyki-z-gazety-wydanie-tekturowe\",
    \"desc\": \"Stan: Używany, Nośnik: CD\"
  },
  {
    \"name\": \"Płyty winylowe 12 cali zestaw 20 szt różna muzyka\",
    \"price\": 34,
    \"imageURL\": \"https://a.allegroimg.com/s180/11138a/ab096df348f1b914191b7cc698b0/Plyty-winylowe-12-cali-zestaw-20-szt-rozna-muzyka\",
    \"desc\": \"Stan: Używany, Nośnik: Winyl\"
  },
  {
    \"name\": \"Pudełka cd 100 sztuk zestaw z płytą\",
    \"price\": 55,
    \"imageURL\": \"https://a.allegroimg.com/s180/116fa0/175f26ba487789a8b78b89d30f0f/Pudelka-cd-100-sztuk-zestaw-z-plyta\",
    \"desc\": \"Stan: Używany, Nośnik: CD\"
  },
  {
    \"name\": \"Wkładki, zatyczki do uszu do spania 1100 50 par\",
    \"price\": 29.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11476c/e12fe6784cc7abe845a913e1321a/Wkladki-zatyczki-do-uszu-do-spania-1100-50-par\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"KAT Metal And Hell 2020 RED WAX LP Kostrzewski\",
    \"price\": 41,
    \"imageURL\": \"https://a.allegroimg.com/s180/119376/ea92631849898b741636826f1b44/KAT-Metal-And-Hell-2020-RED-WAX-LP-Kostrzewski\",
    \"desc\": \"Stan: Nowy, Pochodzenie: polskie, Rok wydania: 2020\"
  },
  {
    \"name\": \"Krzysztof Komeda Quintet Astigmatic Polish Jazz LP\",
    \"price\": 26,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d588/5c435f0c40dfa8662b396ce19175/Krzysztof-Komeda-Quintet-Astigmatic-Polish-Jazz-LP\",
    \"desc\": \"Stan: Nowy, Pochodzenie: polskie, Rok wydania: 2021, Seria: Polish Jazz\"
  },
  {
    \"name\": \"BLUEDIO NE ZATYCZKI STOPERY DO USZU DO SPANIA\",
    \"price\": 40,
    \"imageURL\": \"https://a.allegroimg.com/s180/110b81/872b321f4a55b6070c984df64cb7/BLUEDIO-NE-ZATYCZKI-STOPERY-DO-USZU-DO-SPANIA\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"Limahl - The Never Ending Story\",
    \"price\": 21.49,
    \"imageURL\": \"https://a.allegroimg.com/s180/1133ae/23e285e143f8a9fa159b082e9591/Limahl-The-Never-Ending-Story\",
    \"desc\": \"Stan: Używany\"
  },
  {
    \"name\": \"Opaski na rękę Tyvek-papierowe z nadrukiem 100szt.\",
    \"price\": 50,
    \"imageURL\": \"https://a.allegroimg.com/s180/11f2fa/9d18e225404bb20b3590e0f034c7/Opaski-na-reke-Tyvek-papierowe-z-nadrukiem-100szt\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"CD Charlie Watts – Long Ago & Far Away UK 1996\",
    \"price\": 3.5,
    \"imageURL\": \"https://a.allegroimg.com/s180/115f26/e502c70f4b25948d231bbc18bf8f/CD-Charlie-Watts-Long-Ago-Far-Away-UK-1996\",
    \"desc\": \"Stan: Używany, Opakowanie: bez folii, Nośnik: CD\"
  },
  {
    \"name\": \"Kaseta magnetofonowa audio zestaw 10 szt nagrania\",
    \"price\": 40.02,
    \"imageURL\": \"https://a.allegroimg.com/s180/115737/013f55914595992a1865da1b631f/Kaseta-magnetofonowa-audio-zestaw-10-szt-nagrania\",
    \"desc\": \"Stan: Używany, Nośnik: Kaseta, Seria: 1\"
  },
  {
    \"name\": \"Zatyczki Stopery do uszu 3M Ear Classic 25 par\",
    \"price\": 46.75,
    \"imageURL\": \"https://a.allegroimg.com/s180/11530a/b8664e094ca6ba0cf96913db5055/Zatyczki-Stopery-do-uszu-3M-Ear-Classic-25-par\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"PŁYTY WINYLOWE Dekoracja hurt duże 12\\\" cali\",
    \"price\": 17.01,
    \"imageURL\": \"https://a.allegroimg.com/s180/113343/201118394797ae1b7930aa1c28b3/PLYTY-WINYLOWE-Dekoracja-hurt-duze-12-cali\",
    \"desc\": \"Stan: Używany, Nośnik: Winyl\"
  },
  {
    \"name\": \"Pudełka cd na kilogramy wagę hurt 5 kg\",
    \"price\": 70,
    \"imageURL\": \"https://a.allegroimg.com/s180/116fa0/175f26ba487789a8b78b89d30f0f/Pudelka-cd-na-kilogramy-wage-hurt-5-kg\",
    \"desc\": \"Stan: Używany, Nośnik: CD\"
  },
  {
    \"name\": \"Zatyczki Wyciszające LOOP QUIET Black| -25db\",
    \"price\": 89,
    \"imageURL\": \"https://a.allegroimg.com/s180/110e51/6eb108be4427badb3cfbd419f025/Zatyczki-Wyciszajace-LOOP-QUIET-Black-25db\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"ZATYCZKI DO USZU STOPERY DOUSZNE DO SPANIA WKŁADKI\",
    \"price\": 40,
    \"imageURL\": \"https://a.allegroimg.com/s180/1167ce/7c861f9b4e31a130c6fc9a53572a/ZATYCZKI-DO-USZU-STOPERY-DOUSZNE-DO-SPANIA-WKLADKI\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"Pezet/Noon Muzyka Poważna Kolekcja 33 Obroty/180gr\",
    \"price\": 89.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/114cd5/7f9386b24ccb8ad70639bba0f7f7/Pezet-Noon-Muzyka-Powazna-Kolekcja-33-Obroty-180gr\",
    \"desc\": \"Stan: Nowy, Pochodzenie: polskie, Rok wydania: 2021\"
  },
  {
    \"name\": \"REZERWAT - 40 - winyl limitowane wydanie specjalne\",
    \"price\": 189,
    \"imageURL\": \"https://a.allegroimg.com/s180/11edc6/802d3e394669b4f33909f4d03187/REZERWAT-40-winyl-limitowane-wydanie-specjalne\",
    \"desc\": \"Stan: Nowy, Pochodzenie: polskie, Rok wydania: 2022\"
  },
  {
    \"name\": \"PŁYTY WINYLOWE Dekoracja na kilogramy 1 kg hurt\",
    \"price\": 19.01,
    \"imageURL\": \"https://a.allegroimg.com/s180/113343/201118394797ae1b7930aa1c28b3/PLYTY-WINYLOWE-Dekoracja-na-kilogramy-1-kg-hurt\",
    \"desc\": \"Stan: Używany, Nośnik: Winyl\"
  },
  {
    \"name\": \"ZATYCZKI do uszu STOPERY douszne przeciw hałasom\",
    \"price\": 12.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/118a85/d24efb7b4ca0a965f2cb358daec5/ZATYCZKI-do-uszu-STOPERY-douszne-przeciw-halasom\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"ZATYCZKI do uszu STOPERY douszne przeciw hałasom\",
    \"price\": 12.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/118a85/d24efb7b4ca0a965f2cb358daec5/ZATYCZKI-do-uszu-STOPERY-douszne-przeciw-halasom\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"PŁYTY WINYLOWE DEKORACYJNE DUŻE 30 CM 10 szt\",
    \"price\": 22.49,
    \"imageURL\": \"https://a.allegroimg.com/s180/113593/47c0e1884b43b7d0c5b47693b3a8/PLYTY-WINYLOWE-DEKORACYJNE-DUZE-30-CM-10-szt\",
    \"desc\": \"Stan: Używany, Nośnik: Winyl\"
  },
  {
    \"name\": \"Kaseta O$KA Przez $ jak...\",
    \"price\": 35,
    \"imageURL\": \"https://a.allegroimg.com/s180/110934/333ca89244e5b89afdf043ec79c9/Kaseta-O-KA-Przez-jak\",
    \"desc\": \"Stan: Nowy, Nośnik: Kaseta\"
  },
  {
    \"name\": \"Zatyczki Stopery do uszu 3M 1100 Wkładki 50par\",
    \"price\": 29.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11fc75/ca71b2b04c8bac78cafa95e3d944/Zatyczki-Stopery-do-uszu-3M-1100-Wkladki-50par\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"CD IAMX The Alternative 2006 Vision Music CDVM017\",
    \"price\": 1,
    \"imageURL\": \"https://a.allegroimg.com/s180/1123a1/efca0f8443369ecf99b36f427d90/CD-IAMX-The-Alternative-2006-Vision-Music-CDVM017\",
    \"desc\": \"Stan: Używany, Opakowanie: bez folii, Nośnik: CD\"
  },
  {
    \"name\": \"POLSKIE BALLADY ROCKOWE KULT, DZEM, TSA (3CD)\",
    \"price\": 29.98,
    \"imageURL\": \"https://a.allegroimg.com/s180/11fc88/856358e54bfbb9ba84262113abc2/POLSKIE-BALLADY-ROCKOWE-KULT-DZEM-TSA-3CD\",
    \"desc\": \"Stan: Nowy, Opakowanie: w folii, Nośnik: CD\"
  },
  {
    \"name\": \"Thomas Anders - Cosmic 2021 LP 2x12 Modern Talking\",
    \"price\": 119.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11db8c/bd9d84c54443ab650467867ea78c/Thomas-Anders-Cosmic-2021-LP-2x12-Modern-Talking\",
    \"desc\": \"Stan: Nowy, Rok wydania: 2021, Pochodzenie: zagraniczne\"
  },
  {
    \"name\": \"ZATYCZKI DO USZU STOPERY DOUSZNE DO SPANIA WKŁADKI\",
    \"price\": 40,
    \"imageURL\": \"https://a.allegroimg.com/s180/1167ce/7c861f9b4e31a130c6fc9a53572a/ZATYCZKI-DO-USZU-STOPERY-DOUSZNE-DO-SPANIA-WKLADKI\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"Zatyczki stopery do uszu do spania 1 para wieloraz\",
    \"price\": 5,
    \"imageURL\": \"https://a.allegroimg.com/s180/11dbf9/cdcaf8ae4256a43ea60ea4b17fbc/Zatyczki-stopery-do-uszu-do-spania-1-para-wieloraz\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"BLACK SABBATH - TRANSMISSION IMPOSSIBLE (3CD) 3CD\",
    \"price\": 67.97,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c835/ae782edf41988672426dbd16ad72/BLACK-SABBATH-TRANSMISSION-IMPOSSIBLE-3CD-3CD\",
    \"desc\": \"Stan: Nowy, Nośnik: CD\"
  },
  {
    \"name\": \"Okładki WEWNĘTRZNE na LP 'JAPOŃSKIE' PÓŁOKRĄGŁE 50\",
    \"price\": 45.99,
    \"imageURL\": \"https://5.allegroimg.com/s180/034a2c/a7d2cf5141bebc6b83cc4d40c195/Okladki-WEWNETRZNE-na-LP-JAPONSKIE-POLOKRAGLE-50\",
    \"desc\": \"Stan: Nowy, Liczba sztuk: 50 szt.\"
  },
  {
    \"name\": \"CD SDM Stare Dobre Małżeństwo Studni Pomaton 2005\",
    \"price\": 16.18,
    \"imageURL\": \"https://a.allegroimg.com/s180/115f39/0f68235c47b7827218151ed7c66e/CD-SDM-Stare-Dobre-Malzenstwo-Studni-Pomaton-2005\",
    \"desc\": \"Stan: Nowy, Opakowanie: w folii, Nośnik: CD, Seria: Złota Kolekcja / Remaster\"
  },
  {
    \"name\": \"WINYL - CHER - Dancing Queen - FOLIA\",
    \"price\": 79,
    \"imageURL\": \"https://a.allegroimg.com/s180/11f14b/a82743014195a16bffdc9cb20b31/WINYL-CHER-Dancing-Queen-FOLIA\",
    \"desc\": \"Stan: Nowy, Pochodzenie: zagraniczne, Rok wydania: 2018\"
  },
  {
    \"name\": \"CD IAMX – Kiss + Swallow 2006 Vision Music CDVM026\",
    \"price\": 1,
    \"imageURL\": \"https://a.allegroimg.com/s180/111780/c7c3030c4ad693e3e19da3d6d431/CD-IAMX-Kiss-Swallow-2006-Vision-Music-CDVM026\",
    \"desc\": \"Stan: Używany, Opakowanie: bez folii, Nośnik: CD\"
  },
  {
    \"name\": \"Modern Talking - Romantic Warriors 5th Album / LP\",
    \"price\": 129.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1116e8/12002706406998c923c4cfdd147f/Modern-Talking-Romantic-Warriors-5th-Album-LP\",
    \"desc\": \"Stan: Nowy, Seria: bga\"
  },
  {
    \"name\": \"Zatyczki Wyciszające LOOP QUIET Black| -25db\",
    \"price\": 89,
    \"imageURL\": \"https://a.allegroimg.com/s180/110e51/6eb108be4427badb3cfbd419f025/Zatyczki-Wyciszajace-LOOP-QUIET-Black-25db\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"Zatyczki Do Uszu Stopery Haspro Uniwersalne 6 par\",
    \"price\": 18.62,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b404/7463c2b0497380f229c7efb10cf2/Zatyczki-Do-Uszu-Stopery-Haspro-Uniwersalne-6-par\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"Kolędy Świata 3 [CD] - TGD. Nowa\",
    \"price\": 41.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/117e46/5804b44d4715a01ee1a464679e67/Koledy-Swiata-3-CD-TGD-Nowa\",
    \"desc\": \"Stan: Nowy, Opakowanie: w folii, Nośnik: CD\"
  },
  {
    \"name\": \"RALPH KAMINSKI: BAL U RAFAŁA [CD]\",
    \"price\": 40.01,
    \"imageURL\": \"https://a.allegroimg.com/s180/113c17/6febead64aa9b57e054e2462ffdf/RALPH-KAMINSKI-BAL-U-RAFALA-CD\",
    \"desc\": \"Stan: Nowy, Opakowanie: w folii, Nośnik: CD\"
  },
  {
    \"name\": \"zatyczki do spania Alpine Sleep Soft\",
    \"price\": 64.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/110a52/30ed7dc246bc8770593b2c89f139/zatyczki-do-spania-Alpine-Sleep-Soft\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"Składanka | DISCO POLO GRANIE VOL.3 (2CD) - NOWOŚĆ\",
    \"price\": 21.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/117a41/74c855534ae09b52ababf9147bcb/Skladanka-DISCO-POLO-GRANIE-VOL-3-2CD-NOWOSC\",
    \"desc\": \"Stan: Nowy, Opakowanie: w folii, Nośnik: CD\"
  },
  {
    \"name\": \"STOPERY USZU ZATYCZKI DO SPANIA BLUEDIO BE-NE\",
    \"price\": 44.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11199a/9bbc8008482495fb97470fbfab88/STOPERY-USZU-ZATYCZKI-DO-SPANIA-BLUEDIO-BE-NE\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"Stojak,segregator,płyty winylowe, winyle 50 płyt,c\",
    \"price\": 89,
    \"imageURL\": \"https://a.allegroimg.com/s180/037c8b/0a92290242aa800bd7a019768173/Stojak-segregator-plyty-winylowe-winyle-50-plyt-c\",
    \"desc\": \"Stan: Używany\"
  },
  {
    \"name\": \"Zatyczki dla Muzyków LOOP Earplugs EXPERIENCE Gold\",
    \"price\": 121,
    \"imageURL\": \"https://a.allegroimg.com/s180/11af5f/158e793d45bba6114449bd36fcdc/Zatyczki-dla-Muzykow-LOOP-Earplugs-EXPERIENCE-Gold\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"PIOSENKI DLA DZIECI 60 Przebojów Super Prezent 3CD\",
    \"price\": 49.9,
    \"imageURL\": \"https://b.allegroimg.com/s180/01dca3/b8f2a0ce4aa1b536d327419c558b/PIOSENKI-DLA-DZIECI-60-Przebojow-Super-Prezent-3CD\",
    \"desc\": \"Stan: Nowy, Opakowanie: w folii, Nośnik: CD, Seria: brak\"
  },
  {
    \"name\": \"KING CRIMSON: IN THE COURT OF THE CRIMSON KING WIN\",
    \"price\": 98.79,
    \"imageURL\": \"https://a.allegroimg.com/s180/110425/f26c1d8c4e499c19b6adecbcedca/KING-CRIMSON-IN-THE-COURT-OF-THE-CRIMSON-KING-WIN\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"KRZYSZTOF KRAWCZYK: ZŁOTA KOLEKCJA vol. 1 + 2 [2CD\",
    \"price\": 32.86,
    \"imageURL\": \"https://a.allegroimg.com/s180/11f8c5/603418bc424eb9182e29436fba57/KRZYSZTOF-KRAWCZYK-ZLOTA-KOLEKCJA-vol-1-2-2CD\",
    \"desc\": \"Stan: Nowy, Opakowanie: w folii, Wykonawca: Krzysztof Krawczyk, Nośnik: CD\"
  },
  {
    \"name\": \"OKŁADKI na winyle LP GRUBA DOBRA FOLIA 0,12mm100x\",
    \"price\": 79.99,
    \"imageURL\": \"https://c.allegroimg.com/s180/0390d6/ae9f6bba4f8c8f5c2d05d24f359c/OKLADKI-na-winyle-LP-GRUBA-DOBRA-FOLIA-0-12mm100x\",
    \"desc\": \"Stan: Nowy, Liczba sztuk: 100 szt.\"
  },
  {
    \"name\": \"TURBO: GREATEST HITS (2XWINYL)\",
    \"price\": 117.75,
    \"imageURL\": \"https://a.allegroimg.com/s180/116ce1/dd8bcf904707a8cf2bcd2923fd51/TURBO-GREATEST-HITS-2XWINYL\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"100 OKŁADKI na winyle LP12\\\" 325x320\",
    \"price\": 40,
    \"imageURL\": \"https://e.allegroimg.com/s180/01858c/850ecfea45aabed39d1f65e72f7e/100-OKLADKI-na-winyle-LP12-325x320\",
    \"desc\": \"Stan: Nowy, Rozmiar płyty (\\\"): 12, Liczba sztuk: 100 szt.\"
  },
  {
    \"name\": \"Zatyczki Alpine Party Plug, Muzyka, Koncert\",
    \"price\": 53.71,
    \"imageURL\": \"https://a.allegroimg.com/s180/116c90/68b5a65446f3b5bb130e2772b255/Zatyczki-Alpine-Party-Plug-Muzyka-Koncert\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"Stopery dla Muzyków LOOP Earplugs EXPERIENCE Rose\",
    \"price\": 121,
    \"imageURL\": \"https://a.allegroimg.com/s180/1187e6/5edabff14ef8853edc08a8e14ad9/Stopery-dla-Muzykow-LOOP-Earplugs-EXPERIENCE-Rose\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"PŁYTY WINYLOWE Dekoracja hurt 12\\\" cali 20 szt\",
    \"price\": 40.02,
    \"imageURL\": \"https://a.allegroimg.com/s180/113343/201118394797ae1b7930aa1c28b3/PLYTY-WINYLOWE-Dekoracja-hurt-12-cali-20-szt\",
    \"desc\": \"Stan: Używany, Nośnik: Winyl\"
  },
  {
    \"name\": \"zatyczki do uszu do spania Alpine SleepSoft\",
    \"price\": 64.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/110a52/30ed7dc246bc8770593b2c89f139/zatyczki-do-uszu-do-spania-Alpine-SleepSoft\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"SKOLIM - WYGLĄDASZ IDEALNIE | SKŁADANKA HITÓW 2022\",
    \"price\": 24.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d8d4/6fbd2890464084d6fdb6524bea66/SKOLIM-WYGLADASZ-IDEALNIE-SKLADANKA-HITOW-2022\",
    \"desc\": \"Stan: Nowy, Opakowanie: w folii, Nośnik: CD, Seria: Muzyczna Explozja Disco Polo Hitów\"
  },
  {
    \"name\": \"DAWID PODSIADŁO: LATA DWUDZIESTE [CD]\",
    \"price\": 49.19,
    \"imageURL\": \"https://a.allegroimg.com/s180/119ca0/d2aa16674f7a9f79485626f6e930/DAWID-PODSIADLO-LATA-DWUDZIESTE-CD\",
    \"desc\": \"Stan: Nowy, Opakowanie: w folii, Wykonawca: Dawid Podsiadło, Nośnik: CD\"
  },
  {
    \"name\": \"Zatyczki Do Uszu Stopery Haspro Tuba 50par 100szt.\",
    \"price\": 49.95,
    \"imageURL\": \"https://a.allegroimg.com/s180/1172e5/1baeb25f483880141c96dea561b1/Zatyczki-Do-Uszu-Stopery-Haspro-Tuba-50par-100szt\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"CLASSIC: MIŁEGO DNIA [CD]\",
    \"price\": 78.42,
    \"imageURL\": \"https://a.allegroimg.com/s180/114770/f467f2ad4f788dcea9281d14beba/CLASSIC-MILEGO-DNIA-CD\",
    \"desc\": \"Stan: Nowy, Opakowanie: w folii, Wykonawca: Classic, Nośnik: CD\"
  },
  {
    \"name\": \"CD Sade – Lovers Live NOWA 2002\",
    \"price\": 26,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b1a0/041dcfdf4396bfee2d1cebd12fb0/CD-Sade-Lovers-Live-NOWA-2002\",
    \"desc\": \"Stan: Nowy, Opakowanie: w folii, Nośnik: CD, Seria: LIVE ALBUM\"
  },
  {
    \"name\": \"STOPERY ZATYCZKI DO USZU BLUEDIO DO SPANIA SEN\",
    \"price\": 40,
    \"imageURL\": \"https://a.allegroimg.com/s180/11e9a9/cd5a23644467a6b1bdb523b98c50/STOPERY-ZATYCZKI-DO-USZU-BLUEDIO-DO-SPANIA-SEN\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"Myjka do płyt winylowych Analogis Wash'n'play 2\",
    \"price\": 315,
    \"imageURL\": \"https://a.allegroimg.com/s180/114259/28941a064e7a9f7b4a0da2dcf34e/Myjka-do-plyt-winylowych-Analogis-Wash-n-play-2\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"Winyl: FRANK SINATRA - The Best Of - FOLIA\",
    \"price\": 90,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d2d2/140e3f5e4042890306c992a73fb5/Winyl-FRANK-SINATRA-The-Best-Of-FOLIA\",
    \"desc\": \"Stan: Nowy, Rok wydania: 2017\"
  },
  {
    \"name\": \"PLUSZOWY KAKTUS GRAJĄCY MÓWIĄCY ŚPIEWAJĄCY GADŻET\",
    \"price\": 45,
    \"imageURL\": \"https://a.allegroimg.com/s180/1189f5/b6aaf70a446ca3cf55292b8c8a72/PLUSZOWY-KAKTUS-GRAJACY-MOWIACY-SPIEWAJACY-GADZET\",
    \"desc\": \"Stan: Nowy, Seria: super zabawka tańcząca nowość\"
  },
  {
    \"name\": \"SANAH: IRENKA (CD)\",
    \"price\": 67.19,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b10d/fa4f022d422f8f903efdc7f1c305/SANAH-IRENKA-CD\",
    \"desc\": \"Stan: Nowy, Opakowanie: w folii, Wykonawca: Sanah, Nośnik: CD\"
  },
  {
    \"name\": \"STOPERY ZATYCZKI DO USZU BLUEDIO DO SPANIA SEN\",
    \"price\": 40,
    \"imageURL\": \"https://a.allegroimg.com/s180/11e9a9/cd5a23644467a6b1bdb523b98c50/STOPERY-ZATYCZKI-DO-USZU-BLUEDIO-DO-SPANIA-SEN\",
    \"desc\": \"Stan: Nowy\"
  },
  {
    \"name\": \"Stopery Zatyczki Honeywell LaserLite 200par Karton\",
    \"price\": 99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11de48/e41162ee412b983d146b35ddd32e/Stopery-Zatyczki-Honeywell-LaserLite-200par-Karton\",
    \"desc\": \"Stan: Nowy\"
  }
]`);

const c = gifts as BaseGift[];

export default c;
