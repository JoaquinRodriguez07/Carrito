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

/* fetch(url)
.then(response => response.json())
.then(data => crearFichas(data)) */
  
function crearFichas(registro){
   
  const producto = document.getElementById("listaProductos");
  
  for (const i of registro.products){
    producto.innerHTML +=
      `
      <div class="articulo">
      <div class="descDeArticulo">
        <p class="titulo buscador"> ${i.name} </p>
        <p class="dinero"> ${i.currency} ${i.cost} </p>
        <p class ="sold"> Unidades vendidas: ${i.soldCount}</p>
        <button class="botonDeAgregar">Agregar a Carrito</button>
      </div>
    <div>
    `
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