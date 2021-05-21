<template>
  <ul class="languages">
    <li v-for="language in languages" :key="language.key" class="language">
      <h5 class="language-label">
        {{ language.label }}
      </h5>
      <div class="language-value">
        <div class="progress" :class="`level-${language.value}`" />
      </div>
    </li>
  </ul>
</template>

<script>
  import languages from '@/data/languages';

  export default {
    name: 'Languages',
    computed: {
      languages() {
        return languages;
      },
    },
  }
</script>

<style scoped lang="scss">
  @import '@/styles/index';

  .language {
    & + & {
      margin-top: $spacer / 2;
    }
  }

  .language-value {
    width: 90%;
    height: 5px;
    border-radius: 1px;
    background: $bright;

    .progress {
      background: $white;
      height: 5px;

      &.level-1 {
        width: 20%;
      }

      &.level-2 {
        width: 40%;
      }

      &.level-3 {
        width: 60%;
      }

      &.level-4 {
        width: 80%;
      }

      &.level-5 {
        width: 100%;
      }
    }
  }
</style>
