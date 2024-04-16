let now = new Date(); // Şimdiki tarih - saat

//Get methods
let sonuc = now;

// sonuc = now.getDate();
// sonuc = now.getDay(); // 0.indeks - Pazar   Pazartesi 1  Salı 2 
// sonuc = now.getFullYear();
// sonuc = now.getHours();
// sonuc = now.getTime(); // Şuanki saat bilgisini milisecond türünden verir.
 
//set methods // bir tarihi güncelleme değiştirme
 //now.setFullYear(2030);
 //now.setMonth(7); // 0.indeks - ocak 
 //now.setDate(15);

 //sonuc = now;   

 let dogumTarihi = new Date(); 
console.log(dogumTarihi.toLocaleDateString());