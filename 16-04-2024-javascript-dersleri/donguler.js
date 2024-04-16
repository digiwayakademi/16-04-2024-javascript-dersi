

// let toplam = 0;

// for(let i=1; i <= 10; i++){
//     kod blokları çalışıyor.
//     toplam = toplam + i;
//}

//console.log(toplam); 

let sayilar = [1,4,8,5,3,7,8,9,20,12,2,3,5,8,1];

//console.log(sayilar[0] + sayilar[1] + sayilar[2] + sayilar[3] + sayilar[4] + sayilar[5]);

let toplam = 0;

// for(let i=0; i<sayilar.length; i++){
//     toplam += sayilar[i];
// }

// for(let i in sayilar)
// {
//     toplam += sayilar[i];
// }

// for(let sayi of sayilar)
// {
//     toplam += sayi;
// }

//console.log(toplam);


let user = {
    "name": "Atakan Genç",
    "username": "atakangenc",
    "password": "123456",
    "email": "atakan@digiway.com.tr"
};

for(let key in user)
{
    console.log(key);
    console.log(user[key]);
}