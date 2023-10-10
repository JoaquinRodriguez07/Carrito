const CARD = document.createElement("div");
CARD.classList.add("card");
CARD.innerHTML = `
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <span>USD</span>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <button class="btn btn-primary">Agregar a Carrito</button>
  </div>`
const CARRITO = document.getElementById("carrito");

const url = `https://japceibal.github.io/emercado-api/cats_products/101.json`;

document.addEventListener('DOMContentLoaded', function(){

  //Fetch Lista productos
  fetch(url)
  .then(response => response.json())
  .then(data => crearFichas(data))
  .catch(error => alert(error));

  //Añadir nombre
  nombre = prompt("Inserte tu nombre:");
  insertarNombre(nombre);
  
})

//FICHAS DE AUTOS
function crearFichas(registro){
   
  const producto = document.getElementById("listaProductos");
  
  for (const i of registro.products){

    /* CARD.getElementsByTagName("img")[0].src = `${i.image}`; */
    CARD.getElementsByTagName("h5")[0].textContent=`${i.name}`;
    CARD.getElementsByTagName("h6")[0].textContent=`${i.cost}`;
    CARD.getElementsByTagName("button")[0].id = `${i.id}`;
    
    CARD.getElementById().addEventListener("click", agregarACarro(CARD));
    

    let clon = CARD.cloneNode(true);
    producto.appendChild(clon);
  }
};

function insertarNombre(name){
  let header = document.getElementById("nombre");
  if (name != ""){
    header.innerHTML += name.toUpperCase();
  } else {
    header.innerHTML += "CONSUMIDOR FINAL"
  }
}


function agregarACarro(tarjeta) {
  let titulo = tarjeta.getElementsByTagName("h5")[0].textContent;
  let precio = tarjeta.getElementsByTagName("h6")[0].textContent;
  
  let row = document.createElement("div");
  row.classList.add("row");
  row.innerHTML = `
    <p class="col-4">${titulo}</p>
    <p class="col-3">USD ${precio}</p>
    <p class="col-2">1</p>
    <p class="col-3">USD ${precio * 1}</p>
  `
  CARRITO.appendChild(row);
 
}