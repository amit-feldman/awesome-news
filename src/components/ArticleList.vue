<template>
  <v-list-tile avatar>
    <v-list-tile-content class="text-xs-right">
      <v-list-tile-title v-html="title" dir="rtl" />
      <v-list-tile-sub-title v-html="date" />
    </v-list-tile-content>

    <v-list-tile-avatar>
      <img :src="img">
    </v-list-tile-avatar>
  </v-list-tile>
</template>

<script>
export default {
  name: 'ArticleList',
  props: {
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
