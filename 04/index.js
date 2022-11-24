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
    }

];

for (let [_index, object] of Object.entries(usuarios)) {
    if (object.idade >= 18) object.maior_idade = true;
    else { object.maior_idade = false; }
}

console.log(usuarios)
