<template>
  <div>
    <div v-if="loading"><spinner /></div>
    <div v-else class="create-page">
      <div class="container">
        <form id="post-form" @submit.prevent="publish">
          <!-- Header Section -->
          <div class="page-header">
            <div class="header-left">
              <div @click="$router.go(-1)" class="back-button">
                <Icon name="uil:arrow-left" />
              </div>
              <div class="header-title">
                <h2>Edit Post</h2>
                <div class="breadcrumb">
                  <span @click="$router.push('/admins/posts')">Posts</span>
                  <Icon name="uil:angle-right" />
                  <span class="current">{{ blog.title || "Loading..." }}</span>
                </div>
              </div>
            </div>
            <div class="header-actions">
              <button
                type="button"
                class="btn-schedule"
                @click="toggleSchedule"
              >
                <Icon :name="isScheduled ? 'uil:check' : 'uil:clock'" />
                <span>{{ isScheduled ? "Scheduled" : "Schedule" }}</span>
              </button>
              <LoadingButton
                type="button"
                button-class="btn-delete"
                :loading="deleteLoad"
                @click="deleteBlog"
              >
                <Icon name="uil:trash-alt" />
                <span>Delete</span>
              </LoadingButton>
              <LoadingButton
                type="submit"
                button-class="btn-publish"
                :loading="submit"
              >
                <Icon :name="isScheduled ? 'uil:calendar-alt' : 'uil:send'" />
                <span>{{ isScheduled ? "Schedule Post" : "Update Post" }}</span>
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
            <tiptap-editor ref="editor" v-model="blog.content" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import FormInput from "~/components/form/FormInput.vue";
import FormSelect from "~/components/form/FormSelect.vue";
import FormImageUpload from "~/components/form/ImageUpload.vue";
import FormSchedulePicker from "~/components/form/SchedulePicker.vue";
import LoadingButton from "~/components/LoadingButton.vue";
import axios from "axios";

// Type definitions
interface Option {
  value: string;
  label: string;
}

interface Blog {
  title: string;
  slug: string;
  blogImage: string;
  imageUrl: string | undefined;
  excerpt: string;
  content: string;
  type: string;
  author: string;
  category: string;
  tags: string;
  blogFor: string;
  minsToRead: string;
  status: string;
  scheduledDate: string;
  scheduledTime: string;
  scheduledAt?: string;
}

interface ApiResponse<T = unknown> {
  status: string;
  data: T;
  message?: string;
}

interface BlogApiResponse extends ApiResponse<Blog> {}

interface UploadResponse {
  data: {
    location: string;
    message?: string;
  };
  status: string;
  message?: string;
}

interface MessageResponse {
  status: string;
  message: string;
}

interface AxiosError {
  response?: {
    data?: {
      message?: string;
    };
  };
}

interface ToastInterface {
  success(message: string, duration?: number): void;
  error(message: string, duration?: number): void;
  warning(message: string, duration?: number): void;
  info(message: string, duration?: number): void;
  removeToast(id: number): void;
}

definePageMeta({
  layout: "admin",
});

// Get typed toast instance
const nuxtApp = useNuxtApp();
const $toast = nuxtApp.$toast as ToastInterface | undefined;

// Get route and router
const route = useRoute();
const router = useRouter();

// Reactive state
const loading = ref(true);
const submit = ref(false);
const deleteLoad = ref(false);
const isScheduled = ref(false);
const slugEdited = ref(false);
const imageLoading = ref(false);
const fetchMessage = ref("");
const messageType = ref("");

const blog = ref<Blog>({
  title: "",
  slug: "",
  blogImage: "",
  imageUrl: undefined,
  excerpt: "",
  content: "<p>I'm running Tiptap with Vue.js. 🎉</p>",
  type: "Articles",
  author: "",
  category: "",
  tags: "",
  blogFor: "Zacrac",
  minsToRead: "",
  status: "Draft",
  scheduledDate: "",
  scheduledTime: "",
  scheduledAt: undefined,
});

// Options
const typeOptions = ref<Option[]>([
  { value: "Articles", label: "Articles" },
  { value: "Webinars", label: "Webinars" },
  { value: "News", label: "News" },
  { value: "Guide", label: "Guide" },
]);

const blogForOptions = ref<Option[]>([
  { value: "Zacrac", label: "Zacrac" },
  { value: "Zacrac Learning", label: "Zacrac Learning" },
  { value: "Parrot", label: "Parrot" },
]);

const categoryOptions = ref<Option[]>([
  { value: "", label: "Select Category" },
  { value: "market-intelligence", label: "Market Intelligence" },
  { value: "market-research", label: "Market Research" },
  { value: "analytics-as-a-service", label: "Analytics-as-a service" },
  {
    value: "customer-reviews-and-services",
    label: "Customer Reviews and Services",
  },
  { value: "data-strategy", label: "Data Strategy" },
]);

const statusOptions = ref<Option[]>([
  { value: "Draft", label: "Draft" },
  { value: "Published", label: "Published" },
  { value: "Scheduled", label: "Scheduled" },
]);

// Computed
const minDate = computed(() => {
  const today = new Date();
  return today.toISOString().split("T")[0];
});

// Watch for title changes to auto-generate slug
watch(
  () => blog.value.title,
  (newTitle) => {
    if (newTitle && !slugEdited.value) {
      blog.value.slug = generateSlug(newTitle);
    }
  },
);

// Watch for status changes
watch(
  () => blog.value.status,
  (newStatus) => {
    if (newStatus === "Scheduled") {
      isScheduled.value = true;
    }
  },
);

// Methods
function generateSlug(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

function onSlugInput(): void {
  slugEdited.value = true;
}

function getAuthHeader() {
  let token: string | null = null;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("adminToken");
  }

  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
}

async function fetchBlog(): Promise<void> {
  const slug = route.params.slug as string;
  loading.value = true;

  try {
    const response = await axios.get<BlogApiResponse>(
      `https://parrotapi.parrot.cx/admin/blog/${slug}`,
      getAuthHeader(),
    );

    if (response.data.status === "success") {
      const blogData = response.data.data;

      // Populate form with existing data
      blog.value.title = blogData.title || "";
      blog.value.slug = blogData.slug || "";
      blog.value.imageUrl = blogData.imageUrl || undefined;
      blog.value.blogImage = blogData.blogImage || "";
      blog.value.excerpt = blogData.excerpt || "";
      blog.value.content = blogData.content || "";
      blog.value.type = blogData.type || "Articles";
      blog.value.category = blogData.category || "";
      blog.value.tags = blogData.tags || "";
      blog.value.author = blogData.author || "";
      blog.value.blogFor = blogData.blogFor || "Zacrac";
      blog.value.minsToRead = blogData.minsToRead || "";
      blog.value.status = blogData.status || "Draft";

      // Handle scheduled date/time
      if (blogData.scheduledAt) {
        const scheduledDate = new Date(blogData.scheduledAt);
        const dateStr = scheduledDate.toISOString().split("T")[0];
        const timeStr = scheduledDate.toTimeString().slice(0, 5);
        blog.value.scheduledDate = dateStr || "";
        blog.value.scheduledTime = timeStr || "";
        isScheduled.value = true;
      } else if (blogData.status === "Scheduled") {
        isScheduled.value = true;
      }

      fetchMessage.value = "Post loaded successfully";
      messageType.value = "success";
    }
  } catch (err: unknown) {
    console.error("Error fetching blog:", err);
    const axiosError = err as AxiosError;
    messageType.value = "fail";
    fetchMessage.value =
      axiosError.response?.data?.message || "Failed to load post";
  }

  loading.value = false;
}

function toggleSchedule(): void {
  isScheduled.value = !isScheduled.value;
  if (!isScheduled.value) {
    blog.value.scheduledDate = "";
    blog.value.scheduledTime = "";
    if (blog.value.status === "Scheduled") {
      blog.value.status = "Published";
    }
  } else {
    blog.value.status = "Scheduled";
  }
}

async function publish(): Promise<void> {
  if (blog.value.content === "") {
    $toast?.error("Text Editor cannot be empty");
  } else {
    // Validate schedule date/time if scheduling is enabled
    if (isScheduled.value || blog.value.status === "Scheduled") {
      if (!blog.value.scheduledDate || !blog.value.scheduledTime) {
        $toast?.error("Please select both date and time for scheduling");
        return;
      }

      // Combine date and time
      const scheduledDateTime = new Date(
        `${blog.value.scheduledDate}T${blog.value.scheduledTime}`,
      );
      const now = new Date();

      if (scheduledDateTime <= now) {
        $toast?.error("Scheduled time must be in the future");
        return;
      }

      // Set status to scheduled
      blog.value.status = "Scheduled";
      blog.value.scheduledAt = scheduledDateTime.toISOString();
    }

    submit.value = true;
    const slug = route.params.slug as string;

    try {
      const res = await axios.put<MessageResponse>(
        `https://parrotapi.parrot.cx/admin/blog/${slug}`,
        blog.value,
        getAuthHeader(),
      );

      $toast?.success(
        isScheduled.value
          ? res.data.message || "Post scheduled successfully"
          : res.data.message,
      );
      router.push("/admins/posts");
    } catch (err: unknown) {
      const axiosError = err as AxiosError;
      $toast?.error(
        axiosError.response?.data?.message || "Failed to update post",
      );
    } finally {
      submit.value = false;
    }
  }
}

async function deleteBlog(): Promise<void> {
  if (!confirm("Are you sure you want to delete this post?")) {
    return;
  }

  deleteLoad.value = true;
  const slug = route.params.slug as string;

  try {
    const res = await axios.delete<MessageResponse>(
      `https://parrotapi.parrot.cx/admin/blog/${slug}`,
      getAuthHeader(),
    );
    $toast?.success(res.data.message);
    router.push("/admins/posts");
  } catch (err: unknown) {
    const axiosError = err as AxiosError;
    $toast?.error(
      axiosError.response?.data?.message || "Failed to delete post",
    );
  } finally {
    deleteLoad.value = false;
  }
}

function handleFeaturedImageSelected({
  file,
  fileName,
}: {
  file: File;
  fileName: string;
}): void {
  blog.value.blogImage = fileName;
  if (file) {
    const reader = new FileReader();
    reader.onloadend = (e) => {
      const target = e.target;
      if (!target?.result) return;

      const img = new Image();
      img.src = target.result as string;
      img.onload = async () => {
        if (img) {
          const formData = new FormData();
          formData.append("file", file);
          imageLoading.value = true;

          try {
            const res = await axios.post<UploadResponse>(
              `https://parrotapi.parrot.cx/media/upload`,
              formData,
              {
                headers: {
                  ...getAuthHeader().headers,
                  "Content-Type": "multipart/form-data",
                },
              },
            );
            blog.value.imageUrl = res.data.data.location;
            $toast?.success(res.data.message || "Image uploaded successfully");
          } catch (err: unknown) {
            const axiosError = err as AxiosError;
            $toast?.error(
              axiosError.response?.data?.message || "Failed to upload image",
            );
          } finally {
            imageLoading.value = false;
          }
        } else {
          $toast?.error("Image dimensions exceed the specified limit");
        }
      };
    };
    reader.readAsDataURL(file);
  }
}

// Lifecycle
onMounted(() => {
  fetchBlog();
});

// SEO Head
useHead({
  title: "Edit Post - Zacrac",
  meta: [
    {
      key: "description",
      name: "description",
      content:
        "Zacrac helps individuals and organisations make better decision using data through analysis, survey, and training.",
    },
    {
      key: "robots",
      name: "robots",
      content: "index,follow",
    },
    {
      key: "keywords",
      name: "keywords",
      content:
        "Data analysis, marker research, training, Akure, Nigeria, Survey, polls, marketing",
    },
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

.header-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.header-actions button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
}

.btn-schedule {
  background: white;
  color: #6b7280;
  border: 1px solid #e5e7eb;
}

.btn-schedule:hover {
  background: #f3f4f6;
  color: #1a1a2e;
}

.btn-delete {
  background: #fee2e2;
  color: #dc2626;
}

.btn-delete:hover {
  background: #fecaca;
}

.btn-publish {
  background: #7d37d8;
  color: white;
}

.btn-publish:hover {
  background: #6b21a8;
}

/* Form Grid */
.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 24px;
}

.form-column {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-card {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.card-title {
  font-size: 16px;
  font-weight: 600;
  color: #1a1a2e;
  margin: 0 0 20px 0;
  display: flex;
  align-items: center;
  gap: 8px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 16px;
}

.form-group {
  margin-bottom: 16px;
}

.form-group label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 500;
  color: #374151;
  margin-bottom: 8px;
}

.form-group textarea {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  font-size: 14px;
  resize: vertical;
  transition: all 0.2s ease;
}

.form-group textarea:focus {
  outline: none;
  border-color: #7d37d8;
  box-shadow: 0 0 0 3px rgba(125, 55, 216, 0.1);
}

/* Editor Section */
.editor-section {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.section-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 600;
  color: #1a1a2e;
  margin-bottom: 16px;
}

.editor-wrapper {
  min-height: 400px;
}

/* Responsive */
@media (max-width: 1024px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .create-page {
    padding: 20px 20px 40px 20px;
  }

  .page-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .header-actions {
    width: 100%;
  }

  .header-actions button {
    flex: 1;
    justify-content: center;
  }

  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>
