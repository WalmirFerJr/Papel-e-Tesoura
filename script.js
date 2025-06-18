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

function playGame() {

    function playRound(computer_choice) {

    let user_choice = parseInt(window.prompt("Escolha sua jogada: "))
    user_choice = getUserChoice(user_choice)

    console.log("Jogador 1 = " + user_choice)
    console.log("Jogador 2 = " + computer_choice)

    switch(user_choice) {
        case "Pedra":
            if(computer_choice === "Tesoura") {
                user_score += 1
                console.log(`Pontos usuario = ${user_score}, Pontos computador = ${computer_score}`)
                return "Você Venceu!"
                
            }
            else if(computer_choice === "Pedra") {
                console.log(`Pontos usuario = ${user_score}, Pontos computador = ${computer_score}`)
                return "Rodada empatada"
            }
            else if(computer_choice === "Papel") {
                computer_score += 1
                console.log(`Pontos usuario = ${user_score}, Pontos computador = ${computer_score}`)
                return "Você Perdeu"
            }
        
        case "Papel":
            if(computer_choice === "Tesoura") {
                computer_score += 1
                console.log(`Pontos usuario = ${user_score}, Pontos computador = ${computer_score}`)
                return "Você Perdeu!"
            }
            else if(computer_choice === "Pedra") {
                user_score += 1
                console.log(`Pontos usuario = ${user_score}, Pontos computador = ${computer_score}`)
                return "Você Venceu!"
            }
            else if(computer_choice === "Papel") {
                console.log(`Pontos usuario = ${user_score}, Pontos computador = ${computer_score}`)
                return "Rodada empatada!"
            }

        case "Tesoura":
            if(computer_choice === "Tesoura") {
                console.log(`Pontos usuario = ${user_score}, Pontos computador = ${computer_score}`)
                return "Rodada empatada!"
            }
            else if(computer_choice === "Pedra") {
                computer_score += 1
                console.log(`Pontos usuario = ${user_score}, Pontos computador = ${computer_score}`)
                return "Você Perdeu!"
            }
            else if(computer_choice === "Papel") {
                user_score += 1
                console.log(`Pontos usuario = ${user_score}, Pontos computador = ${computer_score}`)
                return "Você Venceu!"
            }
    }
}
    const rodadas = 5

    for(let i = 0 ; i <= rodadas ; i++) {
    console.log(playRound(getComputerChoice()))
    }
}

let user_score = 0
let computer_score = 0

playGame()

if(user_score > computer_score) {
    console.log("Parabéns, você venceu o jogo!")
} 
else if(user_score == computer_score) {
    console.log("Jogo empatado!")
}
else {
    console.log("Você perdeu o jogo!")
}