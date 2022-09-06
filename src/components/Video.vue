<template>

    <router-link
        :to="{ name: 'VideoComponent', params: { src: video.src, title: video.title, desc: video.desc, type: video.type } }"
        class="indiv">

        <video class="vjs-fill video-js" preload="auto">
            <source :src="video.src" :type=video.type />
        </video>
        <div class="info">
            <h3>{{ video.title }}</h3>
            <p v-if="video.desc.length < 100">{{ video.desc }}</p>
            <p v-else>{{ video.desc.substring(0, 100) + "..." }}</p>
        </div>
    </router-link>
</template>

<script>
import 'videojs-youtube/dist/Youtube.min.js';

import 'video.js/dist/video-js.min.css';

import 'video.js/dist/video.min.js';

export default {
    name: 'IndividualVideo',
    props: ['video'],
}
</script>

<style scoped>
.indiv {
    background: #f4f4f4;
    margin: 5px;
    padding: 10px 20px;
    cursor: pointer;
    max-width: 60%;
    margin: 30px auto;
    overflow: auto;
    min-height: 150px;
    padding: 30px;
    border-radius: 5px;
    display: flex;
    justify-content: left;
    align-items: center;
    flex-direction: row;
    text-decoration: null;
    color: black;
}

video {
    max-height: 20vh !important;
    max-width: 20vw !important;
}

.info {
    max-height: 20vh;
    min-height: 10vh;
    padding-left: 3%;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
}

p {
    padding-top: 2%;
    font-size: calc(0.3em + 1vmin);
    max-height: 10vh;
    width: 100%;
    overflow: hidden;
}

a {
    text-decoration: none;
}

@media only screen and (max-width: 785px) {
    .indiv {
        flex-direction: column;
    }

    video {
        min-width: 40vw !important;
    }

    .info {
        padding-top: 3%;
        padding-left: 0;
    }

    p {
        max-height: 30vh;
        font-size: calc(0.4em + 1vmin);
    }
}
</style>