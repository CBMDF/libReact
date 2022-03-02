/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CalendarioDasAlasDeServico
// ====================================================

export interface CalendarioDasAlasDeServico_fnBradoAlasServicoDias_nodes {
  __typename: "RetBradoAlasServicoDia";
  dataReferencia: string | null;
  codGrupoAla: number | null;
  nomGrupoAla: string | null;
  codAlaServico: number | null;
  nomAlaServico: string | null;
}

export interface CalendarioDasAlasDeServico_fnBradoAlasServicoDias {
  __typename: "RetBradoAlasServicoDiasConnection";
  /**
   * A list of `RetBradoAlasServicoDia` objects.
   */
  nodes: CalendarioDasAlasDeServico_fnBradoAlasServicoDias_nodes[];
}

export interface CalendarioDasAlasDeServico {
  /**
   * Busca as alas de servico de um determinado período.
   * - p_dat_referencia (Optativo): o dia inicial da pesquisa. Default é hoje.
   * - p_cod_escala_servico (Optativo): Filtra por uma determinada escala de serviço
   * - p_cod_ala_servico: Optativo. Filtrapor uma determinada ala de serviço
   * - p_num_dias (Optativo): Número de dias a ser pesquisado. Dafault é 1 dia.
   */
  fnBradoAlasServicoDias: CalendarioDasAlasDeServico_fnBradoAlasServicoDias | null;
}

export interface CalendarioDasAlasDeServicoVariables {
  pDatReferencia?: any | null;
  pNumDias?: number | null;
}
