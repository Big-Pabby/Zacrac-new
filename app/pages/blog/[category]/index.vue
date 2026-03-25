<template>
  <div class="flex flex-col w-full flex-no-wrap pb-16 bg-gray-50">
    <!-- Hero Section -->
    <div
      class="px-5 lg:px-20 py-12 bg-gradient-to-r from-[#000462] to-[#1a1a8a]"
    >
      <div class="max-w-4xl mx-auto text-center">
        <span
          class="inline-block px-4 py-1 rounded-full text-white bg-white/20 text-sm mb-4"
        >
          Our Blog
        </span>
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
          {{ categoryTitle }}
        </h1>
        <p class="text-white/80 text-lg max-w-2xl mx-auto">
          Explore insightful articles, webinars, and guides to help you make
          better business decisions.
        </p>
      </div>
    </div>

    <!-- Content Section -->
    <div class="px-5 lg:px-20 mt-8">
      <!-- Back to All Blogs -->
      <div class="mb-6">
        <NuxtLink
          to="/blog"
          class="flex items-center gap-2 text-[#000462] hover:text-[#7d37d8] transition-colors"
        >
          <i class="uil uil-arrow-left"></i>
          <span>Back to All Blogs</span>
        </NuxtLink>
      </div>

      <!-- Filter Tabs (Blog Type) -->
      <div class="flex w-full flex-wrap items-center gap-3 mb-8">
        <div
          class="filter-btn"
          :class="{ active: currentType === '' }"
          @click="setType('')"
        >
          All
        </div>
        <div
          class="filter-btn"
          :class="{ active: currentType === 'Articles' }"
          @click="setType('Articles')"
        >
          Articles
        </div>
        <div
          class="filter-btn"
          :class="{ active: currentType === 'News' }"
          @click="setType('News')"
        >
          News
        </div>
        <div
          class="filter-btn"
          :class="{ active: currentType === 'ExplainerVideos' }"
          @click="setType('ExplainerVideos')"
        >
          Explainer Videos
        </div>
        <div
          class="filter-btn"
          :class="{ active: currentType === 'Webinars' }"
          @click="setType('Webinars')"
        >
          Webinars
        </div>
      </div>

      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Sidebar Filter (Category) -->
        <div class="w-full lg:w-64 flex-shrink-0">
          <div class="bg-white rounded-[8px] p-5 shadow-sm sticky top-24">
            <h3 class="font-semibold text-gray-800 mb-4">Filter by Category</h3>
            <div class="flex flex-wrap lg:flex-col gap-2">
              <NuxtLink
                to="/blog"
                class="category-btn"
                :class="{ active: currentCategory === '' }"
              >
                <span
                  class="w-2 h-2 rounded-full bg-gray-400 category-dot"
                ></span>
                All Categories
              </NuxtLink>
              <NuxtLink
                to="/blog/market-intelligence"
                class="category-btn"
                :class="{ active: currentCategory === 'market-intelligence' }"
              >
                <span
                  class="w-2 h-2 rounded-full bg-blue-500 category-dot"
                ></span>
                Market Intelligence
              </NuxtLink>
              <NuxtLink
                to="/blog/market-research"
                class="category-btn"
                :class="{ active: currentCategory === 'market-research' }"
              >
                <span
                  class="w-2 h-2 rounded-full bg-green-500 category-dot"
                ></span>
                Market Research
              </NuxtLink>
              <NuxtLink
                to="/blog/analytics-as-a-service"
                class="category-btn"
                :class="{
                  active: currentCategory === 'analytics-as-a-service',
                }"
              >
                <span
                  class="w-2 h-2 rounded-full bg-purple-500 category-dot"
                ></span>
                Analytics-as-a Service
              </NuxtLink>
              <NuxtLink
                to="/blog/customer-reviews-and-services"
                class="category-btn"
                :class="{
                  active: currentCategory === 'customer-reviews-and-services',
                }"
              >
                <span
                  class="w-2 h-2 rounded-full bg-orange-500 category-dot"
                ></span>
                Customer Reviews
              </NuxtLink>
              <NuxtLink
                to="/blog/data-strategy"
                class="category-btn"
                :class="{ active: currentCategory === 'data-strategy' }"
              >
                <span
                  class="w-2 h-2 rounded-full bg-red-500 category-dot"
                ></span>
                Data Strategy
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Main Content -->
        <div class="flex-1">
          <!-- Results Count -->
          <p class="text-gray-500 mb-6">
            Showing {{ blogs.length }}
            {{ blogs.length === 1 ? "result" : "results" }}
          </p>

          <!-- Empty State -->
          <div v-if="blogs.length === 0" class="text-center py-16">
            <div
              class="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center"
            >
              <i class="uil uil-document text-3xl text-gray-400"></i>
            </div>
            <h3 class="text-xl font-semibold text-gray-600 mb-2">
              No blogs found
            </h3>
            <p class="text-gray-500">
              Try adjusting your filters or check back later.
            </p>
          </div>

          <!-- Blog Grid -->
          <div v-else class="blog-grid">
            <div
              v-for="blog in paginatedBlogs"
              :key="blog._id"
              class="blog-card"
              @click="
                $router.push(
                  `/blog/${currentCategory}/${blog.slug || blog._id}`,
                )
              "
            >
              <div class="blog-image">
                <img
                  :src="blog.imageUrl || '/imageAuth.svg'"
                  :alt="blog.title"
                  class="w-full h-48 object-cover"
                />
                <span v-if="blog.type" class="blog-type">{{ blog.type }}</span>
              </div>
              <div class="blog-content">
                <div class="blog-meta">
                  <span class="blog-date">{{
                    formatDate(blog.createdAt)
                  }}</span>
                  <span v-if="blog.minsToRead" class="blog-read-time">
                    <i class="uil uil-clock"></i>
                    {{ blog.minsToRead }}
                  </span>
                </div>
                <h3 class="blog-title">{{ blog.title }}</h3>
                <p class="blog-excerpt">
                  {{ stripHtml(blog.content).substring(0, 120) }}...
                </p>
                <div class="blog-footer">
                  <span class="read-more"
                    >Read More <i class="uil uil-arrow-right"></i
                  ></span>
                </div>
              </div>
            </div>
          </div>

          <!-- Pagination -->
          <div v-if="totalPageCount > 1" class="pagination-wrapper">
            <button
              class="pagination-btn"
              :disabled="currentPage === 1"
              @click="setPage(currentPage - 1)"
            >
              <i class="uil uil-arrow-left"></i> Previous
            </button>

            <div class="pagination-numbers">
              <button
                v-for="page in totalPageCount"
                :key="page"
                class="pagination-num"
                :class="{ active: currentPage === page }"
                @click="setPage(page)"
              >
                {{ page }}
              </button>
            </div>

            <button
              class="pagination-btn"
              :disabled="currentPage === totalPageCount"
              @click="setPage(currentPage + 1)"
            >
              Next <i class="uil uil-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import moment from "moment";

interface BlogData {
  _id: string;
  slug?: string;
  title: string;
  content: string;
  imageUrl?: string;
  type?: string;
  createdAt: string;
  minsToRead?: number;
  author?: string;
}

interface BlogResponse {
  status: string;
  data: {
    docs?: BlogData[];
    blogs?: BlogData[];
    totalDocs?: number;
    total?: number;
    totalPages?: number;
  };
  message: string;
}

const route = useRoute();
const router = useRouter();

const blogs = ref<BlogData[]>([]);
const currentPage = ref(1);
const itemsPerPage = 9;
const totalBlogs = ref(0);
const totalPageCount = ref(1);
const currentType = ref("");
const currentCategory = ref("");
const fetchMessage = ref("");
const messageType = ref("");

const categoryTitle = computed(() => {
  const titles: Record<string, string> = {
    "market-intelligence": "Market Intelligence",
    "market-research": "Market Research",
    "analytics-as-a-service": "Analytics-as-a Service",
    "customer-reviews-and-services": "Customer Reviews",
    "data-strategy": "Data Strategy",
  };
  return titles[currentCategory.value] || "Category";
});

const paginatedBlogs = computed(() => {
  const index = (currentPage.value - 1) * itemsPerPage;
  return blogs.value.slice(index, index + itemsPerPage);
});

// Build query parameters - includes category from route
const queryParams = computed(() => {
  const params: Record<string, string> = {
    page: currentPage.value.toString(),
    limit: itemsPerPage.toString(),
    blogFor: "Zacrac",
  };

  if (currentType.value) {
    params.type = currentType.value;
  }

  if (currentCategory.value) {
    params.category = currentCategory.value;
  }

  return params;
});

// Initialize category from route params
currentCategory.value = (route.params.category as string) || "";

// Use useFetch instead of axios
const {
  data: response,
  pending,
  error,
} = await useFetch("https://parrotapi.parrot.cx/blog", {
  query: queryParams,
  watch: [queryParams],
});

// Handle response data
watch(
  response,
  (newResponse: any) => {
    if (newResponse?.status === "success") {
      const data = newResponse.data;
      blogs.value = data?.docs || data?.blogs || [];
      totalBlogs.value = data?.totalDocs || data?.total || 0;
      totalPageCount.value = data?.totalPages || 1;
      fetchMessage.value = newResponse.message;
      messageType.value = "success";
    } else {
      blogs.value = [];
      messageType.value = "fail";
      fetchMessage.value = "Unable to load blogs. Please try again later.";
    }
  },
  { immediate: true },
);

// Handle errors
watch(error, (err: any) => {
  if (err) {
    messageType.value = "fail";
    fetchMessage.value = err.data?.message || "Failed to load blogs";
  }
});

const setType = (type: string) => {
  currentType.value = type;
  currentPage.value = 1;
};

const setPage = (pageNumber: number) => {
  currentPage.value = pageNumber;
  if (import.meta.client) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

const formatDate = (date: string) => {
  return moment(date).format("MMM DD, YYYY");
};

const stripHtml = (html: string) => {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, "");
};

// useFetch with watch automatically fetches on mount and parameter changes
// No need for onMounted call

// SEO Meta
useHead({
  title: `${categoryTitle.value} | Zacrac Blog`,
  meta: [
    {
      key: "description",
      name: "description",
      content: `Browse our ${categoryTitle.value} articles, webinars, and guides to help you make better business decisions.`,
    },
    {
      key: "robots",
      name: "robots",
      content: "index,follow",
    },
  ],
});
</script>

<style scoped>
/* Category Sidebar Buttons */
.category-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  justify-content: left;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  background: transparent;
  color: #6b7280;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  text-align: left;
  text-decoration: none;
}

.category-btn:hover {
  background: #f3f4f6;
  color: #374151;
}

.category-btn.active {
  background: linear-gradient(105.26deg, #7d37d8 4.14%, #dd6e20 84.4%);
  color: white;
  border-color: transparent;
}

.category-btn.active .category-dot {
  background: white !important;
}

.category-dot {
  flex-shrink: 0;
}

/* Filter Buttons (kept for compatibility) */
.filter-btn {
  padding: 8px 20px;
  border-radius: 100px;
  font-size: 14px;
  font-weight: 500;
  background: white;
  color: #6b7280;
  border: 1px solid #e5e7eb;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn:hover {
  background: #f3f4f6;
  border-color: #d1d5db;
}

.filter-btn.active {
  background: linear-gradient(105.26deg, #7d37d8 4.14%, #dd6e20 84.4%);
  color: white;
  border-color: transparent;
}

/* Blog Grid */
.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
}

/* Blog Card */
.blog-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.blog-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
}

.blog-image {
  position: relative;
  overflow: hidden;
}

.blog-image img {
  transition: transform 0.3s ease;
}

.blog-card:hover .blog-image img {
  transform: scale(1.05);
}

.blog-type {
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 4px 12px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 12px;
  border-radius: 100px;
  font-weight: 500;
}

.blog-content {
  padding: 20px;
}

.blog-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  font-size: 13px;
  color: #6b7280;
}

.blog-read-time {
  display: flex;
  align-items: center;
  gap: 4px;
}

.blog-title {
  font-size: 18px;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 8px;
  line-height: 1.4;
}

.blog-excerpt {
  font-size: 14px;
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 12px;
}

.blog-footer {
  display: flex;
  justify-content: flex-end;
}

.read-more {
  color: #7d37d8;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 4px;
}

/* Pagination */
.pagination-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 40px;
}

.pagination-btn {
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  background: white;
  color: #6b7280;
  border: 1px solid #e5e7eb;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 4px;
}

.pagination-btn:hover:not(:disabled) {
  background: #f3f4f6;
  border-color: #d1d5db;
}

.pagination-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination-numbers {
  display: flex;
  gap: 4px;
}

.pagination-num {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  background: white;
  color: #6b7280;
  border: 1px solid #e5e7eb;
  cursor: pointer;
  transition: all 0.3s ease;
}

.pagination-num:hover {
  background: #f3f4f6;
  border-color: #d1d5db;
}

.pagination-num.active {
  background: linear-gradient(105.26deg, #7d37d8 4.14%, #dd6e20 84.4%);
  color: white;
  border-color: transparent;
}
</style>
