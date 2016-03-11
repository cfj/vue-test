<template>
  <div class="hello">
    <h1>Clicked {{numClicks}} times</h1>
    <h2>{{greeting}}</h2>
  </div>
</template>

<script>
  export default {
    props: {
      greeting: String,
      numClicks: Number
    },

    data () {
      return {
        // note: changing this line won't causes changes
        // with hot-reload because the reloaded component
        // preserves its current state and we are modifying
        // its initial state.
        msg: 'Hello World!'
      }
    }
  }
</script>
