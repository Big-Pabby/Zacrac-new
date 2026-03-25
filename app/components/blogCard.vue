<template>
  <div class="blog-card-wrapper">
    <!-- Public View -->
    <nuxt-link
      v-if="editBlog === false"
      :to="`/blog/${category || 'uncategorized'}/${slug}`"
      class="blog-card public-card"
    >
      <div class="card-image">
        <img :src="blogImage" :alt="blogTitle" />
        <div class="image-overlay"></div>
      </div>
      <div class="card-content">
        <h2 class="card-title">{{ blogTitle }}</h2>
        <p class="card-excerpt" v-html="truncatedContent"></p>
        <div class="card-meta">
          <span class="meta-date">
            <i class="uil uil-calendar-alt"></i>
            {{ formattedDate }}
          </span>
          <span class="meta-divider"></span>
          <span class="meta-read-time">
            <i class="uil uil-clock"></i>
            {{ minsRead }} min read
          </span>
        </div>
      </div>
    </nuxt-link>

    <!-- Admin View -->
    <div v-else-if="editBlog === true" class="blog-card admin-card">
      <div class="card-image">
        <img :src="blogImage" :alt="blogTitle" />
        <div class="image-overlay"></div>
        <div class="card-actions">
          <nuxt-link
            :to="`/admins/posts/create/${slug}`"
            class="action-btn edit-btn"
          >
            <i class="uil uil-edit"></i>
            <span>Edit</span>
          </nuxt-link>
          <button class="action-btn delete-btn" @click.prevent="confirmDelete">
            <i class="uil uil-trash-alt"></i>
            <span>Delete</span>
          </button>
        </div>
      </div>
      <div class="card-content">
        <h2 class="card-title">{{ blogTitle }}</h2>
        <p class="card-excerpt" v-html="truncatedContent"></p>
        <div class="card-meta">
          <span class="meta-date">
            <i class="uil uil-calendar-alt"></i>
            {{ formattedDate }}
          </span>
          <span class="meta-divider"></span>
          <span class="meta-read-time">
            <i class="uil uil-clock"></i>
            {{ minsRead }} min read
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";

export default {
  props: {
    blogImage: {
      type: String,
      default: null,
    },
    blogTitle: {
      type: String,
      default: null,
    },
    blogContent: {
      type: String,
      default: null,
    },
    minsRead: {
      type: String,
      default: null,
    },
    created: {
      type: String,
      default: null,
    },
    slug: {
      type: String,
      default: null,
    },
    category: {
      type: String,
      default: null,
    },
    editBlog: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    formattedDate() {
      return moment(this.created).format("MMM Do, YYYY");
    },
    truncatedContent() {
      if (!this.blogContent) return "";
      // Strip HTML tags and truncate
      const text = this.blogContent.replace(/<[^>]*>/g, "");
      if (text.length > 100) {
        return text.substring(0, 100) + "...";
      }
      return text;
    },
  },
  methods: {
    date(time) {
      return moment(time).format("MMMM Do YYYY");
    },
    confirmDelete() {
      if (confirm("Are you sure you want to delete this post?")) {
        // Emit delete event or handle deletion
        this.$emit("delete", this.slug);
      }
    },
  },
};
</script>
<style scoped>
.blog-card-wrapper {
  height: 100%;
}

.blog-card {
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  text-decoration: none;
  height: 100%;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.blog-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
}

/* Image */
.card-image {
  position: relative;
  width: 100%;
  height: 180px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.blog-card:hover .card-image img {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.3));
  pointer-events: none;
}

/* Content */
.card-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.card-title {
  font-size: 18px;
  font-weight: 600;
  color: #1a1a2e;
  margin: 0 0 12px 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: color 0.2s ease;
}

.blog-card:hover .card-title {
  color: #7d37d8;
}

.card-excerpt {
  font-size: 14px;
  color: #6b7280;
  line-height: 1.6;
  margin: 0 0 16px 0;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Meta */
.card-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #9ca3af;
}

.card-meta i {
  font-size: 14px;
}

.meta-divider {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #d1d5db;
}

.meta-date,
.meta-read-time {
  display: flex;
  align-items: center;
  gap: 4px;
}

/* Admin Card Actions */
.card-actions {
  position: absolute;
  bottom: 12px;
  right: 12px;
  display: flex;
  gap: 8px;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
}

.admin-card:hover .card-actions {
  opacity: 1;
  transform: translateY(0);
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 14px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease;
}

.edit-btn {
  background: white;
  color: #7d37d8;
}

.edit-btn:hover {
  background: #7d37d8;
  color: white;
}

.delete-btn {
  background: white;
  color: #ef4444;
}

.delete-btn:hover {
  background: #ef4444;
  color: white;
}

.action-btn i {
  font-size: 14px;
}

/* Responsive */
@media (max-width: 640px) {
  .card-image {
    height: 160px;
  }

  .card-content {
    padding: 16px;
  }

  .card-title {
    font-size: 16px;
  }

  .card-actions {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
