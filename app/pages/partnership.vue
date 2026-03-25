<template>
  <div>
    <div>
      <div class="text-dark w-full px-5 lg:px-20 mt-32">
        <div class="md:w-9/12 w-full mx-auto">
          <h1
            class="md:text-4xl lg:leading-relaxed text-center text-3xl text-left font-semibold w-full"
          >
            Let’s Succeed Together. Let’s Partner.
          </h1>
          <p class="font-light pt-1 pb-4 text-center">
            We're excited to explore opportunities to join forces with market
            research agencies, companies, and consulting firms. By combining our
            expertise and resources, we can create synergies that redefine the
            landscape of data-driven insights.
          </p>
          <button
            @click="openModal = true"
            class="bg-secondary text-white px-4 flex font-light items-center rounded-md py-3 mb-10 mx-auto"
          >
            Become a Partner
          </button>
        </div>
       
        <div class="">
          <div class="md:flex hidden gap-5 w-full md:my-16 my-10">
            <div class="md:w-1/3">
              <div class="">
                <img
                  class="w-full"
                  src="/company/partner1.png"
                  alt="partners"
                />
              </div>
            </div>
            <div class="md:w-1/3">
              <div class="">
                <img
                  class="w-full"
                  src="/company/partner2.png"
                  alt="partners"
                />
              </div>
            </div>
            <div class="md:w-1/3">
              <div class="">
                <img
                  class="w-full"
                  src="/company/partner3.png"
                  alt="partners"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="px-5 md:px-20 md:mt-20 mt-10 mb-10 py-12 w-full text-center bg-[#FFF6F6]"
    >
      <h2 class="text-2xl font-semibold my-5">
        Why Choose us for Cross-country Market Research?
      </h2>
      <div
        class="grid grid-cols-1 text-center md:grid-cols-2 lg:px-36 justify-center gap-8 mt-10"
      >
        <div class="text-center">
          <div
            class="w-12 h-12 mx-auto rounded-md flex justify-center items-center bg-[#007DFC1A]"
          >
            <img src="/company/line-chart-line.svg" alt="" />
          </div>
          <p class="font-medium text-lg mt-3">Amplifying Expertise</p>
          <p class="font-light py-2">
            Join hands with us to amplify your market research capabilities.
            Together, we can harness the power of diverse expertise and insights
            to provide comprehensive solutions to our clients.
          </p>
        </div>
        <div class="text-center">
          <div
            class="w-12 h-12 mx-auto rounded-md flex justify-center items-center bg-[#72B8001A]"
          >
            <img src="/company/tools.svg" alt="" />
          </div>
          <p class="font-medium text-lg mt-3">Access to Cutting-Edge Tools</p>
          <p class="font-light py-2">
            Partnering with us grants you access to our state-of-the-art market
            research tools and technologies, giving you a competitive edge in
            delivering top-notch services.
          </p>
        </div>

        <div class="">
          <div
            class="w-12 h-12 mx-auto rounded-md flex justify-center items-center bg-[#20B4BD1A]"
          >
            <img src="/company/pin-distance-line.svg" alt="" />
          </div>
          <p class="font-medium text-lg mt-3">Expanded Reach</p>
          <p class="font-light py-2">
            By pooling our resources, we can reach a broader audience and cater
            to a wide range of industries and sectors, driving collective growth
            and impact.
          </p>
        </div>
        <div class="">
          <div
            class="w-12 h-12 mx-auto rounded-md flex justify-center items-center bg-[#6B15D91A]"
          >
            <img src="/company/lightbulb-flash-line.svg" alt="" />
          </div>
          <p class="font-medium text-lg mt-3">Collaborative Innovation</p>
          <p class="font-light py-2">
            Innovation thrives in collaborative environments. Our partnerships
            inspire the exchange of fresh ideas, methodologies, and strategies
            that shape the future of market research.
          </p>
        </div>
      </div>
    </div>
    <div class="px-5 md:px-20 my-10 md:py-5 w-full">
      <h2 class="text-2xl font-semibold">Our Collaborative Approach</h2>
      <p class="font-light pt-2 mb-5">
        Explore how collaboration fosters synergy within our organization.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        <div class="">
          <div class="w-20 h-20 rounded-md flex justify-center items-center">
            <img src="/company/alliances.svg" alt="alliances" />
          </div>
          <p class="font-medium text-lg mt-3">Tailored Alliances</p>
          <p class="font-light py-2">
            We understand that every partnership is unique. Our team works
            closely with you to tailor our collaboration to suit your strengths
            and objectives.
          </p>
        </div>
        <div class="">
          <div class="w-20 h-20 rounded-md flex justify-center items-center">
            <img src="/company/goals.svg" alt="goals" />
          </div>
          <p class="font-medium text-lg mt-3">Shared Goals</p>
          <p class="font-light py-2">
            Our partnerships are built on shared goals and mutual benefits.
            We're committed to aligning our efforts to drive tangible results
            and exceptional value for our clients.
          </p>
        </div>
        <div class="">
          <div class="w-20 h-20 rounded-md flex justify-center items-center">
            <img src="/company/support.svg" alt="support" />
          </div>
          <p class="font-medium text-lg mt-3">Ongoing Support</p>
          <p class="font-light py-2">
            Our commitment extends beyond the initial handshake. We offer
            ongoing support, resources, and guidance to ensure our collaborative
            efforts flourish.
          </p>
        </div>
      </div>
    </div>
    <CtaSection />
  </div>
</template>

<script>
import CtaSection from "~/components/CtaSection.vue";

export default {
  components: { CtaSection },
  methods: {},
  data() {
    return {
      openModal: false,
    };
  },
  head() {
    return {
      title: "ZACRAC | Partnership. Let's be your Market Research Partner",
      meta: [
        {
          key: "description",
          name: "description",
          content:
            "We're excited to explore opportunities to join forces with market research agencies, companies, and consulting firms. By combining our expertise and resources, we can create synergies that redefine the landscape of data-driven insights.",
        },
        {
          key: "robots",
          name: "robots",
          content: "index,follow",
        },

        {
          property: "og:title",
          content: "Zacrac - Market research and data science company",
          vmid: "og:title",
        },
        {
          property: "og:descrition",
          content:
            "We're excited to explore opportunities to join forces with market research agencies, companies, and consulting firms. By combining our expertise and resources, we can create synergies that redefine the landscape of data-driven insights.",
          vmid: "og:description",
        },
        {
          property: "og:type",
          content: "website",
          vmid: "og:type",
        },
        {
          property: "og:url",
          content: "https://zacrac.com/partnership",
          vmid: "og:url",
        },
        {
          property: "og:image",
          content: "https://zacrac.com/assets/img/zac-life.576662de.jpg",
          vmid: "og:image",
        },
        {
          property: "twitter:title",
          content: "Zacrac - Market research and data science company",
          vmid: "og:title",
        },
        {
          property: "twitter:descrition",
          content:
            "We're excited to explore opportunities to join forces with market research agencies, companies, and consulting firms. By combining our expertise and resources, we can create synergies that redefine the landscape of data-driven insights.",
          vmid: "og:description",
        },
        {
          property: "twitter:card",
          content: "summary_large_image",
          vmid: "og:type",
        },
        {
          property: "twitter:url",
          content: "https://zacrac.com/partnership",
          vmid: "og:url",
        },
        {
          property: "og:image",
          content: "https://zacrac.com/assets/img/zac-life.576662de.jpg",
          vmid: "og:image",
        },
      ],
    };
  },
};
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>
