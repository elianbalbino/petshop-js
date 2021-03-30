let dadosPets = require ('./dadosPets.json');
let pets =

console.log (dadosPets.pets);

const atenderCliente = (pet,servico) => {
    console.log (`Olá, ${pet.nome}`);
    servico();
    console.log (`Tchau, até mais!`);
}
const darBanho = () => {
    console.log (`dando banho no pet...`);
}
const apararUnhas = () => {
    console.log (`Aparando unhas...`);
}

atenderCliente (pets [0], darBanho);
console.log ("-------")
atenderCliente (pets[2], apararUnhas);