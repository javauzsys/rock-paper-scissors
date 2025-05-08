function play(userChoice) {
  const countdownEl = document.getElementById("countdown");
  const userChoiceEl = document.getElementById("user-choice");
  const computerChoiceEl = document.getElementById("computer-choice");
  const winnerEl = document.getElementById("winner");

  countdownEl.innerText = "";
  userChoiceEl.innerText = "";
  computerChoiceEl.innerText = "";
  winnerEl.innerText = "";

  const steps = ["Tosh...", "Qaychi...", "Qog‘oz!"];
  let i = 0;

  const interval = setInterval(() => {
    countdownEl.innerText = steps[i];
    i++;
    if (i === steps.length) {
      clearInterval(interval);
      
      setTimeout(() => {
        showResult(userChoice);
      }, 500);
    }
  }, 1000);
}

function showResult(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById("user-choice").innerText = `🧑 Siz: ${emoji(userChoice)}`;
  document.getElementById("computer-choice").innerText = `🤖 Kompyuter: ${emoji(computerChoice)}`;

  let result = "";

  if (userChoice === computerChoice) {
    result = "🤝 Durrang!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
  ) {
    result = "🎉 Siz yutdingiz!";
  } else {
    result = "💀 Kompyuter yutdi!";
  }

  document.getElementById("winner").innerText = result;
}

function emoji(choice) {
  return choice === "rock" ? "👊 Tosh" :
         choice === "scissors" ? "✌️ Qaychi" :
         "🖐 Qog‘oz";
}
