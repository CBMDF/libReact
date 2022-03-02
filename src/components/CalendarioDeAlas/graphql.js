import { gql } from "@apollo/client";

export const queryAlasServicoDias = gql`
  query GetAlasServicoDias(
    $pDatReferencia: Date
    $pCodGrupoAla: Int
    $pNumDias: Int
  ) {
    fnBradoAlasServicoDias(
      pDatReferencia: $pDatReferencia
      pCodGrupoAla: $pCodGrupoAla
      pNumDias: $pNumDias
    ) {
      nodes {
        datReferencia
        nomAlaServico
      }
    }
  }
`;

export const queryCalendarioDasAlasDeServico = gql`
  query CalendarioDasAlasDeServico($pDatReferencia: Date, $pNumDias: Int) {
    fnBradoAlasServicoDias(
      pDatReferencia: $pDatReferencia
      pNumDias: $pNumDias
    ) {
      nodes {
        dataReferencia
        codGrupoAla
        nomGrupoAla
        codAlaServico
        nomAlaServico
      }
    }
  }
`;
