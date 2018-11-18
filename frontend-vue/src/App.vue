<template>
  <div id="app">
    <Header />
    <ArticleTeasers class="articles" />
    <Footer class="footer-component" />
  </div>
</template>

<script>
import Header from "./components/Header";
import ArticleTeasers from "./components/ArticleTeasers.vue";
import Footer from "./components/Footer";

export default {
  name: "app",
  components: {
    Header,
    ArticleTeasers,
    Footer
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 80px);

  .articles {
    margin: 60px auto 0;
    width: 60%;
  }

  .footer-component {
    margin-top: auto;
  }
}
</style>
