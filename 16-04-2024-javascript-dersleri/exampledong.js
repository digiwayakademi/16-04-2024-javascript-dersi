let sayilar = [1,5,7,15,3,25,45,55,12,27,30,18,24,6];

//1- sayilar listesindeki her bir elemanın karesini yazdırınız.
// for(let sayi of sayilar)
// {
//     console.log(sayi * sayi);
// }


//2-sayılar listesindeki hangi sayılar 5'in katıdır?
// for(let i=0; i<sayilar.length; i++)
// {
//    if(sayilar[i] % 5 ==0) 
//    {
//     console.log(sayilar[i]);
//    }
// }

//3- sayilar listesindeki çift sayıların toplamını bulunuz.

// let toplam =0;
// for(let i in sayilar){
//     if(sayilar[i] % 2 ==0)
//     {
//         toplam += sayilar[i];
//     }
// }

// console.log(toplam);

let urunler = ["iphone 15", "samsung s22","iphone 13", "samsung s23","samsung s24"];

//4 - ürünler listesindeki tüm ürünleri büyük harf ile yazdırınız.
// for(let urun of urunler)
// {
//     console.log(urun.toUpperCase());
// }

//5 - ürünler listesinde, içinde samsung geçen kaç ürün vardır ?
// let adet = 0;

// for(let urun of urunler)
// {
//     if(urun.includes("samsung"))
//     {
//         adet++; 
//     }
// }

// console.log(adet);

let ogrenciler = [
    {"ad":"ahmet", "soyad": "polat", "notlar": [70,80,90]},
    {"ad":"furkan", "soyad": "is", "notlar": [10,50,80]},
    {"ad":"atakan", "soyad": "genç", "notlar": [10,20,30]}

];

//ogrenciler listesindeki her ogrencinin not ortalaması ve başarını durumunu yazdırınız.

for(let ogrenci of ogrenciler)
{
   let not_toplam = 0; 
   let ortalama = 0;
   let adet = 0;
   for(let not of ogrenci.notlar)
   {
      not_toplam += not;
      adet++;
   }
   ortalama = not_toplam / adet;

   if(ortalama>=50)
   {
    console.log(`${ogrenci.ad} ${ogrenci.soyad} isimli öğrenci ${ortalama} ile geçti.`);
   }else{
    console.log(`${ogrenci.ad} ${ogrenci.soyad} isimli öğrenci ${ortalama} ile kaldı.`);  
   }
}