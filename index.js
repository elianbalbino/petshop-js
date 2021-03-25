let nomePetshop = "PETSHOP JS";

let pets = [
    {
        nome: 'Molly',
        tipo: 'cachorro',
        idade: 2,
        raca: 'Maltes',
        peso: 4,
        tutor: 'Gabriela',
        vacinado: false,
        servicos: ['banho', 'tosa']
    },
    {
        nome: 'Malbec',
        tipo: 'cachorro',
        idade: 2,
        raca: 'Maltes',
        peso: 3,
        tutor: 'Gabriela',
        vacinado: false,
        servicos: ['banho', 'tosa']
    },
    {
        nome: 'Rex',
        tipo: 'cachorro',
        idade: 5,
        raca: 'Vira-lata',
        peso: 10,
        tutor: 'Elian',
        vacinado: false,
        servicos: ['banho', 'vacinar']
    },
];

// 
const exibirPet = (pet) => {
    console.log(`Nome: ${pet.nome}
    Idade: ${pet.idade}
    Tipo: ${pet.tipo}
    Raca: ${pet.raca}
    Vacinado: ${pet.vacinado}`)
}
const listarPets = () => {
   
    for(let pet of pets){
        exibirPet(pet)
    }
}

const vacinarPet = (pet) => {
    
    if(pet.vacinado == false){
        pet.vacinado = true
        exibirPet(pet)
        return 1
    }
}

const campanhaVacinacao = (pet) => {
    let vacinados = 0
    for (pet of pets){
        vacinados += vacinarPet(pet)
    }
    console.log(vacinados)
}

const adicionarPet = (nome,tipo,idade,raca, peso, tutor, vacinado) => {
    let pet = {
        nome: nome,
        tipo: tipo,
        idade: idade,
        raca: raca,
        peso: peso,
        tutor: tutor,
        vacinado : vacinado,
        servicos: []
    }
    pets.push (pet)
}

const darBanhoPet = (pet) => {
    pet.servicos.push(`${pet.nome} está de banho tomado!`)

}

const tosarPet = (pet) =>{
    pet.servicos.push (`${pet.nome} está com cabelinho na régua`)
}

const apararUnhasPet = (pet) => {
    pet.servicos.push (`${pet.nome} está de unhas aparadas!`)
}

//listarPets();
//vacinarPet(pets[2])
//campanhaVacinacao()
darBanhoPet (pets[0])
tosarPet (pets[0])
apararUnhasPet (pets[0])
console.log(pets[0])
