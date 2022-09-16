<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="20000"
      controls
      indicators
      background="rgb(18, 18, 19)"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        caption="About Me"
        text="I am a Programmer from Indian Institute of Technology Indore"
      >
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="@/assets/design1a.png"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>

      <b-carousel-slide
        caption="Interesting Fact"
        text="I am trying to learn Piano these days :)"
      >
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="@/assets/design5a.png"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>

      <b-carousel-slide
        caption="Ongoing Reseach"
        text="Generative Networks based Anomaly Detection For Real Time Video Surveillance"
      >
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="@/assets/design2a.png"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    }
  },
  methods: {
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    },
  },
}
</script>