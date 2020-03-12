<template>
  <div class="league d-flex flex-column align-center" :class="{ 'justify-center': isLargeButtons }">
    <section class="league--buttons">
      <button class="league--button" :class="{ 'league--button--large': isLargeButtons, 'league--button--small': !isLargeButtons }" v-on:click="changeActiveTable('goalkeepers')">
        Goalkeepers
      </button>
      <button class="league--button" :class="{ 'league--button--large': isLargeButtons, 'league--button--small': !isLargeButtons }" v-on:click="changeActiveTable('outfield')">
        Outfield
      </button>
    </section>

    <DialogCard v-show="activeTable" />

    <v-expand-transition>
      <MaerskLeague v-show="activeTable === 'outfield'" />
    </v-expand-transition>

    <!-- This will be a section of goalkeepers -->
    <v-expand-transition>
      <MaerskKeeperLeague v-show="activeTable === 'goalkeepers'" />
    </v-expand-transition>
  </div>
</template>

<script>
import MaerskLeague from '@/components/MaerskLeague.vue';
import MaerskKeeperLeague from '@/components/MaerskKeeperLeague.vue';
import DialogCard from '@/components/DialogCard.vue';

export default {
  name: 'InHouseLeague',
  components: {
    MaerskLeague,
    MaerskKeeperLeague,
    DialogCard
  },
  data() {
    return {
      activeTable: '',
      isLargeButtons: true
    };
  },
  methods: {
    changeActiveTable(table) {
      if (!this.activeTable) {
        this.isLargeButtons = !this.isLargeButtons;
      }
      this.activeTable = table;
    }
  }
};
</script>

<style lang="scss" scoped>
.league {
  height: calc(100% - 49px);

  &--buttons {
    margin: 12px;
  }

  &--button {
    background: #235789;
    color: #fff;
    margin: 0 8px;

    &--large {
      font-size: 40px;
      font-weight: 500;
      height: 400px;
      width: 400px;
      border-radius: 50%;
    }
    &--small {
      font-size: 20px;
      height: 50px;
      width: 150px;
    }
  }
}
</style>
