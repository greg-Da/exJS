const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
];


console.log("Est-ce que tous les livres ont été au moins empruntés une fois :")
let rented = books.filter(function(book){
    return book.rented == 0
})
if(rented.length == 0){
    console.log("yes")
}else{
    console.log("no")
}


console.log("Quel est livre le plus emprunté ?")
let mostRented = books.sort((a, b) => {
    return a.rented <= b.rented
})
console.log(mostRented[0])

console.log("Quel est le livre le moins emprunté ?")
console.log(mostRented[mostRented.length - 1])

console.log("livre avec l'ID: 873495 :")
console.log(books.find((elem) => elem.id === 873495))

console.log("Supprime le livre avec l'ID: 133712")
let del = books.filter(function(book){
    return book.id != 133712
})
console.log(del)


console.log("ordre alphabétique :")
console.log(del.sort((a, b) => {
    return a.title >= b.title
}))