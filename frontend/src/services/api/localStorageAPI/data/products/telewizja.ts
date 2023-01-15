import type { BaseGift } from '../gifts';

const gifts: unknown = JSON.parse(`[
  {
    \"name\": \"Telewizor 32 cale LED DVBT2/HEVC Manta 32LHN89T\",
    \"price\": 599,
    \"imageURL\": \"https://a.allegroimg.com/s180/113900/188edf214aeb968c67a3e9e102fe/Telewizor-32-cale-LED-DVBT2-HEVC-Manta-32LHN89T\",
    \"desc\": \"Typ telewizora: LED, Przekątna ekranu (cale): 32\\\", Format HD: HD Ready, Smart TV: nie, Liczba złączy HDMI: 2\"
  },
  {
    \"name\": \"Tuner dekoder cyfrowy TV HD DVB-T2 HDMI H.265 HEVC\",
    \"price\": 87,
    \"imageURL\": \"https://a.allegroimg.com/s180/111bc0/2bb1e3c04bb0b56d916d42413b3f/Tuner-dekoder-cyfrowy-TV-HD-DVB-T2-HDMI-H-265-HEVC\",
    \"desc\": \"Stan: Nowy, Marka: Blow, Rodzaj tunera: DVB-T2\"
  },
  {
    \"name\": \"Tuner dekoder cyfrowy TV DVB-T DVB-T2 HDMI H.265\",
    \"price\": 78.8,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b520/e85fae9047628aad38b9671c7766/Tuner-dekoder-cyfrowy-TV-DVB-T-DVB-T2-HDMI-H-265\",
    \"desc\": \"Stan: Nowy, Marka: Blow, Rodzaj tunera: DVB-T2\"
  },
  {
    \"name\": \"TELEWIZOR LED 43 TOSHIBA 43UA2063DG 4K UHD Android\",
    \"price\": 1299,
    \"imageURL\": \"https://a.allegroimg.com/s180/110101/f8e6307a4e18a56c2e72710f46a9/TELEWIZOR-LED-43-TOSHIBA-43UA2063DG-4K-UHD-Android\",
    \"desc\": \"Typ telewizora: LED, Przekątna ekranu (cale): 43\\\", Format HD: 4K UHD, Smart TV: Android TV, Liczba złączy HDMI: 4\"
  },
  {
    \"name\": \"TELEWIZOR led 55 SAMSUNG UE55AU7192 4K UHD SmartTV\",
    \"price\": 1949,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ac92/e57453eb4f2a9e08b893de07e7d3/TELEWIZOR-led-55-SAMSUNG-UE55AU7192-4K-UHD-SmartTV\",
    \"desc\": \"Typ telewizora: LED, Przekątna ekranu (cale): 55\\\", Format HD: 4K UHD, Smart TV: Tizen, Liczba złączy HDMI: 3\"
  },
  {
    \"name\": \"Odtwarzacz multimedialny Xiaomi Mi TV Stick Smart\",
    \"price\": 179,
    \"imageURL\": \"https://a.allegroimg.com/s180/11120b/db09f17c48f3b435611402b46163/Odtwarzacz-multimedialny-Xiaomi-Mi-TV-Stick-Smart\",
    \"desc\": \"Stan: Nowy, Marka: Xiaomi\"
  },
  {
    \"name\": \"PRZENOŚNY RZUTNIK MINI PROJEKTOR LED FULL HD USB\",
    \"price\": 239.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/1132e4/85dee1534465b82d82f30aa14381/PRZENOSNY-RZUTNIK-MINI-PROJEKTOR-LED-FULL-HD-USB\",
    \"desc\": \"Technologia wyświetlania: LED, Wbudowane głośniki: tak, Jasność lampy (ANSI): 1200 lm, Rozdzielczość podstawowa (px): inna (600x360), Kontrast (x:1): 1000\"
  },
  {
    \"name\": \"Telewizor Manta 43LFA120D 43'' WiFi SmartTV LED\",
    \"price\": 999,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a466/c44f5a014e28a329d2cb4e5ff66a/Telewizor-Manta-43LFA120D-43-WiFi-SmartTV-LED\",
    \"desc\": \"Typ telewizora: LED, Przekątna ekranu (cale): 43\\\", Format HD: Full HD, Smart TV: Android TV, Liczba złączy HDMI: 3\"
  },
  {
    \"name\": \"Odtwarzacz multimedialny XIAOMI MI Box S Smart TV\",
    \"price\": 309.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/115ed0/65e834fb478887a0d0c265f53fb9/Odtwarzacz-multimedialny-XIAOMI-MI-Box-S-Smart-TV\",
    \"desc\": \"Stan: Nowy, Marka: Xiaomi\"
  },
  {
    \"name\": \"SMART TV BOX 8GB MXQ PRO 4K DEKODER Android 7.1\",
    \"price\": 125.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/118eae/2e8fa20c422d90debbbf47f88db2/SMART-TV-BOX-8GB-MXQ-PRO-4K-DEKODER-Android-7-1\",
    \"desc\": \"Stan: Nowy, Marka: Retoo\"
  },
  {
    \"name\": \"DEKODER TUNER TV NAZIEMNEJ HD DVB-T2 HEVC H.265\",
    \"price\": 66.87,
    \"imageURL\": \"https://a.allegroimg.com/s180/118412/a6bc18cb4a429d5195902a6eaf0f/DEKODER-TUNER-TV-NAZIEMNEJ-HD-DVB-T2-HEVC-H-265\",
    \"desc\": \"Stan: Nowy, Marka: Esperanza, Rodzaj tunera: DVB-T2\"
  },
  {
    \"name\": \"Telewizor LED LG 55UP751C 55 \\\" 4K UHD czarny\",
    \"price\": 1899,
    \"imageURL\": \"https://a.allegroimg.com/s180/113f03/3484d8e947e9a1dfcf58fd3cc3fe/Telewizor-LED-LG-55UP751C-55-4K-UHD-czarny\",
    \"desc\": \"Typ telewizora: LED, Przekątna ekranu (cale): 55\\\", Format HD: 4K UHD, Smart TV: WebOS, Liczba złączy HDMI: 2\"
  },
  {
    \"name\": \"Tuner dekoder TV DVB-T DVB-T2 H.265 HEVC USB HDMI\",
    \"price\": 68.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/112888/13a11a88419fa041c1e8fe392b14/Tuner-dekoder-TV-DVB-T-DVB-T2-H-265-HEVC-USB-HDMI\",
    \"desc\": \"Stan: Nowy, Marka: Blow, Rodzaj tunera: DVB-T2\"
  },
  {
    \"name\": \"Telewizor 32 cale LED DVBT2/HEVC Manta 32LHN89T\",
    \"price\": 599,
    \"imageURL\": \"https://a.allegroimg.com/s180/113900/188edf214aeb968c67a3e9e102fe/Telewizor-32-cale-LED-DVBT2-HEVC-Manta-32LHN89T\",
    \"desc\": \"Typ telewizora: LED, Przekątna ekranu (cale): 32\\\", Format HD: HD Ready, Smart TV: nie, Liczba złączy HDMI: 2\"
  },
  {
    \"name\": \"Tuner dekoder cyfrowy TV HD DVB-T2 HDMI H.265 HEVC\",
    \"price\": 87,
    \"imageURL\": \"https://a.allegroimg.com/s180/111bc0/2bb1e3c04bb0b56d916d42413b3f/Tuner-dekoder-cyfrowy-TV-HD-DVB-T2-HDMI-H-265-HEVC\",
    \"desc\": \"Stan: Nowy, Marka: Blow, Rodzaj tunera: DVB-T2\"
  },
  {
    \"name\": \"SMART TV LED 32 VIVAX 32LE10K ANDROID BEZRAMKOWY\",
    \"price\": 747.7,
    \"imageURL\": \"https://a.allegroimg.com/s180/11994f/c35fee8b481e89148c2535740d84/SMART-TV-LED-32-VIVAX-32LE10K-ANDROID-BEZRAMKOWY\",
    \"desc\": \"Typ telewizora: LED, Przekątna ekranu (cale): 32\\\", Format HD: HD Ready, Smart TV: Android TV, Liczba złączy HDMI: 2\"
  },
  {
    \"name\": \"TELEWIZOR led 43 SAMSUNG UE43AU7192 4K UHD SmartTV\",
    \"price\": 1490,
    \"imageURL\": \"https://a.allegroimg.com/s180/1116d4/431e16484f8c8da4909b0b50bc23/TELEWIZOR-led-43-SAMSUNG-UE43AU7192-4K-UHD-SmartTV\",
    \"desc\": \"Typ telewizora: LED, Przekątna ekranu (cale): 43\\\", Format HD: 4K UHD, Smart TV: Tizen, Liczba złączy HDMI: 3\"
  },
  {
    \"name\": \"Telewizor TCL 50P616 4K HDR Android TV DVB-T2 50''\",
    \"price\": 1499,
    \"imageURL\": \"https://a.allegroimg.com/s180/118158/c27e049245e2b6bc7d7c72edc35c/Telewizor-TCL-50P616-4K-HDR-Android-TV-DVB-T2-50\",
    \"desc\": \"Typ telewizora: LED, Przekątna ekranu (cale): 50\\\", Format HD: 4K UHD, Smart TV: Android TV, Liczba złączy HDMI: 3\"
  },
  {
    \"name\": \"MOCNA ANTENA TV POKOJOWA DVB-T2 AKTYWNA 4K VAYOX\",
    \"price\": 79.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/1108f3/4dc9cc2646dc9dc1c3e1f1fbb4c2/MOCNA-ANTENA-TV-POKOJOWA-DVB-T2-AKTYWNA-4K-VAYOX\",
    \"desc\": \"Stan: Nowy, Marka: Vayox\"
  },
  {
    \"name\": \"RETOO SMART TV BOX X96Q ANDROID 16 GB GENBOX 4K\",
    \"price\": 150,
    \"imageURL\": \"https://a.allegroimg.com/s180/118c3f/6a16c4684124bb0a4a724c7d4d95/RETOO-SMART-TV-BOX-X96Q-ANDROID-16-GB-GENBOX-4K\",
    \"desc\": \"Stan: Nowy, Marka: Retoo\"
  },
  {
    \"name\": \"ODTWARZACZ MULTIMEDIALNY XIAOMI MI TV Stick\",
    \"price\": 195,
    \"imageURL\": \"https://a.allegroimg.com/s180/115a6f/f4b9059e4d3990dd72a403480c27/ODTWARZACZ-MULTIMEDIALNY-XIAOMI-MI-TV-Stick\",
    \"desc\": \"Stan: Nowy, Marka: Xiaomi\"
  },
  {
    \"name\": \"RZUTNIK PROJEKTOR OVERMAX MULTIPIC 5.1 LED FULL HD\",
    \"price\": 1199,
    \"imageURL\": \"https://a.allegroimg.com/s180/117f14/def41cca43418d8a709e2046b2d0/RZUTNIK-PROJEKTOR-OVERMAX-MULTIPIC-5-1-LED-FULL-HD\",
    \"desc\": \"Technologia wyświetlania: LED, Wbudowane głośniki: tak, Jasność lampy (ANSI): 6000 lm, Rozdzielczość podstawowa (px): 1920 x 1080, Kontrast (x:1): 4000\"
  },
  {
    \"name\": \"SMART BOX TV 4K ANDROID 12 WIFI BT TV ADAPTER+128G\",
    \"price\": 209.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1157a1/5be23aad4e5db7464fcb89ef47b0/SMART-BOX-TV-4K-ANDROID-12-WIFI-BT-TV-ADAPTER-128G\",
    \"desc\": \"Stan: Nowy, Marka: H96\"
  },
  {
    \"name\": \"Telewizor 40 CHiQ L40G5W Dolby Audio DVB-T2/HEVC\",
    \"price\": 711.55,
    \"imageURL\": \"https://a.allegroimg.com/s180/112132/33d06f5542bca5d152f169222fde/Telewizor-40-CHiQ-L40G5W-Dolby-Audio-DVB-T2-HEVC\",
    \"desc\": \"Typ telewizora: LED, Przekątna ekranu (cale): 40\\\", Format HD: Full HD, Smart TV: nie, Liczba złączy HDMI: 3\"
  },
  {
    \"name\": \"SOUNDBAR SHARP HT-SB100 2.0 75W Czarny\",
    \"price\": 239,
    \"imageURL\": \"https://a.allegroimg.com/s180/11e6cd/3b49ac264f6d964882d6a225cd6b/SOUNDBAR-SHARP-HT-SB100-2-0-75W-Czarny\",
    \"desc\": \"Stan: Nowy, Marka: Sharp, System dźwięku: 2.0\"
  },
  {
    \"name\": \"Odtwarzacz multimedialny Smart TV Android BOX 4K\",
    \"price\": 168,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d2f1/fcaef341457d8b16aa3ec71a4eb3/Odtwarzacz-multimedialny-Smart-TV-Android-BOX-4K\",
    \"desc\": \"Stan: Nowy, Marka: Blow\"
  },
  {
    \"name\": \"RETOO SMART TV BOX X96Q ANDROID 16 GB GENBOX 4K\",
    \"price\": 150,
    \"imageURL\": \"https://a.allegroimg.com/s180/118c3f/6a16c4684124bb0a4a724c7d4d95/RETOO-SMART-TV-BOX-X96Q-ANDROID-16-GB-GENBOX-4K\",
    \"desc\": \"Stan: Nowy, Marka: Retoo\"
  },
  {
    \"name\": \"PROJEKTOR MOBILNY LED FULL Wanbo T2 1080p 150lm\",
    \"price\": 439,
    \"imageURL\": \"https://a.allegroimg.com/s180/116211/194ae3cb41d189714842f1e45eb9/PROJEKTOR-MOBILNY-LED-FULL-Wanbo-T2-1080p-150lm\",
    \"desc\": \"Technologia wyświetlania: LED, Wbudowane głośniki: tak, Jasność lampy (ANSI): 150 lm, Rozdzielczość podstawowa (px): 1920 x 1080, Kontrast (x:1): 2000\"
  },
  {
    \"name\": \"TELEWIZOR 32\\\" DVB-T2 TV AKAI LT-3232HD\",
    \"price\": 549,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d416/a6733079456e9028b5e330efa0a2/TELEWIZOR-32-DVB-T2-TV-AKAI-LT-3232HD\",
    \"desc\": \"Typ telewizora: LCD, Przekątna ekranu (cale): 32\\\", Smart TV: nie\"
  },
  {
    \"name\": \"Telewizor 32” LED Samsung UE32T4002 HD HDR PQI 200\",
    \"price\": 849,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c956/e3fa774b456bab4e954ec136a9a1/Telewizor-32-LED-Samsung-UE32T4002-HD-HDR-PQI-200\",
    \"desc\": \"Typ telewizora: LED, Przekątna ekranu (cale): 32\\\", Format HD: HD Ready, Smart TV: nie, Liczba złączy HDMI: 2\"
  },
  {
    \"name\": \"SMART TV Box Przystawka 4K 2/16GB Android 11\",
    \"price\": 399,
    \"imageURL\": \"https://a.allegroimg.com/s180/11290c/b009086c4746b3dc3299906bd7b1/SMART-TV-Box-Przystawka-4K-2-16GB-Android-11\",
    \"desc\": \"Stan: Nowy, Marka: inna (Hako)\"
  },
  {
    \"name\": \"Telewizor LED Sharp 42CG2E 42'' Full HD SmartTV\",
    \"price\": 1199,
    \"imageURL\": \"https://a.allegroimg.com/s180/119b47/32f615b3440781778a91fe53fa59/Telewizor-LED-Sharp-42CG2E-42-Full-HD-SmartTV\",
    \"desc\": \"Typ telewizora: LED, Przekątna ekranu (cale): 42\\\", Format HD: Full HD, Smart TV: inny system producenta, Liczba złączy HDMI: 3\"
  },
  {
    \"name\": \"DEKODER TUNER TV NAZIEMNEJ HD DVB-T2 HEVC H.265\",
    \"price\": 66.87,
    \"imageURL\": \"https://a.allegroimg.com/s180/118412/a6bc18cb4a429d5195902a6eaf0f/DEKODER-TUNER-TV-NAZIEMNEJ-HD-DVB-T2-HEVC-H-265\",
    \"desc\": \"Stan: Nowy, Marka: Esperanza, Rodzaj tunera: DVB-T2\"
  },
  {
    \"name\": \"SMART BOX TV 4K H96 MAX ANDROID 12 PRZYSTAWKA TV\",
    \"price\": 252.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1120af/fd7ec9a54115a29b403fe33a5726/SMART-BOX-TV-4K-H96-MAX-ANDROID-12-PRZYSTAWKA-TV\",
    \"desc\": \"Stan: Nowy, Marka: H96\"
  },
  {
    \"name\": \"SMART TV LED 32 VIVAX 32LE10K ANDROID BEZRAMKOWY\",
    \"price\": 747.7,
    \"imageURL\": \"https://a.allegroimg.com/s180/11994f/c35fee8b481e89148c2535740d84/SMART-TV-LED-32-VIVAX-32LE10K-ANDROID-BEZRAMKOWY\",
    \"desc\": \"Typ telewizora: LED, Przekątna ekranu (cale): 32\\\", Format HD: HD Ready, Smart TV: Android TV, Liczba złączy HDMI: 2\"
  },
  {
    \"name\": \"Telewizor LED Philips 39PHS6707/12 39\\\"\",
    \"price\": 1044.44,
    \"imageURL\": \"https://a.allegroimg.com/s180/258996/c79ed14b43ca99b3fd85623f9bef/Telewizor-LED-Philips-39PHS6707-12-39\",
    \"desc\": \"Typ telewizora: LED, Przekątna ekranu (cale): 39\\\", Format HD: HD Ready, Smart TV: Android TV, Liczba złączy HDMI: 3\"
  },
  {
    \"name\": \"Telewizor 19 cali DVB-T2/HEVC 12V Manta 19LHN123D\",
    \"price\": 529,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a2e0/71883ad04fb78f73f275be302767/Telewizor-19-cali-DVB-T2-HEVC-12V-Manta-19LHN123D\",
    \"desc\": \"Typ telewizora: LED, Przekątna ekranu (cale): 19\\\", Format HD: HD Ready, Smart TV: nie, Liczba złączy HDMI: 1\"
  },
  {
    \"name\": \"TELEWIZOR QLED 55 SAMSUNG QE55Q67BAU 4K UHD Tizen\",
    \"price\": 2799,
    \"imageURL\": \"https://a.allegroimg.com/s180/110f04/bffa89fb40a9a252fe4e9b9a1f05/TELEWIZOR-QLED-55-SAMSUNG-QE55Q67BAU-4K-UHD-Tizen\",
    \"desc\": \"Typ telewizora: QLED, Przekątna ekranu (cale): 55\\\", Format HD: 4K UHD, Smart TV: Tizen, Liczba złączy HDMI: 3\"
  },
  {
    \"name\": \"SOUNDBAR MEDION MD44102 BLUETOOTH 4.2 NFC 50W\",
    \"price\": 199,
    \"imageURL\": \"https://a.allegroimg.com/s180/117c00/a86cef1845a7a0e8d174210ec6ef/SOUNDBAR-MEDION-MD44102-BLUETOOTH-4-2-NFC-50W\",
    \"desc\": \"Stan: Powystawowy, Marka: Medion, System dźwięku: 2.0\"
  },
  {
    \"name\": \"Tuner dekoder cyfrowy TV DVB-T DVB-T2 HDMI H.265\",
    \"price\": 78.8,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b520/e85fae9047628aad38b9671c7766/Tuner-dekoder-cyfrowy-TV-DVB-T-DVB-T2-HDMI-H-265\",
    \"desc\": \"Stan: Nowy, Marka: Blow, Rodzaj tunera: DVB-T2\"
  },
  {
    \"name\": \"Antena aktywna DVB-T BLOW pokojowa TV 4K MUX-8 LTE\",
    \"price\": 69.4,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ffed/43e7fb9440f2a07edfb7091028b9/Antena-aktywna-DVB-T-BLOW-pokojowa-TV-4K-MUX-8-LTE\",
    \"desc\": \"Stan: Nowy, Marka: Blow\"
  },
  {
    \"name\": \"PREMIUM ZESTAW MONITORINGU 4 KAMERY 4K 8MPX CZARNE\",
    \"price\": 1199,
    \"imageURL\": \"https://a.allegroimg.com/s180/111a11/e8d6c0b9466b9358390a60a1aa16/PREMIUM-ZESTAW-MONITORINGU-4-KAMERY-4K-8MPX-CZARNE\",
    \"desc\": \"Stan: Nowy, Marka: Protec, Liczba obsługiwanych kamer: 4\"
  },
  {
    \"name\": \"VIVAX 32 TV LED 32LE114T2S2 DVB-T2/S2 USB PVR HEVC\",
    \"price\": 579.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/113f02/09888ba84231bef0b69cacbc4bfc/VIVAX-32-TV-LED-32LE114T2S2-DVB-T2-S2-USB-PVR-HEVC\",
    \"desc\": \"Typ telewizora: LED, Przekątna ekranu (cale): 32\\\", Format HD: HD Ready, Smart TV: nie, Liczba złączy HDMI: 3\"
  },
  {
    \"name\": \"TELEWIZOR LED 32 OPTICUM 32001 TRIVO HD READY\",
    \"price\": 599,
    \"imageURL\": \"https://a.allegroimg.com/s180/118646/9fdeb7e14d0e89dbc870c46aae04/TELEWIZOR-LED-32-OPTICUM-32001-TRIVO-HD-READY\",
    \"desc\": \"Typ telewizora: LED, Przekątna ekranu (cale): 32\\\", Format HD: HD Ready, Smart TV: nie, Liczba złączy HDMI: 2\"
  },
  {
    \"name\": \"Telewizor 32” Philips 32PFS6855/12 FHD DVB-T2/HEVC\",
    \"price\": 959,
    \"imageURL\": \"https://a.allegroimg.com/s180/11335a/be740ed54e84a5822d37b2401001/Telewizor-32-Philips-32PFS6855-12-FHD-DVB-T2-HEVC\",
    \"desc\": \"Typ telewizora: LED, Przekątna ekranu (cale): 32\\\", Format HD: Full HD, Smart TV: inny system producenta, Liczba złączy HDMI: 3\"
  },
  {
    \"name\": \"TOSHIBA TELEWIZOR 32WA2063DG SMART ANDROID DVBT-T2\",
    \"price\": 814.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1102e6/8548343b4e4fb40ba201cb674fe2/TOSHIBA-TELEWIZOR-32WA2063DG-SMART-ANDROID-DVBT-T2\",
    \"desc\": \"Typ telewizora: LED, Przekątna ekranu (cale): 32\\\", Format HD: HD Ready, Smart TV: Android TV, Liczba złączy HDMI: 3\"
  },
  {
    \"name\": \"Kamera Zewnętrzna Obrotowa WiFi 5MPx 4MPx Czarna\",
    \"price\": 399.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1143b2/85c0f550490e9570ac6283f41283/Kamera-Zewnetrzna-Obrotowa-WiFi-5MPx-4MPx-Czarna\",
    \"desc\": \"Typ kamery: czarno-biała, kolorowa, na podczerwień, Obudowa: kompaktowa (box), Rozdzielczość: 5 Mpx\"
  },
  {
    \"name\": \"Odtwarzacz multimedialny Smart TV Android BOX 4K\",
    \"price\": 168,
    \"imageURL\": \"https://a.allegroimg.com/s180/11eeaa/14d5329a4253a7c3879f7202b68f/Odtwarzacz-multimedialny-Smart-TV-Android-BOX-4K\",
    \"desc\": \"Stan: Nowy, Marka: GT Media, Rodzaj tunera: brak informacji\"
  },
  {
    \"name\": \"Dekoder DVB-T2 Tuner Ferguson Ariva T75 HD H.265\",
    \"price\": 132.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11610d/f2a22e304fe3a6f40b334e28cdd9/Dekoder-DVB-T2-Tuner-Ferguson-Ariva-T75-HD-H-265\",
    \"desc\": \"Stan: Nowy, Marka: Ferguson, Rodzaj tunera: DVB-T2\"
  },
  {
    \"name\": \"CYFROWY MONITORING 4 KAMERY IP 5MEGA NA SKRĘTKĘ\",
    \"price\": 1399,
    \"imageURL\": \"https://a.allegroimg.com/s180/1120c2/9851bd85423885b93e5c4377330e/CYFROWY-MONITORING-4-KAMERY-IP-5MEGA-NA-SKRETKE\",
    \"desc\": \"Stan: Nowy, Marka: Protec, Liczba obsługiwanych kamer: 4\"
  },
  {
    \"name\": \"TELEWIZOR LED 43 TOSHIBA 43UA2063DG 4K UHD Android\",
    \"price\": 1299,
    \"imageURL\": \"https://a.allegroimg.com/s180/110101/f8e6307a4e18a56c2e72710f46a9/TELEWIZOR-LED-43-TOSHIBA-43UA2063DG-4K-UHD-Android\",
    \"desc\": \"Typ telewizora: LED, Przekątna ekranu (cale): 43\\\", Format HD: 4K UHD, Smart TV: Android TV, Liczba złączy HDMI: 4\"
  },
  {
    \"name\": \"ZESTAW MONITORINGU 4 KAMERY FULLHD ZEWNĘTRZNE 4w1\",
    \"price\": 694,
    \"imageURL\": \"https://a.allegroimg.com/s180/114ca3/360456094fc5a67abc56c528d79e/ZESTAW-MONITORINGU-4-KAMERY-FULLHD-ZEWNETRZNE-4w1\",
    \"desc\": \"Stan: Nowy, Marka: Hikvision, Liczba obsługiwanych kamer: 4\"
  },
  {
    \"name\": \"RZUTNIK PROJEKTOR ANDROID LED FHD 8000lm USB WiFi\",
    \"price\": 997,
    \"imageURL\": \"https://a.allegroimg.com/s180/11181c/31896e7f435f80f084c85cb08259/RZUTNIK-PROJEKTOR-ANDROID-LED-FHD-8000lm-USB-WiFi\",
    \"desc\": \"Technologia wyświetlania: LED, Wbudowane głośniki: tak, Jasność lampy (ANSI): 8000 lm, Rozdzielczość podstawowa (px): 1920 x 1080\"
  },
  {
    \"name\": \"TELEWIZOR QLED 50 SAMSUNG QE50Q67BAU 4K UHD Tizen\",
    \"price\": 2499,
    \"imageURL\": \"https://a.allegroimg.com/s180/112fe6/a08f2c574f8ab722d74a57b50b53/TELEWIZOR-QLED-50-SAMSUNG-QE50Q67BAU-4K-UHD-Tizen\",
    \"desc\": \"Typ telewizora: QLED, Przekątna ekranu (cale): 50\\\", Format HD: 4K UHD, Smart TV: Tizen, Liczba złączy HDMI: 3\"
  },
  {
    \"name\": \"DEKODER TUNER TV NAZIEMNEJ HD DVB-T2 HEVC H.265\",
    \"price\": 69.85,
    \"imageURL\": \"https://a.allegroimg.com/s180/117599/3d9581494b57aeef5e30da5d74f1/DEKODER-TUNER-TV-NAZIEMNEJ-HD-DVB-T2-HEVC-H-265\",
    \"desc\": \"Stan: Nowy, Marka: Esperanza, Rodzaj tunera: DVB-T2\"
  },
  {
    \"name\": \"Panasonic TX-55LX600E Telewizor LED 4K HDR Smart\",
    \"price\": 2499,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c2e1/521c10584641aac27a59807d96b9/Panasonic-TX-55LX600E-Telewizor-LED-4K-HDR-Smart\",
    \"desc\": \"Typ telewizora: LED, Przekątna ekranu (cale): 55\\\", Format HD: 4K UHD, Smart TV: inny system producenta, Liczba złączy HDMI: 3\"
  },
  {
    \"name\": \"KAMERA MONITORINGU 8MPX IR20m ZEWNĘTRZNA TUBA AHD\",
    \"price\": 129.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/032d6d/0310dba44e2da9c63f092df61106/KAMERA-MONITORINGU-8MPX-IR20m-ZEWNETRZNA-TUBA-AHD\",
    \"desc\": \"Typ kamery: czarno-biała, kolorowa, na podczerwień, Obudowa: tubowa (bullet), Rozdzielczość: 8 Mpx\"
  },
  {
    \"name\": \"VIVAX 32 TV LED 32LE114T2S2 DVB-T2/S2 USB PVR HEVC\",
    \"price\": 579.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/113f02/09888ba84231bef0b69cacbc4bfc/VIVAX-32-TV-LED-32LE114T2S2-DVB-T2-S2-USB-PVR-HEVC\",
    \"desc\": \"Typ telewizora: LED, Przekątna ekranu (cale): 32\\\", Format HD: HD Ready, Smart TV: nie, Liczba złączy HDMI: 3\"
  },
  {
    \"name\": \"TELEWIZOR led 55 SAMSUNG UE55AU7192 4K UHD SmartTV\",
    \"price\": 1949,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ac92/e57453eb4f2a9e08b893de07e7d3/TELEWIZOR-led-55-SAMSUNG-UE55AU7192-4K-UHD-SmartTV\",
    \"desc\": \"Typ telewizora: LED, Przekątna ekranu (cale): 55\\\", Format HD: 4K UHD, Smart TV: Tizen, Liczba złączy HDMI: 3\"
  },
  {
    \"name\": \"MOCNA ANTENA TV POKOJOWA DVB-T2 AKTYWNA 4K VAYOX\",
    \"price\": 79.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/1108f3/4dc9cc2646dc9dc1c3e1f1fbb4c2/MOCNA-ANTENA-TV-POKOJOWA-DVB-T2-AKTYWNA-4K-VAYOX\",
    \"desc\": \"Stan: Nowy, Marka: Vayox\"
  },
  {
    \"name\": \"TELEWIZOR LED 42 SHARP 42CF2E Full HD Czarny\",
    \"price\": 1049,
    \"imageURL\": \"https://a.allegroimg.com/s180/11561d/50650e084e9d9249eff611d84a46/TELEWIZOR-LED-42-SHARP-42CF2E-Full-HD-Czarny\",
    \"desc\": \"Typ telewizora: LED, Przekątna ekranu (cale): 42\\\", Format HD: Full HD, Smart TV: nie, Liczba złączy HDMI: 3\"
  },
  {
    \"name\": \"TELEWIZOR led 32 PHILIPS 32PHS6605 HD Smart TV\",
    \"price\": 849,
    \"imageURL\": \"https://a.allegroimg.com/s180/110399/213bdac1449c82b7b56dfcfd87f9/TELEWIZOR-led-32-PHILIPS-32PHS6605-HD-Smart-TV\",
    \"desc\": \"Typ telewizora: LED, Przekątna ekranu (cale): 32\\\", Format HD: HD Ready, Smart TV: inny system producenta, Liczba złączy HDMI: 2\"
  },
  {
    \"name\": \"Odtwarzacz multimedialny Xiaomi Mi Box S\",
    \"price\": 319,
    \"imageURL\": \"https://a.allegroimg.com/s180/114cf4/8d1f1e7742f89fd184610b51eaa2/Odtwarzacz-multimedialny-Xiaomi-Mi-Box-S\",
    \"desc\": \"Stan: Nowy, Marka: Xiaomi\"
  },
  {
    \"name\": \"TOSHIBA Telewizor 43 cale 43UA2B63DG 4K Android!!!\",
    \"price\": 1299,
    \"imageURL\": \"https://a.allegroimg.com/s180/112ca1/cef49974450cafb08c70e293bce1/TOSHIBA-Telewizor-43-cale-43UA2B63DG-4K-Android\",
    \"desc\": \"Typ telewizora: LED, Przekątna ekranu (cale): 43\\\", Format HD: 4K UHD, Smart TV: Android TV, Liczba złączy HDMI: 4\"
  },
  {
    \"name\": \"PRZENOŚNY RZUTNIK MINI PROJEKTOR LED FULL HD USB\",
    \"price\": 227.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/114552/bf2c3ba640af9b94cb4d1df9361f/PRZENOSNY-RZUTNIK-MINI-PROJEKTOR-LED-FULL-HD-USB\",
    \"desc\": \"Technologia wyświetlania: LED, Jasność lampy (ANSI): 1 lm, Rozdzielczość podstawowa (px): 800 x 480\"
  },
  {
    \"name\": \"Telewizor Sharp 40FG2EA 40'' AndroidTV DVB-T2 WiFi\",
    \"price\": 1399,
    \"imageURL\": \"https://a.allegroimg.com/s180/11f19b/5ea236e54c8f983ac08ed38d5f18/Telewizor-Sharp-40FG2EA-40-AndroidTV-DVB-T2-WiFi\",
    \"desc\": \"Typ telewizora: LED, Przekątna ekranu (cale): 40\\\", Format HD: Full HD, Smart TV: Android TV, Liczba złączy HDMI: 2\"
  },
  {
    \"name\": \"Tuner dekoder TV DVB-T DVB-T2 H.265 HEVC USB HDMI\",
    \"price\": 68.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/112888/13a11a88419fa041c1e8fe392b14/Tuner-dekoder-TV-DVB-T-DVB-T2-H-265-HEVC-USB-HDMI\",
    \"desc\": \"Stan: Nowy, Marka: Blow, Rodzaj tunera: DVB-T2\"
  },
  {
    \"name\": \"TELEWIZOR LED 32 TOSHIBA 32LA2B63DG FHD AndroidTV\",
    \"price\": 899,
    \"imageURL\": \"https://a.allegroimg.com/s180/1177e8/46a22f734e80873a849c02c11e62/TELEWIZOR-LED-32-TOSHIBA-32LA2B63DG-FHD-AndroidTV\",
    \"desc\": \"Typ telewizora: LED, Przekątna ekranu (cale): 32\\\", Format HD: Full HD, Smart TV: Android TV, Liczba złączy HDMI: 3\"
  },
  {
    \"name\": \"KAMERA IP BEZPRZEWODOWA WIFI ZEWNĘTRZNA MONITORING\",
    \"price\": 199,
    \"imageURL\": \"https://a.allegroimg.com/s180/11376b/a0321e0440f8870a423ed20a7d21/KAMERA-IP-BEZPRZEWODOWA-WIFI-ZEWNETRZNA-MONITORING\",
    \"desc\": \"Typ kamery: czarno-biała, kolorowa, na podczerwień, Obudowa: kopułkowa (dome), Rozdzielczość: 2 Mpx\"
  },
  {
    \"name\": \"Telewizor CHiQ 40 Smart Android11 Full HD TV HDR10\",
    \"price\": 998,
    \"imageURL\": \"https://a.allegroimg.com/s180/111b3e/5005aba1450eb8af6ac9c636ded1/Telewizor-CHiQ-40-Smart-Android11-Full-HD-TV-HDR10\",
    \"desc\": \"Typ telewizora: LED, Przekątna ekranu (cale): 40\\\", Format HD: Full HD, Smart TV: Android TV, Liczba złączy HDMI: 3\"
  },
  {
    \"name\": \"KAMERA WiFi IP MONITORING 360 W ŻARÓWCE LED AUDIO\",
    \"price\": 93.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b643/a97921d14f5b9acac449c036507c/KAMERA-WiFi-IP-MONITORING-360-W-ZAROWCE-LED-AUDIO\",
    \"desc\": \"Obudowa: inna, Rozdzielczość: 1.3 Mpx\"
  },
  {
    \"name\": \"SMART TV BOX 8GB MXQ PRO 4K DEKODER Android 7.1\",
    \"price\": 125.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/118eae/2e8fa20c422d90debbbf47f88db2/SMART-TV-BOX-8GB-MXQ-PRO-4K-DEKODER-Android-7-1\",
    \"desc\": \"Stan: Nowy, Marka: Retoo\"
  },
  {
    \"name\": \"SOUNDBAR MEDION MD44102 BLUETOOTH 4.2 NFC 50W\",
    \"price\": 199,
    \"imageURL\": \"https://a.allegroimg.com/s180/117c00/a86cef1845a7a0e8d174210ec6ef/SOUNDBAR-MEDION-MD44102-BLUETOOTH-4-2-NFC-50W\",
    \"desc\": \"Stan: Powystawowy, Marka: Medion, System dźwięku: 2.0\"
  }
]`);

const c = gifts as BaseGift[];

export default c;
