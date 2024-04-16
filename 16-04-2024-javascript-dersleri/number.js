let sonuc;
/*
sonuc = 10;
sonuc = "10";
sonuc = Number("10");
sonuc = parseInt("10.6");
sonuc = parseFloat("10.6");
sonuc = parseInt("10a");
sonuc = parseInt("a10");

sonuc = isNaN("10");
*/
let sayi = 18.12345667;

sonuc = sayi.toPrecision(7);
sonuc = sayi.toFixed(5);

sonuc = Math.round(3.5); // verdiğimiz sayı hangi tam sayıya yakınsa ona yuvarlar.
sonuc = Math.ceil(3.1);  // verdiğimiz sayı hangi tam sayıya yakın olduğu farketmeksizin bir üst tam sayıya yuvarlanır.
sonuc = Math.floor(3/9); // verdiğimiz sayı hangi tam sayıya yakın olduğu farketmeksizin bir alt tam sayıya yuvarlanır.
sonuc = Math.sqrt(30);
sonuc = Math.pow(4,3);
sonuc = Math.abs(-20);
sonuc = Math.min(4,8,5,7,1);
sonuc = Math.max(2,4,7,9,20);
sonuc = Math.floor(Math.random() * 100 ) ;
sonuc = Math.random() * 10;




console.log(sonuc);
console.log(typeof sonuc);