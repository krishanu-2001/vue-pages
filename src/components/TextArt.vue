<template>
  <div class="text">
    <span v-for="(char, i) in text" v-bind:key="i">{{ char }}</span>
  </div>
</template>

<script>
export default {
  name: 'TextArt',
  props: {
    text: String,
  },
}
</script>

<style scoped>
.text {
  cursor: pointer;
  display: flex;
  justify-content: center;
  transform: translateY(0%);
  text-align: center;
}
.text > span {
  display: block;
  background-color: #fff;
  width: 8%;
  height: 0px;
  font-size: 20px;
  line-height: 0px;
  transition: transform 0.3s ease-in-out, color 0.3s ease-in-out,
    background-color 0.3s ease-in-out;
  box-shadow: 0 40px 50px rgba(0, 0, 0, 0.1);
}

@media screen and (max-width: 750px) {
  .text > span {
    display: block;
    background-color: #fff;
    width: 8%;
    height: 0px;
    font-size: 15px;
    line-height: 0px;
    transition: transform 0.3s ease-in-out, color 0.3s ease-in-out,
      background-color 0.3s ease-in-out;
    box-shadow: 0 40px 50px rgba(0, 0, 0, 0.1);
  }
}
</style>
