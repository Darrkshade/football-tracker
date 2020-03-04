<template>
  <div class="home d-sm-inline-flex justify-center align-center flex-wrap flex-column" style="height: calc(100vh - 48px)">
    <h1 class="pa-4">Maidenhead Maersk FC</h1>
    <p>100% Win Rate! UNBEATEN SEASON!</p>
    <p>Play us if you dare to lose!</p>
    <img :src="teamPhoto" alt="" />

    <div class="home__footer-disclaimer">
      Made and managed by Daniel Davies &copy;
      <p>
        We do not represent or have affiliation with the business, we are just employees
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      teamPhoto: require('../assets/team-photo.png')
    };
  }
};
</script>

<style lang="scss" scoped>
.home {
  position: absolute;
  background-repeat: no-repeat;
  width: 100%;
}

.display-1 {
  line-height: 4rem !important;
}

@media screen and (min-width: 600px) {
  .home {
    &--table {
      width: 50%;
      max-width: 400px;
      min-width: 250px;
    }

    &__footer-disclaimer {
      position: absolute;
      bottom: 0;
      right: 0;
      opacity: 0.2;
      text-align: right;
    }
  }
}
</style>
