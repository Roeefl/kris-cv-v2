<template>
  <div class="container">
    <aside class="side">
      <section class="side-section">
        <h3 class="side-title">
          <unicon name="user-square" fill="white" height="14" />
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
          <unicon name="english-to-chinese" fill="white" height="14" />
          שפות
        </h3>
        <Languages />
      </section>
      <section class="side-section">
        <h3 class="side-title">
          <unicon name="shield" fill="white" height="14" />
          שירות צבאי
        </h3>
        <h5 class="field-label">
          2009-2011
        </h5>
        <p class="army-service">
          ראש לשכת אטק"ל
        </p>
        <ul class="description-bullets">
          <li class="bullet">
            ניהול קשרי החוץ של הלשכה
          </li>
          <li class="bullet">
            קידום שיתופי פעולה ונושאים אשר על סדר היום הארגוני
          </li>
        </ul>
      </section>
      <section class="side-section">
        <h3 class="side-title">
          <unicon name="silent-squint" fill="white" height="14" />
          התנדבויות
        </h3>
        <h5 class="field-label">
          2009-2011
        </h5>
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
  import sections from '@/data/sections';
  import Languages from '@/components/Languages';
  import Section from '@/components/Section';

  export default {
    name: 'MainPage',
    components: {
      Section,
      Languages,
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
        }

        .field-label {
          color: $bright;
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

  .side-section {
    & + & {
      margin-top: $spacer / 2;
    }
  }

  .section {
    & + & {
      margin-top: $spacer / 2;
    }
  }

  .description-bullets {
    font-size: $font-size-sm;
    list-style: square;
    padding-right: $spacer * 1.5;
  }

  .bullet {
    & + & {
      margin-top: $spacer / 6;
    }
  }
</style>
