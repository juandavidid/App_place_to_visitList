Page({
  data: {
    ciudad:"",
    pais:"",
    descripcion:"",
    filePath:"",
    

  },
  //1.Funcion agrega imagen
  handleFile(){

    //Metodo para subir Imagenes
    my.chooseImage({

      count: 4, // Limite para subir imagenes
      success:(res) => {
        console.log(res);
        this.setData({
          filePath:res.apFilePaths
        })
      }

    })

  },

  //2. Funcion - obtiene data y guarda localStorge
  formSubmit(e){
    console.log("Datos del formulario:", this.data);
    // Guardar en almacenamiento localStorage
    my.setStorageSync({
      key:this.data.ciudad,
      data:this.data,
    })
  },
  
  formReset(){
    console.log("form has a reset event")

  },
  //3. funcion captura los valores del Input
  onInputData(e){
    console.log(e);
    const name = e.target.dataset.name;
    const value = e.detail.value;
    this.setData({
      [name]: value, // Actualiza la propiedad correspondiente en el estado
    });


    




  },
  onLoad( ) {


   
  },
});
