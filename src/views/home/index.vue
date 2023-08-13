<template>
  <div class="container">
    <div class="music-box">
      <div class="music" :class="cus.music ? '' : 'music-stop'" @click.stop="changeMusic">
        <img src="../../assets/images/music.png" />
      </div>
    </div>
    <audio autoplay loop id="vd">
      <source src="../../assets/test.mp3" type="audio/mpeg" />
    </audio>
    <div
      v-if="cus.current != 'home' && cus.current != 'index'"
      class="back"
      @click="goIndex('back')"
    >
      <img style="position: absolute" src="../../assets/images/index.png" />
    </div>
    <!--    home page-->
    <template v-if="cus.current == 'home'">
      <div class="main-container" @click="goIndex">
        <div class="scroll">
          <img class="home" src="../../assets/images1/home-font.png" />
        </div>
      </div>
    </template>

    <template v-if="cus.current == 'index'">
      <div class="index-page index-bg" style="">
        <img style="position: absolute" class="index1" src="../../assets/images1/index1.png" />
        <img style="position: absolute" class="index2" src="../../assets/images1/index2.png" />
        <div class="jump-box">
          <div @click="goPage(1)"></div>
          <div @click="goPage(2)"></div>
          <div @click="goPage(3)"></div>
          <div @click="goPage(4)"></div>
          <div @click="goPage(5)"></div>
        </div>
      </div>
    </template>

    <template v-if="cus.current == 'page1'">
      <div class="index-page scroll" @scroll="scrollFun">
        <div class="page-child page1-bg1" style="">
          <img
            class="flyin-img first"
            style="position: absolute; left: 400px"
            src="../../assets/images1/page1-i1-1.png"
          />
          <img
            class="flyin-img first"
            style="position: absolute; right: 400px"
            src="../../assets/images1/page1-i1-2.png"
          />
        </div>

        <div class="page-child page1-bg2" style="">
          <img
            class="flyin-img"
            style="position: absolute; left: 400px"
            src="../../assets/images1/page1-i2-1.png"
          />
          <img
            class="flyin-img"
            style="position: absolute; right: 400px"
            src="../../assets/images1/page1-i2-2.png"
          />
        </div>
        <div class="page-child page1-bg3" style="">
          <img
            class="flyin-img"
            style="position: absolute; left: 400px"
            src="../../assets/images1/page1-i3-1.png"
          />
          <img
            class="flyin-img"
            style="position: absolute; right: 400px"
            src="../../assets/images1/page1-i3-2.png"
          />
        </div>

        <div class="page-child page1-bg4" style="">
          <img
            class="flyin-img"
            style="position: absolute; left: 400px"
            src="../../assets/images1/page1-i4-1.png"
          />
          <img
            class="flyin-img"
            style="position: absolute; right: 400px"
            src="../../assets/images1/page1-i4-2.png"
          />
        </div>

        <div class="page-child page1-bg5" style="">
          <img
            class="flyin-img"
            style="position: absolute; left: 400px"
            src="../../assets/images1/page1-i5-1.png"
          />
          <img
            class="flyin-img"
            style="position: absolute; right: 400px"
            src="../../assets/images1/page1-i5-2.png"
          />
        </div>
        <div class="page-child page1-bg6" style="">
          <img
            class="flyin-img"
            style="position: absolute; left: 400px"
            src="../../assets/images1/page1-i6-1.png"
          />
          <img
            class="flyin-img"
            style="position: absolute; right: 400px"
            src="../../assets/images1/page1-i6-2.png"
          />
        </div>
        <div class="page-child page1-bg7" style="">
          <img
            class="flyin-img"
            style="position: absolute; left: 400px"
            src="../../assets/images1/page1-i7-1.png"
          />
        </div>
        <div class="page-child page1-bg8" style="">
          <img
            class="flyin-img"
            style="position: absolute; left: 400px"
            src="../../assets/images1/page1-i8-1.png"
          />
        </div>
        <div class="page-child page1-bg9" style="">
          <img
            class="flyin-img"
            style="position: absolute; left: 400px"
            src="../../assets/images1/page1-i9-1.png"
          />
          <img
            class="flyin-img"
            style="position: absolute; right: 400px"
            src="../../assets/images1/page1-i9-2.png"
          />
        </div>
        <div class="page-child page1-bg10" style="">
          <img
            class="flyin-img"
            style="position: absolute; left: 400px"
            src="../../assets/images1/page1-i10-1.png"
          />
          <img
            class="flyin-img"
            style="position: absolute; right: 400px"
            src="../../assets/images1/page1-i10-2.png"
          />
        </div>
        <div class="page-child page1-bg11" style="">
          <img
            class="flyin-img"
            style="position: absolute; left: 400px"
            src="../../assets/images1/page1-i11-1.png"
          />
        </div>
      </div>
    </template>

    <template v-if="cus.current == 'page2'">
      <div class="index-page scroll" @scroll="scrollFun">
        <div class="page-child page1-bg1" style="">
          <img
            class="flyin-img first"
            style="position: absolute; left: 400px"
            src="../../assets/images1/page1-i1-1.png"
          />
          <img
            class="flyin-img first"
            style="position: absolute; right: 400px"
            src="../../assets/images1/page2-i1-2.png"
          />
        </div>
        <div class="page-child page2-bg2" style="">
          <img
            class="flyin-img"
            style="position: absolute; left: 400px"
            src="../../assets/images1/page2-i2-1.png"
          />
          <img
            class="flyin-img"
            style="position: absolute; right: 400px"
            src="../../assets/images1/page2-i2-2.png"
          />
        </div>
        <div class="page-child page2-bg3" style="">
          <img
            class="flyin-img"
            style="position: absolute; left: 400px"
            src="../../assets/images1/page2-i3-1.png"
          />
          <img
            class="flyin-img"
            style="position: absolute; right: 400px"
            src="../../assets/images1/page2-i3-2.png"
          />
        </div>
        <div class="page-child page2-bg4" style="">
          <img
            class="flyin-img"
            style="position: absolute; left: 400px"
            src="../../assets/images1/page2-i4-1.png"
          />
          <img
            class="flyin-img"
            style="position: absolute; right: 400px"
            src="../../assets/images1/page2-i4-2.png"
          />
        </div>
        <div class="page-child page2-bg5" style="">
          <img
            class="flyin-img"
            style="position: absolute; left: 400px"
            src="../../assets/images1/page2-i5-1.png"
          />
          <img
            class="flyin-img"
            style="position: absolute; right: 400px"
            src="../../assets/images1/page2-i5-2.png"
          />
        </div>
        <div class="page-child page2-bg6" style="">
          <img
            class="flyin-img"
            style="position: absolute; left: 400px"
            src="../../assets/images1/page2-i6-1.png"
          />
          <img
            class="flyin-img"
            style="position: absolute; right: 400px"
            src="../../assets/images1/page2-i6-2.png"
          />
        </div>
        <div class="page-child page2-bg7" style="">
          <img
            class="flyin-img"
            style="position: absolute; left: 400px"
            src="../../assets/images1/page2-i7-1.png"
          />
          <img
            class="flyin-img"
            style="position: absolute; right: 400px"
            src="../../assets/images1/page2-i7-2.png"
          />
        </div>
        <div class="page-child page2-bg8" style="">
          <img
            class="flyin-img"
            style="position: absolute; left: 400px"
            src="../../assets/images1/page2-i8-1.png"
          />
          <img
            class="flyin-img"
            style="position: absolute; right: 400px"
            src="../../assets/images1/page2-i8-2.png"
          />
        </div>
        <div class="page-child page2-bg9" style="">
          <img
            class="flyin-img"
            style="position: absolute; left: 400px"
            src="../../assets/images1/page2-i9-1.png"
          />
          <img
            class="flyin-img"
            style="position: absolute; right: 400px"
            src="../../assets/images1/page2-i9-2.png"
          />
        </div>
        <div class="page-child page2-bg10" style="">
          <img
            class="flyin-img"
            style="position: absolute; left: 400px"
            src="../../assets/images1/page2-i10-1.png"
          />
          <img
            class="flyin-img"
            style="position: absolute; right: 400px"
            src="../../assets/images1/page2-i10-2.png"
          />
        </div>
        <div class="page-child page2-bg11" style="">
          <img
            class="flyin-img"
            style="position: absolute; left: 400px"
            src="../../assets/images1/page2-i11-1.png"
          />
          <img
            class="flyin-img"
            style="position: absolute; right: 400px"
            src="../../assets/images1/page2-i11-2.png"
          />
        </div>
        <div class="page-child page2-bg12" style="">
          <img
            class="flyin-img"
            style="position: absolute; left: 400px"
            src="../../assets/images1/page2-i12-1.png"
          />
          <img
            class="flyin-img"
            style="position: absolute; right: 400px"
            src="../../assets/images1/page2-i12-2.png"
          />
        </div>
        <div class="page-child page2-bg13" style="">
          <img
            class="flyin-img"
            style="position: absolute; left: 400px"
            src="../../assets/images1/page2-i13-1.png"
          />
          <img
            class="flyin-img"
            style="position: absolute; right: 400px"
            src="../../assets/images1/page2-i13-2.png"
          />
        </div>
        <div class="page-child page2-bg14" style="">
          <img
            class="flyin-img"
            style="position: absolute; left: 400px"
            src="../../assets/images1/page2-i14-1.png"
          />
          <img
            class="flyin-img"
            style="position: absolute; right: 400px"
            src="../../assets/images1/page2-i14-2.png"
          />
        </div>
        <div class="page-child page2-bg15" style="">
          <img
            class="flyin-img"
            style="position: absolute; left: 400px"
            src="../../assets/images1/page2-i15-1.png"
          />
          <img
            class="flyin-img"
            style="position: absolute; right: 400px"
            src="../../assets/images1/page2-i15-2.png"
          />
        </div>
        <div class="page-child page2-bg16" style="">
          <img
            class="flyin-img"
            style="position: absolute; left: 400px"
            src="../../assets/images1/page2-i16-1.png"
          />
          <img
            class="flyin-img"
            style="position: absolute; right: 400px"
            src="../../assets/images1/page2-i16-2.png"
          />
        </div>
        <div class="page-child page2-bg17" style="">
          <img
            class="flyin-img"
            style="position: absolute; left: 400px"
            src="../../assets/images1/page2-i17-1.png"
          />
          <img
            class="flyin-img"
            style="position: absolute; right: 400px"
            src="../../assets/images1/page2-i17-2.png"
          />
        </div>
        <div class="page-child page2-bg18" style=""> </div>
      </div>
    </template>

    <template v-if="cus.current == 'page3'">
      <div class="index-page scroll" @scroll="scrollFun">
        <div class="page-child page1-bg1" style="">
          <img
            class="flyin-img first"
            style="position: absolute; left: 400px"
            src="../../assets/images1/page1-i1-1.png"
          />
          <img
            class="flyin-img first"
            style="position: absolute; right: 400px"
            src="../../assets/images1/page3-i1-2.png"
          />
        </div>
        <div class="page-child page3-bg1" style=""> </div>
      </div>
    </template>

    <template v-if="cus.current == 'page4'">
      <div class="index-page scroll" @scroll="scrollFun">
        <div class="page-child page1-bg1" style="">
          <img
            class="flyin-img first"
            style="position: absolute; left: 400px"
            src="../../assets/images1/page1-i1-1.png"
          />
          <img
            class="flyin-img first"
            style="position: absolute; right: 400px"
            src="../../assets/images1/page4-i1-2.png"
          />
        </div>
        <div class="page-child page4-bg1" style=""> </div>
        <div class="page-child page4-bg2" style=""> </div>
      </div>
    </template>

    <template v-if="cus.current == 'page5'">
      <div class="index-page scroll" @scroll="scrollFun">
        <div class="page-child page1-bg1" style="">
          <img
            class="flyin-img first"
            style="position: absolute; left: 400px"
            src="../../assets/images1/page1-i1-1.png"
          />
          <img
            class="flyin-img first"
            style="position: absolute; right: 400px"
            src="../../assets/images1/page5-i1-2.png"
          />
        </div>
        <div class="page-child page5-bg1" style=""> </div>
        <div class="page-child page5-bg2" style=""> </div>
        <div class="page-child page5-bg3" style=""> </div>
        <div class="video">
          <video controls="true">
            <source src="../../assets/images1/video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
  // @ts-nocheck
  // todo ts校验没改，任务太重了
  import { ref, onMounted } from 'vue';
  import {} from 'vant';
  import anime from 'animejs/lib/anime.es.js';

  let cus: any = ref({
    music: false,
    current: 'home',
  });

  // music 切换
  function changeMusic() {
    cus.value.music = !cus.value.music;
    let music = document.getElementById('vd');
    !cus.value.music ? music.pause() : music.play();
  }

  // 切换到目录下的页面
  function goPage(index) {
    cus.value.current = `page${index}`;
    setTimeout(() => {
      Array.prototype.forEach.call(
        document.getElementsByClassName('flyin-img first'),
        function (e, i) {
          anime({
            targets: e,
            translateX: -e.offsetLeft,
          });
        },
      );
    }, 0);
  }

  // 通过监听@scroll，对可视区域目标img进行‘回正’操作
  function scrollFun(e) {
    Array.prototype.forEach.call(document.getElementsByClassName('flyin-img'), function (ele, i) {
      if (ele.getBoundingClientRect().top < 200) {
        let classVal = ele.getAttribute('class');
        classVal = classVal.replace('flyin-img', '');
        ele.setAttribute('class', classVal);

        anime({
          targets: ele,
          translateX: -ele.offsetLeft,
        });
      }
    });
  }

  function goIndex(back) {
    cus.value.current = 'index';
    if (back != 'back') changeMusic();
    setTimeout(() => {
      anime({
        targets: '.index1',
        translateX: -200,
      });
      anime({
        targets: '.index2',
        translateX: 400,
      });
      anime({
        targets: '.index3',
        translateX: 400,
        duration: 1500,
      });
    }, 0);
  }

  onMounted(() => {
    // https://animejs.com/documentation/#cssProperties
    anime({
      targets: '.home',
      translateX: -200,
    });
    let music = document.getElementById('vd');
    if (music.paused) {
      music.play();
    }
  });
</script>

<style lang="less" scoped>
  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  .scroll {
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .back {
    position: absolute;
    top: 80px;
    z-index: 99999;
    left: 20px;
    width: 50px;
  }
  .home {
    position: relative;
    right: -200px;
  }
  .index1 {
    position: relative;
    right: -200px;
  }
  .index2,
  .index3 {
    position: relative;
    left: -400px;
  }
  .music-box {
    width: 35px;
    height: 35px;
    border-radius: 50px;
    box-shadow: 2px 2px 10px #ccc;
    position: fixed;
    left: 20px;
    top: 10px;
    z-index: 99;
    background: rgba(0, 0, 0, 0.1);

    .music {
      border: 2px solid #ffffff;
      width: 35px;
      height: 35px;
      border-radius: 50px;
      animation: rotate 6s linear infinite;
      padding: 2px;
    }
    .music-stop {
      animation: none;
    }
  }

  @keyframes rotate {
    0% {
      transform: rotateZ(0deg);
      /*从0度开始*/
    }
    100% {
      transform: rotateZ(360deg);
      /*360度结束*/
    }
  }
  .main-container {
    flex: 1;
    position: relative;
    background-image: url('../../assets/images1/home-bg.png');
    background-size: cover;
  }
  .index-bg {
    background-image: url('../../assets/images1/index-bg.png');
  }
  .page1-bg1 {
    background-image: url('../../assets/images1/page1-bg1.png');
  }
  .page1-bg2 {
    background-image: url('../../assets/images1/page1-bg2.png');
  }
  .page1-bg3 {
    background-image: url('../../assets/images1/page1-bg3.png');
  }
  .page1-bg4 {
    background-image: url('../../assets/images1/page1-bg4.png');
  }
  .page1-bg5 {
    background-image: url('../../assets/images1/page1-bg5.png');
  }
  .page1-bg6 {
    background-image: url('../../assets/images1/page1-bg6.png');
  }
  .page1-bg7 {
    background-image: url('../../assets/images1/page1-bg7.png');
  }
  .page1-bg8 {
    background-image: url('../../assets/images1/page1-bg8.png');
  }
  .page1-bg9 {
    background-image: url('../../assets/images1/page1-bg9.png');
  }
  .page1-bg10 {
    background-image: url('../../assets/images1/page1-bg10.png');
  }
  .page1-bg11 {
    background-image: url('../../assets/images1/page1-bg11.png');
  }

  //.setPageBg(@pageIndex,@bgIndex){
  //  .page@{pageIndex}-bg@{bgIndex}{
  //    background-image: url("../../assets/images/page@{pageIndex}-bg@{bgIndex}.png");
  //  }
  //}
  //.loop(@pageIndex,@length,@i:1) when (@i < @length){
  //  .setPageBg(@pageIndex,@i);
  //  .loop(@pageIndex,15,@i+1);
  //}
  //.loop(1,15);

  .page2-bg1 {
    background-image: url('../../assets/images/page2-bg1.png');
  }
  .page2-bg2 {
    background-image: url('../../assets/images1/page2-bg2.png');
  }
  .page2-bg3 {
    background-image: url('../../assets/images1/page2-bg3.png');
  }
  .page2-bg4 {
    background-image: url('../../assets/images1/page2-bg4.png');
  }
  .page2-bg5 {
    background-image: url('../../assets/images1/page2-bg5.png');
  }
  .page2-bg6 {
    background-image: url('../../assets/images1/page2-bg6.png');
  }
  .page2-bg7 {
    background-image: url('../../assets/images1/page2-bg7.png');
  }
  .page2-bg8 {
    background-image: url('../../assets/images1/page2-bg8.png');
  }
  .page2-bg9 {
    background-image: url('../../assets/images1/page2-bg9.png');
  }
  .page2-bg10 {
    background-image: url('../../assets/images1/page2-bg10.png');
  }
  .page2-bg11 {
    background-image: url('../../assets/images1/page2-bg11.png');
  }
  .page2-bg12 {
    background-image: url('../../assets/images1/page2-bg12.png');
  }
  .page2-bg13 {
    background-image: url('../../assets/images1/page2-bg13.png');
  }
  .page2-bg14 {
    background-image: url('../../assets/images1/page2-bg14.png');
  }
  .page2-bg15 {
    background-image: url('../../assets/images1/page2-bg15.png');
  }
  .page2-bg16 {
    background-image: url('../../assets/images1/page2-bg16.png');
  }
  .page2-bg17 {
    background-image: url('../../assets/images1/page2-bg17.png');
  }
  .page2-bg18 {
    background-image: url('../../assets/images1/page2-bg18.png');
    height: 1100px !important;
  }

  .page3-bg1 {
    background-image: url('../../assets/images1/page3-bg1.png');
    height: 2300px !important;
  }

  .page4-bg1 {
    background-image: url('../../assets/images1/page4-bg1.png');
    height: 1500px !important;
  }
  .page4-bg2 {
    background-image: url('../../assets/images1/page4-bg2.png');
    height: 2000px !important;
  }

  .page5-bg1 {
    background-image: url('../../assets/images1/page5-bg1.png');
    height: 2000px !important;
  }
  .page5-bg2 {
    background-image: url('../../assets/images1/page5-bg2.png');
    height: 2000px !important;
  }
  .page5-bg3 {
    background-image: url('../../assets/images1/page5-bg3.png');
    height: 2000px !important;
  }

  .index-page {
    background-size: cover;
    flex: 1;
    position: relative;
    > .page-child {
      background-size: 100% 100%;
      flex: 1;
      position: relative;
      width: 100%;
      height: 100%;
    }
    img {
      width: 100%;
      height: 100%;
    }
    .jump-box {
      position: absolute;
      top: 148px;
      width: 100%;
      > div {
        height: 50px;
        width: 100%;
        margin-top: 21px;
      }
    }
  }
  .video {
    position: absolute;
    top: 1845px;
    video {
      width: 90%;
      margin: 0 auto;
    }
  }
</style>
