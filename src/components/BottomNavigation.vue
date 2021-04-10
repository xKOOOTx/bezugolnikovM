<template>
  <div class="bottomNavigation">
    <div class="bottomNavigation__left">
      <div class="bottomNavigation__left_block">
        <v-icon class="bottomNavigation__left_arrowIcon">mdiChevronDown</v-icon>
        <a href="#" class="bottomNavigation__left_link-span">
          Scroll or press me to navigate
        </a>
      </div>
      <div class="bottomNavigation__left_block-span">
        <v-icon class="bottomNavigation__left_arrowIcon">mdiChevronDown</v-icon>
        <a href="#" class="bottomNavigation__left_link-span">
          Scroll or press me to navigate
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BottomNavigation'
}
</script>

<style scoped lang="scss">
@import "src/assets/style/style";
@import "src/assets/style/variales";

.bottomNavigation {
  display: flex;
  position: fixed;
  width: 90%;
  bottom: 30px;
  margin: 30px 80px;
  z-index: 2;
  &__left {
    display: flex;
    align-items: center;
    margin-left: 20px;
    &:hover .bottomNavigation__left_block {
      animation: swing-top-bck 0.1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
    &:hover .bottomNavigation__left_block-span {
      animation: swing-top-bck-another 0.1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
    &_link {
      display: block;
      transform: translateY(0%);
      opacity: 1;
      color: rgba($white, .7);
      &-span {
        display: block;
        transform: translateY(0);
        opacity: 0;
        color: $white;
      }
    }
    &_arrowIcon {
      color: $white;
    }
  }
}
.bottomNavigation__left_arrowIcon {
  color: $white;
}

// animation from swipe from bottom to top
@-webkit-keyframes swing-top-bck {
  0% {
    transform: translateY(0px);
    opacity: 1;
  }
  100% {
    transform: translateY(-50%);
    opacity: 0;
  }
}
@keyframes swing-top-bck {
  0% {
    transform: translateY(0px);
    opacity: 1;
  }
  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
}

@-webkit-keyframes swing-top-bck-another {
  0% {
    transform: translateY(0px);
    opacity: 0;
  }
  100% {
    transform: translateY(-100%);
    opacity: 100%;
  }
}
@keyframes swing-top-bck-another {
  0% {
    transform: translateY(0px);
    opacity: 0;
  }
  100% {
    transform: translateY(-100%);
    opacity: 100%;
  }
}

.fa-chevron-down {
  color: $white;
}
</style>
