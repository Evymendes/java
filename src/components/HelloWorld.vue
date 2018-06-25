<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links para estudo</h2>
    <ul>
     <!--  <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          if/else
        </a>
      </li> -->
      <li>
        <a
          href="https://www.devmedia.com.br/javascript-if-else-criando-scripts-com-estruturas-condicionais/39686"
          target="_blank"
        >
         if/else
        </a>
      </li>
      <li>
        <a
          href="http://tableless.github.io/iniciantes/manual/js/funcoes.html#menu-js"
          target="_blank"
        >
          Funções
        </a>
      </li>
      <li>
        <a
          href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filtro"
          target="_blank"
        >
          Array.prototype.
        </a>
      </li>
      <br>
      <li>
        <a
          href="https://sdras.github.io/array-explorer/"
          target="_blank"
        >
          Array Explorer
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="https://br.vuejs.org/v2/guide/instance.html"
          target="_blank"
        >
          Dados e Métodos
        </a>
      </li>
      <li>
        <a
          href="https://br.vuejs.org/v2/guide/instance.html#Diagrama-do-Ciclo-de-Vida"
          target="_blank"
        >
          Diagrama do Ciclo de Vida
        </a>
      </li>
      <li>
        <a
          href="https://github.com/1STi/intensivo-react-native"
          target="_blank"
        >
          Git Igor
        </a>
      </li>
      <!-- <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li> -->
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to JAVA training'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
