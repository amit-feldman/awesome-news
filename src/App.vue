<template>
  <v-app>
    <v-navigation-drawer
      fixed
      right
      :clipped="clipped"
      v-model="drawer"
      app
    >
      <v-list two-line dense>
        <!-- Render ArticleList component -->
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app :clipped-left="clipped" flat>
      <v-toolbar-title>
        <v-icon color="black">whatshot</v-icon>
        <span v-text="title" />
      </v-toolbar-title>
      <v-spacer />
      <v-btn icon @click.stop="drawer = !drawer">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <v-container fluid fill-height no-padding>
        <v-layout column justify-center align-center>
          <!-- Render ArticleView component -->
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      right: true,
      title: 'Awesome News',
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
