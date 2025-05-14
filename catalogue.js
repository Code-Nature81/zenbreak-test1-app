let countdownTimer;
let countdownTime = 0;

function generateDurationButtons() {
  const container = document.getElementById('duration-buttons');
  for (let i = 5; i <= 120; i += 5) {
    const btn = document.createElement('button');
    btn.textContent = `${i} min`;
    btn.addEventListener('click', () => startRelaxation(i));
    container.appendChild(btn);
  }
}

function startRelaxation(minutes) {
  countdownTime = minutes * 60;
  document.querySelector('.catalogue-container').classList.add('hidden');
  document.getElementById('countdown-section').classList.remove('hidden');
  playSound('sounds/ambient1.mp3');
  updateCountdown();
  countdownTimer = setInterval(updateCountdown, 1000);
}

function updateCountdown() {
  const minutes = Math.floor(countdownTime / 60);
  const seconds = countdownTime % 60;
  document.getElementById('countdown-display').textContent = 
    \`\${String(minutes).padStart(2, '0')}:\${String(seconds).padStart(2, '0')}\`;
  countdownTime--;

  if (countdownTime < 0) {
    clearInterval(countdownTimer);
    playZenMusic();
  }
}

function playSound(path) {
  const audio = new Audio(path);
  audio.play();
}

function playZenMusic() {
  const zenMusic = new Audio('music/zen_music.mp3');
  zenMusic.play();
  zenMusic.addEventListener('ended', () => {
    const notification = new Audio('sounds/notification.mp3');
    notification.play();
  });
}

document.addEventListener('DOMContentLoaded', generateDurationButtons);
