let games = JSON.parse(localStorage.getItem("games")) || [];
const list = document.getElementById("gameList");

function renderGames() {
  list.innerHTML = "";

  games.forEach(game => {
    list.innerHTML += `
      <div class="game-card">
        <img src="${game.image}" class="game-img">
        <h3>${game.name}</h3>
        <small>${game.category}</small><br><br>
        <a href="${game.link}" target="_blank">Download</a>
      </div>
    `;
  });
}

renderGames();