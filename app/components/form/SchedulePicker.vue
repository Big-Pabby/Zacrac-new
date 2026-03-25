<template>
  <div class="form-group schedule-group">
    <label :for="dateId">
      <i class="uil uil-calendar-alt"></i>
      {{ label }}
    </label>
    <div class="schedule-inputs">
      <input
        :id="dateId"
        v-model="dateModel"
        type="date"
        :required="required"
        :min="minDate"
      />
      <input
        :id="timeId"
        v-model="timeModel"
        type="time"
        :required="required"
      />
    </div>
    <p class="schedule-hint">
      {{ hintText }}
    </p>
  </div>
</template>

<script>
export default {
  name: "SchedulePicker",
  props: {
    label: {
      type: String,
      default: "Schedule Post",
    },
    dateId: {
      type: String,
      default: "scheduledDate",
    },
    timeId: {
      type: String,
      default: "scheduledTime",
    },
    dateValue: {
      type: String,
      default: "",
    },
    timeValue: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
    hintText: {
      type: String,
      default: "Post will be published automatically at the scheduled time",
    },
  },
  computed: {
    minDate() {
      const today = new Date();
      return today.toISOString().split("T")[0];
    },
    dateModel: {
      get() {
        return this.dateValue;
      },
      set(value) {
        this.$emit("update:dateValue", value);
      },
    },
    timeModel: {
      get() {
        return this.timeValue;
      },
      set(value) {
        this.$emit("update:timeValue", value);
      },
    },
  },
};
</script>

<style scoped>
.form-group {
  margin-bottom: 20px;
}

.schedule-group label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  margin-bottom: 12px;
}

.schedule-group label i {
  font-size: 16px;
  color: #7d37d8;
}

.schedule-inputs {
  display: flex;
  gap: 12px;
}

.schedule-inputs input {
  flex: 1;
  padding: 12px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  font-size: 14px;
  color: #1a1a2e;
  background: white;
  transition: all 0.2s ease;
}

.schedule-inputs input:focus {
  outline: none;
  border-color: #7d37d8;
  box-shadow: 0 0 0 3px rgba(125, 55, 216, 0.1);
}

.schedule-hint {
  font-size: 12px;
  color: #6b7280;
  margin-top: 8px;
}
</style>
