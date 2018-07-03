import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articles: [],
  },
  mutations: {
    FETCH_ARTICLES(state, articles) {
      state.articles.push(articles);
    },
  },
  actions: {
    fetchArticles({ commit }) {
      const url = 'https://newsapi.org/v2/everything?sources=ynet';
      const key = 'e3ef295dbf2745cab9ddac02f648444d';

      fetch(`${url}&apiKey=${key}`)
        .then(res => res.json())
        .then((payload) => {
          commit('FETCH_ARTICLES', payload.articles);
        })
        .catch((err) => {
          if (err) throw err;
        });
    },
  },
  getters: {
    loadedArticles: state => state.articles,
  },
});
