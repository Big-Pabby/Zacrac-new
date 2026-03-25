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
          ✨Industry Trend Analysis: Anticipate Market Shifts📈
        </div>
        <h1 class="md:text-6xl text-3xl text-center font-bold">
          Data-Driven Insights for Future-Proof Strategies.
        </h1>
        <p class="font-medium text-center text-lg text-[#3B3B3F]">
          Don't be caught off guard by market changes. We provide ongoing
          analysis of industry trends, keeping you informed and agile.
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
        <div
          class="rounded-full text-[15px] text-[#3B3B3F] bg-[#E6E6F0] border-[0.5px] mb-4 border-primary px-[16px] py-[8px]"
        >
          ✨ The Challenge (Problem/Solution Focus)
        </div>
        <h2
          class="text-white md:text-left text-center font-bold md:text-4xl text-3xl mb-8"
        >
          Are You Prepared for Future Market Changes?
        </h2>
      </div>
      <div
        class="md:w-10/12 mx-auto w-full rounded-[8px] overflow-hidden flex md:flex-row flex-col-reverse items-stretch"
      >
        <div
          class="md:w-6/12 bg-white flex flex-col justify-center items-center px-8 py-12"
        >
          <p class="md:text-4xl text-lg font-bold text-[#3B3B3F]">
            Industries are constantly evolving due to technological
            advancements, changing consumer preferences, and regulatory shifts.
            Without continuous trend analysis, you risk being left behind.
          </p>
        </div>
        <div class="md:w-6/12 w-full">
          <img
            src="/use-case/image-1383.svg"
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
          Comprehensive Trend Monitoring and Analysis
        </h1>
        <p class="font-medium text-lg text-center">
          We utilize a variety of methods to deliver in-depth industry trend
          analysis.
        </p>
      </div>
      <div
        class="md:w-10/12 mx-auto flex flex-wrap items-center justify-center gap-4 mt-12"
      >
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <p class="text-base font-medium">Market Research and Surveys</p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <p class="text-base font-medium">Industry Reports and Publications</p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <p class="text-base font-medium">
            Technology and Innovation Tracking
          </p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <p class="text-base font-medium">
            Regulatory and Legislative Monitoring
          </p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <p class="text-base font-medium">
            Social Media and Online Forum Analysis
          </p>
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
          Future-Proof Your Business
        </p>
      </div>
      <div
        class="md:w-10/12 mx-auto flex flex-wrap items-center w-full justify-center gap-4 mt-12"
      >
        <div
          class="rounded-[8px] relative bg-[#fff] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <p class="text-base font-medium">
            Identify emerging opportunities and threats.
          </p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#fff] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <p class="text-base font-medium">
            Adapt your strategies to changing market conditions.
          </p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#fff] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <p class="text-base font-medium">Gain a competitive edge.</p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#fff] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <p class="text-base font-medium">
            Make informed decisions about product development and innovation.
          </p>
        </div>
      </div>
    </div>

    <CtaSection
      :ctaTitle="' Ready to Anticipate Market Shifts?'"
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
