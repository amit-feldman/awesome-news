<template>
  <v-list-tile avatar @click="onClickArticle">
    <v-list-tile-content class="text-xs-right">
      <v-list-tile-title
        v-html="title"
        class="font-weight-bold"
        dir="rtl"
      />

      <v-list-tile-sub-title>
        {{ date | moment('from') }}
      </v-list-tile-sub-title>
    </v-list-tile-content>

    <v-list-tile-avatar>
      <img :src="img" />
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
    description: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  methods: {
    onClickArticle() {
      this.$emit('clicked-article', {
        title: this.title,
        description: this.description,
        author: this.author,
        date: this.date,
        img: this.img,
        url: this.url,
      });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
