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
        exibirPet (pet)
          }
  }

const vacinarPet = (pet) =>{
        if (pet.vacinado == false){
            pet.vacinado = true
        }
        exibirPet (pet)
 
}

const exibirPet = (pet) => {
    console.log( console.log(`Nome do Cachorro: ${pet.nome}
    Idade: ${pet.idade}
    Tipo: ${pet.tipo}
    Raca: ${pet.raca}
    Vacinado: ${pet.vacinado}`))
}

//listarPets();
vacinarPet(pets[2])
