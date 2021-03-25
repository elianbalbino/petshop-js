const nomePetshop = "PETSHOP JS";

let pets = [
    {
    nome: 'Molly',
    tipo: 'cachorro',
    idade: 2,
    raca: 'Maltes',
    peso: 3,
    tutor: 'Gabriela',
    contato: "(81) 8808-8808",
    vacinado: true,
    servicos: ['banho','tosa']
},
{
    nome: 'Malbec',
    tipo: 'cachorro',
    idade: 1,
    raca: 'Maltes',
    peso: 2,
    tutor: 'Gabriela',
    contato: "(81) 8808-8808",
    vacinado: true,
    servicos: ['banho','tosa']
},
{
    nome: 'Rex',
    tipo: 'cachorro',
    idade: 5,
    raca: 'Vira-lata',
    peso: 5,
    tutor: 'Elian',
    contato: "(81) 8505-8505",
    vacinado: true,
    servicos: ['banho','vacina']
},
];

const listarPets = () => {
    for(let pet of pets){
        // template string
      console.log(`${pet.nome},${pet.idade},${pet.tipo},${pet.raca}`);
          }
  }

  listarPets();
// console.log(pet);




