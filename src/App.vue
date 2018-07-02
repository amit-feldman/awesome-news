<template>
  <v-app dark>
    <v-navigation-drawer
      fixed
      right
      :clipped="clipped"
      v-model="drawer"
      app
    >
      <v-list two-line dense>
        <article-list />
      </v-list>
    </v-navigation-drawer>

    <v-toolbar
      app
      :clipped-left="clipped"
      flat
    >
      <v-toolbar-title>
        <v-icon color="purple">whatshot</v-icon>
        <span v-html="title" />
      </v-toolbar-title>

      <v-spacer />

      <v-btn icon @click.stop="drawer = !drawer">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <v-container
        fluid
        fill-height
        no-padding
      >
        <v-layout column>
          <article-view />
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import ArticleList from '@/components/ArticleList.vue';
import ArticleView from '@/components/ArticleView.vue';

export default {
  name: 'App',
  components: {
    ArticleList,
    ArticleView,
  },
  data: () => ({
    clipped: false,
    drawer: true,
    fixed: false,
    right: true,
    title: 'Awesome News',
  }),
};
</script>

<style lang="scss" scoped>
  .no-padding {
    padding: 0;
  }
</style>
