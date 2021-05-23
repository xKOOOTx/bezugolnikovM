<template>
  <div class="slider">
    <splide :options="options" class="slider__block">
      <splide-slide v-for="image in sliderImages" :key=image.name>
        <router-link style=`background-image: {{ image.path }}` :src=image.path :alt=image.alt class="slider__block_image"></router-link>
      </splide-slide>
    </splide>
  </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'

export default {
  name: 'Official',
  components: {
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
        height: 754,
        easing: 'cubic-bezier(.42,.65,.27,.99)'
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
