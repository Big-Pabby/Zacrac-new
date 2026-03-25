<template>
  <div>
    <div class="w-full grid grid-cols-1 gap-4">
      <div
        v-for="(item, index) in paginate"
        :key="index"
        class="relative w-full md:h-[400px] rounded-[32px] p-[32px] flex flex-col justify-end items-end"
      >
        <div
          class="absolute inset-0 bg-cover bg-center rounded-[32px]"
          :style="{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)), url(${item.image})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }"
        ></div>

        <div
          class="relative z-10 flex md:flex-row flex-col md:items-end gap-4 items-start justify-between"
        >
          <div class="md:w-7/12">
            <h4 class="text-xl text-white font-bold mb-4">{{ item.name }}</h4>
            <p class="text-white text-lg font-medium">{{ item.content }}</p>
          </div>
          <nuxt-link
            :to="item.link"
            class="bg-secondary py-[14px] px-[16px] rounded-[8px] text-white"
          >
            Learn More
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="mt-8 flex justify-between flex-wrap items-center gap-4">
      <div class="flex gap-4 flex-wrap">
        <button
          v-for="(pageNumber, index) in totalPages"
          :key="index"
          class="dot rounded-full bg-[#D9D9D9]"
          :class="{ 'dot-selected': currentPage === pageNumber }"
          @click="setPage(pageNumber)"
        ></button>
      </div>
      <div class="flex gap-8">
        <button
          class="w-[32px] h-[32px] flex items-center rounded-[4px] p-[6px] border-[0.5px] justify-center border-primary text-primary"
          :disabled="currentPage == 1"
          @click="prevPage"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </button>

        <button
          class="w-[32px] h-[32px] flex items-center rounded-[4px] p-[6px] border-[0.5px] justify-center border-primary text-primary"
          :disabled="currentPage >= totalPages"
          @click="nextPage"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 1,
      items: [
        {
          name: "Logistic",
          image: "/image-392.svg",
          content:
            "Porters Express, a courier service provider in Kuwait, aimed to position itself effectively as a new entrant in the market, and tailor its services to meet customer expectations.",
          link: "/case-studies/logistic",
        },
        {
          name: "HealthCare",
          image: "/image-1397.svg",
          content:
            "A healthcare organization seeking to understand the current and future landscape of cryptococcal meningitis (CM) and histoplasmosis (Histo) testing and patient management in Sub-Saharan Africa.",
          link: "/case-studies/healthcare",
        },
        {
          name: "FinTech",
          image: "/image-397.svg",
          content:
            "Remitly wanted to evaluate the efficiency and customer experience of its partner banks in Nigeria. They needed to ensure smooth withdrawal processes, compliance with service standards, and overall customer satisfaction. To achieve this, they required an independent assessment of their partner locations through a structured mystery audit.",
          link: "/case-studies/fintech",
        },
      ],
    };
  },
  computed: {
    totalPages() {
      if (this.items.length === 0) {
        return 1;
      } else {
        return Math.ceil(this.items.length / this.itemsPerPage);
      }
    },
    paginate() {
      const index = this.currentPage * this.itemsPerPage - this.itemsPerPage;
      return this.items.slice(index, index + this.itemsPerPage);
    },
  },
  methods: {
    setPage(pageNumber) {
      this.currentPage = pageNumber;
    },
    nextPage() {
      this.currentPage++;
    },
    prevPage() {
      this.currentPage--;
    },
  },
};
</script>

<style scoped>
.dot {
  width: 10px;
  height: 10px;
}
.dot-selected {
  background: #ff6b1e;
}
button:disabled,
button[disabled] {
  border-color: #9e9e9e;
  color: #9e9e9e;
}
</style>
