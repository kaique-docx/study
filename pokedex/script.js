// === POKÉMONS ===
const squirtle = {
    name: "Squirtle",
    type: "Water",
    level: 6,
}

const wartortle = {
    name: "Wartortle",
    type: "Water",
    level: 18,
}

const blastoise = {
    name: "Blastoise",
    type: "Water",
    level: 40,
}

const charmander = {
    name: "Charmander",
    type: "Fire",
    level: 10,
}

const charmeleon = {
    name: "Charmeleon",
    type: "Fire",
    level: 24,
}

const charizard = {
    name: "Charizard",
    type: "Fire",
    level: 43,
}

const bulbasaur = {
    name: "Bulbasaur",
    type: "Grass",
    level: 9,
}

const ivysaur = {
    name: "Ivysaur",
    type: "Grass",
    level: 20,
}

const venusaur = {
    name: "Venusaur",
    type: "Grass",
    level: 38,
}

// === POKEMONS ARRAY ===
const pokemons = [squirtle, wartortle, blastoise, charmander, charmeleon, charizard, bulbasaur, ivysaur, venusaur]

// === POKÉMON NAMES LIST ===
const pokemonNames = pokemons.map((value, index, array) => {
    return value.name
})

// === LEVEL > 20 POKÉMONS FILTER ===
const selectPokemonLevel = pokemons.filter((value, index, array) => {
    return value.level > 20
}) // == Select the pokemons

const pokemonNamesLevel20 = selectPokemonLevel.map((value, index, array) => {
    return value.name
}) 

// === FIND THE FIRST POKÉMON FIRE TYPE ===
let firstFire = pokemons.find((value, index, array) => {
    return value.type === "Fire"
})
 
// === TOTAL SUM AND AVERAGE OF LEVELS ===
const sum = pokemons.reduce((previous, currentV, currentI) => {
    return previous + currentV.level
}, 0)

let average = sum / pokemons.length

// PRINT INFOS IN CONSOLE
console.log("=== POKÉMON NAMES ===")

console.log(pokemonNames)
console.log(" ") //Broken line

console.log("=== LEVEL > 20 POKÉMONS ===")

console.log(pokemonNamesLevel20)
console.log(" ") //Broken line

console.log("=== THE FIRST POKÉMON TYPE FIRE ===")

console.log(firstFire.name)
console.log(" ") //Broken line

console.log("=== SUM AND AVERAGE OF THE LEVELS ===")

console.log(`Sum: ${sum}, Average: ${average}`)
console.log(" ") //Broken line

console.log("=== POKEMONS COMPLETE LIST ===")

pokemons.forEach((value, index, array) => {
    console.log(`Name: ${value.name}, Type: ${value.type}, Level: ${value.level}`)
})