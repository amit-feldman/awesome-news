<template>
  <v-jumbotron class="bg-gradient">
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
          <h3
            class="display-3"
            color="black"
            v-html="title"
          />

          <span class="headline" v-html="description" />
          <v-divider class="my-3" />

          <div class="subheading mb-3">
            <span v-html="author" /> &middot; <span v-html="publishedAt" />
          </div>

          <v-btn
            class="mx-0"
            color="dark"
            v-text="callToAction"
            large
          />
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
</template>

<script>
export default {
  name: 'ArticleViewHeader',
  data: () => ({
    gradient: 'to top, #a7a6cb, #8989ba',
    callToAction: 'Check full Article',
    title: 'Example title',
    description: 'Example description',
    author: 'Example Author',
    publishedAt: '25 minutes ago',
    url: 'https://www.google.com',
    urlToImage: 'https://www.ynet.co.il/PicServer5/2018/07/02/8632329/86323250100277640360no.jpg',
  }),
};
</script>

<style lang="scss" scoped>
  .bg-gradient {
    background-image: linear-gradient(
      to top,
      #a7a6cb 0%,
      #8989ba 52%,
      #8989ba 100%
    );
  }
</style>
