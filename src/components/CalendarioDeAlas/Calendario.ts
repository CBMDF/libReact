import {
  differenceInCalendarDays,
  startOfMonth,
  startOfWeek,
  addDays,
  endOfMonth,
  endOfWeek,
  differenceInBusinessDays,
  isWeekend,
} from "date-fns";

type Alas = {
  PRONTIDAO: string[];
  MR: string[];
  UR: string[];
};

export class Calendario {
  inicioMesEscolhido: Date;
  finalMesEscolhido: Date;
  primeiroDomingo: Date;
  ultimoSabado: Date;
  numDiasCalendario: number;
  _listaDiasCalendário: {}[];
  _semana: {
    date: Date;
    alas: Alas;
  }[];
  _listaSemanas: {
    date: Date;
    alas: Alas;
  }[][];
  datAlaReferencia: Date;
  alas: {
    PRONTIDAO: string[];
    MR: string[];
    UR: string[];
  } = {
    PRONTIDAO: ["A", "B", "C", "D"],
    MR: ["CMR", "AMR"],
    UR: ["G", "H", "I", "E", "F"],
  };
  diasDaSemana: string[] = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
  listaDeMeses: string[] = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  constructor(datEscolhida: Date) {
    this.inicioMesEscolhido = startOfMonth(datEscolhida);
    this.finalMesEscolhido = endOfMonth(datEscolhida);
    this.primeiroDomingo = startOfWeek(this.inicioMesEscolhido);
    this.ultimoSabado = endOfWeek(this.finalMesEscolhido);
    this.numDiasCalendario =
      differenceInCalendarDays(this.ultimoSabado, this.primeiroDomingo) + 1;
    this._listaDiasCalendário = new Array<{}>(this.numDiasCalendario).fill({});
    this._semana = [];
    this._listaSemanas = [];
    //Data de referencia em que foram ordenados os arrays de alas
    this.datAlaReferencia = new Date("2000/01/04");
  }

  alasDoDia(date: Date) {
    const diffInDays = differenceInCalendarDays(date, this.datAlaReferencia);
    const isWeekendDay = isWeekend(date);
    const alas = {
      PRONTIDAO: [this.alas.PRONTIDAO[diffInDays % this.alas.PRONTIDAO.length]],
      MR: [
        isWeekendDay
          ? ""
          : this.alas.MR[
              differenceInBusinessDays(date, this.datAlaReferencia) %
                this.alas.MR.length
            ],
      ],
      UR: [
        this.alas.UR[diffInDays % this.alas.UR.length],
        this.alas.UR[(diffInDays % this.alas.UR.length) - 1] ??
          this.alas.UR[this.alas.UR.length - 1],
      ],
    };
    return alas;
  }

  get diasDoCalendario(): { date: Date }[] {
    return this._listaDiasCalendário.map((dia, i) => ({
      date: addDays(this.primeiroDomingo, i),
    }));
  }

  get DiasDoCalendarioEmSemanas(): {
    date: Date;
    alas: Alas;
  }[][] {
    this._listaDiasCalendário.map((dia, i) => {
      this._semana.push({
        date: addDays(this.primeiroDomingo, i),
        alas: this.alasDoDia(addDays(this.primeiroDomingo, i)),
      });
      if ((i + 1) % 7 == 0 || i == this._listaDiasCalendário.length - 1) {
        this._listaSemanas.push(this._semana);
        this._semana = [];
      }
    });
    return this._listaSemanas;
  }
}
