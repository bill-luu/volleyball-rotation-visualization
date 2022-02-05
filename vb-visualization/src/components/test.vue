<template>
  <!-- <div class="test" @keyup.space="onSpacePress" @keyup.up="onUpPress" tabindex=0>
      <div ref="ball" id="ball" class="ball" @click="onClick"></div>
      
      <div ref="ball" id="ref" class="ball"></div>
  </div> -->
  <div class="court" @keyup.right="nextPlay" tabindex=0>
    <div ref="ball" id="fpower" class="player frontrow">P</div>
    <div ref="player" id="fmiddle" class="player frontrow">M</div>
    <div ref="player" id="setter" class="player frontrow">S</div>
    <div ref="player" id="right" class="player backrow">R</div>
    <div ref="player" id="bmiddle" class="player backrow">M</div>
    <div ref="player" id="bpower" class="player backrow">P</div>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import '../public/style.scss'
import { I_Translation } from '../interfaces/I_Translation'
import { I_Coordinate } from '../interfaces/I_Coordinate'
import { GAME_START_SERVE } from '../data/Plays'
import { I_Play } from '@/interfaces/I_Play'

// interface I_Data {
//   changeFromOrigin: I_Coordinate,
// }

export default defineComponent({
  name: 'Test',
  data() {
    return {
      index: 0,
    }
  },
  mounted() {
    this.movePositions(GAME_START_SERVE, 0);
  },
  methods: {
      calculateTransform(change: I_Coordinate) : I_Translation {
        let changeFromOrigin: I_Coordinate = {
              X: 0,
              Y: 0
          }
          changeFromOrigin.X += change.X
          changeFromOrigin.Y += change.Y

        let ret: I_Translation = { 
          translation: `translate(${changeFromOrigin.X}px,
          ${changeFromOrigin.Y}px)`
        }
        return ret
      },
      movePlayer(distance: I_Coordinate, position: string) {
          let translate : I_Translation = this.calculateTransform(distance);

          let player = document.getElementById(position);
          player!.style.transform = translate.translation;
      },
      calculateSpaceBetweenBalls(
        origin: HTMLElement,
        dest: HTMLElement
      ) : I_Coordinate {
        let originRect = origin.getBoundingClientRect();
        let destRect = dest.getBoundingClientRect();
        let distanceVector : I_Coordinate = {
          X: 0,
          Y: 0
        };
        distanceVector = {
          X: originRect.left - destRect.left,
          Y: originRect.top - destRect.top,
        }
        return distanceVector;
      },
      movePositions(play: I_Play, transition: number) {
        for (let move of play.transitions[transition]) {
            this.movePlayer(move.position, move.player)
        }
      },
      nextPlay() {
        console.log(this.index++)
        this.index %= GAME_START_SERVE.transitions.length
        this.movePositions(GAME_START_SERVE, this.index);
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

.frontrow {
    margin-top: -250px;
}
.player {
  position: absolute;
  left: 50%;
  margin-left: -25px;
  top: 50%;
  transform: translateX(-50%);
}
.backrow {
    margin-top: -125px;
}

.court {
  width: 500px;
  height: 500px;
  margin: auto;
}

.test {
    margin-left: 20%;
    margin-right: 20%;
    display: flex;
}

.ball, .player {
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
