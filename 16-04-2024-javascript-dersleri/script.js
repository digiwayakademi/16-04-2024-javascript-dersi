let ad = "Atakan";
let soyad = "Genç";
let yas = 66;
let sehir = "İstanbul";

let mesaj = "Benim adım " + ad + " ve soyadım " + soyad + "." + sehir + '\'da yaşıyorum.' + "Emekliliğe " + (65 - yas) + " yılım kaldı.";

//ternary operators
let emeklilik = (65 - yas > 0) ? "Emekliliğe " + (65-yas) + " yıl kaldı." : "Emekliyim.";
//bactick //altgr + virgül
mesaj = `Benim adım ${ad} ve soyadım ${soyad}.${sehir}'da yaşıyorum. ${emeklilik}`;

console.log(mesaj);