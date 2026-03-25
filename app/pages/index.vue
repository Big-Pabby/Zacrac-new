<template>
  <div class="">
    <!-- Hero Section -->
    <div
      class="relative min-h-screen pt-[100px] pb-20 bg-cover bg-center overflow-hidden"
      :style="{ backgroundImage: `url(/lines-hero.svg)` }"
      data-aos="fade-up"
    >
      <!-- Gradient overlay for depth -->
      <div
        class="absolute inset-0 bg-gradient-to-b from-[#FEF0E9]/50 to-transparent pointer-events-none"
      ></div>

      <div
        class="text-dark w-full px-5 lg:px-20 md:gap-y-5 flex justify-between items-center relative z-10"
      >
        <div
          class="md:w-8/12 flex flex-col items-center justify-center mx-auto w-full"
        >
          <!-- Elegant badge -->
          <div
            class="group relative inline-flex items-center gap-2 text-[14px] font-medium mb-6 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-[#F26B2133] shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
          >
            <span
              class="w-2 h-2 rounded-full bg-secondary animate-pulse"
            ></span>
            <span class="text-[#3B3B3F]"
              >Data & Insights. Better Decisions.</span
            >
            <span class="text-secondary">📈</span>
          </div>

          <!-- Refined heading -->
          <h1
            class="md:text-5xl text-[#000005] text-3xl text-center font-bold mb-6 w-full leading-tight"
          >
            Professional Research &
            <span class="text-secondary">Data Solutions</span>
          </h1>

          <!-- Improved description -->
          <p
            class="w-full md:w-10/12 mx-auto leading-7 text-center text-lg text-[#5A5A5E]"
          >
            We help organizations transform raw data into actionable
            insights—eliminating guesswork, reducing risk, and uncovering growth
            opportunities.
          </p>

          <!-- Enhanced buttons -->
          <div
            class="flex md:flex-row flex-col mt-10 mb-4 gap-4 justify-center"
          >
            <button
              @click="handleClick"
              class="group relative bg-secondary py-3.5 px-8 rounded-lg text-white font-medium overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-secondary/30"
            >
              <span class="relative z-10">Contact Us</span>
              <div
                class="absolute inset-0 bg-[#E55A1A] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"
              ></div>
            </button>
            <a
              href="mailto:sales@zacrac.com"
              target="_blank"
              class="group relative bg-[#000005] py-3.5 px-8 rounded-lg text-white font-medium overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-black/20"
            >
              <span class="relative z-10">Explore Solutions</span>
              <div
                class="absolute inset-0 bg-[#1A1A1F] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"
              ></div>
            </a>
          </div>
        </div>
      </div>

      <!-- Feature cards with improved styling -->
      <div
        class="md:w-10/12 my-16 w-full mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 px-4"
      >
        <div
          class="group text-center p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/50 shadow-sm hover:shadow-xl hover:shadow-secondary/10 transition-all duration-300 hover:-translate-y-1"
        >
          <div
            class="border border-[#DEDEDF] rounded-2xl inline-block bg-white p-4 mb-4 group-hover:border-secondary/30 transition-colors duration-300"
          >
            <img src="/icons/icon1.svg" alt="" class="w-8 h-8" />
          </div>
          <p
            class="font-bold text-base mb-2 text-[#3B3B3F] group-hover:text-secondary transition-colors duration-300"
          >
            Data-Driven Decisions
          </p>
          <p class="text-sm font-medium text-[#757578] leading-relaxed">
            Trusted by leading organizations to transform data into strategic
            insights.
          </p>
        </div>
        <div
          class="group text-center p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/50 shadow-sm hover:shadow-xl hover:shadow-secondary/10 transition-all duration-300 hover:-translate-y-1"
        >
          <div
            class="border border-[#DEDEDF] rounded-2xl inline-block bg-white p-4 mb-4 group-hover:border-secondary/30 transition-colors duration-300"
          >
            <img src="/icons/icon3.svg" alt="" class="w-8 h-8" />
          </div>
          <p
            class="font-bold text-base mb-2 text-[#3B3B3F] group-hover:text-secondary transition-colors duration-300"
          >
            Proven Expertise
          </p>
          <p class="text-sm font-medium text-[#757578] leading-relaxed">
            Over a decade of experience delivering professional research &
            analytics.
          </p>
        </div>
        <div
          class="group text-center p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/50 shadow-sm hover:shadow-xl hover:shadow-secondary/10 transition-all duration-300 hover:-translate-y-1"
        >
          <div
            class="border border-[#DEDEDF] rounded-2xl inline-block bg-white p-4 mb-4 group-hover:border-secondary/30 transition-colors duration-300"
          >
            <img src="/icons/icon8.svg" alt="" class="w-8 h-8" />
          </div>
          <p
            class="font-bold text-base mb-2 text-[#3B3B3F] group-hover:text-secondary transition-colors duration-300"
          >
            Innovative Solutions
          </p>
          <p class="text-sm font-medium text-[#757578] leading-relaxed">
            Cutting-edge methodologies tailored to your organization's needs.
          </p>
        </div>
        <div
          class="group text-center p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/50 shadow-sm hover:shadow-xl hover:shadow-secondary/10 transition-all duration-300 hover:-translate-y-1"
        >
          <div
            class="border border-[#DEDEDF] rounded-2xl inline-block bg-white p-4 mb-4 group-hover:border-secondary/30 transition-colors duration-300"
          >
            <img src="/icons/icon2.svg" alt="" class="w-8 h-8" />
          </div>
          <p
            class="font-bold text-base mb-2 text-[#3B3B3F] group-hover:text-secondary transition-colors duration-300"
          >
            Measurable Results
          </p>
          <p class="text-sm font-medium text-[#757578] leading-relaxed">
            Boost growth and performance with our data-driven strategies.
          </p>
        </div>
      </div>
    </div>
    <!-- Why Trust Us Section -->
    <div
      class="px-5 md:px-20 bg-primary w-full py-20 relative overflow-hidden"
      data-aos="fade-up"
    >
      <!-- Subtle pattern overlay -->
      <div
        class="absolute inset-0 opacity-5"
        style="
          background-image: radial-gradient(
            circle at 2px 2px,
            white 1px,
            transparent 0
          );
          background-size: 32px 32px;
        "
      ></div>

      <div
        class="md:w-8/12 flex flex-col items-center justify-center mx-auto w-full relative z-10"
      >
        <div
          class="inline-flex items-center gap-2 text-[13px] font-semibold tracking-wide text-[#3B3B3F] bg-[#E6E6F0] rounded-full px-4 py-2 mb-6"
        >
          <span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
          WHY HUNDREDS OF THOUSANDS TRUST US
        </div>
        <h2
          class="text-white md:text-left text-center font-bold md:text-4xl text-3xl mb-6"
        >
          Your Reliable Partner for <span class="text-secondary">Data</span>,
          <br />
          Analytics, and Intelligence.
        </h2>
      </div>
      <div
        class="md:w-10/12 mx-auto w-full rounded-2xl overflow-hidden flex md:flex-row flex-col-reverse items-stretch shadow-2xl"
      >
        <div class="md:w-6/12 bg-white px-8 py-12">
          <div class="flex items-start gap-3 mb-5">
            <span class="mt-1 text-secondary">✦</span>
            <p class="text-base text-[#5A5A5E] leading-relaxed">
              ZACRAC is a team of experienced Market Researchers, Data Analysts,
              Data Scientists, and Consultants dedicated to helping businesses
              like yours thrive.
            </p>
          </div>
          <div class="flex items-start gap-3 mb-5">
            <span class="mt-1 text-secondary">✦</span>
            <p class="text-base text-[#5A5A5E] leading-relaxed">
              We combine cutting-edge methodologies with deep industry expertise
              to deliver unparalleled market insights.
            </p>
          </div>
          <div class="flex items-start gap-3">
            <span class="mt-1 text-secondary">✦</span>
            <p class="text-base text-[#5A5A5E] leading-relaxed">
              Our focus is on providing you with the accurate, reliable, and
              actionable data you need to make informed decisions, minimize
              risk, and achieve your business objectives.
            </p>
          </div>
        </div>
        <div class="md:w-6/12 w-full">
          <img
            src="/data-chart.svg"
            class="w-full h-full object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
    <!-- Suite of Solutions Section -->
    <div
      class="px-5 md:px-20 bg-secondary w-full py-20 bg-cover bg-center relative"
      :style="{ backgroundImage: `url(/solution-bg.svg)` }"
      data-aos="fade-up"
    >
      <!-- Gradient overlay -->
      <div class="absolute inset-0 bg-secondary/90 pointer-events-none"></div>

      <div
        class="md:w-8/12 flex flex-col items-center md:justify-center justify-start mx-auto w-full relative z-10"
      >
        <div
          class="inline-flex items-center gap-2 text-[13px] font-semibold tracking-wide text-[#3B3B3F] bg-[#FFF0E6] rounded-full px-4 py-2 mb-6"
        >
          <span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
          SUITE OF SOLUTIONS
        </div>
        <h1
          class="md:text-4xl text-white text-2xl md:text-center text-left font-bold mb-5 w-full"
        >
          Comprehensive Data Services to
          <span class="text-[#FFB88C]">Drive Your Organization Forward</span>
        </h1>
        <p
          class="w-full text-white/80 leading-relaxed md:text-center text-left text-lg"
        >
          At Zacrac, we offer a range of tailored data services designed to
          unlock valuable insights and propel your organization towards success.
          Explore our services below to see how we can help your business
          thrive.
        </p>
      </div>
      <div
        class="md:w-10/12 mx-auto grid md:grid-cols-2 grid-cols-1 gap-8 mt-12 relative z-10"
      >
        <div
          class="group rounded-2xl relative bg-white p-8 shadow-lg hover:shadow-2xl hover:shadow-black/10 transition-all duration-500 hover:-translate-y-2"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div
            class="w-14 h-14 rounded-2xl bg-[#FFF5F0] flex items-center justify-center mb-6 group-hover:bg-secondary/10 transition-colors duration-300"
          >
            <img src="/icons/icon6.png" class="w-8 h-8" alt="" />
          </div>
          <h4
            class="text-2xl font-bold text-[#3B3B3F] mb-3 group-hover:text-secondary transition-colors duration-300"
          >
            Market Research
          </h4>
          <p class="text-base font-medium text-[#757578] leading-relaxed mb-8">
            Uncover hidden opportunities and understand your customers deeply
            via primary research through Surveys, Interviews, Focus Groups etc.
            We provide actionable insights into market dynamics, and customer
            behavior to fuel your strategic decisions.
          </p>
          <nuxt-link
            to="/market-research"
            class="inline-flex items-center gap-2 py-3 px-5 border border-[#DEDEDF] rounded-lg text-[14px] font-semibold text-[#1C1C21] group-hover:border-secondary group-hover:text-secondary transition-all duration-300"
          >
            Learn more
            <svg
              class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </nuxt-link>
        </div>
        <div
          class="group rounded-2xl relative bg-white p-8 shadow-lg hover:shadow-2xl hover:shadow-black/10 transition-all duration-500 hover:-translate-y-2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div
            class="w-14 h-14 rounded-2xl bg-[#FFF5F0] flex items-center justify-center mb-6 group-hover:bg-secondary/10 transition-colors duration-300"
          >
            <img src="/icons/icon4.png" class="w-8 h-8" alt="" />
          </div>
          <h4
            class="text-2xl font-bold text-[#3B3B3F] mb-3 group-hover:text-secondary transition-colors duration-300"
          >
            Market Intelligence
          </h4>
          <p class="text-base font-medium text-[#757578] leading-relaxed mb-8">
            Stay ahead of the curve. We deliver ongoing market analysis,
            competitor insights, and industry trends, empowering you to
            anticipate change and seize new opportunities.
          </p>
          <nuxt-link
            to="/market-intelligence"
            class="inline-flex items-center gap-2 py-3 px-5 border border-[#DEDEDF] rounded-lg text-[14px] font-semibold text-[#1C1C21] group-hover:border-secondary group-hover:text-secondary transition-all duration-300"
          >
            Learn more
            <svg
              class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </nuxt-link>
        </div>
        <div
          class="group rounded-2xl relative bg-white p-8 shadow-lg hover:shadow-2xl hover:shadow-black/10 transition-all duration-500 hover:-translate-y-2"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div
            class="w-14 h-14 rounded-2xl bg-[#FFF5F0] flex items-center justify-center mb-6 group-hover:bg-secondary/10 transition-colors duration-300"
          >
            <img src="/icons/icon5.png" class="w-8 h-8" alt="" />
          </div>
          <h4
            class="text-2xl font-bold text-[#3B3B3F] mb-3 group-hover:text-secondary transition-colors duration-300"
          >
            Customer Reviews & Intelligence
          </h4>
          <p class="text-base font-medium text-[#757578] leading-relaxed mb-8">
            Understand the voice of your customer. Using our state-of-the-heart
            customer reviews and intelligence platform, we collect and analyze
            reviews and feedback to identify areas for improvement, enhance
            customer experience, and boost brand loyalty.
          </p>
          <nuxt-link
            to="/customer-reviews"
            class="inline-flex items-center gap-2 py-3 px-5 border border-[#DEDEDF] rounded-lg text-[14px] font-semibold text-[#1C1C21] group-hover:border-secondary group-hover:text-secondary transition-all duration-300"
          >
            Learn more
            <svg
              class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </nuxt-link>
        </div>
        <div
          class="group rounded-2xl relative bg-white p-8 shadow-lg hover:shadow-2xl hover:shadow-black/10 transition-all duration-500 hover:-translate-y-2"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div
            class="w-14 h-14 rounded-2xl bg-[#FFF5F0] flex items-center justify-center mb-6 group-hover:bg-secondary/10 transition-colors duration-300"
          >
            <img src="/icons/icon7.png" class="w-8 h-8" alt="" />
          </div>
          <h4
            class="text-2xl font-bold text-[#3B3B3F] mb-3 group-hover:text-secondary transition-colors duration-300"
          >
            Analytics-as-a-Service
          </h4>
          <p class="text-base font-medium text-[#757578] leading-relaxed mb-8">
            Transform your data into strategic advantage. Our expert analysts
            provide on-demand insights, predictive modeling, data visualization
            and reporting to improve your business performance.
          </p>
          <nuxt-link
            to="/analytics-as-a-service"
            class="inline-flex items-center gap-2 py-3 px-5 border border-[#DEDEDF] rounded-lg text-[14px] font-semibold text-[#1C1C21] group-hover:border-secondary group-hover:text-secondary transition-all duration-300"
          >
            Learn more
            <svg
              class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </nuxt-link>
        </div>
      </div>
      <!-- Data Strategy CTA -->
      <div
        class="md:w-10/12 mx-auto mt-10 rounded-2xl flex md:flex-row flex-col justify-between items-center bg-white md:p-10 p-8 shadow-xl"
      >
        <div class="md:w-4/12 w-full mb-6 md:mb-0">
          <div
            class="w-14 h-14 rounded-2xl bg-[#FFF5F0] flex items-center justify-center mb-4"
          >
            <img src="/icons/icon5.png" class="w-8 h-8" alt="" />
          </div>
          <h4 class="text-2xl font-bold text-[#3B3B3F]">Data Strategy</h4>
        </div>
        <div
          class="md:w-8/12 w-full flex md:flex-row flex-col gap-6 md:items-center items-start"
        >
          <p class="text-base font-medium text-[#757578] leading-relaxed">
            Unlock the full potential of your data. We develop a customized data
            roadmap aligned with your business goals, enabling data-driven
            decision-making and sustainable growth.
          </p>
          <nuxt-link
            to="/data-strategy"
            class="whitespace-nowrap inline-flex items-center gap-2 py-3 px-5 border border-[#DEDEDF] rounded-lg text-[14px] font-semibold text-[#1C1C21] hover:border-secondary hover:text-secondary transition-all duration-300"
          >
            Learn more
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </nuxt-link>
        </div>
      </div>
    </div>
    <!-- Case Studies Section -->
    <div class="px-5 lg:px-20 my-10 md:my-20 w-full" data-aos="fade-up">
      <div
        class="md:w-8/12 flex flex-col items-center justify-center mx-auto w-full mb-12"
      >
        <div
          class="inline-flex items-center gap-2 text-[13px] font-semibold tracking-wide text-[#3B3B3F] bg-[#E6E6F0] rounded-full px-4 py-2 mb-4"
        >
          <span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
          DATA IN ACTION
        </div>
        <h1
          class="md:text-4xl text-2xl md:text-center text-left font-bold mb-4 w-full"
        >
          Case Studies and Success Stories
        </h1>
        <p
          class="w-full text-[#5A5A5E] leading-relaxed md:text-center text-left text-lg"
        >
          Explore real-world examples of how our expertise has driven growth and
          innovation.
        </p>
      </div>

      <div class="md:w-10/12 w-full mx-auto">
        <case-slide />
      </div>
    </div>
    <div class="flex md:flex-row flex-col-reverse" data-aos="fade-up">
      <div
        class="md:w-6/12 w-full bg-primary flex flex-col justify-center md:px-20 py-20 px-5"
        data-aos="fade-right"
      >
        <h1 class="md:text-6xl text-3xl text-white font-bold">
          We are with you for the long ride
        </h1>
        <p class="text-lg text-white font-medium my-4">
          We strive to build a lasting relationship with our clients. We focus
          on your picture and strive to help you leverage data for smarter
          decision-making. Magic happens when your insights partner
          "understands" your brand inside and out.
        </p>
        <div class="flex items-center gap-6">
          <button
            @click="handleClick"
            class="bg-secondary py-[14px] px-[16px] rounded-[8px] text-white"
          >
            Get Started
          </button>
          <a
            href="mailto:sales@zacrac.com"
            target="_blank"
            class="border-[1px] border-white py-[14px] px-[16px] rounded-[8px] text-white"
          >
            Contact Sales
          </a>
        </div>
      </div>
      <div class="md:w-6/12 w-full h-full" data-aos="fade-left">
        <img src="/ride-image.svg" class="object-cover w-full h-full" alt="" />
      </div>
    </div>
    <!-- <testimonial /> -->
    <div class="px-5 lg:px-20 py-24 bg-[#FFF0E6]" data-aos="fade-up">
      <div class="md:w-8/12 mx-auto w-full mb-10">
        <h2 class="md:text-5xl text-2xl text-center font-bold mb-12">
          Hear what brands we've worked with have to say about us
        </h2>

        <Testimonial :items="items" />
      </div>
    </div>

    <CtaSection />
  </div>
</template>

<script setup lang="ts">
const showFormModal = ref(false);

interface TestimonialItem {
  name: string;
  image: string;
  role: string;
  content: string;
}

const items = ref<TestimonialItem[]>([
  {
    name: "Oluwatosin Sultan",
    image: "/review/reviewer1.png",
    role: "Founder , Chicken N Tinz.",
    content:
      " ZACRAC helped us to avoid a lot of pitfalls and risks in the food business. Most importantly, we understand the purchase behaviour of the target audience, their purchasing power, and why they are eating  out. We used this to shape our pricing, brand positioning, and marketing strategy. Happy we did a market research before launching.",
  },
  {
    name: "Olumide Ogidan",
    image: "/review/reviewer2.png",
    role: "Principal Partner , A. Olu Ogidan & Co.",
    content:
      "As a law firm, we understand how powerful facts and figures are. Working with ZACRAC has been phenomenal, they bring a lot of value to our organization through their data collection and analytics services. Proving our case at the Election Petition Tribunal with the data analysis and report from ZACRAC was indeed valuable to our success at trial. Pleasure working with them.",
  },
  {
    name: "Ifeanyi",
    image: "/review/reviewer3.png",
    role: "Founder, Gidi Ferry.",
    content:
      "Our initial idea was to introduce eco-friendly buses (electric vehicles) but ZACRAC helped us unlock insight through their market research service. They conducted surveys and interviews with commuters and regulators in Lagos State and found out that the waterways are largely untapped. Gidi Ferry was birthed from this insight, our startup cost was considerably lower than our initial budget. Business has been good.",
  },
  {
    name: "Abimbola Kafilat",
    image: "/review/reviewer4.png",
    role: "Director, Bimkat Palace.",
    content:
      " ZACRAC sat down with our customers and conducted a series of Focus Group Discussions and interviews with them to understand why they buy spices, their household dynamics, and the factors that influence their purchase decisions. We used the insight to adjust our packaging and pricing, and sales have been up since then. Good value for money, and highly recommended.",
  },
  {
    name: "Obiora Okpala",
    image: "/review/reviewer5.png",
    role: "Co-founder, Porter Express.",
    content:
      "Glad we invested in conducting market research before launching, the cost outweighs the benefit. ZACRAC helped us understand our target customers, identify gaps in the market, and understand competitors in the logistics space. They are a highly experienced, and professional market research agency. Data quality was top-notch, and their methodology was straightforward yet effective.",
  },
  {
    name: "Bobby",
    image: "/review/reviewer6.png",
    role: "Dragnet.",
    content:
      "We've worked with ZACRAC on multiple projects and their knowledge and expertise in data are admirable. ZACRAC helped us to leverage data and analytics during the development of some of our products- from data source identification to data collection, and analytics. They delivered actionable insight that helped us understood the customers better and what they want. If you are serious about using data to make better decisions, use ZACRAC, they know what they are doing.",
  },
]);

const handleClick = () => {
  showFormModal.value = true;
};

useHead({
  title:
    "ZACRAC | Research, Data Collection, and Intelligence Service Provider",
  meta: [
    {
      key: "robots",
      name: "robots",
      content: "index,follow",
    },
    {
      id: "og:site_name",
      name: "og:site_name",
      content: "Zacrac",
    },
    {
      id: "description",
      name: "description",
      content:
        "Zacrac is a data analytics company helping individuals and organisations make better decision using data through analysis, survey, and analytics as a service.",
    },
    {
      id: "og:description",
      name: "og:description",
      content:
        "Zacrac is a data analytics company helping individuals and organisations make better decision using data through analysis, survey, and analytics as a service.",
    },
    {
      id: "twitter:description",
      name: "twitter:description",
      content:
        "Zacrac is a data analytics company helping individuals and organisations make better decision using data through analysis, survey, and analytics as a service.",
    },
    {
      id: "og:type",
      name: "og:type",
      content: "website",
    },
    {
      id: "twitter:title",
      name: "twitter:title",
      content: "Zacrac - Market research and data science company",
    },
    {
      id: "og:title",
      name: "og:title",
      content: "Zacrac - Market research and data science company",
    },
    {
      id: "twitter:image",
      name: "twitter:image",
      content: "https://zacrac.com/assets/img/zac-life.576662de.jpg",
    },
    {
      id: "og:image",
      name: "og:image",
      content: "https://zacrac.com/assets/img/zac-life.576662de.jpg",
    },
    {
      id: "og:image:secure_url",
      name: "og:image:secure_url",
      content: "https://zacrac.com/assets/img/zac-life.576662de.jpg",
    },
    {
      id: "og:image:width",
      name: "og:image:width",
      content: "500",
    },
    {
      id: "og:image:height",
      name: "og:image:height",
      content: "500",
    },
    {
      id: "og:url",
      name: "og:url",
      content: "https://zacrac.com/",
    },
    {
      id: "twitter:url",
      name: "twitter:url",
      content: "https://zacrac.com/",
    },
    {
      id: "twitter:card",
      name: "twitter:card",
      content: "summary_large_image",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://www.zacrac.com/#home",
        name: "Zacrac",
        url: "https://www.zacrac.com/",
        address: [
          {
            "@type": "PostalAddress",
            addressLocality: "Akure",
            addressRegion: "Ondo",
            addressCountry: "Nigeria",
            postalCode: "320224",
            streetAddress:
              "2nd Floor, Sovereign Trust Insurance Building, Alagbaka, Akure 320224, Ondo",
          },
          {
            "@type": "PostalAddress",
            addressLocality: "New York city",
            addressRegion: "New York",
            addressCountry: " United States of America",
            postalCode: "10016",
            streetAddress: "69 Madison Ave, Ste 2618, New York YK, 10016",
          },
        ],
        logo: "/logo_blue.png",
        description:
          "Zacrac goes beyond data, offering market research, business intelligence, and analytics. Your growth partner for unlocking insights, refining user research, and fueling data-driven development.",
        sameAs: [
          "https://web.facebook.com/ZacracHQ",
          "https://www.linkedin.com/company/zacrachq/",
          "https://youtube.com/@zacraclearning7468",
          "https://twitter.com/ZacracHQ",
          "https://www.zacraclearning.com/",
          "https://www.crunchbase.com/organization/zacrac-learning",
          "https://techpoint.africa/2021/11/15/zacrac-learning-launches-an-edtech-platform-to-help-learners-acquire-data-science-analytics-skills-and-connect-them-with-internship/",
        ],
      } as any),
    } as any,
  ],
});
</script>
