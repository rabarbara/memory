<template>
<div>

  <button @click="startGame(6)" class="fancy-button pop-onhover bg-gradient1">mala</button>
  <button @click="startGame(8)" class="fancy-button pop-onhover bg-gradient1">srednja</button>
  <button @click="startGame(10)" class="fancy-button pop-onhover bg-gradient1">velika</button>

  <div class="cont">
    <card v-bind:active="selected[index]" v-for="el,index in shuffled" v-on:clicked="checkMatch" v-bind:element="shuffled[index]" v-bind:index="index" :key="index"></card>
  </div>
  </div>


</template>

<script>
  import Card from '@/components/Card.vue'
  export default {
    name: 'Memory',
    data: function () {
      return {
        boxes: 4,
        selectedCount: 0,
        shuffled: [],
        selected: [],
        game: 'Začni z igro'
      }
    },
    components: {
      'card': Card
    },
    computed: {
      rows () {
        return this.boxes / 2
      }
    },
    methods: {
      checkMatch: function (index) {
        if (this.selectedCount === 0) {
          // to overcome caveat 1 in https://vuejs.org/v2/guide/list.html#Caveats mutate in place
          this.selected.splice(index, 1, 1)
          this.selectedCount += 1
        } else if (this.selectedCount === 1) {
          let indexOfSelected = this.selected.indexOf(1)
          if (indexOfSelected !== index) {
            this.selected.splice(index, 1, 1)
            if (this.shuffled[indexOfSelected] === this.shuffled[index]) {
              this.selected = this.selected.map(x => {
                if (x) return 2
                return 0
              })
            }
            this.selectedCount += 1
          }
        } else if (this.selectedCount === 2) {
          this.selected = this.selected.map(x => {
            console.log(x)
            if (x === 2) {
              return x
            }
            return 0
          })
          this.selectedCount = 0
          this.selected.splice(index, 1, 1)
          this.selectedCount += 1
        }
      },
      startGame (int) {
        this.boxes = int
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
        this.shuffled = shuffleArray(newArr)
        this.selected = newArr.map(x => {
          return 2
        })
        this.selected = newArr.map(x => {
          return 0
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .cont {
    display: flex;
    margin: 0 auto;
    width: 60%;
    flex-wrap: wrap;

  }
button {
  background: #8b09b5;
  border:none;
  box-shadow: 2px 2px 10px rgba(0,0,0,.5);
  font-size: 1.1rem;
  font-family: verdana;
  padding:10px;
  color:white;
  margin-left: 1%;
  text-transform: uppercase;
  transition: box-shadow .5s ease;
  &:hover {
    box-shadow: 5px 5px 8px rgba(0,0,0,.7);
  }
  margin-bottom: 2rem;
  cursor: pointer;
}


</style>
