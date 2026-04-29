<template>
  <div class="blog-post-container">
    <div
      class="blog-post-content"
      :class="{ collapsed: !showAll }"
      v-html="htmlContent"
      ref="contentRef"
    ></div>
    <button
      v-if="isLong && !showAll"
      class="more-btn"
      @click="showAll = true"
    >
      More
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, watch } from 'vue'
import { marked } from 'marked'
import { useRoute } from 'vue-router'

const htmlContent = ref('')
const showAll = ref(false)
const isLong = ref(false)
const contentRef = ref(null)
const route = useRoute()

async function loadBlog() {
  showAll.value = false
  isLong.value = false
  const id = route.params.id || '1'
  const response = await fetch(`/blogs/blog${id}.md`)
  const markdown = await response.text()
  htmlContent.value = marked(markdown)
  await nextTick()
  if (contentRef.value && contentRef.value.scrollHeight > 400) {
    isLong.value = true
  }
}

onMounted(loadBlog)
watch(() => route.params.id, loadBlog)
</script>

<style scoped>
.blog-post-container {
  max-width: 700px;
  margin: 2.5rem auto 5rem auto;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(79,140,255,0.09);
  padding: 2.5rem 2rem;
  position: relative;
}

.blog-post-content {
  font-family: 'Segoe UI', 'Roboto', Arial, sans-serif;
  color: #222;
  line-height: 1.7;
  font-size: 1.13rem;
  transition: max-height 0.4s;
  overflow: hidden;
}

.blog-post-content.collapsed {
  max-height: 400px;
  position: relative;
  mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
}

.more-btn {
  display: block;
  margin: 1.5rem auto 0 auto;
  padding: 0.6rem 2.2rem;
  background: #4f8cff;
  color: #fff;
  border: none;
  border-radius: 22px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(79,140,255,0.09);
  transition: background 0.2s;
}
.more-btn:hover {
  background: #356ae6;
}

/* ...existing markdown styles... */
</style>