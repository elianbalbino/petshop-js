const moment = require('moment');
//const dadosPets = require('./dadosPets.json');
const fs = require('fs');
let dadosPets = fs.readFileSync('./dadosPets.json');
//let pets = JSON.parse(dadosPets);
dadosPets = JSON.parse(dadosPets);

//let nomePetshop = "PETSHOP JS";
//let pets = dadosPets.pets;
//console.log (pets)

//let pets = [
//    {
//       nome: 'Molly',
//        tipo: 'cachorro',
//        idade: 2,
//        raca: 'Maltes',
//        peso: 4,
//        tutor: 'Gabriela',
//        vacinado: false,
//       servicos: ['banho', 'tosa']
//    },
//    {
//        nome: 'Malbec',
//        tipo: 'cachorro',
//        idade: 2,
//        raca: 'Maltes',
//        peso: 3,
//        tutor: 'Gabriela',
//        vacinado: false,
//        servicos: ['banho', 'tosa']
//    },
//    {
//        nome: 'Rex',
//        tipo: 'cachorro',
//        idade: 5,
//        raca: 'Vira-lata',
//        peso: 10,
//        tutor: 'Elian',
//        vacinado: false,
//        servicos: ['banho', 'vacinar']
//    },
//];

//
const exibirPet = (pet) => {
  console.log(`Nome: ${pet.nome}
    Idade: ${pet.idade}
    Tipo: ${pet.tipo}
    Raca: ${pet.raca}
    Vacinado: ${pet.vacinado}`);
};
const listarPets = () => {
  for (let pet of dadosPets.pets) {
    //template string
    console.log(`${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}`);

    for (const servico of pet.servicos) {
      console.log(`${servico}`);
    }
  }
};

const vacinarPet = (pet) => {
  if (!pet.vacinado) {
    pet.vacinado = true;
    console.log(`${pet.nome} foi vacinado com sucesso!`);
  } else {
    console.log(`Ops, ${pet.nome} já está vacinado!`);
  }
};

const campanhaVacina = () => {
  console.log('--- Campanha de Vacinação ---');

  let petVacinados = 0;

  dadosPets.pets = dadosPets.pets.map ((pet)=>{
    if (!pet.vacinado) {
      vacinarPet (pet);
      petVacinados++;
    }

    return pet;
  })

  // for (let pet of dadosPets.pets) {
  //   if (pet.vacinado == false) {
  //     pet.vacinado = true;
  //     petVacinados++;
  //   } else {
  //     console.log(`O pet ${pet.nome} já foi vacinado anteriormente!`);
  //   }
  // }
  //atualizarBanco();
  console.log(`${petVacinados} pets foram vacinados nesta campanha!`);
};

// const adicionarPet = (nome,tipo,idade,raca, peso, tutor, vacinado) => {
//     let pet = {
//         nome: nome,
//         tipo: tipo,
//         idade: idade,
//         raca: raca,
//         peso: peso,
//         tutor: tutor,
//         vacinado : vacinado,
//         servicos: []
//     }
//     dadosPets.pets.push (pet)
// }

const darBanhoPet = (pet) => {
  pet.servicos.push({
    nome: 'banho',
    data: moment().format('DD-MM-YYYY'),
  });
  console.log(`${pet.nome} está de banho tomado!`);
};

const tosarPet = (pet) => {
  pet.servicos.push({
    nome: 'tosa',
    data: moment().format('DD-MM-YYYY'),
  });
  console.log(`${pet.nome} está com cabelinho na régua`);
};

const apararUnhasPet = (pet) => {
  pet.servicos.push({
    nome: 'tosacorte de unhas',
    data: moment().format('DD-MM-YYYY'),
  });
  console.log(`${pet.nome} está de unhas aparadas!`);
};

const atenderCliente = (pet, servicos) => {
  console.log(`Olá, ${pet.nome}`);
  servicos(pet);
  console.log('Tchau,até logo!');
};

const atualizarBanco = () => {
  //conversao de objeto javascript para JSON
  let petsAtualizado = JSON.stringify(dadosPets);
  //atualizacao do arquivo dadosPets.json
  fs.writeFileSync('dadosPets.json', petsAtualizado, 'utf-8');
};

//listarPets();
//vacinarPet(pets[2])
//campanhaVacinacao()
//darBanhoPet (pets[0])
//tosarPet (pets[0])
//apararUnhasPet (pets[0])
//console.log(pets[0])
//console.log (moment().format())
//console.log (pets)

// darBanhoPet(dadosPets.pets [0]);
// darBanhoPet(pets[1]);
// apararUnhasPet(pets[2]);
// console.log("-----------")
listarPets();
//console.log(pets[0])

// adicionarPet ({
//     "nome" : "Romarinho",
//     "tipo": "cachorro",
//     "idade" : 3,
//     "raca" : "American",
//     "peso" : 28,
//     "tutor": "Bruno",
//     "vacinado" : true,
//     "servicos": []
// });
