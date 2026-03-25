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
          class="rounded-full text-[15px] border-[0.5px] mb-4 border-[#F26B2173] px-[16px] py-[8px]"
        >
          ✨Customer Reviews & Intelligence📈
        </div>
        <h1 class="md:text-6xl text-3xl text-center font-bold">
          Unlock the Power of Customer Insights with Parrot.
        </h1>
        <p class="font-medium text-center text-lg text-[#3B3B3F]">
          Understand what your customers are saying about you and use those
          insights to improve your business. Our software, Parrot, automates the
          entire process, from review collection to analysis, to actionable
          intelligence.
        </p>
        <div class="flex md:flex-row flex-col gap-4 justify-center">
          <a
            href="https://www.parrot.cx"
            target="blank"
            @click="handleClick"
            class="bg-secondary py-[14px] px-[16px] flex items-center gap-2 text-center rounded-[8px] text-white"
          >
            Explore Parrot <i class="uil uil-arrow-right"></i>
          </a>
          <div
            @click="handleClick"
            class="bg-[#000005] py-[14px] px-[16px] text-center rounded-[8px] text-white"
          >
            Book a Free Demo
          </div>
        </div>
      </div>
    </div>
    <div class="px-5 bg-secondary md:px-20 w-full py-16">
      <div
        class="md:w-8/12 flex flex-col md:items-center items-start md:justify-center justify-start mx-auto w-full"
      >
        <div
          class="rounded-full text-[15px] text-[#3B3B3F] bg-[#E6E6F0] border-[0.5px] mb-4 border-primary px-[16px] py-[8px]"
        >
          ✨CUSTOMERS
        </div>
        <h1
          class="md:text-4xl text-2xl md:text-center text-white text-left font-semibold mb-5 w-full"
        >
          Listen to Your Customers. Collect Customer Reviews and Feedback. Grow
          Your Business.
        </h1>
      </div>
      <div
        class="md:w-10/12 mx-auto grid md:grid-cols-2 grid-cols-1 gap-8 mt-12"
      >
        <div class="rounded-[8px] relative bg-[#FFFFFFCC] p-[24px] pb-12">
          <img src="/parrot/Customer.svg" class="mb-8" />

          <p class="text-lg font-medium mb-16">
            Know what your customers want, think, and like.
          </p>
        </div>

        <div class="rounded-[8px] relative bg-[#FFFFFFCC] p-[24px] pb-12">
          <img src="/parrot/Customer-(1).svg" class="mb-8" />

          <p class="text-lg font-medium mb-16">
            Customer reviews and feedback are invaluable. They provide direct
            insights into customer satisfaction, identify areas for improvement,
            and inform product development.
          </p>
        </div>
        <div class="rounded-[8px] relative bg-[#FFFFFFCC] p-[24px] pb-12">
          <img src="/parrot/Social-Campaign.svg" class="mb-8" />

          <p class="text-lg font-medium mb-16">
            Optimise your marketing campaign based on insight from customer
            feedback.
          </p>
        </div>
        <div class="rounded-[8px] relative bg-[#FFFFFFCC] p-[24px] pb-12">
          <img src="/parrot/Grow-Up.svg" class="mb-8" />

          <p class="text-lg font-medium mb-16">
            Grow, scale, and drive revenue based on customer insight.
          </p>
        </div>
      </div>
    </div>
    <div class="px-5 md:px-20 w-full py-16">
      <div
        class="md:w-8/12 flex flex-col md:items-center items-start md:justify-center justify-start mx-auto w-full"
      >
        <h1
          class="md:text-4xl text-2xl md:text-center text-left font-semibold mb-5 w-full"
        >
          End-to-End Automation of Voice of Customers. From Collection to
          Insight.
        </h1>
        <p
          class="w-full text-[#4A4A4E] leading-6 md:text-center text-left text-lg"
        >
          Our flexible Analytics-as-a-Service offering is designed to meet the
          unique needs of your business. Whether you need help with a specific
          project or ongoing analytical support, we've got you covered.
        </p>
      </div>
      <div
        class="md:w-10/12 mx-auto grid md:grid-cols-2 grid-cols-1 gap-8 mt-12"
      >
        <div class="rounded-[8px] relative bg-[#EBEBEB] p-[24px] pb-12">
          <img src="/parrot/Customer-Review.svg" class="mb-8" />

          <p class="text-lg font-medium text-[#757578] mb-16">
            Easily Collect Reviews and Feedback from Customers.
          </p>
        </div>

        <div class="rounded-[8px] relative bg-[#EBEBEB] p-[24px] pb-12">
          <img src="/parrot/Social-Media.svg" class="mb-8" />

          <p class="text-lg font-medium text-[#757578] mb-16">
            Showcase Reviews on Social Media and Website to Influence Buying
            Decisions.
          </p>
        </div>
        <div class="rounded-[8px] relative bg-[#EBEBEB] p-[24px] pb-12">
          <img src="/parrot/Market-Segmentation.svg" class="mb-8" />

          <p class="text-lg font-medium text-[#757578] mb-16">
            Automate Analytics and Derive Insight in 1-click.
          </p>
        </div>
        <div class="rounded-[8px] relative bg-[#EBEBEB] p-[24px] pb-12">
          <img src="/parrot/Machine-Learning.svg" class="mb-8" />

          <p class="text-lg font-medium text-[#757578] mb-16">
            Access Custom AI models and automate tasks across Marketing,
            Operations, and Sales.
          </p>
        </div>
      </div>
      <div class="flex md:flex-row mt-6 flex-col gap-4 justify-center">
        <a
          href="https://www.parrot.cx"
          target="blank"
          @click="handleClick"
          class="bg-secondary py-[14px] px-[16px] flex items-center gap-2 text-center rounded-[8px] text-white"
        >
          Explore Parrot <i class="uil uil-arrow-right"></i>
        </a>
        <div
          @click="handleClick"
          class="bg-[#000005] py-[14px] px-[16px] text-center rounded-[8px] text-white"
        >
          Book a Free Demo
        </div>
      </div>
    </div>
    <div class="flex md:flex-row-reverse flex-col-reverse">
      <div
        class="md:w-6/12 w-full bg-primary flex flex-col justify-center md:px-12 py-20 px-5"
      >
        <h1 class="md:text-4xl text-3xl text-white font-bold">
          Collect Customer Reviews and Feedback in Multiple Ways Based on
          Customer Preference
        </h1>
        <ul class="text-lg text-white font-medium my-4 ml-[16px]">
          <li class="list-disc">Parrot App</li>
          <li class="list-disc">Parrot Card</li>
          <li class="list-disc">Identify new growth opportunities</li>
          <li class="list-disc">Parrot Stickers</li>
          <li class="list-disc">Email</li>
          <li class="list-disc">SMS</li>
          <li class="list-disc">USSD.</li>
        </ul>
      </div>
      <div class="md:w-6/12 w-full h-full">
        <img src="/parrot/image.svg" class="object-cover w-full h-full" />
      </div>
    </div>
    <div
      :style="{
        backgroundImage: `url(/solution-bg.svg)`,
      }"
      class="px-5 md:px-20 bg-secondary w-full py-16 bg-cover bg-center"
    >
      <div
        class="md:w-11/12 flex flex-col items-center justify-center mx-auto w-full"
      >
        <h2 class="text-white text-center font-bold md:text-4xl text-3xl mb-8">
          Parrot Helps you Unlock Actionable Insights from Your Customer Reviews
          and Feedback
        </h2>
        <div class="mx-auto grid md:grid-cols-3 grid-cols-1 gap-8 mt-12">
          <div class="rounded-[8px] relative bg-[#EBEBEBCC] p-[24px]">
            <img src="/parrot/Smartphone-Rating.svg" class="mb-8" />
            <h4 class="text-2xl text-bold mb-4">Automated Review Collection</h4>
            <p class="text-lg font-medium">
              Import  reviews from multiple platforms (e.g., Google Reviews,
              Yelp, social media) automatically.
            </p>
          </div>
          <div class="rounded-[8px] relative bg-[#EBEBEBCC] p-[24px]">
            <img src="/parrot/Positive-And-Negative.svg" class="mb-8" />
            <h4 class="text-2xl text-bold mb-4">Sentiment Analysis</h4>
            <p class="text-lg font-medium">
              Understand the overall sentiment of customer feedback (positive,
              negative, neutral).
            </p>
          </div>
          <div class="rounded-[8px] relative bg-[#EBEBEBCC] p-[24px]">
            <img src="/parrot/Market-Segmentation.svg" class="mb-8" />
            <h4 class="text-2xl text-bold mb-4">Competitive Analysis</h4>
            <p class="text-lg font-medium">
              Benchmark your performance against competitors and identify areas
              where you can excel.
            </p>
          </div>
          <div class="rounded-[8px] relative bg-[#EBEBEBCC] p-[24px]">
            <img src="/parrot/data-insights.svg" class="mb-8" />
            <h4 class="text-2xl text-bold mb-4">Customizable Dashboards</h4>
            <p class="text-lg font-medium">
              Track key metrics and visualize customer insights with
              customizable dashboards.
            </p>
          </div>
          <div class="rounded-[8px] relative bg-[#EBEBEBCC] p-[24px]">
            <img src="/parrot/trend-analysis.svg" class="mb-8" />
            <h4 class="text-2xl text-bold mb-4">Actionable Insights</h4>
            <p class="text-lg font-medium">
              Identify specific actions you can take to improve customer
              experience and address customer pain points.
            </p>
          </div>
          <div class="rounded-[8px] relative bg-[#EBEBEBCC] p-[24px]">
            <img src="/parrot/Bell.svg" class="mb-8" />
            <h4 class="text-2xl text-bold mb-4">Alerts & Notifications</h4>
            <p class="text-lg font-medium">
              Receive real-time alerts about negative reviews or critical
              feedback.
            </p>
          </div>
        </div>
        <div
          class="mt-8 w-full rounded-[8px] flex md:flex-row flex-col justify-between item-center bg-[#EBEBEBCC] md:p-20 p-[24px]"
        >
          <div class="md:w-7/12 w-full">
            <img src="/parrot/report.svg" class="mb-6" />
          </div>
          <div class="md:w-5/12 w-full flex flex-col gap-6 items-start">
            <h3 class="font-bold text-2xl">Reporting & Analytics</h3>
            <p class="text-lg font-medium">
              Generate comprehensive reports to track progress and measure the
              impact of your actions.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="flex md:flex-row flex-col-reverse">
      <div
        class="md:w-6/12 w-full flex flex-col justify-center md:px-20 py-20 px-5"
      >
        <h1 class="md:text-4xl text-3xl font-bold">
          Turning Customer Reviews and Feedback into Fuel for Growth
        </h1>
        <ul class="text-lg font-medium my-4 ml-[16px]">
          <li class="list-disc">Improve customer satisfaction</li>
          <li class="list-disc">Enhance customer experience</li>
          <li class="list-disc">Identify product improvements</li>
          <li class="list-disc">Gain a competitive edge</li>
          <li class="list-disc">Boost brand reputation</li>
          <li class="list-disc">SMS</li>
          <li class="list-disc">Drive business growth</li>
        </ul>
        <div class="flex items-center gap-6"></div>
      </div>
      <div class="md:w-6/12 w-full h-full">
        <img src="/parrot/image-1369.svg" class="object-cover w-full h-full" />
      </div>
    </div>

    <CtaSection
      :ctaTitle="'Ready to Harness the Voice of Your Customer?'"
      :ctaSubTitle="'Request a demo of Parrot or contact us today for a free consultation to learn how our Customer Reviews & Intelligence services can help you achieve your business goals.'"
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
