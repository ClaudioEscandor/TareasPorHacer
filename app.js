require('colors');

const { mostrarMenu, pause } = require('./Helpers/mensajes');
console.clear();

const main = async () => {

    
    console.log('Hola mundo');

    let opc = '';

    do{

      opc = await mostrarMenu();

      console.log({ opc });

      if (opc !== '0') await pause();

    }while(opc !== '0');


    //pause();

}

main();