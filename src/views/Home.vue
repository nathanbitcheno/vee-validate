<template>
  <div class="home">
    <img alt="Form Logo" src="../assets/F-logo.png" width="100">
    <HelloWorld msg="Form Validation Practice"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
