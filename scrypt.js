const CARD = document.createElement("div");
CARD.classList.add("card");
CARD.innerHTML = `
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <span>USD</span>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <button class="btn btn-primary">Agregar a Carrito</button>
  </div>`
const CARRITO = document.getElementById("carritoMid");
const PRODUCTO = document.getElementById("listaProductos");
const url = `https://japceibal.github.io/emercado-api/cats_products/101.json`;
//carro es una lista que almacenara los objetos de los items en el carro.
let carro = [];


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
  const PRODUCTO = document.getElementById("listaProductos");
  
  //Para cada producto del fetch, imprimir card y poner el boton
  for (const i of registro.products){

    /* CARD.getElementsByTagName("img")[0].src = `${i.image}`; */
    CARD.getElementsByTagName("h5")[0].textContent=`${i.name}`;
    CARD.getElementsByTagName("h6")[0].textContent=`${i.cost}`;
    CARD.getElementsByTagName("button")[0].id=`${i.id}`;

    let clon = CARD.cloneNode(true);
    PRODUCTO.appendChild(clon);
  }
};

//PONER NOMBRE
function insertarNombre(name){
  let header = document.getElementById("nombre");
  if (name != ""){
    header.innerHTML += name.toUpperCase();
  } else {
    header.innerHTML += "CONSUMIDOR FINAL"
  }
}


//LOGICA CARRO: Crear una lista. Cuando se agrega un objeto al carro, se añade el objeto con sus datos a la lista, con su id como identificador. Luego, se "recarga" la lista. Esta lista puede ser subida al local


//Evento: cuando se apreta un boton de carrito, agregar al carro al PARENT del boton(la tarjeta de producto)
PRODUCTO.addEventListener("click", btn=>{
  if (btn.target.classList.contains("btn"))
    agregarACarro(btn.target.parentElement);
})

//Agrega producto a carro. Si ya pertenece, aumenta su cantidad.
function agregarACarro(tarjeta) {

  //Crea objeto con datos:
  let producto = {
    id:tarjeta.getElementsByTagName("button")[0].id,
    name: tarjeta.getElementsByTagName("h5")[0].textContent,
    cost: tarjeta.getElementsByTagName("h6")[0].textContent,
    cantidad: 1,
  }

  //Si ya pertenece el id al carro, sumarlos.
  //Se analiza si la id del objeto ya esta presente en la lista carro
  let indice = carro.findIndex(b => Object.values(b).includes(`${producto.id}`));
  //Si ya está, se le suma la cantidad al producto y se cambia por él en la lista
  if (indice > -1){
    producto.cantidad = (carro[indice].cantidad + 1)
    carro[indice] = producto;
  }
  //Si no está, pushear el producto a la lista
  else carro.push(producto);
  
  //Imprimir fichas
  imprimirCarrito();
}

//Imprime todos los productos en el carrito
function imprimirCarrito(){
  //Vacia el carrito
  CARRITO.innerHTML='';

  //Para cada elemento de la lista carro, crea una fila
  for (let producto of carro){

    let titulo = producto.name;
    let precio = producto.cost;
    let cantidad = producto.cantidad;

    let row = document.createElement("div");
    row.classList.add("row");
    row.innerHTML = `
      <p class="col-4">${titulo}</p>
      <p class="col-3">USD ${precio}</p>
      <p class="col-2">${cantidad}</p>
      <p class="col-3">USD ${precio * cantidad}</p>
    `
    CARRITO.appendChild(row);
  }
}

//FALTA
//Eliminar elemento de la lista
//Subtotal (Tener en cuenta que se debe actualizar cada vez que se agrega/quita un elemento a la lista)
//No esta en local... pls no


//Pruebas
/* 
let a = [];
a.push({});
a.push({
  abc: "abc",
  def: "def",
});
console.log(a);
let respuesta = a.find(b => b.hasOwnProperty("abc"));
console.log (respuesta); */