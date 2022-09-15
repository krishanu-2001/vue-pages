<template>
  <div id="app">
    <Nav />
    <BoundingBox />
    <div class="devbox devbox-sml" id="devbox1">
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

    <div class="devbox devbox-sml" id="devbox2">
      <div class="dev-data-box big">
        <h1>Algorithms et al.</h1>
      </div>
      <div>
        <Panorama
          v-bind:skillsImgList="programmingSkills"
          :stylePropElement="stylePropElement2"
          description="PROGRAMMING"
        />
      </div>
      <div class="dev-data-box sml">
        <h1>Algorithms et al.</h1>
      </div>
    </div>

    <div class="devbox devbox-sml" id="devbox3">
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
import BoundingBox from './components/BoundingBox.vue'

export default {
  name: 'App',
  components: {
    Nav,
    Panorama,
    BoundingBox,
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
        width: '100%',
        boxShadow: '2px 2px 7px 1px rgb(10, 10, 10, 0.5)',
      },
      stylePropElement2: {
        background:
          'url(' + require('@/assets/background5.png') + ') no-repeat center',
        width: '100%',
        boxShadow: '2px 2px 7px 1px rgb(10, 10, 10, 0.5)',
      },
      stylePropElement3: {
        background:
          'url(' + require('@/assets/background11.jpg') + ') no-repeat center',
        width: '100%',
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
.sml {
  display: none;
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
  margin-left: 30px;
}

h1 {
  font-family: 'Courier New', Courier, monospace;
}

/* On screens that are 600px or less, set the background color to olive */
@media screen and (max-width: 750px) {
  .devbox-sml {
    flex-direction: column;
    align-self: center;
    justify-self: center;
    text-align: center;
  }
  .sml {
    display: inline-block;
  }
  .big {
    display: none;
  }
  .dev-data-box {
    /* background-color: rgb(0, 0, 0); */
    top: -100px;
    margin: 10px 0px 10px 0px;
    padding: 10px 10px 10px 10px;
    width: 80%;
    /* min-width: 400px; */
    border: 2px solid rgb(133, 106, 255);
    border-radius: 10px;
    margin-bottom: 100px;
    font-size: 10px;
    left: auto;
    right: auto;
    background-color: rgb(0, 0, 0);
    color: rgba(255, 255, 255, 0.815);
    box-shadow: -2px 2px 1px 1px rgba(251, 251, 255, 0.815);
  }
}
</style>
