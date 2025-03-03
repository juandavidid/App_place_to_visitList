
// Importar imagenes- dentro un array
let arrayImage =[
  require('/img_pruebas/destino_Medellin/image_1.jpg'),
  require('/img_pruebas/destino_Medellin/imagen_2.jpg'),
  require('/img_pruebas/destino_Medellin/imagen_3.jpg'),
];
export { arrayImage};





// Function scroll
let scrollLeft = 0;

export default function startAutoScroll( callback ){
  console.log("Hola soy la funcion")
  let scrollAmount = 350; // deplazamiento al siguiente bloque o contenedor
  let scrollSpeed = 2000; // Tiempo en ms entre cada desplazamiento
  setInterval(()=>{
    let newScrollLeft = scrollLeft + scrollAmount;
    // // Si llega al final, vuelve al inicio
    if(newScrollLeft == arrayImage.length * scrollAmount ){
      newScrollLeft = 0;
      
    }
    scrollLeft = newScrollLeft
    // Llamar al callback con el nuevo valor
    if (callback) callback(scrollLeft);    
  }, scrollSpeed)

}

