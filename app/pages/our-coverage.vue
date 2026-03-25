<template>
  <div>
    <div>
      <div class="text-dark w-full px-5 lg:px-20 mt-32">
        <div class="md:w-9/12 w-full mx-auto">
          <h1
            class="md:text-4xl lg:text-5xl lg:leading-relaxed text-center text-3xl text-left font-semibold w-full"
          >
            Unlocking Insights Across Borders
          </h1>
          <p class="font-light pt-1 pb-10">
            Our commitment to delivering actionable insights extends beyond
            geographical boundaries. With a diverse and extensive reach, we
            proudly offer our market research services in the following
            countries.
          </p>
        </div>
        <div class="mx-auto md:my-16 my-10">
          <img
            class="w-1/2 mx-auto"
            src="/company/coverage.png"
            alt="cities we cover"
          />
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
            <img src="/company/world.svg" alt="" />
          </div>
          <p class="font-medium text-lg mt-3">
            Local Expertise, Global Insights
          </p>
          <p class="font-light py-2">
            Our team comprises experts with a deep understanding of the unique
            nuances and dynamics of each country. This local knowledge ensures
            that our research is culturally sensitive and contextually relevant.
          </p>
        </div>
        <div class="text-center">
          <div
            class="w-12 h-12 mx-auto rounded-md flex justify-center items-center bg-[#72B8001A]"
          >
            <img src="/company/pin-distance-line.png" alt="" />
          </div>
          <p class="font-medium text-lg mt-3">Comprehensive Coverage</p>
          <p class="font-light py-2">
            From the bustling markets of Nigeria to the vibrant landscapes of
            Kenya, we offer comprehensive coverage across diverse regions,
            enabling you to tap into a rich tapestry of consumer behaviors and
            preferences.
          </p>
        </div>

        <div class="">
          <div
            class="w-12 h-12 mx-auto rounded-md flex justify-center items-center bg-[#20B4BD1A]"
          >
            <img src="/company/shake-hands-line.svg" alt="" />
          </div>
          <p class="font-medium text-lg mt-3">Seamless Execution</p>
          <p class="font-light py-2">
            Our established network and resources in these countries facilitate
            seamless execution of research projects. We navigate local
            intricacies with ease, ensuring timely and accurate data collection.
          </p>
        </div>
        <div class="">
          <div
            class="w-12 h-12 mx-auto rounded-md flex justify-center items-center bg-[#6B15D91A]"
          >
            <img src="/company/line-chart-line.png" alt="" />
          </div>
          <p class="font-medium text-lg mt-3">Data-Driven Decision-Making</p>
          <p class="font-light py-2">
            By leveraging our market research services across multiple
            countries, you gain a panoramic view of your target audience. This
            holistic approach empowers you to make data-driven decisions that
            transcend borders.
          </p>
        </div>
      </div>
    </div>
    <div class="px-5 md:px-20 my-10 md:py-5 w-full">
      <h2 class="text-2xl font-semibold">Our Presence</h2>
      <p class="font-light pt-2 mb-5">
        Extensive Global Footprint: Linking Audiences Across the Continents
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        <div class="">
          <div class="w-24 h-24 rounded-md flex justify-center items-center">
            <img src="/company/nigeria.png" alt="" />
          </div>
          <p class="font-medium text-lg mt-3">Nigeria</p>
          <p class="font-light py-2">
            Explore the vibrant and dynamic Nigerian market with our research
            services. Uncover consumer trends, preferences, and opportunities
            that shape this influential African economy.
          </p>
        </div>
        <div class="">
          <div class="w-24 h-24 rounded-md flex justify-center items-center">
            <img src="/company/ghana.png" alt="" />
          </div>
          <p class="font-medium text-lg mt-3">Ghana</p>
          <p class="font-light py-2">
            From Accra to Kumasi, our market research in Ghana unveils insights
            into consumer behaviors, helping you tailor strategies that resonate
            with this unique market.
          </p>
        </div>
        <div class="">
          <div class="w-24 h-24 rounded-md flex justify-center items-center">
            <img src="/company/south-africa.png" alt="" />
          </div>
          <p class="font-medium text-lg mt-3">South Africa</p>
          <p class="font-light py-2">
            Dive into the diverse landscapes of South Africa with our research.
            Understand the intricacies of urban and rural consumers, and refine
            your business strategies accordingly.
          </p>
        </div>
        <div class="">
          <div class="w-24 h-24 rounded-md flex justify-center items-center">
            <img src="/company/morocco.png" alt="" />
          </div>
          <p class="font-medium text-lg mt-3">Morocco</p>
          <p class="font-light py-2">
            Explore the vibrant and dynamic Nigerian market with our research
            services. Uncover consumer trends, preferences, and opportunities
            that shape this influential African economy.
          </p>
        </div>
        <div class="">
          <div class="w-24 h-24 rounded-md flex justify-center items-center">
            <img src="/company/kenya.png" alt="" />
          </div>
          <p class="font-medium text-lg mt-3">Kenya</p>
          <p class="font-light py-2">
            Discover the burgeoning opportunities in Kenya's market landscape
            with our research services. We provide you with a comprehensive
            understanding of consumer dynamics in this East African hub.
          </p>
        </div>
      </div>
    </div>
    <CtaSection />
  </div>
</template>

<script>
import Carousel from "~/components/CarouselSection.vue";
import CtaSection from "~/components/CtaSection.vue";

export default {
  components: { Carousel, CtaSection },
  methods: {},
  head() {
    return {
      title: "ZACRAC | Countries we cover.",
      meta: [
        {
          key: "description",
          name: "description",
          content:
            "Founded to help you make smarter decisions by leveraging data and analytics.",
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
            "Founded to help you make smarter decisions by leveraging data and analytics.",
          vmid: "og:description",
        },
        {
          property: "og:type",
          content: "website",
          vmid: "og:type",
        },
        {
          property: "og:url",
          content: "https://zacrac.com/our-coverage",
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
            "Founded to help you make smarter decisions by leveraging data and analytics.",
          vmid: "og:description",
        },
        {
          property: "twitter:card",
          content: "summary_large_image",
          vmid: "og:type",
        },
        {
          property: "twitter:url",
          content: "https://zacrac.com/our-coverage",
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
.card {
  width: 320px;
  border: 1px solid #cfdae3;
  border-radius: 16px;
  padding: 20px;
}
</style>
