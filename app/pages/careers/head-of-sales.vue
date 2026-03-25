<template>
  <div>
    <div>
      <div class="px-5 md:px-36 mt-32 mb-20">
        <div
          class="bg-[#EEEFFF] text-primary flex items-center justify-center rounded-2xl w-20 h-10 py-2"
        >
          Career
        </div>
        <div class="flex justify-between items-center py-3">
          <h2 class="text-2xl md:text-4xl font-semibold">
            Head of Sales.
          </h2>
          <nuxt-link
            to="/careers/head-of-sales-form"
            class="bg-secondary text-white px-4 flex items-center rounded-md py-3"
          >
            Apply
          </nuxt-link>
        </div>
        <p class="font-light mt-2">
          We hold the belief that achieving economic prosperity is within reach,
          alongside the conviction that successful entrepreneurship in emerging
          markets can thrive without unnecessary barriers. <br />

          Our core mission revolves around ensuring widespread access to
          economic prosperity. In pursuit of this mission, we are actively
          seeking individuals who are not only the best in their fields but also
          deeply aligned with our purpose, as they play a crucial role in our
          journey to accomplish this goal.
        </p>
        <h6 class="font-medium text-lg pt-4 pb-2">Introduction</h6>
        <p class="font-light">
          Join the dynamic team at Zacrac as the Head of Sales and play a
          pivotal role in driving our revenue growth and market expansion.
          Zacrac is a cutting-edge technology company that specializes in
          innovative solutions for [mention the industry or market Zacrac
          operates in]. We're seeking a results-driven, strategic, and visionary
          sales leader to lead our sales efforts, foster strong client
          relationships, and contribute to our mission of revolutionizing
          [industry/market] through our groundbreaking products.
        </p>
        <h6 class="font-medium text-lg pt-4 pb-2">Role Description</h6>
        <p class="font-light">
          As the Head of Sales at Zacrac, you will be at the forefront of our
          business growth strategy. Your primary responsibility will be to lead
          and manage our sales team, ensuring exceptional performance and
          achievement of revenue targets. You will collaborate closely with
          cross-functional teams, including marketing, product development, and
          customer support, to drive customer satisfaction and long-term
          business success. This role requires a strategic thinker who can
          analyze market trends, identify opportunities, and develop sales
          strategies that align with Zacrac's overall objectives.
        </p>
        <h6 class="font-medium text-lg pt-4 pb-2">Responsibilities</h6>
        <ul class="list-disc pl-4 flex flex-col gap-1">
          <li class="font-light">
            Sales Strategy: Develop and execute a comprehensive sales strategy
            to drive revenue growth, market penetration, and customer
            acquisition while considering market trends, competitive landscape,
            and customer needs.
          </li>
          <li class="font-light">
            Team Leadership: Lead, mentor, and manage a high-performing sales
            team, setting clear performance expectations, providing regular
            feedback, and fostering a culture of collaboration and continuous
            improvement.
          </li>
          <li class="font-light">
            Revenue Targets: Take ownership of revenue targets and consistently
            monitor performance, adjusting strategies and tactics as necessary
            to ensure achievement of sales goals.
          </li>
          <li class="font-light">
            Client Relationships: Cultivate and nurture strong relationships
            with key clients, understanding their unique needs and challenges to
            tailor solutions that deliver exceptional value.
          </li>
          <li class="font-light">
            Market Insights: Stay abreast of industry trends, competitor
            activities, and market dynamics to identify new opportunities and
            potential areas for growth.
          </li>
          <li class="font-light">
            Sales Process Optimization: Continuously assess and refine the sales
            process to enhance efficiency, effectiveness, and customer
            experience, leveraging data-driven insights.
          </li>
          <li class="font-light">
            Cross-functional Collaboration: Collaborate closely with marketing,
            product development, and customer support teams to align strategies,
            share insights, and ensure a seamless customer journey.
          </li>
          <li class="font-light">
            Sales Reporting: Prepare and present regular sales reports and
            performance metrics to senior management, highlighting achievements,
            challenges, and recommendations for improvement.
          </li>
          <li class="font-light">
            Sales Training and Development: Foster a culture of learning within
            the sales team by providing training, coaching, and professional
            development opportunities to enhance skills and capabilities.
          </li>
        </ul>
        <nuxt-link
          to="/careers/head-of-sales-form"
          class="bg-secondary text-white px-4 flex items-center rounded-md py-3 my-5 ml-auto"
        >
          Apply
        </nuxt-link>
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
      title: "Zacrac - Head of Sales Application",
      meta: [
        {
          key: "description",
          name: "description",
          content:
            "Join the dynamic team at Zacrac as the Head of Sales and play a pivotal role in driving our revenue growth and market expansion.",
        },
        {
          key: "robots",
          name: "robots",
          content: "index,follow",
        },
        {
          key: "keywords",
          name: "keywords",
          content:
            "Join the dynamic team at Zacrac as the Head of Sales and play a pivotal role in driving our revenue growth and market expansion.",
        },
        {
          property: "og:title",
          content: "Zacrac - Market research and data science company",
          vmid: "og:title",
        },
        {
          property: "og:descrition",
          content:
            "Join the dynamic team at Zacrac as the Head of Sales and play a pivotal role in driving our revenue growth and market expansion.",
          vmid: "og:description",
        },
        {
          property: "og:type",
          content: "website",
          vmid: "og:type",
        },
        {
          property: "og:url",
          content: "https://zacrac.com/",
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
            "Join the dynamic team at Zacrac as the Head of Sales and play a pivotal role in driving our revenue growth and market expansion.",
          vmid: "og:description",
        },
        {
          property: "twitter:card",
          content: "summary_large_image",
          vmid: "og:type",
        },
        {
          property: "twitter:url",
          content: "https://zacrac.com/",
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
</style>
