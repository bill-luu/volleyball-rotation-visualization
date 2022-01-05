<template>
  <div class="test">
      <div ref="ball" id="ball" @click="onClick"></div>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data() {
      return {
          doMove: false,
          origin: 0
      }
  },
  methods: {
      onClick() {
        //   let ball = this.$refs.ball
          // this.$refs.ball.style.transform = "translate(400px)"
          document.getElementById("ball").style.transform = "translate(400px)"
          console.log(this.$refs.ball.style)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
