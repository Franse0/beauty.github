const {log}=console;

// Esta bueno para tener un javascript prolijo empezar por llamar a los elementos del html que vamos a usar
// En esta pagina las funciones van  a ser las siguientes
/*
abrir y cerrar en nav
abrir y cerrar el carrito
aumentar el contador de productos 
finalizar compra
borrar carrito
detener la actualizacion por defecto del formulario
*/

// Paso uno: Llamamos a los elementos

// boton para abrir y cerrar el carrito 
const cartMenu =document.querySelector(".cart-label");
// contenido del carrito
const carrito =document.getElementById("carrito");
// llamo al total del carrito 
const totalCarrito = document.getElementById("total-carrito");
// llamo a el total de las cantidades 
const totalCantidad = document.getElementById("cantidad")
// boton de comprar
const btnComprar = document.querySelector(".comprar");
// boton de vaciar
const btnVaciar = document.querySelector(".vaciar");

// logo del menu hamburguesa para abrir el nav
const bars = document.getElementById("m_burguer");
// nav
const nav = document.getElementById("nav");

// llamo al contenedor de productos
const contenedorProductos = document.querySelector(".productos");

// formulario de pedido de turnos
const form = document.querySelector("form")


// Paso 2:Inicio las varibles que voy a utilizar para mostrar el total del carrito
// inicio variables del carrito
let cantidad=0;
let total=0;


// funcion para abir el nav
const abirirNav =(e)=>{
    nav.classList.toggle("open-nav");
    if(carrito.classList.contains("abrir-carrito")){
        carrito.classList.remove("abrir-carrito")
    }
};

// funcion para abir el carrito
const toggleCarrito =(e)=>{
    carrito.classList.toggle("abrir-carrito");
    if(nav.classList.contains("open-nav")){
        nav.classList.remove("open-nav");
        return;
    }

};

//funcion para agregar prodcuto
const agregarAlCarrito =(e)=>{
 if(!e.target.classList.contains("agregar"))return;
    total += 1339;
    cantidad +=1;
    log(cantidad);
    log(total);
    totalCantidad.innerHTML=cantidad;
    totalCarrito.innerHTML="$"+ total;
    alert("producto agregado al carrito")
}

const rendertotal=()=>{
    totalCantidad.innerHTML=cantidad;
    totalCarrito.innerHTML="$"+ total;
};


// funcion para finalizar compra
const completarCompra=()=>{
    if(total>0){
        if(window.confirm("desea confirmar su compra")){
            cantidad=0;
            total=0;
            rendertotal()
            alert("gracias por confiar en nosotros")
        }
    }
};

// funcion para vaciar carrito
const borrarTodo =()=>{
    if(total>0){
        if(window.confirm("Seguro que quieres vaciar el carrito?")){
            cantidad=0;
            total=0;
            rendertotal()
        }
    }
};

// Paso 3: inicio la funcion inicializadora de las funciones que voy a ejecutar
// Esta funcion va a tener todas las funciones adentro
const init =()=>{
    // abrir el nav
    bars.addEventListener("click", abirirNav);
    // abrir el carrito
    cartMenu.addEventListener("click", toggleCarrito);
    // agregar elemento al carrito
    contenedorProductos.addEventListener("click", agregarAlCarrito);
    // renderizo el total cuando se cargue la pagina
    document.addEventListener("DOMContentLoaded", rendertotal);
    // completar compra
    btnComprar.addEventListener("click",completarCompra);
    // borrar todo lo del carrito
    btnVaciar.addEventListener("click", borrarTodo);

    // Preveer la actualizacion por defecto de los formularios
    form.addEventListener("click",(e)=>{
        e.preventDefault()
    })
};


// funcion ejecutandose
init()