<template>
  <div class="nav nav-sml wrapper">
    <div class="laptop">
      <div>
        <div class="header" :style="styleElement1">
          <div v-for="keys in lapKeys1" v-bind:key="keys">
            <div class="pi grid-child" id="bottom1">{{ keys.symbol }}</div>
          </div>
        </div>
        <div class="header" :style="styleElement2">
          <div v-for="keys in lapKeys2" v-bind:key="keys">
            <div class="pi grid-child" id="bottom1">{{ keys.symbol }}</div>
          </div>
        </div>
        <div class="header" :style="styleElement3">
          <div v-for="keys in lapKeys3" v-bind:key="keys">
            <div class="pi grid-child" id="bottom1">{{ keys.symbol }}</div>
          </div>
        </div>
        <div class="header" :style="styleElement4">
          <div v-for="keys in lapKeys4" v-bind:key="keys">
            <div class="pi grid-child" id="bottom1">{{ keys.symbol }}</div>
          </div>
        </div>
      </div>
      <div class="media-row">
        <div class="nameplate">
          <div class="titleText">Made By</div>
          <div>Krishanu Saini</div>
        </div>
        <div class="trackpad trackpad-sml"></div>
        <div class="imageplate">
          <div>
            <img class="imgsml" src="@/assets/logo.png" />
          </div>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div class="wrapper">
        <a href="/">
          <div class="icon facebook">
            <div class="tooltip">Home</div>
            <i class="fa fa-home"></i>
          </div>
        </a>
      </div>
    </transition>
  </div>
</template>

<script>
import { lapKeys, styleElements } from './keyboard.js'

export default {
  name: 'Nav',
  props: {
    // nothing
  },
  data() {
    return {
      lapKeys1: fillRows(lapKeys[0]),
      styleElement1: styleElements[0],
      lapKeys2: fillRows(lapKeys[1]),
      styleElement2: styleElements[1],
      lapKeys3: fillRows(lapKeys[2]),
      styleElement3: styleElements[2],
      lapKeys4: fillRows(lapKeys[3]),
      styleElement4: styleElements[3],
      lapKeys5: fillRows(lapKeys[3]),
    }
  },
}

function fillRows(erx) {
  let n = erx.length
  let symbols = []
  if (n === 0) {
    // for date based
    var currentdate = new Date()
    n = currentdate.getDay() + 1
    symbols = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  }
  symbols = erx
  let width = []
  let arr = []
  for (let i = 0; i < n; i += 1) {
    let num = Math.ceil(Math.random() * 2)
    width.push(num)
    // symbols.push('')
  }
  for (let i = 0; i < n; i += 1) {
    arr.push({ id: i, len: width[i], symbol: symbols[i] })
  }
  return arr
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
  background-color: rgb(18, 18, 19);
  width: auto;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgb(228, 228, 228);
  flex-direction: column;
  height: fit-content;
  overflow: hidden;
  /* box-shadow: 2px -1px 4px 2px rgb(10, 12, 10, 0.5); */
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}

.title {
  margin: 3px;
  font-size: 1.5em;
  align-self: center;
  animation: mymove 2s forwards;
}

a {
  text-decoration: none;
}

.linki {
  margin-left: 40px;
  border: 2px solid rgba(119, 143, 173, 0.603);
  box-shadow: 1px 1px 0px 1px rgba(54, 148, 241, 0.705);
}

.linki:active {
  font-size: 93%;
  box-shadow: none;
}

.sml {
  height: 2px;
  width: 2px;
  font-size: 0px;
  padding: 4px;
}

/* animation */
@keyframes mymove {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* animation */
@keyframes raiseUp {
  0% {
  }
  100% {
    font-size: 2.4em;
    box-shadow: -2px 2px 0px 1px rgba(94, 148, 219, 0.397);
  }
}

.wrapper {
}

.wrapper .icon {
  position: relative;
  background-color: #ffffff;
  color: rgb(165, 165, 165);
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
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
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

.wrapper .facebook:hover,
.wrapper .facebook:hover .tooltip,
.wrapper .facebook:hover .tooltip::before {
  background-color: #6c3b99;
  color: #ffffff;
}

.tooltip {
  font-family: 'Courier New', Courier, monospace;
}
</style>

<style scoped>
.laptop {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.header {
  font-size: 15px;
  font-family: Arial, Helvetica, sans-serif;
  display: grid;
}

.pi {
  border-radius: 5px 5px 5px 5px;
  padding: 8px;
  margin: 5px;
  text-shadow: 1px 1px 1px grey;
  box-shadow: -2px 2px 0px 1px rgba(94, 148, 219, 0.397);
  border: 2px solid rgba(119, 143, 173, 0.603);
}
</style>

<style scoped>
.media-row {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}
.nameplate {
  font-family: cursive;
  margin: 20px 20px 20px 20px;
  border: 1px solid rgb(228, 228, 228);
  border-radius: 10px;
  padding: 20px;
}
.trackpad {
  margin: 10px;
  background-color: rgba(29, 207, 252, 0.822);
  width: 150px;
  height: 80px;
  border: 2px rgba(108, 160, 238, 0.705) solid;
  border-radius: 10px;
  box-shadow: 0px -2px 10px 2px rgb(131, 148, 163) inset;
}
.imageplate {
  margin: 20px 20px 20px 20px;
  border-radius: 10px;
  padding: 20px;
}
.imgsml {
  width: 40px;
  height: 40px;
}
.titleText {
  font-size: 0.6em;
}

/* On screens that are 600px or less, set the background color to olive */
@media screen and (max-width: 500px) {
  .trackpad-sml {
    display: none;
  }
}
</style>