<template>
  <div class="box">
    <!-- button at top -->
    <div style="display: flex; flex-direction: row">
      <div class="wrapper" v-on:click="shuffle">
        <div class="icon facebook">
          <div class="tooltip">Shuffle</div>
          <span><i class="fa fa-random"></i></span>
        </div>
      </div>
      <div class="node-text"><TextArt :text="description" /></div>
    </div>
    <!-- main shuffle list -->
    <transition-group
      name="list-complete"
      tag="p"
      class="grid-parent-container"
      :style="stylePropElement"
    >
      <div
        v-for="(img, index) in imageUrls"
        v-bind:key="img"
        v-bind:class="imageClass[index]"
      >
        <div>
          <photo
            :url="img"
            :height="styleObject[index].height"
            :width="styleObject[index].width"
          />
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
import Photo from './Photo.vue'
import TextArt from './TextArt.vue'
import _ from 'lodash'

export default {
  name: 'Panorama',
  props: ['skillsImgList', 'stylePropElement', 'description'],
  components: {
    Photo,
    TextArt,
  },
  data() {
    return {
      imageUrls: this.skillsImgList,
      imageClass: imageFill(this.skillsImgList.length),
      styleObject: styleObjectFill(this.skillsImgList.length),
    }
  },
  methods: {
    shuffle: function () {
      this.imageUrls = _.shuffle(this.imageUrls)
    },
  },
}

function imageFill(dep) {
  let arr = []
  let n = dep
  for (let i = 0; i < n; i += 1) {
    arr.push(`grid-child list-complete-item img${i}`)
  }
  return arr
}

function styleObjectFill(dep) {
  let arr = []
  let n = dep
  for (let i = 0; i < n; i += 1) {
    let height = '100px'
    if (i == 0) height = `${100}px`
    let width = '100px'
    if (i == 0) width = `${100}px`
    arr.push({
      height: height,
      width: width,
    })
  }
  return arr
}
</script>

<style scoped>
/* The grid-area defines the names of the grid areas that would be specified in the grid-template-areas in the parent container */
.box {
  z-index: 999;
}

.img0 {
  grid-column: 1 / span 2;
  grid-row: 1 / span 2;
}

/* Parent Grid Container */
.grid-parent-container {
  z-index: 999;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 20px;
  justify-content: center;
}

.grid-child {
  width: fit-content;
  /* background-color: aqua; */
}

.node-text {
  margin-left: 20px;
  font-size: 2em;
  align-self: center;
  width: 100%;
  /* text-align: center; */
}

.list-complete-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
.list-complete-enter,
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>

<style scoped>
/*
    Author: Abdelrhman Said
*/

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:focus,
*:active {
  outline: none !important;
  -webkit-tap-highlight-color: transparent;
}

html,
body {
  display: grid;
  height: 100%;
  width: 100%;
  font-family: 'Poppins', sans-serif;
  place-items: center;
  background: linear-gradient(315deg, #ffffff, #d7e1ec);
}

.wrapper {
  display: inline-flex;
}

.wrapper .icon {
  position: relative;
  background-color: #ffffff;
  border-radius: 50%;
  padding: 15px;
  margin: 10px;
  width: 50px;
  height: 50px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .tooltip {
  position: absolute;
  top: 0;
  font-size: 14px;
  background-color: #ffffff;
  color: #ffffff;
  padding: 5px 8px;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .tooltip::before {
  position: absolute;
  content: '';
  height: 8px;
  width: 8px;
  background-color: #ffffff;
  bottom: -3px;
  left: 50%;
  transform: translate(-50%) rotate(45deg);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .icon:hover .tooltip {
  top: -45px;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.wrapper .icon:hover span,
.wrapper .icon:hover .tooltip {
  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
}

.wrapper .facebook:hover,
.wrapper .facebook:hover .tooltip,
.wrapper .facebook:hover .tooltip::before {
  background-color: #3b5999;
  color: #ffffff;
}

.tooltip {
  font-family: 'Courier New', Courier, monospace;
}
</style>

<style scoped>
@media screen and (min-width: 1000px) {
  .grid-parent-container {
    gap: 50px;
  }
}

@media screen and (max-width: 500px) {
  .grid-parent-container {
    grid-template-columns: auto auto;
    gap: 10%;
    height: 500px;
  }
  .img0 {
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
  }
}
</style>

