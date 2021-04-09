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
      </li>
      <li class="navigation__block_li">
        <a href="#" class="navigation__block_link">
          about
        </a>
      </li>
      <li class="navigation__block_li">
        <a href="#" class="navigation__block_link">
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
  position: sticky;
  height: 100px;
  &__block {
    padding: 0;
  }
}
</style>
