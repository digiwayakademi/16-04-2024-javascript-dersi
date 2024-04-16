let url = "https://www.digiway.com.tr";
let kursAdi = "Fullstack Yazılım Uzmanlığı Kursu";
let sonuc;
//1- url kaç karakterlidir
//sonuc = url.length;
//2- kursadi kaç kelimeden oluşmaktadır
//sonuc = kursAdi.split(" ").length;

//3- url https ile mi başlıyor?
/*
sonuc = url.startsWith("https");

if(sonuc) {
    console.log("evet bu kelimeyle başlıyor");
}else{
    console.log("hayır bu kelimeyle başlamıyor.");
}
*/
//4- kurs adı içerisinde Eğitimi kelimesi var mı? 



if(kursAdi.indexOf("Yazılım") >= 0){
    console.log("evet bu kelime var");
}else{
    console.log("hayır bu kelime yok");
}



//5- url ve kursadi değişkenlerini kullanarak aşağıdaki string bilgiyi oluşturunuz.
// https://www.digiway.com.tr/fullstack-yazilim-uzmanligi-kursu
/*
kursAdi = kursAdi.toLowerCase();
kursAdi = kursAdi.replaceAll(" ","-").replaceAll("ı","i").replaceAll("ğ","g");

sonuc = `${url}/${kursAdi}`;
*/
console.log(sonuc);
