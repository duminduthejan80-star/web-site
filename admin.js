let games = JSON.parse(localStorage.getItem("games")) || [];
let editIndex = null;

function login() {
  if (document.getElementById("password").value === "8036") {
    loginBox.style.display = "none";
    adminBox.style.display = "block";
    renderAdminGames();
  } else {
    alert("Wrong password");
  }
}

function addGame() {
  const name = gameName.value;
  const link = gameLink.value;
  const image = gameImage.value;
  const category = gameCategory.value;

  if (!name || !link || !image) {
    alert("Fill all fields");
    return;
  }

  if (editIndex === null) {
    games.push({ name, link, image, category });
  } else {
    games[editIndex] = { name, link, image, category };
    editIndex = null;
  }

  localStorage.setItem("games", JSON.stringify(games));
  clearInputs();
  renderAdminGames();
}

function editGame(i) {
  gameName.value = games[i].name;
  gameLink.value = games[i].link;
  gameImage.value = games[i].image;
  gameCategory.value = games[i].category;
  editIndex = i;
}

function deleteGame(i) {
  if (!confirm("Delete game?")) return;
  games.splice(i, 1);
  localStorage.setItem("games", JSON.stringify(games));
  renderAdminGames();
}

function renderAdminGames() {
  adminGameList.innerHTML = "";
  games.forEach((g, i) => {
    adminGameList.innerHTML += `
      <div class="game-card">
        <b>${g.name}</b><br>
        <small>${g.category}</small><br><br>
        <button onclick="editGame(${i})">Edit</button>
        <button onclick="deleteGame(${i})">Delete</button>
      </div>
    `;
  });
}

function clearInputs() {
  gameName.value = "";
  gameLink.value = "";
  gameImage.value = "";
}

<input type="text" id="gameLink" placeholder="Download Link">