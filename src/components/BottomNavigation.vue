<template>
  <div class="">
<!--    <div class="bottomNavigation" v-if="ifRouteChosen">
      <div class="bottomNavigation__left">
        <a href="#" class="bottomNavigation__left_link">
          <i class="fas fa-chevron-down bottomNavigation__left_arrowIcon"></i>
          Scroll or press me to navigate
        </a>
        <a @click="scrollDown" class="bottomNavigation__left_link-span" id="scroll_to_navigate">
          <i class="fas fa-chevron-down bottomNavigation__left_arrowIcon-span"></i>
          Scroll or press me to navigate
        </a>
      </div>
      <div class="bottomNavigation__right">
        <p class="bottomNavigation__right_text">
          Contacts
        </p>
        <div class="bottomNavigation__socials">
          <div class="bottomNavigation__socials_block">
            <a class="bottomNavigation__socials_whatsapp socials"><i class="fab fa-whatsapp"></i></a>
            <a class="bottomNavigation__socials_whatsapp-span socials-span"><i class="fab fa-whatsapp"></i></a>
          </div>
          <div class="bottomNavigation__socials_block">
            <a class="bottomNavigation__socials_vk socials"><i class="fab fa-vk"></i></a>
            <a class="bottomNavigation__socials_vk-span socials-span"><i class="fab fa-vk"></i></a>
          </div>
          <div class="bottomNavigation__socials_block">
            <a class="bottomNavigation__socials_instagram socials"><i class="fab fa-instagram"></i></a>
            <a class="bottomNavigation__socials_instagram-span socials-span"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>-->
    <div class="bottomNavigation">
      <div class="bottomNavigation__left">
        <a href="#" class="bottomNavigation__left_link">
          Please choose an item from Gallery
        </a>
        <a class="bottomNavigation__left_link-span" id="scroll_to_navigate">
          Please choose an item from Gallery
        </a>
      </div>
      <div class="bottomNavigation__right">
        <p class="bottomNavigation__right_text">
          Contacts
        </p>
        <div class="bottomNavigation__socials">
          <div class="bottomNavigation__socials_block">
            <a class="bottomNavigation__socials_whatsapp socials"><i class="fab fa-whatsapp"></i></a>
            <a href="https://wa.me/+79998198079" target="_blank" class="bottomNavigation__socials_whatsapp-span socials-span"><i class="fab fa-whatsapp"></i></a>
          </div>
          <div class="bottomNavigation__socials_block">
            <a class="bottomNavigation__socials_vk socials"><i class="fab fa-vk"></i></a>
            <a href="https://vk.com/michealbezug" target="_blank" class="bottomNavigation__socials_vk-span socials-span"><i class="fab fa-vk"></i></a>
          </div>
          <div class="bottomNavigation__socials_block">
            <a class="bottomNavigation__socials_instagram socials"><i class="fab fa-instagram"></i></a>
            <a href="https://www.instagram.com/bezugolnikov_photographer" target="_blank" class="bottomNavigation__socials_instagram-span socials-span"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
<!--    <div class="bottomNavigation" v-else>-->
<!--      <div class="bottomNavigation__left">-->
<!--        <button class="bottomNavigation__left_buttonLeft" @click="switchSlide('prev')">Previous</button>-->
<!--      </div>-->
<!--      <div class="bottom-navigation__middle">-->
<!--        <router-link-->
<!--          class="bottom-navigation__middle_button"-->
<!--          @click="chooseSlide()"-->
<!--          :to="'/events'"-->
<!--        >Chose</router-link>-->
<!--      </div>-->
<!--      <div class="bottomNavigation__right">-->
<!--        <button class="bottomNavigation__right_buttonRight" @click="switchSlide('next')">Next</button>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  name: 'BottomNavigation',
  data () {
    return {
      ifRouteChosen: false,
      props: {
        galleryLinks: []
      }
    }
  },
  methods: {
    // scrollDown () {
    //   const el = document.getElementById('scroll_to_navigate')
    //   el.scrollIntoView({ behavior: 'smooth' })
    // },
    // switchSlide (direction) {
    //   if (direction == 'next') {
    //     console.log('next')
    //   } else {
    //     console.log('prev')
    //   }
    // },
    // chooseSlide () {
    //   this.ifRouteChosen = true
    //   this.scrollDown()
    // }
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/style/style";
@import "src/assets/style/variales";

.bottomNavigation {
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  bottom: 0;
  margin: 30px 80px;
  z-index: 2;
  &__left_buttonLeft, &__right_buttonRight {
    font-size: 24px;
    color: $white;
  }
  &__left {
    display: block;
    align-items: center;
    line-height: 1;
    &:hover .bottomNavigation__left_link {
      animation: swing-top-bck 0.1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
    &:hover .bottomNavigation__left_link-span {
      animation: swing-top-bck-another 0.1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
    &_link {
      display: flex;
      align-items: center;
      transform: translateY(0);
      opacity: 1;
      font-size: 14px;
      color: rgba($white, .7);
      &-span {
        display: flex;
        transform: translateY(0%);
        opacity: 0;
        font-size: 14px;
        color: $white;
      }
    }
    &_arrowIcon {
      display: block;
      margin-right: 10px;
      color: rgba($white, .7);
      &-span {
        display: block;
        align-self: center;
        margin-right: 10px;
        color: $white;
      }
    }
    &_buttonLeft {
    }
    &_buttonRight {
    }
  }
  &__right {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: $white;
    &:hover &_text{
      color: #1DA1F2;
    }
    &_text {
      margin-right: 15px;
      margin-bottom: 20px;
      transition: color .2s ease-in-out;
    }
  }
  &__socials {
    display: flex;
    &_block {
      display: block;
      cursor: pointer;
      line-height: 1;
      &:hover .socials {
        animation: swing-top-bck 0.1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
      }
      &:hover .socials-span {
        animation: swing-top-bck-another 0.1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
      }
      & a {
        font-size: 18px;
      }
    }
    &_whatsapp-span {
      color: #25d366;
    }
    &_vk-span {
      color: #2787F5;
    }
    &_instagram-span {
      background-image: linear-gradient(45deg, #FFDC80,#FCAF45,#F77737,#F56040,#FD1D1D,#E1306C,#C13584,#833AB4,#5851DB,#405DE6);
      background-size: 100%;
      -webkit-background-clip: text;
      //-moz-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-text-fill-color: transparent;
    }
  }
  &-hidden {
    display: none;
  }
}

.socials {
  display: block;
  color: $white;
  cursor: pointer;
  font-size: 22px;
  line-height: 1;
  padding: 0 20px;
  transform: translateY(0);
  opacity: 1;
  &:hover {
    color: blue;
  }
  &-span {
    display: block;
    padding: 0 20px;
    font-size: 22px;
    line-height: 1;
    transform: translateY(0%);
    opacity: 0;
  }
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

@media (max-width: 450px) {
  .bottomNavigation__left {
    display: none;
  }
}
</style>
