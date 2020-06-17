<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-primary mb-5">
        <div class="container">
            <router-link class="navbar-brand" to="/">Home</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/login">Login</router-link>
                    </li>
                     <li class="nav-item">
                        <router-link class="nav-link" to="/agregar">Agregar curso</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/ver">Ver cursos</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  </div>
</template>

<script>
export default {
    name: 'navbar'
}
</script>
