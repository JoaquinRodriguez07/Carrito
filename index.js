const url = `https://japceibal.github.io/emercado-api/cats_products/101.json`;

document.addEventListener('DOMContentLoaded', function(){

    fetch(url)
    .then(response => response.json())
    .then(data => crearFichas(data))


})

fetch(url)
.then(response => response.json())
.then(data => crearFichas(data))
  
function crearFichas(registro){
   
    const producto = document.getElementById(producto)
  
    for (const i of registro.products){
      producto.innerHTML +=
        `
        <div class="articulo" onclick ="viajar(${i.id})">
          <div class="imagenDeArticulo">
              <img src= ${i.image}></img>
          </div>
          <div class="descDeArticulo">
            <p class="titulo buscador"> ${i.name} </p>
            <p class="dinero"> ${i.currency} ${i.cost} </p>
            <p class ="descripcion buscador"> ${i.description} </p>
            <p class ="sold"> Unidades vendidas: ${i.soldCount}</p>
            <button class="botonDeAgregar">Agregar a Carrito</button>
          </div>
        <div>
      `
    }
  };
