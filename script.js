function play(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById('user-choice').innerText = `Siz tanladingiz: ${emoji(userChoice)}`;
  document.getElementById('computer-choice').innerText = `Kompyuter tanladi: ${emoji(computerChoice)}`;
  
  let result = '';

  if (userChoice === computerChoice) {
    result = 'Durrang!';
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'scissors' && computerChoice === 'paper') ||
    (userChoice === 'paper' && computerChoice === 'rock')
  ) {
    result = 'Siz yutdingiz! 🎉';
  } else {
    result = 'Kompyuter yutdi! 🤖';
  }

  document.getElementById('winner').innerText = result;
}

function emoji(choice) {
  return choice === 'rock' ? '🪨' :
         choice === 'scissors' ? '✂️' :
         '📄';
}
