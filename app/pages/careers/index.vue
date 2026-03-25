<template>
  <div>
    <div>
      <div class="px-5 md:px-20 mt-32 mb-20">
        <div class="w-full text-center">
          <h3 class="font-medium text-2xl md:text-3xl lg:text-5xl mx-auto">
            Become a Human of Zacrac.
          </h3>
          <p class="font-light text-center py-3 md:w-7/12 mx-auto">
            Want to join a team working at the forefront of Data software?
            Explore current positions or create yours.
          </p>
          <nuxt-link to="#open-roles" class="btn-secondary w-44 mx-auto my-2"
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
                camaraderie among colleagues makes work enjoyable. Looking
                forward to being part of this dynamic team.
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

      <div class="px-5 md:px-20 my-10 py-12 w-full bg-[#FFF6F6]">
        <h2 class="text-2xl font-semibold my-5">Work Happier With Us</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          <div class="">
            <div
              class="w-12 h-12 rounded-md flex justify-center items-center bg-[#007DFC1A]"
            >
              <img src="/company/suitcase-fill.png" alt="" />
            </div>
            <p class="font-medium text-lg mt-3">Flexible Working Style</p>
            <p class="font-light py-2">
              We operate in a hybrid mode, combining both remote and onsite
              work. This collaborative approach enables us to work closely with
              teammates and create remarkable experiences.
            </p>
          </div>
          <div class="">
            <div
              class="w-12 h-12 rounded-md flex justify-center items-center bg-[#72B8001A]"
            >
              <img src="/company/hospital-line.png" alt="" />
            </div>
            <p class="font-medium text-lg mt-3">Inclusive Health Package</p>
            <p class="font-light py-2">
              Your well-being matters to us, which is why we provide dental and
              vision benefits that extend to both you and your family.
            </p>
          </div>
          <div class="">
            <div
              class="w-12 h-12 rounded-md flex justify-center items-center bg-[#F973161A]"
            >
              <img src="/company/book-open.png" alt="" />
            </div>
            <p class="font-medium text-lg mt-3">Learn And Grow</p>
            <p class="font-light py-2">
              We support your career growth through continuous mentorship and
              facilitate your attendance at events, allowing you to expand your
              professional network.
            </p>
          </div>
          <div class="">
            <div
              class="w-12 h-12 rounded-md flex justify-center items-center bg-[#6B15D91A]"
            >
              <img src="/company/thumb-up-line.png" alt="" />
            </div>
            <p class="font-medium text-lg mt-3">Balanced Working Life</p>
            <p class="font-light py-2">
              Our vacation policy is flexible and open, with a suggested XYZ
              weeks per year. Take the time you need to recharge whenever it
              suits you.
            </p>
          </div>
          <div class="">
            <div
              class="w-12 h-12 rounded-md flex justify-center items-center bg-[#F02E2E1A]"
            >
              <img src="/company/earth-fill.png" alt="" />
            </div>
            <p class="font-medium text-lg mt-3">Diversity and Inclusion</p>
            <p class="font-light py-2">
              Our power stems from a team composed of individuals with diverse
              backgrounds, fostering an inclusive culture where every member is
              valued and respected.
            </p>
          </div>
          <div class="">
            <div
              class="w-12 h-12 rounded-md flex justify-center items-center bg-[#20B4BD1A]"
            >
              <img src="/company/users.svg" alt="" />
            </div>
            <p class="font-medium text-lg mt-3">
              Transparent and Inclusive Culture
            </p>
            <p class="font-light py-2">
              We are a transparent company where the founders and management run
              the company transparently. Employees are free to ask questions,
              voice their opinions, and just be real.
            </p>
          </div>
        </div>
      </div>
      <div class="px-5 md:px-20 my-20 text-center" id="open-roles">
        <h2 class="text-2xl font-semibold mt-5">Open Positions</h2>
        <p class="font-light mt-2">
          We're currently looking for help in the following areas
        </p>
        <div class="flex flex-col justify-center gap-4 my-12 md:w-7/12 mx-auto">
          <div
            class="bg-[#FAFAFA] flex justify-between item-center px-5 rounded-md py-4"
          >
            <div class="text-left">
              <p class="text-lg font-medium">Head of sales</p>
              <p class="font-light">Akure, Ondo state</p>
            </div>
            <button
              class="border border-secondary cursor-not-allowed opacity-50 text-secondary py-1 px-4 flex items-center rounded-md text-secondary"
            >
              Closed
            </button>
            <!-- <nuxt-link
              to="/careers/head-of-sales"
              class="border border-secondary cursor-not-allowed opacity-50 text-secondary py-1 px-4 flex items-center rounded-md text-secondary"
              >Closed</nuxt-link
            > -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {},
  head() {
    return {
      title: "Zacrac | Become a Human of Zacrac.",
      meta: [
        {
          key: "description",
          name: "description",
          content:
            "Zacrac helps individuals and organisations make better decision using data through analysis, survey, and training.",
        },
        {
          key: "robots",
          name: "robots",
          content: "index,follow",
        },

        {
          property: "og:title",
          content: "Zacrac - Market research and data science company",
          vmid: "og:title",
        },
        {
          property: "og:descrition",
          content:
            "Zacrac helps individuals and organisations make better decision using data through analysis, survey, and training.",
          vmid: "og:description",
        },
        {
          property: "og:type",
          content: "website",
          vmid: "og:type",
        },
        {
          property: "og:url",
          content: "https://zacrac.com/careers",
          vmid: "og:url",
        },
        {
          property: "og:image",
          content: "https://zacrac.com/assets/img/zac-life.576662de.jpg",
          vmid: "og:image",
        },
        {
          property: "twitter:title",
          content: "Zacrac - Market research and data science company",
          vmid: "og:title",
        },
        {
          property: "twitter:descrition",
          content:
            "Zacrac helps individuals and organisations make better decision using data through analysis, survey, and training.",
          vmid: "og:description",
        },
        {
          property: "twitter:card",
          content: "summary_large_image",
          vmid: "og:type",
        },
        {
          property: "twitter:url",
          content: "https://zacrac.com/careers",
          vmid: "og:url",
        },
        {
          property: "og:image",
          content: "https://zacrac.com/assets/img/zac-life.576662de.jpg",
          vmid: "og:image",
        },
      ],
    };
  },
};
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
</style>
