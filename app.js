require('colors');
const { guardarDB, leerDB } = require('./Helpers/guardarArchivo');
const { inquirerMenu, pause, leerInput } = require('./Helpers/inquirer');
const Tareas = require('./models/tareas');


const main = async () => {

    

    let opc = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if(tareasDB){
      //Establecer las tareas

    }
    await pause();

    do{
      //Imprimir el menu
      opc = await inquirerMenu();
      
      switch (opc) {
        case '1':
          //Creacion de opciones
          const desc = await leerInput('Descripcion:');
          tareas.crearTarea(desc);
          break;
        case '2':
          console.log( tareas.listadoAr );
        break;
      }

      guardarDB(tareas.listadoAr);

      await pause();


    }while(opc !== '0');


    //pause();

}

main();