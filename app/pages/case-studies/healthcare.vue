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
          Assessing Diagnostic and Treatment Gaps for Cryptococcal Meningitis
          and Histoplasmosis in Sub-Saharan Africa.
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
            A healthcare organization seeking to understand the current and
            future landscape of cryptococcal meningitis (CM) and histoplasmosis
            (Histo) testing and patient management in Sub-Saharan Africa.
          </p>
        </div>
        <div class="md:w-6/12 w-full">
          <img
            src="/use-case/image-1397-7.svg"
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
            The client needed in-depth insights into healthcare provider (HCP)
            perspectives to optimize diagnostic and treatment strategies. The
            gaps in testing availability, treatment pathways, and disease
            management persist.
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
          Cryptococcal meningitis (CM) and histoplasmosis (Histo) are
          life-threatening fungal infections that disproportionately affect
          advanced HIV patients. For that, we conducted a specialized healthcare
          market research study across South Africa, Nigeria, and Kenya to
          assess:
        </p>
        <div>
          <div class="flex items-start gap-3 mb-4">
            <img src="/nav-icons/check-mark.svg" alt="" />
            <p class="text-[20px] flex-1 font-medium text-[#757578]">
              Current testing practices and availability of diagnostics for CM
              and Histo.
            </p>
          </div>
          <div class="flex items-start gap-3 mb-4">
            <img src="/nav-icons/check-mark.svg" alt="" />
            <p class="text-[20px] flex-1 font-medium text-[#757578]">
              Challenges faced by infectious disease specialists in managing
              these conditions.
            </p>
          </div>
          <div class="flex items-start w-full gap-3 mb-4">
            <img src="/nav-icons/check-mark.svg" alt="" />

            <p class="text-[20px] flex-1 font-medium text-[#757578]">
              Future expectations for disease management and treatment
              accessibility.
            </p>
          </div>
        </div>
        <div
          class="rounded-full font-semibold text-[#3B3B3F] text-center text-[20px] border-[0.5px] mb-4 border-[#F26B2173] px-[16px] py-[8px] inline-block mt-8"
        >
          ✨Methodology & Sample:
        </div>

        <div>
          <div class="flex items-start gap-3 mb-4">
            <img src="/nav-icons/check-mark.svg" alt="" />
            <p class="text-[20px] flex-1 font-medium text-[#757578]">
              <span class="text-secondary font-bold">
                Target Respondents:
              </span>
              Infectious disease specialists actively treating relevant patient
              groups. (Sample Size: 8 respondents per country).
            </p>
          </div>
          <div class="flex items-start gap-3 mb-4">
            <img src="/nav-icons/check-mark.svg" alt="" />
            <p class="text-[20px] flex-1 font-medium text-[#757578]">
              <span class="text-secondary font-bold"> Moderation:</span>
              Conducted by experienced moderators familiar with HCP discussions
              on invasive fungal infections and treatment pathways.
            </p>
          </div>
          <div class="flex items-start w-full gap-3 mb-4">
            <img src="/nav-icons/check-mark.svg" alt="" />

            <p class="text-[20px] flex-1 font-medium text-[#757578]">
              <span class="text-secondary font-bold"> Data Collection: </span>
              In-depth qualitative interviews to explore diagnostic barriers,
              treatment challenges, and areas for improvement.
            </p>
          </div>
        </div>
      </div>
      <div class="md:w-6/12 w-full h-full">
        <img
          src="/use-case/image-1394-7.svg"
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
              Identified key barriers to early diagnosis, including limited
              availability of rapid testing for CM and Histo.
            </p>
          </div>
          <div class="flex items-start gap-3 mb-4">
            <img src="/nav-icons/check-mark.svg" alt="" />
            <p class="text-[20px] flex-1 font-medium text-[#757578]">
              Highlighted treatment challenges, such as delays in antifungal
              access and inconsistent clinical guidelines.
            </p>
          </div>
          <div class="flex items-start w-full gap-3 mb-4">
            <img src="/nav-icons/check-mark.svg" alt="" />

            <p class="text-[20px] flex-1 font-medium text-[#757578]">
              Provided insights into expected advancements in patient
              management, including potential adoption of newer diagnostic
              tools.
            </p>
          </div>
          <div class="flex items-start w-full gap-3 mb-4">
            <img src="/nav-icons/check-mark.svg" alt="" />

            <p class="text-[20px] flex-1 font-medium text-[#757578]">
              Equipped the client with strategic recommendations to improve
              testing accessibility and streamline patient care.
            </p>
          </div>
        </div>
      </div>
      <div class="md:w-6/12 w-full h-full">
        <img
          src="/use-case/Frame-24-(7).svg"
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
          image: "/use-case/Ellipse-2-(2).svg",
          role: "",
          content:
            "“The in-depth research carried out by   ZACRAC has been invaluable to us. Understanding the challenges healthcare providers face in diagnosing and managing cryptococcal meningitis and histoplasmosis has given us the clarity needed to refine our strategies and improve access to testing and treatment for at-risk patients in the region”.",
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
