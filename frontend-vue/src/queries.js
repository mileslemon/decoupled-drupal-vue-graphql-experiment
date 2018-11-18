import gql from "graphql-tag";

// export const GET_ARTICLE_TEASERS = gql`
//   {
//     nodeQuery {
//       entities {
//         ... on NodeArticle {
//           nid
//           title
//           body {
//             value
//           }
//           status
//         }
//       }
//     }
//   }
// `;

export const GET_ARTICLE_TEASERS = gql`
  query GetArticleTeasersQuery {
    nodeQuery {
      entities {
        ... on NodeArticle {
          nid
          title
          body {
            value
          }
          status
        }
      }
    }
  }
`;
