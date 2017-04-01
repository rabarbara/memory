<template>
  <div class="box" @click="turnCard">
    <div class="front" v-bind:class="{flip_back: active[index]}"><div>{{element[index]}}</div></div>
    <div class="back" v-bind:class="{flip: active[index]}"></div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {

      }
    },
    props: ['active', 'element', 'index'],
    methods: {
      turnCard () {
        this.$emit('clicked', this.index)
      },
      computed: {

      }
    }
  }
</script>

<style lang="scss" scoped>
  .box {
    position: relative;
    text-align: center;
    // padding: 10px;
    // height: 180px;
    margin:10px 0 0 1%;
    width: calc(100% * (1/4) - 2%);
    padding-top: calc(100% * (1/4) - 2%);
    // flex-grow: 1;
    // flex:1;
    justify-content: center;
    flex-wrap: wrap;
    align-content: center;
    // margin: 1%;
    .front {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: #bada55;
      height: 100%;
      transform: rotateY(180deg);
      // z-index:2;
      backface-visibility: hidden;
      transition: 1s all;
      display: flex;
      align-items: center;
      justify-content: center;

      div {

        font-size: 3rem;
        color: #0977b5;
        font-weight:bold;

      }

    }
    .back {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: #0977b5;
      transform: rotateY(0deg);
      backface-visibility: hidden;
      transition: .5s all;
    }
    .flip_back {
    transform: rotateY(0deg)
  }

  .flip {
    transform: rotateY(180deg)
  }
  }


</style>
