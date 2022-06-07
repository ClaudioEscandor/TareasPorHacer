const inquirer = require('inquirer');
require('colors');

const Preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: [
            {
                value: '1',
                name: '1. Crear tarea'
            },
            {
                value: '2',
                name: '2. Listar tareas'
            },
            {
                value: '3',
                name: '3. Listar tareas completadas'
            },
            {
                value: '4',
                name: '4. Listar tareas pendientes'
            },
            {
                value: '5',
                name: '5. Completar tarea(s)'
            },
            {
                value: '6',
                name: '6. Borrar una tarea'
            },
            {
                value: '0',
                name: '0. Salir'
            },
        ]
    }
];

const inquirerMenu = async() =>{

    console.clear();
    console.log('============================='.red);
    console.log('    Seleccione una opcion    ');
    console.log('=============================\n'.red);

    const { opcion } = await inquirer.prompt(Preguntas);
    return opcion;
    
}

const pause = async() => {

    const question = [
        {
            type: 'input',
            name: 'Enter',
            message: `Presione ${ 'enter'.red } para continuar`
        }
    ]

    console.log('\n');
    await inquirer.prompt(question);
}

module.exports = {
    inquirerMenu,
    pause
}