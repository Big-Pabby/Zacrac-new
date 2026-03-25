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
        <h1 class="md:text-6xl text-3xl text-center font-bold">
          Strategic Planning for Business Growth
        </h1>
        <p class="font-medium text-center text-lg text-[#3B3B3F]">
          Transform your data into actionable strategic insights. Our expert
          analysts help you develop comprehensive strategies that drive
          measurable business results.
        </p>
        <div class="flex md:flex-row flex-col gap-4 justify-center">
          <div
            @click="handleClick"
            class="bg-secondary py-[14px] px-[16px] rounded-[8px] text-white cursor-pointer"
          >
            Book a Consultation
          </div>
          <a
            href="mailto:sales@zacrac.com"
            target="_blank"
            class="bg-[#000005] py-[14px] px-[16px] text-center rounded-[8px] text-white"
          >
            Contact Sales
          </a>
        </div>
      </div>
    </div>

    <!-- Services Section -->
    <div class="py-20 px-5 md:px-20">
      <h2 class="text-4xl font-bold text-center mb-12">
        Our Strategic Planning Services
      </h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="p-8 border rounded-lg hover:shadow-lg transition-shadow">
          <h3 class="text-xl font-bold mb-4">Market Analysis</h3>
          <p class="text-gray-600">
            Comprehensive market research and analysis to identify opportunities
            and threats in your industry.
          </p>
        </div>
        <div class="p-8 border rounded-lg hover:shadow-lg transition-shadow">
          <h3 class="text-xl font-bold mb-4">Competitive Intelligence</h3>
          <p class="text-gray-600">
            In-depth analysis of your competitors to inform strategic
            decision-making.
          </p>
        </div>
        <div class="p-8 border rounded-lg hover:shadow-lg transition-shadow">
          <h3 class="text-xl font-bold mb-4">Growth Strategy</h3>
          <p class="text-gray-600">
            Customized growth strategies tailored to your business objectives
            and market position.
          </p>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="bg-secondary py-20 px-5 md:px-20">
      <div class="text-center">
        <h2 class="text-4xl font-bold text-white mb-6">
          Ready to Transform Your Business?
        </h2>
        <p class="text-white text-lg mb-8">
          Let us help you develop a strategic plan that drives results.
        </p>
        <div class="flex md:flex-row flex-col gap-4 justify-center">
          <div
            @click="handleClick"
            class="bg-white text-secondary py-[14px] px-[16px] rounded-[8px] cursor-pointer font-bold"
          >
            Get Started
          </div>
          <a
            href="/contact-us"
            class="bg-[#000005] py-[14px] px-[16px] text-center rounded-[8px] text-white"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StrategicPlanning',
  data() {
    return {
      showFormModal: false,
    }
  },
  methods: {
    handleClick() {
      this.showFormModal = true
    },
  },
  head() {
    return {
      title: 'Strategic Planning Services | Zacrac',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Expert strategic planning services to help your business grow. Market analysis, competitive intelligence, and growth strategies.',
        },
      ],
    }
  },
}
</script>
