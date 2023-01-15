import type { BaseGift } from '../gifts';

const gifts: unknown = JSON.parse(`[
  {
    \"name\": \"Nawilżacz powietrza AUTOMATYCZNY +AROMATERAPIA 2w1\",
    \"price\": 179.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/111e4c/287af50c4b5f838583c831cc4864/Nawilzacz-powietrza-AUTOMATYCZNY-AROMATERAPIA-2w1\",
    \"desc\": \"Stan: Nowy, Marka: Carruzzo, Moc: 28 W\"
  },
  {
    \"name\": \"TERMOMETR BEZDOTYKOWY MEDYCZNY NA PODCZERWIEŃ\",
    \"price\": 78,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c1a4/e84ce7664b4cb64cae83f908d0c3/TERMOMETR-BEZDOTYKOWY-MEDYCZNY-NA-PODCZERWIEN\",
    \"desc\": \"Stan: Nowy, Rodzaj: bezdotykowy, Marka: Inna marka (Dongguan Medical Technology), Miejsce pomiaru: czoło\"
  },
  {
    \"name\": \"Inhalator nebulizator MEDEL FAMILY PLUS +GRATIS\",
    \"price\": 165.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11208c/46dc8faf46a29c9338b1b1149e16/Inhalator-nebulizator-MEDEL-FAMILY-PLUS-GRATIS\",
    \"desc\": \"Marka: Medel, Rodzaj: pneumatyczne (tłokowe), Szybkość inhalacji: 0.37 ml/min, Średnia wielkość cząsteczek MMAD: 3.5 µm, Pojemność zbiornika na lek: 8 ml\"
  },
  {
    \"name\": \"TERMOMETR BEZDOTYKOWY MEDYCZNY NA PODCZERWIEŃ\",
    \"price\": 78,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c1a4/e84ce7664b4cb64cae83f908d0c3/TERMOMETR-BEZDOTYKOWY-MEDYCZNY-NA-PODCZERWIEN\",
    \"desc\": \"Stan: Nowy, Rodzaj: bezdotykowy, Marka: Inna marka (Dongguan Medical Technology), Miejsce pomiaru: czoło\"
  },
  {
    \"name\": \"INHALATOR NEBULIZATOR MICROLIFE NEB200 + 2 GRATISY\",
    \"price\": 139.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/116b27/43fd3301460a9f93e11b63280474/INHALATOR-NEBULIZATOR-MICROLIFE-NEB200-2-GRATISY\",
    \"desc\": \"Marka: Microlife, Rodzaj: pneumatyczne (tłokowe), Szybkość inhalacji: 0.4 ml/min, Średnia wielkość cząsteczek MMAD: 3.16 µm, Pojemność zbiornika na lek: 8 ml\"
  },
  {
    \"name\": \"INHALATOR NEBULIZATOR DLA DZIECI,DOROSŁYCH 2 MASKI\",
    \"price\": 79.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d9fd/67b279d14c8cb5399575e925f092/INHALATOR-NEBULIZATOR-DLA-DZIECI-DOROSLYCH-2-MASKI\",
    \"desc\": \"Marka: Misure, Rodzaj: pneumatyczne (tłokowe), Szybkość inhalacji: 0.4 ml/min, Pojemność zbiornika na lek: 10 ml\"
  },
  {
    \"name\": \"Nawilżacz powietrza AUTOMATYCZNY +AROMATERAPIA 2w1\",
    \"price\": 179.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/111e4c/287af50c4b5f838583c831cc4864/Nawilzacz-powietrza-AUTOMATYCZNY-AROMATERAPIA-2w1\",
    \"desc\": \"Stan: Nowy, Marka: Carruzzo, Moc: 28 W\"
  },
  {
    \"name\": \"POLSKI INHALATOR NEBULIZATOR KT-NEB FAMILY 2 MASKI\",
    \"price\": 98.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1161d6/d0b5730643799227a52de588b3e3/POLSKI-INHALATOR-NEBULIZATOR-KT-NEB-FAMILY-2-MASKI\",
    \"desc\": \"Marka: TECH-MED, Rodzaj: pneumatyczne (tłokowe), Szybkość inhalacji: 0.2 ml/min, Średnia wielkość cząsteczek MMAD: 2.44 µm, Pojemność zbiornika na lek: 8 ml\"
  },
  {
    \"name\": \"INHALATOR OMNIBUS CN116 NEBULIZATOR PRACA CIĄGŁA\",
    \"price\": 129,
    \"imageURL\": \"https://a.allegroimg.com/s180/113be3/ebaa2f374831b6423480ed2623bc/INHALATOR-OMNIBUS-CN116-NEBULIZATOR-PRACA-CIAGLA\",
    \"desc\": \"Marka: OMNIBUS, Rodzaj: pneumatyczne (tłokowe), Szybkość inhalacji: 0.35 ml/min, Średnia wielkość cząsteczek MMAD: 3 µm, Pojemność zbiornika na lek: 6 ml\"
  },
  {
    \"name\": \"TERMOMETR BEZDOTYKOWY LEKARSKI DOKŁADNY CERTYFIKAT\",
    \"price\": 40,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c1a2/7a06c91f414980324fdd0fe28670/TERMOMETR-BEZDOTYKOWY-LEKARSKI-DOKLADNY-CERTYFIKAT\",
    \"desc\": \"Stan: Nowy, Rodzaj: bezdotykowy, Marka: Inna marka (JKR), Miejsce pomiaru: czoło, ucho\"
  },
  {
    \"name\": \"TERMOMETR BEZDOTYKOWY LEKARSKI DOKŁADNY CERTYFIKAT\",
    \"price\": 40,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c1a2/7a06c91f414980324fdd0fe28670/TERMOMETR-BEZDOTYKOWY-LEKARSKI-DOKLADNY-CERTYFIKAT\",
    \"desc\": \"Stan: Nowy, Rodzaj: bezdotykowy, Marka: Inna marka (JKR), Miejsce pomiaru: czoło, ucho\"
  },
  {
    \"name\": \"TERMOMETR BEZDOTYKOWY MEDYCZNY NA PODCZERWIEŃ\",
    \"price\": 59.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/113061/89fb9d334c7081b783cef21ac9c7/TERMOMETR-BEZDOTYKOWY-MEDYCZNY-NA-PODCZERWIEN\",
    \"desc\": \"Stan: Nowy, Rodzaj: bezdotykowy, Marka: Alphamed, Miejsce pomiaru: czoło\"
  },
  {
    \"name\": \"TERMOMETR BEZDOTYKOWY MEDYCZNY NA PODCZERWIEŃ\",
    \"price\": 59.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11fee1/66cdcd9c417bba816112bccbf32a/TERMOMETR-BEZDOTYKOWY-MEDYCZNY-NA-PODCZERWIEN\",
    \"desc\": \"Stan: Nowy, Rodzaj: bezdotykowy, Marka: Vitammy, Miejsce pomiaru: czoło, ucho\"
  },
  {
    \"name\": \"NAWILŻACZ POWIETRZA DYFUZOR ZAPACHOWY AROMATERAPIA\",
    \"price\": 49.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1196bc/e1789547486c9e0236683a5df146/NAWILZACZ-POWIETRZA-DYFUZOR-ZAPACHOWY-AROMATERAPIA\",
    \"desc\": \"Stan: Nowy, Marka: Inna marka (PIXEL), Moc: 12 W\"
  },
  {
    \"name\": \"INHALATOR NEBULIZATOR SIATECZKOWY PRZENOŚNY USB\",
    \"price\": 114.09,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b1d0/3083a5b940e49b09e344210b7786/INHALATOR-NEBULIZATOR-SIATECZKOWY-PRZENOSNY-USB\",
    \"desc\": \"Marka: Inna marka (M), Rodzaj: kieszonkowe, membranowe, nebulizator, Szybkość inhalacji: 0.2 ml/min, Średnia wielkość cząsteczek MMAD: 5 µm, Pojemność zbiornika na lek: 8 ml\"
  },
  {
    \"name\": \"Inhalator nebulizator MEDEL FAMILY PLUS +GRATIS\",
    \"price\": 165.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11208c/46dc8faf46a29c9338b1b1149e16/Inhalator-nebulizator-MEDEL-FAMILY-PLUS-GRATIS\",
    \"desc\": \"Marka: Medel, Rodzaj: pneumatyczne (tłokowe), Szybkość inhalacji: 0.37 ml/min, Średnia wielkość cząsteczek MMAD: 3.5 µm, Pojemność zbiornika na lek: 8 ml\"
  },
  {
    \"name\": \"TERMOMETR MEDYCZNY BEZDOTYKOWY TMB-70 EXP TECH-MED\",
    \"price\": 92.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a7a0/71be3806409fb8eb8bccb03ffd97/TERMOMETR-MEDYCZNY-BEZDOTYKOWY-TMB-70-EXP-TECH-MED\",
    \"desc\": \"Stan: Nowy, Rodzaj: bezdotykowy, Marka: TECH-MED, Miejsce pomiaru: czoło\"
  },
  {
    \"name\": \"NAWILŻACZ POWIETRZA DYFUZOR ZAPACHOWY AROMATERAPIA\",
    \"price\": 40,
    \"imageURL\": \"https://a.allegroimg.com/s180/11f78c/1ce073e54819a24507ccdec2f170/NAWILZACZ-POWIETRZA-DYFUZOR-ZAPACHOWY-AROMATERAPIA\",
    \"desc\": \"Stan: Nowy, Marka: Inna marka (INTMIX)\"
  },
  {
    \"name\": \"Nawilżacz powietrza SMART WIFI oczyszczacz AROMA\",
    \"price\": 239.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11fc13/666d330149829e9bc2e54f7b1e95/Nawilzacz-powietrza-SMART-WIFI-oczyszczacz-AROMA\",
    \"desc\": \"Stan: Nowy, Marka: Carruzzo, Moc: 25 W\"
  },
  {
    \"name\": \"INHALATOR TŁOKOWY LUNAR DLA DZIECI I DOROSŁYCH\",
    \"price\": 84.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/111e34/73e4b6c64fcea10417fdb9ed65e4/INHALATOR-TLOKOWY-LUNAR-DLA-DZIECI-I-DOROSLYCH\",
    \"desc\": \"Marka: Inna marka, Rodzaj: pneumatyczne (tłokowe), Szybkość inhalacji: 0.2 ml/min, Średnia wielkość cząsteczek MMAD: 4 µm\"
  },
  {
    \"name\": \"Nawilżacz Powietrza Jonizator Dyfuzor Zapachowy\",
    \"price\": 124.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11661b/cbdcbc4145a08527656be563c0f0/Nawilzacz-Powietrza-Jonizator-Dyfuzor-Zapachowy\",
    \"desc\": \"Stan: Nowy, Marka: Malatec, Moc: 28 W\"
  },
  {
    \"name\": \"NAWILŻACZ POWIETRZA DYFUZOR ZAPACHOWY AROMATERAPIA\",
    \"price\": 45,
    \"imageURL\": \"https://a.allegroimg.com/s180/1154d3/c28a89794e91a8034d58fefea7ed/NAWILZACZ-POWIETRZA-DYFUZOR-ZAPACHOWY-AROMATERAPIA\",
    \"desc\": \"Stan: Nowy, Marka: Inna marka (Retoo), Moc: 13 W\"
  },
  {
    \"name\": \"Microlife NEB200 Inhalator Nebulizator na PREZENT\",
    \"price\": 139.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/118b5e/7a4ae7da42198bc3e801ee3ef052/Microlife-NEB200-Inhalator-Nebulizator-na-PREZENT\",
    \"desc\": \"Marka: Microlife, Rodzaj: pneumatyczne (tłokowe), Szybkość inhalacji: 0.4 ml/min, Średnia wielkość cząsteczek MMAD: 3.16 µm, Pojemność zbiornika na lek: 8 ml\"
  },
  {
    \"name\": \"NAWILŻACZ POWIETRZA REGULOWANY KOLOROWA LAMPKA LED\",
    \"price\": 79.89,
    \"imageURL\": \"https://a.allegroimg.com/s180/118ea3/e1837c024b98ab5bc42855d18618/NAWILZACZ-POWIETRZA-REGULOWANY-KOLOROWA-LAMPKA-LED\",
    \"desc\": \"Stan: Nowy, Marka: Esperanza, Moc: 25 W\"
  },
  {
    \"name\": \"Certyfikowany Inhalator MESH Nebulizer przenośny\",
    \"price\": 114.11,
    \"imageURL\": \"https://a.allegroimg.com/s180/1186a6/9f498dc24e9bac094db429714915/Certyfikowany-Inhalator-MESH-Nebulizer-przenosny\",
    \"desc\": \"Marka: Mesh, Rodzaj: kieszonkowe, membranowe, nebulizator, Szybkość inhalacji: 0.2 ml/min, Pojemność zbiornika na lek: 8 ml\"
  },
  {
    \"name\": \"Nawilżacz powietrza EBERG HUMI jonizator aroma 4w1\",
    \"price\": 225,
    \"imageURL\": \"https://a.allegroimg.com/s180/11de36/420cd1b344e3b1fed883e6d97893/Nawilzacz-powietrza-EBERG-HUMI-jonizator-aroma-4w1\",
    \"desc\": \"Stan: Nowy, Marka: EBERG, Moc: 55 W\"
  },
  {
    \"name\": \"12x Kindii Extra Soft Chusteczki Nawilżane 60szt.\",
    \"price\": 40,
    \"imageURL\": \"https://a.allegroimg.com/s180/11eb1f/6e090e294bf8a64411c1991a019b/12x-Kindii-Extra-Soft-Chusteczki-Nawilzane-60szt\",
    \"desc\": \"Marka: Kindii, Liczba opakowań: 12, Liczba sztuk w opakowaniu: 60 szt.\"
  },
  {
    \"name\": \"Nawilżacz powietrza Oczyszczacz Filtr 3x Olejki\",
    \"price\": 159.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/117d1e/9cc024cb4e1f83bdc6f646f613b3/Nawilzacz-powietrza-Oczyszczacz-Filtr-3x-Olejki\",
    \"desc\": \"Stan: Nowy, Marka: Carruzzo, Moc: 28 W\"
  },
  {
    \"name\": \"Termometr Bezdotykowy Medyczny na Podczerwień LED\",
    \"price\": 43.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/113870/3b4ae6fd4b3eb73a25185fbc9f7b/Termometr-Bezdotykowy-Medyczny-na-Podczerwien-LED\",
    \"desc\": \"Stan: Nowy, Rodzaj: bezdotykowy, Marka: Inna marka (Inna), Miejsce pomiaru: czoło\"
  },
  {
    \"name\": \"NAWILŻACZ POWIETRZA 1L DYFUZOR ZAPACHOWY AROMATER\",
    \"price\": 64.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11330c/9064b49841d8902db4bcb77686df/NAWILZACZ-POWIETRZA-1L-DYFUZOR-ZAPACHOWY-AROMATER\",
    \"desc\": \"Stan: Nowy, Marka: Inna marka (kipps)\"
  },
  {
    \"name\": \"Termometr medyczny na podczerwień 7w1 VITAMMY Sky\",
    \"price\": 47.45,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d117/ce392835405dbbce5098cc3ce4cd/Termometr-medyczny-na-podczerwien-7w1-VITAMMY-Sky\",
    \"desc\": \"Stan: Nowy, Rodzaj: elektroniczny, Marka: Vitammy, Miejsce pomiaru: czoło, ucho\"
  },
  {
    \"name\": \"Nawilżacz Powietrza z Higrometrem Jonizator z LCD\",
    \"price\": 109.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/1160b4/4d31c6b341139bde9e9aca648646/Nawilzacz-Powietrza-z-Higrometrem-Jonizator-z-LCD\",
    \"desc\": \"Stan: Nowy, Marka: Malatec, Moc: 25 W\"
  },
  {
    \"name\": \"TERMOMETR BEZDOTYKOWY NA PODCZERWIEŃ LEKARSKI 3G\",
    \"price\": 40,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c87e/79a8143f4302b91c7880c4c1cefb/TERMOMETR-BEZDOTYKOWY-NA-PODCZERWIEN-LEKARSKI-3G\",
    \"desc\": \"Stan: Nowy, Rodzaj: bezdotykowy, Marka: Reto MB Pro, Miejsce pomiaru: czoło\"
  },
  {
    \"name\": \"Zestaw 5x Pielucha Tetrowa Pieluchy Kolor PREMIUM\",
    \"price\": 29.37,
    \"imageURL\": \"https://a.allegroimg.com/s180/11682a/3ba3c66a4b05bbe38ea45b30ecc6/Zestaw-5x-Pielucha-Tetrowa-Pieluchy-Kolor-PREMIUM\",
    \"desc\": \"Stan: Nowy, Rodzaj: tetrowa, Marka: Egakids\"
  },
  {
    \"name\": \"Termometr bezdotykowy 2CZUJNIKI 5w1 VITAMMY Space+\",
    \"price\": 79,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a560/6cc07fff476abb04792af40e8cc4/Termometr-bezdotykowy-2CZUJNIKI-5w1-VITAMMY-Space\",
    \"desc\": \"Stan: Nowy, Rodzaj: bezdotykowy, Marka: Vitammy, Miejsce pomiaru: czoło\"
  },
  {
    \"name\": \"Bezdotykowy termometr medyczny do ucha i czoła\",
    \"price\": 79.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/118f2f/2028b50947018ab80b54e280f5e9/Bezdotykowy-termometr-medyczny-do-ucha-i-czola\",
    \"desc\": \"Stan: Nowy, Rodzaj: bezdotykowy, Marka: Wellue, Miejsce pomiaru: czoło, ucho\"
  },
  {
    \"name\": \"Certyfikowany NEBULIZATOR SIATECZKOWY PRZENOŚNY\",
    \"price\": 117.55,
    \"imageURL\": \"https://a.allegroimg.com/s180/11228c/efff558e4352a97c297b5f7a6f95/Certyfikowany-NEBULIZATOR-SIATECZKOWY-PRZENOSNY\",
    \"desc\": \"Marka: Mesh, Rodzaj: kieszonkowe, membranowe, nebulizator, Szybkość inhalacji: 0.2 ml/min, Pojemność zbiornika na lek: 8 ml\"
  },
  {
    \"name\": \"TERMOMETR BEZDOTYKOWY MEDYCZNY LEKARSKI CERTYFIKAT\",
    \"price\": 68.55,
    \"imageURL\": \"https://a.allegroimg.com/s180/11fa34/e158bcd74d0cad0b7d99001a7ff2/TERMOMETR-BEZDOTYKOWY-MEDYCZNY-LEKARSKI-CERTYFIKAT\",
    \"desc\": \"Stan: Nowy, Rodzaj: bezdotykowy, Marka: Vitammy, Miejsce pomiaru: czoło\"
  },
  {
    \"name\": \"4w1 Nawilżacz powietrza Yoer AUTOMATYCZNY +Aromat\",
    \"price\": 198,
    \"imageURL\": \"https://a.allegroimg.com/s180/11bb3e/b05deb444031a718cc05550e386d/4w1-Nawilzacz-powietrza-Yoer-AUTOMATYCZNY-Aromat\",
    \"desc\": \"Stan: Nowy, Marka: Yoer, Moc: 40 W\"
  },
  {
    \"name\": \"NAWILŻACZ POWIETRZA DYFUZOR JONIZATOR AROMATERAPIA\",
    \"price\": 66.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/116461/98878f6949e687c20a602b5714cc/NAWILZACZ-POWIETRZA-DYFUZOR-JONIZATOR-AROMATERAPIA\",
    \"desc\": \"Stan: Nowy, Marka: Inna marka (Falcon)\"
  },
  {
    \"name\": \"NAWILŻACZ POWIETRZA DYFUZOR ZAPACHOWY AROMATERAPIA\",
    \"price\": 40,
    \"imageURL\": \"https://a.allegroimg.com/s180/11f78c/1ce073e54819a24507ccdec2f170/NAWILZACZ-POWIETRZA-DYFUZOR-ZAPACHOWY-AROMATERAPIA\",
    \"desc\": \"Stan: Nowy, Marka: Inna marka (INTMIX)\"
  },
  {
    \"name\": \"GRZEJĄCA MASKOTKA DO PRZYTULANIA LAMA PRZYTULAMKA\",
    \"price\": 120,
    \"imageURL\": \"https://a.allegroimg.com/s180/11e29b/3009e08749c7be349ae2b4f1333d/GRZEJACA-MASKOTKA-DO-PRZYTULANIA-LAMA-PRZYTULAMKA\",
    \"desc\": \"Stan: Nowy, Rodzaj: z pestek wiśni\"
  },
  {
    \"name\": \"TERMOMETR BEZDOTYKOWY MEDYCZNY LEKARSKI CERTYFIKAT\",
    \"price\": 68.55,
    \"imageURL\": \"https://a.allegroimg.com/s180/11fa34/e158bcd74d0cad0b7d99001a7ff2/TERMOMETR-BEZDOTYKOWY-MEDYCZNY-LEKARSKI-CERTYFIKAT\",
    \"desc\": \"Stan: Nowy, Rodzaj: bezdotykowy, Marka: Vitammy, Miejsce pomiaru: czoło\"
  },
  {
    \"name\": \"NAWILŻACZ POWIETRZA JONIZATOR AROMA BLACK 4,8L 30W\",
    \"price\": 149.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1196e1/0ef0c4394a9f986a05bab62516bc/NAWILZACZ-POWIETRZA-JONIZATOR-AROMA-BLACK-4-8L-30W\",
    \"desc\": \"Stan: Nowy, Marka: Inna marka (KERCH), Moc: 30 W\"
  },
  {
    \"name\": \"Himalaya goździkowa pasta do zębów bez fluoru 100g\",
    \"price\": 12.81,
    \"imageURL\": \"https://a.allegroimg.com/s180/119ac3/6fcf67c74581ac81528fbfbd12e6/Himalaya-gozdzikowa-pasta-do-zebow-bez-fluoru-100g\",
    \"desc\": \"Marka: Himalaya, Smak: goździkowa, Waga: 100 g\"
  },
  {
    \"name\": \"TERMOMETR BEZDOTYKOWY LEKARSKI DOKŁADNY CERTYFIKAT\",
    \"price\": 40,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c1a2/7a06c91f414980324fdd0fe28670/TERMOMETR-BEZDOTYKOWY-LEKARSKI-DOKLADNY-CERTYFIKAT\",
    \"desc\": \"Stan: Nowy, Rodzaj: bezdotykowy, Marka: Inna marka (JKR), Miejsce pomiaru: czoło, ucho\"
  },
  {
    \"name\": \"Inhalator Nebulizator tłokowy Herz Medical\",
    \"price\": 119,
    \"imageURL\": \"https://a.allegroimg.com/s180/11e3c8/0608793841509fa919456a7bbf41/Inhalator-Nebulizator-tlokowy-Herz-Medical\",
    \"desc\": \"Marka: Herz Medical Instruments, Rodzaj: nebulizator, pneumatyczne (tłokowe), Szybkość inhalacji: 0.33 ml/min, Średnia wielkość cząsteczek MMAD: 3 µm, Pojemność zbiornika na lek: 8 ml\"
  },
  {
    \"name\": \"Nawilżacz powietrza SMART WIFI oczyszczacz AROMA\",
    \"price\": 239.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11fc13/666d330149829e9bc2e54f7b1e95/Nawilzacz-powietrza-SMART-WIFI-oczyszczacz-AROMA\",
    \"desc\": \"Stan: Nowy, Marka: Carruzzo, Moc: 25 W\"
  },
  {
    \"name\": \"Termometr BEZDOTYKOWY MEDYCZNY NA PODCZERWIEŃ Herz\",
    \"price\": 89,
    \"imageURL\": \"https://a.allegroimg.com/s180/1167d9/49232f9d46d197be80e9a58e3b93/Termometr-BEZDOTYKOWY-MEDYCZNY-NA-PODCZERWIEN-Herz\",
    \"desc\": \"Stan: Nowy, Rodzaj: bezdotykowy, Marka: Herz Medical Instruments, Miejsce pomiaru: czoło\"
  },
  {
    \"name\": \"Termometr medyczny na podczerwień 7w1 VITAMMY Sky\",
    \"price\": 47.45,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d117/ce392835405dbbce5098cc3ce4cd/Termometr-medyczny-na-podczerwien-7w1-VITAMMY-Sky\",
    \"desc\": \"Stan: Nowy, Rodzaj: elektroniczny, Marka: Vitammy, Miejsce pomiaru: czoło, ucho\"
  },
  {
    \"name\": \"Nawilżacz Powietrza Dyfuzor Zapachowy Aromaterapia\",
    \"price\": 69.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d52e/f3174a4d438d91b74fb581cbc4c6/Nawilzacz-Powietrza-Dyfuzor-Zapachowy-Aromaterapia\",
    \"desc\": \"Stan: Nowy, Marka: Malatec, Moc: 10 W\"
  },
  {
    \"name\": \"NAWILŻACZ POWIETRZA DYFUZOR ZAPACHOWY PODŚWIETLANY\",
    \"price\": 9.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/112bd8/4c13944541859245c6fddee3a91a/NAWILZACZ-POWIETRZA-DYFUZOR-ZAPACHOWY-PODSWIETLANY\",
    \"desc\": \"Stan: Nowy, Marka: Satis, Moc: 2 W\"
  },
  {
    \"name\": \"Nawilżacz Powietrza Dyfuzor Zapachowy Aromaterapia\",
    \"price\": 64.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/114d07/5dcc41de4d1180c875ba020107c9/Nawilzacz-Powietrza-Dyfuzor-Zapachowy-Aromaterapia\",
    \"desc\": \"Stan: Nowy, Marka: Malatec\"
  },
  {
    \"name\": \"Termometr bezdotykowy Microlife NC 200 + Etui\",
    \"price\": 137.99,
    \"imageURL\": \"https://b.allegroimg.com/s180/0380a4/7e37c95f43ac88f7f6534b9f967b/Termometr-bezdotykowy-Microlife-NC-200-Etui\",
    \"desc\": \"Stan: Nowy, Rodzaj: bezdotykowy, Marka: Microlife, Miejsce pomiaru: czoło\"
  },
  {
    \"name\": \"NAWILŻACZ POWIETRZA DYFUZOR ZAPACHOWY AROMATERAPIA\",
    \"price\": 138.97,
    \"imageURL\": \"https://a.allegroimg.com/s180/115f91/2ed660b74e54a62b7cf523300a2e/NAWILZACZ-POWIETRZA-DYFUZOR-ZAPACHOWY-AROMATERAPIA\",
    \"desc\": \"Stan: Nowy, Marka: Inna marka (DISAC)\"
  },
  {
    \"name\": \"Nawilżacz Powietrza Ultradźwiękowy Jonizator Pilot\",
    \"price\": 109.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/115b84/7d621cc34a4d8e9d538b68a1a5ca/Nawilzacz-Powietrza-Ultradzwiekowy-Jonizator-Pilot\",
    \"desc\": \"Stan: Nowy, Marka: Malatec, Moc: 25 W\"
  },
  {
    \"name\": \"NAWILŻACZ POWIETRZA DYFUZOR ZAPACHOWY AROMATERAPIA\",
    \"price\": 56.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/111aa3/32d6d7e44aa3be8c4496de623ee2/NAWILZACZ-POWIETRZA-DYFUZOR-ZAPACHOWY-AROMATERAPIA\",
    \"desc\": \"Stan: Nowy, Marka: Inna marka (DDK), Moc: 4 W\"
  },
  {
    \"name\": \"Nawilżacz powietrza Oczyszczacz Filtr 3x Olejki\",
    \"price\": 159.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/117d1e/9cc024cb4e1f83bdc6f646f613b3/Nawilzacz-powietrza-Oczyszczacz-Filtr-3x-Olejki\",
    \"desc\": \"Stan: Nowy, Marka: Carruzzo, Moc: 28 W\"
  },
  {
    \"name\": \"TERMOMETR POLSKI MEDYCZNY BEZDOTYKOWY 3 KOLORY LCD\",
    \"price\": 69.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11cdb8/f59ea6ea442ab253680c4548a828/TERMOMETR-POLSKI-MEDYCZNY-BEZDOTYKOWY-3-KOLORY-LCD\",
    \"desc\": \"Stan: Nowy, Rodzaj: bezdotykowy, Marka: Oro-med, Miejsce pomiaru: czoło\"
  },
  {
    \"name\": \"Vitammy SPOT Termometr BEZDOTYKOWY lekarski 1sek\",
    \"price\": 85.79,
    \"imageURL\": \"https://a.allegroimg.com/s180/110b99/f85c952549c09ab8685d79dd8144/Vitammy-SPOT-Termometr-BEZDOTYKOWY-lekarski-1sek\",
    \"desc\": \"Stan: Nowy, Rodzaj: bezdotykowy, Marka: Vitammy, Miejsce pomiaru: czoło\"
  },
  {
    \"name\": \"NAWILŻACZ POWIETRZA DYFUZOR ZAPACHOWY AROMATERAPIA\",
    \"price\": 12.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/1171d9/6e035318461fa9b04e4401c51e5a/NAWILZACZ-POWIETRZA-DYFUZOR-ZAPACHOWY-AROMATERAPIA\",
    \"desc\": \"Stan: Nowy, Marka: Satis, Moc: 2 W\"
  },
  {
    \"name\": \"Termometr Bezdotykowy BRAUN BNT300 Cichy Tryb\",
    \"price\": 141,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c093/7c648b114ffa972897cc004b647b/Termometr-Bezdotykowy-BRAUN-BNT300-Cichy-Tryb\",
    \"desc\": \"Stan: Nowy, Rodzaj: bezdotykowy, Marka: Braun, Miejsce pomiaru: czoło\"
  },
  {
    \"name\": \"Inhalator MEDEL Professional Nebulizator\",
    \"price\": 299.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11144a/f93f75404f179cce854b79ce4703/Inhalator-MEDEL-Professional-Nebulizator\",
    \"desc\": \"Marka: Medel, Rodzaj: pneumatyczne (tłokowe), Szybkość inhalacji: 0.3 ml/min, Średnia wielkość cząsteczek MMAD: 0.8 µm, Pojemność zbiornika na lek: 8 ml\"
  },
  {
    \"name\": \"NAWILŻACZ POWIETRZA AROMATERAPIA DYFUZOR ZAPACHOWY\",
    \"price\": 25,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d9d6/3e1a78f946399ee4a0a824f12d93/NAWILZACZ-POWIETRZA-AROMATERAPIA-DYFUZOR-ZAPACHOWY\",
    \"desc\": \"Stan: Nowy, Marka: Inna marka, Moc: 2 W\"
  },
  {
    \"name\": \"NAWILŻACZ powietrza INTELIGENTNY OCZYSZCZACZ aroma\",
    \"price\": 279.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/117f31/3341b276466da271373b5d9e5ff4/NAWILZACZ-powietrza-INTELIGENTNY-OCZYSZCZACZ-aroma\",
    \"desc\": \"Stan: Nowy, Marka: Carruzzo, Moc: 28 W\"
  },
  {
    \"name\": \"TERMOMETR POLSKI MEDYCZNY BEZDOTYKOWY 3 KOLORY LCD\",
    \"price\": 69.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11cdb8/f59ea6ea442ab253680c4548a828/TERMOMETR-POLSKI-MEDYCZNY-BEZDOTYKOWY-3-KOLORY-LCD\",
    \"desc\": \"Stan: Nowy, Rodzaj: bezdotykowy, Marka: Oro-med, Miejsce pomiaru: czoło\"
  },
  {
    \"name\": \"TERMOMETR BEZDOTYKOWY LEKARSKI CERTYFIKAT CE\",
    \"price\": 27.95,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d1b6/cf6e2c9f4abf95a8b347a2ee31ff/TERMOMETR-BEZDOTYKOWY-LEKARSKI-CERTYFIKAT-CE\",
    \"desc\": \"Stan: Nowy, Rodzaj: bezdotykowy, Marka: Azaris, Miejsce pomiaru: czoło\"
  },
  {
    \"name\": \"TERMOMETR MEDYCZNY LEKARSKI CERTYFIKAT BEZDOTYKOWY\",
    \"price\": 59.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b8bd/9ae3949047df86dda37d2ee1eba0/TERMOMETR-MEDYCZNY-LEKARSKI-CERTYFIKAT-BEZDOTYKOWY\",
    \"desc\": \"Stan: Nowy, Rodzaj: bezdotykowy, Marka: Inna marka (Venom), Miejsce pomiaru: czoło, ucho\"
  },
  {
    \"name\": \"NAWILŻACZ POWIETRZA AROMATERAPIA DYFUZOR + OLEJKI\",
    \"price\": 54.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11f241/e7f121e64f86b0ed71558db245be/NAWILZACZ-POWIETRZA-AROMATERAPIA-DYFUZOR-OLEJKI\",
    \"desc\": \"Stan: Nowy, Marka: Inna marka (IN)\"
  },
  {
    \"name\": \"Berrcom Bezdotykowy Termometr- podczerwień JXB-182\",
    \"price\": 26,
    \"imageURL\": \"https://a.allegroimg.com/s180/1106e1/deb123b847ceb081e00b948eb4a6/Berrcom-Bezdotykowy-Termometr-podczerwien-JXB-182\",
    \"desc\": \"Stan: Nowy, Rodzaj: bezdotykowy, Marka: BERRCOM, Miejsce pomiaru: czoło\"
  },
  {
    \"name\": \"TERMOMETR MEDYCZNY BEZDOTYKOWY TMB-70 EXP TECH-MED\",
    \"price\": 92.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a7a0/71be3806409fb8eb8bccb03ffd97/TERMOMETR-MEDYCZNY-BEZDOTYKOWY-TMB-70-EXP-TECH-MED\",
    \"desc\": \"Stan: Nowy, Rodzaj: bezdotykowy, Marka: TECH-MED, Miejsce pomiaru: czoło\"
  },
  {
    \"name\": \"INHALATOR NEBULIZATOR MICROLIFE NEB200 + 2 GRATISY\",
    \"price\": 139.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/116b27/43fd3301460a9f93e11b63280474/INHALATOR-NEBULIZATOR-MICROLIFE-NEB200-2-GRATISY\",
    \"desc\": \"Marka: Microlife, Rodzaj: pneumatyczne (tłokowe), Szybkość inhalacji: 0.4 ml/min, Średnia wielkość cząsteczek MMAD: 3.16 µm, Pojemność zbiornika na lek: 8 ml\"
  }
]`);

const c = gifts as BaseGift[];

export default c;
