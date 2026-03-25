<template>
  <div>
    <div class="carousel mb-10">
      <div class="inner-card lg:translate-x-0" ref="inner" :style="innerStyles">
        <div class="card" v-for="card in cards" :key="card.id">
          <div class="block">
            <div class="mx-auto">
              <img
                class="rounded-md w-[280px]"
                :src="card.image"
                :alt="card.title"
              />
            </div>
            <div>
              <div>
                <h6 class="font-semibold py-2 mt-2 text-dark">
                  {{ card.title }}
                </h6>
                <span class="text-[#555555] font-light text-sm w-[200px]">
                  {{ card.body }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="justify-end cursor-pointer w-full flex gap-10 my-8">
      <div @click="prev">
        <img src="/prev.svg" alt="previous" />
      </div>
      <div @click="next">
        <img src="/next.svg" alt="next" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          id: 0,
          image: "/power1.png",
          title: "Data Collection with Precision",
          body:
            "No audience is out of reach for us. We collect data from General Population, Professionals, and Hard-to-reach audiences via Surveys, Interviews, or Focus Group Discussions.",
        },
        {
          id: 1,
          image: "/power2.png",
          title: "Authentic Data",
          body:
            "We collect authentic data with high integrity and in compliance with industry standards. We know the implication of using manipulated data for decision-making and curb this using methods such as pre-screening tests.",
        },
        {
          id: 2,
          image: "/power3.svg",
          title: "Actionable Insight",
          body:
            "Get the insights you need for your next move. We cut through the noise of data collection and analytics, to deliver insights you can act on immediately.",
        },
        {
          id: 3,
          image: "/power1.png",
          title: "Holistic Analysis",
          body:
            "Objective-driven analytics to unlock insight from your data using a combination of simple and complex methodologies.",
        },
      ],
      innerStyles: {},
      step: "",
      transitioning: false,
    };
  },

  mounted() {
    this.setStep();
    this.resetTranslate();
  },

  methods: {
    setStep() {
      const innerWidth = this.$refs.inner.scrollWidth;
      const totalCards = this.cards.length;
      this.step = `${innerWidth / totalCards}px`;
    },

    next() {
      if (this.transitioning) return;

      this.transitioning = true;

      this.moveLeft();

      this.afterTransition(() => {
        const card = this.cards.shift();
        this.cards.push(card);
        this.resetTranslate();
        this.transitioning = false;
      });
    },

    prev() {
      if (this.transitioning) return;

      this.transitioning = true;

      this.moveRight();

      this.afterTransition(() => {
        const card = this.cards.pop();
        this.cards.unshift(card);
        this.resetTranslate();
        this.transitioning = false;
      });
    },

    moveLeft() {
      this.innerStyles = {
        transform: `translateX(${this.step}) translateX(-${this.step})`,
      };
    },

    moveRight() {
      this.innerStyles = {
        transform: `translateX(${this.step}) translateX(-${this.step})`,
      };
    },

    afterTransition(callback) {
      const listener = () => {
        callback();
        this.$refs.inner.removeEventListener("transitionend", listener);
      };
      this.$refs.inner.addEventListener("transitionend", listener);
    },

    resetTranslate() {
      this.innerStyles = {
        transition: "none",
        transform: `translateX(0)`,
      };
    },
  },
};
</script>

<style>
.carousel {
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
}

.inner-card {
  transition: transform 0.2s;
  display: flex;
}
@media screen and (min-width: 1800px) {
  .card {
    width: 300px;
  }
  .inner-card {
    justify-content: center;
  }
}

.card {
  min-width: 300px;
  margin-right: 20px;
  padding: 16px;
  height: 410px;
  background-color: white;
  display: inline-block;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
}
</style>
