<template>
  <div class="cont">
    <card v-bind:active=shuffled v-for="el,index in matrix" v-on:clicked="checkMatch" v-bind:element="el" v-bind:index="index" :key="el"></card>
  </div>
</template>

<script>
  import Card from '@/components/Card.vue'
  export default {
    name: 'Memory',
    data: function () {
      return {
        rows: 2,
        selectedCount: 0,
        shuffled: [],
        selected: []
      }
    },
    components: {
      'card': Card
    },
    computed: {
      matrix () {
        // http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
        /**
         * Randomize array element order in-place.
         * Using Durstenfeld shuffle algorithm.
         */
        function shuffleArray (array) {
          for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1))
            var temp = array[i]
            array[i] = array[j]
            array[j] = temp
          }
          return array
        }
        const upperLimit = this.rows * this.rows
        let matrix = []
        for (let i = 1; i < upperLimit + 1; i++) {
          matrix.push(i)
        }
        // select only the first half of the elements in a shuffled array
        let shuffled = shuffleArray(matrix).slice(0, upperLimit / 2)
        // just concat the shuffled array with itself to get two of each element
        const newArr = shuffled.concat(shuffled)
        this.shuffled = newArr
        return newArr
      }
    },
    methods: {
      checkMatch: function (message, params) {
        console.log('clickedmessage')
        console.log(message, params)
        // const el = params[0]
        // console.log(this.$children[para])
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .cont {
    display: flex;
    margin: 0 auto;
    width: 800px;
    flex-wrap: wrap;
  }
</style>
