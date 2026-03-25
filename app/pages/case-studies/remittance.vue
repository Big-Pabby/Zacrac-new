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
          Understanding the Global Remittance Market Through Data
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
            A leading global remittance platform looking to refine its market
            strategy by gaining deeper insights into the behavior of individuals
            sending money abroad for personal reasons.
          </p>
        </div>
        <div class="md:w-6/12 w-full">
          <img
            src="/use-case/image-1397-5.svg"
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
            The client needed to understand the preferences, habits, and
            challenges of migrant populations who regularly send money to their
            home countries. Without this data, it was difficult to tailor their
            services, improve customer engagement, and optimise their offerings
            for different regions.
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
          We conducted a large-scale market research study across key remittance
          corridors, targeting. Respondents, a sample Composition, a sample Size
          and specific Countries, Our research approach included:
        </p>
        <div>
          <div class="flex items-start gap-3 mb-4">
            <img src="/nav-icons/check-mark.svg" alt="" />
            <p class="text-[20px] flex-1 font-medium text-[#757578]">
              <span class="text-secondary font-bold">
                Survey-Based Data Collection:
              </span>
              Understanding frequency, methods, and reasons for remittance
              transactions.
            </p>
          </div>
          <div class="flex items-start gap-3 mb-4">
            <img src="/nav-icons/check-mark.svg" alt="" />
            <p class="text-[20px] flex-1 font-medium text-[#757578]">
              <span class="text-secondary font-bold">
                Behavioral Analysis:
              </span>
              Identifying preferred transfer channels (digital vs. traditional),
              transaction costs, and pain points.
            </p>
          </div>
          <div class="flex items-start w-full gap-3 mb-4">
            <img src="/nav-icons/check-mark.svg" alt="" />

            <p class="text-[20px] flex-1 font-medium text-[#757578]">
              <span class="text-secondary font-bold"> Regional Insights: </span>
              Examining regulatory influences, exchange rate sensitivities, and
              the role of financial institutions in each market.
            </p>
          </div>
        </div>
      </div>
      <div class="md:w-6/12 w-full h-full">
        <img
          src="/use-case/image-1394-5.svg"
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
              Provided the client with country-specific remittance patterns and
              user preferences.
            </p>
          </div>
          <div class="flex items-start gap-3 mb-4">
            <img src="/nav-icons/check-mark.svg" alt="" />
            <p class="text-[20px] flex-1 font-medium text-[#757578]">
              Identified key drivers influencing remittance choices, such as
              speed, cost, and reliability.
            </p>
          </div>
          <div class="flex items-start w-full gap-3 mb-4">
            <img src="/nav-icons/check-mark.svg" alt="" />

            <p class="text-[20px] flex-1 font-medium text-[#757578]">
              Uncovered barriers to adoption of digital remittance solutions in
              certain markets.
            </p>
          </div>
          <div class="flex items-start w-full gap-3 mb-4">
            <img src="/nav-icons/check-mark.svg" alt="" />

            <p class="text-[20px] flex-1 font-medium text-[#757578]">
              Equipped the client with actionable insights to refine marketing
              strategies, improve user experience, and enhance service offerings
              across target regions.
            </p>
          </div>
        </div>
      </div>
      <div class="md:w-6/12 w-full h-full">
        <img
          src="/use-case/Frame-24-(5).svg"
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
          name: "Client.",
          image: "/use-case/Ellipse-2-(2).svg",
          role: "",
          content:
            "“The insights from ZACRAC  gave us a clear understanding of how different migrant communities engage with remittance services. Their research helped us optimise our strategy and tailor our solutions to meet user needs effectively”.",
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
