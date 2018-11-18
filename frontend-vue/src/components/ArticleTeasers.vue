<template>
  <ApolloQuery :query="query">
    <template slot-scope="{ result: { loading, error, data } }">
      <h1>Articles</h1>
      <h3 v-if="loading">Loading...</h3>
      <h3 v-else-if="error">An error occured</h3>

      <section v-if="data">
        <div v-if="publishedArticles.length">
          <div v-for="entity in publishedArticles" :key="entity.id">
            <a :href="'/articles/' + entity.nid">
              <div class="article-teaser">
                <h2>{{ entity.title }}</h2>
                <p v-html="entity.body.value"></p>
              </div>
            </a>
          </div>
        </div>

        <div v-else><span class="emoji">🤷</span>No articles found.</div>
      </section>
    </template>
  </ApolloQuery>
</template>

<script>
import { GET_ARTICLE_TEASERS } from "../queries.js";

export default {
  name: "ArticleTeasers",
  data() {
    return {
      query: GET_ARTICLE_TEASERS
    };
  },
  apollo: {
    nodeQuery: {
      query: GET_ARTICLE_TEASERS
    }
  },
  computed: {
    publishedArticles() {
      return this.nodeQuery.entities.filter(x => x);
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  color: #2c3e50;
  text-decoration: none;
}

.article-teaser {
  background: #fff;
  border: 1px solid #e5e8ed;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(3, 27, 78, 0.06);
  margin-bottom: 32px;
  padding: 32px;
  transition: ease-in-out all 0.2s;
  h2 {
    margin-top: 0;
  }
  &:hover {
    box-shadow: 0 10px 20px rgba(3, 27, 78, 0.1);
    transform: translateY(-5px);
  }
}

.emoji {
  font-size: 30px;
  padding-right: 8px;
  vertical-align: -10%;
}
</style>
