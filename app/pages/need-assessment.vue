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
          Start Smart. Data-Driven Success Begins Here.
        </h1>
        <p class="font-medium text-center text-lg text-[#3B3B3F]">
          Defining Your Objectives. Planning for Impact.
        </p>
        <div class="flex md:flex-row flex-col gap-4 justify-center">
          <div
            @click="handleClick"
            class="bg-secondary py-[14px] px-[16px] rounded-[8px] text-white"
          >
            Book a Consultation
          </div>
          <a
            href="mailto:sales@zacrac.com"
            target="_blank"
            class="bg-[#000005] py-[14px] px-[16px] rounded-[8px] text-white"
          >
            Contact Sales
          </a>
        </div>
      </div>
    </div>
    <div class="flex md:flex-row items-stretch flex-col-reverse">
      <div
        class="md:w-6/12 w-full bg-secondary flex flex-col justify-center md:px-20 py-20 px-5"
      >
        <h1 class="md:text-6xl text-3xl text-white font-bold">
          Why a Needs Assessment is crucial.
        </h1>
        <p class="text-lg text-white font-medium my-4">
          Jumping into a data project without a clear understanding of your
          objectives is like navigating without a map. Our Needs Assessment
          process provides the direction you need, ensuring that your data
          initiatives are focused, efficient, and yield the most valuable
          insights.
        </p>
      </div>
      <div class="md:w-6/12 w-full">
        <img src="/need-access/image.svg" class="object-cover w-full h-full" />
      </div>
    </div>

    <div class="px-5 md:px-20 bg-primary w-full py-16">
      <div
        class="md:w-8/12 flex flex-col items-center md:justify-center justify-start mx-auto w-full"
      >
        <h1
          class="md:text-4xl text-2xl text-white md:text-center text-left font-semibold mb-5 w-full"
        >
          A Collaborative Approach to Understanding Your Needs
        </h1>
        <p class="w-full leading-6 md:text-center text-white text-left text-lg">
          We believe in a collaborative partnership. Our Needs Assessment
          process involves open communication, active listening, and a deep dive
          into your business. Here's what you can expect:
        </p>
      </div>
      <div
        class="md:w-10/12 w-full mx-auto grid md:grid-cols-2 grid-cols-1 gap-8 mt-12"
      >
        <div class="rounded-[16px] relative bg-[#fff] p-[24px]">
          <img src="/need-access/Health-Consultation.svg" class="mb-8" />
          <h4 class="text-2xl font-bold mb-4 text-[#3B3B3F]">
            Initial Consultation
          </h4>
          <p class="text-lg text-[#3B3B3F] font-medium mb-16">
            We'll schedule a meeting (virtual or in-person) to discuss your
            business, your goals, and the challenges you're facing. This initial
            consultation is about understanding the big picture and the type of
            data service that aligns best with your needs (e.g., market
            research, data strategy, analytics).
          </p>
        </div>
        <div class="rounded-[16px] relative bg-[#fff] p-[24px]">
          <img src="/need-access/Target.svg" class="mb-8" />
          <h4 class="text-2xl font-bold mb-4 text-[#3B3B3F]">
            Defining Objectives
          </h4>
          <p class="text-lg text-[#3B3B3F] font-medium mb-16">
            Together, we'll clearly define the specific objectives of your data
            project. What key questions do you need to answer? What information
            gaps are you looking to fill? What business outcomes do you want to
            achieve?
          </p>
        </div>
        <div class="rounded-[16px] relative bg-[#fff] p-[24px]">
          <img src="/need-access/feedback.svg" class="mb-8" />
          <h4 class="text-2xl font-bold mb-4 text-[#3B3B3F]">
            Data Landscape Assessment
          </h4>
          <p class="text-lg text-[#3B3B3F] font-medium mb-16">
            For projects involving data analysis or strategy, we'll assess your
            current data infrastructure, data quality, and data availability.
            This helps us understand the raw material we'll be working with.
          </p>
        </div>
        <div class="rounded-[16px] relative bg-[#fff] p-[24px]">
          <img src="/need-access/pie.png" class="mb-8" />
          <h4 class="text-2xl font-bold mb-4 text-[#3B3B3F]">
            Methodology/Approach Selection
          </h4>
          <p class="text-lg text-[#3B3B3F] font-medium mb-16">
            Based on your objectives and data landscape, we'll recommend the
            most appropriate methodologies and approaches. This could include
            specific market research techniques, data analysis methods, or
            strategic planning frameworks.
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
          <h3 class="font-bold text-2xl">Deliverables & Reporting</h3>
          <p class="text-lg font-medium">
            We'll discuss the types of reports, dashboards, and deliverables
            you'll need to effectively utilize the project findings.
          </p>
        </div>
      </div>
    </div>
    <div class="px-5 md:px-20 w-full bg-[#FFF0E6] py-16">
      <div
        class="md:w-8/12 flex flex-col items-center md:justify-center justify-start mx-auto w-full"
      >
        <div
          class="rounded-full text-[15px] text-[#3B3B3F] bg-[#E6E6F0] border-[0.5px] mb-4 border-[#000066] px-[16px] py-[8px]"
        >
          ✨The Value We Deliver
        </div>
        <h1
          class="md:text-4xl text-2xl md:text-center text-left font-semibold mb-5 w-full"
        >
          Setting the Stage for Data-Driven Success
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
            <h4 class="mb-2 md:text-2xl text-xl font-bold">Focused projects</h4>
            <p class="text-lg font-medium">Improve decision-making</p>
          </div>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[20px] px-[20px] flex items-start gap-4"
        >
          <img src="/need-access/Question.svg" alt="" />
          <div>
            <h4 class="mb-2 md:text-2xl text-xl font-bold">
              Actionable insights
            </h4>
            <p class="text-lg font-medium">
              Provides the information you need to make informed decisions and
              drive positive change.
            </p>
          </div>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[20px] px-[20px] flex items-start gap-4"
        >
          <img src="/need-access/auto-response.svg" alt="" />
          <div>
            <h4 class="mb-2 md:text-2xl text-xl font-bold">
              Collaborative partnership
            </h4>
            <p class="text-lg font-medium">
              Builds a strong foundation for a successful data project.
            </p>
          </div>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[20px] px-[20px] flex items-start gap-4"
        >
          <img src="/need-access/Survey-Analytics.svg" alt="" />
          <div>
            <h4 class="mb-2 md:text-2xl text-xl font-bold">
              Clear communication
            </h4>
            <p class="text-lg font-medium">
              Ensures everyone is on the same page throughout the process.
            </p>
          </div>
        </div>
      </div>
    </div>
    <CtaSection
      :ctaTitle="'Ready to Unlock the Power of Data?'"
      :ctaSubTitle="'Schedule your free Needs Assessment consultation today and let\'s discuss how we can help you achieve your business goals through data-driven solutions.'"
    />
  </div>
</template>

<script lang="ts">
import SimpleContactForm from "~/components/SimpleContactForm.vue";

export default {
  components: { SimpleContactForm },
  data() {
    return {
      showFormModal: false,
    };
  },
  methods: {
    handleClick() {
      this.showFormModal = true;
    },
  },
  head() {
    return {
      title: "Need Assessment - Zacrac",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Discover how Zacrac can help you with a comprehensive Needs Assessment. Learn about our data-driven approach and how we can address your business challenges.",
        },
      ],
    };
  },
};
</script>

<style></style>
