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
          Evaluating Consumer Preferences in Soft Drink Product Development.
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
          ✨Client: Overview
        </div>
      </div>
      <div
        class="md:w-10/12 mx-auto w-full rounded-[8px] overflow-hidden flex md:flex-row flex-col-reverse items-stretch"
      >
        <div class="md:w-6/12 bg-white px-8 py-12">
          <p class="md:text-4xl text-2xl font-sembold">
            A leading soft drink manufacturer with a strong market presence,
            known for producing a wide range of carbonated and non-carbonated
            beverages.
          </p>
        </div>
        <div class="md:w-6/12 w-full">
          <img
            src="/use-case/image-1397-6.svg"
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
            The client was launching a new soft drink flavor and needed to
            ensure it would appeal to their target consumers. They wanted to
            gather feedback on taste, packaging, and overall product perception
            before full-scale production and market rollout.
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
          At ZACRAC, our team conducted a Product Taste Testing Research, which
          involved:
        </p>
        <div>
          <div class="flex items-start gap-3 mb-4">
            <img src="/nav-icons/check-mark.svg" alt="" />
            <p class="text-[20px] flex-1 font-medium text-[#757578]">
              <span class="text-secondary font-bold">
                Recruiting A Representative Consumer Panel:
              </span>
              This was to test the new drink alongside existing flavors and
              competitor products.
            </p>
          </div>
          <div class="flex items-start gap-3 mb-4">
            <img src="/nav-icons/check-mark.svg" alt="" />
            <p class="text-[20px] flex-1 font-medium text-[#757578]">
              <span class="text-secondary font-bold">
                Organizing Blind Taste Tests:</span
              >
              This was to eliminate brand bias and collect unbiased feedback.
            </p>
          </div>
          <div class="flex items-start w-full gap-3 mb-4">
            <img src="/nav-icons/check-mark.svg" alt="" />

            <p class="text-[20px] flex-1 font-medium text-[#757578]">
              <span class="text-secondary font-bold">
                Surveying Participants:
              </span>
              This was to check taste preferences, texture, sweetness level, and
              likelihood of purchase.
            </p>
          </div>
          <div class="flex items-start w-full gap-3 mb-4">
            <img src="/nav-icons/check-mark.svg" alt="" />

            <p class="text-[20px] flex-1 font-medium text-[#757578]">
              <span class="text-secondary font-bold">
                Gathering Qualitative Insights:
              </span>
              On packaging appeal and perceived brand positioning.
            </p>
          </div>
          <div class="flex items-start w-full gap-3 mb-4">
            <img src="/nav-icons/check-mark.svg" alt="" />

            <p class="text-[20px] flex-1 font-medium text-[#757578]">
              <span class="text-secondary font-bold"> Analyzing Data: </span>
              To identify patterns, key preferences, and potential areas for
              improvement.
            </p>
          </div>
        </div>
      </div>
      <div class="md:w-6/12 w-full h-full">
        <img
          src="/use-case/image-1394-6.svg"
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

        <div>
          <div class="flex items-start gap-3 mb-4">
            <img src="/nav-icons/check-mark.svg" alt="" />
            <p class="text-[20px] flex-1 font-medium text-[#757578]">
              The client discovered the preferred sweetness level and
              carbonation intensity among their target audience.
            </p>
          </div>
          <div class="flex items-start gap-3 mb-4">
            <img src="/nav-icons/check-mark.svg" alt="" />
            <p class="text-[20px] flex-1 font-medium text-[#757578]">
              Adjustments were made to the drink’s formula based on real
              consumer preferences.
            </p>
          </div>
          <div class="flex items-start w-full gap-3 mb-4">
            <img src="/nav-icons/check-mark.svg" alt="" />

            <p class="text-[20px] flex-1 font-medium text-[#757578]">
              Packaging elements were refined to enhance market appeal.
            </p>
          </div>
          <div class="flex items-start w-full gap-3 mb-4">
            <img src="/nav-icons/check-mark.svg" alt="" />

            <p class="text-[20px] flex-1 font-medium text-[#757578]">
              The client gained confidence in their product launch, backed by
              data-driven validation.
            </p>
          </div>
        </div>
      </div>
      <div class="md:w-6/12 w-full h-full">
        <img
          src="/use-case/Frame-24-(6).svg"
          class="object-cover w-full h-full"
        />
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
          name: "Client",
          image: "/use-case/Ellipse 2 (2).svg",
          role: "",
          content:
            "“ZACRAC’s research was instrumental in refining our product before launch. Their approach to taste testing provided us with clear insights into consumer preferences, helping us make necessary adjustments. Thanks to their expertise, we launched a product that truly resonates with our market.”",
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
