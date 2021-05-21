<template>
  <section class="section">
    <div class="section-header">
      <div class="section-icon">
        <unicon v-if="iconName" :name="iconName" :fill="iconColor" height="16" />
      </div>
      <h4 class="section-title">
        {{ title }}
      </h4>
    </div>
    <div class="section-content">
      <div class="gap" />
      <ul class="places">
        <li v-for="(place, index) in places" :key="index" class="place">
          <Place :place="place" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  import Place from '@/components/Place';

  export default {
    name: 'Section',
    components: {
      Place,
    },
    props: {
      iconName: {
        type: String,
        default: null,
      },
      iconColor: {
        type: String,
        default: 'white',
      },
      title: {
        type: String,
        required: true,
      },
      places: {
        type: Array,
        default: () => [],
      },
    },
  }
</script>

<style scoped lang="scss">
  @import '@/styles/index';

  .section {
    padding :0;

    .section-header {
      @include gridded();

      .section-icon {
        padding: $spacer / 6;
        background: $primary;
      }

      .section-title {
        padding: $spacer / 6 $spacer / 2;
        width: fit-content;
        background: $primary;
        color: $white;
      }
    }

    .section-content {
      margin-top: $spacer / 2;
      @include gridded();
    }
  }

  .place {
    & + & {
      margin-top: $spacer * 0.75;
    }
  }
</style>
