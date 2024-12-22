let userScore = 0;
let compScore = 0;
let c;
let sam = document.querySelector("#userScore");
let comp = document.querySelector("#compScore");
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let q;

const genCompChoice = () => {
    const options = ["rock", "scissor", "paper"];
    const rdmIdx = Math.floor(Math.random() * 3);
    let d = options[rdmIdx];
    return d;
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let c = genCompChoice();
        // console.log("ullu");
        let choiceId = choice.getAttribute("id");
        q = choiceId;
        if ((q === "rock") && (c === "paper")) {
            compScore++;
            msg.textContent = "You Lost!";
        }
        else if ((q === "paper") && (c === "scissor")) {
            compScore++;
            msg.textContent = "You Lost!";
        }
        else if ((q === "scissor") && (c === "rock")) {
            compScore++;
            msg.textContent = "You Lost!";
        }
        else if ((q === "paper") && (c === "rock")) {
            userScore++;
            msg.textContent = "You Won!";
        }

        else if ((q === "scissor") && (c === "paper")) {
            userScore++;
            msg.textContent = "You Won!";
        }
        else if ((q === "rock") && (c === "scissor")) {
            userScore++;
            msg.textContent = "You Won!";
        }
        else if ((q === "rock") && (c === "rock")) {
            msg.textContent = "Match Draw!";
        }
        else if ((q === "scissor") && (c === "scissor")) {
            msg.textContent = "Match Draw!";
        }
        else if ((q === "paper") && (c === "paper")) {
            msg.textContent = "Match Draw!";
        }
        sam.textContent = userScore;
        comp.textContent = compScore;
    }
    );
});
