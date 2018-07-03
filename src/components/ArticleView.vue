<template>
  <v-layout row wrap v-if="Object.keys(article).length !== 0">
    <v-jumbotron class="bg-gradient">
      <v-container fill-height>
        <v-layout align-center>
          <v-flex>
            <h3
              class="headline"
              color="black"
              v-html="article.title"
              dir="rtl"
            />

            <p
              class="body-2 my-3"
              v-html="article.description"
              dir="rtl"
            />

            <v-divider class="my-3" />

            <div class="subheading mb-3">
              <p v-html="`${article.author} &middot; ${article.date}`" dir="rtl" />
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
  </v-layout>

  <v-content v-else>
    <v-container fluid fill-height no-padding>
      <v-layout column justify-center align-center>
        <h1 class="text-xs-center" dir="rtl">
          בחר פריט מהלוח הצדדי כדי להתחיל...
        </h1>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: 'ArticleView',
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    btnCta: 'Check full Article',
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
  .no-padding {
    padding: 0;
  }
</style>
