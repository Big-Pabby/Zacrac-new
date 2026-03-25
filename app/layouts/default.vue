<template>
  <div>
    <PublicHeader
      :isOpen="isOpen"
      :hidden="hidden"
      :services="services"
      :solutions="solutions"
      :forYou="forYou"
      :products="products"
      :useCase="useCase"
      :toggleMenu="toggleMenu"
      :mobilenavDrop="mobilenavDrop"
      :toggleShowDropDown="toggleShowDropDown"
      :openbtn="openbtn"
      :closebtn="closebtn"
    />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
const isOpen = ref(false);
const hidden = ref(true);
const services = ref(false);
const solutions = ref(false);
const forYou = ref(false);
const products = ref(false);
const useCase = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const mobilenavDrop = (type: string) => {
  switch (type) {
    case "services":
      services.value = !services.value;
      break;
    case "solutions":
      solutions.value = !solutions.value;
      break;
    case "forYou":
      forYou.value = !forYou.value;
      break;
    case "products":
      products.value = !products.value;
      break;
    case "use-cases":
      useCase.value = !useCase.value;
      break;
  }
};

const toggleShowDropDown = () => {
  // Handle dropdown toggle
};

const openbtn = () => {
  hidden.value = false;
};

const closebtn = () => {
  hidden.value = true;
};
</script>
