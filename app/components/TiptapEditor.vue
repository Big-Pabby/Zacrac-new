<template>
  <div class="editor-wrapper">
    <!-- Toolbar -->
    <div v-if="editor" class="editor-toolbar">
      <div class="toolbar-section">
        <button
          @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
          class="toolbar-btn"
          title="Heading 1"
        >
          H1
        </button>
        <button
          @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
          class="toolbar-btn"
          title="Heading 2"
        >
          H2
        </button>
        <button
          @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
          class="toolbar-btn"
          title="Heading 3"
        >
          H3
        </button>
      </div>

      <div class="toolbar-divider"></div>

      <div class="toolbar-section">
        <button
          @click="editor.chain().focus().toggleBold().run()"
          :class="{ 'is-active': editor.isActive('bold') }"
          class="toolbar-btn"
          title="Bold"
        >
          <Icon name="uil:bold" />
        </button>
        <button
          @click="editor.chain().focus().toggleItalic().run()"
          :class="{ 'is-active': editor.isActive('italic') }"
          class="toolbar-btn"
          title="Italic"
        >
          <Icon name="uil:italic" />
        </button>
        <button
          @click="editor.chain().focus().toggleStrike().run()"
          :class="{ 'is-active': editor.isActive('strike') }"
          class="toolbar-btn"
          title="Strikethrough"
        >
          <Icon name="uil:text-strike-through" />
        </button>
        <button
          @click="editor.chain().focus().toggleCode().run()"
          :class="{ 'is-active': editor.isActive('code') }"
          class="toolbar-btn"
          title="Code"
        >
          <Icon name="uil:code" />
        </button>
      </div>

      <div class="toolbar-divider"></div>

      <div class="toolbar-section">
        <button
          @click="setLink"
          :class="{ 'is-active': editor.isActive('link') }"
          class="toolbar-btn"
          title="Add Link"
        >
          <Icon name="uil:link" />
        </button>
        <button
          @click="editor.chain().focus().unsetLink().run()"
          :disabled="!editor.isActive('link')"
          :class="{ 'is-active': editor.isActive('link') }"
          class="toolbar-btn"
          title="Remove Link"
        >
          <Icon name="uil:link-broken" />
        </button>
        <label class="toolbar-btn image-upload-btn" title="Upload Image">
          <input
            type="file"
            accept="image/*"
            class="hidden"
            @change="handleImageUpload"
            ref="imageInput"
          />
          <Icon name="uil:image" />
        </label>
        <button
          @click="addImagePrompt"
          class="toolbar-btn"
          title="Add Image from URL"
        >
          <Icon name="uil:link-alt" />
        </button>
      </div>

      <div class="toolbar-divider"></div>

      <div class="toolbar-section">
        <button
          @click="editor.chain().focus().toggleBulletList().run()"
          :class="{ 'is-active': editor.isActive('bulletList') }"
          class="toolbar-btn"
          title="Bullet List"
        >
          <Icon name="uil:list-ul" />
        </button>
        <button
          @click="editor.chain().focus().toggleOrderedList().run()"
          :class="{ 'is-active': editor.isActive('orderedList') }"
          class="toolbar-btn"
          title="Numbered List"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="list-ol"
            width="16"
            height="16"
          >
            <path
              fill="#4b5563"
              d="M7 20H4v-.1c0-.5.4-.9.9-.9 1.4 0 2.6-.9 3-2.2.4-1.6-.5-3.3-2.1-3.7-1.3-.4-2.7.2-3.4 1.4-.3.5-.1 1.1.4 1.4.5.3 1.1.1 1.4-.4.3-.5.9-.6 1.4-.3.1.1.2.1.2.2.2.3.2.6.2.9-.2.4-.6.7-1 .7-1.7 0-3 1.3-3 2.9V21c0 .6.4 1 1 1h4c.6 0 1-.4 1-1s-.4-1-1-1zm4-13h10c.6 0 1-.4 1-1s-.4-1-1-1H11c-.6 0-1 .4-1 1s.4 1 1 1zM7 9H6V3c0-.6-.4-1-1-1s-1 .4-1 1v1H3c-.6 0-1 .4-1 1s.4 1 1 1h1v3H3c-.6 0-1 .4-1 1s.4 1 1 1h4c.6 0 1-.4 1-1s-.4-1-1-1zm14 7H11c-.6 0-1 .4-1 1s.4 1 1 1h10c.6 0 1-.4 1-1s-.4-1-1-1z"
            ></path>
          </svg>
        </button>
      </div>

      <div class="toolbar-divider"></div>

      <div class="toolbar-section">
        <button
          @click="editor.chain().focus().setTextAlign('left').run()"
          :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }"
          class="toolbar-btn"
          title="Align Left"
        >
          <Icon name="uil:align-left" />
        </button>
        <button
          @click="editor.chain().focus().setTextAlign('center').run()"
          :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }"
          class="toolbar-btn"
          title="Align Center"
        >
          <Icon name="uil:align-center" />
        </button>
        <button
          @click="editor.chain().focus().setTextAlign('right').run()"
          :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }"
          class="toolbar-btn"
          title="Align Right"
        >
          <Icon name="uil:align-right" />
        </button>
        <button
          @click="editor.chain().focus().setTextAlign('justify').run()"
          :class="{ 'is-active': editor.isActive({ textAlign: 'justify' }) }"
          class="toolbar-btn"
          title="Justify"
        >
          <Icon name="uil:align-justify" />
        </button>
      </div>

      <div class="toolbar-divider"></div>

      <div class="toolbar-section">
        <button
          @click="editor.chain().focus().setHardBreak().run()"
          class="toolbar-btn"
          title="Line Break"
        >
          <Icon name="uil:arrow-down" />
        </button>
        <button
          @click="editor.chain().focus().toggleBlockquote().run()"
          :class="{ 'is-active': editor.isActive('blockquote') }"
          class="toolbar-btn"
          title="Quote"
        >
          <Icon name="uil:comment-alt" />
        </button>
        <button
          @click="editor.chain().focus().toggleCodeBlock().run()"
          :class="{ 'is-active': editor.isActive('codeBlock') }"
          class="toolbar-btn"
          title="Code Block"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="brackets-curly"
            width="16"
            height="16"
          >
            <path
              fill="#4b5563"
              d="M6 6a2 2 0 0 1 2-2 1 1 0 0 0 0-2 4 4 0 0 0-4 4v3a2 2 0 0 1-2 2 1 1 0 0 0 0 2 2 2 0 0 1 2 2v3a4 4 0 0 0 4 4 1 1 0 0 0 0-2 2 2 0 0 1-2-2v-3a4 4 0 0 0-1.38-3A4 4 0 0 0 6 9Zm16 5a2 2 0 0 1-2-2V6a4 4 0 0 0-4-4 1 1 0 0 0 0 2 2 2 0 0 1 2 2v3a4 4 0 0 0 1.38 3A4 4 0 0 0 18 15v3a2 2 0 0 1-2 2 1 1 0 0 0 0 2 4 4 0 0 0 4-4v-3a2 2 0 0 1 2-2 1 1 0 0 0 0-2Z"
            ></path>
          </svg>
        </button>
      </div>

      <!-- Upload Progress -->
      <div v-if="uploading" class="upload-progress">
        <div class="progress-bar">
          <div
            class="progress-fill"
            :style="{ width: uploadProgress + '%' }"
          ></div>
        </div>
        <span>Uploading... {{ uploadProgress }}%</span>
      </div>
    </div>

    <!-- Editor Content -->
    <editor-content class="editor-content" :editor="editor" />
  </div>
</template>

<script>
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Heading from "@tiptap/extension-heading";
import Image from "@tiptap/extension-image";
import { Editor, EditorContent } from "@tiptap/vue-3";
import TextAlign from "@tiptap/extension-text-align";

export default {
  components: {
    EditorContent,
  },
  props: {
    modelValue: {
      type: String,
      default: "",
    },
  },
  emits: ["update:modelValue"],

  data() {
    return {
      editor: null,
      uploading: false,
      uploadProgress: 0,
    };
  },

  watch: {
    modelValue: {
      handler(modelValue) {
        if (!this.editor || !modelValue) return;

        const currentContent = this.editor.getHTML();
        // Only update if content is actually different and not the default placeholder
        const isDefaultContent =
          currentContent === "<p>I'm running Tiptap with Vue.js. 🎉</p>" ||
          currentContent === "<p></p>" ||
          currentContent === "";

        if (isDefaultContent || currentContent !== modelValue) {
          this.editor.commands.setContent(modelValue, false);
        }
      },
    },
  },

  mounted() {
    // Only create editor on client side to avoid SSR issues
    if (!process.client) return;

    this.editor = new Editor({
      extensions: [
        StarterKit,
        Link.configure({
          openOnClick: false,
        }),
        TextAlign.configure({
          types: ["heading", "paragraph", "image"],
        }),
        Heading.configure({
          levels: [1, 2, 3, 4],
        }),
        Image.configure({
          inline: false,
          allowBase64: true,
        }),
      ],
      content: this.modelValue,
      onUpdate: () => {
        this.$emit("update:modelValue", this.editor.getHTML());
      },
    });
  },
  methods: {
    setLink() {
      const previousUrl = this.editor.getAttributes("link").href;
      const url = process.client
        ? window.prompt("Enter URL", previousUrl)
        : null;

      if (url === null) {
        return;
      }

      if (url === "") {
        this.editor.chain().focus().extendMarkRange("link").unsetLink().run();
        return;
      }

      this.editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url })
        .run();
    },

    addImagePrompt() {
      const url = process.client ? window.prompt("Enter image URL") : null;
      if (url) {
        this.editor.chain().focus().setImage({ src: url }).run();
      }
    },

    handleImageUpload(event) {
      const file = event.target.files[0];
      if (!file) return;

      // Validate file
      if (!file.type.startsWith("image/")) {
        this.$toast.error("Please select an image file");
        return;
      }

      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        this.$toast.error("Image size must be less than 5MB");
        return;
      }

      this.uploading = true;
      this.uploadProgress = 0;

      const formData = new FormData();
      formData.append("file", file);

      // Simulate progress
      const progressInterval = setInterval(() => {
        if (this.uploadProgress < 90) {
          this.uploadProgress += 10;
        }
      }, 100);

      this.$axios
        .post("https://parrotapi.parrot.cx/media/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total,
            );
            this.uploadProgress = percentCompleted;
          },
        })
        .then((res) => {
          clearInterval(progressInterval);
          this.uploadProgress = 100;

          if (res.data && res.data.data && res.data.data.location) {
            this.editor
              .chain()
              .focus()
              .setImage({ src: res.data.data.location })
              .run();
            this.$toast.success("Image uploaded successfully!");
          } else {
            this.$toast.error("Failed to get image URL");
          }
        })
        .catch((err) => {
          clearInterval(progressInterval);
          console.error("Upload error:", err);
          this.$toast.error(
            err.response?.data?.message || "Failed to upload image",
          );
        })
        .finally(() => {
          setTimeout(() => {
            this.uploading = false;
            this.uploadProgress = 0;
          }, 500);
          // Reset file input
          event.target.value = "";
        });
    },
  },

  beforeUnmount() {
    this.editor.destroy();
  },
  methods: {
    updateContent(content) {
      if (this.editor && content) {
        this.editor.commands.setContent(content, false);
      }
    },
  },
};
</script>

<style scoped>
.editor-wrapper {
  border-radius: 12px;
  overflow: hidden;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

/* Toolbar Styles */
.editor-toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: #f8f9fc;
  border-bottom: 1px solid #e5e7eb;
}

.toolbar-section {
  display: flex;
  align-items: center;
  gap: 4px;
}

.toolbar-divider {
  width: 1px;
  height: 24px;
  background: #e5e7eb;
  margin: 0 4px;
}

.toolbar-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: none;
  background: white;
  border-radius: 8px;
  color: #4b5563;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.toolbar-btn:hover {
  background: #7d37d8;
  color: white;
}

.toolbar-btn.is-active {
  background: linear-gradient(105.26deg, #7d37d8 4.14%, #dd6e20 84.4%);
  color: white;
}

.toolbar-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.toolbar-btn:disabled:hover {
  background: white;
  color: #4b5563;
}

.toolbar-btn i {
  font-size: 18px;
}

.image-upload-btn {
  position: relative;
  cursor: pointer;
}

.image-upload-btn input {
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

/* Upload Progress */
.upload-progress {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  background: white;
  border-radius: 8px;
  font-size: 13px;
  color: #6b7280;
  margin-left: auto;
}

.progress-bar {
  width: 100px;
  height: 6px;
  background: #e5e7eb;
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(105.26deg, #7d37d8 4.14%, #dd6e20 84.4%);
  transition: width 0.3s ease;
}

/* Editor Content */
.editor-content {
  padding: 20px;
  min-height: 350px;
  max-height: 500px;
  overflow-y: auto;
}

/* Responsive */
@media (max-width: 768px) {
  .editor-toolbar {
    padding: 8px;
    gap: 4px;
  }

  .toolbar-btn {
    width: 32px;
    height: 32px;
  }

  .toolbar-divider {
    height: 20px;
  }

  .upload-progress {
    width: 100%;
    margin-top: 8px;
    justify-content: center;
  }
}
</style>

<style>
/* Global ProseMirror styles - must be unscoped */
.ProseMirror {
  outline: none;
  min-height: 300px;
  font-family:
    "Bricolage Grotesque",
    -apple-system,
    BlinkMacSystemFont,
    sans-serif;
  font-size: 16px;
  line-height: 1.7;
  color: #1a1a2e;
}

.ProseMirror:focus {
  outline: none;
}

.ProseMirror > * + * {
  margin-top: 0.75em;
}

.ProseMirror p.is-editor-empty:first-child::before {
  content: attr(data-placeholder);
  float: left;
  color: #9ca3af;
  pointer-events: none;
  height: 0;
}

.ProseMirror a {
  color: #7d37d8;
  text-decoration: underline;
  cursor: pointer;
}

.ProseMirror ul,
.ProseMirror ol {
  padding: 0 1.5rem;
}

.ProseMirror ul {
  list-style-type: disc;
}

.ProseMirror ol {
  list-style-type: decimal;
}

.ProseMirror li {
  margin: 0.5em 0;
}

.ProseMirror h1,
.ProseMirror h2,
.ProseMirror h3,
.ProseMirror h4,
.ProseMirror h5,
.ProseMirror h6 {
  line-height: 1.3;
  color: #1a1a2e;
  font-weight: 700;
  margin-top: 1.5em;
  margin-bottom: 0.5em;
}

.ProseMirror h1 {
  font-size: 36px;
}

.ProseMirror h2 {
  font-size: 28px;
}

.ProseMirror h3 {
  font-size: 22px;
}

.ProseMirror h4 {
  font-size: 18px;
}

.ProseMirror code {
  background-color: #f3f4f6;
  color: #7d37d8;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: "Matter", monospace;
  font-size: 0.9em;
}

.ProseMirror pre {
  background: #1a1a2e;
  color: #fff;
  font-family: "Matter", monospace;
  padding: 1rem;
  border-radius: 8px;
  overflow-x: auto;
}

.ProseMirror pre code {
  color: inherit;
  padding: 0;
  background: none;
  font-size: 0.85rem;
}

.ProseMirror img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 1rem 0;
  display: block;
}

.ProseMirror blockquote {
  padding: 0.5rem 1rem;
  border-left: 4px solid #7d37d8;
  color: #6b7280;
  font-style: italic;
  margin: 1rem 0;
  background: #f9fafb;
  border-radius: 0 8px 8px 0;
}

.ProseMirror hr {
  border: none;
  border-top: 2px solid #e5e7eb;
  margin: 2rem 0;
}

.ProseMirror table {
  border-collapse: collapse;
  width: 100%;
  margin: 1rem 0;
}

.ProseMirror th,
.ProseMirror td {
  border: 1px solid #e5e7eb;
  padding: 8px 12px;
  text-align: left;
}

.ProseMirror th {
  background: #f9fafb;
  font-weight: 600;
}

/* Placeholder */
.ProseMirror p.is-editor-empty:first-child::before {
  content: "Start writing your content...";
  color: #9ca3af;
  float: left;
  height: 0;
  pointer-events: none;
}
</style>
