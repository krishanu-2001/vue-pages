<template>
  <div id="app">
    <Nav />
    <Panorama
      v-bind:skillsImgList="skillsImgList"
      :stylePropElement="stylePropElement1"
    />
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Panorama from './components/Panorama.vue'
import skillsImgList from '@/assets/skillsList'

export default {
  name: 'App',
  components: {
    Nav,
    Panorama,
  },
  data() {
    return {
      imgurls: ['logo.png', 'react.png', 'python.png'],
      skillsImgList: skillsImgList,
      stylePropElement1: {
        background: 'url(' + require('@/assets/background5.png') + ') no-repeat center',
        width: '400px',
      },
    }
  },
}
</script>

<style>
#app {
  background-color: rgb(240, 240, 240);
  margin: 10px;
}
</style>

<style scoped>
.flat {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
}
.media {
  width: 200px;
  height: 200px;
}
</style>
