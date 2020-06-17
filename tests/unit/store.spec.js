import Vue from'vue';
import Vuex  from 'vuex';
import store from '../../src/store/store';

describe('Pruebas al store vuex', () => {
    beforeAll(()=> { // Instancias de vue vuex
        Vue.use(Vuex);
        // store = new Vuex.Store(store);
    });
});

describe('Primera actions', () => {
    it('Prueba en action agregarCursoVuex', () => {
        // Simulando la activación de la action desde el componente, y el envío de un dato como 'curso nuevo'
        store.dispatch('agregarCursoVuex', 'curso nuevo'); // Envío de un dato como "curso nuevo"
        expect(store.state.cursosLista.length).toBe(3); // La longitud real del arreglo es 2, pero se le está enviando con el dispatch un dato más, por lo que se espera que la longitud de ese array sea de 3.
    });
});

describe('Segunda actions', () => {
    it('Prueba en action eliminarCurso', () => {
        store.dispatch('eliminarCurso', 'curso'); 
        expect(store.state.cursosLista.length).toBe(2); 
    });
});

describe('Tercera actions', () => {
    it('Prueba en action actualizar', () => {
        store.dispatch('actualizar', 'curso'); 
        expect(store.state.cursosLista.length).toBe(2); 
    });
});

describe('Prueba en Getters', () => {
    it('Prueba en getter enviandoCursos', () => {
        // Se guarda la simulación al llamado del getter (desde el componente) en una variable
        let llamadoGetter = store.getters.enviandoCursos;
        expect(llamadoGetter.length).toBe(2); // Se espera que el array tenga 2 datos, porque toma en cuenta la longitud del array desde las pruebas anteriores, ya que se le envió el dato 'curso nuevo' con el dispatch, pero luego se le quitó un elemento del array en la prueba de eliminarCurso.
    });
});