let kursAdi = "Digiway Akademi Fullstack Yazılım Uzmanlığı.";


let sonuc;
//JavaScript String Methods web3schools ta aratırsak bütün method listeleri karşımıza geliyor

sonuc = kursAdi.toLowerCase();
sonuc = kursAdi.toUpperCase();
sonuc = kursAdi.length;
sonuc = kursAdi[6];
sonuc = kursAdi.slice(0,7);
sonuc = kursAdi.slice(8);
sonuc = kursAdi.slice(-40);

sonuc = kursAdi.trim();
sonuc = kursAdi.trimStart();
sonuc = kursAdi.trimEnd();


sonuc = kursAdi.replace("ı","i");

sonuc = kursAdi.split(" ");
sonuc = kursAdi.split(" ")[1];

sonuc = kursAdi.search("Akademi");
sonuc = kursAdi.indexOf("Akademi");



console.log(sonuc);