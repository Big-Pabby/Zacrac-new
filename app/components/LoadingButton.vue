<template>
  <button
    :type="type"
    :class="[buttonClass, { loading: loading }]"
    :disabled="loading || disabled"
    @click="$emit('click')"
  >
    <div v-if="loading" class="spinner-wrapper">
      <Icon name="uil:spinner-alt" class="animate-spin" :size="iconSize" />
    </div>
    <div v-else class="content-wrapper">
      <slot />
    </div>
  </button>
</template>

<script setup lang="ts">
interface Props {
  type?: "button" | "submit" | "reset";
  loading?: boolean;
  disabled?: boolean;
  iconSize?: string;
  buttonClass?: string;
}

withDefaults(defineProps<Props>(), {
  type: "button",
  loading: false,
  disabled: false,
  iconSize: "16",
  buttonClass: "",
});

defineEmits(["click"]);
</script>

<style scoped>
.spinner-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.content-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
}

button.loading {
  pointer-events: none;
  opacity: 0.8;
}
</style>
