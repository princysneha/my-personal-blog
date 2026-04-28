
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Dummy blog data (replace with real data or API call)
const blogPosts = ref([
    {
        id: '1',
        title: 'Getting Started with Vue 3',
        date: '2026-04-01',
        summary: 'Vue 3 is the latest version of Vue.js. In this post, we explore the basics of Vue 3 and how to get started.'
    },
    {
        id: '2',
        title: 'Building a Personal Website',
        date: '2026-04-10',
        summary: 'A personal website is a great way to showcase your work. Here are some tips and tricks for building one with Vue.'
    }
]);

function goToPost(id) {
    router.push(`/blogs/${id}`);
}
</script>

<template>
    <div class="blog-list-container">
        <h1 class="blog-list-title">📝 Blog Posts</h1>
        <div v-if="blogPosts.length === 0">
            <p>No blog posts yet.</p>
        </div>
        <div v-else class="blog-list-grid">
            <div v-for="post in blogPosts" :key="post.id" class="blog-list-card">
                <div class="blog-card-header">
                    <img class="blog-card-img" :src="`https://source.unsplash.com/400x200/?blog,${post.id}`" alt="Blog cover" />
                </div>
                <div class="blog-card-body">
                    <h2 class="blog-item-title">{{ post.title }}</h2>
                    <p class="blog-item-date">{{ post.date }}</p>
                    <p class="blog-item-summary">{{ post.summary }}</p>
                    <router-link :to="`/blogs/${post.id}`" class="read-more-link">Read More →</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.blog-list-container {
    max-width: 1100px;
    margin: 2.5rem auto;
    padding: 2rem 1.5rem;
}
.blog-list-title {
    font-size: 2.3rem;
    margin-bottom: 2.2rem;
    color: #222;
    text-align: center;
    letter-spacing: 1px;
}
.blog-list-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
}
.blog-list-card {
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.08);
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.18s, box-shadow 0.18s;
    display: flex;
    flex-direction: column;
}
.blog-list-card:hover {
    transform: translateY(-6px) scale(1.03);
    box-shadow: 0 8px 32px rgba(79,140,255,0.13);
}
.blog-card-header {
    width: 100%;
    height: 180px;
    overflow: hidden;
}
.blog-card-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}
.blog-card-body {
    padding: 1.2rem 1.3rem 1.5rem 1.3rem;
    flex: 1;
    display: flex;
    flex-direction: column;
}
.blog-item-title {
    font-size: 1.25rem;
    margin: 0 0 0.3rem 0;
    color: #4f8cff;
    font-weight: 700;
}
.blog-item-date {
    color: #888;
    font-size: 0.97rem;
    margin-bottom: 0.7rem;
}
.blog-item-summary {
    color: #333;
    font-size: 1.08rem;
    flex: 1;
}
</style>
.read-more-link {
    display: inline-block;
    margin-top: 1.1rem;
    color: #4f8cff;
    font-weight: 600;
    text-decoration: none;
    font-size: 1.05rem;
    transition: color 0.18s;
}
.read-more-link:hover {
    color: #222;
    text-decoration: underline;
}
.read-more-link {
    display: inline-block;
    margin-top: 1.1rem;
    color: #4f8cff;
    font-weight: 600;
    text-decoration: none;
    font-size: 1.05rem;
    transition: color 0.18s;
}
.read-more-link:hover {
    color: #222;
    text-decoration: underline;
}