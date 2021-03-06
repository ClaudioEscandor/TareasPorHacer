require('colors');
const { guardarDB, leerDB } = require('./Helpers/guardarArchivo');
const { inquirerMenu, pause, leerInput, listadoTareasBorrar, confirmar, mostrarListadoCheckList } = require('./Helpers/inquirer');
const Tareas = require('./models/tareas');


const main = async () => {

    

    let opc = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if(tareasDB){
      //Cargar tareas
      tareas.cargarTareasFromArray(tareasDB);

    }

    do{
      //Imprimir el menu
      opc = await inquirerMenu();
      
      switch (opc) {
        case '1'://Creacion de opciones

          const desc = await leerInput('Descripcion:');
          tareas.crearTarea(desc);
          
          break;
        case '2':
          tareas.listadoCompleto();
        break;

        case '3'://Listar Completadas
          tareas.listarPendientesCompletadas(true);
        break;

        case '4'://Listar Pendientes
          tareas.listarPendientesCompletadas(false);
        break;

        case '5'://Completado o pendiente 
           const ids = await mostrarListadoCheckList(tareas.listadoAr);
           tareas.toggleCompletadas(ids);
      break;

        case '6'://Borrar Tarea
          const id = await listadoTareasBorrar(tareas.listadoAr);
          if(id !== '0'){
            const ok = await confirmar('¿Esta seguro?');
          if ( ok ){

            tareas.borrarTarea(id);
            console.log('Tarea Borrada');
          }
        }  
        break;
      }

      guardarDB(tareas.listadoAr);

      await pause();


    }while(opc !== '0');


    //pause();

}

main();