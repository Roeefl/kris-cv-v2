<template>
  <div class="container">
    <aside class="side">
      <section class="side-section">
        <h3 class="side-title">
          פרטים אישיים
        </h3>
        <ul class="fields">
          <li v-for="field in personalFields" :key="field.key" class="field">
            <h5 class="field-label">
              {{ field.label }}
            </h5>
            <p class="field-value">
              {{ field.value }}
            </p>
          </li>
        </ul>
      </section>
      <section class="side-section">
        <h3 class="side-title">
          שפות
        </h3>
        <ul class="fields">
          <li v-for="language in languages" :key="language.key" class="field">
            <h5 class="language-label">
              {{ language.label }}
            </h5>
            <div class="language-value">
              <div class="progress" :class="`level-${language.value}`" />
            </div>
          </li>
        </ul>
      </section>
    </aside>
    <main class="main">
      <section class="primary-info">
        <div class="gap" />
        <div class="info">
          <h1 class="name">
            {{ name }}
          </h1>
          <h2 class="role-summary">
            {{ role }}
          </h2>
        </div>
      </section>
      <ul class="sections">
        <li v-for="section in sections" :key="section.key" class="section">
          <Section
            :iconName="section.icon"
            :title="section.title"
            :places="section.places"
          />
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
  import personalFields from '@/data/personal';
  import languages from '@/data/languages';
  import sections from '@/data/sections';
  import Section from '@/components/Section';

  export default {
    name: 'MainPage',
    components: {
      Section,
    },
    data: () => ({
      name: 'קריסטינה קרפה קורבוט אוריה',
      role: 'מטפלת בשיטת אלבאום',
    }),
    computed: {
      sections() {
        return sections;
      },
      personalFields() {
        return personalFields;
      },
      languages() {
        return languages;
      },
    },
  }
</script>

<style scoped lang="scss">
  @import '@/styles/index';

  @mixin connector() {
    &::after {
      content: '';
      position: absolute;
      bottom: $spacer * -1.4;
      right: $spacer * 0.8;
      // transform: translateY(40%);
      width: 5px;
      background: $primary;
      height: 100%;
    }
  }

  .container {
    width: 800px;
    display: grid;
    grid-template-columns: 30% 70%;

    .side {
      padding: $spacer * 2 $spacer;
      background: $primary;
      color: $white;

      .side-section {
        padding: $spacer / 2 0;

        .field {
          font-size: $font-size-sm;
          margin-bottom: $spacer / 3;

          .field-label {
            color: $bright;
          }
        }
      }
    }

    .main {
      padding: $spacer * 2 $spacer;
      background: $white;
      color: black;

      .primary-info {
        @include gridded();

        .name {
          font-size: $font-size-huge;
        }

        .role-summary {
          font-size: $font-size-xl;
        }
      }

      .sections {
        margin-top: $spacer;
      }

      .section {
        position: relative;
        @include connector();

        &:last-of-type {
          &::after {
            content: none;
          }
        }
      }
    }
  }

  .section {
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
