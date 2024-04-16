function selamlama(mesaj) {
    console.log(mesaj);
}

//selamlama("selam");
//selamlama("merhaba");
//selamlama("iyi günler");



function yasHesapla(dogumYili){
  return new Date().getFullYear() - dogumYili;
}

let yasAhmet = yasHesapla(2000);
let yasEda = yasHesapla(1998);

console.log(yasAhmet, yasEda);


function emekliligeKalanYil(dogumYili, isim)
{
    let yas = yasHesapla(dogumYili);
    let kalan_sene= 65 - yas;

    if(kalan_sene > 0)
    {
        console.log(`${isim} emekli olmanıza ${kalan_sene} yıl kaldı`);
    }else{
        console.log("zaten emeklisiniz");
    }
}

emekliligeKalanYil(1992,"Atakan");
emekliligeKalanYil(1972,"Mehmet");
emekliligeKalanYil(1992,"Oya");
emekliligeKalanYil(1952,"Ateş");
emekliligeKalanYil(2005,"Ahmet");