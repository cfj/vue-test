<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <!--<hello :num-clicks="numClicks"></hello>-->
    <hello v-for="greeting in greetings" :greeting="greeting" :num-clicks="numClicks" track-by="$index"></hello>
    <time :seconds="seconds" unit="km"></time>
    <div>equals</div>
    <time :seconds="seconds" unit="mile"></time>
    <span>{{seconds}}</span>
    <distance-result :seconds="seconds" distance="5" distance-name="5k"></distance-result>
    <distance-result :seconds="seconds" distance="10" distance-name="10k"></distance-result>
    <distance-result :seconds="seconds" distance="21.098" distance-name="Half marathon"></distance-result>
    <distance-result :seconds="seconds" distance="42.195" distance-name="Full marathon"></distance-result>
    <button v-on:click="increment">Increment</button>
    <button v-on:click="addGreeting">Add greeting</button>
    <button v-on:click="removeGreeting">Remove greeting</button>
    <div>
      <input type="range" min="180" max="540" step="1" v-model="seconds">
    </div>
    <p>
      Welcome to your Vue.js app. To get started, take a look at the
      <a href="https://github.com/vuejs-templates/webpack#folder-structure" target="_blank">README</a>
      of this template. If you have any issues with the setup, please file an issue at this template's repository.
    </p>
    <p>
      For advanced configurations, checkout the docs for
      <a href="http://webpack.github.io/" target="_blank">Webpack</a> and
      <a href="http://vuejs.github.io/vue-loader/" target="_blank">vue-loader</a>.
    </p>
    <p>
      You may also want to checkout
      <a href="https://github.com/vuejs/vue-router/" target="_blank">vue-router</a> for routing and
      <a href="https://github.com/vuejs/vuex/" target="_blank">vuex</a> for state management.
    </p>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Time from './components/Time'
import DistanceResult from './components/DistanceResult'
import localforage from 'localforage'

function * greetingGenerator () {
  yield 'Hej'
  yield 'Hello'
  yield 'Hallo'
  yield 'Hei'
}

let generateGreeting = greetingGenerator()

export default {
  components: {
    Hello,
    Time,
    DistanceResult
  },

  ready () {
    this.fetchGreetings()
  },

  data () {
    return {
      test: 'hej',
      numClicks: 0,
      greetings: [],
      seconds: 360
    }
  },

  methods: {
    increment () {
      this.numClicks++
    },

    addGreeting () {
      this.greetings.push(generateGreeting.next().value || 'default')
      localforage.setItem('greetings', this.greetings).then((value) => {
        console.log(value + ' was set!')
      }, (error) => {
        console.error(error)
      })
    },

    removeGreeting () {
      this.greetings.pop()
      localforage.setItem('greetings', this.greetings).then((value) => {
        console.log(value + ' was set!')
      }, (error) => {
        console.error(error)
      })
    },

    fetchGreetings () {
      localforage.getItem('greetings').then((value) => {
        console.log(value)
        if (value) {
          this.$set('greetings', value)
        }
      })
    }
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  margin-top: -100px;
  max-width: 600px;
  font-family: Helvetica, sans-serif;
  text-align: center;
}

.logo {
  width: 100px;
  height: 100px
}

input[type=range] {
  width: 100%;
}
</style>
