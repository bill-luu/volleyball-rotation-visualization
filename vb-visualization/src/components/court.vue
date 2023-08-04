<template>
  <span>{{ getCurrentPlay().name }}</span>
  <div class="court" @keyup.right="next" @keyup.left="prev" tabindex=0>
    <div ref="ball" id="O2" class="player frontrow">O2</div>
    <div ref="player" id="M2" class="player frontrow">M2</div>
    <div ref="player" id="S" class="player frontrow">S</div>
    <div ref="player" id="R" class="player backrow">R</div>
    <div ref="player" id="M1" class="player backrow">M1</div>
    <div ref="player" id="O1" class="player backrow">O1</div>
  </div>
</template>

<script lang="ts">

import { RotationList } from '@/controllers/rotationList.service'
import { I_Rotation } from '@/interfaces/I_Rotation'
import { defineComponent } from 'vue'
import { I_Coordinate } from '../interfaces/I_Coordinate'
import { I_Play, I_Position } from '../interfaces/I_Play'
import { I_Translation } from '../interfaces/I_Translation'
import '../public/style.scss'
import { ROTATIONS } from '@/data/Rotations'

export default defineComponent({
  name: 'Court',
  data() {
    let rotationList = new RotationList(ROTATIONS)
    return {
      debugPostion: false,
      rotations: rotationList,
    }
  },
  mounted() {
    this.movePositions(this.getCurrentPlay().transitions[0]);
  },
  methods: {
    getCurrentPlay(): I_Play {
      return this.rotations.currentRotation().getCurrentPlay()
    },
    getRotation(): I_Rotation {
      return this.rotations.currentRotation().rotation
    },
    calculateTransform(changeFromOrigin: I_Coordinate): I_Translation {
      const ret: I_Translation = {
        translation: `translate(${changeFromOrigin.X}px, ${changeFromOrigin.Y}px)`
      }
      return ret
    },
    movePlayer(distance: I_Coordinate, position: string) {
      const translate: I_Translation = this.calculateTransform(distance);
      if (this.debugPostion) {
        console.log(position, translate)
      }

      let player = document.getElementById(position);
      if(player) {
        player.style.transform = translate.translation;
      }
    },
    calculateSpaceBetweenBalls(
      origin: HTMLElement,
      dest: HTMLElement
    ): I_Coordinate {
      const originRect = origin.getBoundingClientRect();
      const destRect = dest.getBoundingClientRect();

      const ret: I_Coordinate = {
        X: originRect.left - destRect.left,
        Y: originRect.top - destRect.top,
      }
      return ret;
    },
    movePositions(pos: I_Position[]) {
      for (let move of pos) {
        this.movePlayer(move.position, move.player)
      }
    },
    next() {
      this.movePositions(this.rotations.nextPosition())
    },
    prev() {
      this.movePositions(this.rotations.prevPosition())
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

.ball,
.player {
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
