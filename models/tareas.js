const Tarea = require('./tarea');

class Tareas{

    _listado = {};

    constructor(){
        this._listado = {};
    }

    //Metodos
    crearTarea( desc = '' ){

        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

}

module.exports = Tareas;