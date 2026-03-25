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
        <div
          class="rounded-full text-[15px] border-[0.5px] mb-4 bg-[#FFF0E6] border-[#F26B2173] px-[16px] py-[8px]"
        >
          ✨Reach the Right Customers, Drive Results📈
        </div>
        <h1 class="md:text-6xl text-3xl text-center font-bold">
          Data-Driven Strategies for Personalized Marketing.
        </h1>
        <p class="font-medium text-center text-lg text-[#3B3B3F]">
          Maximize your marketing impact by targeting the right customers with
          the right message.
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
          Are You Targeting the Right Customers?
        </h2>
      </div>
      <div
        class="md:w-10/12 mx-auto w-full rounded-[8px] overflow-hidden flex md:flex-row flex-col-reverse items-stretch"
      >
        <div
          class="md:w-6/12 bg-white flex flex-col justify-center items-center px-8 py-12"
        >
          <p class="md:text-4xl text-lg font-bold text-[#3B3B3F]">
            Generic marketing campaigns often fail to deliver results. Our
            services help you understand your customers on a deeper level,
            enabling you to create targeted campaigns that resonate and drive
            conversions.
          </p>
        </div>
        <div class="md:w-6/12 w-full">
          <img
            src="/use-case/image-1388.svg"
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
          Data-Driven Customer Insights.
        </h1>
        <p class="font-medium text-lg text-center">
          We leverage advanced analytics techniques to segment your customers
        </p>
      </div>
      <div
        class="md:w-10/12 mx-auto flex flex-wrap items-center justify-center gap-4 mt-12"
      >
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <p class="text-base font-medium">Demographic Segmentation</p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <p class="text-base font-medium">Behavioral Segmentation</p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <p class="text-base font-medium">Psychographic Segmentation</p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <p class="text-base font-medium">Needs-Based Segmentation</p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <p class="text-base font-medium">
            Predictive Modeling for Customer Behavior
          </p>
        </div>
      </div>
    </div>
    <div class="px-5 md:px-20 bg-[#FF6600] w-full py-16">
      <div
        class="md:w-8/12 flex flex-col md:items-center items-start md:justify-center justify-start mx-auto w-full"
      >
        <h1
          class="md:text-4xl text-2xl md:text-center text-white text-left font-semibold mb-5 w-full"
        >
          The Benefits
        </h1>
        <p class="text-white text-center text-lg font-medium">
          Maximize Marketing ROI, Increase Customer Engagement.
        </p>
      </div>
      <div
        class="md:w-10/12 mx-auto flex flex-wrap items-center w-full justify-center gap-4 mt-12"
      >
        <div
          class="rounded-[8px] relative bg-[#fff] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <p class="text-base font-medium">
            Improve marketing campaign effectiveness
          </p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#fff] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <p class="text-base font-medium">
            Increase customer engagement and loyalty
          </p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#fff] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <p class="text-base font-medium">Optimize marketing spend</p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#fff] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <p class="text-base font-medium">Personalize customer experiences</p>
        </div>
        <div
          class="rounded-[8px] relative bg-[#fff] border-[0.5px] border-[#00000099] py-[10px] px-[20px] flex items-center gap-4"
        >
          <p class="text-base font-medium">Drive higher conversion rates</p>
        </div>
      </div>
    </div>

    <CtaSection
      :ctaTitle="'Ready to Target Your Ideal Customers?'"
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
