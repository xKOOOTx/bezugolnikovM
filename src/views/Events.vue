<template>
    <div class="events">
      <Home />
      <div class="aboutBlock">
        <section class="about">
          <h2 class="about__subtitle">
            About the project
          </h2>
          <h1 class="about__title">
            Fashion editorials are a collection of pictures
            created by the industry's leading talent.
          </h1>
          <p class="about__text">
            There are many variations of passages of
            Lorem Ipsum available, but the majority
            have suffered alteration in some form, by
            injected humour, or randomised words
            which don't look even slightly believable.
          </p>
          <button class="about__button">
            Read more
            <i class="fas fa-chevron-right"></i>
          </button>
        </section>
        <div class="about__imgWrapper">
          <img src="../assets/images/2k/wedding(bw).jpg" alt="photo">
        </div>
        <div class="about__bottom">
          <div class="about__bottom_imgBlock">
            <img class="about__bottom_img" src="../assets/images/2k/wedding(bw).jpg" alt="photo">
            <img class="about__bottom_img" src="../assets/images/2k/wedding(bw).jpg" alt="photo">
          </div>
          <section class="about__description">
            <h2 class="about__description_header">
              In photography there is a reality
              so subtle that it becomes more
              real than reality
            </h2>
            <span class="about__description_name">
            Alfred Stieglitz
          </span>
          </section>
        </div>
      </div>
      <div class="photo">
        <img src="../assets/images/2k/wedding(bw)wide.jpg" alt="photo">
      </div>
      <div class="finalShots">
        <div class="finalShots__text">
          <h3 class="finalShots__subtitle">final shots</h3>
          <h1 class="finalShots__title">Just more pictures of this black and white editorial</h1>
        </div>
      </div>
      <div class="slider">
        <splide :options="options" class="slider__block">
          <splide-slide v-for="image in sliderImages" :key=image.name>
            <img :src=image.path :alt=image.alt class="slider__block_image">
          </splide-slide>
        </splide>
      </div>
      <div class="spacer-small"></div>
      <div class="footer">
        <div class="footer__bottom">
          <div class="footer__backTop">
            <a :href="`#home`" class="footer__link">
              <i class="fas fa-chevron-up"></i>
              back top
            </a>
            <span class="footer__link-span">
            <a :href="`#top`">
              <i class="fas fa-chevron-up"></i>
              back top
            </a>
          </span>
          </div>
          <div class="footer__copyright">
            <p>2020&copy; copyright</p>
          </div>
          <div class="footer__followUs">
            <div class="footer__followUs_block">
              follow us
              <span>
              <i class="fas fa-share-alt"></i>
            </span>
            </div>
            <div class="footer__followUs_socials">
              <template v-for="social in footerSocials">
                <a href="#" :class=social.class :key=social.name>
                  <i :class=social.iClass></i>
                </a>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Home from '@/views/Home'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'

export default {
  name: 'Events',
  components: {
    Home,
    Splide,
    SplideSlide
  },
  data () {
    return {
      sliderImages: [
        {
          name: 'photoName1',
          path: require('../assets/images/2k/wedding(bw).jpg'),
          alt: 'photoAlt'
        },
        {
          name: 'photoName2',
          path: require('../assets/images/2k/wedding(bw).jpg'),
          alt: 'photoAlt'
        },
        {
          name: 'photoName3',
          path: require('../assets/images/2k/wedding(bw).jpg'),
          alt: 'photoAlt'
        },
        {
          name: 'photoName4',
          path: require('../assets/images/2k/wedding(bw).jpg'),
          alt: 'photoAlt'
        },
        {
          name: 'photoName5',
          path: require('../assets/images/2k/wedding(bw).jpg'),
          alt: 'photoAlt'
        },
        {
          name: 'photoName6',
          path: require('../assets/images/2k/wedding(bw).jpg'),
          alt: 'photoAlt'
        },
        {
          name: 'photoName7',
          path: require('../assets/images/2k/wedding(bw).jpg'),
          alt: 'photoAlt'
        },
        {
          name: 'photoName8',
          path: require('../assets/images/2k/wedding(bw).jpg'),
          alt: 'photoAlt'
        },
        {
          name: 'photoName9',
          path: require('../assets/images/2k/wedding(bw).jpg'),
          alt: 'photoAlt'
        },
        {
          name: 'photoName10',
          path: require('../assets/images/2k/wedding(bw).jpg'),
          alt: 'photoAlt'
        }
      ],
      footerSocials: [
        {
          name: 'vk',
          class: 'footer__followUs_socials-link-vk',
          iClass: 'fab fa-vk'
        },
        {
          name: 'instagram',
          class: 'footer__followUs_socials-link-instagram',
          iClass: 'fab fa-instagram'
        },
        {
          name: 'facebook',
          class: 'footer__followUs_socials-link-facebook',
          iClass: 'fab fa-facebook-f'
        },
        {
          name: 'twitter',
          class: 'footer__followUs_socials-link-twitter',
          iClass: 'fab fa-twitter'
        },
        {
          name: 'whatsapp',
          class: 'footer__followUs_socials-link-whatsapp',
          iClass: 'fab fa-whatsapp'
        }
      ],
      options: {
        type: 'loop',
        rewind: 'true',
        gap: 800,
        perPage: 2,
        start: 2,
        easing: 'cubic-bezier(.42,.65,.27,.99)',
        height: 600,
        padding: 200
      }
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
@import '../assets/style/style';
@import '../assets/style/variales';

.aboutBlock {
  position: relative;
  background-color: $greyBackground;
}
.about {
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  font-family: 'Poppins', sans-serif;
  padding: 80px 0 150px 0;
  background-color: $greyBackground;
  background-size: cover;
  &__subtitle {
    margin: 0 auto 15px;
    width: 100%;
    font-size: 18px;
    font-weight: 500;
    text-transform: capitalize;
    color: $pink;
  }
  &__title {
    margin: 0 auto;
    max-width: 800px;
    font-family: 'Roboto Slab', serif;
    font-size: 36px;
    font-weight: 500;
    line-height: 1.6;
    color: $white;
  }
  &__text {
    margin-top: 50px;
    margin-left: 280px;
    max-width: 500px;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    font-weight: 300;
    line-height: 2;
    margin-bottom: 10px;
    color: $greyText;
  }
  &__button {
    display: flex;
    align-items: center;
    position: relative;
    margin-left: 280px;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    color: $white;
    padding: 5px 10px;
    border-radius: 3px;
    &:after {
      display: block;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 20%;
      height: 100%;
      background-color: rgba($white, .15);
    }
    &:hover {
      &:after {
        width: 100%;
        animation: backgroundButtonWidth .2s ease-in-out;
      }
    }
    & i {
      margin-left: 25px;
    }
  }
  &__imgWrapper {
    position: relative;
    height: 300px;
    background-color: $greyBackground;
    & img {
      position: absolute;
      width: 1226px;
      top: 0;
      left: 10.1%;
    }
  }
  &__bottom {
    &_imgBlock {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 550px 155px 0;
      background-color: $anotherGreyBackground;
      & img {
        max-width: 595px;
        height: 400px;
      }
    }

  }
  &__description {
    padding-bottom: 80px;
    text-align: center;
    background-color: $anotherGreyBackground;
    &_header {
      width: 800px;
      margin: 0 auto;
      padding: 80px 0 15px;
      font-family: "Roboto Slab", serif;
      font-size: 49px;
      font-weight: 500;
      color: $white;
    }
    &_name {
      font-family: 'Poppins', sans-serif;
      font-size: 18px;
      font-weight: 500;
      color: $pink;
    }
  }
}
.photo {
  display: flex;
  justify-content: center;
  background-color: $anotherGreyBackground;
  & img {
    width: 100%;
  }
}
.finalShots {
  background-color: $anotherGreyBackground;
  padding-bottom: 70px;
  &__text {
    width: 575px;
    text-align: left;
    padding-top: 100px;
    margin-left: 150px;
  }
  &__subtitle {
    text-transform: capitalize;
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: 500;
    color: $pink;
  }
  &__title {
    font-size: 36px;
    font-weight: 500;
    color: $white;
  }
}
.slider {
  padding: 50px 0;
  background-color: $greyBackground;
  &__block {
    //background-color: $greyBackground;
    &_image {
      height: 100%;
      width: auto;
    }
  }
}
.spacer {
  height: 250px;
  background-color: $greyBackground;
  &-small {
    height: 50px;
    background-color: $anotherGreyBackground;
  }
}
.footer {
  position: relative;
  height: 100vh;
  padding: 0 50px;
  background: url("../assets/images/2k/official.jpg") center no-repeat;
  background-size: cover;
  display: flex;
  align-items: flex-end;
  text-transform: capitalize;
  color: $white;
  &__bottom {
    display: flex;
    width: 100%;
    height: 100px;
    justify-content: space-between;
    align-items: center;
  }
  &__backTop {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    &:hover .footer__link {
      opacity: 0;
      animation: swing-top-bck 0.1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
  }
  &__link {
    color: $white!important;
    line-height: 0;
    transform: translateY(0%);
    & i {
      padding-right: 10px;
    }
    &-span {
      display: none;
      margin-top: 15px;
      opacity: 0;
      line-height: 0;
      transform: translateY(0);
      & a {
        color: $white!important;
      }
      & i {
        padding-right: 10px;
      }
    }
  }
  &__backTop:hover .footer__link-span {
    animation: swing-top-bck-another 0.1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    display: block;
    opacity: 1;
  }
  &__followUs {
    &_block {
      display: block;
      text-align: center;
      cursor: pointer;
      position: relative;
      transform: translateY(0);
    }
    &:hover .footer__followUs_block {
      animation: liftFollowUs .2s ease-in-out;
      transform: translateY(-50px);
    }
    &:hover .footer__followUs_socials {
      display: flex;
      opacity: 1;
      height: 25px;
      animation: liftUpSocials .2s ease-in-out;
    }
    &_socials {
      opacity: 0;
      display: none;
      position: absolute;
      right: 30px;
      bottom: 40px;
      height: 0;
      & i {
        font-size: 24px;
        margin: 0 15px;
      }
      &-link {
        &-twitter,
        &-facebook,
        &-vk,
        &-whatsapp,
        &-instagram {
          color: $white!important;
        }
        &-twitter:hover {
          color: #1DA1F2!important;
        }
        &-facebook:hover {
          color: #4267B2!important;
        }
        &-whatsapp:hover {
          color: #25d366!important;
        }
        &-vk:hover {
          color: #2787F5!important;
        }
        &-instagram:hover {
          background-image: linear-gradient(45deg, #FFDC80,#FCAF45,#F77737,#F56040,#FD1D1D,#E1306C,#C13584,#833AB4,#5851DB,#405DE6);
          background-size: 100%;
          -webkit-background-clip: text;
          //-moz-background-clip: text;
          -webkit-text-fill-color: transparent;
          -moz-text-fill-color: transparent;
        }
      }
    }
  }
}

//keyframe for read
@keyframes backgroundButtonWidth {
  0% {
    width: 20%;
  }
  100% {
    width: 100%;
  }
}

// keyframes for Socials block
@-webkit-keyframes liftUpSocials {
  0% {
    height: 0;
  }
  90% {
    height: 25px;
  }
  100% {
    height: 25px;
  }
}
@keyframes liftUpSocials {
  0% {
    height: 0;
  }
  90% {
    height: 25px;
  }
  100% {
    height: 25px;
  }
}
</style>
