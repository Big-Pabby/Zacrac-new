<template>
  <div>
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
          class="rounded-full text-[15px] border-[0.5px] mb-4 border-[#F26B2173] px-[16px] py-[8px]"
        >
          ✨CONNECTING YOU WITH YOUR TARGET AUDIENCE📈
        </div>
        <h1 class="md:text-6xl text-3xl text-center font-bold">
          Finding the Right People for Your Research.
        </h1>
        <p class="font-medium text-center text-lg text-[#3B3B3F]">
          Reaching the right participants is crucial for gathering accurate and
          insightful data. Our expert recruitment team handles every aspect of
          the process, saving you time and resources.
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
    <div class="flex md:flex-row items-stretch flex-col-reverse">
      <div
        class="md:w-6/12 w-full bg-secondary flex flex-col items-center justify-center md:px-20 py-20 px-5"
      >
        <div
          class="rounded-full text-[14px] border-[0.5px] mb-4 bg-[#E6E6F0] border-[#000066] px-[16px] py-[8px]"
        >
          ✨The Key to Reliable Data
        </div>
        <h1 class="md:text-6xl text-3xl text-white font-bold">
          The Right Participants
        </h1>
        <p class="text-lg text-white font-medium my-4">
          Generic survey samples can lead to misleading conclusions. Our
          targeted recruitment strategies ensure that you're hearing from the
          people whose opinions and behaviors are most relevant to your research
          objectives.
        </p>
      </div>
      <div class="md:w-6/12 w-full">
        <img src="/image-1377.svg" class="object-cover w-full h-full" />
      </div>
    </div>

    <div class="px-5 md:px-20 bg-primary w-full py-16">
      <div
        class="md:w-8/12 flex flex-col items-center md:justify-center justify-start mx-auto w-full"
      >
        <div
          class="rounded-full text-[14px] border-[0.5px] mb-4 bg-[#E6E6F0] border-[#000066] px-[16px] py-[8px]"
        >
          ✨OUR PARTICIPANT RECRUITMENT PROCESS
        </div>
        <h1
          class="md:text-4xl text-2xl text-white md:text-center text-left font-semibold mb-5 w-full"
        >
          A Rigorous and Targeted Approach
        </h1>
        <p class="w-full leading-6 md:text-center text-white text-left text-lg">
          We utilize a multi-faceted approach to participant recruitment,
          combining traditional methods with innovative techniques to reach even
          the most challenging audiences. Here's what you can expect:
        </p>
      </div>
      <div
        class="md:w-10/12 w-full mx-auto mt-12 rounded-[16px] flex md:flex-row flex-col justify-between item-center bg-[#fff] md:p-20 p-[24px]"
      >
        <div class="md:w-6/12 w-full">
          <img src="/need-access/Target.svg" class="mb-6" />
          <h3 class="font-bold text-2xl">Recruitment Strategy Development</h3>
          <p class="text-lg font-medium">
            Based on your target audience, we develop a tailored recruitment
            strategy that may include:
          </p>
        </div>
        <div class="md:w-5/12 w-full flex flex-col gap-6 items-start">
          <p class="text-lg font-medium">
            ✨ Online Panels: Access to pre-screened and qualified participants.
          </p>
          <p class="text-lg font-medium">
            ✨ Social Media Recruitment: Targeted advertising and outreach on
            social media platforms.
          </p>
          <p class="text-lg font-medium">
            ✨ Community Outreach: Partnerships with community organizations and
            groups.
          </p>
          <p class="text-lg font-medium">
            ✨ Database Recruitment: Leveraging our own database of qualified
            participants.
          </p>
          <p class="text-lg font-medium">
            ✨ Direct Outreach: Identifying and contacting potential
            participants through targeted outreach.
          </p>
        </div>
      </div>
      <div
        class="md:w-10/12 w-full mx-auto grid md:grid-cols-2 grid-cols-1 gap-8 mt-8"
      >
        <div class="rounded-[16px] relative bg-[#fff] p-[24px]">
          <img src="/question-design/question.svg" class="mb-8" />
          <h4 class="text-2xl font-bold mb-4 text-[#3B3B3F]">
            Screening & Qualification
          </h4>
          <p class="text-lg text-[#3B3B3F] font-medium mb-16">
            We screen potential participants to ensure they meet your specific
            criteria and are a good fit for the research study.
          </p>
        </div>
        <div class="rounded-[16px] relative bg-[#fff] p-[24px]">
          <img src="/need-access/Target.svg" class="mb-8" />
          <h4 class="text-2xl font-bold mb-4 text-[#3B3B3F]">
            Target Audience Definition
          </h4>
          <p class="text-lg text-[#3B3B3F] font-medium mb-16">
            We work closely with you to clearly define your target audience,
            including demographics, psychographics, behaviors, and any other
            relevant criteria.
          </p>
        </div>
        <div class="rounded-[16px] relative bg-[#fff] p-[24px]">
          <img src="/question-design/testing.svg" class="mb-8" />
          <h4 class="text-2xl font-bold mb-4 text-[#3B3B3F]">
            Participant Management
          </h4>
          <p class="text-lg text-[#3B3B3F] font-medium mb-16">
            We manage participant communication throughout the research process,
            ensuring smooth participation and minimizing attrition.
          </p>
        </div>
        <div class="rounded-[16px] relative bg-[#fff] p-[24px]">
          <img src="/question-design/Questionnaire.svg" class="mb-8" />
          <h4 class="text-2xl font-bold mb-4 text-[#3B3B3F]">
            Scheduling & Logistics
          </h4>
          <p class="text-lg text-[#3B3B3F] font-medium mb-16">
            We handle all scheduling and logistical arrangements, including
            participant communication, incentives, and reminders.
          </p>
        </div>
      </div>
      <div
        class="md:w-10/12 w-full mx-auto mt-8 rounded-[16px] flex md:flex-row flex-col justify-between item-center bg-[#fff] md:p-20 p-[24px]"
      >
        <div class="md:w-7/12 w-full">
          <img src="/question-design/Revision.svg" class="mb-6" />
        </div>
        <div class="md:w-5/12 w-full flex flex-col gap-6 items-start">
          <h3 class="font-bold text-2xl">Quality Control</h3>
          <p class="text-lg font-medium">
            We implement quality control measures to ensure the integrity of the
            data and the representativeness of the sample.
          </p>
        </div>
      </div>
    </div>
    <div class="px-5 md:px-20 w-full bg-[#FFF0E6] py-16">
      <div
        class="md:w-8/12 flex flex-col items-center md:justify-center justify-start mx-auto w-full"
      >
        <div
          class="rounded-full text-[14px] text-[#3B3B3F] bg-[#E6E6F0] border-[0.5px] mb-4 border-[#000066] px-[16px] py-[8px]"
        >
          ✨Reaching the Hard to Reach
        </div>
        <h1
          class="md:text-4xl text-2xl md:text-center text-left font-semibold mb-2 w-full"
        >
          Connecting You with Even the Most Challenging Audiences.
        </h1>
        <p class="mb-5 md:text-center text-left">
          We specialize in reaching even the most challenging demographics and
          niche markets. Our experience and resources enable us to connect you
          with the participants you need, regardless of how difficult they may
          be to find.
        </p>
      </div>
      <div
        class="md:w-11/12 mx-auto grid md:grid-cols-3 grid-cols-1 gap-8 mt-12"
      >
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[20px] px-[20px] flex items-start gap-4"
        >
          <img src="/need-access/Contract-File.svg" alt="" />
          <div>
            <h4 class="mb-2 md:text-2xl text-xl font-bold">
              Targeted Online Campaigns
            </h4>
            <p class="text-lg font-medium">
              Reaching specific demographics and interest groups through
              advanced targeting parameters.
            </p>
          </div>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[20px] px-[20px] flex items-start gap-4"
        >
          <img src="/need-access/Question.svg" alt="" />
          <div>
            <h4 class="mb-2 md:text-2xl text-xl font-bold">
              Community Partnerships
            </h4>
            <p class="text-lg font-medium">
              Collaborating with local organizations to access hard-to-reach
              populations.
            </p>
          </div>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[20px] px-[20px] flex items-start gap-4"
        >
          <img src="/need-access/auto-response.svg" alt="" />
          <div>
            <h4 class="mb-2 md:text-2xl text-xl font-bold">
              Specialized Recruitment Strategies
            </h4>
            <p class="text-lg font-medium">
              Tailored methods to engage specific target groups.
            </p>
          </div>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[20px] px-[20px] flex items-start gap-4"
        >
          <img src="/need-access/Survey-Analytics.svg" alt="" />
          <div>
            <h4 class="mb-2 md:text-2xl text-xl font-bold">
              Multi-Lingual Capabilities
            </h4>
            <p class="text-lg font-medium">
              Recruiting participants who speak different languages.
            </p>
          </div>
        </div>
      </div>
    </div>

    <CtaSection
      :ctaTitle="'Ready to Connect with Your Target Audience?'"
      :ctaSubTitle="'Contact us today for a free consultation and let us help you recruit the perfect participants for your research study.'"
    />
  </div>
</template>

<script>
export default {};
</script>

<style></style>
