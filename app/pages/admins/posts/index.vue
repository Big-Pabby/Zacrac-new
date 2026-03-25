<template>
  <div class="admin-posts-page">
   
    <div class="headBlog">
      <div class="container">
        <!-- Header Section -->
        <div class="header-section">
          <div class="header-content">
            <h2 class="page-title">
              <Icon name="uil:document-layout-left" />
              Posts
            </h2>
            <p class="page-subtitle">Manage your blog posts</p>
          </div>
          <nuxt-link to="/admins/posts/create" class="btn-primary">
            <Icon name="uil:plus" />
            Create New Post
          </nuxt-link>
        </div>

        <!-- Stats & Search Bar -->
        <div class="controls-section">
          <div class="stats-card">
            <div class="stat-icon">
              <Icon name="uil:layer-group" />
            </div>
            <div class="stat-info">
              <span class="stat-number">{{ blogs.length || 0 }}</span>
              <span class="stat-label">Total Posts</span>
            </div>
          </div>
          <div class="search-box">
            <Icon name="uil:search" class="search" />
            <input
              v-model="searchField"
              type="text"
              placeholder="Search posts..."
              @input="onSearch"
            />
            <button v-if="searchField" class="clear-btn" @click="clearSearch">
              <Icon name="uil:times" />
            </button>
          </div>
        </div>

        <!-- Filters Section -->
        <div class="filters-section">
          <div class="filter-group">
            <select
              v-model="filters.status"
              @change="onFilterChange"
              class="filter-select"
            >
              <option value="">All Status</option>
              <option value="published">Published</option>
              <option value="scheduled">Scheduled</option>
              <option value="draft">Draft</option>
              <option value="archived">Archived</option>
            </select>
          </div>
          <div class="filter-group">
            <select
              v-model="filters.type"
              @change="onFilterChange"
              class="filter-select"
            >
              <option value="">All Types</option>
              <option value="article">Article</option>
              <option value="news">News</option>
              <option value="guide">Guide</option>
            </select>
          </div>
          <div class="filter-group">
            <select
              v-model="filters.blogFor"
              @change="onFilterChange"
              class="filter-select"
            >
              <option value="">All Categories</option>
              <option value="business">Business</option>
              <option value="technology">Technology</option>
              <option value="marketing">Marketing</option>
            </select>
          </div>
          <button
            v-if="
              filters.status || filters.type || filters.blogFor || searchField
            "
            class="clear-filters-btn"
            @click="clearFilters"
          >
            <Icon name="uil:times" />
            Clear Filters
          </button>
        </div>

         <div v-if="loading"><spinner /></div>

        <!-- Empty State -->
        <div v-else-if="blogs.length === 0" class="empty-state">
          <div class="empty-icon">
            <Icon name="uil:document" />
          </div>
          <h3 class="empty-title">No Posts Yet</h3>
          <p class="empty-text">Create your first blog post to get started</p>
          <nuxt-link to="/admins/posts/create" class="btn-primary">
            <Icon name="uil:plus" />
            Create Your First Post
          </nuxt-link>
        </div>

        <!-- Posts Grid -->
        <div v-else>
          <div v-if="paginate.length === 0" class="no-results">
            <Icon name="uil:search" />
            <h3>No posts found</h3>
            <p>Try adjusting your search terms</p>
          </div>
          <div v-else class="blogs w-full">
            <blogCard
              v-for="blog in paginate"
              :key="blog._id"
              :slug="blog._id"
              :blog-title="blog.title"
              :blog-image="blog.imageUrl"
              :blog-content="blog.content"
              :mins-read="blog.minsToRead"
              :created="blog.createdAt"
              :edit-blog="true"
              class=""
            />
          </div>

          <!-- Enhanced Pagination -->
          <div v-if="totalPages > 1" class="pagination-wrapper">
            <div class="pagination-info">
              Showing {{ (currentPage - 1) * itemsPerPage + 1 }} to
              {{
                Math.min(
                  currentPage * itemsPerPage,
                  getSearchedBlog.length || blogs.length,
                )
              }}
              of {{ getSearchedBlog.length || blogs.length }} posts
            </div>
            <div class="pagination-controls">
              <button
                class="pagination-btn nav-btn"
                :disabled="currentPage === 1"
                @click="setPage(currentPage - 1)"
              >
                <Icon name="uil:arrow-left" />
                Previous
              </button>
              <div class="page-numbers">
                <button
                  v-for="(pageNumber, index) in visiblePages"
                  :key="index"
                  :class="{
                    active: currentPage === pageNumber,
                    ellipsis: pageNumber === '...',
                  }"
                  :disabled="pageNumber === '...'"
                  @click="pageNumber !== '...' && setPage(pageNumber)"
                >
                  {{ pageNumber }}
                </button>
              </div>
              <button
                class="pagination-btn nav-btn"
                :disabled="currentPage === totalPages"
                @click="setPage(currentPage + 1)"
              >
                Next
                <Icon name="uil:arrow-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "admin",
});
import axios from "axios";
interface Blog {
  _id: string;
  title: string;
  imageUrl: string;
  content: string;
  minsToRead: string;
  createdAt: string;
}

interface Filters {
  status: string;
  type: string;
  blogFor: string;
  title: string;
}

const blogs = ref<Blog[]>([]);
const loading = ref(false);
const currentPage = ref(1);
const itemsPerPage = ref(10);
const totalBlogs = ref(0);
const searchField = ref("");
const fetchMessage = ref("");
const messageType = ref("");
const filters = reactive<Filters>({
  status: "",
  type: "",
  blogFor: "",
  title: "",
});

const getSearchedBlog = computed(() => {
  if (!searchField.value) return [];
  return blogs.value.filter((blog) =>
    blog.title.toLowerCase().includes(searchField.value.toLowerCase()),
  );
});

const totalPages = computed(() => {
  const length =
    searchField.value !== ""
      ? getSearchedBlog.value.length
      : blogs.value.length;
  if (length === 0) return 1;
  return Math.ceil(length / itemsPerPage.value);
});

const paginate = computed(() => {
  const index = currentPage.value * itemsPerPage.value - itemsPerPage.value;
  const source = searchField.value !== "" ? getSearchedBlog.value : blogs.value;
  return source.slice(index, index + itemsPerPage.value);
});

const visiblePages = computed(() => {
  const pages: (number | string)[] = [];
  const total = totalPages.value;
  const current = currentPage.value;

  if (total <= 7) {
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
  } else {
    if (current <= 3) {
      for (let i = 1; i <= 4; i++) pages.push(i);
      pages.push("...");
      pages.push(total);
    } else if (current >= total - 2) {
      pages.push(1);
      pages.push("...");
      for (let i = total - 3; i <= total; i++) pages.push(i);
    } else {
      pages.push(1);
      pages.push("...");
      for (let i = current - 1; i <= current + 1; i++) pages.push(i);
      pages.push("...");
      pages.push(total);
    }
  }
  return pages;
});

const setPage = (pageNumber: number | string) => {
  if (pageNumber === "...") return;
  currentPage.value = pageNumber as number;
  blogData();
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const { $toast } = useNuxtApp() as unknown as {
  $toast: {
    success: (msg: string) => void;
    error: (msg: string) => void;
    warning: (msg: string) => void;
    info: (msg: string) => void;
  };
};

const blogData = async () => {
  loading.value = true;
  console.log("Fetching blogs with filters:", filters);
  try {
    const params = new URLSearchParams({
      page: currentPage.value.toString(),
      limit: itemsPerPage.value.toString(),
    });

    if (filters.status) params.append("status", filters.status);
    if (filters.type) params.append("type", filters.type);
    if (filters.blogFor) params.append("blogFor", filters.blogFor);
    if (filters.title) params.append("title", filters.title);

    let token = null;
    token = localStorage.getItem("adminToken");

    const response: any = await axios.get(
      `https://parrotapi.parrot.cx/admin/blog?${params.toString()}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (response?.data?.status === "success") {
      const data = response.data.data;
      blogs.value = data?.blogs || data?.docs || [];
      totalBlogs.value = data?.total || data?.totalDocs || 0;
      // Note: totalPages is computed, don't set it directly
      currentPage.value = data?.page || 1;
      $toast?.success("Posts loaded successfully");
    } else {
      // Handle unexpected response structure
      blogs.value = [];
      $toast?.error("Invalid response from server");
    }
  } catch (error: any) {
    console.error("Error fetching blogs:", error);
    blogs.value = [];
    $toast?.error(error?.response?.data?.message || "Failed to load posts");
  } finally {
    loading.value = false;
  }
};

const onSearch = () => {
  filters.title = searchField.value;
  currentPage.value = 1;
  blogData();
};

const clearSearch = () => {
  searchField.value = "";
  filters.title = "";
  blogData();
};

const applyFilters = () => {
  currentPage.value = 1;
  blogData();
};

const clearFilters = () => {
  filters.status = "";
  filters.type = "";
  filters.blogFor = "";
  filters.title = "";
  searchField.value = "";
  currentPage.value = 1;
  blogData();
};

const onFilterChange = () => {
  currentPage.value = 1;
  blogData();
};

onMounted(() => {
  blogData();
});

useHead({
  title: "Personal Informations - Zacrac",
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
    {
      property: "og:title",
      content: "Zacrac - Market research and data science company",
    },
    {
      property: "og:description",
      content:
        "Zacrac helps individuals and organisations make better decision using data through analysis, survey, and training.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://zacrac.com/",
    },
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
    {
      property: "twitter:card",
      content: "summary_large_image",
    },
    {
      property: "twitter:url",
      content: "https://zacrac.com/",
    },
  ],
});
</script>

<style scoped>
.admin-posts-page {
  min-height: 100vh;
  background: #f8f9fc;
}

.headBlog {
  min-height: 100vh;
  background: #f8f9fc;
  padding: 30px 30px 20px 270px;
}

/* Header Section */
.header-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 16px;
}

.header-content {
  display: flex;
  flex-direction: column;
}

.page-title {
  font-size: 28px;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 12px;
}

.page-title i {
  background: linear-gradient(105.26deg, #7d37d8 4.14%, #dd6e20 84.4%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-subtitle {
  font-size: 14px;
  color: #6b7280;
  margin-top: 4px;
}

/* Controls Section */
.controls-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  gap: 20px;
  flex-wrap: wrap;
}

.stats-card {
  display: flex;
  align-items: center;
  gap: 16px;
  background: white;
  padding: 16px 24px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.stat-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: linear-gradient(135deg, #7d37d8 0%, #dd6e20 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-icon i {
  font-size: 24px;
  color: white;
}

.stat-info {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-size: 24px;
  font-weight: 700;
  color: #1a1a2e;
  line-height: 1;
}

.stat-label {
  font-size: 13px;
  color: #6b7280;
  margin-top: 4px;
}

/* Search Box */
.search-box {
  position: relative;
  width: 320px;
  display: flex;
  align-items: center;
}

.search-box .search {
  position: absolute;
  left: 16px;
  color: #9ca3af;
  font-size: 18px;
  z-index: 1;
}

.search-box input {
  width: 100%;
  padding: 12px 40px 12px 48px;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  font-size: 14px;
  outline: none;
  transition: all 0.3s ease;
  background: white;
  height: 48px;
  box-sizing: border-box;
}

.search-box input:focus {
  border-color: #7d37d8;
  box-shadow: 0 0 0 3px rgba(125, 55, 216, 0.1);
}

.search-box input::placeholder {
  color: #9ca3af;
}

.clear-btn {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: #f3f4f6;
  border: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.clear-btn:hover {
  background: #e5e7eb;
}

.clear-btn i {
  font-size: 12px;
  color: #6b7280;
  position: static;
  transform: none;
}

/* Empty State */
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  background: white;
  border-radius: 16px;
  text-align: center;
}

.empty-icon {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
}

.empty-icon i {
  font-size: 40px;
  color: #9ca3af;
}

.empty-title {
  font-size: 22px;
  font-weight: 600;
  color: #1a1a2e;
  margin: 0 0 8px 0;
}

.empty-text {
  font-size: 15px;
  color: #6b7280;
  margin: 0 0 24px 0;
}

/* No Results */
.no-results {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  background: white;
  border-radius: 16px;
  text-align: center;
}

.no-results i {
  font-size: 48px;
  color: #d1d5db;
  margin-bottom: 16px;
}

.no-results h3 {
  font-size: 18px;
  font-weight: 600;
  color: #1a1a2e;
  margin: 0 0 8px 0;
}

.no-results p {
  font-size: 14px;
  color: #6b7280;
  margin: 0;
}

/* Blog Grid */
.headBlog .blogs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
}

/* Pagination */
.pagination-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 40px;
  padding: 24px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.pagination-info {
  font-size: 13px;
  color: #6b7280;
}

.pagination-controls {
  display: flex;
  align-items: center;
  gap: 8px;
}

.pagination-btn {
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  background: #f3f4f6;
  color: #4b5563;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 6px;
}

.pagination-btn:hover:not(:disabled) {
  background: #e5e7eb;
}

.pagination-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.nav-btn {
  background: linear-gradient(105.26deg, #7d37d8 4.14%, #dd6e20 84.4%);
  color: white;
}

.nav-btn:hover:not(:disabled) {
  opacity: 0.9;
  transform: translateY(-1px);
}

.page-numbers {
  display: flex;
  gap: 6px;
}

.page-numbers button {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: none;
  background: #f3f4f6;
  color: #4b5563;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.page-numbers button:hover:not(.active):not(.ellipsis) {
  background: #e5e7eb;
}

.page-numbers button.active {
  background: linear-gradient(105.26deg, #7d37d8 4.14%, #dd6e20 84.4%);
  color: white;
  box-shadow: 0 4px 12px rgba(125, 55, 216, 0.3);
}

.page-numbers button.ellipsis {
  background: transparent;
  cursor: default;
  width: 24px;
}

/* Button Styles */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: linear-gradient(105.26deg, #7d37d8 4.14%, #dd6e20 84.4%);
  color: white;
  border-radius: 10px;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(125, 55, 216, 0.25);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(125, 55, 216, 0.35);
}

.btn-primary i {
  font-size: 16px;
}

/* Responsive */
@media screen and (max-width: 1200px) {
  .headBlog .blogs {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 768px) {
  .headBlog {
    padding: 20px 20px 20px 20px;
  }

  .header-section {
    flex-direction: column;
    align-items: stretch;
  }

  .page-title {
    font-size: 24px;
  }

  .controls-section {
    flex-direction: column;
    align-items: stretch;
  }

  .search-box {
    width: 100%;
  }

  .stats-card {
    width: 100%;
    justify-content: center;
  }

  .headBlog .blogs {
    grid-template-columns: 1fr;
  }

  .pagination-controls {
    flex-wrap: wrap;
    justify-content: center;
  }

  .page-numbers {
    order: -1;
    width: 100%;
    justify-content: center;
    margin-bottom: 8px;
  }
}

/* Filters Section */
.filters-section {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
  flex-wrap: wrap;
  align-items: center;
}

.filter-group {
  min-width: 150px;
}

.filter-select {
  width: 100%;
  padding: 10px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  color: #374151;
  background: white;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
}

.filter-select:focus {
  border-color: #7d37d8;
  box-shadow: 0 0 0 3px rgba(125, 55, 216, 0.1);
}

.clear-filters-btn {
  padding: 10px 16px;
  background: #fee2e2;
  color: #dc2626;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.3s ease;
}

.clear-filters-btn:hover {
  background: #fecaca;
}
</style>
