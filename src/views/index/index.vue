<template>
  <div class="container">
    <div class="main-container">
      <div @click="goPage(1)">111</div>
      <div @click="goPage(2)">222</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  // @ts-nocheck
  // todo ts校验没改，任务太重了
  import { ref, onMounted } from 'vue';
  import {} from 'vant';
  import anime from 'animejs/lib/anime.es.js';
  import { router } from '/@/router';

  let cus: any = ref({});

  function goPage(index) {

  }

  onMounted(() => {
    anime({
      targets: '.test',
      translateX: 250,
      rotate: '1turn',
      backgroundColor: '#FFF',
      duration: 800,
    });
  });
</script>

<style lang="less" scoped>
  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  .main-container {
    flex: 1;
    position: relative;
  }
</style>
