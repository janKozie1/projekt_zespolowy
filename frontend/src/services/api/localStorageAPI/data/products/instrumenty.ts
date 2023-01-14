import type { BaseGift } from '../gifts';

const gifts: unknown = JSON.parse(`[
  {
    \"name\": \"YAMAHA PSR-F52 KEYBOARD 61 KLAWISZY\",
    \"price\": 496,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ef9a/276860774e23a911495be5939f1b/YAMAHA-PSR-F52-KEYBOARD-61-KLAWISZY\",
    \"desc\": \"Stan: Nowy, Marka: Yamaha\"
  },
  {
    \"name\": \"GITARA ELEKTRYCZNA + AKCESORIA PROMOCJA\",
    \"price\": 399,
    \"imageURL\": \"https://a.allegroimg.com/s180/11353e/580016d8496aa5a68303a74a6f59/GITARA-ELEKTRYCZNA-AKCESORIA-PROMOCJA\",
    \"desc\": \"Stan: Nowy, Marka: Preston, Rodzaj: Stratocaster\"
  },
  {
    \"name\": \"GITARA AKUSTYCZNA KLASYCZNA DLA POCZĄTKUJĄCYCH\",
    \"price\": 299,
    \"imageURL\": \"https://a.allegroimg.com/s180/111e33/e75c2c824f53b843c5137a6fdf63/GITARA-AKUSTYCZNA-KLASYCZNA-DLA-POCZATKUJACYCH\",
    \"desc\": \"Stan: Nowy, Marka: Castelo, Rodzaj: Flamenco\"
  },
  {
    \"name\": \"Duże Organy Keyboard Pianino do Nauki 54 Mikrofon\",
    \"price\": 148.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ba35/16e195a346f4b15ae31b7b4eaf57/Duze-Organy-Keyboard-Pianino-do-Nauki-54-Mikrofon\",
    \"desc\": \"Stan: Nowy, Marka: inna, Liczba klawiszy: 54, Zasilanie: sieciowe\"
  },
  {
    \"name\": \"GITARA AKUSTYCZNA KLASYCZNA DLA POCZĄTKUJĄCYCH\",
    \"price\": 299,
    \"imageURL\": \"https://a.allegroimg.com/s180/111225/3ce1d6ac486baa95f54a5dbc88e6/GITARA-AKUSTYCZNA-KLASYCZNA-DLA-POCZATKUJACYCH\",
    \"desc\": \"Stan: Nowy, Marka: Castelo, Rodzaj: Flamenco\"
  },
  {
    \"name\": \"GITARA ELEKTRYCZNA + WZMACNIACZ - EXTRA ZESTAW\",
    \"price\": 689,
    \"imageURL\": \"https://a.allegroimg.com/s180/0379d3/0347f04a452e9535a88c27a44dfd/GITARA-ELEKTRYCZNA-WZMACNIACZ-EXTRA-ZESTAW\",
    \"desc\": \"Stan: Nowy, Marka: Vision\"
  },
  {
    \"name\": \"GITARA ELEKTRYCZNA + TUNER + STATYW + AKCESORIA\",
    \"price\": 429,
    \"imageURL\": \"https://a.allegroimg.com/s180/11dec1/89dd4d7b4912af7bd2141ec6844f/GITARA-ELEKTRYCZNA-TUNER-STATYW-AKCESORIA\",
    \"desc\": \"Stan: Nowy, Marka: Preston, Rodzaj: Stratocaster\"
  },
  {
    \"name\": \"SKRZYPCE 4/4 -GOTOWE DO GRANIA + ŻEBERKO + TUNER\",
    \"price\": 399,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c949/ec5f434b4d4b8d33033ef2744698/SKRZYPCE-4-4-GOTOWE-DO-GRANIA-ZEBERKO-TUNER\",
    \"desc\": \"Stan: Nowy, Marka: Craftman, Rozmiar: 4/4\"
  },
  {
    \"name\": \"GITARA KLASYCZNA - NIEMIECKA + PAKIET + TUNER!\",
    \"price\": 349,
    \"imageURL\": \"https://a.allegroimg.com/s180/114e65/5e6e7ba54d44920aadba3700e479/GITARA-KLASYCZNA-NIEMIECKA-PAKIET-TUNER\",
    \"desc\": \"Stan: Nowy, Marka: MSA\"
  },
  {
    \"name\": \"GITARA AKUSTYCZNA PEŁNOWYMIAROWA NIEMIECKA PAKIET\",
    \"price\": 449,
    \"imageURL\": \"https://d.allegroimg.com/s180/01ac03/90b7d5344564bbab16224529eb0d/GITARA-AKUSTYCZNA-PELNOWYMIAROWA-NIEMIECKA-PAKIET\",
    \"desc\": \"Stan: Nowy, Marka: MSA, Rodzaj pudła: Dreadnought, Western\"
  },
  {
    \"name\": \"WZMACNIACZ GITAROWY POSITIVE GRID SPARK 40 GŁOŚNIK\",
    \"price\": 1359,
    \"imageURL\": \"https://a.allegroimg.com/s180/114eab/5a43a9544803878ab2cc9c1a554b/WZMACNIACZ-GITAROWY-POSITIVE-GRID-SPARK-40-GLOSNIK\",
    \"desc\": \"Stan: Powystawowy, Rodzaj: combo, Marka: Positive Grid\"
  },
  {
    \"name\": \"Keyboard Yamaha PSR-SX700 ARANŻER+DODATKI -KLIKNIJ\",
    \"price\": 5998,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b2e9/7cb97e344457a21fadeb76febe88/Keyboard-Yamaha-PSR-SX700-ARANZER-DODATKI-KLIKNIJ\",
    \"desc\": \"Stan: Nowy, Marka: Yamaha, Liczba klawiszy: 61, Zasilanie: sieciowe\"
  },
  {
    \"name\": \"NAKLEJKI NUTY NAKLAWISZE KEYBOARD PIANINO KOLOROWE\",
    \"price\": 17,
    \"imageURL\": \"https://a.allegroimg.com/s180/118de6/1d57ebce4cfab20d932fa87a25ae/NAKLEJKI-NUTY-NAKLAWISZE-KEYBOARD-PIANINO-KOLOROWE\",
    \"desc\": \"Stan: Nowy, Marka: inna (craftman)\"
  },
  {
    \"name\": \"GITARA ELEKTRYCZNA + AKCESORIA - PROMOCJA!\",
    \"price\": 439,
    \"imageURL\": \"https://3.allegroimg.com/s180/01b4dd/d77142ae4d16aab06e9c7a8e1883/GITARA-ELEKTRYCZNA-AKCESORIA-PROMOCJA\",
    \"desc\": \"Stan: Nowy, Marka: Vision, Rodzaj: Stratocaster\"
  },
  {
    \"name\": \"GITARA KLASYCZNA 3/4 DLA POCZĄTKUJĄCYCH BLU KOLORY\",
    \"price\": 319,
    \"imageURL\": \"https://a.allegroimg.com/s180/11acb0/f5a5568d467fab60734940c81ae1/GITARA-KLASYCZNA-3-4-DLA-POCZATKUJACYCH-BLU-KOLORY\",
    \"desc\": \"Stan: Nowy, Marka: Castelo, Rodzaj: Flamenco\"
  },
  {
    \"name\": \"KALIMBA INSTRUMENT AFRYKAŃSKI PIANINO ZANZA MBIRA\",
    \"price\": 69,
    \"imageURL\": \"https://a.allegroimg.com/s180/11bfb5/9cf636914a9699bf3b698398dfc0/KALIMBA-INSTRUMENT-AFRYKANSKI-PIANINO-ZANZA-MBIRA\",
    \"desc\": \"Stan: Nowy, Marka: Jeremi\"
  },
  {
    \"name\": \"GITARA AKUSTYCZNA - NIEMIECKA + PAKIET\",
    \"price\": 449,
    \"imageURL\": \"https://b.allegroimg.com/s180/0306b2/30590d754845a98a53c592c8f1eb/GITARA-AKUSTYCZNA-NIEMIECKA-PAKIET\",
    \"desc\": \"Stan: Nowy, Marka: MSA, Wersja: Praworęczna, Rodzaj pudła: Dreadnought, Western\"
  },
  {
    \"name\": \"GITARA AKUSTYCZNA / KLASYCZNA BK + AKCESORIA\",
    \"price\": 299,
    \"imageURL\": \"https://a.allegroimg.com/s180/111cc1/1c26a8244a53a5d8db337cb7a662/GITARA-AKUSTYCZNA-KLASYCZNA-BK-AKCESORIA\",
    \"desc\": \"Stan: Nowy, Marka: Castelo, Rodzaj: Flamenco\"
  },
  {
    \"name\": \"SKRZYPCE 4/4 -GOTOWE DO GRANIA + ŻEBERKO + TUNER\",
    \"price\": 399,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c949/ec5f434b4d4b8d33033ef2744698/SKRZYPCE-4-4-GOTOWE-DO-GRANIA-ZEBERKO-TUNER\",
    \"desc\": \"Stan: Nowy, Marka: Craftman, Rozmiar: 4/4\"
  },
  {
    \"name\": \"RINGWAY RP220 RW PVC PIANINO CYFROWE ELEKTRONICZNE\",
    \"price\": 2399,
    \"imageURL\": \"https://a.allegroimg.com/s180/118b34/e9139a72404f9c37dff7530369d6/RINGWAY-RP220-RW-PVC-PIANINO-CYFROWE-ELEKTRONICZNE\",
    \"desc\": \"Stan: Nowy, Marka: Ringway\"
  },
  {
    \"name\": \"GITARA ELEKTRYCZNA + WZMACNIACZ GITAROWY PROMOCJA!\",
    \"price\": 699,
    \"imageURL\": \"https://b.allegroimg.com/s180/015ae1/272e8dd94345806cb95fdaf3ae3b/GITARA-ELEKTRYCZNA-WZMACNIACZ-GITAROWY-PROMOCJA\",
    \"desc\": \"Stan: Nowy, Marka: Vision, Rodzaj: Stratocaster\"
  },
  {
    \"name\": \"GITARA AKUSTYCZNA DLA POCZĄTKUJĄCYCH - 6 KOLORÓW\",
    \"price\": 319,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a57e/5efa63154588aa1045abeb9dfb50/GITARA-AKUSTYCZNA-DLA-POCZATKUJACYCH-6-KOLOROW\",
    \"desc\": \"Stan: Nowy, Marka: Castelo, Rodzaj: Flamenco\"
  },
  {
    \"name\": \"Yamaha PSR-E473 NOWY Keyboard | następca 463\",
    \"price\": 1795,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ab81/c4cbce0441f8b4d677bb3f0152b3/Yamaha-PSR-E473-NOWY-Keyboard-nastepca-463\",
    \"desc\": \"Stan: Nowy, Marka: Yamaha, Liczba klawiszy: 61, Zasilanie: sieciowe\"
  },
  {
    \"name\": \"KAPODASTER DO GITARY KLASYCZNEJ AKUSTYCZNEJ ******\",
    \"price\": 25,
    \"imageURL\": \"https://a.allegroimg.com/s180/115391/e4873de04339a9b3e0c73695f659/KAPODASTER-DO-GITARY-KLASYCZNEJ-AKUSTYCZNEJ\",
    \"desc\": \"Stan: Nowy, Marka: Craftman\"
  },
  {
    \"name\": \"UKULELE SOPRANOWE POKROWIEC+PIÓRKA+STROIK+AKORDY\",
    \"price\": 128.89,
    \"imageURL\": \"https://a.allegroimg.com/s180/11cd91/0ac8661e4a5a8c1b267d13175083/UKULELE-SOPRANOWE-POKROWIEC-PIORKA-STROIK-AKORDY\",
    \"desc\": \"Stan: Nowy, Rodzaj: sopranowe, Marka: NN\"
  },
  {
    \"name\": \"Gitara klasyczna 3/4 - NIEMIECKA SZKOLNA - WaWa\",
    \"price\": 399,
    \"imageURL\": \"https://e.allegroimg.com/s180/0391a4/f456f72143f5b49f02e4288d6ace/Gitara-klasyczna-3-4-NIEMIECKA-SZKOLNA-WaWa\",
    \"desc\": \"Stan: Nowy, Marka: MSA, Rodzaj: Inny\"
  },
  {
    \"name\": \"GITARA ELEKTRYCZNA + AKCESORIA - PROMOCJA!\",
    \"price\": 439,
    \"imageURL\": \"https://8.allegroimg.com/s180/01320b/9326a14e40e7b12389a5a567c008/GITARA-ELEKTRYCZNA-AKCESORIA-PROMOCJA\",
    \"desc\": \"Stan: Nowy, Marka: Vision, Rodzaj: Stratocaster\"
  },
  {
    \"name\": \"Saksofon altowy Keilwerth SKY\",
    \"price\": 2600,
    \"imageURL\": \"https://a.allegroimg.com/s180/03efc8/c6993d624eeab14c88feb698ac4e/Saksofon-altowy-Keilwerth-SKY\",
    \"desc\": \"Stan: Nowy, Marka: keilwerth\"
  },
  {
    \"name\": \"KEYBOARD PIANINO ORGANY DZIECI PIANINKO + MIKROFON\",
    \"price\": 69.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11972b/55f335b94cbd91343c2ba6124790/KEYBOARD-PIANINO-ORGANY-DZIECI-PIANINKO-MIKROFON\",
    \"desc\": \"Stan: Nowy, Marka: MQ, Liczba klawiszy: 61, Zasilanie: sieciowe\"
  },
  {
    \"name\": \"Keyboard Yamaha PSR-SX900 ARANŻER+DODATKI -KLIKNIJ\",
    \"price\": 9995,
    \"imageURL\": \"https://a.allegroimg.com/s180/11f135/926a79084e1daf6340b05db9a136/Keyboard-Yamaha-PSR-SX900-ARANZER-DODATKI-KLIKNIJ\",
    \"desc\": \"Stan: Nowy, Marka: Yamaha\"
  },
  {
    \"name\": \"MQ 6106 KEYBOARD organy z mikrofonem dla dzieci\",
    \"price\": 74.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/1138b2/18d044cc4f74b3486979b6fe4ccf/MQ-6106-KEYBOARD-organy-z-mikrofonem-dla-dzieci\",
    \"desc\": \"Stan: Nowy, Marka: MQ, Liczba klawiszy: 61, Zasilanie: sieciowe\"
  },
  {
    \"name\": \"MQ 6106 KEYBOARD organy z mikrofonem dla dzieci\",
    \"price\": 74.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/1138b2/18d044cc4f74b3486979b6fe4ccf/MQ-6106-KEYBOARD-organy-z-mikrofonem-dla-dzieci\",
    \"desc\": \"Stan: Nowy, Marka: MQ, Liczba klawiszy: 61, Zasilanie: sieciowe\"
  },
  {
    \"name\": \"GITARA KLASYCZNA / AKUSTYCZNA 4/4 + PREZENT!\",
    \"price\": 349,
    \"imageURL\": \"https://a.allegroimg.com/s180/11643d/1fbcc43c44e8bf373f0400c5ec1a/GITARA-KLASYCZNA-AKUSTYCZNA-4-4-PREZENT\",
    \"desc\": \"Stan: Nowy, Marka: MSA\"
  },
  {
    \"name\": \"DUŻA SOLIDNA GITARA DLA DZIECI 6 STRUN 0675\",
    \"price\": 55.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1179cd/66ca51d643718f8e5157d8a4938a/DUZA-SOLIDNA-GITARA-DLA-DZIECI-6-STRUN-0675\",
    \"desc\": \"Stan: Nowy, Marka: inna (Nicola.toys)\"
  },
  {
    \"name\": \"GITARA AKUSTYCZNA 4/4 CASTELO AKCESORIA + TUNER\",
    \"price\": 339,
    \"imageURL\": \"https://a.allegroimg.com/s180/111aed/6df0b1d74eb69ac58152f2a81211/GITARA-AKUSTYCZNA-4-4-CASTELO-AKCESORIA-TUNER\",
    \"desc\": \"Stan: Nowy, Marka: Castelo, Wersja: Praworęczna, Rodzaj pudła: Inny\"
  },
  {
    \"name\": \"Yamaha P-45B | NOWE | Pianino cyfrowe + STATYW\",
    \"price\": 2049,
    \"imageURL\": \"https://a.allegroimg.com/s180/11eec9/b30428f5486ab8281d6db73089fb/Yamaha-P-45B-NOWE-Pianino-cyfrowe-STATYW\",
    \"desc\": \"Stan: Nowy, Marka: Yamaha\"
  },
  {
    \"name\": \"GITARA ELEKTRYCZNA + TUNER + STATYW + AKCESORIA\",
    \"price\": 429,
    \"imageURL\": \"https://a.allegroimg.com/s180/11dec1/89dd4d7b4912af7bd2141ec6844f/GITARA-ELEKTRYCZNA-TUNER-STATYW-AKCESORIA\",
    \"desc\": \"Stan: Nowy, Marka: Preston, Rodzaj: Stratocaster\"
  },
  {
    \"name\": \"KEYBOARD ZWIJANY PRZENOŚNY ORGANY 49 KLAWISZY\",
    \"price\": 119.89,
    \"imageURL\": \"https://a.allegroimg.com/s180/117a30/1fdce86d4fe584b2510604324932/KEYBOARD-ZWIJANY-PRZENOSNY-ORGANY-49-KLAWISZY\",
    \"desc\": \"Stan: Nowy, Marka: inna (DNA), Liczba klawiszy: 49\"
  },
  {
    \"name\": \"NAKLEJKI NUTY NAKLAWISZE KEYBOARD PIANINO KOLOROWE\",
    \"price\": 17,
    \"imageURL\": \"https://a.allegroimg.com/s180/118de6/1d57ebce4cfab20d932fa87a25ae/NAKLEJKI-NUTY-NAKLAWISZE-KEYBOARD-PIANINO-KOLOROWE\",
    \"desc\": \"Stan: Nowy, Marka: inna (craftman)\"
  },
  {
    \"name\": \"Kalimba Mahalo Tradycyjna MKA17TD pianino zanza\",
    \"price\": 159.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1150f8/dc0ed1a344bfae76ad48eebd3ca3/Kalimba-Mahalo-Tradycyjna-MKA17TD-pianino-zanza\",
    \"desc\": \"Stan: Nowy, Marka: Jeremi\"
  },
  {
    \"name\": \"GITARA KLASYCZNA 3/4 AKCESORIA + STROIK + STOJAK\",
    \"price\": 339,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a8bb/a17774e74754a41efd892b91bcb9/GITARA-KLASYCZNA-3-4-AKCESORIA-STROIK-STOJAK\",
    \"desc\": \"Stan: Nowy, Marka: Castelo, Rodzaj: Flamenco\"
  },
  {
    \"name\": \"GITARA BASOWA + WZMACNIACZ 30 WATT - PROMOCJA!\",
    \"price\": 949,
    \"imageURL\": \"https://a.allegroimg.com/s180/033ceb/1933ad804036b7fa12edec5d3b0b/GITARA-BASOWA-WZMACNIACZ-30-WATT-PROMOCJA\",
    \"desc\": \"Stan: Nowy, Marka: Vision\"
  },
  {
    \"name\": \"GITARA ELEKTRYCZNA + AKCESORIA - PROMOCJA!\",
    \"price\": 439,
    \"imageURL\": \"https://4.allegroimg.com/s180/036ed0/411a2b73449fab35ada37b4be104/GITARA-ELEKTRYCZNA-AKCESORIA-PROMOCJA\",
    \"desc\": \"Stan: Nowy, Marka: Vision, Rodzaj: Stratocaster\"
  },
  {
    \"name\": \"GITARA KLASYCZNA 3/4 NIEMIECKA + SUPER PAKIET!\",
    \"price\": 329,
    \"imageURL\": \"https://9.allegroimg.com/s180/016d76/fb70c68f447a8e82bfda4072d0e9/GITARA-KLASYCZNA-3-4-NIEMIECKA-SUPER-PAKIET\",
    \"desc\": \"Stan: Nowy, Marka: MSA\"
  },
  {
    \"name\": \"ZESTAW GITARA ELEKTRYCZNA + WZMACNIACZ 20WATT USB!\",
    \"price\": 669,
    \"imageURL\": \"https://a.allegroimg.com/s180/038f42/e462ba7f43c4b4789d7d533807ea/ZESTAW-GITARA-ELEKTRYCZNA-WZMACNIACZ-20WATT-USB\",
    \"desc\": \"Stan: Nowy, Marka: Vision, Rodzaj: Stratocaster\"
  },
  {
    \"name\": \"GITARA AKUSTYCZNA 4/4 AKCESORIA + STOJAK + TUNER\",
    \"price\": 359,
    \"imageURL\": \"https://a.allegroimg.com/s180/114ecb/c2b6576a443ea643254aba990e2f/GITARA-AKUSTYCZNA-4-4-AKCESORIA-STOJAK-TUNER\",
    \"desc\": \"Stan: Nowy, Marka: Castelo\"
  },
  {
    \"name\": \"BE JOE VALENCIA GC-928 GITARA KLASYCZNA 4/4\",
    \"price\": 629,
    \"imageURL\": \"https://a.allegroimg.com/s180/11049f/a5b6aea44d9ea7e410a180723a91/BE-JOE-VALENCIA-GC-928-GITARA-KLASYCZNA-4-4\",
    \"desc\": \"Stan: Nowy, Marka: Be Joe, Rodzaj: Inny\"
  },
  {
    \"name\": \"GITARA AKUSTYCZNA 3/4 NIEMIECKA + PAKIET - Wawa!\",
    \"price\": 369,
    \"imageURL\": \"https://a.allegroimg.com/s180/039d58/2bd097db4635a4677550a5ffbe20/GITARA-AKUSTYCZNA-3-4-NIEMIECKA-PAKIET-Wawa\",
    \"desc\": \"Stan: Nowy, Marka: MSA, Wersja: Praworęczna, Rodzaj pudła: Dreadnought, Western\"
  },
  {
    \"name\": \"Yamaha P-45B | NOWE | Pianino cyfrowe | 24H\",
    \"price\": 1928,
    \"imageURL\": \"https://a.allegroimg.com/s180/110271/4c81c39d406d8bc459d57e16174c/Yamaha-P-45B-NOWE-Pianino-cyfrowe-24H\",
    \"desc\": \"Stan: Nowy, Marka: Yamaha\"
  },
  {
    \"name\": \"RINGWAY RP35 WH BIAŁE PIANINO CYFROWE NOGI LISTWA\",
    \"price\": 2199,
    \"imageURL\": \"https://a.allegroimg.com/s180/11e927/176a2fde48c499b7cc83988ecf34/RINGWAY-RP35-WH-BIALE-PIANINO-CYFROWE-NOGI-LISTWA\",
    \"desc\": \"Stan: Nowy, Marka: Ringway\"
  },
  {
    \"name\": \"Roland FP 10 BK przenośne pianino cyfrowe\",
    \"price\": 1950,
    \"imageURL\": \"https://a.allegroimg.com/s180/1132b3/256ad1264f7c8d4c15587789a147/Roland-FP-10-BK-przenosne-pianino-cyfrowe\",
    \"desc\": \"Stan: Powystawowy, Marka: Roland\"
  },
  {
    \"name\": \"YAMAHA P45 B PIANINO CYFROWE STAGE PIANO -ZESTAW-\",
    \"price\": 2499,
    \"imageURL\": \"https://a.allegroimg.com/s180/11da85/a2b24eb349c89bb3be17deb18030/YAMAHA-P45-B-PIANINO-CYFROWE-STAGE-PIANO-ZESTAW\",
    \"desc\": \"Stan: Nowy, Marka: Yamaha\"
  },
  {
    \"name\": \"ORGANY DO NAUKI DLA DZIECI KEYBOARD Z MIKROFONEM\",
    \"price\": 139.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/112888/612b3b5c4efb8866b4aa8e6298aa/ORGANY-DO-NAUKI-DLA-DZIECI-KEYBOARD-Z-MIKROFONEM\",
    \"desc\": \"Stan: Nowy, Marka: inna (Ramiz), Liczba klawiszy: 61, Zasilanie: sieciowe\"
  },
  {
    \"name\": \"GITARA KLASYCZNA 4/4 ALAMO DREWNO ŚWIERKOWE BK RZ\",
    \"price\": 378.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/116e59/8cc5c173418bb9eb8b79dfdd10b7/GITARA-KLASYCZNA-4-4-ALAMO-DREWNO-SWIERKOWE-BK-RZ\",
    \"desc\": \"Stan: Nowy, Marka: Alamo, Wersja: Praworęczna, Rodzaj pudła: Dreadnought, Western\"
  },
  {
    \"name\": \"PIANINO ORGANY KEYBOARD + mikrofonem dla dzieci\",
    \"price\": 149.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11dcfb/abb9589444bd9f05600ec6597802/PIANINO-ORGANY-KEYBOARD-mikrofonem-dla-dzieci\",
    \"desc\": \"Stan: Nowy, Marka: MQ, Liczba klawiszy: 61, Zasilanie: sieciowe\"
  },
  {
    \"name\": \"GITARA ELEKTRYCZNA 3/4 + WZMACNIACZ - EXTRA ZESTAW\",
    \"price\": 689,
    \"imageURL\": \"https://9.allegroimg.com/s180/0103ff/36f5a91d491e9456fe94dd395749/GITARA-ELEKTRYCZNA-3-4-WZMACNIACZ-EXTRA-ZESTAW\",
    \"desc\": \"Stan: Nowy, Marka: Vision\"
  },
  {
    \"name\": \"Stroik Tuner do gitary ukulele basu skrzypiec\",
    \"price\": 29.89,
    \"imageURL\": \"https://a.allegroimg.com/s180/116b48/5c63b2894a51a4f68de57685e596/Stroik-Tuner-do-gitary-ukulele-basu-skrzypiec\",
    \"desc\": \"Stan: Nowy, Marka: DexXer\"
  },
  {
    \"name\": \"Książka Ukulele na początek Pierwsze kroki kurs\",
    \"price\": 29.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11f663/7940ffad4e648d637773468055e8/Ksiazka-Ukulele-na-poczatek-Pierwsze-kroki-kurs\",
    \"desc\": \"Stan: Nowy, Wydawnictwo: inne (Wydawnictwo AKORD)\"
  },
  {
    \"name\": \"KALIMBA drewniana PIANINO AFRYKAŃSKI INSTRUMENT\",
    \"price\": 99.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/110bac/725ae2974b8e80048353d2d55bdc/KALIMBA-drewniana-PIANINO-AFRYKANSKI-INSTRUMENT\",
    \"desc\": \"Stan: Nowy, Marka: inna (KALIMBA drewniana AFRYKAŃSKI INSTRUMENT)\"
  },
  {
    \"name\": \"NAKLEJKA NUTY NAUKA GRY NA SKRZYPCACH 4/4 -model 1\",
    \"price\": 15,
    \"imageURL\": \"https://a.allegroimg.com/s180/119480/114c6f7a4b079a053fceeba30ada/NAKLEJKA-NUTY-NAUKA-GRY-NA-SKRZYPCACH-4-4-model-1\",
    \"desc\": \"Stan: Nowy, Marka: Craftman, Rozmiar: 4/4\"
  },
  {
    \"name\": \"RIVERWEST G-411 GITARA AKUSTYCZNA DLA POCZĄTKUJĄCH\",
    \"price\": 449,
    \"imageURL\": \"https://a.allegroimg.com/s180/111a99/6554c0f74479ac51fb632615fe90/RIVERWEST-G-411-GITARA-AKUSTYCZNA-DLA-POCZATKUJACH\",
    \"desc\": \"Stan: Nowy, Marka: inna (Riverwest), Wersja: Praworęczna, Rodzaj pudła: Dreadnought, Western\"
  },
  {
    \"name\": \"SKRZYPCE Franz Sandner Violin 6 z certyfikatem\",
    \"price\": 1241,
    \"imageURL\": \"https://5.allegroimg.com/s180/037b69/a033af3541e197f4034e714adf35/SKRZYPCE-Franz-Sandner-Violin-6-z-certyfikatem\",
    \"desc\": \"Stan: Nowy, Marka: inna (Franz Sandner +tuning Pengano), Rozmiar: 4/4\"
  },
  {
    \"name\": \"Kalimba Mahalo Tradycyjna MKA17TD pianino zanza\",
    \"price\": 159.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1150f8/dc0ed1a344bfae76ad48eebd3ca3/Kalimba-Mahalo-Tradycyjna-MKA17TD-pianino-zanza\",
    \"desc\": \"Stan: Nowy, Marka: Jeremi\"
  },
  {
    \"name\": \"KAPODASTER CAPO DO GITARY KLASYCZNEJ AKUSTYCZNEJ\",
    \"price\": 14.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/112f4c/eee7cb9e4a74899eed01c09430e3/KAPODASTER-CAPO-DO-GITARY-KLASYCZNEJ-AKUSTYCZNEJ\",
    \"desc\": \"Stan: Nowy, Marka: RALTEK\"
  },
  {
    \"name\": \"GITARA AKUSTYCZNA KLASYCZNA DLA POCZĄTKUJĄCYCH\",
    \"price\": 299,
    \"imageURL\": \"https://a.allegroimg.com/s180/111e33/e75c2c824f53b843c5137a6fdf63/GITARA-AKUSTYCZNA-KLASYCZNA-DLA-POCZATKUJACYCH\",
    \"desc\": \"Stan: Nowy, Marka: Castelo, Rodzaj: Flamenco\"
  },
  {
    \"name\": \"IBANEZ RG320EXZ-BKF GITARA ELEKTRYCZNA\",
    \"price\": 2474,
    \"imageURL\": \"https://a.allegroimg.com/s180/1157c4/061e226d452bb41e0c2a20e291fb/IBANEZ-RG320EXZ-BKF-GITARA-ELEKTRYCZNA\",
    \"desc\": \"Stan: Nowy, Marka: Ibanez, Rodzaj: Superstrat\"
  },
  {
    \"name\": \"Saksofon altowy Buffet Crampon seria 400 MAT\",
    \"price\": 6350,
    \"imageURL\": \"https://a.allegroimg.com/s180/11042d/110450c5402c99f9f59a3cc0cff9/Saksofon-altowy-Buffet-Crampon-seria-400-MAT\",
    \"desc\": \"Stan: Nowy, Marka: Buffet Crampon\"
  },
  {
    \"name\": \"Keyboard Pianino Organy MK-2102 STATYW 61k USB MP3\",
    \"price\": 549,
    \"imageURL\": \"https://a.allegroimg.com/s180/117d58/a2e0124a4935b60a3eb6b6f7d025/Keyboard-Pianino-Organy-MK-2102-STATYW-61k-USB-MP3\",
    \"desc\": \"Stan: Nowy, Marka: Meike, Liczba klawiszy: 61, Zasilanie: sieciowe\"
  },
  {
    \"name\": \"Keyboard 61 Podświetlane Klawisze M-tunes MTL-91M\",
    \"price\": 954,
    \"imageURL\": \"https://a.allegroimg.com/s180/1187bf/7462afa446fd9338bdcd24e3da79/Keyboard-61-Podswietlane-Klawisze-M-tunes-MTL-91M\",
    \"desc\": \"Stan: Nowy, Marka: inna, Liczba klawiszy: 61, Zasilanie: sieciowe\"
  }
]`);

const c = gifts as BaseGift[];

export default c;
