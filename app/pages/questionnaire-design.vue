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
          ✨Asking the Right Questions for Actionable Insights📈
        </div>
        <h1 class="md:text-6xl text-3xl text-center font-bold">
          Crafting Effective Surveys That Deliver Results.
        </h1>
        <p class="font-medium text-center text-lg text-[#3B3B3F]">
          Garbage in, garbage out. We'll help you design questionnaires that are
          clear, concise, and engaging, ensuring you gather accurate and
          reliable data from your target audience.
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
          ✨Why Questionnaire Design Matters.
        </div>
        <h1 class="md:text-6xl text-3xl text-white font-bold">
          The Art and Science of Asking Questions.
        </h1>
        <p class="text-lg text-white font-medium my-4">
          Poorly designed questionnaires can lead to biased data, inaccurate
          conclusions, and wasted resources. Our expertise in questionnaire
          design ensures that your surveys are effective, efficient, and yield
          the valuable insights you need.
        </p>
      </div>
      <div class="md:w-6/12 w-full">
        <img
          src="/question-design/image-1376.svg"
          class="object-cover w-full h-full"
        />
      </div>
    </div>

    <div class="px-5 md:px-20 bg-primary w-full py-16">
      <div
        class="md:w-8/12 flex flex-col items-center md:justify-center justify-start mx-auto w-full"
      >
        <h1
          class="md:text-4xl text-2xl text-white md:text-center text-left font-semibold mb-5 w-full"
        >
          Our Meticulous Approach to Questionnaire Development
        </h1>
        <p class="w-full leading-6 md:text-center text-white text-left text-lg">
          We follow a rigorous process to design questionnaires that are
          tailored to your specific research objectives and target audience.
          Here's what you can expect:
        </p>
      </div>
      <div
        class="md:w-10/12 w-full mx-auto grid md:grid-cols-2 grid-cols-1 gap-8 mt-12"
      >
        <div class="rounded-[16px] relative bg-[#fff] p-[24px]">
          <img src="/question-design/review.svg" class="mb-8" />
          <h4 class="text-2xl font-bold mb-4 text-[#3B3B3F]">
            Objective Review
          </h4>
          <p class="text-lg text-[#3B3B3F] font-medium mb-16">
            We start by thoroughly reviewing your research objectives and
            ensuring that the questionnaire will directly address your key
            questions.
          </p>
        </div>
        <div class="rounded-[16px] relative bg-[#fff] p-[24px]">
          <img src="/need-access/Target.svg" class="mb-8" />
          <h4 class="text-2xl font-bold mb-4 text-[#3B3B3F]">
            Target Audience Analysis
          </h4>
          <p class="text-lg text-[#3B3B3F] font-medium mb-16">
            We consider the characteristics of your target audience (e.g.,
            demographics, language, education level) to ensure the questionnaire
            is appropriate and easy to understand.
          </p>
        </div>
        <div class="rounded-[16px] relative bg-[#fff] p-[24px]">
          <img src="/question-design/question.svg" class="mb-8" />
          <h4 class="text-2xl font-bold mb-4 text-[#3B3B3F]">
            Question Development
          </h4>
          <p class="text-lg text-[#3B3B3F] font-medium mb-16">
            We craft clear, concise, and unbiased questions that are designed to
            elicit the information you need. We carefully consider question type
            (e.g., multiple choice, open-ended, rating scales) to maximize data
            quality.
          </p>
        </div>
        <div class="rounded-[16px] relative bg-[#fff] p-[24px]">
          <img src="/question-design/Questionnaire.svg" class="mb-8" />
          <h4 class="text-2xl font-bold mb-4 text-[#3B3B3F]">
            Questionnaire Structure & Flow
          </h4>
          <p class="text-lg text-[#3B3B3F] font-medium mb-16">
            We organize the questions in a logical and engaging flow to ensure
            respondent engagement and minimize survey fatigue.
          </p>
        </div>
        <div class="rounded-[16px] relative bg-[#fff] p-[24px]">
          <img src="/question-design/testing.svg" class="mb-8" />
          <h4 class="text-2xl font-bold mb-4 text-[#3B3B3F]">Pilot Testing</h4>
          <p class="text-lg text-[#3B3B3F] font-medium mb-16">
            We pilot test the questionnaire with a small sample of your target
            audience to identify any potential issues with clarity, wording, or
            question order.
          </p>
        </div>
        <div class="rounded-[16px] relative bg-[#fff] p-[24px]">
          <img src="/question-design/Revision.svg" class="mb-8" />
          <h4 class="text-2xl font-bold mb-4 text-[#3B3B3F]">
            Revisions & Refinement
          </h4>
          <p class="text-lg text-[#3B3B3F] font-medium mb-16">
            Based on the pilot test feedback, we revise and refine the
            questionnaire to ensure it is clear, effective, and yields accurate
            data.
          </p>
        </div>
      </div>
      <div
        class="md:w-10/12 w-full mx-auto mt-8 rounded-[16px] flex md:flex-row flex-col justify-between item-center bg-[#fff] md:p-20 p-[24px]"
      >
        <div class="md:w-7/12 w-full">
          <img src="/need-access/search.png" class="mb-6" />
        </div>
        <div class="md:w-5/12 w-full flex flex-col gap-6 items-start">
          <h3 class="font-bold text-2xl">Data Strategy</h3>
          <p class="text-lg font-medium">
            We finalize the questionnaire and format it for optimal delivery
            (e.g., online survey platform, paper-based survey).
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
          ✨The Nuances of Effective Questioning
        </div>
        <h1
          class="md:text-4xl text-2xl md:text-center text-left font-semibold mb-5 w-full"
        >
          Creating effective questionnaires is more than just asking questions.
          We consider several key factors to ensure data quality
        </h1>
      </div>
      <div
        class="md:w-11/12 mx-auto grid md:grid-cols-3 grid-cols-1 gap-8 mt-12"
      >
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[20px] px-[20px] flex items-start gap-4"
        >
          <img src="/need-access/Contract-File.svg" alt="" />
          <div>
            <h4 class="mb-2 md:text-2xl text-xl font-bold">Question Wording</h4>
            <p class="text-lg font-medium">
              Clarity, conciseness, and avoiding bias are paramount.
            </p>
          </div>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[20px] px-[20px] flex items-start gap-4"
        >
          <img src="/need-access/Question.svg" alt="" />
          <div>
            <h4 class="mb-2 md:text-2xl text-xl font-bold">Question Type</h4>
            <p class="text-lg font-medium">
              Choosing the right question type for the information needed.
            </p>
          </div>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[20px] px-[20px] flex items-start gap-4"
        >
          <img src="/need-access/auto-response.svg" alt="" />
          <div>
            <h4 class="mb-2 md:text-2xl text-xl font-bold">Response Scales</h4>
            <p class="text-lg font-medium">
              Using appropriate scales for accurate and meaningful responses.
            </p>
          </div>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[20px] px-[20px] flex items-start gap-4"
        >
          <img src="/need-access/Survey-Analytics.svg" alt="" />
          <div>
            <h4 class="mb-2 md:text-2xl text-xl font-bold">Survey Length</h4>
            <p class="text-lg font-medium">
              Balancing the need for information with respondent engagement.
            </p>
          </div>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[20px] px-[20px] flex items-start gap-4"
        >
          <img src="/question-design/question-(1).svg" alt="" />
          <div>
            <h4 class="mb-2 md:text-2xl text-xl font-bold">Question Order</h4>
            <p class="text-lg font-medium">
              Optimizing the flow of questions for clarity and engagement.
            </p>
          </div>
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
          Maximizing the Power of Your Surveys with Expert-designed
          Questionnaire
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
            <p class="text-lg font-medium">Accurate data collection</p>
          </div>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[20px] px-[20px] flex items-center gap-4"
        >
          <img src="/question-design/Creative-Idea.svg" alt="" />
          <div>
            <p class="text-lg font-medium">Accurate data collection</p>
          </div>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[20px] px-[20px] flex items-center gap-4"
        >
          <img src="/question-design/Competition.svg" alt="" />
          <div>
            <p class="text-lg font-medium">Increased respondent engagement</p>
          </div>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[20px] px-[20px] flex items-center gap-4"
        >
          <img src="/question-design/Risk-Hazard.svg" alt="" />
          <div>
            <p class="text-lg font-medium">Reduced survey fatigue</p>
          </div>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[20px] px-[20px] flex items-center gap-4"
        >
          <img src="/question-design/graph.svg" alt="" />
          <div>
            <p class="text-lg font-medium">Efficient data analysis</p>
          </div>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[20px] px-[20px] flex items-center gap-4"
        >
          <img src="/question-design/Planning.svg" alt="" />
          <div>
            <p class="text-lg font-medium">Actionable results</p>
          </div>
        </div>
      </div>
    </div>
    <CtaSection
      :ctaTitle="'Ready to Transform Your Data into a Strategic Asset?'"
      :ctaSubTitle="'Contact us today for a free consultation and discover how our Data Strategy services can help you achieve your business goals.'"
    />
  </div>
</template>

<script>
export default {};
</script>

<style></style>
