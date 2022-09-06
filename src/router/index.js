import { createRouter, createWebHistory } from 'vue-router';
import VideoComponent from '../views/VideoComponent.vue';
import HomeComponent from '../views/Home.vue';


const routes = [
    {
        path: '/',
        redirect: { name: 'HomeComponent' }
    },
    {
        path: '/video-streaming/video-streaming/',
        redirect: { name: 'HomeComponent' }
    },
    {
        path: '/video-streaming/',
        name: 'HomeComponent',
        component: HomeComponent,
    },
    {
        path: '/video-streaming/screen',
        name: 'VideoComponent',
        component: VideoComponent,
        props: true,
        beforeEnter: (to, from, next) => {
            if (to.params.src) {
                next(); // <-- everything good, proceed
            } else {
                next({ name: 'HomeComponent' }); // <-- redirect to setup
            }
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router