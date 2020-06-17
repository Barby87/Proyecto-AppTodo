<template>
  <div class="container">
    <h1>{{titulo}}</h1>
    <input type="text" v-model="agregar" @keyup.enter="agregarCurso" placeholder="Agregar un curso">
    <button class="btn btn-primary ml-2" @click="agregarCurso">Agregar Curso</button>
  </div>
</template>

<script>
export default {
    name: 'TodoAdd',
    data() {
        return {
            titulo: 'Todo Add',
            agregar: ''
        }
    },
    methods: {
        agregarCurso() {
            if(this.agregar) {
                // Le voy a mandar la variable, el valor que el usuario ingresó en el input
                this.$store.dispatch('agregarCursoVuex', this.agregar);
                this.agregar = '';
                console.log('Curso agregado a la lista');
            } else {
                console.log('Ingrese un curso');
            }
        }
    },
}
</script>

<style>

</style>