<template>
  <div>
    <div class="home d-none d-md-block" :style="{ background: `url(${backgroundImage})`, backgroundSize: '100vw 100vh', backgroundRepeat: 'no-repeat' }">
      <Navigation :navLinks="navLinks" />
      <div class="d-flex justify-center align-center display-1">
        <h1 class="white--text">Maersk Football Club</h1>
      </div>
    </div>

    <div class="home d-md-none" :style="{ background: `url(${mobileBackgroundImage})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }">
      <Navigation :navLinks="navLinks" />
      <div class="text-center display-1">
        <h1 class="white--text home__mobile--heading">Maersk Football Club</h1>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
export default {
  name: 'Home',
  data() {
    return {
      backgroundImage: require('../assets/desktop-background.jpg'),
      mobileBackgroundImage: require('../assets/mobile-background.jpg'),
      navLinks: [
        {
          title: 'Home',
          icon: 'mdi-home'
        },
        {
          title: 'Maersk Prem League',
          icon: 'mdi-table'
        },
        {
          title: 'Prem League',
          icon: 'mdi-table'
        }
      ]
    };
  },
  components: {
    Navigation
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

.display-1 {
  line-height: 4rem !important;
}
</style>
