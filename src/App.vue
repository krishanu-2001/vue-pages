<template>
  <div id="app">
    <Nav />
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
  margin-left: 30px
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
    background-color: rgb(0, 0, 0);
    margin-top: 10px;
    padding: 10px 0px 10px 0px;
    width:100%;
    /* min-width: 400px; */
    border: 2px solid rgb(7, 7, 7);
    margin-bottom: 100px;
    font-size: 10px;
    left: auto;
    right: auto;
    color: rgb(174, 173, 173);
  }
}
</style>
