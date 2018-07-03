<template>
  <v-layout row wrap align-center v-if="Object.keys(article).length !== 0">
    <v-flex xs12 sm6 offset-sm3>
      <v-card dark>
        <v-card-media
          :src="article.img"
          height="320px"
        />

        <v-card-title primary-title>
          <div>
            <h3
              class="headline font-weight-bold mb-3"
              v-html="article.title"
              dir="rtl"
            />
            <p
              v-html="article.description"
              class="subheading"
              dir="rtl"
            />
            <p
              v-html="`${article.author} &middot; ${article.date}`"
              dir="rtl"
            />
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn
            flat
            color="orange"
            v-html="btnCta"
            :href="article.url"
            target="_blank"
          />
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>

  <v-content v-else class="no-padding">
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
    btnCta: 'המשך לקרוא',
  }),
};
</script>

<style lang="scss" scoped>
  .no-padding {
    padding: 0 !important;
  }
</style>
