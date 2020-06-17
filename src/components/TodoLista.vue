<template>
  <div class="container">
      <h1>Lista de cursos</h1>

      <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-4 my-3" v-for="(curso, index) in traerCursos" :key="index">
                <div class="card shadow" :class="{gradiente: curso.completed}">
                    <div class="card-body">
                        <h5 class="card-title">{{curso.name}}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{{curso.id}}</h6>
                        <p class="card-text">El curso está terminado <span>{{curso.completed ? 'Sí' : 'No'}}</span></p>
                        <button class="btn btn-success mx-2" @click="completado(curso.id)">{{curso.completed ? 'actualizado' : 'actualizar'}}</button>
                        <button class="btn btn-danger mx-2" @click="eliminarCurso(curso.id)">Eliminar</button>
                    </div>
                </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'TodoList',
    computed: {
        traerCursos() {
            return this.$store.getters.enviandoCursos;
        }
    },
    methods: {
        eliminarCurso(id) {
            if (confirm('¿Desea eliminar?')) {
                this.$store.dispatch('eliminarCurso', id)
            }
        },
        completado(id) {
            this.$store.dispatch('actualizar', id);
        }
    }
}
</script>

<style>

.gradiente {
    background: #A1FFCE;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #FAFFD1, #A1FFCE);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #FAFFD1, #A1FFCE); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.shadow {
    -webkit-box-shadow: 10px 13px 26px -5px rgba(105,96,105,0.72);
    -moz-box-shadow: 10px 13px 26px -5px rgba(105,96,105,0.72);
    box-shadow: 10px 13px 26px -5px rgba(105,96,105,0.72);
}

</style>