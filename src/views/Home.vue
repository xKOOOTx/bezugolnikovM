<template>
  <div class="home">
    <div class="introduction">
      <BottomNavigation />
    </div>
    <router-view />
  </div>
</template>

<script>
import BottomNavigation from '../components/BottomNavigation'

export default {
  name: 'Home',
  components: {
    BottomNavigation
  },
  data () {
    return {
    }
  },
  methods: {
    toTop () {
      this.$vuetify.goTo(0)
    }
  }
}
</script>

<style lang="scss">
@import '../assets/style/style';
@import '../assets/style/variales';

.home {
  height: 100vh;
}
.introduction {
  position: relative;
  height: 100vh;
  background: url("../assets/images/DSC_9409.jpg") center no-repeat;
  background-size: cover;
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

// animation from swipe from bottom to top for span
@-webkit-keyframes swing-top-bck-another {
  0% {
    transform: translateY(0px);
    opacity: 0;
  }
  100% {
    transform: translateY(-100%);
    opacity: 1;
  }
}
@keyframes swing-top-bck-another {
  0% {
    transform: translateY(0px);
    opacity: 0;
  }
  100% {
    transform: translateY(-100%);
    opacity: 1;
  }
}

// keyframe for Follow Us block
@-webkit-keyframes liftFollowUs {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50px);
  }
}
@keyframes liftFollowUs {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50px);
  }
}
</style>
