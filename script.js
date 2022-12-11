let button = document.getElementById("button");
let image = document.getElementById("image");
let pokeNumber = document.getElementById("number");
let pokeName = document.getElementById("name");
let weight = document.getElementById("weight");
let height = document.getElementById("height");
let move = document.getElementById("move")

const changePokemon = async () => {
    let randomNumber = Math.ceil(Math.random() * 150) + 1;
    let requestString = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;
    let data = await fetch(requestString);
    console.log(data);

    let response =  await data.json();
    console.log(response);

    image.src = response.sprites.front_default;
    pokeNumber.textContent = `#${response.id}`;
    pokeName.textContent = response.name;
    weight.textContent = `weight  ${response.weight}`;
    height.textContent = `height  ${response.height}`;
    /*move.textContent = `moves:${response.moves.array.move}`;*/

}

button.addEventListener("click", changePokemon);
