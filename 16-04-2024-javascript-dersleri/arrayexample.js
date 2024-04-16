//1 - Elma, Armut Muz Çilek elemanlarına sahip bir dizi oluşturunuz.
let meyveler = ["Elma","Armut","Muz","Çilek"];
//2- Dizi kaç elemanlıdır ?
console.log(meyveler.length);
//3 - Dizinin ilk ve son elemanı nedir ?
console.log(meyveler[0]);
console.log(meyveler[meyveler.length - 1]);
//4- Elma dizinin bir elemanı mıdır?
console.log(meyveler.includes("Elma"));
console.log(meyveler.indexOf("Elma"));

//5 - Kirazı listenin sonuna ekleyiniz.
//meyveler[meyveler.length] = "Kiraz";
meyveler.push("Kiraz");
console.log(meyveler);

//6- Dizinin son iki elemanını siliniz.
//meyveler.pop();
//meyveler.pop();
meyveler.splice(meyveler.length - 2,2);
console.log(meyveler);
//7- Aşağıdaki bilgileri bir dizi içersinde saklayınız ve her öğrencinin yaşını ve not ortalamasını hesaplayınız.
/*
    Öğrenci 1 : Ahmet Polat 2005 (70,60,80)
    Öğrenci 2 : Enes Cansever 1998 (90,80,80)
    Öğrenci 3 : Neriman Çelik 1997 (60,60,80)

*/

let ogr1 = [
    "Ahmet",
    "Polat",
    2005,
    [70,60,80]
];

let ogr2 = [
    "Enes",
    "Cansever",
    1998,
    [90,80,80]
];

let ogr3 = [
    "Neriman",
    "Çelik",
    1997,
    [60,60,80]
];


let ogrenciler = [ogr1, ogr2, ogr3];

let ogr1_yas = new Date().getFullYear() - ogrenciler[0][2];
let ogr2_yas = new Date().getFullYear() - ogrenciler[1][2];
let ogr3_yas = new Date().getFullYear() - ogrenciler[2][2];

console.log(ogr1_yas,ogr2_yas,ogr3_yas);

let ogr1_not = (ogrenciler[0][3][0] + ogrenciler[0][3][1] + ogrenciler[0][3][2]) / 3;
let ogr2_not = (ogrenciler[1][3][0] + ogrenciler[1][3][1] + ogrenciler[1][3][2]) / 3;
let ogr3_not = (ogrenciler[2][3][0] + ogrenciler[2][3][1] + ogrenciler[2][3][2]) / 3;

console.log(ogr1_not,ogr2_not,ogr3_not);   