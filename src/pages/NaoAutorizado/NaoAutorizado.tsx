import React from "react";
 import naoAutorizado from "../../assets/naoAutorizado.svg"

export default function NaoAutorizado() {
  return (
    <div className="flex w-full h-full">
      <div className="flex flex-col items-center justify-center flex-grow py-5 space-y-5 text-center bg-gray-100 rounded-lg">
        <img src={naoAutorizado} alt="nao-autorizado" className="w-20" />
        <span className="text-xl font-medium">USUÁRIO NÃO AUTORIZADO</span>
        <span>Verifique as razões de bloqueio com o suporte da DITIC</span>
      </div>
    </div>
  );
}
