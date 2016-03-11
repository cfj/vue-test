<template>
  <div>
    <h4>{{distanceName}} in {{time}}</h4>
  </div>
</template>

<script>
  import clocktime from '../utils/clocktime'

  export default {
    props: {
      seconds: Number,
      distance: String,
      distanceName: String
    },

    computed: {
      time () {
        return clocktime(this.seconds * this.distance)
      }
    }
  }
</script>
