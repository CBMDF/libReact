/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAlasServicoDias
// ====================================================

export interface GetAlasServicoDias_fnBradoAlasServicoDias_nodes {
  __typename: "RetBradoAlasServicoDia";
  datReferencia: any | null;
  nomAlaServico: string | null;
}

export interface GetAlasServicoDias_fnBradoAlasServicoDias {
  __typename: "RetBradoAlasServicoDiasConnection";
  /**
   * A list of `RetBradoAlasServicoDia` objects.
   */
  nodes: GetAlasServicoDias_fnBradoAlasServicoDias_nodes[];
}

export interface GetAlasServicoDias {
  /**
   * Busca as alas de servico de um determinado período.
   * - p_dat_referencia (Optativo): o dia inicial da pesquisa. Default é hoje.
   * - p_cod_escala_servico (Optativo): Filtra por uma determinada escala de serviço
   * - p_cod_ala_servico: Optativo. Filtrapor uma determinada ala de serviço
   * - p_num_dias (Optativo): Número de dias a ser pesquisado. Dafault é 1 dia.
   */
  fnBradoAlasServicoDias: GetAlasServicoDias_fnBradoAlasServicoDias | null;
}

export interface GetAlasServicoDiasVariables {
  pDatReferencia?: any | null;
  pCodGrupoAla?: number | null;
  pNumDias?: number | null;
}
