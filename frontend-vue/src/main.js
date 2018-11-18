import Vue from "vue";
import App from "./App.vue";
import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";
import "normalize.css";

const client = new ApolloClient({
  uri: "http://decoupled-drupal-backend.ddev.local:8000/graphql"
});

const apolloProvider = new VueApollo({
  defaultClient: client
});

Vue.use(VueApollo);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  provide: apolloProvider.provide()
}).$mount("#app");
