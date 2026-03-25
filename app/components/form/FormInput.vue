<template>
  <div class="form-group">
    <label :for="id">
      <i v-if="icon" :class="icon"></i>
      {{ label }}
      <span v-if="required" class="required-indicator">*</span>
    </label>
    <input
      :id="id"
      :value="modelValue"
      :type="type"
      :required="required"
      :placeholder="placeholder"
      :min="min"
      @input="$emit('update:modelValue', $event.target.value)"
      @change="$emit('change', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "FormInput",
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
    type: {
      type: String,
      default: "text",
    },
    icon: {
      type: String,
      default: null,
    },
    required: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "",
    },
    min: {
      type: String,
      default: null,
    },
  },
  emits: ["update:modelValue", "change"],
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

.form-group input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  font-size: 14px;
  color: #1a1a2e;
  background: white;
  transition: all 0.2s ease;
}

.form-group input:focus {
  outline: none;
  border-color: #7d37d8;
  box-shadow: 0 0 0 3px rgba(125, 55, 216, 0.1);
}

.form-group input::placeholder {
  color: #9ca3af;
}
</style>
