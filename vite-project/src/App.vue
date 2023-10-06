<template>
  <Title>Hello VITE</Title>
  <h1>{{ title }}</h1>
</template>

<script>
  import Title from './components/Title.vue';
  export default {
    data(){
      return {
        title: 'hello vite'
      }
    },
    components:{
      // 'Title':Title
      Title
    }
  }
</script>

<style>

</style>