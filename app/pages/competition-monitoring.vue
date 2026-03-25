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
          ✨ Stay Ahead of Your Rivals.📈
        </div>
        <h1 class="md:text-6xl text-3xl text-center font-bold">
          Real-Time Intelligence for Strategic Advantage.
        </h1>
        <p class="font-medium text-center text-lg text-[#3B3B3F]">
          Don't be caught off guard. We deliver continuous monitoring of your
          competitors, keeping you informed and prepared.
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
          Are You Aware of Your Competitors' Strategies?
        </h2>
      </div>
      <div
        class="md:w-10/12 mx-auto w-full rounded-[8px] overflow-hidden flex md:flex-row flex-col-reverse items-stretch"
      >
        <div
          class="md:w-6/12 bg-white flex flex-col justify-center items-center px-8 py-12"
        >
          <p class="md:text-4xl text-lg font-bold text-[#3B3B3F]">
            Competitors are constantly evolving. Without ongoing monitoring, you
            risk missing critical shifts in their strategies, product launches,
            or marketing campaigns. This can leave you vulnerable and reactive.
          </p>
        </div>
        <div class="md:w-6/12 w-full">
          <img
            src="/use-case/image-1382.svg"
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
          Continuous Monitoring, Actionable Insights
        </h1>
        <p class="font-medium text-lg text-center">
          We employ a range of techniques to provide comprehensive competitive
          monitoring.
        </p>
      </div>
      <div class="md:w-10/12 mx-auto flex flex-wrap gap-4 mt-12">
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <p class="text-base font-medium">
            Website and Social Media Monitoring
          </p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <p class="text-base font-medium">News and Press Release Tracking</p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <p class="text-base font-medium">
            Financial and Market Share Analysis
          </p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <p class="text-base font-medium">
            Competitor Product and Service Evaluation
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
          Gain a Decisive Competitive Edge
        </p>
      </div>
      <div
        class="md:w-10/12 mx-auto flex flex-wrap items-center w-full justify-center gap-4 mt-12"
      >
        <div
          class="rounded-[8px] relative bg-[#fff] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <p class="text-base font-medium">Anticipate competitor moves.</p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#fff] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <p class="text-base font-medium">
            Identify emerging threats and opportunities.
          </p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#fff] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <p class="text-base font-medium">
            Benchmark your performance against rivals.
          </p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#fff] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <p class="text-base font-medium">
            Minimize risk and maximize market share.
          </p>
        </div>
      </div>
    </div>

    <CtaSection
      :ctaTitle="'Ready to Stay Ahead of Your Rivals?'"
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
