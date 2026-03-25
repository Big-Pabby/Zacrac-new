<template>
  <div>
    <div class="flex items-center gap-4">
      <button
        class="w-[32px] h-[32px] md:flex hidden bg-white p-[6px] items-center rounded-full border-[1px] justify-center border-[#EBEBEB] text-[#3B3B3F]"
        :disabled="currentPage == 1"
        @click="prevPage"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <div
        class="bg-secondary shadow-sm border border-[#DDDDDD] rounded-[16px] p-[32px] flex-1"
        v-for="(item, index) in paginate"
        :key="index"
      >
        <h1 class="md:text-3xl text-xl pb-12 text-white">
          {{ item.content }}
        </h1>
        <div class="flex items-center gap-4">
          <img class="w-12 h-12 rounded-full" :src="item.image" alt="" />
          <div class="flex-1">
            <p class="font-medium text-white">{{ item.name }}</p>
            <p class="text-sm italic text-white">{{ item.role }}</p>
          </div>
        </div>
      </div>
      <button
        class="w-[32px] h-[32px] md:flex hidden bg-white items-center rounded-full p-[6px] border-[1px] justify-center border-[#EBEBEB] text-[#3B3B3F]"
        :disabled="currentPage >= totalPages"
        @click="nextPage"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
    <div class="mt-8 flex justify-center flex-wrap items-center gap-4">
      <div class="flex gap-4 flex-wrap">
        <button
          v-for="(pageNumber, index) in totalPages"
          :key="index"
          class="dot rounded-full bg-[#D9D9D9]"
          :class="{ 'dot-selected': currentPage === pageNumber }"
          @click="setPage(pageNumber)"
        ></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["items"],
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 1,
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
