<template>
  <div class="w-full">
    <!-- Loading State -->
    <div
      v-if="loading"
      class="flex justify-center items-center min-h-screen pt-24"
    >
      <spinner />
    </div>
    <!-- Blog Content -->
    <div v-else-if="blog" class="pt-24 pb-10 px-5 lg:px-56 mb-20">
      <div class="w-full max-w-5xl mx-auto">
        <!-- Back Button -->
        <div class="mb-6">
          <button
            @click="$router.back()"
            class="flex items-center gap-2 text-[#000462] hover:text-[#7d37d8] transition-colors"
          >
            <Icon name="uil:arrow-left" class="text-[#000462] text-xl" />
            <span>Back to Blogs</span>
          </button>
        </div>

        <!-- Blog Image -->
        <div class="w-full mb-8">
          <img
            :src="blog.imageUrl"
            class="object-cover rounded-lg w-full h-64 md:h-96"
            :alt="blog.title"
          />
        </div>

        <!-- Blog Meta -->
        <div class="flex flex-wrap items-center gap-4 mb-4">
          <span class="blog-level">{{ formatDate(blog.createdAt) }}</span>
          <span v-if="blog.type" class="blog-level">{{ blog.type }}</span>
        </div>

        <!-- Blog Title -->
        <h1 class="text-3xl md:text-4xl font-bold text-dark mb-6">
          {{ blog.title }}
        </h1>

        <!-- Author -->
        <div v-if="blog.author" class="flex items-center gap-3 mb-8">
          <div
            class="w-10 h-10 rounded-full bg-gradient-to-r from-[#7d37d8] to-[#dd6e20] flex items-center justify-center text-white font-semibold"
          >
            {{ blog.author.charAt(0).toUpperCase() }}
          </div>
          <div>
            <p class="text-sm text-gray-500">Author</p>
            <p class="font-medium text-[#000462]">{{ blog.author }}</p>
          </div>
        </div>

        <!-- Read Time -->
        <div
          v-if="blog.minsToRead"
          class="flex items-center gap-2 text-gray-500 mb-8"
        >
          <Icon name="uil:clock" class="text-gray-500"></Icon>
          <span>{{ blog.minsToRead }} min read</span>
        </div>

        <!-- Content -->
        <div class="bg-[#FCFCFD] content py-8 px-6 md:px-10 rounded-lg">
          <div v-html="blog.content" class="prose max-w-none"></div>
        </div>

        <!-- Share Section -->
        <div class="mt-10 pt-6 border-t border-gray-200">
          <p class="font-medium text-gray-700 mb-4">Share this article</p>
          <div class="flex gap-4">
            <button
              class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
            >
              <Icon name="uil:facebook-f" class=""></Icon>
            </button>
            <button
              class="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition-colors"
            >
              <Icon name="uil:twitter" class=""></Icon>
            </button>
            <button
              class="w-10 h-10 rounded-full bg-linkedin text-white flex items-center justify-center hover:bg-linkedin transition-colors"
            >
              <Icon name="uil:linkedin" class=""></Icon>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Error State -->
    <div
      v-else
      class="flex flex-col items-center justify-center min-h-screen pt-24"
    >
      <Icon
        name="uil:exclamation-circle"
        class="text-6xl text-gray-400 mb-4"
      ></Icon>
      <h2 class="text-2xl font-semibold text-gray-600 mb-2">Blog not found</h2>
      <p class="text-gray-500 mb-6">
        The blog you're looking for doesn't exist.
      </p>
      <nuxt-link to="/blog" class="btn-primary"> Back to Blogs </nuxt-link>
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
  data: BlogData;
  message: string;
}

const route = useRoute();

const blog = ref<BlogData | null>(null);
const fetchMessage = ref("");
const messageType = ref("");

const formatDate = (time: string) => {
  return moment(time).format("MMMM Do YYYY");
};

const getMetaDescription = () => {
  if (!blog.value) return "";
  // Strip HTML tags and get plain text
  const plainText = blog.value.content?.replace(/<[^>]*>/g, "") || "";
  // Truncate to ~160 characters for meta description
  return plainText.length > 160
    ? plainText.substring(0, 157) + "..."
    : plainText;
};

const getCurrentUrl = () => {
  if (import.meta.client) {
    return window.location.href;
  }
  const category = route.params.category as string;
  const slug = route.params.slug as string;
  return `https://zacrac.com/blog/${category}/${slug}`;
};

// Computed slug from route params
const slug = computed(() => route.params.slug as string);

// Use useFetch instead of axios
const { data: response, pending, error } = await useFetch(
  `https://parrotapi.parrot.cx/blog/slug/${slug.value}`,
  {
    watch: [slug],
  }
);

// Handle response data
watch(
  response,
  (newResponse: any) => {
    if (newResponse?.status === "success") {
      blog.value = newResponse.data;
      fetchMessage.value = newResponse.message;
      messageType.value = "success";
    } else {
      blog.value = null;
      messageType.value = "fail";
      fetchMessage.value = "Failed to load blog";
    }
  },
  { immediate: true }
);

// Handle errors
watch(error, (err: any) => {
  if (err) {
    messageType.value = "fail";
    fetchMessage.value = err.data?.message || "Failed to load blog";
    blog.value = null;
  }
});

// Computed loading state from useFetch
const loading = computed(() => pending.value);

// Watch for blog changes and update meta tags
watch(
  blog,
  () => {
    nextTick(() => {
      if (import.meta.client) {
        updateMetaTags();
      }
    });
  },
  { immediate: true },
);

const updateMetaTags = () => {
  if (!blog.value) return;

  // Update document meta tags for social sharing
  const title = blog.value.title
    ? `${blog.value.title} | Zacrac`
    : "Blog | Zacrac";
  const description = getMetaDescription();
  const image = blog.value.imageUrl || "";
  const url = getCurrentUrl();

  // Update Open Graph tags
  updateMetaTag("og:title", title);
  updateMetaTag("og:description", description);
  updateMetaTag("og:image", image);
  updateMetaTag("og:url", url);
  updateMetaTag("og:type", "article");

  // Update Twitter Card tags
  updateMetaTag("twitter:title", title);
  updateMetaTag("twitter:description", description);
  updateMetaTag("twitter:image", image);
  updateMetaTag("twitter:card", "summary_large_image");

  // Update canonical URL
  const canonicalLink = document.querySelector('link[rel="canonical"]');
  if (canonicalLink) {
    canonicalLink.setAttribute("href", url);
  }

  // Update document title
  document.title = title;
};

const updateMetaTag = (property: string, content: string) => {
  let metaTag =
    document.querySelector(`meta[property="${property}"]`) ||
    document.querySelector(`meta[name="${property}"]`);

  if (metaTag) {
    metaTag.setAttribute("content", content);
  } else {
    metaTag = document.createElement("meta");
    if (property.startsWith("og:") || property.startsWith("article:")) {
      metaTag.setAttribute("property", property);
    } else {
      metaTag.setAttribute("name", property);
    }
    metaTag.setAttribute("content", content);
    document.head.appendChild(metaTag);
  }
};

// useFetch automatically fetches on mount and when slug changes
// No need for onMounted call

// SEO Meta
useHead(() => ({
  title: blog.value?.title ? `${blog.value.title} | Zacrac` : "Blog | Zacrac",
  meta: [
    {
      hid: "description",
      name: "description",
      content: getMetaDescription(),
    },
    {
      hid: "og:title",
      property: "og:title",
      content: blog.value?.title
        ? `${blog.value.title} | Zacrac`
        : "Blog | Zacrac",
    },
    {
      hid: "og:description",
      property: "og:description",
      content: getMetaDescription(),
    },
    {
      hid: "og:image",
      property: "og:image",
      content: blog.value?.imageUrl || "",
    },
    {
      hid: "og:type",
      property: "og:type",
      content: "article",
    },
    {
      hid: "og:url",
      property: "og:url",
      content: getCurrentUrl(),
    },
    {
      hid: "twitter:card",
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      hid: "twitter:title",
      name: "twitter:title",
      content: blog.value?.title
        ? `${blog.value.title} | Zacrac`
        : "Blog | Zacrac",
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content: getMetaDescription(),
    },
    {
      hid: "twitter:image",
      name: "twitter:image",
      content: blog.value?.imageUrl || "",
    },
    {
      hid: "author",
      name: "author",
      content: blog.value?.author || "",
    },
    {
      hid: "article:published_time",
      property: "article:published_time",
      content: blog.value?.createdAt || "",
    },
    {
      hid: "article:author",
      property: "article:author",
      content: blog.value?.author || "",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: getCurrentUrl(),
    },
  ],
}));
</script>

<style scoped>
/* @import "@/assets/scss/_mixin.scss"; */
.blog-level {
  padding: 5px 10px;
  background: #eeefff;
  color: #000462;
  font-size: 16px;
}

.line {
  width: 30px;
  height: 2px;
  background: linear-gradient(to right, #7d37d8, #dd6e20);
}
.other-blogs {
  max-height: 800px;
  overflow-y: scroll;

  /* @include sm {
    overflow-x: scroll;
    overflow-y: hidden;
  } */
}
::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgb(33, 63, 125, 0.3);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px #7d37d8;
}

.content :deep(a) {
  color: #68cef8;
  text-decoration: underline;
}

.content :deep(ul),
.content :deep(ol) {
  padding: 0 1rem;
}

.content :deep(ul) {
  list-style-type: disc;
}

.content :deep(ol) {
  list-style-type: upper-roman;
}

.content :deep(h1),
.content :deep(h2),
.content :deep(h3),
.content :deep(h4),
.content :deep(h5),
.content :deep(h6) {
  line-height: 1.1;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}

.content :deep(h1) {
  font-size: 48px;
}

.content :deep(h2) {
  font-size: 32px;
}

.content :deep(h3) {
  font-size: 24px;
}

.content :deep(h4) {
  font-size: 16px;
}

.content :deep(code) {
  background-color: rgba(#616161, 0.1);
  color: #616161;
}

.content :deep(pre) {
  background: #0d0d0d;
  color: #fff;
  font-family: "JetBrainsMono", monospace;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
}

.content :deep(pre code) {
  color: inherit;
  padding: 0;
  background: none;
  font-size: 0.8rem;
}

.content :deep(img) {
  max-width: 100%;
  height: auto;
}

.content :deep(blockquote) {
  padding-left: 1rem;
  border-left: 2px solid rgba(#0d0d0d, 0.1);
}

.content :deep(hr) {
  border: none;
  border-top: 2px solid rgba(#0d0d0d, 0.1);
  margin: 2rem 0;
}

.content :deep(p) {
  margin: 10px 0px;
  font-size: 17px;
}
</style>
