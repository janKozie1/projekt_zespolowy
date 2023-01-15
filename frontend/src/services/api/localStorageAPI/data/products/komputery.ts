import type { BaseGift } from '../gifts';

const gifts: unknown = JSON.parse(`[
  {
    \"name\": \"KOMPUTER CORE I7 4X 3,9GHZ 16GB 500SSD WIN10 MOCNY\",
    \"price\": 1869.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1117de/3d24aea84b729ac2074f33a1cc14/KOMPUTER-CORE-I7-4X-3-9GHZ-16GB-500SSD-WIN10-MOCNY\",
    \"desc\": \"Seria: Intel Core i7, Wielkość pamięci RAM: 16 GB, Pojemność dysku: 500 GB, Chipset karty graficznej: HD Graphics 4000\"
  },
  {
    \"name\": \"MAŁY SZYBKI KOMPUTER PC i3-7GEN 8GB 120 SSD W10\",
    \"price\": 449,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b35f/2e59eafd4614958b612555e61269/MALY-SZYBKI-KOMPUTER-PC-i3-7GEN-8GB-120-SSD-W10\",
    \"desc\": \"Seria: Intel Core i3, Wielkość pamięci RAM: 8 GB, Pojemność dysku: 120 GB, Chipset karty graficznej: UHD Graphics 630\"
  },
  {
    \"name\": \"Hp 11 Chromebook 4GB|LIMITOWANY|HDMI|BAT5h|16GB\",
    \"price\": 249,
    \"imageURL\": \"https://a.allegroimg.com/s180/117907/0a6ce67744a4a1ff889d09785ae4/Hp-11-Chromebook-4GB-LIMITOWANY-HDMI-BAT5h-16GB\",
    \"desc\": \"Stan: Używany, Przekątna ekranu: 11.6\\\", Seria procesora: Intel Celeron N, Typ dysku twardego: eMMC\"
  },
  {
    \"name\": \"Laptop Lenovo T440 |Core i5 | 16GB | 512ssd | W10\",
    \"price\": 1264,
    \"imageURL\": \"https://a.allegroimg.com/s180/117304/1239521e4568bb9515e7e5952fba/Laptop-Lenovo-T440-Core-i5-16GB-512ssd-W10\",
    \"desc\": \"Stan: Używany, Przekątna ekranu: 14\\\", Seria procesora: Intel Core i5, Typ dysku twardego: SSD\"
  },
  {
    \"name\": \"Tablet Lenovo ThinkPad 10 4GB Win 10 IPS HDMI WiFi\",
    \"price\": 399,
    \"imageURL\": \"https://a.allegroimg.com/s180/11fe61/3823f1314091b18dc7a4c1625daa/Tablet-Lenovo-ThinkPad-10-4GB-Win-10-IPS-HDMI-WiFi\",
    \"desc\": \"Przekątna ekranu: 10.1\\\", Wbudowana pamięć: 64 GB, Pamięć RAM: 4 GB\"
  },
  {
    \"name\": \"KOMPUTER CORE I7 4X 3,9GHZ 16GB 500SSD WIN10 MOCNY\",
    \"price\": 1869.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1117de/3d24aea84b729ac2074f33a1cc14/KOMPUTER-CORE-I7-4X-3-9GHZ-16GB-500SSD-WIN10-MOCNY\",
    \"desc\": \"Seria: Intel Core i7, Wielkość pamięci RAM: 16 GB, Pojemność dysku: 500 GB, Chipset karty graficznej: HD Graphics 4000\"
  },
  {
    \"name\": \"SZYBKI CORE I7 4X 3,9GHZ 16GB 500SSD DVD WINDOWS10\",
    \"price\": 1299,
    \"imageURL\": \"https://3.allegroimg.com/s180/0394fa/5f687aaf4716b578f825162da963/SZYBKI-CORE-I7-4X-3-9GHZ-16GB-500SSD-DVD-WINDOWS10\",
    \"desc\": \"Seria: Intel Core i7, Wielkość pamięci RAM: 16 GB, Pojemność dysku: 500 GB, Chipset karty graficznej: HD Graphics 4000\"
  },
  {
    \"name\": \"Laptop Asus Chromebook Intel N 15,6 FHD 196GB PL\",
    \"price\": 942,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d6b4/7c971034432b94edd35892687fb4/Laptop-Asus-Chromebook-Intel-N-15-6-FHD-196GB-PL\",
    \"desc\": \"Stan: Po zwrocie, Przekątna ekranu: 15.6\\\", Seria procesora: Intel Celeron N, Typ dysku twardego: eMMC\"
  },
  {
    \"name\": \"Laptop Lenovo T450 i5-gen 8GB 240GB SSD Windows 10\",
    \"price\": 549,
    \"imageURL\": \"https://a.allegroimg.com/s180/111151/c457a7304e5bafd3a85b7aefddd4/Laptop-Lenovo-T450-i5-gen-8GB-240GB-SSD-Windows-10\",
    \"desc\": \"Stan: Używany, Przekątna ekranu: 14\\\", Seria procesora: Intel Core i5, Typ dysku twardego: SSD\"
  },
  {
    \"name\": \"Akumulator VRLA AGM 100Ah Volt Polska ups kampera\",
    \"price\": 689,
    \"imageURL\": \"https://a.allegroimg.com/s180/117fdc/38e7474045e98d487c4a8a3f552e/Akumulator-VRLA-AGM-100Ah-Volt-Polska-ups-kampera\",
    \"desc\": \"Stan: Nowy, Napięcie: 12 V, Pojemność: 100 Ah\"
  },
  {
    \"name\": \"Karta graficzna Afox Radeon RX 580 8GB GDDR5\",
    \"price\": 388.88,
    \"imageURL\": \"https://a.allegroimg.com/s180/113c23/e2a0ce094ad1a17cf17f0480dbbd/Karta-graficzna-Afox-Radeon-RX-580-8GB-GDDR5\",
    \"desc\": \"Seria: Radeon RX 5xx, Pamięć: 8 GB, Rodzaj pamięci: GDDR5, Szyna pamięci: 256-bit\"
  },
  {
    \"name\": \"PRITOM 10\\\" Tablet, Android 10 WiFi 32GB GPS\",
    \"price\": 368.98,
    \"imageURL\": \"https://a.allegroimg.com/s180/11734b/c9a2886249ba8423f6dd047d1877/PRITOM-10-Tablet-Android-10-WiFi-32GB-GPS\",
    \"desc\": \"Przekątna ekranu: 10\\\", Wbudowana pamięć: 32 GB, Pamięć RAM: 2 GB\"
  },
  {
    \"name\": \"Ultrabook DELL 7480 * 1920x1080 * 16GB * 500GB SSD\",
    \"price\": 1624.75,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b4e1/237d7ca343f79da36766a3e43b7e/Ultrabook-DELL-7480-1920x1080-16GB-500GB-SSD\",
    \"desc\": \"Stan: Używany, Przekątna ekranu: 14\\\", Seria procesora: Intel Core i5, Typ dysku twardego: SSD\"
  },
  {
    \"name\": \"VANWIN TABLET Android11 10,1'HD GPS 4G LTE WiFi\",
    \"price\": 636.49,
    \"imageURL\": \"https://a.allegroimg.com/s180/11f434/16d4d7964c3ca139ffc1d8d39b09/VANWIN-TABLET-Android11-10-1-HD-GPS-4G-LTE-WiFi\",
    \"desc\": \"Przekątna ekranu: 10.1\\\", Wbudowana pamięć: 64 GB, Pamięć RAM: 4 GB\"
  },
  {
    \"name\": \"URZĄDZENIE Epson EcoTank ET-2710 WIFI\",
    \"price\": 649,
    \"imageURL\": \"https://a.allegroimg.com/s180/115ba2/2e30f8df4bbb9d227e646e7a2077/URZADZENIE-Epson-EcoTank-ET-2710-WIFI\",
    \"desc\": \"Stan: Powystawowy, Marka: Epson, Technologia druku: atramentowa (kolor), Maksymalny format papieru: A4\"
  },
  {
    \"name\": \"Asrock Radeon RX5600 Challenger D 6GB CLD Bulk\",
    \"price\": 799.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/114184/62460c964053a5bf0a5777edaf94/Asrock-Radeon-RX5600-Challenger-D-6GB-CLD-Bulk\",
    \"desc\": \"Seria: Radeon RX 5xxx, Pamięć: 6 GB, Rodzaj pamięci: GDDR6, Szyna pamięci: 192-bit\"
  },
  {
    \"name\": \"Dell Latitude 5480 |i5-6200 |FHD| 16GB| 512GB |W11\",
    \"price\": 1242,
    \"imageURL\": \"https://a.allegroimg.com/s180/113483/4cdaf5394cfcad8050d8b0358517/Dell-Latitude-5480-i5-6200-FHD-16GB-512GB-W11\",
    \"desc\": \"Stan: Używany, Przekątna ekranu: 14\\\", Seria procesora: Intel Core i5, Typ dysku twardego: SSD\"
  },
  {
    \"name\": \"TABLET 10,1'HD Android11 WiFi 4GLET dziecko VANWIN\",
    \"price\": 604.66,
    \"imageURL\": \"https://a.allegroimg.com/s180/1118e9/619c2ed64ebf9cf05b7223a4f161/TABLET-10-1-HD-Android11-WiFi-4GLET-dziecko-VANWIN\",
    \"desc\": \"Przekątna ekranu: 10.1\\\", Wbudowana pamięć: 64 GB, Pamięć RAM: 4 GB\"
  },
  {
    \"name\": \"TOSHIBA DYSK PRZENOŚNY ZEWNĘTRZNY 1TB 1000GB 2,5''\",
    \"price\": 149.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1123e2/744eff4841e282ca9c897140af7d/TOSHIBA-DYSK-PRZENOSNY-ZEWNETRZNY-1TB-1000GB-2-5\",
    \"desc\": \"Interfejs: USB 2.0, Pojemność dysku: 1TB, Rodzaj dysku: HDD\"
  },
  {
    \"name\": \"Hp 11 Chromebook 4GB|LIMITOWANY|HDMI|BAT5h|16GB\",
    \"price\": 229,
    \"imageURL\": \"https://a.allegroimg.com/s180/111062/f27be59f460a8899e7a9437118fc/Hp-11-Chromebook-4GB-LIMITOWANY-HDMI-BAT5h-16GB\",
    \"desc\": \"Stan: Używany, Przekątna ekranu: 11.6\\\", Seria procesora: Intel Celeron N, Typ dysku twardego: eMMC\"
  },
  {
    \"name\": \"DYSK PRZENOŚNY ZEWNĘTRZNY 500GB 2,5'' SATA III 6GB\",
    \"price\": 59,
    \"imageURL\": \"https://a.allegroimg.com/s180/03ccf4/2d874f954a15afd5775d298c0aa8/DYSK-PRZENOSNY-ZEWNETRZNY-500GB-2-5-SATA-III-6GB\",
    \"desc\": \"Interfejs: USB 3.0, Pojemność dysku: 500GB, Rodzaj dysku: HDD\"
  },
  {
    \"name\": \"TABLET 10,1'HD Android11 WiFi 4GLET dziecko VANWIN\",
    \"price\": 604.66,
    \"imageURL\": \"https://a.allegroimg.com/s180/1118e9/619c2ed64ebf9cf05b7223a4f161/TABLET-10-1-HD-Android11-WiFi-4GLET-dziecko-VANWIN\",
    \"desc\": \"Przekątna ekranu: 10.1\\\", Wbudowana pamięć: 64 GB, Pamięć RAM: 4 GB\"
  },
  {
    \"name\": \"LAPTOP ACER 4 RDZENIOWY 12GB SSD512 Win10\",
    \"price\": 1799,
    \"imageURL\": \"https://a.allegroimg.com/s180/115e10/0c9bd64a467098b98d1088bfe912/LAPTOP-ACER-4-RDZENIOWY-12GB-SSD512-Win10\",
    \"desc\": \"Stan: Nowy, Przekątna ekranu: 15.6\\\", Seria procesora: Intel Celeron Quad Core, Typ dysku twardego: SSD\"
  },
  {
    \"name\": \"Laptop Asus Chromebook Intel N 15,6 FHD 320 GB PL\",
    \"price\": 1030,
    \"imageURL\": \"https://a.allegroimg.com/s180/1176b4/59f0137f4614a9e44f715c9a6116/Laptop-Asus-Chromebook-Intel-N-15-6-FHD-320-GB-PL\",
    \"desc\": \"Stan: Po zwrocie, Przekątna ekranu: 15.6\\\", Seria procesora: Intel Celeron N, Typ dysku twardego: eMMC\"
  },
  {
    \"name\": \"ThinkPad T470|i5 -6300U|IPS FHD|8GB|NV 256SSD|2Bat\",
    \"price\": 1447.24,
    \"imageURL\": \"https://a.allegroimg.com/s180/11374f/ad0fcba94fa482da016dd760abc8/ThinkPad-T470-i5-6300U-IPS-FHD-8GB-NV-256SSD-2Bat\",
    \"desc\": \"Stan: Używany, Przekątna ekranu: 14\\\", Seria procesora: Intel Core i5, Typ dysku twardego: SSD\"
  },
  {
    \"name\": \"Laptop Lenovo T440 |Core i5 | 16GB | 512ssd | W10\",
    \"price\": 1264,
    \"imageURL\": \"https://a.allegroimg.com/s180/117304/1239521e4568bb9515e7e5952fba/Laptop-Lenovo-T440-Core-i5-16GB-512ssd-W10\",
    \"desc\": \"Stan: Używany, Przekątna ekranu: 14\\\", Seria procesora: Intel Core i5, Typ dysku twardego: SSD\"
  },
  {
    \"name\": \"Huawei MediaPad T3 8\\\" 2GB/16GB WIFI LTE\",
    \"price\": 239.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/117a11/f0603b114bc388ed3a9d8b5132d2/Huawei-MediaPad-T3-8-2GB-16GB-WIFI-LTE\",
    \"desc\": \"Przekątna ekranu: 8\\\", Wbudowana pamięć: 16 GB, Pamięć RAM: 2 GB\"
  },
  {
    \"name\": \"Asus TUF GAMING Radeon RX 6700 XT 12GB OC GDDR6\",
    \"price\": 1699,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c7e8/8222db794eddb1537f4a49f3cb1c/Asus-TUF-GAMING-Radeon-RX-6700-XT-12GB-OC-GDDR6\",
    \"desc\": \"Seria: Radeon RX 6xxx, Pamięć: 12 GB, Rodzaj pamięci: GDDR6, Bazowe taktowanie rdzenia: 16000 MHz, Szyna pamięci: 256-bit\"
  },
  {
    \"name\": \"Kamera Zewnętrzna Obrotowa WiFi 2MP FULL HD 4xZoom\",
    \"price\": 169.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/119bbd/36da46ad4a308c1089273daa187e/Kamera-Zewnetrzna-Obrotowa-WiFi-2MP-FULL-HD-4xZoom\",
    \"desc\": \"Stan: Nowy, Marka: Zintronic\"
  },
  {
    \"name\": \"Ultrabook Lenovo X i5 16GB 256 SSD Włókno szklane\",
    \"price\": 899,
    \"imageURL\": \"https://a.allegroimg.com/s180/11df1a/f55730e94f5588bced80adace7c7/Ultrabook-Lenovo-X-i5-16GB-256-SSD-Wlokno-szklane\",
    \"desc\": \"Stan: Używany, Przekątna ekranu: 12.5\\\", Seria procesora: Intel Core i5, Typ dysku twardego: SSD\"
  },
  {
    \"name\": \"Laptop Lenovo X240 i5 4GB 120GB SSD Windows 10\",
    \"price\": 425,
    \"imageURL\": \"https://a.allegroimg.com/s180/11faa1/451b43ea4ac0a28a02a7306c99f7/Laptop-Lenovo-X240-i5-4GB-120GB-SSD-Windows-10\",
    \"desc\": \"Stan: Używany, Przekątna ekranu: 12.5\\\", Seria procesora: Intel Core i5, Typ dysku twardego: SSD\"
  },
  {
    \"name\": \"Dell 11 Chromebook 3120|16GB|4GB|HDMI|WiFi|Kamera\",
    \"price\": 199,
    \"imageURL\": \"https://a.allegroimg.com/s180/115cd6/e99ce1f54ed580f862ba297eff43/Dell-11-Chromebook-3120-16GB-4GB-HDMI-WiFi-Kamera\",
    \"desc\": \"Stan: Używany, Przekątna ekranu: 11.6\\\", Seria procesora: Intel Celeron N, Typ dysku twardego: SSD\"
  },
  {
    \"name\": \"MAŁY SZYBKI KOMPUTER PC i3-7GEN 8GB 120 SSD W10\",
    \"price\": 449,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b35f/2e59eafd4614958b612555e61269/MALY-SZYBKI-KOMPUTER-PC-i3-7GEN-8GB-120-SSD-W10\",
    \"desc\": \"Seria: Intel Core i3, Wielkość pamięci RAM: 8 GB, Pojemność dysku: 120 GB, Chipset karty graficznej: UHD Graphics 630\"
  },
  {
    \"name\": \"HP EliteBook 840 G3 i5-6300U 16GB 240SSD FHD W10\",
    \"price\": 999,
    \"imageURL\": \"https://a.allegroimg.com/s180/11f293/c26fdbcc4edc974c32c8d526896c/HP-EliteBook-840-G3-i5-6300U-16GB-240SSD-FHD-W10\",
    \"desc\": \"Stan: Używany, Przekątna ekranu: 14\\\", Seria procesora: Intel Core i5, Typ dysku twardego: SSD\"
  },
  {
    \"name\": \"Karta graficzna MSI RTX 3060 Gaming Z Trio 12GB\",
    \"price\": 1729,
    \"imageURL\": \"https://a.allegroimg.com/s180/11783b/836703d14b41a636ec49453efb92/Karta-graficzna-MSI-RTX-3060-Gaming-Z-Trio-12GB\",
    \"desc\": \"Seria: GeForce RTX 3xxx, Pamięć: 12 GB, Rodzaj pamięci: GDDR6, Bazowe taktowanie rdzenia: 16000 MHz, Szyna pamięci: 192-bit\"
  },
  {
    \"name\": \"Komputer Dell Vostro 260 MT i5 8GB 256GB SSD W10\",
    \"price\": 365,
    \"imageURL\": \"https://a.allegroimg.com/s180/112f45/0e1612be492d9cc250c5dd74cb39/Komputer-Dell-Vostro-260-MT-i5-8GB-256GB-SSD-W10\",
    \"desc\": \"Seria: Intel Core i5, Wielkość pamięci RAM: 8 GB, Pojemność dysku: 256 GB, Chipset karty graficznej: HD Graphics 2000\"
  },
  {
    \"name\": \"Dysk przenośny zewnętrzny 500GB USB 2,5 pendrive\",
    \"price\": 54,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b552/ff7af73d4758848e46bf6fd3d58f/Dysk-przenosny-zewnetrzny-500GB-USB-2-5-pendrive\",
    \"desc\": \"Interfejs: USB 2.0, Pojemność dysku: 500GB, Rodzaj dysku: HDD\"
  },
  {
    \"name\": \"Hp Chromebook 11 G8 AMD|32GB|USB C|DDR4|17MSC GWAR\",
    \"price\": 299,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ef3d/f09f4319447da99c54c84d8f14ee/Hp-Chromebook-11-G8-AMD-32GB-USB-C-DDR4-17MSC-GWAR\",
    \"desc\": \"Stan: Używany, Przekątna ekranu: 11.6\\\", Seria procesora: AMD A4, Typ dysku twardego: eMMC\"
  },
  {
    \"name\": \"Komputer Dell Vostro 260 MT i7 16GB 512GB SSD W10\",
    \"price\": 690,
    \"imageURL\": \"https://a.allegroimg.com/s180/112f45/0e1612be492d9cc250c5dd74cb39/Komputer-Dell-Vostro-260-MT-i7-16GB-512GB-SSD-W10\",
    \"desc\": \"Seria: Intel Core i7, Wielkość pamięci RAM: 16 GB, Pojemność dysku: 512 GB, Chipset karty graficznej: HD Graphics 2000\"
  },
  {
    \"name\": \"Dysk SSD ADATA Ultimate SU650 240GB SATA III 2,5''\",
    \"price\": 71.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/25fe39/796974fa494395ee58f5f6c6536a/Dysk-SSD-ADATA-Ultimate-SU650-240GB-SATA-III-2-5\",
    \"desc\": \"Format dysku: 2,5\\\", Pojemność dysku: 240GB, Interfejs: SATA III\"
  },
  {
    \"name\": \"CUBOT TABLET TAB10 10,1\\\" 4/64GB LTE GPS FULL\",
    \"price\": 664.05,
    \"imageURL\": \"https://a.allegroimg.com/s180/11f31e/a9c15a394491987b3ee6fd8420ae/CUBOT-TABLET-TAB10-10-1-4-64GB-LTE-GPS-FULL\",
    \"desc\": \"Przekątna ekranu: 10.1\\\", Wbudowana pamięć: 64 GB, Pamięć RAM: 4 GB\"
  },
  {
    \"name\": \"SZYBKI CORE I7 4X 3,9GHZ 16GB 500SSD DVD WINDOWS10\",
    \"price\": 1299,
    \"imageURL\": \"https://3.allegroimg.com/s180/0394fa/5f687aaf4716b578f825162da963/SZYBKI-CORE-I7-4X-3-9GHZ-16GB-500SSD-DVD-WINDOWS10\",
    \"desc\": \"Seria: Intel Core i7, Wielkość pamięci RAM: 16 GB, Pojemność dysku: 500 GB, Chipset karty graficznej: HD Graphics 4000\"
  },
  {
    \"name\": \"FOTEL SL-21 GAMINGOWY KUBEŁKOWY GRACZA\",
    \"price\": 339,
    \"imageURL\": \"https://a.allegroimg.com/s180/11cbc9/3a6a23b542a1bc0cf235b273d333/FOTEL-SL-21-GAMINGOWY-KUBELKOWY-GRACZA\",
    \"desc\": \"Stan: Nowy, Marka: ASL, Wysokość mebla: 126 cm, Szerokość mebla: 65 cm, Głębokość mebla: 62 cm, Głębokość siedziska: 1 cm, Obciążenie maksymalne: 100 kg\"
  },
  {
    \"name\": \"Dysk Twardy 4TB SEAGATE 4000GB SATA 3 128GB CACHE\",
    \"price\": 250,
    \"imageURL\": \"https://a.allegroimg.com/s180/1154f7/8ded4bb64b209c994a5b113fdf55/Dysk-Twardy-4TB-SEAGATE-4000GB-SATA-3-128GB-CACHE\",
    \"desc\": \"Format dysku: 3,5\\\", Pojemność dysku: 4TB, Interfejs: SATA III\"
  },
  {
    \"name\": \"ZEWNĘTRZNA OBROTOWA KAMERA IP WIFI 8MPX 4X ZOOM PL\",
    \"price\": 299,
    \"imageURL\": \"https://a.allegroimg.com/s180/11639c/bee1a51646719b87d9d7023e19b6/ZEWNETRZNA-OBROTOWA-KAMERA-IP-WIFI-8MPX-4X-ZOOM-PL\",
    \"desc\": \"Stan: Nowy, Marka: DSB\"
  },
  {
    \"name\": \"Zewnętrzna Kamera IP WiFi 8MPx Bezprzewodowa SD\",
    \"price\": 259,
    \"imageURL\": \"https://a.allegroimg.com/s180/11246e/8cfa33c4443a94b688bd87747e44/Zewnetrzna-Kamera-IP-WiFi-8MPx-Bezprzewodowa-SD\",
    \"desc\": \"Stan: Nowy, Marka: DSB\"
  },
  {
    \"name\": \"Mini komputer HP 4x2,8GH 8GB DDR4 256SSD Radeon R7\",
    \"price\": 479,
    \"imageURL\": \"https://a.allegroimg.com/s180/114844/5bc4ae904cef9a3cfc3f149b71cf/Mini-komputer-HP-4x2-8GH-8GB-DDR4-256SSD-Radeon-R7\",
    \"desc\": \"Seria: AMD A10, Wielkość pamięci RAM: 8 GB, Pojemność dysku: 256 GB, Chipset karty graficznej: inny\"
  },
  {
    \"name\": \"Monitor gamingowy 24\\\" CHiQ IPS 24P626F FullHD\",
    \"price\": 529,
    \"imageURL\": \"https://a.allegroimg.com/s180/11021a/6874ce5f4ccca51daf27290f7e27/Monitor-gamingowy-24-CHiQ-IPS-24P626F-FullHD\",
    \"desc\": \"Rodzaj podświetlania: LED, Przekątna ekranu (cale): 24\\\", Rozdzielczość natywna: 1920 x 1080 px, Typ matrycy: IPS / PLS\"
  },
  {
    \"name\": \"Tablet K50 10.1\\\" 4G 64G WI-FI Androd 8.1 LTE\",
    \"price\": 563,
    \"imageURL\": \"https://a.allegroimg.com/s180/11774f/af80f751499dace88203057160cc/Tablet-K50-10-1-4G-64G-WI-FI-Androd-8-1-LTE\",
    \"desc\": \"Przekątna ekranu: 10\\\", Wbudowana pamięć: 64 GB, Pamięć RAM: 4 GB\"
  },
  {
    \"name\": \"KLAWIATURA MECHANICZNA GAMINGOWA PODŚWIETLANA USB\",
    \"price\": 59.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/11bbe0/cd6744b7470590071982287e26d2/KLAWIATURA-MECHANICZNA-GAMINGOWA-PODSWIETLANA-USB\",
    \"desc\": \"Stan: Nowy, Typ klawiatury: mechaniczna, Interfejs: USB\"
  },
  {
    \"name\": \"Tablet LENOVO Tab M8 Wi-Fi Iron Grey 2/32 GB\",
    \"price\": 449,
    \"imageURL\": \"https://a.allegroimg.com/s180/11d971/974f0f2142028d9e37734d617220/Tablet-LENOVO-Tab-M8-Wi-Fi-Iron-Grey-2-32-GB\",
    \"desc\": \"Przekątna ekranu: 8\\\", Wbudowana pamięć: 32 GB, Pamięć RAM: 2 GB\"
  },
  {
    \"name\": \"LAPTOP ACER 4 RDZENIOWY 8GB SSD256 Win10\",
    \"price\": 1461.49,
    \"imageURL\": \"https://a.allegroimg.com/s180/115e10/0c9bd64a467098b98d1088bfe912/LAPTOP-ACER-4-RDZENIOWY-8GB-SSD256-Win10\",
    \"desc\": \"Stan: Nowy, Przekątna ekranu: 15.6\\\", Seria procesora: Intel Celeron Quad Core, Typ dysku twardego: SSD\"
  },
  {
    \"name\": \"Dysk zewnętrzny przenośny 500GB USB 3.0\",
    \"price\": 60,
    \"imageURL\": \"https://a.allegroimg.com/s180/11616e/cccbbfea490a849d2afdfa29ead4/Dysk-zewnetrzny-przenosny-500GB-USB-3-0\",
    \"desc\": \"Interfejs: USB 3.0, Pojemność dysku: 500GB, Rodzaj dysku: HDD\"
  },
  {
    \"name\": \"Tablet LENOVO Yoga Tab 11 YT-J706 11'' 8/256 GB\",
    \"price\": 1699.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/111465/96a312aa451b9e40a624b8183c19/Tablet-LENOVO-Yoga-Tab-11-YT-J706-11-8-256-GB\",
    \"desc\": \"Przekątna ekranu: 11\\\", Wbudowana pamięć: 256 GB, Pamięć RAM: 8 GB\"
  },
  {
    \"name\": \"Myszka Mysz Bezprzewodowa Komputerowa Defender\",
    \"price\": 25,
    \"imageURL\": \"https://a.allegroimg.com/s180/11c505/03f3b3cc4d6d80c33149156034c9/Myszka-Mysz-Bezprzewodowa-Komputerowa-Defender\",
    \"desc\": \"Stan: Nowy, Sensor: optyczny, Interfejs: USB (Radio 2.4 GHz)\"
  },
  {
    \"name\": \"Tablet SAMSUNG Galaxy Tab A7 Lite 3-32 GB Wi-Fi\",
    \"price\": 599,
    \"imageURL\": \"https://a.allegroimg.com/s180/110acd/689f869240a988343b9a27838b18/Tablet-SAMSUNG-Galaxy-Tab-A7-Lite-3-32-GB-Wi-Fi\",
    \"desc\": \"Przekątna ekranu: 8.7\\\", Wbudowana pamięć: 32 GB, Pamięć RAM: 3 GB\"
  },
  {
    \"name\": \"Komputer HP 3400 Intel i5 16GB RAM 512GB SSD Win10\",
    \"price\": 537,
    \"imageURL\": \"https://a.allegroimg.com/s180/116c0e/6ba92a874f53b9fcd6e11d30acbf/Komputer-HP-3400-Intel-i5-16GB-RAM-512GB-SSD-Win10\",
    \"desc\": \"Seria: Intel Core i5, Wielkość pamięci RAM: 16 GB, Pojemność dysku: 512 GB\"
  },
  {
    \"name\": \"Drukarka Skaner 3w1 HP DESKJET 2710 WiFi + ZESTAW\",
    \"price\": 309,
    \"imageURL\": \"https://a.allegroimg.com/s180/117739/7d3c4ff64a509ef26f81763ff041/Drukarka-Skaner-3w1-HP-DESKJET-2710-WiFi-ZESTAW\",
    \"desc\": \"Stan: Nowy, Marka: HP, Technologia druku: atramentowa (kolor), Maksymalny format papieru: A4\"
  },
  {
    \"name\": \"Huawei MediaPad M5 Lite 8\\\" 3GB 32GB LTE\",
    \"price\": 337.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1113d8/de23858144daad111b3ada43db4e/Huawei-MediaPad-M5-Lite-8-3GB-32GB-LTE\",
    \"desc\": \"Przekątna ekranu: 8\\\", Wbudowana pamięć: 32 GB, Pamięć RAM: 3 GB\"
  },
  {
    \"name\": \"Dysk SSD GOODRAM PX500 1TB M.2 PCIe NVMe M.2\",
    \"price\": 281.32,
    \"imageURL\": \"https://a.allegroimg.com/s180/11f26f/32ad5f4b4eb3a77d8a9fdf17b520/Dysk-SSD-GOODRAM-PX500-1TB-M-2-PCIe-NVMe-M-2\",
    \"desc\": \"Format dysku: M.2, Pojemność dysku: inna (1000), Interfejs: M.2 PCIe\"
  },
  {
    \"name\": \"TABLET 10IPS HD 6,4GHZ 32GB HDMI WIFI BT 3G KAMERA\",
    \"price\": 194,
    \"imageURL\": \"https://f.allegroimg.com/s180/0198fe/6484143c49249f2cc63f9464a95f/TABLET-10IPS-HD-6-4GHZ-32GB-HDMI-WIFI-BT-3G-KAMERA\",
    \"desc\": \"Przekątna ekranu: 10.1\\\", Wbudowana pamięć: 16 GB, Pamięć RAM: 2 GB\"
  },
  {
    \"name\": \"Laptop Dell Latitude i5 8GB 256GB M.2 Windows 11\",
    \"price\": 555,
    \"imageURL\": \"https://a.allegroimg.com/s180/114f90/98e4f8fc4ff28f21ad6378c0df81/Laptop-Dell-Latitude-i5-8GB-256GB-M-2-Windows-11\",
    \"desc\": \"Stan: Używany, Przekątna ekranu: 12.5\\\", Seria procesora: Intel Core i5, Typ dysku twardego: SSD\"
  },
  {
    \"name\": \"DYSK PRZENOŚNY ZEWNĘTRZNY 1TB 1000GB 2,5'' TOSHIBA\",
    \"price\": 165,
    \"imageURL\": \"https://a.allegroimg.com/s180/0322b3/4f422c85464db8ae23558552e234/DYSK-PRZENOSNY-ZEWNETRZNY-1TB-1000GB-2-5-TOSHIBA\",
    \"desc\": \"Interfejs: USB 3.0, Pojemność dysku: 1TB, Rodzaj dysku: HDD\"
  },
  {
    \"name\": \"Dell Latitude 7280 i5 16GB 512GB SSD FullHD W10\",
    \"price\": 999,
    \"imageURL\": \"https://a.allegroimg.com/s180/110cb6/ed476fde45699ee918b7d0547cfe/Dell-Latitude-7280-i5-16GB-512GB-SSD-FullHD-W10\",
    \"desc\": \"Stan: Używany, Przekątna ekranu: 12.5\\\", Seria procesora: Intel Core i5, Typ dysku twardego: SSD\"
  },
  {
    \"name\": \"Lenovo ThinkPad T480 i5 8.gen 16GB 512 IPS SSD W11\",
    \"price\": 1649,
    \"imageURL\": \"https://a.allegroimg.com/s180/11afcc/97a12eee4788a6f774c384819bc9/Lenovo-ThinkPad-T480-i5-8-gen-16GB-512-IPS-SSD-W11\",
    \"desc\": \"Stan: Używany, Przekątna ekranu: 14\\\", Seria procesora: Intel Core i5, Typ dysku twardego: SSD\"
  },
  {
    \"name\": \"LAPTOP Dell Latitude 5480 i5-7300U/16/256/W10 FHD\",
    \"price\": 1299,
    \"imageURL\": \"https://a.allegroimg.com/s180/1182d7/1985ba434bd6950e9aaf83c52c5b/LAPTOP-Dell-Latitude-5480-i5-7300U-16-256-W10-FHD\",
    \"desc\": \"Stan: Powystawowy, Przekątna ekranu: 14\\\", Seria procesora: Intel Core i5, Typ dysku twardego: SSD\"
  },
  {
    \"name\": \"Router TP-LINK Archer C6 WiFi 5GHz 4x LAN 802.11ac\",
    \"price\": 169.99,
    \"imageURL\": \"https://a.allegroimg.com/s180/1192b8/a49c1eb54f70afa89e5c957143bf/Router-TP-LINK-Archer-C6-WiFi-5GHz-4x-LAN-802-11ac\",
    \"desc\": \"Stan: Nowy, Pasmo: 2,4 GHz, 5 GHz, Wbudowany modem: brak modemu\"
  },
  {
    \"name\": \"FOTEL BIUROWY GAMINGOWY KRZESŁO DLA GRACZA\",
    \"price\": 328,
    \"imageURL\": \"https://a.allegroimg.com/s180/113c2b/66cca1f54615bef274b6b68addee/FOTEL-BIUROWY-GAMINGOWY-KRZESLO-DLA-GRACZA\",
    \"desc\": \"Stan: Nowy, Marka: inna, Wysokość mebla: 114 cm, Szerokość mebla: 57 cm, Głębokość mebla: 51 cm, Głębokość siedziska: 51 cm\"
  },
  {
    \"name\": \"ACER GATEWAY 15,6 FHD Ryzen7 8GB 512GB SSD WIN11\",
    \"price\": 1988,
    \"imageURL\": \"https://a.allegroimg.com/s180/11bcc8/023722dd49e88db2c86ba5486109/ACER-GATEWAY-15-6-FHD-Ryzen7-8GB-512GB-SSD-WIN11\",
    \"desc\": \"Stan: Po zwrocie, Przekątna ekranu: 15.6\\\", Seria procesora: AMD Ryzen 7, Typ dysku twardego: SSD\"
  },
  {
    \"name\": \"Ultrabook HP Elitebook 840 G3 i5 8GB 256GB SSD W10\",
    \"price\": 779,
    \"imageURL\": \"https://a.allegroimg.com/s180/11ce36/b988676f4a5a9a7dd22e17f2bd42/Ultrabook-HP-Elitebook-840-G3-i5-8GB-256GB-SSD-W10\",
    \"desc\": \"Stan: Używany, Przekątna ekranu: 14\\\", Seria procesora: Intel Core i5, Typ dysku twardego: SSD\"
  },
  {
    \"name\": \"Dysk przenośny zewnętrzny 500GB USB 2,5 pendrive\",
    \"price\": 54,
    \"imageURL\": \"https://a.allegroimg.com/s180/11b552/ff7af73d4758848e46bf6fd3d58f/Dysk-przenosny-zewnetrzny-500GB-USB-2-5-pendrive\",
    \"desc\": \"Interfejs: USB 2.0, Pojemność dysku: 500GB, Rodzaj dysku: HDD\"
  },
  {
    \"name\": \"Lenovo ThinkPad T480 i5 8.gen 16GB 512 IPS SSD W11\",
    \"price\": 1649,
    \"imageURL\": \"https://a.allegroimg.com/s180/11afcc/97a12eee4788a6f774c384819bc9/Lenovo-ThinkPad-T480-i5-8-gen-16GB-512-IPS-SSD-W11\",
    \"desc\": \"Stan: Używany, Przekątna ekranu: 14\\\", Seria procesora: Intel Core i5, Typ dysku twardego: SSD\"
  }
]`);

const c = gifts as BaseGift[];

export default c;
