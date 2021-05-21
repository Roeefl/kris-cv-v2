<template>
  <article class="place">
    <h5 class="place-title">
      {{ place.title }}, {{ place.location }}
    </h5>
    <p class="dates">
      {{ place.startDate }} - {{ place.endDate }}
    </p>
    <p class="description">
      {{ place.description }}
    </p>
  </article>
</template>

<script>
  export default {
    name: 'Place',
    props: {
      place: {
        type: Object,
        required: true,
      },
    },
  }
</script>

<style scoped lang="scss">
  @import '@/styles/index';

  .place {
    display: flex;
    flex-direction: column;

    .place-title {
      font-weight: 700;
    }

    .dates {
      color: $gray-1;
      font-size: $font-size-xs;
    }

    .description {
      margin-top: $spacer / 3;
      font-size: $font-size-sm;
    }
  }
</style>
