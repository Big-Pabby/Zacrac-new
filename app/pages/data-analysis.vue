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
          ✨FROM RAW DATA TO REAL RESULTS📈
        </div>
        <h1 class="md:text-6xl text-3xl text-center font-bold">
          Uncovering the Insights That Drive Growth
        </h1>
        <p class="font-medium text-center text-lg text-[#3B3B3F]">
          We take your raw data and turn it into a strategic advantage. Our
          expert analysts use advanced techniques to extract meaningful insights
          that inform your business decisions.
        </p>
        <div class="flex md:flex-row flex-col gap-4 justify-center">
          <div
            @click="handleClick"
            class="bg-secondary py-[14px] px-[16px] rounded-[8px] text-white"
          >
            Analyze My Data
          </div>
        </div>
      </div>
    </div>
    <div class="flex md:flex-row items-stretch flex-col-reverse">
      <div
        class="md:w-6/12 w-full bg-secondary flex flex-col justify-center items-center md:px-20 py-20 px-5"
      >
        <h1 class="md:text-6xl text-3xl text-white font-bold">
          Turning Data into Actionable Intelligence
        </h1>
        <p class="text-lg text-white font-medium my-4">
          Raw data is just numbers on a page. It's the analysis that unlocks the
          hidden potential and reveals the story your data is trying to tell. We
          help you make sense of your data and turn it into actionable
          intelligence.
        </p>
      </div>
      <div class="md:w-6/12 w-full">
        <img
          src="/data-analysis/image-1380.svg"
          class="object-cover w-full h-full"
        />
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
          A Range of Analytical Techniques to Meet Your Needs.
        </h1>
        <p class="w-full leading-6 md:text-center text-white text-left text-lg">
          We offer a comprehensive suite of data analysis services, tailored to
          your specific research objectives and data type.
        </p>
      </div>
      <div
        class="md:w-10/12 w-full mx-auto grid md:grid-cols-2 grid-cols-1 gap-8 mt-12"
      >
        <div class="rounded-[16px] relative bg-[#fff] p-[24px]">
          <img src="/question-design/review.svg" class="mb-8" />
          <h4 class="text-2xl font-bold mb-4 text-[#3B3B3F]">
            Descriptive Analytics
          </h4>
          <p class="text-lg text-[#3B3B3F] font-medium mb-16">
            Summarizing and describing your data to understand past performance
            and identify key trends.
          </p>
        </div>
        <div class="rounded-[16px] relative bg-[#fff] p-[24px]">
          <img src="/need-access/Target.svg" class="mb-8" />
          <h4 class="text-2xl font-bold mb-4 text-[#3B3B3F]">
            Diagnostic Analytics
          </h4>
          <p class="text-lg text-[#3B3B3F] font-medium mb-16">
            Investigating the reasons behind past performance and identifying
            the root causes of specific issues.
          </p>
        </div>
        <div class="rounded-[16px] relative bg-[#fff] p-[24px]">
          <img src="/question-design/question.svg" class="mb-8" />
          <h4 class="text-2xl font-bold mb-4 text-[#3B3B3F]">
            Predictive Analytics
          </h4>
          <p class="text-lg text-[#3B3B3F] font-medium mb-16">
            Forecasting future trends and anticipating market changes with
            advanced predictive modeling techniques.
          </p>
        </div>
        <div class="rounded-[16px] relative bg-[#fff] p-[24px]">
          <img src="/question-design/Questionnaire.svg" class="mb-8" />
          <h4 class="text-2xl font-bold mb-4 text-[#3B3B3F]">
            Prescriptive Analytics
          </h4>
          <p class="text-lg text-[#3B3B3F] font-medium mb-16">
            Recommending specific actions to optimize future outcomes based on
            data insights.
          </p>
        </div>
        <div class="rounded-[16px] relative bg-[#fff] p-[24px]">
          <img src="/question-design/testing.svg" class="mb-8" />
          <h4 class="text-2xl font-bold mb-4 text-[#3B3B3F]">
            Statistical Analysis
          </h4>
          <p class="text-lg text-[#3B3B3F] font-medium mb-16">
            Using statistical methods to identify patterns, relationships, and
            significance in your data.
          </p>
        </div>
        <div class="rounded-[16px] relative bg-[#fff] p-[24px]">
          <img src="/question-design/Revision.svg" class="mb-8" />
          <h4 class="text-2xl font-bold mb-4 text-[#3B3B3F]">Data Mining</h4>
          <p class="text-lg text-[#3B3B3F] font-medium mb-16">
            Exploring large datasets to discover hidden insights and valuable
            opportunities.
          </p>
        </div>
      </div>
    </div>
    <div class="flex md:flex-row items-stretch flex-col-reverse">
      <div
        class="md:w-6/12 w-full bg-secondary flex flex-col justify-center items-center md:px-20 py-20 px-5"
      >
        <h1 class="md:text-6xl text-3xl text-white font-bold">
          Cutting-Edge Tools and Expert Analysts
        </h1>
        <p class="text-lg text-white font-medium my-4">
          Our team of experienced analysts utilizes cutting-edge statistical
          software and data visualization tools to provide you with the most
          accurate and insightful analysis. We combine technical expertise with
          business acumen to deliver results that are relevant and actionable.
        </p>
      </div>
      <div class="md:w-6/12 w-full">
        <img
          src="/data-analysis/image-1381.svg"
          class="object-cover w-full h-full"
        />
      </div>
    </div>
    <div class="px-5 md:px-20 bg-[#FFF0E6] w-full py-16">
      <div
        class="md:w-10/12 flex flex-col items-center justify-center mx-auto w-full"
      >
        <h2
          class="md:text-left text-center font-bold md:text-4xl text-3xl mb-8"
        >
          Communicating Insights Clearly and Effectively.
        </h2>
        <div
          class="mt-12 py-12 md:px-20 px-[24px] bg-white rounded-[8px] flex md:flex-row flex-col items-center gap-4"
        >
          <img src="/data-analysis/fluent-mdl2_insights.svg" alt="" />
          <p class="flex-1 font-medium text-[#757578] md:text-xl text-lg">
            We present our findings in clear, concise, and visually compelling
            reports, making it easy for you to understand the insights and
            implement them effectively. We use data visualization techniques to
            communicate complex information in a way that is accessible and
            actionable.
          </p>
        </div>
      </div>
    </div>
    <div class="px-5 md:px-20 w-full bg-[#fff] py-16">
      <div
        class="md:w-8/12 flex flex-col items-center md:justify-center justify-start mx-auto w-full"
      >
        <h1
          class="md:text-4xl text-2xl md:text-center text-left font-semibold mb-5 w-full"
        >
          Transforming Data into Strategic Advantage.
        </h1>
      </div>
      <div
        class="md:w-11/12 mx-auto grid md:grid-cols-3 grid-cols-1 gap-8 mt-12"
      >
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[20px] px-[20px] flex items-center gap-4"
        >
          <img src="/question-design/decision.svg" alt="" />
          <div>
            <p class="text-lg font-medium">Improved decision-making</p>
          </div>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[20px] px-[20px] flex items-center gap-4"
        >
          <img src="/question-design/Creative-Idea.svg" alt="" />
          <div>
            <p class="text-lg font-medium">
              Enhanced understanding of your business
            </p>
          </div>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[20px] px-[20px] flex items-center gap-4"
        >
          <img src="/question-design/Competition.svg" alt="" />
          <div>
            <p class="text-lg font-medium">
              Identification of growth opportunities
            </p>
          </div>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[20px] px-[20px] flex items-center gap-4"
        >
          <img src="/question-design/Risk-Hazard.svg" alt="" />
          <div>
            <p class="text-lg font-medium">Optimized performance</p>
          </div>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[20px] px-[20px] flex items-center gap-4"
        >
          <img src="/question-design/graph.svg" alt="" />
          <div>
            <p class="text-lg font-medium">Reduced costs</p>
          </div>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[20px] px-[20px] flex items-center gap-4"
        >
          <img src="/question-design/Planning.svg" alt="" />
          <div>
            <p class="text-lg font-medium">Competitive advantage</p>
          </div>
        </div>
      </div>
    </div>
    <CtaSection
      :ctaTitle="'Ready to Unlock the Power of Your Data?'"
      :ctaSubTitle="'Contact us today for a free consultation and let us help you transform your data into actionable insights.'"
    />
  </div>
</template>

<script>
export default {};
</script>

<style></style>
