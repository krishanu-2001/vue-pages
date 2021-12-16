<template>
  <div class="text">
    <span v-for="char in text" v-bind:key="char">{{ char }}</span>
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
  display: flex;
  justify-content: center;
  transform: translateY(0%);
  text-align: center;
  transition: transform 0.3s ease-in-out;
}
.span:hover {
  transform: rotateX(35deg), translateY(-50%);
}
.text:hover span {
  color: #ccc;
}
.text:hover span:nth-child(odd) {
  transform: skewY(15deg);
}
.text:hover span:nth-child(even) {
  transform: skewY(-15deg);
  background-color: #f9f9f9;
  color: #a6a6a6;
}
.text > span {
  display: block;
  background-color: #fff;
  width: 28px;
  height: 20px;
  line-height: 0px;
  transition: transform 0.3s ease-in-out, color 0.3s ease-in-out,
    background-color 0.3s ease-in-out;
  box-shadow: 0 40px 50px rgba(0, 0, 0, 0.1);
}
.text > span:first-child {
  border-radius: 5px 0 0 5px;
}
</style>
