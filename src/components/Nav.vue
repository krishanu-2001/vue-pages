<template>
  <div class="nav">
    <div class="header">
      <i class="">S</i>
      <i class="sml">.</i>
      <i class="">K</i>
      <i class="sml">.</i>
      <i class="">I</i>
      <i class="sml">.</i>
      <i class="">L</i>
      <i class="sml">.</i>
      <i class="">L</i>
      <i class="sml">.</i>
      <i class="">S</i>
    </div>
    <transition name="fade">
      <span class="title"><i class="fa fa-home linki"></i></span>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    // nothing
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
  background-color: rgb(18, 18, 19);
  height: 100px;
  width: auto;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: rgb(228, 228, 228);
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

.header {
  font-size: 2em;
}

i {
  border-radius: 5px 5px 5px 5px;
  padding: 10px;
  margin: 5px;
  text-shadow: 1px 1px 1px grey;
  box-shadow: -2px 2px 0px 1px rgba(94, 148, 219, 0.397);
  border: 2px solid rgba(119, 143, 173, 0.603);
}

.title {
  margin: 3px;
  font-size: 1.5em;
  align-self: center;
  animation: mymove 2s forwards;
}

.linki {
  margin-left: 40px;
  border: 2px solid rgba(34, 124, 69, 0.603);
  box-shadow: 1px 1px 0px 1px rgba(109, 219, 94, 0.397);
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
</style>
