import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import FireflyAutoComplete from "./FireflyAutoComplete";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Firefly/FireflyAutoComplete",
  component: FireflyAutoComplete,
} as ComponentMeta<typeof FireflyAutoComplete>;

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
  cache: new InMemoryCache(),
});

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FireflyAutoComplete> = (args) => (
  <ApolloProvider client={client}>
    <FireflyAutoComplete {...args} />
  </ApolloProvider>
);

const GET_RATES = gql`
  query GetRates($searchText: String!) {
    rates(currency: $searchText) {
      rate
      name
      currency
    }
  }
`;

export const Home = Template.bind({});
Home.args = {
  graphql: GET_RATES,
  searchText: "currency",
  firstLevel: "rates",
  //secondLevel: "nodes" -> opcional
  //firstLevel: "fnGovbrGetPessoasPorCpf"
  loadingText: "Carregando... Digite 3 caracteres.",
  noOptionsText: "Não foi encontrado.  Digite 4 caracteres.",
  label: "Digite nome/cpf",
  minCaracteres: 1
};

// query MyQueryfnGovbrGetPessoasPorCpf($cpf: String!) {
//     fnGovbrGetPessoasPorCpf(pNumCpfPessoa: $cpf) {
//       nodes {
//         codPessoa
//         cpfNomCompleto
//       }
//     }
//   }
