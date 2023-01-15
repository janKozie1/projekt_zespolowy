import type { BaseGift } from '../gifts';

const gifts: unknown = JSON.parse(`[
  {
    \"name\": \"Kuferek zestaw 42 kosmetyków\",
    \"price\": 119.5,
    \"imageURL\": \"https://a.allegroimg.com/s180/112731/24b1e69b4f8b8ff9e1bc2b0b42fb/Kuferek-zestaw-42-kosmetykow\",
    \"desc\": \"Stan: Nowy, Marka: Makeup Trading\"
  },
  {
    \"name\": \"PALETA CIENI ZESTAW DO MAKIJAŻU POWIEK MAKEUP\",
    \"price\": 14.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ca58/af34fe6d475993b1746fad23051b/PALETA-CIENI-ZESTAW-DO-MAKIJAZU-POWIEK-MAKEUP\",
    \"desc\": \"Stan: Nowy, Marka: Retoo\"
  },
  {
    \"name\": \"DOUGLAS PALETA DO KONTUROWANIA ROZŚWIETLANIA\",
    \"price\": 16.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/113b81/85cf65734f0c8d2e10bf2775f6aa/DOUGLAS-PALETA-DO-KONTUROWANIA-ROZSWIETLANIA\",
    \"desc\": \"Stan: Nowy, Marka: Douglas\"
  },
  {
    \"name\": \"PAESE PODKŁAD LONG COVER FLUID KRYJĄCY PORCELAIN\",
    \"price\": 6.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b7ad/63ffaa8f4e52b24a4c32e8e740da/PAESE-PODKLAD-LONG-COVER-FLUID-KRYJACY-PORCELAIN\",
    \"desc\": \"Stan: Nowy, Marka: Paese, Konsystencja: płynna, Właściwości: wyrównanie kolorytu, Poziom krycia: wysoki, Typ skóry: Do wszystkich typów skóry, SPF: brak\"
  },
  {
    \"name\": \"KYLIE ZESTAW PĘDZLI DO MAKIJAŻU 12szt + ETUI\",
    \"price\": 9.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11face/bd4f23404f908c05f478acf74122/KYLIE-ZESTAW-PEDZLI-DO-MAKIJAZU-12szt-ETUI\",
    \"desc\": \"Stan: Nowy, Marka: inna marka\"
  },
  {
    \"name\": \"PALETA CIENI DO MAKIJAŻU OCZU 18 KOLORÓW ZESTAW\",
    \"price\": 14.24,
    \"imageURL\": \"https://a.allegroimg.com/s180/1185c7/54b9fd3b4ccaaa51732982935acc/PALETA-CIENI-DO-MAKIJAZU-OCZU-18-KOLOROW-ZESTAW\",
    \"desc\": \"Stan: Nowy, Marka: Retoo\"
  },
  {
    \"name\": \"DOUGLAS PALETA CIENI DO OCZU BEŻ BRĄZ MY FAVORITE\",
    \"price\": 17.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/114f08/13e5242940f7a0157e39dbb9fd66/DOUGLAS-PALETA-CIENI-DO-OCZU-BEZ-BRAZ-MY-FAVORITE\",
    \"desc\": \"Stan: Nowy, Marka: Douglas, Rodzaj: paleta cieni, Forma: Prasowane\"
  },
  {
    \"name\": \"ELEVERLASH ODŻYWKA DO RZĘS PIĘKNE GĘSTE RZĘSY 3ml\",
    \"price\": 146,
    \"imageURL\": \"https://a.allegroimg.com/s180/113cff/91af1c61488dac06814046b8b703/ELEVERLASH-ODZYWKA-DO-RZES-PIEKNE-GESTE-RZESY-3ml\",
    \"desc\": \"Stan: Nowy, Marka: EleverLash\"
  },
  {
    \"name\": \"Zestaw Profesjonalnych Pędzli Do Makijażu 10 Sztuk\",
    \"price\": 14.99,
    \"imageURL\": \"https://2.allegroimg.com/s180/033531/b33b1d4543fca629e7bf22a6de62/Zestaw-Profesjonalnych-Pedzli-Do-Makijazu-10-Sztuk\",
    \"desc\": \"Stan: Nowy, Marka: Clavier\"
  },
  {
    \"name\": \"SZTUCZNE RZĘSY JEDWABNE 5D NA PASKU WYSOKA JAKOŚĆ\",
    \"price\": 2.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/116cc0/86479d7d45b987574a3dbbea6582/SZTUCZNE-RZESY-JEDWABNE-5D-NA-PASKU-WYSOKA-JAKOSC\",
    \"desc\": \"Stan: Nowy, Marka: J.Y.D. Junyida, Typ: jedwabne\"
  },
  {
    \"name\": \"DOUGLAS POMADKA Z KOLAGENEM NUDY BEIGE 3,5ml\",
    \"price\": 7.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11861a/52d4beed48fcb5116c22857ed1a6/DOUGLAS-POMADKA-Z-KOLAGENEM-NUDY-BEIGE-3-5ml\",
    \"desc\": \"Stan: Nowy, Marka: Douglas, Efekt: matowy\"
  },
  {
    \"name\": \"PAESE PODKŁAD LONG COVER FLUID KRYJĄCY ALABASTER\",
    \"price\": 5.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/113cad/5ce297684dfa823be544dc4a9ea6/PAESE-PODKLAD-LONG-COVER-FLUID-KRYJACY-ALABASTER\",
    \"desc\": \"Stan: Nowy, Marka: Paese, Konsystencja: kremowa, Właściwości: przedłużenie trwałości, wyrównanie kolorytu, Poziom krycia: średni, Typ skóry: Normalna, SPF: do 10\"
  },
  {
    \"name\": \"DOUGLAS TUSZ DO RZĘS DEVIL PODKRĘCAJĄCY + OBJĘTOŚĆ\",
    \"price\": 7.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/114da8/721ddee74e1988af3f8f3469d84a/DOUGLAS-TUSZ-DO-RZES-DEVIL-PODKRECAJACY-OBJETOSC\",
    \"desc\": \"Stan: Nowy, Marka: Douglas, Kolor: czarny, Właściwości: podkręcające, pogrubiające, wydłużające, Szczoteczka: silikonowa\"
  },
  {
    \"name\": \"ZESTAW PROFESJONALNYCH PĘDZLI DO MAKIJAŻU 12 SZTUK\",
    \"price\": 18.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11cb15/33cb56cd42709d3db27f73ffdd23/ZESTAW-PROFESJONALNYCH-PEDZLI-DO-MAKIJAZU-12-SZTUK\",
    \"desc\": \"Stan: Nowy, Marka: Ecarla\"
  },
  {
    \"name\": \"DUŻY KUFEREK NA KOSMETYKI MAKIJAŻ PALETA ZESTAW\",
    \"price\": 169.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11fa45/283e040240259e68cb576590b1ba/DUZY-KUFEREK-NA-KOSMETYKI-MAKIJAZ-PALETA-ZESTAW\",
    \"desc\": \"Stan: Nowy, Marka: inna marka (Zmile)\"
  },
  {
    \"name\": \"100szt PŁATKI POD OCZY, DO PRZEDŁUŻANIA RZĘS RÓŻ\",
    \"price\": 20,
    \"imageURL\": \"https://a.allegroimg.com/s180/11efba/1db6397b45179f857d8f2aeb84f5/100szt-PLATKI-POD-OCZY-DO-PRZEDLUZANIA-RZES-ROZ\",
    \"desc\": \"Stan: Nowy, Marka: Lewer\"
  },
  {
    \"name\": \"Bourjois Podkład Healthy Mix 50 51 52 53 54 55\",
    \"price\": 25,
    \"imageURL\": \"https://a.allegroimg.com/s180/11e64c/b39f11b640b38b4734d80f0674e6/Bourjois-Podklad-Healthy-Mix-50-51-52-53-54-55\",
    \"desc\": \"Stan: Nowy, Marka: Bourjois, Konsystencja: płynna, Właściwości: nawilżające, rozświetlające, wygładzające, Poziom krycia: średni, Typ skóry: Do wszystkich typów skóry, SPF: brak\"
  },
  {
    \"name\": \"RZĘSY MAGNETYCZNE 7X DŁUGIE + PĘSETA + 2X EYELINER\",
    \"price\": 45.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/113caf/9194971e48889a83187223e27a19/RZESY-MAGNETYCZNE-7X-DLUGIE-PESETA-2X-EYELINER\",
    \"desc\": \"Stan: Nowy, Marka: inna marka (Memfis), Typ: syntetyczne\"
  },
  {
    \"name\": \"ROZŚWIELTACZ MARY LOU MANIZER S.F.R COLOR\",
    \"price\": 7.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a8ce/e3804dd842faa2557f4864a0e7c4/ROZSWIELTACZ-MARY-LOU-MANIZER-S-F-R-COLOR\",
    \"desc\": \"Stan: Nowy, Marka: S.F.R. Color, Forma: prasowany\"
  },
  {
    \"name\": \"Makeup Revolution Paletka Reloaded Fundamental\",
    \"price\": 28.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a35c/5b63ba2b4570b6f387ebd6fb8ef6/Makeup-Revolution-Paletka-Reloaded-Fundamental\",
    \"desc\": \"Stan: Nowy, Marka: Makeup Revolution, Rodzaj: paleta cieni, Forma: Prasowane\"
  },
  {
    \"name\": \"AG861 PALETA 15 CIENI DO POWIEK BROKAT KAMELEON\",
    \"price\": 11.89,
    \"imageURL\": \"https://a.allegroimg.com/s180/110075/3c248de44f16b9e43bd6c69326a3/AG861-PALETA-15-CIENI-DO-POWIEK-BROKAT-KAMELEON\",
    \"desc\": \"Stan: Nowy, Marka: Aptel, Rodzaj: paleta cieni, Forma: inna\"
  },
  {
    \"name\": \"KUFEREK Z KOSMETYKAMI MAKIJAŻ PALETA CIENI ZESTAW\",
    \"price\": 109,
    \"imageURL\": \"https://a.allegroimg.com/s180/115761/f16de68148218ff8684d52c77b3e/KUFEREK-Z-KOSMETYKAMI-MAKIJAZ-PALETA-CIENI-ZESTAW\",
    \"desc\": \"Stan: Nowy, Marka: Magic Color\"
  },
  {
    \"name\": \"KUFEREK Z KOSMETYKAMI DO MAKIJAŻU KUFER MAKEUP\",
    \"price\": 74.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d2af/fae0ad9f49919d2ec779abfb5c4d/KUFEREK-Z-KOSMETYKAMI-DO-MAKIJAZU-KUFER-MAKEUP\",
    \"desc\": \"Stan: Nowy, Marka: inna marka (MISSYOUNG)\"
  },
  {
    \"name\": \"Stacja pogody - higrometr Lash Shop\",
    \"price\": 29.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/119e28/8332ab264197ba0b21479f58a491/Stacja-pogody-higrometr-Lash-Shop\",
    \"desc\": \"Stan: Nowy, Marka: Lash Shop\"
  },
  {
    \"name\": \"ZESTAW 12 PĘDZLI DO MAKIJAŻU METALOWE ETUI\",
    \"price\": 9.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/03b282/97c640ea4ec3963534d023e01984/ZESTAW-12-PEDZLI-DO-MAKIJAZU-METALOWE-ETUI\",
    \"desc\": \"Stan: Nowy z defektem, Marka: inna marka\"
  },
  {
    \"name\": \"Od producenta Long4Lashes serum do rzęs\",
    \"price\": 54.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11264e/e4319d864626bc992d3a3f52882c/Od-producenta-Long4Lashes-serum-do-rzes\",
    \"desc\": \"Stan: Nowy, Marka: Long4Lashes\"
  },
  {
    \"name\": \"PALETA CIENI zestaw do makijażu powiek 120 KOLORÓW\",
    \"price\": 79.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ab4f/587e63d14de1a02f7da07ceb6be4/PALETA-CIENI-zestaw-do-makijazu-powiek-120-KOLOROW\",
    \"desc\": \"Stan: Nowy, Marka: Profico\"
  },
  {
    \"name\": \"ZESTAW PĘDZLI 24 szt PROFESJONALNE pędzle z ETUI (\",
    \"price\": 55,
    \"imageURL\": \"https://a.allegroimg.com/s180/113fce/9a708d7345fcacb25f3e1d3616d4/ZESTAW-PEDZLI-24-szt-PROFESJONALNE-pedzle-z-ETUI\",
    \"desc\": \"Stan: Nowy, Marka: inna marka (Zestaw pędzli)\"
  },
  {
    \"name\": \"DOUGLAS KREMOWY KOREKTOR W PĘDZELKU NUDE LIGHT nr2\",
    \"price\": 7.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/116640/61a350574140b6b1210dffbae55e/DOUGLAS-KREMOWY-KOREKTOR-W-PEDZELKU-NUDE-LIGHT-nr2\",
    \"desc\": \"Stan: Nowy, Marka: Douglas\"
  },
  {
    \"name\": \"DOUGLAS PUDER BRĄZUJĄCY MAT + ROZŚWIETLAJĄCY\",
    \"price\": 12.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1195c3/71c6d0c1493b9ab94e8a02d20182/DOUGLAS-PUDER-BRAZUJACY-MAT-ROZSWIETLAJACY\",
    \"desc\": \"Stan: Nowy, Marka: Douglas, Rodzaj: prasowany, Właściwości: matujący, inne, SPF: brak\"
  },
  {
    \"name\": \"AG167A PALETA 252 CIENI DO MAKIJAŻU POWIEK MAKEUP\",
    \"price\": 60.6,
    \"imageURL\": \"https://a.allegroimg.com/s180/118613/3674d8234e5792de945e96a7541f/AG167A-PALETA-252-CIENI-DO-MAKIJAZU-POWIEK-MAKEUP\",
    \"desc\": \"Stan: Nowy, Marka: Aptel\"
  },
  {
    \"name\": \"Od producenta Long4Lashes serum do rzęs\",
    \"price\": 54.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11264e/e4319d864626bc992d3a3f52882c/Od-producenta-Long4Lashes-serum-do-rzes\",
    \"desc\": \"Stan: Nowy, Marka: Long4Lashes\"
  },
  {
    \"name\": \"MAYBELLINE Lash Sensational Sky High tusz Black\",
    \"price\": 26.49,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a42e/10c7d211418ea74d9b03675588d8/MAYBELLINE-Lash-Sensational-Sky-High-tusz-Black\",
    \"desc\": \"Stan: Nowy, Marka: Maybelline, Kolor: czarny, Właściwości: wydłużające, podkręcające, Szczoteczka: silikonowa\"
  },
  {
    \"name\": \"RZĘSY MAGNETYCZNE 3X DŁUGIE + PĘSETA + EYELINER\",
    \"price\": 40,
    \"imageURL\": \"https://a.allegroimg.com/s180/115fed/c4ab5fa14bf9998797a640eac973/RZESY-MAGNETYCZNE-3X-DLUGIE-PESETA-EYELINER\",
    \"desc\": \"Stan: Nowy, Marka: inna marka (sztuczne rzęsy doczepiane długie gęste rzęsy), Typ: syntetyczne\"
  },
  {
    \"name\": \"KUFEREK NA KOSMETYKI MAKIJAŻ PALETA CIENI ZESTAW!\",
    \"price\": 129.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11618f/9c7dcf344d2dab4762f1db4d76a8/KUFEREK-NA-KOSMETYKI-MAKIJAZ-PALETA-CIENI-ZESTAW\",
    \"desc\": \"Stan: Nowy, Marka: 2K\"
  },
  {
    \"name\": \"ZESTAW DO HENNY + woda+ pędzel REFECTOCIL BRĄZ 3\",
    \"price\": 33.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/119679/6f4d82d744ae8ea679c3de518d5d/ZESTAW-DO-HENNY-woda-pedzel-REFECTOCIL-BRAZ-3\",
    \"desc\": \"Stan: Nowy, Marka: Refectocil\"
  },
  {
    \"name\": \"ZESTAW PROFESJONALNYCH PĘDZLI DO MAKIJAŻU 12 SZTUK\",
    \"price\": 29.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11631b/dca0de8e4c6783a240a28f41c0a4/ZESTAW-PROFESJONALNYCH-PEDZLI-DO-MAKIJAZU-12-SZTUK\",
    \"desc\": \"Stan: Nowy, Marka: Retoo\"
  },
  {
    \"name\": \"Eveline Total Action Serum Odżywka do Rzęs 8w1\",
    \"price\": 12.85,
    \"imageURL\": \"https://a.allegroimg.com/s180/1131cc/95ac82d645e7a53440989d60c718/Eveline-Total-Action-Serum-Odzywka-do-Rzes-8w1\",
    \"desc\": \"Stan: Nowy, Marka: Eveline Cosmetics\"
  },
  {
    \"name\": \"DOUGLAS PALETA CIENI DO KONTUROWANIA MAKIJAŻU 28G\",
    \"price\": 19.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/1163d6/c32a7a624143b7293ee068f2bb4c/DOUGLAS-PALETA-CIENI-DO-KONTUROWANIA-MAKIJAZU-28G\",
    \"desc\": \"Stan: Nowy, Marka: Douglas\"
  },
  {
    \"name\": \"Remover w płynie 10 ml Noble Lashes\",
    \"price\": 13.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a1ad/5f9cef8f43d88b1849877aca3eec/Remover-w-plynie-10-ml-Noble-Lashes\",
    \"desc\": \"Stan: Nowy, Marka: Noble Lashes\"
  },
  {
    \"name\": \"DOUGLAS ROZŚWIETLACZ Chic & Shine 5,5g\",
    \"price\": 14.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/117aa8/9c7cf0da4dc5809f659b7c66b909/DOUGLAS-ROZSWIETLACZ-Chic-Shine-5-5g\",
    \"desc\": \"Stan: Nowy, Marka: Douglas, Forma: w sztyfcie\"
  },
  {
    \"name\": \"DOUGLAS PALETA CIENI DO KONTUROWANIA\",
    \"price\": 14.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1150ae/3cb7443d4b358f13c5d23ae9aa70/DOUGLAS-PALETA-CIENI-DO-KONTUROWANIA\",
    \"desc\": \"Stan: Nowy, Marka: Douglas\"
  },
  {
    \"name\": \"PAESE PALETA CIENI DO POWIEK NUDE EDITION 1\",
    \"price\": 24.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11bb3c/86579bec4ed4a4fd8236d3111e5f/PAESE-PALETA-CIENI-DO-POWIEK-NUDE-EDITION-1\",
    \"desc\": \"Stan: Nowy, Marka: Paese\"
  },
  {
    \"name\": \"KUFEREK NA KOSMETYKI MAKIJAŻ PALETA CIENI POMADKA\",
    \"price\": 119.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1149df/2fb78fe74b818c2bc474ba8244f8/KUFEREK-NA-KOSMETYKI-MAKIJAZ-PALETA-CIENI-POMADKA\",
    \"desc\": \"Stan: Nowy, Marka: inna marka (Zmile)\"
  },
  {
    \"name\": \"DOUGLAS KORYGUJĄCA BAZA POD PODKŁAD 30ml\",
    \"price\": 11.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c456/b4ae2f8247c29b8c43217e53e2be/DOUGLAS-KORYGUJACA-BAZA-POD-PODKLAD-30ml\",
    \"desc\": \"Stan: Nowy, Marka: Douglas, Właściwości: przedłużenie trwałości, rozświetlające, wygładzające, wyrównanie kolorytu, zwężenie porów\"
  },
  {
    \"name\": \"LOREAL True Match Podkład N1 Nude Ivory\",
    \"price\": 32.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11fa5b/3538165a43918c0f2d3d29c97903/LOREAL-True-Match-Podklad-N1-Nude-Ivory\",
    \"desc\": \"Stan: Nowy, Marka: L'Oréal Paris, Konsystencja: płynna, Właściwości: wygładzające, Poziom krycia: średni, Typ skóry: Do wszystkich typów skóry, SPF: 11-20\"
  },
  {
    \"name\": \"PALETA CIENI HUDA NEW NUDE 18 KOLORÓW\",
    \"price\": 44.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11cb2e/aa6033074e5485a79f45fbb94f86/PALETA-CIENI-HUDA-NEW-NUDE-18-KOLOROW\",
    \"desc\": \"Stan: Nowy, Marka: inna marka (MOJI), Rodzaj: paleta cieni, Forma: Prasowane\"
  },
  {
    \"name\": \"KĘPKI RZĘSY CLAVIER DU2O DOUBLE VOLUME 10 mm\",
    \"price\": 14.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/119c15/6df714f940f282dfa3a1e5d319b1/KEPKI-RZESY-CLAVIER-DU2O-DOUBLE-VOLUME-10-mm\",
    \"desc\": \"Stan: Nowy, Marka: Clavier, Typ: jedwabne\"
  },
  {
    \"name\": \"COLLECTION EYES PALETA 6 CIENI NUDE GREY 6g\",
    \"price\": 7.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/119b1c/97a1ccd54409b394b0e076a39693/COLLECTION-EYES-PALETA-6-CIENI-NUDE-GREY-6g\",
    \"desc\": \"Stan: Nowy, Marka: Collection, Rodzaj: paleta cieni, Forma: Prasowane\"
  },
  {
    \"name\": \"Zestaw 24 Profesjonalnych Pędzli do Makijażu Etui\",
    \"price\": 32.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/117167/117fde244528af72aa8c6f50e063/Zestaw-24-Profesjonalnych-Pedzli-do-Makijazu-Etui\",
    \"desc\": \"Stan: Nowy, Marka: Iso Trade\"
  },
  {
    \"name\": \"ZESTAW PROFESJONALNYCH PĘDZLI DO MAKIJAŻU 20 SZTUK\",
    \"price\": 11.89,
    \"imageURL\": \"https://a.allegroimg.com/s180/115907/6c73ab774a89ae72115dc31d02c3/ZESTAW-PROFESJONALNYCH-PEDZLI-DO-MAKIJAZU-20-SZTUK\",
    \"desc\": \"Stan: Nowy, Marka: inna marka (00)\"
  },
  {
    \"name\": \"Bourjois Healthy Mix Lekki Krem BB 01 02 03 30ml\",
    \"price\": 22.23,
    \"imageURL\": \"https://a.allegroimg.com/s180/0113aa/e86f9a0f4fe1848b7b55da621baa/Bourjois-Healthy-Mix-Lekki-Krem-BB-01-02-03-30ml\",
    \"desc\": \"Stan: Nowy, Marka: Bourjois, Właściwości: nawilżające, przedłużenie trwałości, rozświetlające, wygładzające, wyrównanie kolorytu, SPF: brak\"
  },
  {
    \"name\": \"KUFEREK Z KOSMETYKAMI KUFER MAKIJAŻ PALETA ZESTAW\",
    \"price\": 129,
    \"imageURL\": \"https://a.allegroimg.com/s180/1171cf/cd1d3b334a3f90e21db7397795d5/KUFEREK-Z-KOSMETYKAMI-KUFER-MAKIJAZ-PALETA-ZESTAW\",
    \"desc\": \"Stan: Nowy, Marka: inna marka (missyoung)\"
  },
  {
    \"name\": \"RZĘSY MAGNETYCZNE ZESTAW + EYELINER + PĘSETA\",
    \"price\": 25.49,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a16b/db60d0b6428a92c9d8b60b824b0f/RZESY-MAGNETYCZNE-ZESTAW-EYELINER-PESETA\",
    \"desc\": \"Stan: Nowy, Marka: inna marka (RZĘSY MAGNETYCZNE ZESTAW), Typ: syntetyczne\"
  },
  {
    \"name\": \"SZTUCZNE RZĘSY JEDWABNE 5D NA PASKU WYSOKA JAKOŚĆ\",
    \"price\": 3.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/111fbc/d1ae0b2d4953bdac4280b64a5198/SZTUCZNE-RZESY-JEDWABNE-5D-NA-PASKU-WYSOKA-JAKOSC\",
    \"desc\": \"Stan: Nowy, Marka: J.Y.D. Junyida, Typ: jedwabne\"
  },
  {
    \"name\": \"LOreal Paris Podkład True Match N4 Beige 30ml\",
    \"price\": 36.58,
    \"imageURL\": \"https://a.allegroimg.com/s180/116b90/6d293dc2431aba714024d0266a85/LOreal-Paris-Podklad-True-Match-N4-Beige-30ml\",
    \"desc\": \"Stan: Nowy, Marka: L'Oréal Paris, Konsystencja: kremowa, Właściwości: nawilżające, Poziom krycia: średni, Typ skóry: Do wszystkich typów skóry, SPF: 11-20\"
  },
  {
    \"name\": \"DOUGLAS LINER CZARNY W PŁYNIE EYELINER 5,5ml\",
    \"price\": 9.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b707/26717370413b8218c37d1dfaf879/DOUGLAS-LINER-CZARNY-W-PLYNIE-EYELINER-5-5ml\",
    \"desc\": \"Stan: Nowy, Marka: Douglas, Rodzaj: w pędzelku, Kolor: czarny\"
  },
  {
    \"name\": \"LOreal Paris Podkład True Match N3 Beige Creme\",
    \"price\": 36.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ca2b/06af719d447785b06786878307b4/LOreal-Paris-Podklad-True-Match-N3-Beige-Creme\",
    \"desc\": \"Stan: Nowy, Marka: L'Oréal Paris, Konsystencja: kremowa, Właściwości: nawilżające, matujące, Poziom krycia: średni, Typ skóry: Do wszystkich typów skóry, SPF: 11-20\"
  },
  {
    \"name\": \"Bourjois Mascara Twist Up The Volume Ultra Black\",
    \"price\": 32.99,
    \"imageURL\": \"https://2.allegroimg.com/s180/019ef5/acfae6d241e3920d37c37c3e47e2/Bourjois-Mascara-Twist-Up-The-Volume-Ultra-Black\",
    \"desc\": \"Stan: Nowy, Marka: Bourjois, Kolor: czarny, Właściwości: pogrubiające, wydłużające, Szczoteczka: silikonowa\"
  },
  {
    \"name\": \"Jessup Zestaw 10 pędzli T243 White/Silver\",
    \"price\": 74.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11e3b2/a19b431a4b91b4de98842c4e6873/Jessup-Zestaw-10-pedzli-T243-White-Silver\",
    \"desc\": \"Stan: Nowy, Marka: Jessup\"
  },
  {
    \"name\": \"BOURJOIS HEALTHY MIX PODKŁAD NOWA WERSJA\",
    \"price\": 25.99,
    \"imageURL\": \"https://e.allegroimg.com/s180/06fd1a/e38244eb4859a6c6f212c819ab6e/BOURJOIS-HEALTHY-MIX-PODKLAD-NOWA-WERSJA\",
    \"desc\": \"Stan: Nowy, Marka: Bourjois, Konsystencja: płynna, Właściwości: rozświetlające, wyrównanie kolorytu, Poziom krycia: wysoki, Typ skóry: Do wszystkich typów skóry, SPF: brak\"
  },
  {
    \"name\": \"BLENDER GĄBKA DO MAKIJAŻU BEAUTY MAKE-UP\",
    \"price\": 1.79,
    \"imageURL\": \"https://8.allegroimg.com/s180/032622/c9ec59e3463bb5e4dcba500edea8/BLENDER-GABKA-DO-MAKIJAZU-BEAUTY-MAKE-UP\",
    \"desc\": \"Stan: Nowy, Marka: Finess, Liczba sztuk: 1 szt.\"
  },
  {
    \"name\": \"LOreal Paris Podkład True Match N2 Vanilla 30ml\",
    \"price\": 36.97,
    \"imageURL\": \"https://a.allegroimg.com/s180/11dc1b/3fffd51f419caca67c633dd754bf/LOreal-Paris-Podklad-True-Match-N2-Vanilla-30ml\",
    \"desc\": \"Stan: Nowy, Marka: L'Oréal Paris, Konsystencja: kremowa, Właściwości: nawilżające, Poziom krycia: średni, Typ skóry: Do wszystkich typów skóry, SPF: 11-20\"
  },
  {
    \"name\": \"KĘPKI RZĘSY JEDWABNE NATURALNE 60 SZT. 10 mm\",
    \"price\": 6.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/113174/dee11d5544108d3740238e2fc851/KEPKI-RZESY-JEDWABNE-NATURALNE-60-SZT-10-mm\",
    \"desc\": \"Stan: Nowy, Marka: Clavier, Typ: jedwabne\"
  },
  {
    \"name\": \"PODŚWIETLANE LUSTERKO KOSMETYCZNE DO MAKIJAŻU LED\",
    \"price\": 40,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d7f9/1ed9a3bc4d698d7d1d0427c5cade/PODSWIETLANE-LUSTERKO-KOSMETYCZNE-DO-MAKIJAZU-LED\",
    \"desc\": \"Stan: Nowy, Marka: inna marka (LA033895)\"
  },
  {
    \"name\": \"RZĘSY MAGNETYCZNE 3X DŁUGIE + PĘSETA + EYELINER\",
    \"price\": 34.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11bfe4/e78091b74e16ba2e80944ba43e19/RZESY-MAGNETYCZNE-3X-DLUGIE-PESETA-EYELINER\",
    \"desc\": \"Stan: Nowy, Marka: inna marka (Memfis), Typ: syntetyczne\"
  },
  {
    \"name\": \"Essence Extreme Shine Błyszczyk 01 CRYSTAL CLEAR\",
    \"price\": 10.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1155af/a90d66ba481cb34300fa1720736b/Essence-Extreme-Shine-Blyszczyk-01-CRYSTAL-CLEAR\",
    \"desc\": \"Stan: Nowy, Marka: Essence\"
  },
  {
    \"name\": \"POMADKA POWIĘKSZAJĄCO-NAWILŻAJĄCA MALINA AA\",
    \"price\": 5.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11f7c5/3df9ae83411aad29bdbbe323240a/POMADKA-POWIEKSZAJACO-NAWILZAJACA-MALINA-AA\",
    \"desc\": \"Stan: Nowy, Marka: AA, Efekt: inny\"
  },
  {
    \"name\": \"PODŚWIETLANE LUSTERKO DO MAKIJAŻU LED KOSMETYCZNE\",
    \"price\": 40,
    \"imageURL\": \"https://a.allegroimg.com/s180/116e43/3bb95e564a04a6ca83ed00b75196/PODSWIETLANE-LUSTERKO-DO-MAKIJAZU-LED-KOSMETYCZNE\",
    \"desc\": \"Stan: Nowy, Marka: Retoo\"
  },
  {
    \"name\": \"SZCZOTECZKA Kryształ DO RZĘS 50SZT ProjectLashes\",
    \"price\": 8.49,
    \"imageURL\": \"https://a.allegroimg.com/s180/03497e/baf4de204634ac03277ad52a0b3f/SZCZOTECZKA-Krysztal-DO-RZES-50SZT-ProjectLashes\",
    \"desc\": \"Stan: Nowy, Marka: ProjectLashes\"
  }
]`);

const c = gifts as BaseGift[];

export default c;
