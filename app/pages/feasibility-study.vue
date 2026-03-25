<template>
  <div class="mb-20">
  
    <div
      class="md:px-20 px-5 pt-16 about-hero bg-hero-pattern min-h-[400px] flex md:flex-row w-full items-center flex-col justify-between gap-3"
    >
      <div
        class="md:w-5/12 md:block flex flex-col items-center md:mt-0 mt-8 justify-center"
      >
        <div
          class="text-[#008751] text-[14px] inline-block font-bold rounded-full bg-[#69BA6C1A] px-[19px] py-[5px]"
        >
          Feasibility Study
        </div>
        <h2
          class="md:text-[40px] text-2xl md:text-left text-center font-semibold my-6"
        >
          Unlock the Potential of your Business Ventures. <br />
          Conduct a Feasibility Study.
        </h2>
        <p class="w-full md:w-8/12 mx-auto leading-6 text-center text-lg">
          We help you determine the viability of your project or business idea.
        </p>
        <div class="mt-8 mb-4">
          <button @click="handleClick" class="btn-secondary">
            Get Started
          </button>
        </div>
      </div>
      <div class="md:w-5/12 md:block hidden">
        <img
          src="/market-research/feasibility-hero.svg"
          class="object-cover w-full"
          alt=""
        />
      </div>
    </div>
    <div class="mt-32 md:px-20 px-5 grid md:grid-cols-2 grid-cols-1 gap-6">
      <div
        class="bg-[#FAFAFA] rounded-[20px] p-8 flex md:flex-row flex-col gap-6 items-center"
      >
        <img src="/market-research/deep.svg" alt="" />
        <div>
          <h4
            class="font-semibold md:text-[24px] text-lg md:text-left text-center mb-2"
          >
            We Dig Deep
          </h4>
          <p class="md:text-left text-center">
            Dive deep into the viability of your projects. Our feasibility
            studies leave no stone unturned, exploring every aspect to provide
            you with a holistic understanding of the potential challenges and
            opportunities.
          </p>
        </div>
      </div>
      <div
        class="bg-[#FAFAFA] rounded-[20px] p-8 flex md:flex-row flex-col gap-6 items-center"
      >
        <img src="/market-research/strategic.svg" alt="" />
        <div>
          <h4
            class="font-semibold md:text-[24px] text-lg mb-2 md:text-left text-center"
          >
            Strategic Assurance
          </h4>
          <p class="md:text-left text-center">
            Ensure your initiatives align seamlessly with market demands and
            industry dynamics. ZACRAC's feasibility studies are designed to be
            your strategic assurance, offering insights that empower you to make
            decisions confidently.
          </p>
        </div>
      </div>
      <div
        class="bg-[#FAFAFA] rounded-[20px] p-8 flex md:flex-row flex-col gap-6 items-center"
      >
        <img src="/market-research/decisions.svg" alt="" />
        <div>
          <h4
            class="font-semibold md:text-[24px] text-lg mb-2 md:text-left text-center"
          >
            Make Informed Decisions
          </h4>
          <p class="md:text-left text-center">
            Move beyond assumptions. Our studies provide thedata-driven insights
            needed to make informed decisions, minimize risks, and maximizethe
            potential for success.
          </p>
        </div>
      </div>
      <div
        class="bg-[#FAFAFA] rounded-[20px] p-8 flex md:flex-row flex-col gap-6 items-center"
      >
        <img src="/market-research/customized.svg" alt="" />
        <div>
          <h4
            class="font-semibold md:text-[24px] text-lg mb-2 md:text-left text-center"
          >
            Customized Approach
          </h4>
          <p class="md:text-left text-center">
            Every business is unique, and so are our feasibility studies. Get a
            stellar feasibility study tailored to your specific industry and
            project goals. Our approach ensures you receive relevant, actionable
            insights aligned with your vision.
          </p>
        </div>
      </div>
    </div>
    <div class="mt-32 bg-[#FFF6F6]">
      <div class="md:px-20 px-5 py-12 md:w-9/12 w-full mx-auto">
        <h3 class="md:text-[40px] text-2xl font-semibold mb-8 text-center">
          Our Process
        </h3>
        <div class="grid md:grid-cols-2 grid-cols-1 gap-8">
          <div class="flex min-h-[210px] items-center flex-col w-full">
            <div
              class="w-[53px] h-[51px] rounded-[10px] flex justify-center items-center bg-[#007DFC1A]"
            >
              <img
                src="/market-research/file-list-3-line.svg"
                alt=""
              />
            </div>
            <h4 class="font-semibold text-[20px] my-8">
              Project Scope Definition
            </h4>
            <p class="text-center">
              Work with our experts to define the scope of your project. We
              investigate your goals, constraints, and expectations to craft a
              tailored feasibility study plan.
            </p>
          </div>
          <div class="flex items-center min-h-[210px] flex-col w-full">
            <div
              class="w-[53px] h-[51px] rounded-[10px] flex justify-center items-center bg-[#72B8001A]"
            >
              <img
                src="/market-research/pie-chart-2-line.svg"
                alt=""
              />
            </div>
            <h4 class="font-semibold text-[20px] my-8">
              Data Collection and Analysis
            </h4>
            <p class="text-center">
              Leverage our extensive data resources and analytical expertise.
              Our team analyzes data precisely, uncovering potential challenge
              sand opportunities that might impact your project's success.
            </p>
          </div>
          <div class="flex items-center min-h-[210px] flex-col w-full">
            <div
              class="w-[53px] h-[51px] flex items-center justify-center rounded-[10px] bg-[#6B15D91A]"
            >
              <img src="/market-research/bard-line.svg" alt="" />
            </div>
            <h4 class="font-semibold text-[20px] my-8">
              Strategic Recommendations
            </h4>
            <p class="text-center">
              Receive strategic recommendations based on our findings. We don't
              just present data; we guide you towards actionable insightsthat
              inform your decision-making process.
            </p>
          </div>
          <div class="flex items-center min-h-[210px] flex-col w-full">
            <div
              class="w-[53px] h-[51px] flex items-center justify-center rounded-[10px] bg-[#20B4BD1A]"
            >
              <img src="/market-research/asterisk.svg" alt="" />
            </div>
            <h4 class="font-semibold text-[20px] my-8">Risk Assessment</h4>
            <p class="text-center">
              Identify and mitigate risks proactively. Our feasibility studies
              include a detailed risk assessment, providing you with a roadmap
              to navigate potential obstacles.
            </p>
          </div>
        </div>
      </div>
    </div>
    <CtaSection
      :ctaTitle="'Are you looking to conduct Market Research?'"
      :ctaSubTitle="''"
    />
  </div>
</template>

<script lang="ts">
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
      title: "Feasibility Study - ZACRAC",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Discover the viability of your business idea or project with our comprehensive feasibility study. We provide detailed analysis and actionable insights to help you make informed decisions.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.about-hero {
  background-size: cover;
  object-fit: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-position-y: bottom;
}
h2 {
  line-height: 1.4;
}
</style>
