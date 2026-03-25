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
          Customer Satisfaction & Loyalty: Building Stronger Customer
          Relationships
        </h1>
        <p class="font-medium text-center text-lg text-[#3B3B3F]">
          Happy customers are the foundation of any successful business. Our
          market research services help you understand customer satisfaction,
          identify drivers of loyalty, and implement strategies to improve
          customer retention and advocacy.
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
          class="text-white md:text-left text-center font-bold md:text-4xl text-3xl mb-8"
        >
          Are Your Customers Truly Satisfied?
        </h2>
      </div>
      <div
        class="md:w-10/12 mx-auto w-full rounded-[8px] overflow-hidden flex md:flex-row flex-col-reverse items-stretch"
      >
        <div
          class="md:w-6/12 bg-white flex flex-col justify-center items-center px-8 py-12"
        >
          <p class="md:text-4xl text-lg font-bold text-[#3B3B3F]">
            Understanding customer satisfaction is crucial, but it's more than
            just a feeling. Identifying the drivers of satisfaction and loyalty
            is key to improving retention and turning customers into advocates.
            Are you losing customers without knowing why?
          </p>
        </div>
        <div class="md:w-6/12 w-full">
          <img
            src="/use-case/image-1372.svg"
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
          Data-Driven Strategies for Customer Loyalty
        </h1>
        <p class="font-medium text-lg text-center">
          We use a variety of research methods to get a complete picture of your
          customer experience.
        </p>
      </div>
      <div
        class="md:w-10/12 mx-auto grid md:grid-cols-3 grid-cols-1 gap-8 mt-12"
      >
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <img src="/question-design/decision.svg" alt="" />
          <p class="text-lg font-medium">
            Customer Satisfaction Surveys (CSAT)
          </p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <img src="/question-design/Creative-Idea.svg" alt="" />
          <p class="text-lg font-medium">
            Net Promoter Score (NPS) Measurement
          </p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <img src="/question-design/Competition.svg" alt="" />
          <p class="text-lg font-medium">
            Customer Feedback Analysis (reviews, social media)
          </p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <img src="/question-design/Risk-Hazard.svg" alt="" />
          <p class="text-lg font-medium">Customer Journey Mapping</p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <img src="/question-design/graph.svg" alt="" />
          <p class="text-lg font-medium">Loyalty Program Evaluation</p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <img src="/question-design/graph.svg" alt="" />
          <p class="text-lg font-medium">Churn Analysis</p>
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
          The Benefits: Increased Retention, Loyal Advocates
        </h1>
      </div>
      <div
        class="md:w-11/12 mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-12"
      >
        <div class="rounded-[12px] relative bg-[#FFFFFFCC] p-[20px]">
          <img src="/use-case/Customer.svg" class="mb-8" />

          <p class="text-lg font-medium mb-8 text-[#1D1D1D]">
            Improve customer retention and reduce churn.
          </p>
        </div>
        <div class="rounded-[12px] relative bg-[#FFFFFFCC] p-[20px]">
          <img src="/use-case/Client-Experience.svg" class="mb-8" />
          <p class="text-lg font-medium mb-8 text-[#1D1D1D]">
            Enhance the customer experience at every touchpoint.
          </p>
        </div>
        <div class="rounded-[12px] relative bg-[#FFFFFFCC] p-[20px]">
          <img src="/use-case/Process-Improvement.svg" class="mb-8" />
          <p class="text-lg font-medium mb-8 text-[#1D1D1D]">
            Identify areas for product or service improvement.
          </p>
        </div>
        <div class="rounded-[12px] relative bg-[#FFFFFFCC] p-[20px]">
          <img src="/use-case/Satisfaction.svg" class="mb-8" />
          <p class="text-lg font-medium mb-8 text-[#1D1D1D]">
            Turn satisfied customers into brand advocates.
          </p>
        </div>
        <div class="rounded-[12px] relative bg-[#FFFFFFCC] p-[20px]">
          <img src="/use-case/Value.svg" class="mb-8" />
          <p class="text-lg font-medium mb-8 text-[#1D1D1D]">
            Increase customer lifetime value.
          </p>
        </div>
      </div>
    </div>

    <CtaSection
      :ctaTitle="'Ready to Build Stronger Customer Relationships?'"
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
