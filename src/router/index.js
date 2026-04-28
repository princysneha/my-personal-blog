import {createRouter, createWebHistory} from 'vue-router';
import Profile from '../components/Profile.vue'; 
import BlogList from '../components/BlogList.vue';

const routes = [
    {
        path: '/',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/blogs',
        name: 'Blogs',
        component: BlogList
    },
    {
        path: '/blogs/:id',
        name: 'BlogPost',
        component: () => import('../components/BlogPost.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;