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
          Stop Letting Your Business Data Sit Idle. Turn Data Into Insight and
          Make Better Decisions.
        </h1>
        <p class="font-medium text-center text-lg text-[#3B3B3F]">
          From predictive modeling to data visualization, our
          Analytics-as-a-Service provides the expertise and support you need to
          turn your data into a strategic advantage.
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
    <div class="flex md:flex-row flex-col-reverse">
      <div
        class="md:w-6/12 w-full bg-secondary flex flex-col justify-center md:px-20 py-20 px-5"
      >
        <h1 class="md:text-6xl text-3xl text-white font-bold">
          Unlock the Hidden Potential in Your Business Data
        </h1>
        <p class="text-lg text-white font-medium my-4">
          In today's data-rich environment, businesses that leverage analytics
          have a clear competitive edge. We help you move beyond simply
          collecting data and empower you to extract meaningful insights that
          drive informed decisions and measurable results.
        </p>
      </div>
      <div class="md:w-6/12 w-full">
        <img
          src="/analytics-service/ride-image.svg"
          class="w-full h-full object-cover"
        />
      </div>
    </div>

    <div class="px-5 md:px-20 bg-white w-full py-16">
      <div
        class="md:w-8/12 flex flex-col items-center md:justify-center justify-start mx-auto w-full"
      >
        <h1
          class="md:text-4xl text-2xl md:text-center text-left font-semibold mb-5 w-full"
        >
          Our Analytics-as-a-Service Offering Provides Tailored Analytics
          Solutions to Meet Your Needs
        </h1>
        <p class="w-full leading-6 md:text-center text-left text-lg">
          Our flexible Analytics-as-a-Service offering is designed to meet the
          unique needs of your business. Whether you need help with a specific
          project or ongoing analytical support, we've got you covered.
        </p>
      </div>
      <div class="mx-auto grid md:grid-cols-2 grid-cols-1 gap-8 mt-12">
        <div class="rounded-[8px] relative bg-[#EBEBEBCC] p-[24px]">
          <img src="/analytics-service/Magnifying-Glass.svg" class="mb-8" />
          <h4 class="text-2xl font-bold mb-4">Predictive Modeling</h4>
          <p class="text-lg font-medium mb-16">
            Forecast future trends and anticipate market changes with our
            advanced predictive modeling techniques.
          </p>
        </div>
        <div class="rounded-[8px] relative bg-[#EBEBEBCC] p-[24px]">
          <img src="/analytics-service/customer-research.svg" class="mb-8" />
          <h4 class="text-2xl font-bold mb-4">Data Visualization</h4>
          <p class="text-lg font-medium mb-16">
            Transform complex data into clear, compelling visuals that
            communicate key insights and facilitate decision-making.
          </p>
        </div>
        <div class="rounded-[8px] relative bg-[#EBEBEBCC] p-[24px]">
          <img src="/analytics-service/Market-Segmentation.svg" class="mb-8" />
          <h4 class="text-2xl font-bold mb-4">Business Intelligence</h4>
          <p class="text-lg font-medium mb-16">
            Gain a holistic view of your business performance with customized
            dashboards and reports.
          </p>
        </div>
        <div class="rounded-[8px] relative bg-[#EBEBEBCC] p-[24px]">
          <img src="/analytics-service/Data-Research.svg" class="mb-8" />
          <h4 class="text-2xl font-bold mb-4">Statistical Analysis</h4>
          <p class="text-lg font-medium mb-16">
            Uncover hidden patterns and relationships in your data with our
            statistical expertise.
          </p>
        </div>
      </div>
      <div
        class="mt-8 rounded-[8px] flex md:flex-row flex-col justify-between item-center bg-[#EBEBEBCC] md:p-20 p-[24px]"
      >
        <div class="md:w-7/12 w-full">
          <img src="/analytics-service/Digital.svg" class="mb-6" />
        </div>
        <div class="md:w-5/12 w-full flex flex-col gap-6 items-start">
          <h3 class="font-bold text-2xl">Reporting & Dashboards</h3>
          <p class="text-lg font-medium">
            Get clear, concise, and actionable reports that track key
            performance indicators (KPIs) and inform strategic decisions.
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
          Driving Business Growth with Data-Driven Insights
        </h1>
      </div>
      <div
        class="md:w-10/12 mx-auto grid md:grid-cols-3 grid-cols-1 gap-8 mt-12"
      >
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[20px] px-[20px] flex items-center gap-4"
        >
          <img src="/market-intelligence/decision.svg" alt="" />
          <p class="text-lg font-medium">Improve decision-making</p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[20px] px-[20px] flex items-center gap-4"
        >
          <img src="/market-intelligence/Creative-Idea.svg" alt="" />
          <p class="text-lg font-medium">Optimize business performance</p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[20px] px-[20px] flex items-center gap-4"
        >
          <img src="/market-intelligence/Competition.svg" alt="" />
          <p class="text-lg font-medium">Identify new growth opportunities</p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[20px] px-[20px] flex items-center gap-4"
        >
          <img src="/market-intelligence/Risk-Hazard.svg" alt="" />
          <p class="text-lg font-medium">Reduce costs</p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[20px] px-[20px] flex items-center gap-4"
        >
          <img src="/market-intelligence/graph.svg" alt="" />
          <p class="text-lg font-medium">Increase efficiency</p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[20px] px-[20px] flex items-center gap-4"
        >
          <img src="/market-intelligence/Planning.svg" alt="" />
          <p class="text-lg font-medium">Gain a competitive edge</p>
        </div>
      </div>
    </div>
    <CtaSection
      :ctaTitle="'Ready to Unleash the Power of Your Data?'"
      :ctaSubTitle="'Contact us today for a free consultation and discover how our Analytics-as-a-Service can help you achieve your business goals.'"
    />
  </div>
</template>

<script>
import SimpleContactForm from "~/components/SimpleContactForm.vue";
export default {
  components: {
    SimpleContactForm,
  },
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
};
</script>

<style></style>
