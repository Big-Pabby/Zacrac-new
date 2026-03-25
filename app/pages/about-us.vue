<template>
  <div>
    <div>
      <div class="text-dark w-full px-5 lg:px-20 mt-32">
        <div class="md:w-10/12 w-full mx-auto">
          <h1
            class="md:text-4xl lg:text-5xl lg:leading-relaxed text-center text-3xl text-left font-semibold mb-16 w-full"
          >
            Founded to help you make smarter decisions by leveraging data and
            analytics.
          </h1>
        </div>
      </div>
      <div class="lg:px-32 px-10">
        <p class="text-center">Trusted by:</p>
        <div class="py-2">
          <div class="flex flex-wrap justify-center gap-10 items-center">
            <div class="flex justify-center flex-row items-center">
              <img class="h-12" src="/logos/dragnet.png" alt="" />
            </div>
            <div class="flex justify-center flex-row items-center">
              <img class="h-12" src="/logos/bimkaf.png" alt="" />
            </div>
            <div class="flex justify-center flex-row items-center">
              <img class="h-12" src="/logos/chiken.png" alt="" />
            </div>
            <div class="flex justify-center flex-row items-center">
              <h3 class="font-bold text-lg w-full">A.Olu Ogidan & Co</h3>
            </div>
            <div class="flex justify-center flex-row items-center">
              <img class="h-12" src="/logos/porter.png" alt="" />
            </div>
            <div class="flex justify-center flex-row items-center">
              <img class="h-12" src="/logos/gidi.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="px-5 md:px-16 my-10 py-12 w-full flex-col md:flex-row flex gap-4"
    >
      <div class="bg-[#FAFAFA] md:w-1/3 p-5 rounded-md">
        <div
          class="bg-[#6B15D90D] flex justify-center items-center w-12 h-12 rounded-md"
        >
          <img src="/who.svg" alt="" />
        </div>
        <h6 class="font-medium py-3 text-xl">Who we are</h6>
        <p class="mb-5 font-light leading-6">
          We are a data company that provides data and analytic solutions for
          individuals and enterprises with the sole goal of helping them make
          smarter decisions using data. Our belief is that data is
          one-size-fit-all for all industries, and sizes of organizations-
          whatever it is you want to achieve, data can help you one way or
          another.  Even for non-profits, government agencies, and religious
          organizations, data can be leveraged extensively.
        </p>
      </div>
      <div class="bg-[#FAFAFA] md:w-1/3 p-5 rounded-md">
        <div
          class="bg-[#007DFC1A] flex justify-center items-center w-12 h-12 rounded-md"
        >
          <img src="/mission.svg" alt="" />
        </div>
        <h6 class="font-medium py-3 text-xl">Our mission</h6>
        <p class="mb-5 font-light leading-6">
          A singular mission to “help individuals and organizations make better
          decisions using data”. Though the mission is singular, we are flexible
          in our approach. Currently, we strive to achieve this mission through
          our Market Research service,
          <a href="https://zacraclearning.com/" class="text-[#007DFC]"
            >Zacrac Learning</a
          >; a learning platform for data literacy, and FeedBack; a customer
          feedback collection and analytics platform. As we continue on our
          journey, we will keep building data solutions and products, as long as
          they will help us to achieve our mission.
        </p>
      </div>
      <div class="bg-[#FAFAFA] md:w-1/3 p-5 rounded-md">
        <div
          class="bg-[#20B4BD1A] flex justify-center items-center w-12 h-12 rounded-md"
        >
          <img src="/how.svg" alt="" />
        </div>
        <h6 class="font-medium py-3 text-xl">Why we started</h6>
        <p class="mb-5 font-light leading-6">
          We love data, we understand data, we've seen data at work, and we've
          seen data help organizations build killer products and services, and
          hit unbelievable milestones. Before Zacrac, the founding team had
          experience in the data space, spanning Market Research, Consumer
          Insight, Data Analytics, Research, and Statistics. This experience
          made us fall in love more with data. We started Zacrac out of love and
          conviction that data is both today and tomorrow.  We want to help
          organizations and individuals tap into the possibilities of data.
        </p>
      </div>
    </div>
    <div class="px-5 lg:px-20 my-10 py-12 w-full bg-[#FFF6F6]">
      <div class="text-center text-dark md:w-9/12 mx-auto">
        <h2 class="text-2xl font-semibold">Zacrac in the news</h2>
        <p class="py-4 mb-6">
          Zacrac's groundbreaking data analytics work has been featured in major
          media publications and industry news outlets. Our solutions and data
          experts are recognized for driving innovation and transforming
          businesses.
        </p>
      </div>
      <div>
        <Carousel />
      </div>
    </div>
    <div class="px-5 md:px-20 my-16">
      <div class="w-full md:w-8/12 mx-auto text-center">
        <h3 class="font-medium text-xl md:text-2xl md:w-8/12 mx-auto">
          Become a Human of Zacrac.
        </h3>
        <p class="font-light text-center py-2">
          Want to join a team working at the forefront of Data software? Explore
          current positions or create yours.
        </p>
        <nuxt-link to="/" class="btn-secondary w-48 mx-auto my-2"
          >View open roles</nuxt-link
        >
      </div>
      <div class="md:flex gap-4 mt-16 w-full justify-center">
        <div
          class="md:w-1/3 w-full flex flex-col gap-4 md:mt-16 mb-5 h-[720px]"
        >
          <div class="w-full rounded-md flex-1 overflow-hidden">
            <img
              class="min-w-full h-full object-cover"
              src="/human1.png"
              alt=""
            />
          </div>
          <div class="bg-[#161616] text-white px-5 py-8 rounded-md">
            <p class="font-light leading-6">
              I'm grateful for the growth opportunities and friendly work
              culture. Training sessions have boosted my skills, and the
              camaraderie among colleagues makes work enjoyable. Looking forward
              to being part of this dynamic team.
            </p>
            <p class="pt-10">Grace Oni</p>
            <p class="text-secondary py-1">Researcher</p>
          </div>
        </div>
        <div
          class="md:w-1/3 w-full flex flex-col-reverse md:flex-col gap-4 h-[720px]"
        >
          <div class="bg-[#161616] text-white px-5 py-8 rounded-md flex-1">
            <p class="font-light leading-6">
              I'm thankful for the collaborative atmosphere here. The team's
              support has enhanced my productivity, and the open communication
              makes me feel valued. Excited to contribute more to our success.
            </p>
            <p class="pt-10">Adeola Seun</p>
            <p class="text-secondary py-1">Data analyst</p>
          </div>
          <div class="w-full rounded-md overflow-hidden flex-1.5">
            <img
              class="min-w-full h-full object-cover"
              src="/human2.png"
              alt=""
            />
          </div>
        </div>
        <div
          class="md:w-1/3 w-full hidden md:flex flex-col gap-4 md:mt-10 h-[720px]"
        >
          <div class="w-full overflow-hidden flex-1 rounded-md">
            <img
              class="min-w-full h-full object-cover"
              src="/human3.png"
              alt=""
            />
          </div>
          <div class="w-full overflow-hidden flex-1 rounded-md">
            <img
              class="min-w-full h-full object-cover"
              src="/human4.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

    <CtaSection />
  </div>
</template>

<script setup lang="ts">
import Carousel from "~/components/CarouselSection.vue";
import CtaSection from "~/components/CtaSection.vue";

useHead({
  title: "ZACRAC | About us. Our vision. Our story.",
  meta: [
    {
      key: "description",
      name: "description",
      content:
        "Founded to help you make smarter decisions by leveraging data and analytics.",
    },
    {
      key: "robots",
      name: "robots",
      content: "index,follow",
    },
    {
      property: "og:title",
      content: "Zacrac - Market research and data science company",
    },
    {
      property: "og:description",
      content:
        "Founded to help you make smarter decisions by leveraging data and analytics.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://zacrac.com/about-us",
    },
    {
      property: "og:image",
      content: "https://zacrac.com/assets/img/zac-life.576662de.jpg",
    },
    {
      property: "twitter:title",
      content: "Zacrac - Market research and data science company",
    },
    {
      property: "twitter:description",
      content:
        "Founded to help you make smarter decisions by leveraging data and analytics.",
    },
    {
      property: "twitter:card",
      content: "summary_large_image",
    },
    {
      property: "twitter:url",
      content: "https://zacrac.com/about-us",
    },
  ],
});
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
.card {
  width: 320px;
  border: 1px solid #cfdae3;
  border-radius: 16px;
  padding: 20px;
}

.pink-gradient {
  background: rgba(252, 187, 141, 0.05);
}

.trusted-card {
  width: 80px;
  height: 50px;
  padding: 0 15px;
  border-radius: 12px;
}
</style>
