<template>
  <div class="home" :style="{ background: `url(${backgroundImage})`, backgroundSize: '100%' }"></div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      backgroundImage: require('../assets/footballTwo.jpg')
    };
  }
};
</script>

<style lang="scss" scoped>
.home {
  position: absolute;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
}
</style>
