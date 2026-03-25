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
    <div v-else-if="blog" class="w-full">
      <!-- Hero Section with Linear Gradient Overlay -->
      <div
        class="relative w-full h-[60vh] md:h-[70vh] min-h-[400px] bg-cover bg-center bg-no-repeat"
        :style="{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.80), rgba(0, 0, 0, 0.6)), url(${blog.imageUrl})`,
        }"
      >
        <div class="absolute inset-0 flex items-center">
          <div class="w-full px-5 max-w-6xl lg:px-20 pt-24">
            <!-- Back Button -->
            <div class="mb-6">
              <button
                @click="$router.back()"
                class="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                <Icon name="uil:arrow-left" class="text-white/90 text-xl" />
                <span>Back to Blogs</span>
              </button>
            </div>

            <!-- Blog Meta -->
            <div class="flex flex-wrap items-center gap-4 mb-4">
              <span
                class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm"
              >
                {{ formatDate(blog.createdAt) }}
              </span>
              <span
                v-if="blog.type"
                class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm"
              >
                {{ blog.type }}
              </span>
            </div>

            <!-- Blog Title -->
            <h1
              class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
            >
              {{ blog.title }}
            </h1>

            <!-- Author & Read Time -->
            <div class="flex flex-wrap items-center gap-6">
              <!-- Author -->
              <div v-if="blog.author" class="flex items-center gap-3">
                <div
                  class="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-semibold text-lg border-2 border-white/30"
                >
                  {{ blog.author.charAt(0).toUpperCase() }}
                </div>
                <div>
                  <p class="text-sm text-white/70">Author</p>
                  <p class="font-medium text-white">{{ blog.author }}</p>
                </div>
              </div>

              <!-- Read Time -->
              <div
                v-if="blog.minsToRead"
                class="flex items-center gap-2 text-white/80"
              >
                <Icon name="uil:clock" class="text-white/80"></Icon>
                <span>{{ blog.minsToRead }} min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Content Section -->
      <div class="pt-16 pb-10 px-5 lg:px-20 mb-20">
        <div class="w-full mx-auto">
          <!-- Content — no `prose` class to avoid Tailwind Typography conflicts -->
          <div class="bg-[#FCFCFD] content py-8 px-6 md:px-10 rounded-lg">
            <div v-html="blog.content"></div>
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
  const plainText = blog.value.content?.replace(/<[^>]*>/g, "") || "";
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

const slug = computed(() => route.params.slug as string);

const {
  data: response,
  pending,
  error,
} = await useFetch(`https://parrotapi.parrot.cx/blog/slug/${slug.value}`, {
  watch: [slug],
});

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
  { immediate: true },
);

watch(error, (err: any) => {
  if (err) {
    messageType.value = "fail";
    fetchMessage.value = err.data?.message || "Failed to load blog";
    blog.value = null;
  }
});

const loading = computed(() => pending.value);

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

  const title = blog.value.title
    ? `${blog.value.title} | Zacrac`
    : "Blog | Zacrac";
  const description = getMetaDescription();
  const image = blog.value.imageUrl || "";
  const url = getCurrentUrl();

  updateMetaTag("og:title", title);
  updateMetaTag("og:description", description);
  updateMetaTag("og:image", image);
  updateMetaTag("og:url", url);
  updateMetaTag("og:type", "article");

  updateMetaTag("twitter:title", title);
  updateMetaTag("twitter:description", description);
  updateMetaTag("twitter:image", image);
  updateMetaTag("twitter:card", "summary_large_image");

  const canonicalLink = document.querySelector('link[rel="canonical"]');
  if (canonicalLink) {
    canonicalLink.setAttribute("href", url);
  }

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

/* ─── Content styles — synced 1:1 with TipTap ProseMirror editor ─── */

.content :deep(*) {
  font-family:
    "Bricolage Grotesque",
    -apple-system,
    BlinkMacSystemFont,
    sans-serif;
  line-height: 1.7;
}

/* Spacing: mirrors .ProseMirror > * + * { margin-top: 0.75em } */
.content :deep(> * + *) {
  margin-top: 0.75em;
}

/* Paragraphs */
.content :deep(p) {
  margin: 0;
  font-size: 16px;
  line-height: 1.7;
}

/* Headings — synced to editor sizes */
.content :deep(h1),
.content :deep(h2),
.content :deep(h3),
.content :deep(h4),
.content :deep(h5),
.content :deep(h6) {
  line-height: 1.3;
  color: #1a1a2e;
  font-weight: 700;
  margin-top: 1.5em;
  margin-bottom: 0.5em;
}
.content :deep(h1) {
  font-size: 36px !important;
}
.content :deep(h2) {
  font-size: 28px !important;
}
.content :deep(h3) {
  font-size: 22px !important;
}
.content :deep(h4) {
  font-size: 18px !important;
}
.content :deep(h5) {
  font-size: 16px !important;
}
.content :deep(h6) {
  font-size: 14px !important;
}

/* Links */
.content :deep(a) {
  color: #7d37d8 !important;
  text-decoration: underline;
  cursor: pointer;
}

/* Lists — synced to editor (decimal, not upper-roman) */
.content :deep(ul),
.content :deep(ol) {
  padding: 0 1.5rem;
}

.content :deep(ul) {
  list-style-type: disc;
}

.content :deep(ol) {
  list-style-type: decimal;
}

.content :deep(li) {
  margin: 0.5em 0;
}

/* Inline code */
.content :deep(code) {
  background-color: #f3f4f6;
  color: #7d37d8;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: "Matter", monospace;
  font-size: 0.9em;
}

/* Code blocks */
.content :deep(pre) {
  background: #1a1a2e;
  color: #fff;
  font-family: "Matter", monospace;
  padding: 1rem;
  border-radius: 8px;
  overflow-x: auto;
}

.content :deep(pre code) {
  color: inherit;
  padding: 0;
  background: none;
  font-size: 0.85rem;
}

/* Images */
.content :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 1rem 0;
  display: block;
}

/* Blockquote */
.content :deep(blockquote) {
  padding: 0.5rem 1rem;
  border-left: 4px solid #7d37d8;
  color: #6b7280;
  font-style: italic;
  margin: 1rem 0;
  background: #f9fafb;
  border-radius: 0 8px 8px 0;
}

/* Horizontal rule */
.content :deep(hr) {
  border: none;
  border-top: 2px solid #e5e7eb;
  margin: 2rem 0;
}

/* Tables */
.content :deep(table) {
  border-collapse: collapse;
  width: 100%;
  margin: 1rem 0;
}

.content :deep(th),
.content :deep(td) {
  border: 1px solid #e5e7eb;
  padding: 8px 12px;
  text-align: left;
}

.content :deep(th) {
  background: #f9fafb;
  font-weight: 600;
}
</style>
