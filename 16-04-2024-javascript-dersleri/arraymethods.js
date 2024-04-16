let ogrenciler = ["burak","ateş","ahmet"];

sonuc = ogrenciler.length; //dizinin kaç elemanlı olduğunu söyler.
sonuc = ogrenciler.toString();
sonuc = ogrenciler.join(" ");

//eleman silme
// sonuc = ogrenciler.pop(); // son eleman silinir ve geriye silinen eleman döndürülür.
//sonuc = ogrenciler.shift(); //ilk eleman silinir ve geriye silinen elaman döndürülür.

//elaman ekleme
//sonuc = ogrenciler.push("furkan"); // dizinin sonuna eleman eklemesi yapar ve dizinin yeni eleman sayısını döndürür.
//sonuc = ogrenciler.unshift("furkan"); // dizinin en başına elaman eklemesi yapar ve dizinin yeni eleman sayısını döndürür.


let markalar1 = ["bmw","toyota"];
let markalar2 = ["ford","mercedes"];
let markalar3 = ["range rover","bentley"];

//sonuc = markalar1.concat(markalar2, markalar3); 
//sonuc = markalar1.splice(0,0,markalar2); //silinen elemanları dönüyor.
//sonuc = markalar1.splice(0,0,"audi","mini");
//sonuc = markalar1.splice(0,1,"audi","mini");
//sonuc = markalar1.splice(0,1);
sonuc = markalar1.splice(2,0,"audi","mini");

console.log(sonuc);
console.log(markalar1);
//console.log(ogrenciler);