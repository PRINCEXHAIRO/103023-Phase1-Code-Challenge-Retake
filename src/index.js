// Your code here
const API = "http://localhost:3000/characters";
const characterBar = document.getElementById("character-bar");
const form = document.getElementById("votes-form");

fetch(API)
  .then((res) => res.json())
  .then((res) => renderAnimals(res));

function renderAnimals(animals) {
  console.log(animals);
  animals.forEach(renderAnimal);
}

function renderAnimal(animal) {
  const characters = document.createElement("span");

  characters.innerHTML = animal.name;

  characterBar.append(characters);

  const characterInfo = document.getElementById("detailed-info");
  const character = document.createElement("div");

  character.append(`
    <p ${animal.name} </p>
    <img src= ${animal.image}/>
  `);

  characterInfo.appendChild(character);
}
// Add Votes Button

form.addEventlistener("submit", (e) => {
  e.preventDefault();
  e.target.votes.value;
});

/*const votes = animal.votes + 1;

  fetch(`${API}/${animal.id}`, {
    headers,
    method: "PATCH",
    body: JSON.stringify({ votes }),
  })
    .then((res) => res.json())
    .then(() => {
      animal.votes = votes;
      renderAnimal(AnimalList);
    });*/
