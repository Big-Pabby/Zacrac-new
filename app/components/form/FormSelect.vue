<template>
  <div class="form-group">
    <label :for="id">
      <i v-if="icon" :class="icon"></i>
      {{ label }}
      <span v-if="required" class="required-indicator">*</span>
    </label>
    <select
      :id="id"
      :value="modelValue"
      :required="required"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "FormSelect",
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      required: true,
    },
    icon: {
      type: String,
      default: null,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue"],
};
</script>

<style scoped>
.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  margin-bottom: 8px;
}

.form-group label i {
  font-size: 16px;
  color: #7d37d8;
}

.required-indicator {
  color: #dc2626;
  font-weight: 700;
  margin-left: 2px;
}

.form-group select {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  font-size: 14px;
  color: #1a1a2e;
  background: white;
  cursor: pointer;
  transition: all 0.2s ease;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%237b8791' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  padding-right: 40px;
}

.form-group select:focus {
  outline: none;
  border-color: #7d37d8;
  box-shadow: 0 0 0 3px rgba(125, 55, 216, 0.1);
}
</style>
