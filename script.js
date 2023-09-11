// Insert your code here
for (let i = 1; i <= 16; i++) {
const pokedex = fetch('https://pokeapi.co/api/v2/pokemon/' + [i]) 
    .then(response => response.json())
    .then(data => {
            document.querySelector('#pokemonContainer').innerHTML += `<div id="pokemonContainer">
            <div class="pokemon ${data.types[0].type.name}">
                <div class="imgContainer">
                    <img src="${data.sprites.front_default}" alt="${data.name}" />
                </div>
                <div class="info">
                    <h3 class="name">${data.name}</h3>
                    <span class="type">Type: <span>${data.types[0].type.name}</span></span>
                </div>
            </div>
        </div>`
            
            })
            
    }
let compteur =1
document.querySelector('#next').addEventListener('click', function(){
    
    for (let n = (compteur*15)+1; n <((compteur+1)*15)+1; n++) {
        const pokedex2 = fetch('https://pokeapi.co/api/v2/pokemon/' + [n])
                .then(response => response.json())
                .then(data => {
                    document.querySelector('#pokemonContainer').innerHTML += `<div id="pokemonContainer">
                    <div class="pokemon ${data.types[0].type.name}">
                        <div class="imgContainer">
                            <img src="${data.sprites.front_default}" alt="${data.name}" />
                        </div>
                        <div class="info">
                            <h3 class="name">${data.name}</h3>
                            <span class="type">Type: <span>${data.types[0].type.name}</span></span>
                        </div>
                    </div>
                </div>`
                
                }
            )
        }
        compteur++
    }
    )
