//************************Liste İçerisindeki son elemana ulaşmak veya eleman eklemek*************//

let lastChild = document.querySelector("ul#list>li:last-child");
lastChild.innerHTML = "Son öğe değişti"

let firstChild = document.querySelector("ul#list>li:first-child");
firstChild.innerHTML = "İlk öğe değişti"

let ulDOM = document.querySelector("ul#list")
let liDOM = document.createElement('li')

liDOM.innerHTML = "Kendi oluşturduğumuz öğe"

console.log(ulDOM.lastChild);
