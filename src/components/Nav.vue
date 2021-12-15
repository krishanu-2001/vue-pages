<template>
  <div class="nav">
    <svg>
      <g>
        <rect
          class="rectBackground"
          width="50"
          height="40"
          x="10"
          y="10"
          rx="4"
          ry="3"
          fill="#2a7fff"
        />
        <rect
          class="rectBackground"
          width="50"
          height="10"
          x="10"
          y="60"
          rx="4"
          ry="3"
          fill="#2a7fff"
        />
        <rect
          class="rectBackground"
          width="50"
          height="10"
          x="10"
          y="75"
          rx="4"
          ry="3"
          fill="#2a7fff"
        />
      </g>
    </svg>
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
  background-color: white;
  border: 2px grey solid;
  height: 100px;
  width: auto;
}

svg {
  height: 100%;
}

@keyframes rectFade {
  from {
    width: 1%;
  }
  to {
    width: 100%;
    opacity: 1;
  }
}
rect.rectBackground {
  opacity: 0;
  animation: rectFade 1s cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
}
</style>
