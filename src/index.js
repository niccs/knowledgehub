import React from 'react';
import ReactDom from 'react-dom';
import App1 from './components/App';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "react-apollo";


const client = new ApolloClient({
    uri: 'http://localhost:4000/',
  });

//   client
//   .query({
//     query: gql`
//     {
//         courses{
//             id
//             name
//           }
//       }
//     `
//   })
//   .then(result => console.log(result.data));

  const App = () => (
    <ApolloProvider client={client}>
    <h2>My first Apollo app 🚀</h2>
      <App1/>
    </ApolloProvider>
  );

ReactDom.render(<App/>, document.querySelector('#root'))




