<template>
  <progress-tracker>
    <step-item v-for="n in [1, 2, 3, 4, 5]" :is-complete="n < 3" :is-active="n === 3"></step-item>
  </progress-tracker>
</template>

<script>
import ProgressTracker, { StepItem } from 'vue-bulma-progress-tracker'

export default {
  components: {
    ProgressTracker,
    StepItem
  }
}
</script>