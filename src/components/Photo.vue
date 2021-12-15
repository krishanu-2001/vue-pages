<template>
  <div class="shadebox">
    <div class="container">
      <img :src="require(`@/assets/${url}`)" :style="styleObject" :alt="url" />
    </div>
  </div>
</template>

<!--
Photos
props: url, height, width
output: formatted image
-->

<script>
export default {
  name: 'Photo',
  props: {
    url: String,
    height: String,
    width: String,
  },
  data() {
    return {
      styleObject: {
        height: this.height || '100%',
        width: this.width || '100%',
      },
    }
  },
}
</script>

<style scoped>
img {
  height: inherit;
  width: inherit;
}
.container {
  box-shadow: 2px 2px 12px 2px rgb(39, 39, 104, 0.5);
  background: white;
  height: inherit;
}
.shadebox {
  margin: 10px;
  height: 100%;
}
</style>