<template>
  <div class="flex flex-col w-full flex-no-wrap pt-20 pb-16 bg-gray-50">
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
          Insights & Resources
        </h1>
        <p class="text-white/80 text-lg max-w-2xl mx-auto">
          Explore insightful articles, webinars, and guides to help you make
          better business decisions.
        </p>
      </div>
    </div>

    <!-- Content Section -->
    <div class="px-5 lg:px-20 mt-8">
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
              <Icon name="uil:document" class="text-3xl text-gray-400" />
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
                  `/blog/${blog.category || 'uncategorized'}/${blog.slug || blog._id}`,
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
                    <Icon name="uil:clock" class="text-gray-400" />
                    {{ blog.minsToRead }}
                  </span>
                </div>
                <h3 class="blog-title">{{ blog.title }}</h3>
                <p class="blog-excerpt">
                  {{ stripHtml(blog.content).substring(0, 120) }}...
                </p>
                <div class="blog-footer">
                  <span class="read-more"
                    >Read More
                    <Icon name="uil:arrow-right" class="ml-1" /> ></span
                  >
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
              <Icon name="uil:arrow-left" /> Previous
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
              Next <Icon name="uil:arrow-right" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const blogs = ref<any[]>([]);
const loading = ref(false);
const currentPage = ref(1);
const itemsPerPage = 9;
const totalBlogs = ref(0);
const totalPageCount = ref(1);
const currentType = ref("");
const currentCategory = ref("");
const fetchMessage = ref("");
const messageType = ref("");

// Build query parameters
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

const categoryOptions = [
  { value: "", label: "All Categories" },
  { value: "market-intelligence", label: "Market Intelligence" },
  { value: "market-research", label: "Market Research" },
  { value: "analytics-as-a-service", label: "Analytics-as-a service" },
  {
    value: "customer-reviews-and-services",
    label: "Customer Reviews and Services",
  },
  { value: "data-strategy", label: "Data Strategy" },
];

const paginatedBlogs = computed(() => {
  const index = (currentPage.value - 1) * itemsPerPage;
  return blogs.value.slice(index, index + itemsPerPage);
});

const setType = (type: string) => {
  currentType.value = type;
  currentPage.value = 1;
};

const setCategory = (category: string) => {
  currentCategory.value = category;
  currentPage.value = 1;
};

const setPage = (pageNumber: number) => {
  currentPage.value = pageNumber;
  if (import.meta.client) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
};

const stripHtml = (html: string) => {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, "");
};

// useFetch with watch automatically fetches on mount and parameter changes
// No need for onMounted call

useHead({
  title: "Zacrac Blog - Articles | Webinar | Explainer Videos",
  meta: [
    {
      key: "description",
      name: "description",
      content:
        "Our market research service is tailored and customized to help you get ahead and make better business decisions",
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
        "blog, zacrac blog, zacrac, Akure, Nigeria, Target Audience, Marketing Strategy, Market, Research",
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
  color: #1a1a2e;
  margin-bottom: 8px;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.blog-excerpt {
  font-size: 14px;
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 16px;
}

.blog-footer {
  padding-top: 12px;
  border-top: 1px solid #f3f4f6;
}

.read-more {
  font-size: 14px;
  font-weight: 600;
  color: #7d37d8;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: gap 0.3s ease;
}

.blog-card:hover .read-more {
  gap: 8px;
}

/* Pagination */
.pagination-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 48px;
  flex-wrap: wrap;
}

.pagination-btn {
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  background: white;
  color: #374151;
  border: 1px solid #e5e7eb;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.pagination-btn:hover:not(:disabled) {
  background: #f9fafb;
  border-color: #7d37d8;
  color: #7d37d8;
}

.pagination-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination-numbers {
  display: flex;
  gap: 8px;
}

.pagination-num {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  background: white;
  color: #374151;
  border: 1px solid #e5e7eb;
  cursor: pointer;
  transition: all 0.3s ease;
}

.pagination-num:hover {
  border-color: #7d37d8;
  color: #7d37d8;
}

.pagination-num.active {
  background: linear-gradient(105.26deg, #7d37d8 4.14%, #dd6e20 84.4%);
  color: white;
  border-color: transparent;
}

/* Old styles kept for compatibility */
.blog-search {
  width: 550px;
  height: 60px;
  position: relative;
  padding: 0px 10px;
}

.blog-search:hover {
  border: 1px solid #7d37d8;
}

.blog-search input {
  outline: none;
  background: transparent;
}

.blog-search .btn-search {
  position: absolute;
  top: 15px;
  right: 20px;
  background: #000066;
}

.category {
  color: #161616;
  padding: 4px 19px;
  font-weight: 400;
  border-radius: 100px;
  font-size: 16px;
  background: #fafafa;
  cursor: pointer;
}

.category:hover {
  background: #000462;
  color: #fff;
}

.activeType {
  color: #fff;
  padding: 4px 19px;
  font-weight: 400;
  border-radius: 100px;
  font-size: 16px;
  background: #000462;
  cursor: pointer;
}

.blogs {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 35px;
}

button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #f5f5f9;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
}

button.active {
  background: linear-gradient(105.26deg, #7d37d8 4.14%, #dd6e20 84.4%);
  color: #fff;
}
</style>
