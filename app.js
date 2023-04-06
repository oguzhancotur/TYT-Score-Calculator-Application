/*
? SORULAR

1-Türkçe 40 
2-Matemematik 40
3-Sosyal Bilimler 20
4-Fen Bilimleri 20

----->> 100 Puan ÖSYM veriyor.
----->> Okul Puanı Max 60 veriyor.

4 Yanlıs 1 doğruyu götürüyor.
*/


let turkceDogru, turkceYanlis = 0;
let matematikDogru, matematikYanlis = 0;
let sosyalDogru, sosyalYanlis = 0;
let fenDogru, fenYanlis = 0;
let okulPuani = 0;

let yeniSatir = "\r\n";
let mesaj = "TYT Puan Hesaplama Uygulamasına Hoşgeldiniz !" + yeniSatir
    + "1-Puan Hesaplama" + yeniSatir
    + "2- Çıkış Yap";

let secim = prompt(mesaj);

switch (secim) {
    case "1":

        okulPuani = Number(prompt("Okul Puanınızı giriniz : "));
        if (okulPuani <= 60 && okulPuani >= 0) {

        } else {
            alert("Geçerli bir okul puanı giriniz !")
            break;
        }


        turkceDogru = Number(prompt("Türkçe doğru sayısını giriniz : "));
        turkceYanlis = Number(prompt("Türkçe yanlış sayısını giriniz : "));
        if (turkceDogru + turkceYanlis <= 40 && turkceDogru+turkceYanlis >= 0) {

        } else {
            alert("Soru sayısının toplamını yanlış girdiniz!");
            break;
        }

        matematikDogru = Number(prompt("Matematik doğru sayısını giriniz : "));
        matematikYanlis = Number(prompt("Matematik yanlış sayısını giriniz : "));
        if (matematikDogru + matematikYanlis <= 40 && matematikDogru+matematikYanlis >= 0) {

        } else {
            alert("Soru sayısının toplamını yanlış girdiniz!");
            break;
        }

        sosyalDogru = Number(prompt("Sosyal Bilgiler doğru sayısını giriniz : "));
        sosyalYanlis = Number(prompt("Sosyal Bilgier yanlış sayısını giriniz : "));
        if (sosyalDogru + sosyalYanlis <= 20 && sosyalDogru+sosyalYanlis >= 0) {

        } else {
            alert("Soru sayısının toplamını yanlış girdiniz!");
            break;
        }

        fenDogru = Number(prompt("Fen Bilgisi doğru sayısını giriniz : "));
        fenYanlis = Number(prompt("Fen Bilgisi yanlış sayıısnı giriniz : "));
        if (fenDogru + fenYanlis <= 20 && fenDogru+fenYanlis >= 0) {

        } else {
            alert("Soru sayısının toplamını yanlış girdiniz!");
            break;
        }

        let dogruSayisi1 = turkceDogru + matematikDogru;
        let dogruSayisi2 = sosyalDogru + fenDogru;
        let yanlisSayisi1 = turkceYanlis + matematikYanlis;
        let yanlisSayisi2 =  + sosyalYanlis + fenYanlis;
        let toplamDogru1 = dogruSayisi1 - (yanlisSayisi1/4);
        let toplamDogru2 = dogruSayisi2 - (yanlisSayisi2/4);
        puan = ((toplamDogru1*3.3)+(toplamDogru2*3.4)) + 100 + okulPuani;
        alert("TYT Puanınız : " + puan);

        break;

    case "2":
        alert("Uygulamadan çıkış yapıldu....");
        break;

    default:
        alert("Lütfen Geçerli Bir Değer Giriniz !");
        break;


}

