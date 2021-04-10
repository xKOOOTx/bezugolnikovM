<template>
  <div class="navigation">
    <div class="navigation__logo">
      <a href="#" class="navigation__logo_text">Bezugolnikov</a>
    </div>
    <ul class="navigation__block">
      <li class="navigation__block_li">
        <a href="#" class="navigation__block_link">
          gallery
        </a>
        <a href="#" class="navigation__block_link-span">
          gallery
        </a>
      </li>
      <li class="navigation__block_li">
        <a href="#" class="navigation__block_link">
          about
        </a>
        <a href="#" class="navigation__block_link-span">
          about
        </a>
      </li>
      <li class="navigation__block_li">
        <a href="#" class="navigation__block_link">
          contacts
        </a>
        <a href="#" class="navigation__block_link-span">
          contacts
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style scoped lang="scss">
@import "src/assets/style/style";

.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 90%;
  height: 100px;
  margin: 30px 100px;
  z-index: 2;
  &__logo {
    margin-left: 20px;
    &_text {
      font-size: 28px;
      font-weight: 600;
      font-family: 'Poppins', sans-serif;
      color: $white;
    }
  }
  &__block {
    display: flex;
    align-items: center;
    padding-top: 24px;
    &_li {
      margin: 0 10px;
      padding: 15px;
      &:hover .navigation__block_link {
        animation: swing-top-bck 0.1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
      }
      &:hover .navigation__block_link-span {
        animation: swing-top-bck-another 0.1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
      }
    }
    &_link {
      display: block;
      text-transform: capitalize;
      font-family: 'Poppins', sans-serif;
      font-size: 16px;
      font-weight: 600;
      color: rgba(#fff, .3);
      transform: translateY(0%);
      opacity: 100%;
      transition: transform .1s ease;

      &-span {
        display: block;
        text-transform: capitalize;
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        font-weight: 600;
        color: $white;
        transform: translateY(0);
        opacity: 0;
      }
    }
  }
}
// animation from swipe from bottom to top
@-webkit-keyframes swing-top-bck {
  0% {
    transform: translateY(0px);
    opacity: 1;
  }
  100% {
    transform: translateY(-100%);
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
</style>
