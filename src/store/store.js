import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cursosLista: [
      {
        id: 1,
        name: 'Vue Js',
        completed: false
      },
      {
        id: 0,
        name: 'React Js',
        completed: false
      }
    ]
  },
  getters: {
    enviandoCursos(state) {
      return state.cursosLista;
    }
  },
  mutations: {
    // La mutación recibe el state como parámetro, y la variable enviada por el action (recibidoCursoActions)
    almacenandoCurso(state, recibidoCursoActions) {
      // Generando id de forma aleatoria (Math.random genera números del 0 al 1)
      let idNuevo = Math.ceil(Math.random()*10);

      // Mientras haya un idNuvo
      while(idNuevo) {
        // Guardando dentro de una variable la búsqueda de un elemento que sea igual al idNuevo que se está generando (lo ideal es que no exista un id igual)
        let busqueda = state.cursosLista.find(element => element.id === idNuevo);
        // Si el id no existe quedará como undefined
        if(busqueda == undefined && idNuevo > 0) {
          break; // Se sale del ciclo, ya que undefined quiere decir que ese id se puede utilizar
        } else if (busqueda.id == idNuevo) {
          // Le suma un número y lo vuelve a comparar, y sale del ciclo hasta que los valores no coincidan
          idNuevo++;
        }
      }

      // Creando objeto de curso para agregarlo a la lista de cursos
      let cursoTemporal = {
        id: idNuevo,
        name: recibidoCursoActions,
        complete: false
      };
      // Agregando la variable al array cursosLista con unshift(a la primera posición del array)
      state.cursosLista.unshift(cursoTemporal);
    },
    eliminandoCurso(state, id) {
      // compara el valor de id enviado con el id del elemento del array
      let cursoPorBorrar = state.cursosLista.findIndex(valor => valor.id === id);
      state.cursosLista.splice(cursoPorBorrar, 1);
      setTimeout(()=>{
        alert('Borrado con éxito');
      }, 1000);
    },
    updateCurso(state, id) {
      let actualizado = state.cursosLista.find(element => element.id == id);
      actualizado.completed = !actualizado.completed;// El usuario puede tener la opción de volver a su estado anterior las veces que quiera
    }
  },
  actions: {
    // La acion recibe una variable, por convención se llama (context) o {commit}, aparte recibe una variable como parámetro, que es la variable que se envió desde el método del componente (recibidoCurso)
    agregarCursoVuex(context, recibidoCurso) {
      //Llamar a la mutación
      context.commit('almacenandoCurso', recibidoCurso);
    },
    eliminarCurso(context, id) {
      context.commit('eliminandoCurso', id);
    },
    actualizar(context, id) {
      context.commit('updateCurso', id);
    }
  }
});
