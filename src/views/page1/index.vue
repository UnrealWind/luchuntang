<template>
  <div class="container">
    <div class="main-container">
      <div class="scroll" @scroll="scrollFun">
        <div @click="backToIndex">返回</div>
        <div>1111111111111111111</div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
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

  function backToIndex() {
    router.back();
  }

  function scrollFun(e) {
    console.log(e);
    // e.target.offsetHeight
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
    .scroll {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      overflow-y: scroll;
      > div {
        background: red;
        width: 100%;
        height: 500px;
        border: 1px solid #000;
        display: block;
      }
    }
  }
</style>
