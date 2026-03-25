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
        <div
          class="rounded-full text-[15px] border-[0.5px] mb-4 bg-[#FFF0E6] border-[#F26B2173] px-[16px] py-[8px]"
        >
          ✨Real-Time Insights, Informed Decisions📈
        </div>
        <h1 class="md:text-6xl text-3xl text-center font-bold">
          Customized Dashboards and Reports for Strategic Advantage.
        </h1>
        <p class="font-medium text-center text-lg text-[#3B3B3F]">
          Get a clear, comprehensive view of your business performance with our
          tailored BI and reporting solutions.
        </p>
        <div class="flex md:flex-row flex-col gap-4 justify-center">
          <div
            @click="handleClick"
            class="bg-secondary py-[14px] px-[16px] rounded-[8px] text-white"
          >
            Get a Free Consultation
          </div>
        </div>
      </div>
    </div>
    <div class="px-5 md:px-20 bg-primary w-full py-16">
      <div
        class="md:w-8/12 flex flex-col items-center justify-center mx-auto w-full"
      >
        <h2
          class="text-white md:text-left text-center font-bold md:text-4xl text-3xl mb-8"
        >
          Are You Making Decisions Based on Outdated Data?
        </h2>
      </div>
      <div
        class="md:w-10/12 mx-auto w-full rounded-[8px] overflow-hidden flex md:flex-row flex-col-reverse items-stretch"
      >
        <div
          class="md:w-6/12 bg-white flex flex-col justify-center items-center px-8 py-12"
        >
          <p class="md:text-4xl text-lg font-bold text-[#3B3B3F]">
            Relying on spreadsheets and manual reports is inefficient and can
            lead to inaccurate conclusions. Our BI and reporting services
            provide you with up-to-date, actionable insights at your fingertips.
          </p>
        </div>
        <div class="md:w-6/12 w-full">
          <img
            src="/use-case/image-1386.svg"
            class="w-full h-full object-cover"
            alt=""
          />
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
          ✨ Our Approach
        </div>
        <h1
          class="md:text-4xl text-2xl md:text-center text-left font-semibold mb-5 w-full"
        >
          Tailored BI Solutions for Your Business
        </h1>
        <p class="font-medium text-lg text-center">
          We create customized dashboards and reports that align with your
          specific KPIs and business objectives
        </p>
      </div>
      <div
        class="md:w-10/12 mx-auto flex flex-wrap items-center justify-center gap-4 mt-12"
      >
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <p class="text-base font-medium">KPI Tracking and Monitoring</p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <p class="text-base font-medium">Data Visualization and Dashboards</p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <p class="text-base font-medium">Automated Reporting</p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <p class="text-base font-medium">
            Data Integration from Multiple Sources
          </p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <p class="text-base font-medium">Real-Time Analytics</p>
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
          The Benefits
        </h1>
        <p class="text-white text-center text-lg font-medium">
          Make Smarter Decisions, Drive Growth
        </p>
      </div>
      <div
        class="md:w-10/12 mx-auto flex flex-wrap items-center w-full justify-center gap-4 mt-12"
      >
        <div
          class="rounded-[8px] relative bg-[#fff] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <p class="text-base font-medium">
            Improve decision-making with real-time insights.
          </p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#fff] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <p class="text-base font-medium">
            Identify trends and opportunities.
          </p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#fff] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <p class="text-base font-medium">
            Identify trends and opportunities.
          </p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#fff] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <p class="text-base font-medium">
            Enhance visibility into business performance.
          </p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#fff] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <p class="text-base font-medium">Streamline reporting processes.</p>
        </div>
      </div>
    </div>

    <CtaSection
      :ctaTitle="' Ready to Gain Real-Time Insights?'"
      :ctaSubTitle="'Contact us today for a free consultation.'"
    />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.mr-hero {
  padding-top: 150px;
}
</style>
