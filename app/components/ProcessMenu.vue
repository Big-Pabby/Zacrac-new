<template>
  <div class="drop-down-holder hidden">
    <div
      class="w-[390px] p-5 rounded-[12px] bg-[#c6bcbc4d] absolute backdrop-blur-[34px] -top-[5px] left-1/2 -translate-x-1/2"
    >
      <div class="max-h-[400px] overflow-y-auto">
        <div
          v-for="(tem, index) in links"
          :key="index"
          class="relative px-[10px] py-[4px] mb-2 cursor-pointer group"
        >
          <div
            @click="toggleDropdown(index)"
            class="hover:text-primary flex gap-4 hover:font-semibold w-full justify-between items-center"
          >
            <p>{{ tem.name }}</p>
            <i
              :class="[
                'uil uil-angle-down text-xl transition-transform duration-300',
                dropdownStates[index] ? 'rotate-180' : '',
              ]"
            ></i>
          </div>

          <div
            v-if="tem.name === 'Use Cases' && dropdownStates[index]"
            class="mt-4"
          >
            <nuxt-link
              v-for="(item, i) in use_case_links"
              :key="i"
              :to="item.link"
              class="flex gap-4 w-full items-center hover:text-primary hover:font-semibold rounded-[8px] px-[10px] py-[4px] mb-2"
            >
              <div
                class="w-[8px] h-[8px] bg-black rounded-full inline-block"
              ></div>
              <p>{{ item.name }}</p>
            </nuxt-link>
          </div>

          <div
            v-else-if="
              tem.name === 'Market Intelligence' && dropdownStates[index]
            "
            class="mt-4"
          >
            <nuxt-link
              v-for="(item, i) in market_case_links"
              :key="i"
              :to="item.link"
              class="flex gap-4 w-full items-center hover:text-primary hover:font-semibold rounded-[8px] px-[10px] py-[4px] mb-2"
            >
              <div
                class="w-[8px] h-[8px] bg-black rounded-full inline-block"
              ></div>
              <p>{{ item.name }}</p>
            </nuxt-link>
          </div>

          <div
            v-else-if="
              tem.name === 'Analytics-as-a-Service' && dropdownStates[index]
            "
            class="mt-4"
          >
            <nuxt-link
              v-for="(item, i) in analytics_case_links"
              :key="i"
              :to="item.link"
              class="flex gap-4 w-full items-center hover:text-primary hover:font-semibold rounded-[8px] px-[10px] py-[4px] mb-2"
            >
              <div
                class="w-[8px] h-[8px] bg-black rounded-full inline-block"
              ></div>
              <p>{{ item.name }}</p>
            </nuxt-link>
          </div>
          <div
            v-else-if="tem.name === 'Case Studies' && dropdownStates[index]"
            class="mt-4"
          >
            <nuxt-link
              v-for="(item, i) in case_study_links"
              :key="i"
              :to="item.link"
              class="flex gap-4 w-full h-full items-center hover:text-primary hover:font-semibold rounded-[8px] px-[10px] py-[4px] mb-2"
            >
              <div
                class="w-[8px] h-[8px] bg-black rounded-full inline-block"
              ></div>
              <p>{{ item.name }}</p>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface LinkItem {
  name: string;
  link: string;
  icon: string;
}

const props = withDefaults(
  defineProps<{
    links?: LinkItem[];
  }>(),
  {
    links: () => [
      { name: "Use Cases", link: "#", icon: "" },
      { name: "Market Intelligence", link: "#", icon: "" },
      { name: "Analytics-as-a-Service", link: "#", icon: "" },
      { name: "Case Studies", link: "#", icon: "" },
    ],
  },
);

const tab = ref(0);
const showDropDown = ref(false);
const dropdownStates = ref<Record<number, boolean>>({});

const use_case_links = ref<LinkItem[]>([
  {
    name: "Starting a New Business",
    link: "/starting-a-new-business",
    icon: "/nav-icons/material-symbols-light_business-chip-outline.svg",
  },
  {
    name: "Market Entry Strategy",
    link: "/market-entry-strategy",
    icon: "/nav-icons/fluent-mdl2_market.svg",
  },
  {
    name: "Customer Satisfaction & Loyalty",
    link: "/customer-satisfaction-and-loyalty",
    icon: "/nav-icons/ix_customer.svg",
  },
  {
    name: "Brand Positioning & Messaging",
    link: "/brand-positioning-and-messaging/",
    icon: "/nav-icons/carbon_database-messaging.svg",
  },
  {
    name: "Competition Analysis ",
    link: "/competition-analysis",
    icon: "/nav-icons/fluent_data-area-20-regular.svg",
  },
]);

const market_case_links = ref<LinkItem[]>([
  {
    name: "Competition Monitoring",
    link: "/competition-monitoring",
    icon: "/nav-icons/material-symbols-light_business-chip-outline.svg",
  },
  {
    name: "Industry Trend Analysis",
    link: "/industry-trend-analysis",
    icon: "/nav-icons/fluent-mdl2_market.svg",
  },
  {
    name: "Risk Management",
    link: "/risk-management",
    icon: "/nav-icons/ix_customer.svg",
  },
  {
    name: "Strategic Planning",
    link: "/strategic-planning",
    icon: "/nav-icons/carbon_database-messaging.svg",
  },
]);

const analytics_case_links = ref<LinkItem[]>([
  {
    name: "Business Intelligence and Reporting",
    link: "/business-intelligence-and-reporting",
    icon: "/nav-icons/material-symbols-light_business-chip-outline.svg",
  },
  {
    name: "Sales Performance Analysis",
    link: "/sales-performance-analysis",
    icon: "/nav-icons/fluent-mdl2_market.svg",
  },
  {
    name: "Customer Segmentation and Targeting",
    link: "/customer-segmentation-and-targeting",
    icon: "/nav-icons/ix_customer.svg",
  },
  {
    name: "Supply Chain Optimization",
    link: "/supply-chain-optimization",
    icon: "/nav-icons/carbon_database-messaging.svg",
  },
  {
    name: "Operational Efficiency ",
    link: "/operational-efficiency",
    icon: "/nav-icons/fluent_data-area-20-regular.svg",
  },
  {
    name: "Employee Performance ",
    link: "/employee-performance",
    icon: "/nav-icons/fluent_data-area-20-regular.svg",
  },
]);

const case_study_links = ref<LinkItem[]>([
  {
    name: "Logistics",
    link: "/case-studies/logistic",
    icon: "/nav-icons/material-symbols-light_business-chip-outline.svg",
  },
  {
    name: "FinTech",
    link: "/case-studies/fintech",
    icon: "/nav-icons/ix_customer.svg",
  },
  {
    name: "Transportation",
    link: "/case-studies/transportation",
    icon: "/nav-icons/carbon_database-messaging.svg",
  },
  {
    name: "HealthCare",
    link: "/case-studies/healthcare",
    icon: "/nav-icons/fluent_data-area-20-regular.svg",
  },
  {
    name: "Auditing",
    link: "/case-studies/auditing",
    icon: "/nav-icons/fluent_data-area-20-regular.svg",
  },
  {
    name: "Remittance",
    link: "/case-studies/remittance",
    icon: "/nav-icons/fluent_data-area-20-regular.svg",
  },
  {
    name: "Consumer Preference",
    link: "/case-studies/consumer-preference",
    icon: "/nav-icons/fluent_data-area-20-regular.svg",
  },
  {
    name: "Breverage",
    link: "/case-studies/breverage-industry",
    icon: "/nav-icons/fluent_data-area-20-regular.svg",
  },
]);

const showTab = (newTab: number) => {
  tab.value = newTab;
};

const toggleDropdown = (index: number) => {
  dropdownStates.value[index] = !dropdownStates.value[index];
};
</script>
