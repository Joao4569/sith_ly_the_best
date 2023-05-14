document.getElementById('show-rules').addEventListener('click', function() {
    var rules = document.getElementById('game-rules');
    rules.classList.toggle('hidden');
  });

  document.getElementById('show-rules').addEventListener('click', function() {
    document.getElementById('rules-modal').style.display = 'block';
  });
  
  document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('rules-modal').style.display = 'none';
  });

  document.getElementById('start-game').addEventListener('click', function() {
    window.open("game.html", "_blank");
  });
