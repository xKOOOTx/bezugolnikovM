<template>
  <div class="footer">
    <div class="footer__bottom">
      <div class="footer__backTop">
        <a href="#" class="footer__link">
          <i class="fas fa-chevron-up"></i>
          back top
        </a>
        <span class="footer__link-span">
            <a @click="backToTop">
              <i class="fas fa-chevron-up"></i>
              back top
            </a>
          </span>
      </div>
      <div class="footer__copyright">
        <p>2021&copy; copyright</p>
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
            <a :href=social.link target="_blank" :class=social.class :key=social.name>
              <i :class=social.iClass></i>
            </a>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      footerSocials: [
        {
          name: 'vk',
          class: 'footer__followUs_socials-link-vk',
          iClass: 'fab fa-vk',
          link: 'https://vk.com/michealbezug'
        },
        {
          name: 'instagram',
          class: 'footer__followUs_socials-link-instagram',
          iClass: 'fab fa-instagram',
          link: 'https://www.instagram.com/bezugolnikov_photographer'
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
          iClass: 'fab fa-whatsapp',
          link: 'https://wa.me/+79998198079'
        }
      ]
    }
  },
  methods: {
    backToTop () {
      const el = document.getElementById('top')
      el.scrollIntoView({ behavior: 'smooth' })
      const bottomNavigation = document.querySelector('.bottomNavigation')
      bottomNavigation.classList.remove('bottomNavigation-hidden')
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/style/style';
@import '../assets/style/variales';

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
</style>
