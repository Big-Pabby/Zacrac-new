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
          Brand Positioning & Messaging: Communicating Your Value Effectively
        </h1>
        <p class="font-medium text-center text-lg text-[#3B3B3F]">
          Your brand is your most valuable asset. It's what sets you apart from
          the competition and resonates with your target audience. Our market
          research services help you understand how your brand is perceived,
          craft compelling messaging, and optimize your brand positioning for
          maximum impact.
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
          Is Your Brand Message Getting Through?
        </h2>
        <p class="text-white font-medium text-lg mb-8">
          In a crowded marketplace, it's crucial to have a clear and consistent
          brand identity.
        </p>
      </div>
      <div
        class="md:w-10/12 mx-auto w-full rounded-[8px] overflow-hidden flex md:flex-row flex-col-reverse items-stretch"
      >
        <div class="md:w-6/12 bg-white px-8 py-12">
          <div class="flex items-start gap-2 mb-4">
            <span>✨</span>
            <p class="text-lg text-[#757578] font-medium">
              Are you effectively communicating your value proposition?
            </p>
          </div>
          <div class="flex items-start gap-2 mb-4">
            <span>✨</span>
            <p class="text-lg text-[#757578] font-medium">
              Is your messaging resonating with your target audience?
            </p>
          </div>
          <div class="flex items-start gap-2 mb-4">
            <span>✨</span>
            <p class="text-lg text-[#757578] font-medium">
              Are you differentiating yourself from the competition?
            </p>
          </div>
          <p class="mt-6 text-lg font-medium">
            If not, you risk getting lost in the noise.
          </p>
        </div>
        <div class="md:w-6/12 w-full">
          <img
            src="/use-case/image-1373.svg"
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
          Data-Driven Strategies for Brand Clarity and Resonance
        </h1>
        <p class="font-medium text-lg text-center">
          We use a combination of qualitative and quantitative research methods
          to understand your brand's strengths and weaknesses and develop
          effective messaging.
        </p>
      </div>
      <div
        class="md:w-10/12 mx-auto grid md:grid-cols-3 grid-cols-1 gap-8 mt-12"
      >
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <img src="/question-design/decision.svg" alt="" />
          <p class="text-lg font-medium">Brand Perception Studies</p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <img src="/question-design/Creative-Idea.svg" alt="" />
          <p class="text-lg font-medium">Message Testing & Optimization</p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <img src="/question-design/Competition.svg" alt="" />
          <p class="text-lg font-medium">Competitive Brand Analysis</p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <img src="/question-design/Risk-Hazard.svg" alt="" />
          <p class="text-lg font-medium">Customer Insights & Segmentation</p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <img src="/question-design/graph.svg" alt="" />
          <p class="text-lg font-medium">Brand Audit & Strategy Development</p>
        </div>
      </div>
    </div>
    <div class="px-5 md:px-20 bg-[#FF6600] w-full py-16">
      <div
        class="md:w-8/12 flex flex-col md:items-center items-start md:justify-center justify-start mx-auto w-full"
      >
        <div
          class="rounded-full text-[15px] text-[#3B3B3F] bg-[#E6E6F0] border-[0.5px] mb-4 border-primary px-[16px] py-[8px]"
        >
          ✨ KEY COMPONENTS
        </div>
        <h1
          class="md:text-4xl text-2xl md:text-center text-white text-left font-semibold mb-5 w-full"
        >
          A Strong Brand, Powerful Results
        </h1>
      </div>
      <div
        class="md:w-11/12 mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-12"
      >
        <div class="rounded-[12px] relative bg-[#FFFFFFCC] p-[20px]">
          <img src="/use-case/Identity.svg" class="mb-8" />

          <p class="text-lg font-medium mb-8 text-[#1D1D1D]">
            Develop a clear and differentiated brand identity.
          </p>
        </div>
        <div class="rounded-[12px] relative bg-[#FFFFFFCC] p-[20px]">
          <img src="/use-case/email-marketing.svg" class="mb-8" />
          <p class="text-lg font-medium mb-8 text-[#1D1D1D]">
            Craft compelling and resonant marketing messages.
          </p>
        </div>
        <div class="rounded-[12px] relative bg-[#FFFFFFCC] p-[20px]">
          <img src="/use-case/brand-awareness.svg" class="mb-8" />
          <p class="text-lg font-medium mb-8 text-[#1D1D1D]">
            Improve brand awareness and recall.
          </p>
        </div>
        <div class="rounded-[12px] relative bg-[#FFFFFFCC] p-[20px]">
          <img src="/use-case/Customer-Loyalty.svg" class="mb-8" />
          <p class="text-lg font-medium mb-8 text-[#1D1D1D]">
            Increase brand loyalty and advocacy.
          </p>
        </div>
        <div class="rounded-[12px] relative bg-[#FFFFFFCC] p-[20px]">
          <img src="/use-case/Engagement.svg" class="mb-8" />
          <p class="text-lg font-medium mb-8 text-[#1D1D1D]">
            Drive stronger customer engagement.
          </p>
        </div>
      </div>
    </div>

    <CtaSection
      :ctaTitle="'Ready to Strengthen Your Brand?'"
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
