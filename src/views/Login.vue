<template>
  <div class="container mt-5">
    <div class="alert alert-danger" role="alert" v-if="error">
      {{error}}
    </div>
    <form class="mt-5">
        <div class="form-group">
            <label for="exampleInputEmail1">Ingrese correo electrónico</label>
            <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="email@email.com" v-model="correo">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Ingrese la contraseña</label>
            <input type="password" class="form-control" placeholder="**********" v-model="clave">
        </div>
        <button type="submit" class="btn btn-primary">Iniciar sesión</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      correo: '',
      clave: '',
      error: '' // Cuando el usuario no esté registrado
    }
  }         
}
</script> 
