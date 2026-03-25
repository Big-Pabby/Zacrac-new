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
        <h1
          class="md:text-6xl md:leading-[80px] text-3xl text-center font-bold"
        >
          Assessing Market Entry Challenges for Vehicle Insurtech in Nigeria.
        </h1>

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
          class="rounded-full text-[#3B3B3F] text-center bg-[#E6E6F0] text-[15px] border-[0.5px] mb-4 border-primary px-[16px] py-[8px]"
        >
          ✨Client Overview
        </div>
      </div>
      <div
        class="md:w-10/12 mx-auto w-full rounded-[8px] overflow-hidden flex md:flex-row flex-col-reverse items-stretch"
      >
        <div class="md:w-6/12 bg-white px-8 py-12">
          <p class="md:text-4xl text-2xl font-sembold">
            A UK-based vehicle insurtech startup, building for the Nigerian
            market. The company aims to revolutionize auto insurance by
            leveraging technology to provide seamless and affordable coverage
            for Nigerian vehicle owners.
          </p>
        </div>
        <div class="md:w-6/12 w-full">
          <img
            src="/use-case/image-1397-base.svg"
            class="w-full h-full object-cover"
            alt=""
          />
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
          ✨THE CHALLENGE
        </div>
        <div
          class="mt-6 py-12 md:px-20 px-[24px] bg-white rounded-[8px] flex md:flex-row flex-col items-center gap-4"
        >
          <img src="/use-case/guidance_question-mark.svg" alt="" />
          <p class="flex-1 font-medium text-[#757578] md:text-xl text-lg">
            As a foreign-based company entering Nigeria’s insurtech space, the
            client needed in-depth market insights to understand consumer
            behaviour, insurance adoption rates, regulatory requirements, and
            competitive dynamics. Without this data, making informed business
            decisions and tailoring their offerings to the local market would be
            challenging.
          </p>
        </div>
      </div>
    </div>
    <div class="flex md:flex-row-reverse flex-col-reverse">
      <div
        class="md:w-6/12 w-full bg-white flex flex-col items-start justify-center md:px-20 py-12 px-5"
      >
        <div
          class="rounded-full font-semibold text-[#3B3B3F] text-center text-[20px] border-[0.5px] mb-4 border-[#F26B2173] px-[16px] py-[8px] inline-block"
        >
          ✨SOLUTIONS
        </div>
        <p class="text-lg text-[#757578] font-medium my-4">
          Our team conducted a comprehensive market research study, which
          included:
        </p>
        <div>
          <div class="flex items-start gap-3 mb-4">
            <img src="/nav-icons/check-mark.svg" alt="" />
            <p class="text-[20px] flex-1 font-medium text-[#757578]">
              <span class="text-secondary font-bold"> Industry Analysis:</span>

              Evaluating the Nigerian auto insurance landscape, market size, and
              growth opportunities.
            </p>
          </div>
          <div class="flex items-start gap-3 mb-4">
            <img src="/nav-icons/check-mark.svg" alt="" />
            <p class="text-[20px] flex-1 font-medium text-[#757578]">
              <span class="text-secondary font-bold"
                >Consumer Behavior Study:</span
              >

              Gathering insights into Nigerian drivers’ attitudes toward
              insurance, willingness to pay, and preferred insurance models.
            </p>
          </div>
          <div class="flex items-start w-full gap-3 mb-4">
            <img src="/nav-icons/check-mark.svg" alt="" />

            <p class="text-[20px] flex-1 font-medium text-[#757578]">
              <span class="text-secondary font-bold"
                >Competitor Analysis:
              </span>

              Identifying key players, pricing strategies, and gaps in the
              market.
            </p>
          </div>
          <div class="flex items-start w-full gap-3 mb-4">
            <img src="/nav-icons/check-mark.svg" alt="" />

            <p class="text-[20px] flex-1 font-medium text-[#757578]">
              <span class="text-secondary font-bold"
                >Regulatory Assessment:
              </span>
              Outlining compliance requirements and potential legal hurdles for
              entry.
            </p>
          </div>
        </div>
      </div>
      <div class="md:w-6/12 w-full h-full">
        <img
          src="/use-case/image-1394-base.svg"
          class="object-cover w-full h-full"
        />
      </div>
    </div>
    <div class="flex md:flex-row flex-col-reverse">
      <div
        class="md:w-6/12 w-full bg-white flex flex-col items-start justify-center md:px-20 py-12 px-5"
      >
        <div
          class="rounded-full font-semibold text-[#3B3B3F] text-center text-[20px] border-[0.5px] mb-4 border-[#F26B2173] px-[16px] py-[8px] inline-block"
        >
          ✨RESULTS
        </div>
        <p class="text-[18px] mb-4 text-[#757578]">
          With the insights provided, the client was able to:
        </p>
        <div>
          <div class="flex items-start gap-3 mb-4">
            <img src="/nav-icons/check-mark.svg" alt="" />
            <p class="text-[20px] flex-1 font-medium text-[#757578]">
              Establish a clear roadmap for regulatory compliance.
            </p>
          </div>
          <div class="flex items-start gap-3 mb-4">
            <img src="/nav-icons/check-mark.svg" alt="" />
            <p class="text-[20px] flex-1 font-medium text-[#757578]">
              Develop competitive pricing strategies.
            </p>
          </div>
          <div class="flex items-start w-full gap-3 mb-4">
            <img src="/nav-icons/check-mark.svg" alt="" />

            <p class="text-[20px] flex-1 font-medium text-[#757578]">
              Confidently launch their operations in Nigeria with a data-backed
              market entry strategy.
            </p>
          </div>
        </div>
      </div>
      <div class="md:w-6/12 w-full h-full">
        <img src="/use-case/Frame-24.svg" class="object-cover w-full h-full" />
      </div>
    </div>
    <div class="px-5 lg:px-20 py-24 bg-[#FFF0E6]">
      <div
        class="md:w-8/12 mx-auto w-full flex flex-col items-center justify-center mb-10"
      >
        <div
          class="rounded-full font-medium bg-white text-[#3B3B3F] text-center text-[15px] border-[0.5px] mb-4 border-[#F26B2173] px-[16px] py-[8px] inline-block"
        >
          ✨CLIENT’S TESTIMONIAL
        </div>
        <Testimonial :items="items" />
      </div>
    </div>
    <CtaSection
      :ctaTitle="'Ready to Launch with Confidence?'"
      :ctaSubTitle="'Contact us today for a free consultation.'"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: "insurtech",
          image: "/use-case/Ellipse 2.svg",
          role: "",
          content:
            "“ZACRAC provided us with invaluable data-driven insights that shaped our market entry strategy. Their research helped us understand the Nigerian auto insurance landscape in ways we never could have on our own. Thanks to their expertise, we made informed decisions that set us up for success.”",
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
