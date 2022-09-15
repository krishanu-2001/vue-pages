<template>
  <div>
    <div v-for="item in headings" :key="item">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'BoundingBox',
  props: {
    // nothing
  },
  data() {
    return {
      headings: ['About', 'Experience', 'Skills'],
    }
  },
}
</script>

<style scoped>

</style>