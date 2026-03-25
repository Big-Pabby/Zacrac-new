<template>
  <div class="">
    
    <div
      :style="{
        backgroundImage: `url(/market-research/spots.png)`,
      }"
      class="bg-[#FEF0E9] min-h-screen flex justify-center items-center md:px-20 px-5 py-28 bg-cover bg-center"
    >
      <div
        class="md:w-8/12 w-full mx-auto flex flex-col gap-4 justify-center items-center"
      >
        <h1 class="md:text-6xl text-3xl text-center font-bold">
          Market Research: Unlocking Growth for New & Existing Businesses
        </h1>
        <p class="font-medium text-center text-lg text-[#3B3B3F]">
          Data-Driven Insights for Strategic Advantage.
        </p>
        <div class="flex md:flex-row flex-col gap-4 justify-center">
          <div
            @click="handleClick"
            class="bg-secondary py-[14px] px-[16px] rounded-[8px] text-white"
          >
            Book a Consultation
          </div>
          <a
            href="mailto:sales@zacrac.com"
            target="_blank"
            class="bg-[#000005] py-[14px] px-[16px] text-center rounded-[8px] text-white"
          >
            Contact Sales
          </a>
        </div>
      </div>
    </div>
    <div class="px-5 md:px-20 bg-primary w-full py-16">
      <div
        class="md:w-10/12 flex flex-col items-center justify-center mx-auto w-full"
      >
        <div
          class="rounded-full text-[#3B3B3F] text-center bg-[#E6E6F0] text-[15px] border-[0.5px] mb-4 border-primary px-[16px] py-[8px]"
        >
          ✨ For Startups
        </div>
        <h2
          class="text-white md:text-left text-center font-bold md:text-4xl text-3xl mb-8"
        >
          Reduce uncertainties. Launch with Confidence
        </h2>
        <div
          class="mt-12 py-12 md:px-20 px-[24px] bg-white rounded-[8px] flex md:flex-row flex-col items-center gap-4"
        >
          <img src="/market-research/fxemoji_lightbulb.svg" alt="" />
          <p class="flex-1 font-medium text-[#757578] md:text-xl text-lg">
            Starting a business is exciting, but it's also risky. We'll help you
            validate your ideas, understand your target market, and develop a
            robust go-to-market strategy. Minimize risk and maximize your
            potential with our tailored market research for startups.
          </p>
        </div>
      </div>
    </div>
    <div
      :style="{
        backgroundImage: `url(/solution-bg.svg)`,
      }"
      class="px-5 md:px-20 bg-secondary w-full py-16 bg-cover bg-center"
    >
      <div
        class="md:w-10/12 flex flex-col items-center justify-center mx-auto w-full"
      >
        <div
          class="rounded-full text-[#3B3B3F] text-center bg-[#E6E6F0] text-[15px] border-[0.5px] mb-4 border-primary px-[16px] py-[8px]"
        >
          ✨ For Established Businesses
        </div>
        <h2 class="text-white text-center font-bold md:text-4xl text-3xl mb-8">
          Stay Ahead of the Curve. <br />
          Know What the Market Wants and Unlock New Opportunities.
        </h2>
        <div
          class="mt-12 py-12 md:px-20 px-[24px] bg-white rounded-[8px] flex md:flex-row flex-col items-center gap-4"
        >
          <img src="/market-research/bitcoin-icons_graph-outline.svg" alt="" />
          <p class="flex-1 font-medium text-[#757578] md:text-xl text-lg">
            In today's ever-changing market, staying informed is crucial. We'll
            help you monitor industry trends, understand customer behavior, and
            outmaneuver your competition. Maintain your market leadership with
            our ongoing market research.
          </p>
        </div>
      </div>
    </div>
    <div class="px-5 md:px-20 w-full py-16">
      <div
        class="md:w-8/12 flex flex-col md:items-center items-start md:justify-center justify-start mx-auto w-full"
      >
        <div
          class="rounded-full text-[15px] text-[#3B3B3F] bg-[#E6E6F0] border-[0.5px] mb-4 border-primary px-[16px] py-[8px]"
        >
          ✨ DATA IN ACTION
        </div>
        <h1
          class="md:text-4xl text-2xl md:text-center text-left font-semibold mb-5 w-full"
        >
          A Multitude of Methodologies for Maximum Impact
        </h1>
        <p
          class="w-full text-[#4A4A4E] leading-6 md:text-center text-left text-lg"
        >
          Explore real-world examples of how our expertise has driven growth and
          innovation.
        </p>
      </div>
      <div
        class="md:w-10/12 mx-auto grid md:grid-cols-2 grid-cols-1 gap-8 mt-12"
      >
        <div class="rounded-[8px] relative bg-[#EBEBEB] p-[24px] pb-12">
          <img src="/market-research/Magnifying-Glass.svg" class="mb-8" />
          <h4 class="text-2xl text-bold text-[#3B3B3F] mb-4">
            Quantitative Research
          </h4>
          <p class="text-lg font-medium text-[#757578] mb-16">
            Uncover the “what” of consumer preference and behaviour with
            Data-driven insights through surveys, analytics, and statistical
            modeling.
          </p>
        </div>

        <div class="rounded-[8px] relative bg-[#EBEBEB] p-[24px] pb-12">
          <img src="/market-research/customer-research.svg" class="mb-8" />
          <h4 class="text-2xl text-bold text-[#3B3B3F] mb-4">
            Qualitative Research
          </h4>
          <p class="text-lg font-medium text-[#757578] mb-16">
            Uncovering the "why" behind consumer behavior with focus groups and
            interviews.
          </p>
        </div>
        <div class="rounded-[8px] relative bg-[#EBEBEB] p-[24px] pb-12">
          <img src="/market-research/Data-Research.svg" class="mb-8" />
          <h4 class="text-2xl text-bold text-[#3B3B3F] mb-4">
            Secondary Research
          </h4>
          <p class="text-lg font-medium text-[#757578] mb-16">
            Leveraging existing data from industry reports, databases, and
            publications for a broad market overview.
          </p>
        </div>
        <div class="rounded-[8px] relative bg-[#EBEBEB] p-[24px] pb-12">
          <img src="/market-research/Digital.svg" class="mb-8" />
          <h4 class="text-2xl text-bold text-[#3B3B3F] mb-4">
            Digital Data Collection
          </h4>
          <p class="text-lg font-medium text-[#757578] mb-16">
            Tapping into online data through web scraping and social listening.
          </p>
        </div>
      </div>
    </div>
    <div class="flex md:flex-row flex-col-reverse">
      <div
        class="md:w-6/12 w-full bg-primary flex flex-col justify-center md:px-20 py-20 px-5"
      >
        <h1 class="md:text-6xl text-3xl text-white font-bold">
          Authentic Data from the Right Audience — Even the Hard to Reach
        </h1>
        <p class="text-lg text-white font-medium my-4">
          We specialize in reaching even the most challenging demographics. Our
          tailored recruitment strategies, community partnerships, and
          multilingual capabilities ensure you get data from the people who
          matter most, anywhere.
        </p>
        <div class="flex items-center gap-6">
          <button
            class="bg-secondary py-[14px] px-[16px] rounded-[8px] text-white"
          >
            Book a Consultation
          </button>
        </div>
      </div>
      <div class="md:w-6/12 w-full h-full">
        <img
          src="/market-research/Frame-1000007033.svg"
          class="object-cover w-full h-full"
        />
      </div>
    </div>

    <div class="px-5 md:px-20 w-full bg-[#FFF0E6] py-16">
      <div
        class="md:w-8/12 flex flex-col items-center md:justify-center justify-start mx-auto w-full"
      >
        <h1
          class="md:text-4xl text-2xl md:text-center text-left font-semibold mb-5 w-full"
        >
          Ready to Unlock Conduct a Market Research?
        </h1>
        <p
          class="w-full text-[#757578] leading-6 md:text-center text-left text-lg"
        >
          Contact us today for a free consultation and discover how our Market
          Research services can help you achieve your business goals.
        </p>
      </div>
      <div
        class="md:w-10/12 mx-auto grid md:grid-cols-3 grid-cols-1 gap-8 mt-12"
      >
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <img src="/market-research/Verify.svg" alt="" />
          <p class="text-lg font-medium">Validate your business ideas.</p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <img src="/market-research/target.svg" alt="" />
          <p class="text-lg font-medium">Understand your target audience.</p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <img src="/market-research/Gdp.svg" alt="" />
          <p class="text-lg font-medium">Gain a competitive edge</p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <img src="/market-research/Shield.svg" alt="" />
          <p class="text-lg font-medium">Minimize risk</p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <img src="/market-research/graph.svg" alt="" />
          <p class="text-lg font-medium">Maximize your ROI</p>
        </div>
      </div>
    </div>

    <CtaSection
      :ctaTitle="'Ready to Conduct a Market Research?'"
      :ctaSubTitle="'Contact us today for a free consultation and discover how our Market Research services can help you achieve your business goals.'"
    />
  </div>
</template>

<script lang="ts">
import CtaSection from "~/components/CtaSection.vue";
import SimpleContactForm from "~/components/SimpleContactForm.vue";
export default {
  components: { CtaSection, SimpleContactForm },
  data() {
    return {
      showFormModal: false,
    };
  },
  methods: {
    handleClick() {
      this.showFormModal = true;
    },
  },
  head() {
    return {
      title: "Market Research - Zacrac",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Unlock growth for your business with our comprehensive market research services. We provide data-driven insights to help you make informed decisions.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.mr-hero {
  padding-top: 150px;
}
</style>
