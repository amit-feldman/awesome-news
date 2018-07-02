<template>
  <v-list-tile avatar>
    <v-list-tile-content class="text-xs-right">
      <v-list-tile-title v-html="title" dir="rtl" />
      <v-list-tile-sub-title v-html="publishedAt" />
    </v-list-tile-content>

    <v-list-tile-avatar>
      <img :src="urlToImage">
    </v-list-tile-avatar>
  </v-list-tile>
</template>

<script>
export default {
  name: 'ArticleList',
  data: () => ({
    message: 'Hello, World!',
    title: 'Example title',
    publishedAt: '25 minutes ago',
    urlToImage: 'https://www.ynet.co.il/PicServer5/2018/07/02/8632329/86323250100277640360no.jpg',
  }),
};
</script>

<style lang="scss" scoped>

</style>
