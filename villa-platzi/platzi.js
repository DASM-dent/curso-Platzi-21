var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
    url: "tile.png",
    cargaOK: false
}
var vaca = {
    URL: "vaca.png",
    cargaOK: false
};

var cantidad = aleatorio(5, 25);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarfondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar();
}
function cargarFondo()
{
    fondo.cargaOK = true;
}

function dibujar() 
{
   if(fondo.cargaOK)
   {
       papel.drawImage(fondo.imagen, 0, 0);
   }
   if(vaca.cargaOK)
   {
       console.log(cantidad);
       for (var v = 0; v < cantidad; v++) {
       var x = aleatorio(0, 6);
       var y = aleatorio(0, 6);
       var x = x * 80;
       var y = y * 80;
       papel.drawImage(vaca.imagen, x, y); 
       }
   }
}
function dibujarVacas()
{
    papel.drawImage(vaca, 10, 10);
}
function dibujarCerdos()
{
    papel.drawImage(cerdo, 10, 300);
}
function dibujarPollos()
{
    papel.drawImage(pollo, 300, 150);
}

function aleatorio(min, maxi)
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
} 
