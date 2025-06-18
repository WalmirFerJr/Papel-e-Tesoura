function getComputerChoice() {
    let escolha = Math.floor(Math.random() * 3)

    switch(escolha) {
        case 0:
            return "Pedra"
        case 1:
            return "Papel"
        case 2:
            return "Tesoura"
    }
}

console.log(getComputerChoice())