
// dict , json

let user = {
    "ad" : "Atakan",
    "soyad": "Genç",
    "yas": 32,
    "adres": {
        "sehir":"istanbul",
        "ilce": "şişli"
    },
    "hobiler": ["yazilim","sinema"]
}

let user1 = {
    "ad" : "Ateş",
    "soyad": "Özateş",
    "yas": 35,
    "adres": {
        "sehir":"istanbul",
        "ilce": "şişli"
    },
    "hobiler": ["yazilim","sinema"]
}

let sonuc;

//sonuc = user.adres;
//sonuc = user["ad"];
//sonuc = user.adres.sehir;
//sonuc = user["adres"]["sehir"];
//sonuc = user.hobiler[1];

let kullanicilar = [
    user,
    user1
];

//sonuc =  kullanicilar[1].ad;

let urunler = [
    {
       "urun_adi": "iphone15",
       "urun_fiyat": 70000
    },
    {
        "urun_adi": "iphone14 pro",
        "urun_fiyat": 80000
     }
];


sonuc = urunler[0].urun_fiyat;

console.log(sonuc);