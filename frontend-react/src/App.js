import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { ApolloProvider, Query } from "react-apollo";
import ArticleTeaser from './ArticleTeaser';

const client = new ApolloClient({
  uri: "http://decoupled-drupal-backend.ddev.local:8000/graphql"
});

// client
//   .query({
//     query: gql`
//       {
//         nodeQuery {
//           entities {
//             ... on NodeArticle {
//               nid
//               title
//               body {
//                 value
//               }
//             }
//           }
//         }
//       }
//     `
//   })
//   .then(({data}) => console.log({ data }));


const ArticlesView = () => (
  <Query
    query={gql`
      {
        nodeQuery {
          entities {
            ...on NodeArticle {
              nid
              title
              body {
                value
              }
            }
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return `Error: ${error.message}`;

      //console.log(data);
      return (
        data.nodeQuery.entities.map(article => <div key={article.nid}><ArticleTeaser article={article} /></div>)
      )
    }}
  </Query>
);

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <div className="App-body">
            <ArticlesView />
          </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
