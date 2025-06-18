function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
1
    switch(choice) {
        case 0:
            return "Pedra"
        case 1:
            return "Papel"
        case 2:
            return "Tesoura"
    }
}

function getUserChoice(choice) {
    switch(choice) {
        case 0:
            return "Pedra"
        case 1:
            return "Papel"
        case 2:
            return "Tesoura"
    }
}

function playRound(user_choice, computer_choice) {

    switch(user_choice) {
        case "Pedra":
            if(computer_choice === "Tesoura") {
                user_score += 1
                return "Você Venceu!"
            }
            else if(computer_choice === "Pedra") {
                return "Rodada empatada"
            }
            else if(computer_choice === "Papel") {
                computer_score += 1
                return "Você Perdeu"
            }
        
        case "Papel":
            if(computer_choice === "Tesoura") {
                computer_score += 1
                return "Você Perdeu!"
            }
            else if(computer_choice === "Pedra") {
                user_score += 1
                return "Você Venceu!"
            }
            else if(computer_choice === "Papel") {
                return "Rodada empatada!"
            }

        case "Tesoura":
            if(computer_choice === "Tesoura") {
                return "Rodada empatada!"
            }
            else if(computer_choice === "Pedra") {
                computer_score += 1
                return "Você Perdeu!"
            }
            else if(computer_choice === "Papel") {
                user_score += 1
                return "Você Venceu!"
            }
    }

}

let user_choice = parseInt(window.prompt("Escolha sua jogada: "))
let computer_choice = getComputerChoice()
let user_score = 0
let computer_score = 0

user_choice = getUserChoice(user_choice)

console.log("Jogador 1 = " + user_choice)
console.log("Jogador 2 = " + computer_choice)
console.log(playRound(user_choice, computer_choice))
console.log(`Pontos usuario = ${user_score}, Pontos computador = ${computer_score}`)