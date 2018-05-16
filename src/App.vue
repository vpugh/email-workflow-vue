<template>
  <div id="app">
    <EmailWorkflow></EmailWorkflow>
  </div>
</template>

<script>
import EmailWorkflow from "./components/EmailWorkflow";

export default {
  name: 'App',
  components: {
    EmailWorkflow
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
#app {
  background-color: #f5f5f5;
  padding: 20px 0;
}
.bd-notification {
  border-radius: 4px;
  color: #7a7a7a;
  font-weight: 600;
  padding: 1.25rem 0;
  position: relative;
}
</style>
