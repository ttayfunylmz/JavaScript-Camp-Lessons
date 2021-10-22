console.log("Merhaba Kodlama.io")

//JavaScript, type safe değildir.
let dolarDun = 9.2
let dolarBugun = 9.3

{
    let dolarDun = 9.1
}
//üstteki parantezli kısım etkisiz çünkü başka bir dünya.
//bu yüzden 9.20 çalışacak.
//fakat let yerine 'var' kullansaydık 9.10 çalışırdı.
//bu yüzden 'var' kullanmamalıyız.
console.log(dolarDun)

//const = constant-sabit demek.
const euroDun = 11.2
//euroDun = 11 -> yaparsak hata verir.
console.log(euroDun)

//array
//camelCasing kullanıyoruz.
let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]

console.log("<ul>")
for(let i = 0; i<konutKredileri.length; i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")

{/*
<ul>
    <li>Konut Kredisi</li> 
    <li>Emlak Konut Kredisi</li>
    <li>Kamu Konut Kredisi</li> 
</ul>       */}