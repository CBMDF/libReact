import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import FireflyAutoComplete from "./FireflyAutoComplete";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

import { GlobalStyles, ThemeConfig } from "../../index";



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


    <ThemeConfig>
      <GlobalStyles />
      <FireflyAutoComplete {...args} />
    </ThemeConfig>




  </ApolloProvider>
);

const GET_RATES = gql`
  query GetRates($currency: String!) {
    rates(currency: $currency) {
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
  minCaracteres: 1,
  answerText: 'currency',
  onChange: (e: any, v: any) => { console.log(e); console.log(v); }
};

// query MyQueryfnGovbrGetPessoasPorCpf($cpf: String!) {
//     fnGovbrGetPessoasPorCpf(pNumCpfPessoa: $cpf) {
//       nodes {
//         codPessoa
//         cpfNomCompleto
//       }
//     }
//   }
