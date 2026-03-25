<template>
  <div class="px-5 lg:px-20 py-32 bg-primary line-art" data-aos="fade-up">
    <div
      class="md:w-10/12 mx-auto w-full flex flex-col justify-between items-center"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div class="md:w-7/12 mx-auto text-white text-center">
        <h2 class="md:text-6xl text-3xl font-bold">
          {{ ctaTitle }}
        </h2>
        <p class="font-light my-6">
          {{ ctaSubTitle }}
        </p>
      </div>
      <div class="">
        <button
          @click="handleClick"
          class="bg-secondary py-[14px] px-[16px] rounded-[8px] text-white"
        >
          Contact Us
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  ctaTitle?: string;
  ctaSubTitle?: string;
}>();

const emit = defineEmits<{
  click: [];
}>();

const handleClick = () => {
  emit("click");
};
</script>
