const Tarea = require('./tarea');

class Tareas{

    _listado = {};

    get listadoAr(){
        const listado = [];
        Object.keys(this._listado).forEach(key => {

            const tarea = this._listado[key];   
            listado.push( tarea );
        });

        return listado;
    }

    constructor(){
        this._listado = {};
    }

    borrarTarea(id = ''){

        if(this._listado[id]){
            delete this._listado[id];
        }
    }

    cargarTareasFromArray(tareas = []){

        tareas.forEach( tarea => {

            this._listado[tarea.id] = tarea;
        });
    }

    //Metodos
    crearTarea( desc = '' ){

        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto(){
        console.log();
        
        this.listadoAr.forEach( (tarea, i) =>{

            const idx = `${i + 1}.`.green;
            const {desc, compleadoEn} = tarea;
            const estado = (compleadoEn)
                        ? 'Completada'.green
                        : 'Pendiente'.red;

            console.log(`${ idx } ${ desc } :: ${ estado }`);
        });
    }

    listarPendientesCompletadas(completadas = true){

        console.log();
        let contador = 0;
        this.listadoAr.forEach( tarea =>{

            const {desc, compleadoEn} = tarea;
            const estado = (compleadoEn)
                        ? 'Completada'.green
                        : 'Pendiente'.red;
            if(completadas){
                //Mostrar Completadas
                if(compleadoEn){
                    contador =+1;
                    console.log(`${(contador + '.').green} ${ desc } :: ${ compleadoEn }`);
                }
            }else{
                //Mostrar Pendientes
                if(!compleadoEn){
                    contador =+1;
                    console.log(`${(contador + '.').green} ${ desc } :: ${ estado }`);
                }
            }
        });
    }

}

module.exports = Tareas;