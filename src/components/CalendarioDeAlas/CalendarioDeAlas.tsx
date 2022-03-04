import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import clsx from "clsx";
import { isSameMonth, subMonths, addMonths, isSameDay } from "date-fns";
import React, { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { Calendario } from "./Calendario";

interface CalendarioDeAlasProps {
  datEscolhida?: Date;
  methods: UseFormReturn;
  handleChooseDate: (date: Date) => void;
}

export function CalendarioDeAlas(props: CalendarioDeAlasProps): JSX.Element {
  const [datEscolhida, setDatEscolhida] = useState<Date>(
    props.datEscolhida ?? new Date()
  );

  const listaTiposEscalas = [
    { name: "24h", value: 1 },
    { name: "MR", value: 2 },
    { name: "UR", value: 3 },
  ];
  const [escalaEscolhida, setEscalhaEscolhida] = useState<number>(
    listaTiposEscalas[0].value
  );
  const calendarioDeAlas = new Calendario(datEscolhida);

  function priorMonth() {
    setDatEscolhida((datEscolhida) => subMonths(datEscolhida, 1));
  }

  function nextMonth() {
    setDatEscolhida((datEscolhida) => addMonths(datEscolhida, 1));
  }

  return (
    <div>
      <div className="relative w-full border rounded-md border-slate-200">
        <div className="flex flex-col py-1">
          <div className="flex flex-row items-center text-lg font-bold uppercase">
            <div className="flex items-center justify-center flex-grow max-w-full text-center">
              <div className="cursor-pointer" onClick={priorMonth}>
                <ChevronLeft />
              </div>
            </div>
            <div className="flex items-center justify-center flex-grow max-w-full text-center">
              <span>
                {calendarioDeAlas.listaDeMeses[datEscolhida.getMonth()] +
                  " " +
                  datEscolhida.getFullYear()}
              </span>
            </div>
            <div className="flex items-center justify-center flex-grow max-w-full text-right">
              <div className="cursor-pointer" onClick={nextMonth}>
                <ChevronRight />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Select
              opcaoEscolhida={escalaEscolhida}
              opcoes={listaTiposEscalas}
              setOpcaoEscolhida={setEscalhaEscolhida}
            />
          </div>
        </div>

        <div className="flex flex-row flex-wrap w-full py-3 text-xs font-semibold uppercase border-t">
          {calendarioDeAlas.diasDaSemana.map((diaDaSemana, i) => (
            <div
              className="flex items-center justify-center flex-grow max-w-full text-center"
              key={"dayWeek" + i}
            >
              {diaDaSemana}
            </div>
          ))}
        </div>
        <div className="flex flex-col">
          {calendarioDeAlas.DiasDoCalendarioEmSemanas.map((semana, i) => (
            <div className="grid w-full grid-cols-7" key={"row" + i}>
              {semana.map((dia) => (
                <CelulaCalendario
                  key={dia.date.getDate()}
                  dia={dia.date}
                  methods={props.methods}
                  alaDoDia={
                    dia.alas[
                      Object.keys(dia.alas)[
                        escalaEscolhida - 1
                      ] as keyof typeof dia.alas
                    ]
                  }
                  datEscolhida={datEscolhida}
                  handleChooseDate={props.handleChooseDate}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CelulaCalendario(props: {
  dia: Date;
  datEscolhida: Date;
  alaDoDia?: string | string[] | null;
  methods: UseFormReturn;
  handleChooseDate: (date: Date) => void;
}): JSX.Element {
  const { dia, datEscolhida, alaDoDia, handleChooseDate } = props;
  const coresAlas = [
    { value: 1, color: "text-blue-400" },
    { value: 2, color: "text-green-400" },
    { value: 3, color: "text-red-700" },
    { value: 4, color: "text-yellow-500" },
    { value: 5, color: "text-blue-500" },
    { value: 6, color: "text-green-400" },
    { value: 7, color: "text-red-400" },
    { value: 8, color: "text-yellow-500" },
    { value: 9, color: "text-blue-600" },
    { value: 10, color: "text-green-600" },
    { value: 11, color: "text-red-600" },
    // {value:10,color:"text-yellow-500"},
  ];
  return (
    <button
      className={clsx(
        "flex flex-row flex-grow h-12 hover:bg-gray-100",
        !isSameMonth(dia, datEscolhida) && "opacity-40",
        isSameDay(dia, new Date()) && "bg-blue-100"
      )}
      key={"cell" + dia.getDate()}
      onClick={() => handleChooseDate(dia)}
    >
      <div className="relative flex flex-row w-full h-full px-5 text-right border">
        <div className="absolute top-0 right-1"> {dia.getDate()}</div>
        {alaDoDia?.[0] != "" && (
          <div
            className={clsx(
              "absolute w-8 h-4 t text-center text-xs shadow-lg left-0 bottom-2 rounded-sm"
            )}
          >
            <p>{alaDoDia}</p>
          </div>
        )}
      </div>
    </button>
  );
}

function Select(props: {
  opcaoEscolhida: number;
  opcoes: { name: string; value: number }[];
  setOpcaoEscolhida: (arg: number) => void;
}): JSX.Element {
  const { opcoes, opcaoEscolhida, setOpcaoEscolhida } = props;
  return (
    <div className="flex flex-row w-32 border rounded-md">
      {props.opcoes.map((el, i) => (
        <button
          key={el.name}
          onClick={() => setOpcaoEscolhida(el.value)}
          className={clsx(
            "flex flex-grow justify-center p-1 text-black",
            opcaoEscolhida == el.value && `bg-blue-400 text-white`,
            !(i == opcoes.length - 1) && "border-r"
          )}
        >
          {el.name}
        </button>
      ))}
    </div>
  );
}
