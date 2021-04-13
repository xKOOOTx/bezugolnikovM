<template>
  <div class="home">
    <div class="introduction">
      <BottomNavigation />
    </div>
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
      <img class="about__img" src="../assets/images/2k/wedding(bw).jpg" alt="photo">
      <div class="about__bottom">
        <div class="about__bottom_imgBlock">
          <img class="about__bottom_img" src="../assets/images/2k/wedding(bw).jpg" alt="photo">
          <img class="about__bottom_img" src="../assets/images/2k/wedding(bw).jpg" alt="photo">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BottomNavigation from '../components/BottomNavigation'

export default {
  name: 'Home',
  components: {
    BottomNavigation
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
.aboutBlock {
  background-color: $greyBackground;
}
.about {
  position: relative;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  font-family: 'Poppins', sans-serif;
  padding: 80px 0 350px 0;
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
  &__img {
    position: absolute;
    width: 915px;
    top: -500px;
    margin: 0 auto;
  }
  &__bottom {

  }
}

@keyframes backgroundButtonWidth {
  0% {
    width: 20%;
  }
  100% {
    width: 100%;
  }
}
</style>
