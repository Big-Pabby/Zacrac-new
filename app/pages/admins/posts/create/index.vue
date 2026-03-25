<template>
  <div class="create-page">
    <div class="container">
      <form id="post-form" @submit.prevent="publish">
        <!-- Header Section -->
        <div class="page-header">
          <div class="header-left">
            <div @click="$router.go(-1)" class="back-button">
              <Icon name="uil:arrow-left" />
            </div>
            <div class="header-title">
              <h2>Create New Post</h2>
              <div class="breadcrumb">
                <span @click="$router.push('/admins/posts')">Posts</span>
                <Icon name="uil:angle-right" />
                <span class="current">New Post</span>
              </div>
            </div>
          </div>
          <div class="header-actions">
            <button type="button" class="btn-schedule" @click="toggleSchedule">
              <Icon :name="isScheduled ? 'uil:check' : 'uil:clock'" />
              <span>{{ isScheduled ? "Scheduled" : "Schedule" }}</span>
            </button>
            <LoadingButton
              type="submit"
              button-class="btn-publish"
              :loading="submit"
            >
              <Icon :name="isScheduled ? 'uil:calendar-alt' : 'uil:send'" />
              <span>{{ isScheduled ? "Schedule Post" : "Publish Now" }}</span>
            </LoadingButton>
          </div>
        </div>

        <div class="form-grid">
          <!-- Left Column - Image & SEO -->
          <div class="form-column">
            <!-- Featured Image Card -->
            <div class="form-card">
              <h3 class="card-title">
                <Icon name="uil:image" />
                Featured Image
              </h3>
              <FormImageUpload
                label="Featured Image"
                v-model:imageUrl="blog.imageUrl"
                :required="true"
                :isLoading="imageLoading"
                @file-selected="handleFeaturedImageSelected"
              />
              <!-- <FormInput
                id="featuredImageAlt"
                label="Image Alt Text"
                v-model="blog.featuredImageAlt"
                icon="uil uil-info-circle"
                placeholder="Describe the image for accessibility"
              /> -->
            </div>

            <!-- SEO Settings Card -->
            <div class="form-card">
              <h3 class="card-title">
                <Icon name="uil:search" />
                SEO Settings
              </h3>
              <FormInput
                id="blogSlug"
                label="URL Slug"
                v-model="blog.slug"
                icon="uil uil-link"
                placeholder="e.g., my-blog-post"
                @change="onSlugInput"
              />
              <div class="form-group">
                <label for="blogExcerpt">
                  <Icon name="uil:text" />
                  Excerpt
                </label>
                <textarea
                  id="blogExcerpt"
                  v-model="blog.excerpt"
                  rows="4"
                  placeholder="Brief summary for blog listing page (150-160 characters recommended)"
                ></textarea>
              </div>
            </div>
          </div>

          <!-- Right Column - Content Details -->
          <div class="form-column">
            <!-- Basic Info Card -->
            <div class="form-card">
              <h3 class="card-title">
                <Icon name="uil:file-edit-alt" />
                Basic Information
              </h3>
              <FormInput
                id="blogTitle"
                label="Blog Title"
                v-model="blog.title"
                icon="uil uil-heading"
                placeholder="Enter your blog title"
                :required="true"
              />
              <div class="form-row">
                <FormInput
                  id="blogAuthor"
                  label="Author"
                  v-model="blog.author"
                  icon="uil uil-user"
                  placeholder="Enter author name"
                  :required="true"
                />
                <FormSelect
                  id="blogCategory"
                  label="Category"
                  v-model="blog.category"
                  icon="uil uil-folder"
                  :options="categoryOptions"
                  :required="true"
                />
              </div>
              <FormInput
                id="blogTags"
                label="Tags"
                v-model="blog.tags"
                icon="uil uil-tag"
                placeholder="Enter tags separated by commas"
              />
            </div>

            <!-- Publishing Card -->
            <div class="form-card">
              <h3 class="card-title">
                <Icon name="uil:schedule" />
                Publishing
              </h3>
              <div class="form-row">
                <FormSelect
                  id="postType"
                  label="Blog Type"
                  v-model="blog.type"
                  icon="uil uil-document"
                  :options="typeOptions"
                  :required="true"
                />
                <FormSelect
                  id="blogFor"
                  label="Blog For"
                  v-model="blog.blogFor"
                  icon="uil uil-building"
                  :options="blogForOptions"
                  :required="true"
                />
              </div>
              <div class="form-row">
                <FormInput
                  id="minsToread"
                  label="Read Time"
                  v-model="blog.minsToRead"
                  icon="uil uil-clock"
                  placeholder="e.g. 5 min"
                  :required="true"
                />
                <FormSelect
                  id="blogStatus"
                  label="Status"
                  v-model="blog.status"
                  icon="uil uil-file-info-alt"
                  :options="statusOptions"
                  :required="true"
                />
              </div>
              <FormSchedulePicker
                v-if="isScheduled || blog.status === 'Scheduled'"
                v-model:dateValue="blog.scheduledDate"
                v-model:timeValue="blog.scheduledTime"
              />
            </div>
          </div>
        </div>
      </form>

      <!-- Editor Section -->
      <div class="editor-section">
        <label class="section-label">
          <Icon name="uil:align-left" />
          Content
        </label>
        <div class="editor-wrapper">
          <client-only>
            <tiptap-editor v-model="blog.content" />
          </client-only>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "admin",
});
import FormInput from "~/components/form/FormInput.vue";
import FormSelect from "~/components/form/FormSelect.vue";
import FormImageUpload from "~/components/form/ImageUpload.vue";
import FormSchedulePicker from "~/components/form/SchedulePicker.vue";
import LoadingButton from "~/components/LoadingButton.vue";
import axios from "axios";

interface Option {
  value: string;
  label: string;
}

interface ToastInterface {
  success(message: string, duration?: number): void;
  error(message: string, duration?: number): void;
  warning(message: string, duration?: number): void;
  info(message: string, duration?: number): void;
  remove(id: string): void;
}

const nuxtApp = useNuxtApp();
const $toast = nuxtApp.$toast as ToastInterface | undefined;

const isScheduled = ref(false);
const slugEdited = ref(false);
const imageLoading = ref(false);
const submit = ref(false);
const blogImage = ref("");

const blog = reactive({
  title: "",
  slug: "",
  blogImage: "",
  imageUrl: "",

  excerpt: "",
  content: "<p>I’m running Tiptap with Vue.js. 🎉</p>",
  type: "Articles",
  author: "",
  category: "",
  tags: "",
  blogFor: "Zacrac",
  minsToRead: "",
  status: "Draft",
  scheduledDate: "",
  scheduledTime: "",
});

const typeOptions: Option[] = [
  { value: "Articles", label: "Articles" },
  { value: "Webinars", label: "Webinars" },
  { value: "News", label: "News" },
  { value: "Guide", label: "Guide" },
];

const blogForOptions: Option[] = [
  { value: "Zacrac", label: "Zacrac" },
  { value: "Zacrac Learning", label: "Zacrac Learning" },
  { value: "Parrot", label: "Parrot" },
];

const categoryOptions: Option[] = [
  { value: "", label: "Select Category" },
  { value: "market-intelligence", label: "Market Intelligence" },
  { value: "market-research", label: "Market Research" },
  { value: "analytics-as-a-service", label: "Analytics-as-a service" },
  {
    value: "customer-reviews-and-services",
    label: "Customer Reviews and Services",
  },
  { value: "data-strategy", label: "Data Strategy" },
];

const statusOptions: Option[] = [
  { value: "Draft", label: "Draft" },
  { value: "Published", label: "Published" },
];

watch(
  () => blog.title,
  (newTitle) => {
    if (newTitle && !slugEdited.value) {
      blog.slug = generateSlug(newTitle);
    }
  },
);

const toggleSchedule = () => {
  isScheduled.value = !isScheduled.value;
  if (!isScheduled.value) {
    blog.scheduledDate = "";
    blog.scheduledTime = "";
    blog.status = "Published";
  }
};

const generateSlug = (text: string): string => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
};

const onSlugInput = () => {
  slugEdited.value = true;
};

const getAuthHeader = () => {
  let token = null;
  token = localStorage.getItem("adminToken");

  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
};

const publish = () => {
  if (blog.content === "") {
    $toast?.error("Text Editor cannot be empty");
  } else {
    if (isScheduled.value) {
      if (!blog.scheduledDate || !blog.scheduledTime) {
        $toast?.error("Please select both date and time for scheduling");
        return;
      }

      const scheduledDateTime = new Date(
        `${blog.scheduledDate}T${blog.scheduledTime}`,
      );
      const now = new Date();

      if (scheduledDateTime <= now) {
        $toast?.error("Scheduled time must be in the future");
        return;
      }

      blog.status = "Scheduled";
      (blog as any).scheduledAt = scheduledDateTime.toISOString();
    }
    submit.value = true;
    axios
      .post(`https://parrotapi.parrot.cx/admin/blog`, blog, getAuthHeader())
      .then((res: any) => {
        $toast?.success(
          isScheduled.value
            ? res.data.message || "Post scheduled successfully"
            : res.data.message,
        );
        useRouter().push("/admins/posts");
      })
      .catch((err: any) => {
        $toast?.error(err.response?.data?.message || "Failed to create post");
      })
      .finally(() => {
        submit.value = false;
      });
  }
};

const handleFeaturedImageSelected = ({
  file,
  fileName,
}: {
  file: File | null;
  fileName: string;
}) => {
  blog.blogImage = fileName;
  if (file) {
    const reader = new FileReader();
    reader.onloadend = (e) => {
      const img = new Image();
      img.src = e.target?.result as string;
      img.onload = async () => {
        if (img) {
          const formData = new FormData();
          formData.append("file", file);
          imageLoading.value = true;
          axios
            .post(`https://parrotapi.parrot.cx/media/upload`, formData, {
              headers: {
                ...getAuthHeader().headers,
                "Content-Type": "multipart/form-data",
              },
            })
            .then((res: any) => {
              console.log(res);
              blog.imageUrl = res.data.data.location;
              console.log(blog);
              $toast?.success(res.data.message);
            })
            .catch((err: any) => {
              $toast?.error(
                err.response?.data?.message || "Failed to upload image",
              );
            })
            .finally(() => {
              imageLoading.value = false;
            });
          console.log("Image dimensions are within 200x200");
        } else {
          console.log("image size issue");
          $toast?.error("Image dimensions exceed the specified limit 200x200");
        }
      };
    };
    reader.readAsDataURL(file);
  }
};

useHead({
  title: "Personal Informations - Zacrac",
  meta: [
    {
      key: "description",
      name: "description",
      content:
        "Zacrac helps individuals and organisations make better decision using data through analysis, survey, and training.",
    },
    { key: "robots", name: "robots", content: "index,follow" },
    {
      key: "keywords",
      name: "keywords",
      content:
        "Data analysis, marker research, training, Akure, Nigeria, Survey, polls, marketing",
    },
    {
      property: "og:title",
      content: "Zacrac - Market research and data science company",
    },
    {
      property: "og:description",
      content:
        "Zacrac helps individuals and organisations make better decision using data through analysis, survey, and training.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://zacrac.com/" },
    {
      property: "og:image",
      content: "https://zacrac.com/assets/img/zac-life.576662de.jpg",
    },
    {
      property: "twitter:title",
      content: "Zacrac - Market research and data science company",
    },
    {
      property: "twitter:description",
      content:
        "Zacrac helps individuals and organisations make better decision using data through analysis, survey, and training.",
    },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:url", content: "https://zacrac.com/" },
  ],
});
</script>

<style scoped>
.create-page {
  min-height: 100vh;
  background: #f8f9fc;
  padding: 30px 30px 40px 250px;
}

/* Page Header */
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  flex-wrap: wrap;
  gap: 16px;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 16px;
}

.back-button {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: all 0.2s ease;
}

.back-button:hover {
  background: #7d37d8;
  color: white;
}

.back-button i {
  font-size: 20px;
}

.header-title h2 {
  font-size: 24px;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #6b7280;
  margin-top: 4px;
}

.breadcrumb span {
  cursor: pointer;
  transition: color 0.2s ease;
}

.breadcrumb span:hover {
  color: #7d37d8;
}

.breadcrumb .current {
  color: #1a1a2e;
  font-weight: 500;
  cursor: default;
}

.breadcrumb i {
  font-size: 14px;
}

/* Publish Button */
.btn-publish {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: linear-gradient(105.26deg, #7d37d8 4.14%, #dd6e20 84.4%);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(125, 55, 216, 0.25);
}

.btn-publish:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(125, 55, 216, 0.35);
}

.btn-publish i {
  font-size: 16px;
}

/* Header Actions */
.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.btn-schedule {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: white;
  color: #1a1a2e;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-schedule:hover {
  border-color: #7d37d8;
  color: #7d37d8;
}

.btn-schedule.active {
  background: #7d37d8;
  border-color: #7d37d8;
  color: white;
}

.btn-schedule i {
  font-size: 16px;
}

/* Schedule Group */
.schedule-group {
  background: linear-gradient(
    135deg,
    rgba(125, 55, 216, 0.05),
    rgba(221, 110, 32, 0.05)
  );
  border-radius: 12px;
  padding: 16px;
  margin-top: 8px;
  border: 1px solid rgba(125, 55, 216, 0.1);
}

.schedule-inputs {
  display: flex;
  gap: 12px;
}

.schedule-inputs input {
  flex: 1;
  padding: 10px 14px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
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
  margin: 8px 0 0 0;
}

/* Form Grid */
.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 32px;
}

.form-column {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Form Card */
.form-card {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.card-title {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 600;
  color: #1a1a2e;
  margin: 0 0 20px 0;
  padding-bottom: 12px;
  border-bottom: 1px solid #f3f4f6;
}

.card-title i {
  color: #7d37d8;
  font-size: 18px;
}

/* Section Labels */
.section-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #1a1a2e;
  margin-bottom: 16px;
}

.section-label i {
  color: #7d37d8;
}

.upload-area {
  border: 2px dashed #e5e7eb;
  border-radius: 12px;
  padding: 40px 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.upload-area:hover {
  border-color: #7d37d8;
  background: rgba(125, 55, 216, 0.02);
}

.upload-content i {
  font-size: 48px;
  color: #9ca3af;
  margin-bottom: 12px;
}

.upload-content h4 {
  font-size: 16px;
  font-weight: 600;
  color: #1a1a2e;
  margin: 0 0 4px 0;
}

.upload-content p {
  font-size: 13px;
  color: #9ca3af;
  margin: 0;
}

.image-preview {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 16/10;
}

.image-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  opacity: 0;
  transition: opacity 0.2s ease;
  cursor: pointer;
  color: white;
}

.image-preview:hover .image-overlay {
  opacity: 1;
}

.image-overlay i {
  font-size: 24px;
}

.image-overlay span {
  font-size: 14px;
  font-weight: 500;
}

/* Form Row */
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 16px;
}

/* Form Group */
.form-group {
  margin-bottom: 16px;
}

.form-group label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  margin-bottom: 8px;
}

.form-group label i {
  color: #7d37d8;
  font-size: 16px;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  font-size: 14px;
  color: #1a1a2e;
  background: #f9fafb;
  transition: all 0.2s ease;
  outline: none;
}

.form-group input:focus,
.form-group select:focus {
  border-color: #7d37d8;
  background: white;
  box-shadow: 0 0 0 3px rgba(125, 55, 216, 0.1);
}

.form-group input::placeholder {
  color: #9ca3af;
}

.form-group textarea {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  font-size: 14px;
  font-family: inherit;
  resize: vertical;
  transition: all 0.2s ease;
  outline: none;
  background: #f9fafb;
}

.form-group textarea:focus {
  border-color: #7d37d8;
  background: white;
  box-shadow: 0 0 0 3px rgba(125, 55, 216, 0.1);
}

.form-group textarea::placeholder {
  color: #9ca3af;
}

.form-group:last-child {
  margin-bottom: 0;
}

/* Editor Section */
.editor-section {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.editor-wrapper {
  min-height: 300px;
}

/* Responsive */
@media (max-width: 1024px) {
  .create-page {
    padding: 20px 20px 40px 20px;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .page-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .btn-publish {
    width: 100%;
    justify-content: center;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .breadcrumb {
    display: none;
  }

  .form-card {
    padding: 16px;
  }

  .card-title {
    font-size: 14px;
  }
}
</style>
