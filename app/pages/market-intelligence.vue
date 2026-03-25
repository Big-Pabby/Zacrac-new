<template>
  <div>
   
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
          Market Intelligence: Anticipate, Adapt, Win in the Marketplace.
        </h1>
        <p class="font-medium text-center text-lg text-[#3B3B3F]">
          Gain a continuous understanding of your market landscape, identify
          emerging trends, and make proactive decisions with our expert Market
          Intelligence services.
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
            class="bg-[#000005] py-[14px] px-[16px] rounded-[8px] text-white"
          >
            Contact Sales
          </a>
        </div>
      </div>
    </div>
    <div class="px-5 md:px-20 bg-[#FF6600] w-full py-16">
      <div
        class="md:w-8/12 flex flex-col md:items-center items-start md:justify-center justify-start mx-auto w-full"
      >
        <h1
          class="md:text-4xl text-2xl md:text-center text-white text-left font-semibold mb-5 w-full"
        >
          Don't Just React. Anticipate. Plan. Strategize. All with Data.
        </h1>
      </div>
      <div
        class="mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-12"
      >
        <div class="rounded-[12px] relative bg-[#FFFFFFCC] p-[20px]">
          <img src="/market-intelligence/Digital.svg" class="mb-8" />

          <p class="text-lg font-medium mb-8 text-[#1D1D1D]">
            Markets are dynamic. Consumer preferences shift, new technologies
            emerge, and competitors constantly evolve. 
          </p>
        </div>
        <div class="rounded-[12px] relative bg-[#FFFFFFCC] p-[20px]">
          <img
            src="/market-intelligence/Artificial-intelligence.svg"
            class="mb-8"
          />
          <p class="text-lg font-medium mb-8 text-[#1D1D1D]">
            Without ongoing market intelligence, you risk falling behind. 
          </p>
        </div>
        <div class="rounded-[12px] relative bg-[#FFFFFFCC] p-[20px]">
          <img src="/market-intelligence/Business-Vision.svg" class="mb-8" />
          <p class="text-lg font-medium mb-8 text-[#1D1D1D]">
            We provide the strategic foresight you need to stay ahead of the
            curve and capitalize on emerging opportunities.
          </p>
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
          ✨ Our Market Intelligence Approach
        </div>
        <h2
          class="text-white md:text-left text-center font-bold md:text-4xl text-3xl mb-8"
        >
          A Continuous Stream of Actionable Insights.
        </h2>
        <div
          class="mt-12 flex gap-6 md:flex-row justify-between items-center flex-col-reverse"
        >
          <div class="md:w-7/12 w-full">
            <div
              class="w-full rounded-[8px] py-[20px] px-[24px] bg-white text-lg font-medium mb-2"
            >
              Our Market Intelligence services are not a one-time project.
            </div>
            <div
              class="w-full rounded-[8px] py-[20px] px-[24px] bg-white text-lg font-medium mb-2"
            >
              Our approach combines a variety of methodologies to provide a
              holistic view of the market.
            </div>
            <div
              class="w-full rounded-[8px] py-[20px] px-[24px] bg-white text-lg font-medium mb-2"
            >
              We provide ongoing monitoring, analysis, and reporting to keep you
              informed about the ever-changing market landscape.
            </div>
            <div
              class="w-full rounded-[8px] py-[20px] px-[24px] bg-white text-lg font-medium mb-2"
            >
              We aim to become your market intelligence partner, not just a
              one-off intelligence provider.
            </div>
            <div
              @click="handleClick"
              class="bg-secondary inline-block mt-8 py-[14px] px-[16px] rounded-[8px] text-white"
            >
              Book a Consultation
            </div>
          </div>
          <div class="md:w-4/12 w-full">
            <img src="/market-intelligence/stream.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="px-5 md:px-20 bg-white w-full py-16">
      <div
        class="md:w-8/12 flex flex-col items-center md:justify-center justify-start mx-auto w-full"
      >
        <div
          class="rounded-full text-[15px] text-[#3B3B3F] bg-[#E6E6F0] border-[0.5px] mb-4 border-[#000066] px-[16px] py-[8px]"
        >
          ✨KEY COMPONENTS
        </div>
        <h1
          class="md:text-4xl text-2xl md:text-center text-left font-semibold mb-5 w-full"
        >
          Key Components of Our Market Intelligence Services
        </h1>
        <p class="w-full leading-6 md:text-center text-left text-lg">
          What We Deliver: A Comprehensive View of Your Market
        </p>
      </div>
      <div class="mx-auto grid md:grid-cols-2 grid-cols-1 gap-8 mt-12">
        <div class="rounded-[8px] relative bg-[#EBEBEBCC] p-[24px]">
          <img
            src="/market-intelligence/Competitive-Analysis.svg"
            class="mb-8"
          />
          <h4 class="text-2xl text-bold mb-4">Competitive Monitoring</h4>
          <p class="text-lg font-medium mb-16">
            Track competitor activities, analyze their strategies, and identify
            potential threats and opportunities.
          </p>
        </div>
        <div class="rounded-[8px] relative bg-[#EBEBEBCC] p-[24px]">
          <img src="/market-intelligence/trend-down.svg" class="mb-8" />
          <h4 class="text-2xl text-bold mb-4">Industry Trend Analysis</h4>
          <p class="text-lg font-medium mb-16">
            Stay informed about emerging trends, technological advancements, and
            regulatory changes impacting your industry.
          </p>
        </div>
        <div class="rounded-[8px] relative bg-[#EBEBEBCC] p-[24px]">
          <img src="/market-intelligence/Customer.svg" class="mb-8" />
          <h4 class="text-2xl text-bold mb-4">Customer Insights</h4>
          <p class="text-lg font-medium mb-16">
            Understand evolving customer needs, preferences, and behaviors.
          </p>
        </div>
        <div class="rounded-[8px] relative bg-[#EBEBEBCC] p-[24px]">
          <img src="/market-intelligence/growth.svg" class="mb-8" />
          <h4 class="text-2xl text-bold mb-4">Market Landscape Assessment</h4>
          <p class="text-lg font-medium mb-16">
            Gain a comprehensive view of your target market, including market
            size, growth potential, and key players.
          </p>
        </div>
      </div>
      <div
        class="mt-8 rounded-[8px] flex md:flex-row flex-col justify-between item-center bg-[#EBEBEBCC] md:p-20 p-[24px]"
      >
        <div class="md:w-7/12 w-full">
          <img src="/market-intelligence/data-computing.svg" class="mb-6" />
        </div>
        <div class="md:w-5/12 w-full flex flex-col gap-6 items-start">
          <h3 class="font-bold text-2xl">Emerging Technology Tracking</h3>
          <p class="text-lg font-medium">
            Identify disruptive technologies that could impact your business.
          </p>
        </div>
      </div>
    </div>
    <div class="px-5 md:px-20 w-full bg-[#FFF0E6] py-16">
      <div
        class="md:w-8/12 flex flex-col items-center md:justify-center justify-start mx-auto w-full"
      >
        <div
          class="rounded-full text-[15px] text-[#3B3B3F] bg-[#E6E6F0] border-[0.5px] mb-4 border-[#000066] px-[16px] py-[8px]"
        >
          ✨The Value We Deliver
        </div>
        <h1
          class="md:text-4xl text-2xl md:text-center text-left font-semibold mb-5 w-full"
        >
          Strategic Foresight for Sustainable Success
        </h1>
      </div>
      <div
        class="md:w-10/12 mx-auto grid md:grid-cols-3 grid-cols-1 gap-8 mt-12"
      >
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[20px] px-[20px] flex items-center gap-4"
        >
          <img src="/market-intelligence/decision.svg" alt="" />
          <p class="text-lg font-medium">Make proactive decisions</p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[20px] px-[20px] flex items-center gap-4"
        >
          <img src="/market-intelligence/Creative-Idea.svg" alt="" />
          <p class="text-lg font-medium">
            Capitalize on emerging opportunities
          </p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[20px] px-[20px] flex items-center gap-4"
        >
          <img src="/market-intelligence/Competition.svg" alt="" />
          <p class="text-lg font-medium">Outmaneuver your competition</p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[20px] px-[20px] flex items-center gap-4"
        >
          <img src="/market-intelligence/Risk-Hazard.svg" alt="" />
          <p class="text-lg font-medium">Mitigate risks</p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[20px] px-[20px] flex items-center gap-4"
        >
          <img src="/market-intelligence/graph.svg" alt="" />
          <p class="text-lg font-medium">Identify new growth areas</p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[20px] px-[20px] flex items-center gap-4"
        >
          <img src="/market-intelligence/Planning.svg" alt="" />
          <p class="text-lg font-medium">Improve strategic planning</p>
        </div>
      </div>
    </div>
    <CtaSection
      :ctaTitle="'Ready to Gain a Strategic Edge?'"
      :ctaSubTitle="'Contact us today for a free consultation and discover how our Market Intelligence services can help you anticipate the future and achieve sustainable success.'"
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
      title: "Market Intelligence - Zacrac",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Gain a continuous understanding of your market landscape, identify emerging trends, and make proactive decisions with our expert Market Intelligence services.",
        },
      ],
    };
  },
};
</script>

<style></style>
