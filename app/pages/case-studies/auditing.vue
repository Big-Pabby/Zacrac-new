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
          Auditing Remittance Service Efficiency Across Partner Banks in
          Nigeria.
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
          ✨Client: Remitly
        </div>
      </div>
      <div
        class="md:w-10/12 mx-auto w-full rounded-[8px] overflow-hidden flex md:flex-row flex-col-reverse items-stretch"
      >
        <div class="md:w-6/12 bg-white px-8 py-12">
          <img src="/use-case/image-1396.svg" alt="" />
          <p class="md:text-4xl text-2xl font-sembold">
            Remitly, is a global digital remittance service that enables fast,
            secure, and affordable money transfers to recipients worldwide,
            including Nigeria.
          </p>
        </div>
        <div class="md:w-6/12 w-full">
          <img
            src="/use-case/image-1397-4.svg"
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
            Remitly wanted to evaluate the efficiency and customer experience of
            its partner banks in Nigeria. They needed to ensure smooth
            withdrawal processes, compliance with service standards, and overall
            customer satisfaction. To achieve this, they required an independent
            assessment of their partner locations through a structured mystery
            audit.
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
          We conducted Bank Mystery Audits using Remitly’s preferred
          methodology, which included:
        </p>
        <div>
          <div class="flex items-start gap-3 mb-4">
            <img src="/nav-icons/check-mark.svg" alt="" />
            <p class="text-[20px] flex-1 font-medium text-[#757578]">
              <span class="text-secondary font-bold">
                Coordinating Mystery Shoppers/auditors :
              </span>

              To conduct transactions at designated partner locations.
            </p>
          </div>
          <div class="flex items-start gap-3 mb-4">
            <img src="/nav-icons/check-mark.svg" alt="" />
            <p class="text-[20px] flex-1 font-medium text-[#757578]">
              <span class="text-secondary font-bold">
                Ensuring Systematic Data Collection:</span
              >
              By having auditors withdraw funds and complete a structured
              questionnaire assessing service quality, transaction speed, staff
              attitude, and overall experience.
            </p>
          </div>
          <div class="flex items-start w-full gap-3 mb-4">
            <img src="/nav-icons/check-mark.svg" alt="" />

            <p class="text-[20px] flex-1 font-medium text-[#757578]">
              <span class="text-secondary font-bold">
                Facilitating Fund Transfers:
              </span>
              Through the Remitly app to the auditors.
            </p>
          </div>
          <div class="flex items-start w-full gap-3 mb-4">
            <img src="/nav-icons/check-mark.svg" alt="" />

            <p class="text-[20px] flex-1 font-medium text-[#757578]">
              <span class="text-secondary font-bold">
                Collecting Supporting Documentation:
              </span>
              Including withdrawal slips and photos of the bank branches for
              verification.
            </p>
          </div>
          <div class="flex items-start w-full gap-3 mb-4">
            <img src="/nav-icons/check-mark.svg" alt="" />

            <p class="text-[20px] flex-1 font-medium text-[#757578]">
              <span class="text-secondary font-bold">
                Analyzing The Findings:
              </span>
              Provide insights on bank performance, service gaps, and potential
              areas for improvement.
            </p>
          </div>
        </div>
      </div>
      <div class="md:w-6/12 w-full h-full">
        <img
          src="/use-case/image-1394-4.svg"
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
              Identified key service inconsistencies across partner locations.
            </p>
          </div>
          <div class="flex items-start gap-3 mb-4">
            <img src="/nav-icons/check-mark.svg" alt="" />
            <p class="text-[20px] flex-1 font-medium text-[#757578]">
              Highlighted opportunities for improving transaction speed and
              customer service.
            </p>
          </div>
          <div class="flex items-start w-full gap-3 mb-4">
            <img src="/nav-icons/check-mark.svg" alt="" />

            <p class="text-[20px] flex-1 font-medium text-[#757578]">
              Provided data-driven recommendations to enhance Remitly’s banking
              partnerships in Nigeria.
            </p>
          </div>
          <div class="flex items-start w-full gap-3 mb-4">
            <img src="/nav-icons/check-mark.svg" alt="" />

            <p class="text-[20px] flex-1 font-medium text-[#757578]">
              Strengthened Remitly’s oversight of partner bank performance and
              compliance.
            </p>
          </div>
        </div>
      </div>
      <div class="md:w-6/12 w-full h-full">
        <img
          src="/use-case/Frame-24-(4).svg"
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
          name: "Remitly.",
          image: "/use-case/Ellipse-2-(2).svg",
          role: "",
          content:
            "“ZACRAC’s mystery audit was a game-changer for us. Their meticulous approach helped us uncover real service experiences at our partner banks, allowing us to improve customer satisfaction. The insights provided were invaluable in optimizing our remittance operations in Nigeria.”",
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
