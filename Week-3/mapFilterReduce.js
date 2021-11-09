let cart = [
    {id:1, productName:"Telefon", quantity:3, unitPrice:4000},
    {id:2, productName:"Bardak", quantity:2, unitPrice:30},
    {id:3, productName:"Kalem", quantity:1, unitPrice:20},
    {id:4, productName:"Şarj Cihazı", quantity:2, unitPrice:100},
    {id:5, productName:"Kitap", quantity:3, unitPrice:30},
    {id:6, productName:"Pot", quantity:5, unitPrice:150},
]

//Map -> Listedeki tüm değerleri teker teker gezer.
console.log("<ul>")
cart.map(product => {
    console.log("<li>" + product.productName + " : " + product.unitPrice * product.quantity + "</li>")
})
console.log("</ul>")

//Reduce -> Sepetteki Toplam seçeneği gibi, bir yerden başlayarak toplam değere ulaşmamızı sağlar.
let total = cart.reduce((acc,product) => acc + product.unitPrice * product.quantity , 0)
console.log(total)

//Filter -> Listedeki değerleri isteğimize göre filtreler.
let quantityOver2 = cart.filter(product=>product.quantity>2)
console.log(quantityOver2)

function addToCart(sepet) {
    cart.push( {id:7, productName:"Ruhsat", quantity:1, unitPrice:20})
}

//Referans tip olduğu için id:7 olan Ruhsat'ı da sepetin içinde gösterir.
addToCart(cart)
console.log(cart)


let sayi = 10

function sayiTopla(number) {
    number += 1
}
//Referans tip olmadığı için 1 eklemez. Yani ekrana 10 yazar.
//number = 11 oldu fakat hala sayi = 10.
sayiTopla(sayi)
console.log(sayi)

