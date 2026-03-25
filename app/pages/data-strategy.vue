<template>
  <div class="corporate">
    
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
          Is Your Data Working for You? OR, Do You Even Know What Data to
          Collect or Track?
        </h1>
        <p class="font-medium text-center text-lg text-[#3B3B3F]">
          Stop letting your data sit idle. We'll help you develop a
          comprehensive data strategy that aligns with your business objectives
          and drives measurable results.
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
    <div class="flex md:flex-row flex-col-reverse">
      <div
        class="md:w-6/12 w-full bg-secondary flex flex-col justify-center md:px-20 py-20 px-5"
      >
        <h1 class="md:text-6xl text-3xl text-white font-bold">
          Unlocking the Power of Data
        </h1>
        <p class="text-lg text-white font-medium my-4">
          Many organizations struggle to effectively leverage their data.
          Without a clear data strategy, you risk missing valuable insights,
          making poor decisions, and falling behind the competition. We'll help
          you turn your data into a strategic weapon.
        </p>
      </div>
      <div class="md:w-6/12 w-full h-full">
        <img
          src="/competitor-research/image.svg"
          class="object-cover w-full h-full"
        />
      </div>
    </div>
    <div class="px-5 md:px-20 bg-primary w-full py-16">
      <div
        class="md:w-10/12 flex flex-col items-center justify-center mx-auto w-full"
      >
        <h2
          class="text-white md:text-left text-center font-bold md:text-4xl text-3xl mb-8"
        >
          A Collaborative Approach to Data-Driven Transformation
        </h2>
        <div
          class="mt-12 py-12 md:px-20 px-[24px] bg-white rounded-[8px] flex md:flex-row flex-col items-center gap-4"
        >
          <img src="/market-research/bitcoin-icons_graph-outline.svg" alt="" />
          <p class="flex-1 font-medium text-[#757578] md:text-xl text-lg">
            We work closely with you to understand your business goals, assess
            your current data landscape, and develop a tailored data strategy
            that aligns with your unique needs. Our collaborative approach
            ensures that your data strategy is practical, actionable, and
            sustainable.
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
          ✨ WHAT WE OFFER
        </div>
        <h1
          class="md:text-4xl text-2xl md:text-center text-left font-semibold mb-5 w-full"
        >
          A Comprehensive Data Strategy Framework
        </h1>
      </div>
      <div
        class="md:w-10/12 mx-auto grid md:grid-cols-2 grid-cols-1 gap-8 mt-12"
      >
        <div class="rounded-[8px] relative bg-[#FFF0E6CC] p-[24px] pb-12">
          <img
            src="/competitor-research/Competitive-Analysis.svg"
            class="mb-8"
          />
          <h4 class="text-2xl text-bold text-[#3B3B3F] mb-4">
            Data Assessment & Audit
          </h4>
          <p class="text-lg font-medium text-[#757578] mb-16">
            Track competitor activities, analyze their strategies, and identify
            potential threats and opportunities.
          </p>
        </div>

        <div class="rounded-[8px] relative bg-[#FFF0E6CC] p-[24px] pb-12">
          <img src="/competitor-research/Target.svg" class="mb-8" />
          <h4 class="text-2xl text-bold text-[#3B3B3F] mb-4">
            Business Goal Alignment
          </h4>
          <p class="text-lg font-medium text-[#757578] mb-16">
            We work with you to understand your key business objectives and
            ensure that your data strategy directly supports those goals.
          </p>
        </div>
        <div class="rounded-[8px] relative bg-[#FFF0E6CC] p-[24px] pb-12">
          <img src="/competitor-research/Shield.svg" class="mb-8" />
          <h4 class="text-2xl text-bold text-[#3B3B3F] mb-4">
            Data Governance Framework
          </h4>
          <p class="text-lg font-medium text-[#757578] mb-16">
            We develop a data governance framework to ensure data security,
            privacy, and compliance.
          </p>
        </div>
        <div class="rounded-[8px] relative bg-[#FFF0E6CC] p-[24px] pb-12">
          <img src="/competitor-research/Blueprint.svg" class="mb-8" />
          <h4 class="text-2xl text-bold text-[#3B3B3F] mb-4">
            Data Architecture Design
          </h4>
          <p class="text-lg font-medium text-[#757578] mb-16">
            We design a data architecture that is scalable, flexible, and
            supports your current and future data needs.
          </p>
        </div>
        <div class="rounded-[8px] relative bg-[#FFF0E6CC] p-[24px] pb-12">
          <img src="/competitor-research/data-computing.svg" class="mb-8" />
          <h4 class="text-2xl text-bold text-[#3B3B3F] mb-4">
            Data Integration & Management
          </h4>
          <p class="text-lg font-medium text-[#757578] mb-16">
            We develop strategies for integrating data from various sources and
            managing data effectively.
          </p>
        </div>
        <div class="rounded-[8px] relative bg-[#FFF0E6CC] p-[24px] pb-12">
          <img src="/competitor-research/raphael_roadmap.svg" class="mb-8" />
          <h4 class="text-2xl text-bold text-[#3B3B3F] mb-4">
            Data Roadmap & Action Plan
          </h4>
          <p class="text-lg font-medium text-[#757578] mb-16">
            We create a clear roadmap and implementation plan to guide your
            data-driven transformation.
          </p>
        </div>
      </div>
    </div>

    <div class="px-5 md:px-20 w-full bg-[#FFF0E6] py-16">
      <div
        class="md:w-8/12 flex flex-col items-center md:justify-center justify-start mx-auto w-full"
      >
        <div
          class="rounded-full text-[15px] text-[#3B3B3F] bg-[#E6E6F0] border-[0.5px] mb-4 border-primary px-[16px] py-[8px]"
        >
          ✨ The Value We Deliver
        </div>
        <h1
          class="md:text-4xl text-2xl md:text-center text-left font-semibold mb-5 w-full"
        >
          Unlocking the Power of Your Data
        </h1>
      </div>
      <div
        class="md:w-10/12 mx-auto grid md:grid-cols-3 grid-cols-1 gap-8 mt-12"
      >
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <img src="/market-intelligence/decision.svg" alt="" />
          <p class="text-lg font-medium">Improve decision-making</p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <img src="/market-intelligence/Creative-Idea.svg" alt="" />
          <p class="text-lg font-medium">Increased efficiency</p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <img src="/market-intelligence/Risk-Hazard.svg" alt="" />

          <p class="text-lg font-medium">Reduce costs</p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <img src="/market-intelligence/Competition.svg" alt="" />
          <p class="text-lg font-medium">Enhanced customer experience</p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <img src="/market-intelligence/graph.svg" alt="" />
          <p class="text-lg font-medium">New revenue streams</p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <img src="/market-intelligence/Planning.svg" alt="" />
          <p class="text-lg font-medium">Competitive advantage</p>
        </div>
      </div>
    </div>

    <CtaSection
      :ctaTitle="'Ready to Transform Your Data into a Strategic Asset?'"
      :ctaSubTitle="'Contact us today for a free consultation and discover how our Data Strategy services can help you achieve your business goals.'"
    />
  </div>
</template>

<script>
import SimpleContactForm from "~/components/SimpleContactForm.vue";
export default {
  components: { SimpleContactForm },
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
      title: "Data Strategy - Zacrac",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Discover how Zacrac can help you develop a comprehensive data strategy to unlock the power of your data and drive business success.",
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
