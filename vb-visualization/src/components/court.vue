<template>
  <span>{{plays[currentPlay].name + " " + index}}</span>
  <div class="court" @keyup.right="nextPlay" tabindex=0>
    <div ref="ball" id="O2" class="player frontrow">O2</div>
    <div ref="player" id="M2" class="player frontrow">M2</div>
    <div ref="player" id="S" class="player frontrow">S</div>
    <div ref="player" id="R" class="player backrow">R</div>
    <div ref="player" id="M1" class="player backrow">M1</div>
    <div ref="player" id="O1" class="player backrow">O1</div>
  </div>
</template>

<script lang="ts">

import { PLAYS } from '@/data/Plays'
import { I_Play } from '@/interfaces/I_Play'
import { defineComponent } from 'vue'
import { I_Coordinate } from '../interfaces/I_Coordinate'
import { I_Translation } from '../interfaces/I_Translation'
import '../public/style.scss'

export default defineComponent({
  name: 'Court',
  data() {
    return {
      index: 0,
      plays: PLAYS,
      currentPlay: 0,
      debugPostion: false,
    }
  },
  mounted() {
    this.movePositions(this.plays[this.currentPlay], 0);
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
        if(this.debugPostion) {
          console.log(position, translate)
        }

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
        this.index++
        if(this.index === this.plays[this.currentPlay].transitions.length) {
          this.index = 0
          this.currentPlay++  
        }
        this.currentPlay %= this.plays.length
        this.movePositions(this.plays[this.currentPlay], this.index);
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
    // margin-top: -250px;
}
.player {
  position: absolute;
  left: 50%;
  margin-left: -25px;
  top: 50%;
  transform: translateX(-50%);
}
.backrow {
    // margin-top: -125px;
}

.court {
  width: 500px;
  height: 500px;
  margin: auto;
  outline: 3px solid black;
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
