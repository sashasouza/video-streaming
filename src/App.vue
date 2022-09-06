<template>
  <!--  <VideoComponent title="Video of Puppies"
    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    src="https://images.all-free-download.com/footage_preview/mp4/crowded_city_at_dusk_6892543.mp4" type="video/mp4">
  </VideoComponent> -->
  <router-view></router-view>
</template>

<script>
//import VideoComponent from './components/VideoComponent.vue';
//import VideoList from './components/VideoList.vue';

export default {
  name: 'App',

}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Times New Roman', 'Times', sans-serif;

}

.container {
  max-width: 60%;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
</style>
