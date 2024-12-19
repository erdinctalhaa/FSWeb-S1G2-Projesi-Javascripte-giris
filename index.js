// Görev 1d - Çarpma
function carpma(a, b) {
  return a * b;
}
console.log(carpma(7, 4));

// Görev 2 : Köpeğin Yaşı
function kopeginYasi(yas) {
  return yas * 7;
}
console.log(kopeginYasi(3)); // Örnek: 3 yaşındaki bir köpek

// Görev 3 : Taş, Kağıt, Makas
function oyun(oyuncu, bilgisayar) {
  if (oyuncu === bilgisayar) {
    return "Beraberlik";
  } else if (
    (oyuncu === "Makas" && bilgisayar === "Kağıt") ||
    (oyuncu === "Kağıt" && bilgisayar === "Taş") ||
    (oyuncu === "Taş" && bilgisayar === "Makas")
  ) {
    return "Kazandın!";
  } else {
    return "Kaybettin!";
  }
}

// Bilgisayarın seçimi için fonksiyon
function bilgisayarinSecimi() {
  const secimler = ["Taş", "Kağıt", "Makas"];
  const rastgeleSecim = Math.random();
  if (rastgeleSecim < 0.33) {
    return "Taş";
  } else if (rastgeleSecim < 0.66) {
    return "Kağıt";
  } else {
    return "Makas";
  }
}

// Örnek kullanım
console.log(oyun("Makas", bilgisayarinSecimi()));

// Görev 4a - Kilometreden Mil
function milDonusturucu(km) {
  return km * 0.621371;
}
console.log(milDonusturucu(10)); // 10 km'yi mil'e dönüştürme

// Görev 4b - Santimetreden Feet
function feetDonusturucu(cm) {
  return cm * 0.0328084;
}
console.log(feetDonusturucu(100)); // 100 cm'yi feet'e dönüştürme

// Görev 5 : 5 küçük maymun yatakta zıplamış
function cocukSarkisi(maymunSayisi) {
  return `${maymunSayisi} küçük maymun yatakta zıplamış, biri düşüp başını çarpmış, Anne doktoru aramış, Doktor çok kızmış: Bir daha yatakta zıplamak yok!`;
}

function maymunSarkisi() {
  let maymunSayisi = 5;
  while (maymunSayisi > 0) {
    console.log(cocukSarkisi(maymunSayisi));
    maymunSayisi--;
  }
}
maymunSarkisi(); // 5 maymunla başla

// Görev 6 : Not Hesaplayıcı
function notHesapla(puan) {
  if (puan >= 90) {
    return "A aldın";
  } else if (puan >= 80) {
    return "B aldın";
  } else if (puan >= 70) {
    return "C aldın";
  } else if (puan >= 60) {
    return "D aldın";
  } else {
    return "F aldın";
  }
}
console.log(notHesapla(85)); // B aldın

// Bonus Çalışma: Sesli harf sayacı
function sesliHarfSayaci(str) {
  const sesliHarfler = ['a', 'e', 'ı', 'i', 'o', 'ö', 'u', 'ü'];
  let sayac = 0;
  for (let char of str.toLowerCase()) {
    if (sesliHarfler.includes(char)) {
      sayac++;
    }
  }
  return sayac;
}
console.log(sesliHarfSayaci("Merhaba!")); // 3 sesli harf

// Lütfen bu satırın alt tarafını değiştirmeyin
function sa() {
  console.log("Kodlar çalışıyor");
  return "as";
}
sa();

// Bu satırdan sonrasını değiştirmeyin
module.exports = {
  sa,
  carpma,
  kopeginYasi,
  oyun,
  milDonusturucu,
  feetDonusturucu,
  cocukSarkisi,
  notHesapla,
};
