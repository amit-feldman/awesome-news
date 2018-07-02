<template>
  <v-layout row wrap>
    <v-flex>
      <article-view-header />
    </v-flex>
  </v-layout>
</template>

<script>
import ArticleViewHeader from '@/components/ArticleViewHeader.vue';

export default {
  name: 'ArticleView',
  components: {
    ArticleViewHeader,
  },
  data: () => ({

  }),
};
</script>

<style lang="scss" scoped>

</style>
