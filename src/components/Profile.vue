<script setup>
// No logic needed for dummy content
</script>

<template>
    <div class="profile-container">
        <div class="profile-card">
            <img class="profile-avatar" src="https://randomuser.me/api/portraits/men/75.jpg" alt="Profile Photo">
            <h1 class="profile-name">John Doe</h1>
            <p class="profile-title">Web Developer & Blogger</p>
            <p class="profile-bio">
                Passionate about building modern web applications and sharing knowledge through blogs. Experienced in Vue.js, JavaScript, and UI/UX design.
            </p>
            <div class="profile-contact">
                <p><strong>Email:</strong> johndoe@email.com</p>
                <p><strong>Location:</strong> New York, USA</p>
                <p><strong>Website:</strong> <a href="#" target="_blank">www.johndoe.com</a></p>
            </div>
            <div class="profile-social">
                <a href="#" class="social-link">Twitter</a>
                <a href="#" class="social-link">LinkedIn</a>
                <a href="#" class="social-link">GitHub</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.profile-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
    background: linear-gradient(120deg, #e0e7ff 0%, #f5f7fa 100%);
}
.profile-card {
    background: #fff;
    border-radius: 22px;
    box-shadow: 0 8px 32px rgba(79,140,255,0.13);
    padding: 2.8rem 2.2rem 2.2rem 2.2rem;
    max-width: 420px;
    width: 100%;
    text-align: center;
    position: relative;
    overflow: hidden;
}
.profile-avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1.1rem;
    border: 5px solid #4f8cff;
    box-shadow: 0 2px 12px rgba(79,140,255,0.13);
}
.profile-name {
    font-size: 2.1rem;
    margin: 0.5rem 0 0.2rem 0;
    color: #222;
    font-weight: 700;
    letter-spacing: 1px;
}
.profile-title {
    color: #4f8cff;
    font-weight: 700;
    margin-bottom: 1.1rem;
    font-size: 1.1rem;
    letter-spacing: 0.5px;
}
.profile-bio {
    color: #555;
    font-size: 1.08rem;
    margin-bottom: 1.7rem;
    line-height: 1.6;
}
.profile-contact p {
    margin: 0.2rem 0;
    color: #333;
    font-size: 1rem;
}
.profile-contact a {
    color: #4f8cff;
    text-decoration: none;
}
.profile-social {
    margin-top: 1.5rem;
}
.social-link {
    margin: 0 0.7rem;
    color: #4f8cff;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.1rem;
    transition: color 0.2s;
}
.social-link:hover {
    color: #222;
}
@media (max-width: 600px) {
    .profile-card {
        padding: 1.2rem 0.5rem 1.2rem 0.5rem;
    }
    .profile-name {
        font-size: 1.3rem;
    }
}
</style>