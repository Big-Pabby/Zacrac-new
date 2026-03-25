<template>
  <div class="">
    <!-- End Popup Modal -->
    <div
      class="bg-[#FEF0E9] min-h-screen pt-[100px] pb-28 bg-cover bg-center"
      :style="{ backgroundImage: `url(/lines-hero.svg)` }"
      data-aos="fade-up"
    >
      <div
        class="text-dark w-full px-5 lg:px-20 md:gap-y-5 flex justify-between items-center"
      >
        <div
          class="md:w-8/12 flex flex-col items-center justify-center mx-auto w-full"
        >
          <div
            class="rounded-full text-[15px] border-[0.5px] mb-4 border-[#F26B2173] px-[16px] py-[8px]"
          >
            ✨ Data & Insights. Better Decisions.📈
          </div>
          <h1
            class="md:text-6xl text-[#000005] text-3xl text-center font-semibold mb-5 w-full"
          >
            Professional Research, and Data Collection Service Provider
          </h1>
          <p class="w-full md:w-10/12 mx-auto leading-6 text-center text-lg">
            We provide organizations with research, and data-backed insights to
            eliminate guesswork, reduce risk, and uncover opportunities.
          </p>
          <div class="flex md:flex-row flex-col mt-8 mb-4 gap-4 justify-center">
            <button
              @click="handleClick"
              class="bg-secondary py-[14px] px-[16px] rounded-[8px] text-white"
            >
              Contact Us
            </button>
            <a
              href="mailto:sales@zacrac.com"
              target="_blank"
              class="bg-[#000005] py-[14px] px-[16px] rounded-[8px] text-white"
            >
              Explore Solutions
            </a>
          </div>
        </div>
      </div>
      <div
        class="md:w-8/12 my-12 w-full mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4"
      >
        <div class="text-center">
          <div
            class="border-[1px] rounded-full inline-block border-[#DEDEDF] bg-white py-[8px] px-[32px]"
          >
            <img src="/icons/icon1.svg" alt="" />
          </div>
          <p class="font-bold text-lg mb-2 text-[#3B3B3F]">
            Data-Driven Decisions
          </p>
          <p class="text-[15px] font-medium text-[#757578]">
            Trusted by leading organizations to collect, and transform data into
            strategic insights.
          </p>
        </div>
        <div class="text-center">
          <div
            class="border-[1px] rounded-full inline-block border-[#DEDEDF] bg-white py-[8px] px-[32px]"
          >
            <img src="/icons/icon3.svg" alt="" />
          </div>
          <p class="font-bold text-lg mb-2 text-[#3B3B3F]">Proven Expertise</p>
          <p class="text-[15px] font-medium text-[#757578]">
            Over a decade of experience delivering professional research, data
            collection, and data analytics services.
          </p>
        </div>
        <div class="text-center">
          <div
            class="border-[1px] rounded-full inline-block border-[#DEDEDF] bg-white py-[8px] px-[32px]"
          >
            <img src="/icons/icon8.svg" alt="" />
          </div>
          <p class="font-bold text-lg mb-2 text-[#3B3B3F]">
            Innovative Solutions
          </p>
          <p class="text-[15px] font-medium text-[#757578]">
            Cutting-edge research, data collection, and data analytics services
            tailored to your organization's needs.
          </p>
        </div>
        <div class="text-center">
          <div
            class="border-[1px] rounded-full inline-block border-[#DEDEDF] bg-white py-[8px] px-[32px]"
          >
            <img src="/icons/icon2.svg" alt="" />
          </div>
          <p class="font-bold text-lg mb-2 text-[#3B3B3F]">
            Measurable Results
          </p>
          <p class="text-[15px] font-medium text-[#757578]">
            Boost your growth and performance with our data-driven strategies.
          </p>
        </div>
      </div>
    </div>
    <div class="px-5 md:px-20 bg-primary w-full py-16" data-aos="fade-up">
      <div
        class="md:w-8/12 flex flex-col items-center justify-center mx-auto w-full"
      >
        <div
          class="rounded-full text-[#3B3B3F] text-center bg-[#E6E6F0] text-[15px] border-[0.5px] mb-4 border-primary px-[16px] py-[8px]"
        >
          ✨ WHY HUNDREDS OF THOUSANDS TRUST US
        </div>
        <h2
          class="text-white md:text-left text-center font-bold md:text-4xl text-3xl mb-8"
        >
          Your Reliable Partner for Data, <br />
          Analytics, and Intelligence.
        </h2>
      </div>
      <div
        class="md:w-10/12 mx-auto w-full rounded-[8px] overflow-hidden flex md:flex-row flex-col-reverse items-stretch"
      >
        <div class="md:w-6/12 bg-white px-8 py-12">
          <div class="flex items-start gap-2 mb-4">
            <span>✨</span>
            <p class="text-lg text-[#757578] font-medium">
              ZACRAC is a team of experienced Market Researchers, Data Analysts,
              Data Scientists, and Consultants dedicated to helping businesses
              like yours thrive.
            </p>
          </div>
          <div class="flex items-start gap-2 mb-4">
            <span>✨</span>
            <p class="text-lg text-[#757578] font-medium">
              We combine cutting-edge methodologies with deep industry expertise
              to deliver unparalleled market insights.
            </p>
          </div>
          <div class="flex items-start gap-2 mb-4">
            <span>✨</span>
            <p class="text-lg text-[#757578] font-medium">
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
    <div
      class="px-5 md:px-20 bg-secondary w-full py-16 bg-cover bg-center"
      :style="{ backgroundImage: `url(/solution-bg.svg)` }"
      data-aos="fade-up"
    >
      <div
        class="md:w-8/12 flex flex-col items-center md:justify-center justify-start mx-auto w-full"
      >
        <div
          class="rounded-full text-[15px] text-[#3B3B3F] bg-[#FFF0E6] border-[0.5px] mb-4 border-[#F26B2173] px-[16px] py-[8px]"
        >
          SUITE OF SOLUTIONS
        </div>
        <h1
          class="md:text-4xl text-white text-2xl md:text-center text-left font-semibold mb-5 w-full"
        >
          Comprehensive Data Services to Drive Your Organization Forward
        </h1>
        <p
          class="w-full text-[#EBEBEB] leading-6 md:text-center text-left text-lg"
        >
          At Zacrac, we offer a range of tailored data services designed to
          unlock valuable insights and propel your organization towards success.
          Explore our services below to see how we can help your business
          thrive.
        </p>
      </div>
      <div
        class="md:w-10/12 mx-auto grid md:grid-cols-2 grid-cols-1 gap-8 mt-12"
      >
        <div
          class="rounded-[16px] relative bg-white p-[24px]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <img src="/icons/icon6.png" class="mb-8" alt="" />
          <h4 class="text-2xl text-bold text-[#3B3B3F] mb-4">
            Market Research
          </h4>
          <p class="text-lg font-medium text-[#757578] mb-16">
            Uncover hidden opportunities and understand your customers deeply
            via primary research through Surveys, Interviews, Focus Groups etc.
            We provide actionable insights into market dynamics, and customer
            behavior to fuel your strategic decisions.
          </p>
          <nuxt-link
            to="/market-research"
            class="py-[14px] px-[16px] border-[1px] border-[#757578] rounded-[8px] text-[15px] font-medium text-[#1C1C21] absolute left-[24px] bottom-[24px]"
          >
            Learn more
          </nuxt-link>
        </div>
        <div
          class="rounded-[16px] relative bg-white p-[24px]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img src="/icons/icon4.png" class="mb-8" alt="" />
          <h4 class="text-2xl text-bold text-[#3B3B3F] mb-4">
            Market Intelligence
          </h4>
          <p class="text-lg font-medium text-[#757578] mb-16">
            Stay ahead of the curve. We deliver ongoing market analysis,
            competitor insights, and industry trends, empowering you to
            anticipate change and seize new opportunities.
          </p>
          <nuxt-link
            to="/market-intelligence"
            class="py-[14px] px-[16px] border-[1px] border-[#757578] rounded-[8px] text-[15px] font-medium text-[#1C1C21] absolute left-[24px] bottom-[24px]"
          >
            Learn more
          </nuxt-link>
        </div>
        <div
          class="rounded-[16px] relative bg-white p-[24px]"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <img src="/icons/icon5.png" class="mb-8" alt="" />
          <h4 class="text-2xl text-bold text-[#3B3B3F] mb-4">
            Customer Reviews & Intelligence
          </h4>
          <p class="text-lg font-medium text-[#757578] mb-16">
            Understand the voice of your customer. Using our state-of-the-heart
            customer reviews and intelligence platform, we collect and analyze
            reviews and feedback to identify areas for improvement, enhance
            customer experience, and boost brand loyalty.
          </p>
          <nuxt-link
            to="/customer-reviews"
            class="py-[14px] px-[16px] border-[1px] border-[#757578] rounded-[8px] text-[15px] font-medium text-[#1C1C21] absolute left-[24px] bottom-[24px]"
          >
            Learn more
          </nuxt-link>
        </div>
        <div
          class="rounded-[16px] relative bg-white p-[24px]"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <img src="/icons/icon7.png" class="mb-8" alt="" />
          <h4 class="text-2xl text-bold text-[#3B3B3F] mb-4">
            Analytics-as-a-Service
          </h4>
          <p class="text-lg font-medium text-[#757578] mb-16">
            Transform your data into strategic advantage. Our expert analysts
            provide on-demand insights, predictive modeling, data visualization
            and reporting to improve your business performance.
          </p>
          <nuxt-link
            to="/analytics-as-a-service"
            class="py-[14px] px-[16px] border-[1px] border-[#757578] rounded-[8px] text-[15px] font-medium text-[#1C1C21] absolute left-[24px] bottom-[24px]"
          >
            Learn more
          </nuxt-link>
        </div>
      </div>
      <div
        class="md:w-10/12 mx-auto mt-8 rounded-[16px] flex md:flex-row flex-col justify-between item-center bg-white md:p-20 p-[24px]"
      >
        <div class="md:w-4/12 w-full">
          <img src="/icons/icon5.png" class="mb-6" alt="" />
          <h4 class="text-2xl text-bold text-[#3B3B3F]">Data Strategy</h4>
        </div>
        <div
          class="md:w-8/12 w-full flex md:flex-row flex-col gap-6 md:items-center items-start"
        >
          <p class="text-lg font-medium text-[#757578]">
            Unlock the full potential of your data. We develop a customized data
            roadmap aligned with your business goals, enabling data-driven
            decision-making and sustainable growth.
          </p>
          <nuxt-link
            to="/data-strategy"
            class="min-w-[125px] py-[14px] px-[16px] border-[1px] border-[#757578] rounded-[8px] text-[15px] font-medium text-[#1C1C21]"
          >
            Learn more
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="px-5 lg:px-20 my-10 md:my-20 w-full" data-aos="fade-up">
      <div
        class="md:w-8/12 flex flex-col items-center justify-center mx-auto w-full"
      >
        <div
          class="rounded-full text-[15px] text-[#3B3B3F] bg-[#E6E6F0] border-[0.5px] mb-4 border-[#000066] px-[16px] py-[8px]"
        >
          ✨ DATA IN ACTION
        </div>
        <h1
          class="md:text-4xl text-2xl md:text-center text-left font-semibold mb-5 w-full"
        >
          Case Studies and Success Stories
        </h1>
        <p
          class="w-full text-[#4A4A4E] leading-6 md:text-center text-left text-lg"
        >
          Explore real-world examples of how our expertise has driven growth and
          innovation.
        </p>
      </div>

      <div class="md:w-10/12 w-full mx-auto mt-12">
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
