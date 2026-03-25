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
          🚀 Business Consulting
        </div>
        <h1 class="md:text-6xl text-3xl text-center font-bold">
          Starting a New Business? Let Us Help You Succeed.
        </h1>
        <p class="font-medium text-center text-lg text-[#3B3B3F]">
          From market research to business planning, we provide comprehensive
          support to help you launch and grow your new venture with confidence.
        </p>
        <div class="flex md:flex-row flex-col gap-4 justify-center">
          <div
            @click="handleClick"
            class="bg-secondary py-[14px] px-[16px] rounded-[8px] text-white cursor-pointer"
          >
            Get Free Consultation
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

    <!-- Why Start With Us Section -->
    <div class="py-20 px-5 md:px-20">
      <div class="md:w-8/12 mx-auto text-center mb-16">
        <h2 class="text-4xl font-bold mb-6">
          Why Start Your Business Journey With Us?
        </h2>
        <p class="text-lg text-gray-600">
          Starting a new business is challenging. Our expert team provides the
          insights and guidance you need to make informed decisions from day one.
        </p>
      </div>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="p-8 border rounded-lg hover:shadow-lg transition-shadow">
          <div class="text-4xl mb-4">📊</div>
          <h3 class="text-xl font-bold mb-4">Market Validation</h3>
          <p class="text-gray-600">
            Validate your business idea with comprehensive market research and
            analysis before investing your resources.
          </p>
        </div>
        <div class="p-8 border rounded-lg hover:shadow-lg transition-shadow">
          <div class="text-4xl mb-4">📋</div>
          <h3 class="text-xl font-bold mb-4">Business Planning</h3>
          <p class="text-gray-600">
            Professional business plan development to attract investors and guide
            your growth strategy.
          </p>
        </div>
        <div class="p-8 border rounded-lg hover:shadow-lg transition-shadow">
          <div class="text-4xl mb-4">🎯</div>
          <h3 class="text-xl font-bold mb-4">Target Audience</h3>
          <p class="text-gray-600">
            Identify and understand your ideal customers to build products and
            services they actually want.
          </p>
        </div>
      </div>
    </div>

    <!-- Our Services Section -->
    <div class="py-20 px-5 md:px-20 bg-gray-50">
      <h2 class="text-4xl font-bold text-center mb-12">
        Our Business Startup Services
      </h2>
      <div class="grid md:grid-cols-2 gap-8">
        <div class="p-8 bg-white rounded-lg shadow-md">
          <h3 class="text-xl font-bold mb-4">Feasibility Studies</h3>
          <p class="text-gray-600 mb-4">
            Assess the viability of your business idea with detailed feasibility
            analysis covering market, technical, and financial aspects.
          </p>
          <ul class="list-disc list-inside text-gray-600">
            <li>Market demand analysis</li>
            <li>Financial projections</li>
            <li>Risk assessment</li>
          </ul>
        </div>
        <div class="p-8 bg-white rounded-lg shadow-md">
          <h3 class="text-xl font-bold mb-4">Market Research</h3>
          <p class="text-gray-600 mb-4">
            In-depth market research to understand your industry, competitors,
            and target customers.
          </p>
          <ul class="list-disc list-inside text-gray-600">
            <li>Industry analysis</li>
            <li>Competitor profiling</li>
            <li>Customer segmentation</li>
          </ul>
        </div>
        <div class="p-8 bg-white rounded-lg shadow-md">
          <h3 class="text-xl font-bold mb-4">Business Model Development</h3>
          <p class="text-gray-600 mb-4">
            Create a sustainable business model that outlines how your company
            will create, deliver, and capture value.
          </p>
          <ul class="list-disc list-inside text-gray-600">
            <li>Revenue model design</li>
            <li>Cost structure analysis</li>
            <li>Value proposition canvas</li>
          </ul>
        </div>
        <div class="p-8 bg-white rounded-lg shadow-md">
          <h3 class="text-xl font-bold mb-4">Go-to-Market Strategy</h3>
          <p class="text-gray-600 mb-4">
            Develop a comprehensive launch strategy to successfully enter the
            market and acquire your first customers.
          </p>
          <ul class="list-disc list-inside text-gray-600">
            <li>Marketing strategy</li>
            <li>Sales channel selection</li>
            <li>Launch timeline</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Process Section -->
    <div class="py-20 px-5 md:px-20">
      <h2 class="text-4xl font-bold text-center mb-12">
        Our Process
      </h2>
      <div class="grid md:grid-cols-4 gap-8">
        <div class="text-center">
          <div class="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
            1
          </div>
          <h3 class="text-xl font-bold mb-2">Discovery</h3>
          <p class="text-gray-600">
            We learn about your business idea, goals, and challenges.
          </p>
        </div>
        <div class="text-center">
          <div class="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
            2
          </div>
          <h3 class="text-xl font-bold mb-2">Research</h3>
          <p class="text-gray-600">
            We conduct comprehensive market and competitor research.
          </p>
        </div>
        <div class="text-center">
          <div class="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
            3
          </div>
          <h3 class="text-xl font-bold mb-2">Strategy</h3>
          <p class="text-gray-600">
            We develop a customized business strategy for your success.
          </p>
        </div>
        <div class="text-center">
          <div class="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
            4
          </div>
          <h3 class="text-xl font-bold mb-2">Execution</h3>
          <p class="text-gray-600">
            We help you implement the strategy and achieve your goals.
          </p>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <CtaSection
      ctaTitle="Ready to Start Your Business Journey?"
      ctaSubTitle="Contact us today for a free consultation and discover how we can help you build a successful business from the ground up."
    />
  </div>
</template>

<script>
export default {
  name: 'StartingNewBusiness',
  methods: {
    handleClick() {
      // This would typically open a contact form modal
      this.$router.push('/contact-us')
    },
  },
  head() {
    return {
      title: 'Starting a New Business | Zacrac',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Expert guidance for starting a new business. Market research, feasibility studies, business planning, and go-to-market strategy services.',
        },
      ],
    }
  },
}
</script>
