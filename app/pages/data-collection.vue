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
          ✨BRINGING YOUR RESREACH TO LIFE📈
        </div>
        <h1 class="md:text-6xl text-3xl text-center font-bold">
          Expert Data Gathering for Actionable Insights.
        </h1>
        <p class="font-medium text-center text-lg text-[#3B3B3F]">
          We handle every aspect of fieldwork and data collection, from
          participant management to quality control, ensuring that your research
          is conducted professionally and efficiently.
        </p>
        <div class="flex md:flex-row flex-col gap-4 justify-center">
          <div
            @click="handleClick"
            class="bg-secondary py-[14px] px-[16px] rounded-[8px] text-white"
          >
            Discuss My Fieldwork Needs
          </div>
        </div>
      </div>
    </div>
    <div class="flex md:flex-row items-stretch flex-col-reverse">
      <div
        class="md:w-6/12 w-full bg-secondary flex flex-col justify-center items-center md:px-20 py-20 px-5"
      >
        <div
          class="rounded-full text-[14px] border-[0.5px] mb-4 bg-[#E6E6F0] border-[#000066] px-[16px] py-[8px]"
        >
          ✨The Key to Reliable Data
        </div>
        <h1 class="md:text-6xl text-3xl text-white font-bold">
          The Foundation of Reliable Data
        </h1>
        <p class="text-lg text-white font-medium my-4">
          Effective fieldwork is essential for gathering accurate and
          representative data. Our experienced field teams are trained to
          conduct research ethically, manage participants effectively, and
          ensure data quality throughout the process.
        </p>
      </div>
      <div class="md:w-6/12 w-full">
        <img
          src="/data-collection/image-1378.svg"
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
          A Range of Methodologies to Meet Your Needs.
        </h1>
        <p class="w-full leading-6 md:text-center text-white text-left text-lg">
          We offer a comprehensive suite of fieldwork and data collection
          services, tailored to your specific research objectives and target
          audience.
        </p>
      </div>
      <div
        class="md:w-10/12 w-full mx-auto grid md:grid-cols-2 grid-cols-1 gap-8 mt-12"
      >
        <div class="rounded-[16px] relative bg-[#fff] p-[24px]">
          <img src="/question-design/review.svg" class="mb-8" />
          <h4 class="text-2xl font-bold mb-4 text-[#3B3B3F]">
            Surveys (Online, Phone, In-Person)
          </h4>
          <p class="text-lg text-[#3B3B3F] font-medium mb-16">
            We conduct surveys using various methods, including online
            platforms, phone interviews, and in-person data collection.
          </p>
        </div>
        <div class="rounded-[16px] relative bg-[#fff] p-[24px]">
          <img src="/need-access/Target.svg" class="mb-8" />
          <h4 class="text-2xl font-bold mb-4 text-[#3B3B3F]">Focus Groups</h4>
          <p class="text-lg text-[#3B3B3F] font-medium mb-16">
            We facilitate focus group discussions to gather rich qualitative
            insights into consumer opinions and motivations.
          </p>
        </div>
        <div class="rounded-[16px] relative bg-[#fff] p-[24px]">
          <img src="/question-design/question.svg" class="mb-8" />
          <h4 class="text-2xl font-bold mb-4 text-[#3B3B3F]">
            In-Depth Interviews
          </h4>
          <p class="text-lg text-[#3B3B3F] font-medium mb-16">
            We conduct in-depth interviews with key stakeholders or experts to
            gain detailed insights on specific topics.
          </p>
        </div>
        <div class="rounded-[16px] relative bg-[#fff] p-[24px]">
          <img src="/question-design/Questionnaire.svg" class="mb-8" />
          <h4 class="text-2xl font-bold mb-4 text-[#3B3B3F]">
            Ethnographic Studies/Observational Research
          </h4>
          <p class="text-lg text-[#3B3B3F] font-medium mb-16">
            We observe and document behavior in natural settings to understand
            how people interact with products or services.
          </p>
        </div>
        <div class="rounded-[16px] relative bg-[#fff] p-[24px]">
          <img src="/question-design/testing.svg" class="mb-8" />
          <h4 class="text-2xl font-bold mb-4 text-[#3B3B3F]">
            Mystery Shopping
          </h4>
          <p class="text-lg text-[#3B3B3F] font-medium mb-16">
            We conduct mystery shopping visits to evaluate customer service,
            product placement, and other aspects of the customer experience.
          </p>
        </div>
        <div class="rounded-[16px] relative bg-[#fff] p-[24px]">
          <img src="/question-design/Revision.svg" class="mb-8" />
          <h4 class="text-2xl font-bold mb-4 text-[#3B3B3F]">
            Data Entry & Coding
          </h4>
          <p class="text-lg text-[#3B3B3F] font-medium mb-16">
            We provide accurate and efficient data entry and coding services to
            prepare your data for analysis.
          </p>
        </div>
      </div>
    </div>
    <div class="flex md:flex-row items-stretch flex-col-reverse">
      <div
        class="md:w-6/12 w-full bg-secondary flex flex-col justify-center items-center md:px-20 py-20 px-5"
      >
        <h1 class="md:text-6xl text-3xl text-white font-bold">
          Experienced and Dedicated Field Professionals
        </h1>
        <p class="text-lg text-white font-medium my-4">
          Our field teams are highly trained and experienced professionals who
          are skilled in conducting research ethically, managing participants
          effectively, and ensuring data quality.
        </p>
      </div>
      <div class="md:w-6/12 w-full">
        <img
          src="/data-collection/image-1379.svg"
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
          Quality Control, Ensuring the Reliability of Your Data
        </h2>
        <div
          class="mt-12 py-12 md:px-20 px-[24px] bg-white rounded-[8px] flex md:flex-row flex-col items-center gap-4"
        >
          <img src="/data-collection/bitcoin-icons_graph-outline.svg" alt="" />
          <p class="flex-1 font-medium text-[#757578] md:text-xl text-lg">
            We implement rigorous quality control measures throughout the
            fieldwork process to ensure the integrity and reliability of your
            data. This includes, data validation, field supervision, double
            opt-in, geolocation, I.P detection, etc.
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
          Delivering Accurate and Actionable Data
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
            <p class="text-lg font-medium">High-quality data</p>
          </div>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[20px] px-[20px] flex items-center gap-4"
        >
          <img src="/question-design/Creative-Idea.svg" alt="" />
          <div>
            <p class="text-lg font-medium">High-quality data</p>
          </div>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[20px] px-[20px] flex items-center gap-4"
        >
          <img src="/question-design/Competition.svg" alt="" />
          <div>
            <p class="text-lg font-medium">Efficient data collection</p>
          </div>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[20px] px-[20px] flex items-center gap-4"
        >
          <img src="/question-design/Risk-Hazard.svg" alt="" />
          <div>
            <p class="text-lg font-medium">Ethical research practices</p>
          </div>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[20px] px-[20px] flex items-center gap-4"
        >
          <img src="/question-design/graph.svg" alt="" />
          <div>
            <p class="text-lg font-medium">Reduced fieldwork costs</p>
          </div>
        </div>
        <div
          class="rounded-[8px] relative bg-[#FFFFFF66] border-[0.5px] border-[#00000099] py-[20px] px-[20px] flex items-center gap-4"
        >
          <img src="/question-design/Planning.svg" alt="" />
          <div>
            <p class="text-lg font-medium">Timely delivery of data</p>
          </div>
        </div>
      </div>
    </div>
    <CtaSection
      :ctaTitle="'Ready to Gather the Insights You Need?'"
      :ctaSubTitle="'Contact us today for a free consultation and let us help you design and execute your fieldwork and data collection.'"
    />
  </div>
</template>

<script>
export default {};
</script>

<style></style>
