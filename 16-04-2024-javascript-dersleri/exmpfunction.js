// 1- Kendisine gönderilen kelimeyi belirtilen kez ekranda yazan fonksiyonu yapınız.
function kelimeYazdir(kelime, adet){
    for(let i=1; i<=adet; i++)
    {
        console.log(kelime);
    }
}

//kelimeYazdir("merhaba",3);

// 2- Dikdörtgenin alan ve çevresini hesaplayan fonksiyonu yazınız.

function alanCevreHesapla(kisa,uzun)
{
    let alan = kisa * uzun;
    let cevre = (kisa + uzun) * 2;

    return `alan: ${alan} çevre: ${cevre}`;
}

let sonuc = alanCevreHesapla(15,22);
//console.log(sonuc);

//3- Yazı tura uygulamasını fonksiyon kullanarak yazınız.
function yaziTuraAt(){
    let random = Math.random(); //0-1
    if(random < 0.5)
    {
        console.log("yazı");
    }else{
        console.log("tura");
    }
    console.log(random);
}
//yaziTuraAt();

//4- Kendisine gönderilen bir sayının tam bölenlerini dizi şeklinde döndüren fonksiyonu yazınız.

function tamBolenler(sayi){
    let sayilar = [];
    for(let i=2; i<sayi; i++)
    {
        if(sayi % i == 0)
        {
            sayilar.push(i);
        }
    }

    return sayilar;
}

//console.log(tamBolenler(10)); //  2 5 
//console.log(tamBolenler(1998));

//5- Değişken sayıda parametre alan toplam isminde  sayıları toplatan bir fonksiyon tanımlayınız.

function toplam(){
    let sonuc = 0;
    for(i=0; i<arguments.length; i++)
    {
        sonuc += arguments[i];
    }

    return sonuc;
}

console.log(toplam(2,5,7,9,16,21,26,27));
