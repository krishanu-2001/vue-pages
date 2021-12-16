<template>
  <div id="app">
    <Nav />
    <div class="devbox" id="devbox1">
      <div>
        <Panorama
          v-bind:skillsImgList="webdevSkills"
          :stylePropElement="stylePropElement1"
          description="DEVELOPMENT"
        />
      </div>
      <div class="dev-data-box">
        <h1>Expressing my views to the world.</h1>
      </div>
    </div>

    <div class="devbox" id="devbox2">
      <div class="dev-data-box">
        <h1>Algorithms et al.</h1>
      </div>
      <div>
        <Panorama
          v-bind:skillsImgList="programmingSkills"
          :stylePropElement="stylePropElement2"
          description="PROGRAMMING"
        />
      </div>
    </div>

    <div class="devbox" id="devbox3">
      <div>
        <Panorama
          v-bind:skillsImgList="otherSkills"
          :stylePropElement="stylePropElement3"
          description="PASSION"
        />
      </div>
      <div class="dev-data-box">
        <h1>Exploring the latest tech.</h1>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Panorama from './components/Panorama.vue'
import {
  webdevSkills,
  programmingSkills,
  otherSkills,
} from '@/assets/skillsList'

export default {
  name: 'App',
  components: {
    Nav,
    Panorama,
  },
  data() {
    return {
      imgurls: ['logo.png', 'react.png', 'python.png'],
      webdevSkills: webdevSkills,
      programmingSkills: programmingSkills,
      otherSkills: otherSkills,
      stylePropElement1: {
        background:
          'url(' + require('@/assets/background2.png') + ') no-repeat center',
        width: '400px',
        boxShadow: '2px 2px 7px 1px rgb(10, 10, 10, 0.5)',
      },
      stylePropElement2: {
        background:
          'url(' + require('@/assets/background5.png') + ') no-repeat center',
        width: '400px',
        boxShadow: '2px 2px 7px 1px rgb(10, 10, 10, 0.5)',
      },
      stylePropElement3: {
        background:
          'url(' + require('@/assets/background1.png') + ') no-repeat center',
        width: '400px',
        boxShadow: '2px 2px 7px 1px rgb(10, 10, 10, 0.5)',
      },
    }
  },
}
</script>

<style>
#app {
  /* margin: 10px; */
  /* min-width: 900px; */
  min-height: 800px;
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

.devbox {
  display: flex;
  justify-content: row;
  justify-content: space-around;
  padding: 10px;
}

#devbox1 {
  background-color: rgb(255, 255, 255);
}

#devbox2 {
  background-color: rgb(255, 255, 255);
}

#devbox3 {
  background-color: rgb(255, 255, 255);
}

.dev-data-box {
  align-self: center;
}

h1 {
  font-family: 'Courier New', Courier, monospace;
}
</style>
