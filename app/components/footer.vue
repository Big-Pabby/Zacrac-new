<template>
  <footer class="bg-primary text-white lg:px-20 px-5 py-10">
    <div
      class="flex flex-col lg:flex-row items-center justify-between lg:items-start"
    >
      <div class="flex-col lg:items-start lg:w-2/12 mb-8">
        <span class="flex justify-center lg:justify-start mb-5">
          <nuxt-link to="/">
            <img
              class="w-[200px] object-contain"
              src="/whitelogo-01-2.svg"
              alt=""
            />
          </nuxt-link>
        </span>
        <h3 class="text-white font-semibold text-md lg:text-left text-center">
          Visit US
        </h3>
        <div class="flex mt-4 lg:justify-start justify-center gap-4">
          <a
            href="https://web.facebook.com/ZacracHQ"
            target="_blank"
            class="bg-white px-[3px] rounded-[3px] w-[26px] h-[26px] flex justify-center items-center"
          >
            <Icon name="uil:facebook-f" class="text-primary" />
          </a>
          <a
            href="https://www.linkedin.com/company/zacrachq/"
            target="_blank"
            class="bg-white px-[3px] rounded-[3px] w-[26px] h-[26px] flex justify-center items-center"
          >
            <Icon name="uil:linkedin" class="text-primary" />
          </a>
          <a
            href="https://youtube.com/@zacraclearning7468"
            target="_blank"
            class="bg-white px-[3px] rounded-[3px] w-[26px] h-[26px] flex justify-center items-center"
          >
            <Icon name="uil:youtube" class="text-primary" />
          </a>
          <a
            href="https://twitter.com/ZacracHQ"
            target="_blank"
            class="bg-white px-[3px] rounded-[3px] w-[26px] h-[26px] flex justify-center items-center"
          >
            <Icon name="uil:twitter" class="text-primary" />
          </a>
        </div>
      </div>

      <div
        class="flex w-9/12 justify-between gap-y-8 md:gap-y-0 flex-col lg:flex-row items-center lg:items-start"
      >
        <div
          class="flex flex-col text-sm items-center gap-4 lg:items-start mt-5 lg:mt-0"
        >
          <p class="font-medium text-lg leading-8 mb-1">Services</p>
          <nuxt-link class="text-sm py-1 font-light" to="/market-research">
            Market Research
          </nuxt-link>

          <nuxt-link class="text-sm py-1 font-light" to="/market-intelligence">
            Market Intelligence
          </nuxt-link>
          <nuxt-link
            class="text-sm py-1 font-light"
            to="/analytics-as-a-service"
          >
            Analytics-as-a-Service
          </nuxt-link>
          <nuxt-link class="text-sm py-1 font-light" to="/customer-reviews">
            Customer Reviews and Intelligence
          </nuxt-link>
          <nuxt-link class="text-sm py-1 font-light" to="/data-strategy">
            Data Strategy
          </nuxt-link>
        </div>
        <div
          class="flex flex-col text-sm items-center gap-4 lg:items-start mt-5 lg:mt-0"
        >
          <p class="font-medium text-lg leading-8 mb-1">Process</p>
          <nuxt-link class="text-sm py-1 font-light" to="/need-assessment">
            Needs Assessment
          </nuxt-link>

          <nuxt-link class="text-sm py-1 font-light" to="/questionnaire-design">
            Questionnaire Design
          </nuxt-link>
          <nuxt-link
            class="text-sm py-1 font-light"
            to="/participant-recruitment"
          >
            Participant Recruitment
          </nuxt-link>
          <nuxt-link class="text-sm py-1 font-light" to="/data-collection">
            Fieldwork & Data Collection
          </nuxt-link>
          <nuxt-link class="text-sm py-1 font-light" to="/data-analysis">
            Data Analysis
          </nuxt-link>
        </div>

        <div
          class="flex flex-col text-sm items-center gap-4 lg:items-start mt-5 lg:mt-0"
        >
          <p class="font-medium text-lg leading-8 mb-1">Resources</p>
          <nuxt-link class="text-sm py-1 font-light" to="/blog">
            Blog
          </nuxt-link>
        </div>
        <div
          class="flex flex-col text-sm items-center gap-4 lg:items-start mt-5 lg:mt-0"
        >
          <p class="font-medium text-lg leading-8 mb-1">Legal</p>
          <nuxt-link class="text-sm py-1 font-light" to="/privacy">
            Privacy Policies
          </nuxt-link>
          <nuxt-link class="text-sm py-1 font-light" to="/terms">
            Terms & Condition
          </nuxt-link>
        </div>
        <div
          class="flex flex-col text-sm items-center gap-4 lg:items-start mt-5 lg:mt-0"
        >
          <p class="font-medium text-lg leading-8 mb-1">Company</p>
          <nuxt-link class="text-sm py-1 font-light" to="/about-us">
            About us
          </nuxt-link>

          <nuxt-link class="text-sm py-1 font-light" to="/our-coverage">
            Our coverage
          </nuxt-link>
          <nuxt-link class="text-sm py-1 font-light" to="/partnership">
            Partnership
          </nuxt-link>
          <nuxt-link class="text-sm py-1 font-light" to="/careers">
            Career
          </nuxt-link>
          <nuxt-link class="text-sm py-1 font-light" to="/about-us">
            News
          </nuxt-link>
          <nuxt-link class="text-sm py-1 font-light" to="/contact-us">
            Contact
          </nuxt-link>
        </div>
      </div>
    </div>
    <div
      class="flex items-center justify-center gap-6 mt-20 pt-6 border-t-[0.5px] border-white"
    >
      <p class="text-sm font-normal">
        &copy; Copyright 2023 All Rights Reserved
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Footer component - no complex logic needed
// Static content only
</script>
