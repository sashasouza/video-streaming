<template>
  <HeaderComponent></HeaderComponent>
  <FilterComponent @filter-results="filterResults"></FilterComponent>
  <div v-if="results.length == 0" class="load">
    <div class="loader"></div>
  </div>
  <div v-else>
    <h3>{{ results.length }} videos found!!</h3>
    <div v-for="video in results" :key="video.id">
      <IndividualVideo :video="video">
      </IndividualVideo>
    </div>
  </div>
</template>

<script>
import IndividualVideo from './Video.vue';
import FilterComponent from './Filter.vue';
import HeaderComponent from './Header.vue';

export default {
  name: 'VideoList',
  components: {
    IndividualVideo,
    FilterComponent,
    HeaderComponent,
  },
  data() {
    return {
      videos: [],
      results: [],
    }
  },
  methods: {
    async fetchVideos() {
      const res = await fetch('https://github-videos-api.onrender.com/videos')
      const data = await res.json()

      return data
    },

    filterResults(text) {
      this.results = this.videos.filter((video) =>
        video.title.toLowerCase().includes(text.toLowerCase()) ? video : ''
      )
    }
  },

  async created() {
    this.videos = await this.fetchVideos()
    this.results = this.videos
  }
}

</script>

<style scoped>
h3 {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2%;
}

.loader {
  border: 16px solid #f3f3f3;
  /* Light grey */
  border-top: 16px solid #3498db;
  /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.load {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2%;
}
</style>
