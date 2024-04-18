// ประกาศตัวแปรเริ่มต้น
const rockBtn = document.getElementById('rock-btn');
const scissorsBtn = document.getElementById('scissors-btn');
const paperBtn = document.getElementById('paper-btn');
const imageChoicePlayer = document.getElementById('img-choice-p')
const imageChoiceComputer = document.getElementById('img-choice-c')
const resultText = document.getElementById('result-text')
const pScore = document.getElementById('player-score')
const cScore = document.getElementById('computer-score')
const showResult = document.getElementById('result')
const roundText = document.getElementById("round")
let playerScore = 0
let computerScore = 0
let round = 0

// รับค่าข้อมูลจากคอมพิวเตอร์
function getComputerChoice() {
    const choice = ["rock","paper","scissor"]
    const randomChoice = Math.floor(Math.random() * choice.length)
    return choice[randomChoice]
}

// โชว์รูปภาพตัวเลือกของผู้เล่น
const showPlayerChoice = (playerChoice) => {
    const choice = {
        "ROCK" : "./img/icons8-hand-rock-100.png",
        "SCISSOR" : "./img/icons8-hand-peace-100.png",
        "PAPER" : "./img/icons8-stop-gesture-100.png"
    }

    // กำหนด imageSrc มีค่าเท่ากับ Object ของตัวเลือกผู้เล่น
    const imageSrc = choice[playerChoice];
    if (imageSrc) { // เช็คว่ามีค่าหรือไม่ ? (truthy or falsy)
        imageChoicePlayer.src = imageSrc;
    }
}

// โชว์รูปภาพตัวเลือกของคอมพิวเตอร์
const showComputerChoice = (computerChoice) => {
    const choice = {
        "ROCK" : "./img/icons8-hand-rock-100.png",
        "SCISSOR" : "./img/icons8-hand-peace-100.png",
        "PAPER" : "./img/icons8-stop-gesture-100.png"
    }

    const imageSrc = choice[computerChoice];
    if (imageSrc) {
        imageChoiceComputer.src = imageSrc;
    }
}

// จุดเริ่มต้นการทำงาน
function playGame(choice) {
    const playerSelection = choice.toUpperCase()
    const computerSelection = getComputerChoice().toUpperCase()
    
    round++

    showPlayerChoice(playerSelection)
    showComputerChoice(computerSelection)

    roundText.textContent = `Round ${round}`

    if (round <= 2) {
        showResult.style.display = "flex"
    }
    
    if (playerSelection === computerSelection){
        resultText.textContent = "เสมอจ้า อิอิ"
    } else if ((playerSelection === "ROCK" && computerSelection === "SCISSOR") ||
            (playerSelection === "SCISSOR" && computerSelection === "PAPER") ||
            (playerSelection === "PAPER" && computerSelection === "ROCK")) {
        playerScore++
        resultText.textContent = "เจ๋งเป้ง ชนะแล้ว"
    } else {
        computerScore++
        resultText.textContent = "บอทมันโกงผม"
    }

    console.log(playerScore)
    console.log(computerScore)

    pScore.textContent = `Player : ${playerScore}`
    cScore.textContent = `Player : ${computerScore}`

    if (playerScore > 5) {
        console.log(`ใน if ${playerScore}`)
        alert("มนุษยชาติเป็นฝ่ายชนะ!!")
        let reset = confirm("ต้องการเริ่มเกมใหม่มั้ย ?")
        reset ? resetGame() : resetGame()
    } else if (computerScore > 5) {
        console.log(`ใน if ${computerScore}`)
        alert("หุ่นยนต์จะล้างเผ่าพันธุ์มนุษย์!!")
        let reset = confirm("ต้องการเริ่มเกมใหม่มั้ย ?")
        reset ? resetGame() : resetGame()
    }
}

const resetBtn = document.getElementById('reset-btn');

const resetGame = () => {
    round = 0;
    playerScore = 0; 
    computerScore = 0;
    pScore.textContent = `Player : ${playerScore}`;
    cScore.textContent = `Player : ${computerScore}`;
    roundText.textContent = `Round ${round}`;
    imageChoicePlayer.src = "";
    imageChoiceComputer.src = "";
    resultText.textContent = "";
    showResult.style.display = "none";
    roundText.style.display = "none"
}

rockBtn.addEventListener("click", () => {
    playGame("rock")
})
scissorsBtn.addEventListener("click", () => {
    playGame("scissor")
})
paperBtn.addEventListener("click", () => {
    playGame("paper")
})