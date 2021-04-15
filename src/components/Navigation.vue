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
        <ul class="navigation__subblock">
          <li class="navigation__subblock_li">
            <a href="#" class="navigation__subblock_link">plug</a>
          </li>
          <li class="navigation__subblock_li">
            <a href="#" class="navigation__subblock_link">plug</a>
          </li>
          <li class="navigation__subblock_li">
            <a href="#" class="navigation__subblock_link">plug</a>
          </li>
          <li class="navigation__subblock_li">
            <a href="#" class="navigation__subblock_link">plug</a>
          </li>
          <li class="navigation__subblock_li">
            <a href="#" class="navigation__subblock_link">plug</a>
          </li>
          <li class="navigation__subblock_li">
            <a href="#" class="navigation__subblock_link">plug</a>
          </li>
        </ul>
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
  margin: 30px 50px;
  z-index: 2;
  &__logo {
    margin-left: 20px;
    &_text {
      font-size: 20px;
      font-weight: 600;
      font-family: 'Poppins', sans-serif;
      color: $white;
    }
  }
  &__block {
    display: flex;
    position: relative;
    align-items: center;
    margin-right: 0;
    padding-top: 24px;
    padding-left: 0;
    transition: color .2s ease-in-out;
    &:hover li a {
      color: rgba(#fff, .3);
    }
    &:hover li:hover a {
      color: $white;
    }
    &_li {
      &:hover .navigation__subblock {
        display: block;
      }
      padding: 5px;
      &:hover .navigation__block_link {
        animation: swing-top-bck 0.1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
      }
      &:hover .navigation__block_link-span {
        display: block;
        animation: swing-top-bck-another 0.1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
      }
      &:nth-child(2) {
        margin: 0 40px;
      }
    }
    &_link {
      display: block;
      text-transform: capitalize;
      font-family: 'Poppins', sans-serif;
      font-size: 12px;
      font-weight: 600;
      line-height: 1;
      color: $white;
      transform: translateY(-50%);
      opacity: 100%;
      transition: transform .1s ease;

      &-span {
        display: none;
        text-transform: capitalize;
        font-family: 'Poppins', sans-serif;
        font-size: 12px;
        font-weight: 600;
        line-height: 1;
        color: $white;
        transform: translateY(0);
        opacity: 0;
      }
    }
  }
  &__subblock {
    position: absolute;
    display: none;
    top: 0;
    left: -5px;
    padding: 0 100px 15px 10px;
    margin-top: 50px;
    border-radius: 5px;
    background: rgba($greyBackground, .9);
    &_link {
      display: block;
      margin: 5px 5px 5px 0;
      padding: 5px 5px 5px 0;
      color: $white;
      transition: color .2s ease-in-out;
      &:last-child {
        margin-bottom: 0;
        padding-bottom: 0;
      }
      &:hover {
        color: red!important;
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
