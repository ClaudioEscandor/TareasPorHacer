require('colors');
const { inquirerMenu, pause, leerInput } = require('./Helpers/inquirer');
const Tareas = require('./models/tareas');


const main = async () => {

    
    console.log('Hola mundo');

    let opc = '';
    const tareas = new Tareas();

    do{

      opc = await inquirerMenu();
      
      switch (opc) {
        case '1':
          //Creacion de opciones
          const desc = await leerInput('Descripcion:');
          tareas.crearTarea(desc);
          break;
        case '2':
          console.log( tareas._listado );
        break;
      }

      await pause();


    }while(opc !== '0');


    //pause();

}

main();