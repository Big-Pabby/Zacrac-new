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
          ✨ Staying Ahead of the Curve.📈
        </div>
        <h1 class="md:text-6xl text-3xl text-center font-bold">
          Data-Driven Insights to Outmaneuver Your Rivals
        </h1>
        <p class="font-medium text-center text-lg text-[#3B3B3F]">
          Knowing your competition is crucial. We provide the intelligence you
          need to anticipate their moves and develop winning strategies.
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
          class="text-white md:text-left text-center font-bold md:text-4xl text-3xl mb-2"
        >
          Do You Know Your Competition?
        </h2>
        <p class="text-white font-medium text-lg mb-8">
          In today's competitive landscape, standing still is falling behind.
        </p>
      </div>
      <div
        class="md:w-10/12 mx-auto w-full rounded-[8px] overflow-hidden flex md:flex-row flex-col-reverse items-stretch"
      >
        <div class="md:w-6/12 bg-white px-8 py-12">
          <div class="flex items-start gap-2 mb-4">
            <span>✨</span>
            <p class="text-lg text-[#757578] font-medium">
              Are you aware of your competitors' strategies, strengths, and
              weaknesses?
            </p>
          </div>
          <div class="flex items-start gap-2 mb-4">
            <span>✨</span>
            <p class="text-lg text-[#757578] font-medium">
              Do you know how they're positioning themselves in the market?
            </p>
          </div>
          <div class="flex items-start gap-2 mb-4">
            <span>✨</span>
            <p class="text-lg text-[#757578] font-medium">
              Without this knowledge, you're at a disadvantage.
            </p>
          </div>
        </div>
        <div class="md:w-6/12 w-full">
          <img
            src="/comp-analysis/image-1374.svg"
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
          Uncovering Competitive Insights
        </h1>
        <p class="font-medium text-lg text-center">
          We use a variety of research methods to provide you with a
          comprehensive understanding of your competitive landscape
        </p>
      </div>
      <div
        class="md:w-11/12 mx-auto grid md:grid-cols-3 grid-cols-1 gap-8 mt-12"
      >
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[20px] px-[20px] flex items-center gap-4"
        >
          <img src="/question-design/decision.svg" alt="" />
          <div>
            <p class="text-lg font-medium">
              Competitor Profiling (products, services, marketing)
            </p>
          </div>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[20px] px-[20px] flex items-center gap-4"
        >
          <img src="/question-design/Creative-Idea.svg" alt="" />
          <div>
            <p class="text-lg font-medium">Market Share Analysis</p>
          </div>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[20px] px-[20px] flex items-center gap-4"
        >
          <img src="/question-design/Competition.svg" alt="" />
          <div>
            <p class="text-lg font-medium">Competitive Benchmarking</p>
          </div>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[20px] px-[20px] flex items-center gap-4"
        >
          <img src="/question-design/Risk-Hazard.svg" alt="" />
          <div>
            <p class="text-lg font-medium">
              SWOT Analysis (Strengths, Weaknesses, Opportunities, Threats)
            </p>
          </div>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[20px] px-[20px] flex items-center gap-4"
        >
          <img src="/question-design/graph.svg" alt="" />
          <div>
            <p class="text-lg font-medium">Win/Loss Analysis</p>
          </div>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[20px] px-[20px] flex items-center gap-4"
        >
          <img src="/question-design/Planning.svg" alt="" />
          <div>
            <p class="text-lg font-medium">
              Competitive Intelligence Gathering (publicly available
              information)
            </p>
          </div>
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
          Gain a Competitive Edge
        </h1>
      </div>
      <div
        class="md:w-11/12 mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-12"
      >
        <div class="rounded-[12px] relative bg-[#FFFFFFCC] p-[20px]">
          <img src="/comp-analysis/Growth.svg" class="mb-8" />

          <p class="text-lg font-medium mb-8 text-[#1D1D1D]">
            Identify opportunities to differentiate your business.
          </p>
        </div>
        <div class="rounded-[12px] relative bg-[#FFFFFFCC] p-[20px]">
          <img src="/comp-analysis/Diagram.svg" class="mb-8" />
          <p class="text-lg font-medium mb-8 text-[#1D1D1D]">
            Develop effective competitive strategies.
          </p>
        </div>
        <div class="rounded-[12px] relative bg-[#FFFFFFCC] p-[20px]">
          <img src="/comp-analysis/Chess.svg" class="mb-8" />
          <p class="text-lg font-medium mb-8 text-[#1D1D1D]">
            Anticipate competitor moves.
          </p>
        </div>
        <div class="rounded-[12px] relative bg-[#FFFFFFCC] p-[20px]">
          <img src="/comp-analysis/Market.svg" class="mb-8" />
          <p class="text-lg font-medium mb-8 text-[#1D1D1D]">
            Improve your market positioning.
          </p>
        </div>
        <div class="rounded-[12px] relative bg-[#FFFFFFCC] p-[20px]">
          <img src="/comp-analysis/Online-Analysis.svg" class="mb-8" />
          <p class="text-lg font-medium mb-8 text-[#1D1D1D]">
            Increase your market share.
          </p>
        </div>
      </div>
    </div>

    <CtaSection
      :ctaTitle="'Ready to Outmaneuver Your Competition?'"
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
