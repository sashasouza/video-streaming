<template>
    <div class="container">

        <h2 class="title">{{ title }}</h2>

        <video ref="videoPlayer" controls preload="auto" class="video-js vjs-fill" data-setup='{}' autoplay="true">

            <source :src="src" :type=type />

        </video>

        <p class="desc">
            {{ desc }}
        </p>

    </div>
</template>
  
<script>

import 'videojs-youtube/dist/Youtube.min.js';

import 'video.js/dist/video-js.min.css';

import 'video.js/dist/video.min.js';

export default {
    name: 'VideoComponent',
    props: ['title', 'src', 'type', 'desc'],
}

</script>

<style>
.title {
    padding-bottom: 3%;
}

.desc {
    padding-top: 3%;
}
</style>
  