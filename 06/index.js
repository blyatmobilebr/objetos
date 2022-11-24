const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
];


const adultos = [];
const jovens = [];

usuarios.filter(usuario => usuario.idade >= 18 ? adultos.push(usuario.nome, usuario.idade) : jovens.push(usuario.nome, usuario.idade))

console.log(adultos)
console.log(jovens)