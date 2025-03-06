import startAutoScroll from '/utils/startAutoScroll'

Component({
  mixins: [],
  
  data: {
    
    arrayCard:"",
    //arrayImage: arrayImage,
    scrollLeft:0,
    indixePosition:"",
    status:"Pendiente",
    modalOpened:false,
    description:"",
    imagDescription:"",
    cityDescription:""
    
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
    
    // ---------------Data de localStorage--------------------------------


    // Obtener todas las claves de localStorage
    let dataStorage = my.getStorageInfoSync(); 
    let arrayDataStorageKeys = dataStorage.keys; // Lista de claves en localStorage
    // Crear objeto para almacenar imágenes por ciudad
    let arrayCiudades = [];
    // Recorrer cada clave del LocalStorage y obtener su contenido
    arrayDataStorageKeys.forEach((key) => {
     let data = my.getStorageSync({ key: key });  // Obtener datos de cada ciudad
     if (data && data.data && data.data.filePath && data.data.descripcion)  {
      // Guardar en el objeto con la clave de la ciudad y sus imágenes
       // Crear un objeto con la estructura deseada y agregarlo al array
       arrayCiudades.push({
        ciudad: key,
        imagenes: data.data.filePath,
        description:data.data.descripcion
       }); 
     }
    });
    console.log(arrayCiudades);
    this.setData({arrayCard:[...arrayCiudades]}) // Guarda los destinos por Ciudad
    //-------------------------------------------------------------------------
    // Funcion que elminia la los destinos
   

    
  
    
  },


    

  didUpdate() {


    
  },
  didUnmount() {
    
  },

  methods: {
     
    // Funcion que elminia la los destinos
    onBtnRemove(e){

      // Elimina los destinos
      my.removeStorage({
        key:e.currentTarget.dataset.value,
        success:function(){my.alert({content:'Datos Eliminados Exitosamente'})},
        fail:function(){
          my.alert({content: 'Error al eliminar los datos'})
        }
      })
      
    } ,

    // VENTA MODAL
    openModalClick(e){
      console.log("HOLA SOY DESDE LA FUNCION PRINCIPAL",e)

    
      let dataSotere = my.getStorageSync({key:e.currentTarget.dataset.value})
      console.log("DATOS OBTENIDOS",dataSotere)

      // Ingresar datos- ciudad
      this.setData({
        cityDescription:dataSotere.data.ciudad
      })

      // Ingresa datos - description
      this.setData({
        description:dataSotere.data.descripcion
      })
      // Ingresa datos - Imagenes
      this.setData({
        imagDescription:dataSotere.data.filePath
      })
      console.log(this.data.imagDescription);
      this.setData({
        modalOpened : true
      })

    },
    
    
    onModalClose(){
      this.setData({ modalOpened: false })

    },

    


  },
});
