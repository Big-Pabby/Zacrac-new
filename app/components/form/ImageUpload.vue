<template>
  <div class="image-section">
    <label class="section-label">
      <i class="uil uil-image"></i>
      {{ label }}
      <span v-if="required" class="required-indicator">*</span>
    </label>
    <div
      v-if="!imageUrl"
      :class="['upload-area', { loading: isLoading }]"
      @click="!isLoading && $refs.fileInput.click()"
    >
      <input
        ref="fileInput"
        @change="handleFileChange"
        type="file"
        :accept="accept"
        class="hidden"
        :required="required"
        :disabled="isLoading"
      />
      <div v-if="isLoading" class="loading-spinner">
        <div class="spinner"></div>
        <p>Uploading...</p>
      </div>
      <div v-else class="upload-content">
        <i class="uil uil-cloud-upload"></i>
        <h4>{{ uploadText }}</h4>
        <p>{{ hintText }}</p>
      </div>
    </div>
    <div v-else class="image-preview">
      <img :src="imageUrl" alt="Cover" />
      <div
        :class="['image-overlay', { disabled: isLoading }]"
        @click="!isLoading && $refs.fileInput.click()"
      >
        <div v-if="isLoading" class="spinner-small"></div>
        <div v-else>
          <i class="uil uil-camera"></i>
          <span>Change Image</span>
        </div>
      </div>
      <input
        ref="fileInput"
        @change="handleFileChange"
        type="file"
        :accept="accept"
        class="hidden"
        :disabled="isLoading"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageUpload",
  props: {
    label: {
      type: String,
      default: "Cover Image",
    },
    imageUrl: {
      type: String,
      default: null,
    },
    accept: {
      type: String,
      default: ".png, .jpg, .jpeg",
    },
    uploadText: {
      type: String,
      default: "Click to upload cover image",
    },
    hintText: {
      type: String,
      default: "PNG, JPG up to 5MB",
    },
    required: {
      type: Boolean,
      default: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleFileChange(e) {
      const file = e.target.files[0];
      if (file) {
        this.$emit("file-selected", {
          file,
          fileName: file.name,
        });
      }
    },
  },
};
</script>

<style scoped>
.image-section {
  margin-bottom: 24px;
}

.section-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  margin-bottom: 12px;
}

.section-label i {
  font-size: 18px;
  color: #7d37d8;
}

.required-indicator {
  color: #dc2626;
  font-weight: 700;
}

.upload-area {
  border: 2px dashed #e5e7eb;
  border-radius: 12px;
  padding: 40px 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  background: #fafafa;
}

.upload-area:hover:not(.loading) {
  border-color: #7d37d8;
  background: #f5f3ff;
}

.upload-area.loading {
  border-color: #7d37d8;
  background: #f5f3ff;
  cursor: not-allowed;
  opacity: 0.6;
}

.loading-spinner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.spinner {
  width: 32px;
  height: 32px;
  border: 3px solid #e5e7eb;
  border-top-color: #7d37d8;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

.loading-spinner p {
  font-size: 14px;
  color: #7d37d8;
  font-weight: 500;
}

.spinner-small {
  width: 24px;
  height: 24px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.upload-content i {
  font-size: 48px;
  color: #7d37d8;
  margin-bottom: 12px;
}

.upload-content h4 {
  font-size: 16px;
  font-weight: 600;
  color: #1a1a2e;
  margin: 0 0 8px;
}

.upload-content p {
  font-size: 13px;
  color: #6b7280;
  margin: 0;
}

.hidden {
  display: none;
}

.image-preview {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 16/9;
}

.image-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  opacity: 0;
  transition: opacity 0.2s ease;
  cursor: pointer;
}

.image-overlay.disabled {
  cursor: not-allowed;
  opacity: 1;
}

.image-preview:hover .image-overlay:not(.disabled) {
  opacity: 1;
}

.image-overlay i {
  font-size: 32px;
  color: white;
}

.image-overlay span {
  font-size: 14px;
  font-weight: 500;
  color: white;
}
</style>
