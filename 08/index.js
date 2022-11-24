const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
];

for (let object of usuarios) {
    let {nome} = object;
    if (object.pets.length === 0) { console.log(`Sou ${nome} e não tenho pets.`); }
    else { console.log(`Sou ${nome} e tenho ${object.pets.length} pets.`); }
}