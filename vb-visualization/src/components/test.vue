<template>
  <div class="test" @keyup="onSpacePress" tabindex=0>
      <div ref="ball" id="ball" @click="onClick"></div>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import '../public/style.scss'
import { I_Translation } from '../interfaces/I_Translation'
import { I_Coordinate } from '../interfaces/I_Coordinate'

interface I_Data {
  changeFromOrigin: I_Coordinate,
}

export default defineComponent({
  name: 'Test',
  data() : I_Data {
      return {
        changeFromOrigin: {
          X: 0,
          Y: 0,
        }
      }
  },
  methods: {
      onSpacePress() {
        this.changeFromOrigin = {
          X: 0,
          Y: 0,
        }

        let player = document.getElementById("ball");
        player!.style.transform = '';
      },
      calculateTransform(change: I_Coordinate) : I_Translation {
        this.changeFromOrigin.X += change.X
        this.changeFromOrigin.Y += change.Y

        let ret: I_Translation = { 
          translation: `translate(${this.changeFromOrigin.X}px,
          ${this.changeFromOrigin.Y}px)`
        }
        return ret
      },
      onClick() {
          let change: I_Coordinate = {
            X: 300,
            Y: 100
          };

          let translate : I_Translation = this.calculateTransform(change);

          let player = document.getElementById("ball");
          player!.style.transform = translate.translation;
      }
  }
})
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.test {
    margin-left: 20%;
    margin-right: 20%;
    display: flex;
}

#ball {
    outline: 1px solid grey;
    width: 50px;
    min-height: 50px;
    border-radius: 40px;

    transition: transform 2s;
    transform-box: fill-box;
}

.move {
    transform: translate(400px)
}
/* 
#ball:hover {
    transform: translate(400px)
} */
</style>
