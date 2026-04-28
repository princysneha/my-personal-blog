<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const post = ref(null);

// Dummy blog data (replace with real data or API call)
const blogPosts = [
  {
    id: '1',
    title: 'Getting Started with Vue 3',
    date: '2026-04-01',
    content: 'Vue 3 is the latest version of Vue.js. In this post, we explore the basics of Vue 3 and how to get started.'
  },
  {
    id: '2',
    title: 'Building a Personal Website',
    date: '2026-04-10',
    content: 'A personal website is a great way to showcase your work. Here are some tips and tricks for building one with Vue.'
  }
];

onMounted(() => {
  post.value = blogPosts.find(p => p.id === route.params.id);
});
</script>

<template>
  <div class="blog-post-container" v-if="post">
    <div class="blog-post-hero">
      <img class="blog-post-img" :src="`https://source.unsplash.com/900x350/?blog,${post.id}`" alt="Blog cover" />
    </div>
    <div class="blog-post-content-wrap">
      <h1 class="blog-post-title">{{ post.title }}</h1>
      <p class="blog-post-date">{{ post.date }}</p>
      <div class="blog-post-content">{{ post.content }}</div>
    </div>
  </div>
  <div v-else>
    <p>Blog post not found.</p>
  </div>
</template>

<style scoped>
.blog-post-container {
  max-width: 900px;
  margin: 2.5rem auto;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  overflow: hidden;
}
.blog-post-hero {
  width: 100%;
  height: 260px;
  overflow: hidden;
}
.blog-post-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.blog-post-content-wrap {
  padding: 2.2rem 2.5rem 2.5rem 2.5rem;
}
.blog-post-title {
  font-size: 2.3rem;
  margin-bottom: 0.7rem;
  color: #4f8cff;
  font-weight: 700;
}
.blog-post-date {
  color: #888;
  font-size: 1.05rem;
  margin-bottom: 1.7rem;
}
.blog-post-content {
  font-size: 1.18rem;
  color: #333;
  line-height: 1.8;
}
@media (max-width: 700px) {
  .blog-post-content-wrap {
    padding: 1.2rem 0.7rem 1.5rem 0.7rem;
  }
  .blog-post-title {
    font-size: 1.4rem;
  }
}
</style>
