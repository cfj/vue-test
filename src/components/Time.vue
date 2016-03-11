<template>
  <div>
    <!--<h3>{{seconds}} seconds</h3>-->
    <h3>{{minutes}} per {{unit}}</h3>
  </div>
</template>

<script>
  import secondsToMinutes from '../utils/secondsToMinutes'

  export default {
    props: {
      seconds: Number,
      unit: String
    },

    computed: {
      minutes () {
        if (this.unit === 'km') {
          return secondsToMinutes(this.seconds)
        }

        return secondsToMinutes(this.seconds * 1.609)
      }
    }
  }
</script>
