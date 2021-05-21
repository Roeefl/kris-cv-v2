<template>
  <div class="container">
    <aside class="side">
      <h3 class="personal-title">
        פרטים אישיים
      </h3>
      <p v-for="(value, key) in personalFields" :key="key" :class="key">
        {{ value }}
      </p>
    </aside>
    <main class="main">
      <h1 class="name">
        {{ name }}
      </h1>
      <h2 class="role">
        {{ role }}
      </h2>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String,
    },
    data: () => ({
      name: 'קריסטינה קרפה קורבוט אוריה',
      personalFields: {
        role: 'מטפלת בשיטת אלבאום',
        address: 'חיפה, ישראל',
        phone: '0546-398-195',
        email: '25kristy25@gmail.com',
        birthDate: '25.07.1989',
      },
    }),
  }
</script>

<style scoped lang="scss">
  ul {
    list-style-type: none;
    padding: 0;

      li {
      display: inline-block;
      margin: 0 10px;
    }
  }

  .container {
    width: 1000px;
    display: grid;
    grid-template-columns: 30% 70%;

    .side {
      padding: 24px 8px;
      background: #6b385c;
      color: white;
    }

    .main {
      padding: 24px 8px;
      background: white;
      color: black;
    }
  }
</style>
