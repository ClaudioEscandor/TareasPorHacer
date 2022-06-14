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
                name: `${ '1.'.red } Crear tarea`
            },
            {
                value: '2',
                name: `${ '2.'.red } Listar tareas`
            },
            {
                value: '3',
                name: `${ '3.'.red } Listar tareas completadas`
            },
            {
                value: '4',
                name: `${ '4.'.red } Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${ '5.'.red } Completar tarea(s)`
            },
            {
                value: '6',
                name: `${ '6.'.red } Borrar una tarea`
            },
            {
                value: '0',
                name: `${ '0.'.red } Salir`
            },
        ]
    }
];

const inquirerMenu = async() =>{

    console.clear();
    console.log('============================='.red);
    console.log('    Seleccione una opcion    '.yellow);
    console.log('=============================\n'.red);

    const { opcion } = await inquirer.prompt(Preguntas);
    return opcion;
    
}

const pause = async() => {

    const question = [
        {
            type: 'input',
            name: 'Enter',
            message: `Presione ${ 'ENTER'.red } para continuar`
        }
    ]

    console.log('\n');
    await inquirer.prompt(question);
}

const leerInput = async(message) =>{

    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value){
                if(value.length === 0 ){
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);
    return desc;
}

module.exports = {
    inquirerMenu,
    pause,
    leerInput
}