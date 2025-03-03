import startAutoScroll from '/utils/startAutoScroll'
import {arrayImage} from '/utils/startAutoScroll'
Component({
  mixins: [],
  
  data: {
    
    arrayCard:"",
    arrayImage: arrayImage,
    scrollLeft:0,

    
  },

  props: {
    
  },

  
  didMount() {

    console.log("Imágenes cargadas:", this.data.arrayImage);
    
    
    // 1. funcition - scroll(desplazamiento imagenes)
    startAutoScroll((nuevoValor) => {
      // Actualizar el estado del componente con el nuevo valor
      this.setData({ scrollLeft: nuevoValor }, () => {
         this.data.scrollLeft
      });
    });


    
    this.setData({
      arrayImage: this.data.arrayImage.map(img => "/" + img )
    })
    console.log(this.data.arrayImage)

    // ---------------Data de localStorage--------------------------------


    // Obtener todas las claves de localStorage
    let dataStorage = my.getStorageInfoSync(); 
    
    let arrayDataStorageKeys = dataStorage.keys; // Lista de claves en localStorage
    
    // Crear objeto para almacenar imágenes por ciudad
    let arrayCiudades = [];

    // Recorrer cada clave del LocalStorage y obtener su contenido
    arrayDataStorageKeys.forEach((key) => {
     let data = my.getStorageSync({ key: key });  // Obtener datos de cada ciudad

     if (data && data.data && data.data.filePath) {
      // Guardar en el objeto con la clave de la ciudad y sus imágenes
       // Crear un objeto con la estructura deseada y agregarlo al array
       arrayCiudades.push({
        ciudad: key,
        imagenes: data.data.filePath
       }); 
     }
    });

    console.log(arrayCiudades);

    this.setData({arrayCard:arrayCiudades}) // Guarda los destinos por Ciudad
   //-------------------------------------------------------------------------



    


    

    
  },
  didUpdate() {
    
  },
  didUnmount() {
    
  },
  methods: {

    

    

    
  },
});
