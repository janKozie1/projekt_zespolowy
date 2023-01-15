import type { BaseGift } from '../gifts';

const gifts: unknown = JSON.parse(`[
  {
    \"name\": \"Calvin Klein Women 100ml woda perfumowana EDP\",
    \"price\": 165.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/25a477/5b5427ed44b99c5ca7f686bca5a0/Calvin-Klein-Women-100ml-woda-perfumowana-EDP\",
    \"desc\": \"Stan: Nowy, Marka: Calvin Klein, Pojemność opakowania: 100 ml\"
  },
  {
    \"name\": \"Perfumy damskie GIQRGIQ ARMAN SI 100ml\",
    \"price\": 47,
    \"imageURL\": \"https://a.allegroimg.com/s180/1199cd/81e7b91c4feb987f81bb724efda7/Perfumy-damskie-GIQRGIQ-ARMAN-SI-100ml\",
    \"desc\": \"Stan: Nowy, Marka: inna marka (GIQRGIQ ARMAN), Pojemność opakowania: 100 ml\"
  },
  {
    \"name\": \"Cerruti 1881 Pour Femme 100ml woda toaletowa EDT\",
    \"price\": 128.64,
    \"imageURL\": \"https://a.allegroimg.com/s180/293cde/b45064584f5196f9cc5b0e1e56fa/Cerruti-1881-Pour-Femme-100ml-woda-toaletowa-EDT\",
    \"desc\": \"Stan: Nowy, Marka: Cerruti, Pojemność opakowania: 100 ml\"
  },
  {
    \"name\": \"JAGUAR Classic Black EDT 100ml\",
    \"price\": 64,
    \"imageURL\": \"https://a.allegroimg.com/s180/1151cf/b889052d4cd9822345060db7a8ac/JAGUAR-Classic-Black-EDT-100ml\",
    \"desc\": \"Stan: Nowy, Marka: Jaguar, Pojemność opakowania: 100 ml\"
  },
  {
    \"name\": \"Night Wolf Perfumy z Mocnymi Feromonami Męskimi\",
    \"price\": 99.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/119a4c/eade2ce94c7cab034d10ffd4c137/Night-Wolf-Perfumy-z-Mocnymi-Feromonami-Meskimi\",
    \"desc\": \"Stan: Nowy, Marka: inna marka (Ero-Bull), Pojemność opakowania: 50 ml\"
  },
  {
    \"name\": \"GIQRGIQ ARMAN SI - PERFUMY DAMSKIE 100ml\",
    \"price\": 46.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11859b/14b2794f4bc0b160c2f4428d51d6/GIQRGIQ-ARMAN-SI-PERFUMY-DAMSKIE-100ml\",
    \"desc\": \"Stan: Nowy, Marka: inna marka ((inna marka) GIQRGIQ ARMAN), Pojemność opakowania: 100 ml\"
  },
  {
    \"name\": \"JAGUAR Classic Gold EDT 100ml\",
    \"price\": 68.88,
    \"imageURL\": \"https://a.allegroimg.com/s180/11e48a/2a4326a8480b88181d3b00c2e94d/JAGUAR-Classic-Gold-EDT-100ml\",
    \"desc\": \"Stan: Nowy, Marka: Jaguar\"
  },
  {
    \"name\": \"LOVE DESIRE MĘSKIE PERFUMY Z FEROMONAMI 100ML MEN\",
    \"price\": 107.1,
    \"imageURL\": \"https://a.allegroimg.com/s180/03a856/e4c15c2e420fa7111b9175c3631e/LOVE-DESIRE-MESKIE-PERFUMY-Z-FEROMONAMI-100ML-MEN\",
    \"desc\": \"Stan: Nowy, Marka: Love & Desire, Pojemność opakowania: 100 ml\"
  },
  {
    \"name\": \"Davidoff Adventure 100 ml woda toaletowa EDT\",
    \"price\": 90.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c6c3/40e9a4fe40a683c05791115cfed9/Davidoff-Adventure-100-ml-woda-toaletowa-EDT\",
    \"desc\": \"Stan: Nowy, Marka: Davidoff, Pojemność opakowania: 100 ml\"
  },
  {
    \"name\": \"Perfumy damskie CALVIN KLEIN IN2U Woman EDT 150ml\",
    \"price\": 117.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1176cc/a781e65e4b43bacb79866fabc954/Perfumy-damskie-CALVIN-KLEIN-IN2U-Woman-EDT-150ml\",
    \"desc\": \"Stan: Nowy, Marka: Calvin Klein, Pojemność opakowania: 150 ml\"
  },
  {
    \"name\": \"ORIFLAME ECLAT FEMME WEEKEND 50 ml\",
    \"price\": 33.49,
    \"imageURL\": \"https://a.allegroimg.com/s180/117290/d5b8cc09482e8093107b528e0e61/ORIFLAME-ECLAT-FEMME-WEEKEND-50-ml\",
    \"desc\": \"Stan: Nowy, Marka: Oriflame, Pojemność opakowania: 50 ml\"
  },
  {
    \"name\": \"Dior Sauvage Elixir Perfumy męskie 60 ml\",
    \"price\": 289.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11e748/91e867c446e6a729ad0da1e8b05d/Dior-Sauvage-Elixir-Perfumy-meskie-60-ml\",
    \"desc\": \"Stan: Nowy, Marka: Dior, Pojemność opakowania: 60 ml\"
  },
  {
    \"name\": \"Dior Sauvage EDP, Woda perfumowana 100 ml\",
    \"price\": 228.89,
    \"imageURL\": \"https://a.allegroimg.com/s180/113f11/b51ceea74b73b517a637e8bca110/Dior-Sauvage-EDP-Woda-perfumowana-100-ml\",
    \"desc\": \"Stan: Nowy, Marka: Dior, Pojemność opakowania: 100 ml\"
  },
  {
    \"name\": \"Dolce and Gabbana L'Imperatrice 100ml EDT\",
    \"price\": 155.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/25b0e7/4178dab74f7799faa41f18e17db6/Dolce-and-Gabbana-L-Imperatrice-100ml-EDT\",
    \"desc\": \"Stan: Nowy, Marka: Dolce & Gabbana, Pojemność opakowania: 100 ml\"
  },
  {
    \"name\": \"BAMBOO PINK PERFUMY DAMSKIE 100ml\",
    \"price\": 59.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d8fe/d7897f414a748fbafb8e64cd84cf/BAMBOO-PINK-PERFUMY-DAMSKIE-100ml\",
    \"desc\": \"Stan: Nowy, Marka: Gucci, Pojemność opakowania: 100 ml\"
  },
  {
    \"name\": \"PERFUMY FEROMONY MĘSKIE LOVE & DESIRE 50ML\",
    \"price\": 72.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/038d19/55260f0c4ce990136cd25de81ee2/PERFUMY-FEROMONY-MESKIE-LOVE-DESIRE-50ML\",
    \"desc\": \"Stan: Nowy, Marka: Love & Desire, Pojemność opakowania: 50 ml\"
  },
  {
    \"name\": \"Avon Attraction 100ml Perfum Damski Na Prezent XXL\",
    \"price\": 55,
    \"imageURL\": \"https://a.allegroimg.com/s180/116c38/8c2225cc485ab87434ed25b9ada4/Avon-Attraction-100ml-Perfum-Damski-Na-Prezent-XXL\",
    \"desc\": \"Stan: Nowy, Marka: Avon, Pojemność opakowania: 100 ml\"
  },
  {
    \"name\": \"Perfumy unisex Dossier Woody Sandalwood 50ml\",
    \"price\": 19,
    \"imageURL\": \"https://a.allegroimg.com/s180/114bac/97fdcc8f46f68403b9c31df41442/Perfumy-unisex-Dossier-Woody-Sandalwood-50ml\",
    \"desc\": \"Stan: Używany, Marka: Dossier, Pojemność opakowania: 50 ml\"
  },
  {
    \"name\": \"PERFUMY DAMSKIE MADEMOISELLE EDP 100ml\",
    \"price\": 44.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11bf42/c6f4b7f240f0be62bd33c3cefb78/PERFUMY-DAMSKIE-MADEMOISELLE-EDP-100ml\",
    \"desc\": \"Stan: Nowy, Marka: inna marka (perfumy inspirowane), Pojemność opakowania: 100 ml\"
  },
  {
    \"name\": \"Hugo Boss Femme 75 ml woda perfumowana kobieta EDP\",
    \"price\": 164.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/00ae87/37f06cc0491b9d5bd54df77d2f19/Hugo-Boss-Femme-75-ml-woda-perfumowana-kobieta-EDP\",
    \"desc\": \"Stan: Nowy, Marka: Hugo Boss, Pojemność opakowania: 75 ml\"
  },
  {
    \"name\": \"Euphonic Euphorie Perfumy damskie Euforia 100ml\",
    \"price\": 54.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1164e4/34eb4f0b42639f76b487c0f42c3e/Euphonic-Euphorie-Perfumy-damskie-Euforia-100ml\",
    \"desc\": \"Stan: Nowy, Marka: Euphonic, Pojemność opakowania: 100 ml\"
  },
  {
    \"name\": \"AVON Incandessence Woda Perfumowana Perfumy 50 ml\",
    \"price\": 26.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ed9c/b9d1e0af48f9b5282c32b9b17710/AVON-Incandessence-Woda-Perfumowana-Perfumy-50-ml\",
    \"desc\": \"Stan: Nowy, Marka: Avon, Pojemność opakowania: 50 ml\"
  },
  {
    \"name\": \"Carolina Herrera Good Girl Woda perfumowana 80 ml\",
    \"price\": 286.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1175bb/f6c9ac4f4785bfd7407da5838be2/Carolina-Herrera-Good-Girl-Woda-perfumowana-80-ml\",
    \"desc\": \"Stan: Nowy, Marka: Carolina Herrera, Pojemność opakowania: 80 ml\"
  },
  {
    \"name\": \"Dior Sauvage EDP, Woda perfumowana 100 ml\",
    \"price\": 228.89,
    \"imageURL\": \"https://a.allegroimg.com/s180/113f11/b51ceea74b73b517a637e8bca110/Dior-Sauvage-EDP-Woda-perfumowana-100-ml\",
    \"desc\": \"Stan: Nowy, Marka: Dior, Pojemność opakowania: 100 ml\"
  },
  {
    \"name\": \"LADY MILLION + ONE 1 MILION Perfumy Damskie Męskie\",
    \"price\": 97.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11865d/bdfd67984150ac00c601dd0525ba/LADY-MILLION-ONE-1-MILION-Perfumy-Damskie-Meskie\",
    \"desc\": \"Stan: Nowy, Marka: Paco Rabanne, Pojemność opakowania: 180 ml\"
  },
  {
    \"name\": \"AVON Perceive Męska Woda Toaletowa Perfumy 100 ml\",
    \"price\": 27.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/119cc0/8b755662462b98541393249c6e9e/AVON-Perceive-Meska-Woda-Toaletowa-Perfumy-100-ml\",
    \"desc\": \"Stan: Nowy, Marka: Avon, Pojemność opakowania: 100 ml\"
  },
  {
    \"name\": \"ATOMIZER PODRÓŻNY PERFUMY PERFUM 5ML DOZOWNIK\",
    \"price\": 7.98,
    \"imageURL\": \"https://a.allegroimg.com/s180/112d25/cb2d8b874ea5b8740849a2ed23d2/ATOMIZER-PODROZNY-PERFUMY-PERFUM-5ML-DOZOWNIK\",
    \"desc\": \"Stan: Nowy, Marka: inna marka (PrzydaSie.pl)\"
  },
  {
    \"name\": \"Desir Eternel Femme - Damskie perfumy z feromonami\",
    \"price\": 145,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c438/de3ff839494e8cc385880e02ec3c/Desir-Eternel-Femme-Damskie-perfumy-z-feromonami\",
    \"desc\": \"Stan: Nowy, Marka: PLT Group, Pojemność opakowania: 50 ml\"
  },
  {
    \"name\": \"DOUGLAS JAZZY DREAM WODA TOALETOWA EDT 15ml\",
    \"price\": 7.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11da0d/633b89e8424eb43dd0fbe0e03870/DOUGLAS-JAZZY-DREAM-WODA-TOALETOWA-EDT-15ml\",
    \"desc\": \"Stan: Nowy, Marka: Douglas, Pojemność opakowania: 15 ml\"
  },
  {
    \"name\": \"Perfumy Damskie ADIDAS BORN Original HER 50 ml\",
    \"price\": 67,
    \"imageURL\": \"https://a.allegroimg.com/s180/030c5c/cb5f4be84be8bcd9c53ec7640eab/Perfumy-Damskie-ADIDAS-BORN-Original-HER-50-ml\",
    \"desc\": \"Stan: Nowy, Marka: adidas, Pojemność opakowania: 50 ml\"
  },
  {
    \"name\": \"Perfumy męskie JOOP! Homme EDT 125ml\",
    \"price\": 131.99,
    \"imageURL\": \"https://5.allegroimg.com/s180/01d1c3/0ac5d5244f5cbd6f14d25772aac5/Perfumy-meskie-JOOP-Homme-EDT-125ml\",
    \"desc\": \"Stan: Nowy, Marka: Joop, Pojemność opakowania: 125 ml\"
  },
  {
    \"name\": \"*AVON* CELEBRE WODA TOALETOWA 50 ML\",
    \"price\": 18.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11e81c/c828561446529bfe83f3cbe379c3/AVON-CELEBRE-WODA-TOALETOWA-50-ML\",
    \"desc\": \"Stan: Nowy, Marka: Avon, Pojemność opakowania: 50 ml\"
  },
  {
    \"name\": \"Calvin Klein Obsession Men 125 ml EDT\",
    \"price\": 102.51,
    \"imageURL\": \"https://a.allegroimg.com/s180/111b6e/c37a27be45cdbf9431a1f0727b49/Calvin-Klein-Obsession-Men-125-ml-EDT\",
    \"desc\": \"Stan: Nowy, Marka: Calvin Klein, Pojemność opakowania: 125 ml\"
  },
  {
    \"name\": \"ORIFLAME PERFUMY MISS GIORDANI\",
    \"price\": 31.49,
    \"imageURL\": \"https://a.allegroimg.com/s180/112824/7427f5b74c059150e1845fe96a00/ORIFLAME-PERFUMY-MISS-GIORDANI\",
    \"desc\": \"Stan: Nowy, Marka: Oriflame, Pojemność opakowania: 50 ml\"
  },
  {
    \"name\": \"AVON Attraction dla Niej Woda Perfumowana Perfumy\",
    \"price\": 38.7,
    \"imageURL\": \"https://a.allegroimg.com/s180/110941/2f11410f4608abbaa3703b7b77c7/AVON-Attraction-dla-Niej-Woda-Perfumowana-Perfumy\",
    \"desc\": \"Stan: Nowy, Marka: Avon, Pojemność opakowania: 50 ml\"
  },
  {
    \"name\": \"ONE MILLION PACO REBANE 1 MILION - PERFUMY MĘSKIE\",
    \"price\": 94.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/115653/ff5b475545f3b4c4d0384e9fc761/ONE-MILLION-PACO-REBANE-1-MILION-PERFUMY-MESKIE\",
    \"desc\": \"Stan: Nowy, Marka: inna marka (PACO RABENNE), Pojemność opakowania: 100 ml\"
  },
  {
    \"name\": \"Perfumy damskie Dossier FLORIENTAL VANILLIA 50ml\",
    \"price\": 29,
    \"imageURL\": \"https://a.allegroimg.com/s180/111b94/7148b0954bd8a8d74bd7dde1a2a7/Perfumy-damskie-Dossier-FLORIENTAL-VANILLIA-50ml\",
    \"desc\": \"Stan: Używany, Marka: Dossier, Pojemność opakowania: 50 ml\"
  },
  {
    \"name\": \"FEREN-HIGHT Perfumy męskie 100ml\",
    \"price\": 45,
    \"imageURL\": \"https://a.allegroimg.com/s180/11bf41/24cf0912421695e8a4e0b2964ec7/FEREN-HIGHT-Perfumy-meskie-100ml\",
    \"desc\": \"Stan: Nowy, Marka: Chris Adams, Pojemność opakowania: 100 ml\"
  },
  {
    \"name\": \"Perfumy INTENSE Damskie 81 FM Group +Gratisy\",
    \"price\": 30.89,
    \"imageURL\": \"https://a.allegroimg.com/s180/117724/9b05ef0346dfa61cf3a7da2d8183/Perfumy-INTENSE-Damskie-81-FM-Group-Gratisy\",
    \"desc\": \"Stan: Nowy, Marka: FM World, Pojemność opakowania: 50 ml\"
  },
  {
    \"name\": \"AVON WODA PERFUMOWANA RARE PEARLS 50 ML DAMSKIE\",
    \"price\": 23.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/119a74/99a9c19d43aa98eb1429899a922a/AVON-WODA-PERFUMOWANA-RARE-PEARLS-50-ML-DAMSKIE\",
    \"desc\": \"Stan: Nowy, Marka: Avon, Pojemność opakowania: 50 ml\"
  },
  {
    \"name\": \"Perfumy z Feromonami Męskimi DreamSex Premium 50ml\",
    \"price\": 59.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11091e/fb0cfd5b4da49d014d03629f2e64/Perfumy-z-Feromonami-Meskimi-DreamSex-Premium-50ml\",
    \"desc\": \"Stan: Nowy, Marka: inna marka (Ero-Bull), Pojemność opakowania: 50 ml\"
  },
  {
    \"name\": \"Perfumy unisex Dossier Oriental Cherry 50ml\",
    \"price\": 59,
    \"imageURL\": \"https://a.allegroimg.com/s180/114879/7e0a475c4d6e8db70a078b3b167f/Perfumy-unisex-Dossier-Oriental-Cherry-50ml\",
    \"desc\": \"Stan: Używany, Marka: Dossier, Pojemność opakowania: 50 ml\"
  },
  {
    \"name\": \"Perfumy męskie INVICTUS Poco Robone TRWAŁE MOCNE\",
    \"price\": 59.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/117b22/1871ac9c46868a4594bb3b8649e6/Perfumy-meskie-INVICTUS-Poco-Robone-TRWALE-MOCNE\",
    \"desc\": \"Stan: Nowy, Marka: inna marka (POCO ROBONE), Pojemność opakowania: 100 ml\"
  },
  {
    \"name\": \"AVON Perceive Perfumy Woda Perfumowana 50 ml\",
    \"price\": 31.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/113f6e/c6a8bc8648cca6f8a97870d63ec5/AVON-Perceive-Perfumy-Woda-Perfumowana-50-ml\",
    \"desc\": \"Stan: Nowy, Marka: Avon, Pojemność opakowania: 50 ml\"
  },
  {
    \"name\": \"Trwałe Perfumy 33ml SI Perfumetki 33 ml\",
    \"price\": 9.5,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b277/8cac24894315808e62e62b5dfbe9/Trwale-Perfumy-33ml-SI-Perfumetki-33-ml\",
    \"desc\": \"Stan: Nowy, Marka: inna marka (Twoja Perfumetka), Pojemność opakowania: 33 ml\"
  },
  {
    \"name\": \"LA VIE EST BELLE Perfum Damskie Lancoma MOCNE 90ml\",
    \"price\": 69.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11659f/48b2e1ad46c2bdea9b260bd0bbe4/LA-VIE-EST-BELLE-Perfum-Damskie-Lancoma-MOCNE-90ml\",
    \"desc\": \"Stan: Nowy, Marka: inna marka (LANCOMA), Pojemność opakowania: 75 ml\"
  },
  {
    \"name\": \"Perfumy Damskie HUGO BOSS NUIT EDP 75ML\",
    \"price\": 219,
    \"imageURL\": \"https://a.allegroimg.com/s180/031061/56dfc4594c03a39e9e08fa2b6874/Perfumy-Damskie-HUGO-BOSS-NUIT-EDP-75ML\",
    \"desc\": \"Stan: Nowy, Marka: Hugo Boss, Pojemność opakowania: 75 ml\"
  },
  {
    \"name\": \"Perfumy MĘSKIE 33ml Rosemi Paris nr 304 SAUVAG\",
    \"price\": 14.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ddb0/525ef1ce44b483170a33b91a9d42/Perfumy-MESKIE-33ml-Rosemi-Paris-nr-304-SAUVAG\",
    \"desc\": \"Stan: Nowy, Marka: inna marka (Rosemi Paris), Pojemność opakowania: 33 ml\"
  },
  {
    \"name\": \"Damskie EUPHORIE Euforia ENPHORIC Eupforia 100ml\",
    \"price\": 54.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/115581/4e5263744171b04718fef4ab7415/Damskie-EUPHORIE-Euforia-ENPHORIC-Eupforia-100ml\",
    \"desc\": \"Stan: Nowy, Marka: Euphonic, Pojemność opakowania: 100 ml\"
  },
  {
    \"name\": \"Perfumy Męskie The Scent BOOS Men Woda 100ml EDT\",
    \"price\": 57.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/110b67/363ca8394f5ab337426c6dcdaf7d/Perfumy-Meskie-The-Scent-BOOS-Men-Woda-100ml-EDT\",
    \"desc\": \"Stan: Nowy, Marka: inna marka (Luca Bossi), Pojemność opakowania: 100 ml\"
  },
  {
    \"name\": \"FERENHIGHT Perfumy Męskie TRWAŁE Mocne EDP 100 ml\",
    \"price\": 69.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1180f5/2dffa6214bd0b279dc6ec89856ca/FERENHIGHT-Perfumy-Meskie-TRWALE-Mocne-EDP-100-ml\",
    \"desc\": \"Stan: Nowy, Marka: Chris Adams, Pojemność opakowania: 100 ml\"
  },
  {
    \"name\": \"Old Spice Bearglove dezodorant w styfcie 6 x 50ml\",
    \"price\": 74.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/118b4c/4e4748e0485d8a9550cb92e2c808/Old-Spice-Bearglove-dezodorant-w-styfcie-6-x-50ml\",
    \"desc\": \"Stan: Nowy, Marka: Old Spice\"
  },
  {
    \"name\": \"Avon_Perceive - Perfumy Damskie EDP - 100ml\",
    \"price\": 42,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a36e/e506211745dba71a5482f0304913/Avon_Perceive-Perfumy-Damskie-EDP-100ml\",
    \"desc\": \"Stan: Nowy, Marka: Avon, Pojemność opakowania: 100 ml\"
  },
  {
    \"name\": \"BLACK OPIUM Perfumy Damskie EDP Mocne TRWAŁE 90 ml\",
    \"price\": 54,
    \"imageURL\": \"https://a.allegroimg.com/s180/11725f/90c9d5d2459288da4435674a47f7/BLACK-OPIUM-Perfumy-Damskie-EDP-Mocne-TRWALE-90-ml\",
    \"desc\": \"Stan: Nowy, Marka: inna marka (Blac Opium), Pojemność opakowania: 85 ml\"
  },
  {
    \"name\": \"Korres Cashmere Kumquat woda toaletowa dla kobiet\",
    \"price\": 118,
    \"imageURL\": \"https://a.allegroimg.com/s180/11795f/dd90abbe43eb9af6311978451121/Korres-Cashmere-Kumquat-woda-toaletowa-dla-kobiet\",
    \"desc\": \"Stan: Nowy, Marka: Korres, Pojemność opakowania: 50 ml\"
  },
  {
    \"name\": \"Carolina Herrera Good Girl Woda perfumowana 80 ml\",
    \"price\": 286.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1175bb/f6c9ac4f4785bfd7407da5838be2/Carolina-Herrera-Good-Girl-Woda-perfumowana-80-ml\",
    \"desc\": \"Stan: Nowy, Marka: Carolina Herrera, Pojemność opakowania: 80 ml\"
  },
  {
    \"name\": \"Kenzo L'eau Kenzo Pour Femme 100ml EDT\",
    \"price\": 188.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/290810/447a40a44e1b9465b32e61712d4a/Kenzo-L-eau-Kenzo-Pour-Femme-100ml-EDT\",
    \"desc\": \"Stan: Nowy, Marka: Kenzo, Pojemność opakowania: 100 ml\"
  },
  {
    \"name\": \"Hugo Boss Woman Extreme 75 ml EDP\",
    \"price\": 141.99,
    \"imageURL\": \"https://7.allegroimg.com/s180/00bd35/56a3ae6b4fa982b005139138e937/Hugo-Boss-Woman-Extreme-75-ml-EDP\",
    \"desc\": \"Stan: Nowy, Marka: Hugo Boss, Pojemność opakowania: 75 ml\"
  },
  {
    \"name\": \"Old Spice Original męski dezodorant spray 6x150ml\",
    \"price\": 74.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11851d/ef6c8dfc42b39141007e5eadc051/Old-Spice-Original-meski-dezodorant-spray-6x150ml\",
    \"desc\": \"Stan: Nowy, Marka: Old Spice\"
  },
  {
    \"name\": \"Perfumy damskie Dossier Floriental Marshmallow 50m\",
    \"price\": 79,
    \"imageURL\": \"https://a.allegroimg.com/s180/11433d/c105871c41afae9b9bf5eb8bd690/Perfumy-damskie-Dossier-Floriental-Marshmallow-50m\",
    \"desc\": \"Stan: Używany, Marka: Dossier, Pojemność opakowania: 50 ml\"
  },
  {
    \"name\": \"Perfumy męskie David Beckham Classic Blue 90 ml\",
    \"price\": 75,
    \"imageURL\": \"https://2.allegroimg.com/s180/038f5e/518b271d4dffabf7f34a808182a2/Perfumy-meskie-David-Beckham-Classic-Blue-90-ml\",
    \"desc\": \"Stan: Nowy, Marka: David Beckham, Pojemność opakowania: 90 ml\"
  },
  {
    \"name\": \"perfumy męskie MEXX BLACK MAN 50ml EDT\",
    \"price\": 82,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b78c/30f48892415cb3637e6c3d12d16a/perfumy-meskie-MEXX-BLACK-MAN-50ml-EDT\",
    \"desc\": \"Stan: Nowy, Marka: Mexx, Pojemność opakowania: 50 ml\"
  },
  {
    \"name\": \"Perfumy Damskie CALVIN KLEIN ETERNITY MOMENT 100 m\",
    \"price\": 199.99,
    \"imageURL\": \"https://7.allegroimg.com/s180/035cdf/de78138e489ea87d97c7053604d7/Perfumy-Damskie-CALVIN-KLEIN-ETERNITY-MOMENT-100-m\",
    \"desc\": \"Stan: Nowy, Marka: Calvin Klein, Pojemność opakowania: 100 ml\"
  },
  {
    \"name\": \"AVON Woda perfumowana INCANDESSENCE 50 ml + GRATIS\",
    \"price\": 26.89,
    \"imageURL\": \"https://a.allegroimg.com/s180/117170/b349e78c4744bb14a05f1e89fb40/AVON-Woda-perfumowana-INCANDESSENCE-50-ml-GRATIS\",
    \"desc\": \"Stan: Nowy, Marka: Avon, Pojemność opakowania: 50 ml\"
  },
  {
    \"name\": \"Chloe Eau de Parfum Woda perfumowana 75 ml\",
    \"price\": 254.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/112746/492d40f64d04a44708fcd4c691df/Chloe-Eau-de-Parfum-Woda-perfumowana-75-ml\",
    \"desc\": \"Stan: Nowy, Marka: Chloé, Pojemność opakowania: 75 ml\"
  },
  {
    \"name\": \"AVON Woda perfumowana INCANDESSENCE 50 ml + GRATIS\",
    \"price\": 26.89,
    \"imageURL\": \"https://a.allegroimg.com/s180/117170/b349e78c4744bb14a05f1e89fb40/AVON-Woda-perfumowana-INCANDESSENCE-50-ml-GRATIS\",
    \"desc\": \"Stan: Nowy, Marka: Avon, Pojemność opakowania: 50 ml\"
  },
  {
    \"name\": \"NOWE MOCNIEJSZE FEROMIST EROTYCZNY ZAPACH +FEROMON\",
    \"price\": 50.38,
    \"imageURL\": \"https://f.allegroimg.com/s180/01e396/25fc784740a7b401c7e36058a59f/NOWE-MOCNIEJSZE-FEROMIST-EROTYCZNY-ZAPACH-FEROMON\",
    \"desc\": \"Stan: Nowy, Marka: LoveStim, Pojemność opakowania: 100 ml\"
  },
  {
    \"name\": \"AVON Full Speed Woda Toaletowa EDT Perfumy Męskie\",
    \"price\": 29.9,
    \"imageURL\": \"https://a.allegroimg.com/s180/11a215/401590e444ccacf3c9e2b2d17fb9/AVON-Full-Speed-Woda-Toaletowa-EDT-Perfumy-Meskie\",
    \"desc\": \"Stan: Nowy, Marka: Avon, Pojemność opakowania: 75 ml\"
  },
  {
    \"name\": \"Trwałe Perfumy 33ml SI Perfumetki 33 ml\",
    \"price\": 9.5,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b277/8cac24894315808e62e62b5dfbe9/Trwale-Perfumy-33ml-SI-Perfumetki-33-ml\",
    \"desc\": \"Stan: Nowy, Marka: inna marka (Twoja Perfumetka), Pojemność opakowania: 33 ml\"
  },
  {
    \"name\": \"PRAWDZIWE URZEKAJĘCE MĘSKIE PERFUMY DELUXE 121 VIP\",
    \"price\": 59.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d863/a0f5dc204f17a6b37f79aff05111/PRAWDZIWE-URZEKAJECE-MESKIE-PERFUMY-DELUXE-121-VIP\",
    \"desc\": \"Stan: Nowy, Marka: inna marka (Shirley May Deluxe), Pojemność opakowania: 100 ml\"
  }
]`);

const c = gifts as BaseGift[];

export default c;
