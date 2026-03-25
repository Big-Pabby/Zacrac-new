<template>
  <div class="drop-down-holder hidden">
    <nuxt-link
      v-for="item in links"
      :key="item.name"
      :to="item.link"
      class="flex gap-4 w-full items-center hover:text-primary hover:font-semibold rounded-[8px] px-[10px] py-[4px] mb-2"
    >
      <div class="bg-[#6b15d90d] inline-block rounded-lg p-2">
        <img :src="item.icon" alt="" />
      </div>
      <p>{{ item.name }}</p>
    </nuxt-link>
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
      {
        name: "Market Research",
        link: "/market-research",
        icon: "/nav-icons/marketeq_research_black.svg",
      },
      {
        name: "Market Intelligence ",
        link: "/market-intelligence",
        icon: "/nav-icons/mingcute_apple-intelligence-line.svg",
      },
      {
        name: "Analytics-as-a-Service",
        link: "/analytics-as-a-service",
        icon: "/nav-icons/hugeicons_analytics-up.svg",
      },
      {
        name: "Customer Reviews and Intelligence ",
        link: "/competitor-research",
        icon: "/nav-icons/carbon_customer.svg",
      },
      {
        name: "Data Strategy ",
        link: "/data-strategy",
        icon: "/nav-icons/fluent_data-area-20-regular.svg",
      },
    ],
  },
);

const tab = ref(0);

const showTab = (newTab: number) => {
  tab.value = newTab;
};
</script>
