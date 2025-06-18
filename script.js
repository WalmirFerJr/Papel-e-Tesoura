function getComputerChoice() {
    let escolha = Math.floor(Math.random() * 3)
1
    switch(escolha) {
        case 0:
            return "Pedra"
        case 1:
            return "Papel"
        case 2:
            return "Tesoura"
    }2
}

function getUserChoice(escolha) {
    switch(escolha) {
        case 0:
            return "Pedra"
        case 1:
            return "Papel"
        case 2:
            return "Tesoura"
    }
}

let escolha_usuario = parseInt(window.prompt("Escolha sua jogada: "))

console.log("Jogador 1 = " + getUserChoice(escolha_usuario))
console.log("Jogador 2 = " + getComputerChoice())