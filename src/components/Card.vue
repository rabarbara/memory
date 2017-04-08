<template>
  <div class="box" @click="turnCard" v-bind:class="{hidden: visible}">
    <div class="front" v-bind:class="{flip_back: flipped}"><div>{{element}}</div></div>
    <div class="back" v-bind:class="{flip: flipped}"></div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        activeness: this.active
      }
    },
    props: ['active', 'element', 'index'],
    methods: {
      turnCard () {
        if (!this.visible) {
          this.$emit('clicked', this.index)
        }
      }
    },
    computed: {
      visible () {
        if (this.active === 2) {
          return true
        }
      },
      flipped () {
        if (this.active === 1 || this.active === 2) {
          return true
        }
        return false
      }
    }
  }
</script>

<style lang="scss" scoped>
.box.hidden {
      opacity: 0;
    }
  .box {
    visibility:1;
    display:flex;
    position: relative;
    text-align: center;
    opacity: 1;
    transition: opacity 1s ease 1s;
    justify-content: center;
    flex-wrap: wrap;
    align-content: center;
    height:8rem;
    width:8rem;
    margin: 1%;

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
