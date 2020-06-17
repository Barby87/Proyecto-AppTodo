import { shallowMount } from '@vue/test-utils';// Método ShallowMount no permite montar los hijos de los componentes (montaje superficial), Mount sí tiene acceso a los hijos
// import HelloWorld from '@/components/HelloWorld.vue'; // Importación del componente que voy a testear
import TodoAdd from '@/components/TodoAdd';

// describe('Prueba general del componente HelloWorld', () => { // Descripción de la prueba
//   it('Renderizado de props', () => { // Descripción más específica de la prueba, se pueden tener muchos it dentro del describe
//     const msg ='patito'; // variable de prueba
//     const wrapper = shallowMount(HelloWorld, { // Instancia de wrapper (montaje del componente). Wrapper es una variable local dentro del it
//       propsData: {msg} // Le paso la constante de prueba como un props al componente
//     });
//     expect(wrapper.text()).toMatch(msg); // Probando si el props fue recibido por el componente. Se espera un comportamiento del componente
//     // (wrapper.text()) verifica que el texto que esté renderizado desde el wrapper sea exactamente igual a la variable declarada como msg
//   });
// });

describe('Pruebas en TodoAdd.vue', () => {
  it('prueba1', () => {
    const wrapper = shallowMount(TodoAdd);
    const datosTodoAdd = TodoAdd.data(); // Accediendo a la data del componente

    console.log(datosTodoAdd);
    console.log(wrapper.vm._isMounted); // Indica si el hook mounted se llevó a cabo, regresa true o false. Vm es el view model que facilita wrapper, cada componente debe tener una instancia, en este caso se tiene sólo la instanciación de App.vue, y dentro de este se instancian los demás componentes.
    expect(wrapper.vm._isMounted).toBe(true);
    expect(datosTodoAdd.agregar).toEqual(''); // Verificando que la variable agregar dentro de data sea una variable vacía con el método toEqual (compara strings).
    let entradaInput = wrapper.find("input");
    console.log(entradaInput);
    expect(entradaInput.element.placeholder).toBe("Agregar un curso");
  });

  it('Prueba en botón', () => {
    const wrapper = shallowMount(TodoAdd);
    expect(wrapper.find("button").text()).toBe("Agregar Curso"); // con .text() se está accediendo al texto que contiene el button
    let aux = wrapper.vm.$data.agregar;
    aux = "Curso1";
    console.log(aux);
    // wrapper.find('button').trigger('click'); // Trigger es un disparador de eventos, en este caso está activando al botón
    expect(wrapper.vm.$data.agregar).toBe("");
    // Inicializando una función con jest.
    wrapper.vm.agregarCurso = jest.fn();
    // Llamada a la función agregarCurso
    wrapper.vm.agregarCurso();
    expect(wrapper.vm.agregarCurso.mock.calls.length).toBe(1); // Llamado de la funcion agregarCurso con mock.calls, y se espera que el número de llamados a la función sea de 1 (toBe(1)). Esto sirve para ver si la función está funcionando de forma correscta, ya que al pasar el test quiere decir que responde al llamado
  });
});
