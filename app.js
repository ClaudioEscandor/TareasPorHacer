require('colors');
const { inquirerMenu, pause } = require('./Helpers/inquirer');


console.clear();

const main = async () => {

    
    console.log('Hola mundo');

    let opc = '';

    do{

      opc = await inquirerMenu();

      console.log({ opc });

      await pause();


    }while(opc !== '0');


    //pause();

}

main();